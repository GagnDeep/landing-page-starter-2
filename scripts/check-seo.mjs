import fs from "node:fs/promises"
import path from "node:path"

const OUT_DIR = ".next-prod"

const BANNED_STRINGS = ["lorem ipsum", "TODO", "FIXME"]

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

async function checkSEO() {
  let errors = []
  try {
    const files = await walk(OUT_DIR)
    for (const file of files) {
      if (
        file.includes("404") ||
        file.includes("500") ||
        file.includes("_not-found")
      ) {
        continue
      }
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
    }

    if (errors.length > 0) {
      console.error("SEO Verification Failed:")
      errors.forEach((e) => console.error("  " + e))
      process.exit(1)
    } else {
      console.log("SEO Verification Passed.")
    }
  } catch (err) {
    console.error("Error reading out directory:", err)
    process.exit(1)
  }
}

checkSEO()
