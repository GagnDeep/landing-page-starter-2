#!/usr/bin/env node

import fs from "fs"
import path from "path"
import { globSync } from "glob"
import * as cheerio from "cheerio"

const outDir = path.join(process.cwd(), ".next-prod")
if (!fs.existsSync(outDir)) {
  console.error(`Output directory ${outDir} not found. Run pnpm build first.`)
  process.exit(1)
}

const htmlFiles = globSync("**/*.html", { cwd: outDir })

let failed = false

function error(file, message) {
  console.error(`[SEO] ${file}: ${message}`)
  failed = true
}

const wordFloors = {
  "/": 1800,
  "/roadmap": 900, // Conversion target hub/spoke minimum
}

const bannedStrings = ["lorem ipsum", "TODO", "FIXME"]

htmlFiles.forEach((file) => {
  // Skip _not-found, 404, 500, fallback pages and global-error
  if (
    file.includes("404") ||
    file.includes("500") ||
    file.includes("_not-found") ||
    file.includes("_global-error")
  ) {
    return
  }

  const filePath = path.join(outDir, file)
  const content = fs.readFileSync(filePath, "utf-8")
  const $ = cheerio.load(content)

  // Normalize route path
  let routePath = file
    .replace(/^server\/app\//, "")
    .replace(/^server\/pages\//, "")
    .replace(/index\.html$/, "")
    .replace(/\.html$/, "")
  routePath = "/" + routePath
  if (routePath === "//") routePath = "/"
  if (routePath.endsWith("/") && routePath !== "/")
    routePath = routePath.slice(0, -1)

  // 1. Title uniqueness and length (<= 60)
  const title = $("title").text()
  if (!title) error(file, "Missing <title> tag")
  else if (title.length > 60)
    error(file, `Title too long (${title.length} chars, max 60)`)

  // 2. Meta description (120-160)
  const desc = $('meta[name="description"]').attr("content")
  if (!desc) error(file, "Missing meta description")
  else if (desc.length < 120 || desc.length > 160) {
    error(
      file,
      `Meta description length ${desc.length} invalid (must be 120-160 chars)`
    )
  }

  // 3. Exactly one H1
  const h1s = $("h1")
  if (h1s.length !== 1)
    error(file, `Expected exactly 1 <h1>, found ${h1s.length}`)

  // 4. Absolute self-referencing canonical
  const canonical = $('link[rel="canonical"]').attr("href")
  if (!canonical || !canonical.startsWith("https://")) {
    error(file, "Missing or invalid absolute canonical link")
  }

  // 5. Open Graph tags
  const ogTitle = $('meta[property="og:title"]').attr("content")
  const ogDesc = $('meta[property="og:description"]').attr("content")
  const ogType = $('meta[property="og:type"]').attr("content")
  const ogUrl = $('meta[property="og:url"]').attr("content")
  const ogImage = $('meta[property="og:image"]').attr("content")

  if (!ogTitle) error(file, "Missing og:title")
  if (!ogDesc) error(file, "Missing og:description")
  if (!ogType) error(file, "Missing og:type")
  if (!ogUrl) error(file, "Missing og:url")
  if (!ogImage) error(file, "Missing og:image")

  // 6. Twitter card
  const twCard = $('meta[name="twitter:card"]').attr("content")
  if (twCard !== "summary_large_image")
    error(file, 'twitter:card must be "summary_large_image"')

  // 7. HTML Lang
  const lang = $("html").attr("lang")
  if (!lang) error(file, "Missing html lang attribute")

  // 8. Banned Strings
  bannedStrings.forEach((banned) => {
    if (content.toLowerCase().includes(banned.toLowerCase())) {
      error(file, `Found banned string: ${banned}`)
    }
  })

  // 9. Word count floor
  const textContent = $("body").text().replace(/\s+/g, " ").trim()
  const wordCount = textContent.split(" ").length
  const floor = wordFloors[routePath] || 0
  if (wordCount < floor) {
    error(
      file,
      `Word count ${wordCount} is below floor of ${floor} for route ${routePath}`
    )
  }

  // 10. JSON-LD checking
  const jsonLdScripts = $('script[type="application/ld+json"]')
  let hasOrganizationOrWebSite = false
  let hasBreadcrumb = false
  jsonLdScripts.each((_, script) => {
    try {
      const data = JSON.parse($(script).html())
      // Handle array of objects or single object
      const items = Array.isArray(data) ? data : [data]
      items.forEach((item) => {
        const type = item["@type"]
        if (type === "Organization" || type === "WebSite")
          hasOrganizationOrWebSite = true
        if (type === "BreadcrumbList") hasBreadcrumb = true
      })
    } catch {
      error(file, "Invalid JSON-LD syntax")
    }
  })

  // Home gets Organization/WebSite; deep gets Breadcrumb
  if (routePath === "/") {
    if (!hasOrganizationOrWebSite) {
      error(file, "Home page missing Organization or WebSite JSON-LD")
    }
  } else {
    if (!hasBreadcrumb) {
      error(
        file,
        `Deep page missing BreadcrumbList JSON-LD for route ${routePath}`
      )
    }
  }
})

if (failed) {
  process.exit(1)
} else {
  console.log("SEO checks passed.")
}
