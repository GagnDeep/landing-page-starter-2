import fs from "fs"
import path from "path"

function getFiles(dir, ext = ".html", files = []) {
  if (!fs.existsSync(dir)) return files
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    if (fs.statSync(fullPath).isDirectory() && item !== "_next") {
      getFiles(fullPath, ext, files)
    } else if (fullPath.endsWith(ext) && !fullPath.includes("/_not-found")) {
      files.push(fullPath)
    }
  }
  return files
}

const outDir = path.join(process.cwd(), ".next-prod")
const files = getFiles(outDir)

let errors = 0

function assert(condition, file, message) {
  if (!condition) {
    console.error(`❌ [${path.relative(outDir, file)}] ${message}`)
    errors++
  }
}

if (files.length === 0) {
  console.error("No HTML files found in .next-prod/. Did you run build?")
  process.exit(1)
}

const bannedStrings = ["lorem ipsum", "TODO", "FIXME"]
const bannedSchemas = ["NewsArticle"]

for (const file of files) {
  const content = fs.readFileSync(file, "utf8")

  // Exclude checking 404 for word floors and some strict content rules, but check SEO
  const is404 = file.includes("404") || file.includes("not-found")
  const relativePath = path.relative(outDir, file).replace(/\\/g, "/")

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

  // Banned schemas
  for (const banned of bannedSchemas) {
    assert(
      !content.includes(`"@type":"${banned}"`) &&
        !content.includes(`"@type": "${banned}"`),
      file,
      `Must not contain banned schema type: ${banned}`
    )
  }

  // Banned strings
  for (const banned of bannedStrings) {
    assert(
      !content.toLowerCase().includes(banned.toLowerCase()),
      file,
      `Must not contain banned string: ${banned}`
    )
  }

  // Banned content themes (journalism, weapons, etc)
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

  // BreadcrumbList on every page below root
  if (relativePath !== "index.html" && !is404) {
    assert(
      content.includes('"@type":"BreadcrumbList"') ||
        content.includes('"@type": "BreadcrumbList"'),
      file,
      "Pages below root must have BreadcrumbList schema"
    )
  }
}

if (errors > 0) {
  console.error(`\n❌ SEO check failed with ${errors} errors.`)
  process.exit(1)
}

console.log(`\n✅ SEO check passed for ${files.length} pages.`)
