#!/usr/bin/env node

import fs from "fs"
import path from "path"
import { globSync } from "glob"
import * as cheerio from "cheerio"

const outDir = path.resolve(process.cwd(), ".next-prod") // Out dir used in production

// If outDir does not exist, look for .next-dev, otherwise fail
let targetDir = outDir
if (!fs.existsSync(targetDir)) {
  targetDir = path.resolve(process.cwd(), ".next-dev")
  if (!fs.existsSync(targetDir)) {
    targetDir = path.resolve(process.cwd(), ".next")
  }
}

if (!fs.existsSync(targetDir)) {
  console.log("Output directory not found. Please run build first.")
  process.exit(1)
}

const htmlFiles = globSync(`${targetDir}/server/app/**/*.html`)

let hasError = false
const errors = []

function logError(file, message) {
  errors.push(`[${path.relative(process.cwd(), file)}] ${message}`)
  hasError = true
}

const bannedStrings = ["lorem ipsum", "todo", "fixme"]

htmlFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8")
  const $ = cheerio.load(content)

  // 1. One H1 per page
  const h1s = $("h1")
  if (h1s.length !== 1) {
    logError(file, `Must have exactly one <h1>, found ${h1s.length}`)
  }

  // 2. Title length (1-60)
  const title = $("title").text()
  if (!title) {
    logError(file, "Missing <title>")
  } else if (title.length > 60) {
    logError(file, `<title> is too long (${title.length} chars, max 60)`)
  }

  // 3. Meta description length (120-160)
  const desc = $('meta[name="description"]').attr("content")
  if (!desc) {
    logError(file, 'Missing <meta name="description">')
  } else if (desc.length < 120 || desc.length > 160) {
    logError(
      file,
      `Meta description length (${desc.length}) should be between 120 and 160 characters.`
    )
  }

  // 4. Canonical link
  const canonical = $('link[rel="canonical"]').attr("href")
  // We skip canonical strict check here if it's dynamic/generated in next.js but ideally it must exist
  if (!canonical && !file.includes("not-found")) {
    logError(file, 'Missing <link rel="canonical">')
  }

  // 5. Open Graph tags
  const ogTitle = $('meta[property="og:title"]').attr("content")
  const ogDesc = $('meta[property="og:description"]').attr("content")
  const ogType = $('meta[property="og:type"]').attr("content")
  const ogUrl = $('meta[property="og:url"]').attr("content")
  const ogImage = $('meta[property="og:image"]').attr("content")

  if (!ogTitle) logError(file, "Missing og:title")
  if (!ogDesc) logError(file, "Missing og:description")
  if (!ogType) logError(file, "Missing og:type")
  if (!ogUrl) logError(file, "Missing og:url")
  if (!ogImage) logError(file, "Missing og:image")

  // 6. Twitter card
  const twitterCard = $('meta[name="twitter:card"]').attr("content")
  if (twitterCard !== "summary_large_image") {
    logError(file, 'twitter:card must be "summary_large_image"')
  }

  // 7. HTML lang
  const lang = $("html").attr("lang")
  if (!lang) {
    logError(file, "Missing lang attribute on <html>")
  }

  // 8. Banned strings
  const textContent = $("body").text().toLowerCase()
  bannedStrings.forEach((banned) => {
    if (textContent.includes(banned)) {
      logError(file, `Contains banned string: "${banned}"`)
    }
  })

  // 9. JSON-LD checks
  const jsonLdScripts = $('script[type="application/ld+json"]')
  if (jsonLdScripts.length > 0) {
    jsonLdScripts.each((_, el) => {
      try {
        const data = JSON.parse($(el).html())
        const types = Array.isArray(data)
          ? data.map((d) => d["@type"])
          : [data["@type"]]

        if (
          file.endsWith("/index.html") &&
          (!types.includes("Organization") || !types.includes("WebSite"))
        ) {
          logError(
            file,
            "Home page must contain Organization and WebSite structured data"
          )
        }
        // Add other schema checks based on path here if needed
      } catch {
        logError(file, "Invalid JSON-LD format")
      }
    })
  } else if (!file.includes("not-found")) {
    logError(file, "Missing JSON-LD structured data")
  }
})

if (hasError) {
  console.error("SEO checks failed:")
  errors.forEach((err) => console.error(err))
  process.exit(1)
} else {
  console.log("SEO checks passed.")
  process.exit(0)
}
