#!/usr/bin/env node

import { readdirSync, readFileSync, statSync, existsSync } from "fs"
import { join } from "path"

const ROOT = process.cwd()
const OUT_DIR = join(ROOT, ".next-prod")

if (!existsSync(OUT_DIR)) {
  console.log("No .next-prod/ directory found. Skipping SEO check.")
  process.exit(0)
}

let hasErrors = false

function walk(dir) {
  const files = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      files.push(...walk(full))
    } else if (full.endsWith(".html")) {
      files.push(full)
    }
  }
  return files
}

function checkHtmlFile(filePath) {
  const content = readFileSync(filePath, "utf-8")
  const errors = []

  // Skip some Next.js internal pages if needed like 404, etc
  if (filePath.endsWith("404.html") || filePath.endsWith("_not-found.html")) {
    return
  }

  // Check h1
  const h1Match = content.match(/<h1[^>]*>.*?<\/h1>/gs)
  if (!h1Match) {
    errors.push("Missing <h1> tag.")
  } else if (h1Match.length > 1) {
    errors.push(`Multiple <h1> tags found: ${h1Match.length}`)
  }

  // Check title
  const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/)
  if (!titleMatch) {
    errors.push("Missing <title> tag.")
  } else {
    const title = titleMatch[1]
    if (title.length > 60) {
      errors.push(`Title too long (${title.length} chars, max 60): "${title}"`)
    }
  }

  // Check meta description
  const metaDescMatch = content.match(
    /<meta[^>]*name="description"[^>]*content="([^"]*)"/i
  )
  if (!metaDescMatch) {
    errors.push("Missing meta description.")
  } else {
    const desc = metaDescMatch[1]
    if (desc.length < 120 || desc.length > 160) {
      errors.push(
        `Meta description length invalid (${desc.length} chars, expected 120-160).`
      )
    }
  }

  // Check canonical link
  const canonicalMatch = content.match(
    /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i
  )
  if (!canonicalMatch) {
    errors.push("Missing absolute canonical link.")
  } else if (!canonicalMatch[1].startsWith("http")) {
    errors.push(`Canonical link is not absolute: ${canonicalMatch[1]}`)
  }

  // Check Open Graph tags
  const requiredOgTags = [
    "og:title",
    "og:description",
    "og:type",
    "og:url",
    "og:image",
  ]
  for (const tag of requiredOgTags) {
    const regex = new RegExp(`<meta[^>]*property="${tag}"`, "i")
    if (!regex.test(content)) {
      errors.push(`Missing Open Graph tag: ${tag}`)
    }
  }

  // Check twitter card
  if (
    !/<meta[^>]*name="twitter:card"[^>]*content="summary_large_image"/i.test(
      content
    )
  ) {
    errors.push(
      "Missing or invalid twitter:card (must be summary_large_image)."
    )
  }

  // Check html lang
  if (!/<html[^>]*lang="[^"]+"/i.test(content)) {
    errors.push("Missing lang attribute on <html> tag.")
  }

  // Check JSON-LD
  if (!/<script[^>]*type="application\/ld\+json"[^>]*>/i.test(content)) {
    errors.push("Missing JSON-LD structured data.")
  }

  // Check banned strings
  const lowerContent = content.toLowerCase()
  if (lowerContent.includes("lorem ipsum")) {
    errors.push('Contains banned string "lorem ipsum".')
  }
  if (content.includes("TODO")) {
    errors.push('Contains banned string "TODO".')
  }
  if (content.includes("FIXME")) {
    errors.push('Contains banned string "FIXME".')
  }

  // Schema validations
  if (
    content.includes('"@type":"Organization"') &&
    !filePath.endsWith("index.html")
  ) {
    errors.push("Organization schema should only be on the homepage.")
  }
  if (
    content.includes('"@type":"WebSite"') &&
    !filePath.endsWith("index.html")
  ) {
    errors.push("WebSite schema should only be on the homepage.")
  }
  if (
    !filePath.endsWith("index.html") &&
    !content.includes('"@type":"BreadcrumbList"')
  ) {
    errors.push("Missing BreadcrumbList schema on non-root page.")
  }

  if (errors.length > 0) {
    console.error(`Errors in ${filePath}:`)
    for (const err of errors) {
      console.error(`  - ${err}`)
    }
    hasErrors = true
  }
}

const htmlFiles = walk(OUT_DIR)
for (const file of htmlFiles) {
  checkHtmlFile(file)
}

// Check sitemap and robots
if (!existsSync(join(OUT_DIR, "sitemap.xml"))) {
  console.error("Missing sitemap.xml")
  hasErrors = true
}
if (!existsSync(join(OUT_DIR, "robots.txt"))) {
  console.error("Missing robots.txt")
  hasErrors = true
}

if (hasErrors) {
  console.error("SEO checks failed.")
  process.exit(1)
} else {
  console.log("SEO checks passed.")
}
