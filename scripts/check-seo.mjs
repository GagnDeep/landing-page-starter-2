import fs from "node:fs/promises"
import path from "node:path"

const OUT_DIR = ".next-prod"

const BANNED_STRINGS = ["lorem ipsum", "TODO", "FIXME"]

const WORD_FLOORS = {
  "/index.html": 1800,
  "/roadmap.html": 900,
  "/about.html": 900,
}

async function walk(dir) {
  let results = []
  const list = await fs.readdir(dir)
  for (const file of list) {
    const filePath = path.join(dir, file)
    const stat = await fs.stat(filePath)
    if (stat.isDirectory()) {
      results = results.concat(await walk(filePath))
    } else if (filePath.endsWith(".html")) {
      results.push(filePath)
    }
  }
  return results
}

function countWords(str) {
  const text = str
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  return text.split(" ").length
}

async function checkSEO() {
  let errors = []
  try {
    const files = await walk(OUT_DIR)

    // Internal linking graph
    const links = {}

    for (const file of files) {
      if (
        file.includes("404") ||
        file.includes("500") ||
        file.includes("_not-found")
      ) {
        continue
      }

      const routePath = "/" + path.relative(OUT_DIR, file)

      const content = await fs.readFile(file, "utf8")

      const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/)
      if (!titleMatch) {
        errors.push(`${file}: Missing <title>`)
      } else if (titleMatch[1].length > 60) {
        errors.push(`${file}: Title exceeds 60 characters ("${titleMatch[1]}")`)
      }

      const descMatch = content.match(
        /<meta\s+name="description"\s+content="([^"]+)"/
      )
      if (!descMatch) {
        errors.push(`${file}: Missing meta description`)
      } else {
        const len = descMatch[1].length
        if (len < 120 || len > 160) {
          errors.push(
            `${file}: Meta description length ${len} is not between 120 and 160`
          )
        }
      }

      const h1Matches = content.match(/<h1[^>]*>.*?<\/h1>/gi)
      if (!h1Matches) {
        errors.push(`${file}: Missing <h1>`)
      } else if (h1Matches.length > 1) {
        errors.push(`${file}: Multiple <h1> tags found (${h1Matches.length})`)
      }

      for (const banned of BANNED_STRINGS) {
        if (content.toLowerCase().includes(banned.toLowerCase())) {
          errors.push(`${file}: Contains banned string "${banned}"`)
        }
      }

      // Check word floors
      const words = countWords(content)
      const floor = WORD_FLOORS[routePath]
      if (floor && words < floor) {
        errors.push(`${file}: Word count ${words} is below floor of ${floor}`)
      }

      // Collect links for graph
      const hrefRegex = /<a[^>]+href="([^"]+)"/g
      let match
      links[routePath] = []
      while ((match = hrefRegex.exec(content)) !== null) {
        const href = match[1]
        // Only internal links, normalize
        if (
          href.startsWith("/") ||
          href.startsWith("http://localhost") ||
          href.startsWith("https://handpano.com")
        ) {
          let normalized = href.replace(/^https?:\/\/[^\/]+/, "").split("#")[0]
          if (normalized === "") normalized = "/"
          if (normalized === "/about") normalized = "/about.html"
          if (normalized === "/roadmap") normalized = "/roadmap.html"
          if (normalized === "/") normalized = "/index.html"
          if (!links[routePath].includes(normalized)) {
            links[routePath].push(normalized)
          }
        }
      }
    }

    // Linking rules checks
    // 1. No orphans
    // 2. Hub (index) links to every child
    // 3. Children link up to hub
    // 4. Children link across to siblings (about -> roadmap, roadmap -> about)

    const indexNode = "/index.html"
    if (links[indexNode]) {
      const requiredHubLinks = ["/about.html", "/roadmap.html"]
      for (const req of requiredHubLinks) {
        if (!links[indexNode].includes(req)) {
          errors.push(`Linking Error: Hub ${indexNode} does not link to ${req}`)
        }
      }
    }

    const children = ["/about.html", "/roadmap.html"]
    for (const child of children) {
      if (links[child]) {
        if (!links[child].includes(indexNode)) {
          errors.push(
            `Linking Error: Child ${child} does not link to hub ${indexNode}`
          )
        }
        const siblings = children.filter((c) => c !== child)
        for (const sib of siblings) {
          if (!links[child].includes(sib)) {
            errors.push(
              `Linking Error: Child ${child} does not link across to sibling ${sib}`
            )
          }
        }
      }
    }

    if (errors.length > 0) {
      console.error("SEO Verification Failed:")
      errors.forEach((e) => console.error("  " + e))
      process.exit(1)
    } else {
      console.log("SEO Verification Passed. Linking and word floors compliant.")
    }
  } catch (err) {
    console.error("Error reading out directory:", err)
    process.exit(1)
  }
}

checkSEO()
