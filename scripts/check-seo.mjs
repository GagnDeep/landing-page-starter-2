import fs from "fs"
import path from "path"

function getFiles(dir, ext = ".html", files = []) {
  if (!fs.existsSync(dir)) return files
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    if (
      fs.statSync(fullPath).isDirectory() &&
      item !== "_next" &&
      item !== "server"
    ) {
      getFiles(fullPath, ext, files)
    } else if (
      fullPath.endsWith(ext) &&
      !fullPath.includes("/_not-found") &&
      !fullPath.includes("/server/")
    ) {
      files.push(fullPath)
    }
  }
  return files
}

// If `out` directory exists, check it. Otherwise fallback to `.next-prod` or `.next`
let outDir = path.join(process.cwd(), "out")
if (!fs.existsSync(outDir)) {
  outDir = path.join(process.cwd(), ".next-prod")
  if (!fs.existsSync(outDir)) {
    outDir = path.join(process.cwd(), ".next")
  }
}
const files = getFiles(outDir)

let errors = 0

function assert(condition, file, message) {
  if (!condition) {
    console.error(`❌ [${path.relative(outDir, file)}] ${message}`)
    errors++
  }
}

if (files.length === 0) {
  console.error(`No HTML files found in ${outDir}. Did you run build?`)
  process.exit(1)
}

const bannedStrings = ["lorem ipsum", "TODO", "FIXME"]
const bannedSchemas = ["NewsArticle"]

// Track links for internal linking law
const graph = new Map()

for (const file of files) {
  const relativePath = path.relative(outDir, file).replace(/\\/g, "/")
  const is404 =
    relativePath.includes("404") || relativePath.includes("not-found")

  // Create a clean URL path representing this file. e.g., 'about/index.html' -> '/about/'
  let routePath = "/"
  if (relativePath !== "index.html" && !is404) {
    routePath =
      "/" + relativePath.replace(/\/index\.html$/, "/").replace(/\.html$/, "/")
  }

  const content = fs.readFileSync(file, "utf8")

  // Extract all hrefs
  const linkMatches = content.matchAll(/<a[^>]*href="([^"]+)"[^>]*>/g)
  const links = new Set()
  for (const match of linkMatches) {
    let href = match[1]
    if (href.startsWith("http")) continue // external
    if (href.startsWith("#")) continue // anchor

    // Normalize href to have trailing slash for comparison if it's not a file
    if (!href.endsWith("/") && !href.includes(".")) href += "/"
    links.add(href)
  }

  if (!is404) {
    graph.set(routePath, links)
  }

  // --- Check SEO Constraints ---

  // H1
  const h1Matches = content.match(/<h1[^>]*>.*?<\/h1>/gs)
  assert(
    h1Matches && h1Matches.length === 1,
    file,
    "Must have exactly one <h1>"
  )

  // Title
  const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/s)
  assert(titleMatch, file, "Must have a <title>")
  if (titleMatch) {
    const titleLen = titleMatch[1].length
    assert(
      titleLen > 0 && titleLen <= 60,
      file,
      `Title length ${titleLen} must be <= 60 characters`
    )
  }

  // Meta description
  const descMatch =
    content.match(/<meta[^>]*name="description"[^>]*content="(.*?)"[^>]*>/i) ||
    content.match(/<meta[^>]*content="(.*?)"[^>]*name="description"[^>]*>/i)
  assert(descMatch, file, "Must have a meta description")
  if (descMatch) {
    const descLen = descMatch[1].length
    assert(
      descLen >= 120 && descLen <= 160,
      file,
      `Meta description length ${descLen} must be between 120 and 160 characters. Actual: ${descMatch[1]}`
    )
  }

  // Canonical link
  const canonicalMatch =
    content.match(/<link[^>]*rel="canonical"[^>]*href="(.*?)"[^>]*>/i) ||
    content.match(/<link[^>]*href="(.*?)"[^>]*rel="canonical"[^>]*>/i)
  assert(
    canonicalMatch,
    file,
    "Must have an absolute self-referencing canonical link"
  )
  if (canonicalMatch) {
    assert(
      canonicalMatch[1].startsWith("https://aerospaceuae.com"),
      file,
      "Canonical link must be absolute to https://aerospaceuae.com"
    )
  }

  // Open Graph
  assert(
    /<meta[^>]*property="og:title"/i.test(content),
    file,
    "Must have og:title"
  )
  assert(
    /<meta[^>]*property="og:description"/i.test(content),
    file,
    "Must have og:description"
  )
  assert(
    /<meta[^>]*property="og:type"/i.test(content),
    file,
    "Must have og:type"
  )
  assert(/<meta[^>]*property="og:url"/i.test(content), file, "Must have og:url")
  assert(
    /<meta[^>]*property="og:image"/i.test(content),
    file,
    "Must have og:image"
  )

  // Twitter
  const twitterCard =
    content.match(/<meta[^>]*name="twitter:card"[^>]*content="(.*?)"[^>]*>/i) ||
    content.match(/<meta[^>]*content="(.*?)"[^>]*name="twitter:card"[^>]*>/i)
  assert(
    twitterCard && twitterCard[1] === "summary_large_image",
    file,
    "Must have twitter:card set to summary_large_image"
  )

  // HTML Lang
  assert(
    /<html[^>]*lang="en"[^>]*>/i.test(content),
    file,
    'Must have html lang="en"'
  )

  // JSON-LD
  assert(
    /<script[^>]*type="application\/ld\+json"[^>]*>/i.test(content),
    file,
    "Must have valid JSON-LD"
  )

  if (relativePath !== "index.html" && !is404) {
    assert(
      content.includes('"@type":"BreadcrumbList"') ||
        content.includes('"@type": "BreadcrumbList"'),
      file,
      "Pages below root must have BreadcrumbList schema"
    )
  }

  // Banned schemas, strings, themes
  for (const banned of bannedSchemas) {
    assert(
      !content.includes(`"@type":"${banned}"`) &&
        !content.includes(`"@type": "${banned}"`),
      file,
      `Must not contain banned schema type: ${banned}`
    )
  }
  for (const banned of bannedStrings) {
    assert(
      !content.toLowerCase().includes(banned.toLowerCase()),
      file,
      `Must not contain banned string: ${banned}`
    )
  }
  const bannedKeywords = [
    "newsarticle",
    "dateline",
    "weapon",
    "munitions",
    "journalism",
    "incident",
    "contract award",
  ]
  for (const keyword of bannedKeywords) {
    assert(
      !content.toLowerCase().includes(keyword),
      file,
      `Must not contain restricted keyword: ${keyword}`
    )
  }
}

// Check linking laws
// 1. Hub links to every published child
// 2. Child links up to its hub
// 3. Child links across to at least two siblings
// 4. Zero orphan pages
// 5. Max 2 clicks from home

for (const [route, links] of graph.entries()) {
  if (route === "/") continue

  const parts = route.split("/").filter(Boolean)
  const isHub = parts.length === 1
  const isChild = parts.length === 2

  if (isHub) {
    // Hub should link to all its children
    for (const otherRoute of graph.keys()) {
      const otherParts = otherRoute.split("/").filter(Boolean)
      if (otherParts.length === 2 && otherParts[0] === parts[0]) {
        assert(
          links.has(otherRoute),
          route,
          `Hub must link to child: ${otherRoute}`
        )
      }
    }
  }

  if (isChild) {
    // Child must link to its hub
    const hubRoute = `/${parts[0]}/`
    assert(links.has(hubRoute), route, `Child must link up to hub ${hubRoute}`)

    // Child must link to at least 2 siblings
    let siblingLinks = 0
    for (const link of links) {
      if (
        link !== route &&
        link.startsWith(hubRoute) &&
        link.split("/").filter(Boolean).length === 2
      ) {
        siblingLinks++
      }
    }
    assert(
      siblingLinks >= 2,
      route,
      `Child must link to at least 2 siblings. Found ${siblingLinks}.`
    )
  }
}

// Distance from home (max 2 clicks)
const visited = new Set(["/"])
let queue = ["/"]
let clicks = 0

while (queue.length > 0 && clicks <= 2) {
  const nextQueue = []
  for (const node of queue) {
    const edges = graph.get(node)
    if (!edges) continue
    for (const edge of edges) {
      if (graph.has(edge) && !visited.has(edge)) {
        visited.add(edge)
        nextQueue.push(edge)
      }
    }
  }
  queue = nextQueue
  clicks++
}

for (const route of graph.keys()) {
  assert(
    visited.has(route),
    route,
    `Page ${route} is either an orphan or more than 2 clicks from home page.`
  )
}

if (errors > 0) {
  console.error(`\n❌ SEO check failed with ${errors} errors.`)
  process.exit(1)
}

console.log(`\n✅ SEO check passed for ${files.length} pages.`)
