import fs from "fs"
import path from "path"
import * as cheerio from "cheerio"
import { globSync } from "glob"

const OUT_DIR = path.join(process.cwd(), "out")

if (!fs.existsSync(OUT_DIR)) {
  console.error(`Error: out/ directory not found. Run pnpm run build first.`)
  process.exit(1)
}

const htmlFiles = globSync("**/*.html", { cwd: OUT_DIR })
let hasErrors = false

function error(file, message) {
  console.error(`[SEO ERROR] ${file}: ${message}`)
  hasErrors = true
}

const bannedStrings = ["lorem ipsum", "TODO", "FIXME"]
const bannedSchemas = ["FAQPage"] // Example banned schema if no actual FAQ content

const siteUrl = "https://instituteofcatering.com"

const titles = new Set()
const descriptions = new Set()

htmlFiles.forEach((file) => {
  // Ignore 404 pages from strict uniqueness checks as Next.js might output them multiple times (404.html, _not-found.html, etc)
  const is404 =
    file === "404.html" ||
    file === "_not-found.html" ||
    file.includes("404/index.html") ||
    file.includes("_not-found/index.html")

  const filePath = path.join(OUT_DIR, file)
  const content = fs.readFileSync(filePath, "utf-8")
  const $ = cheerio.load(content)

  // 1. One h1
  const h1s = $("h1")
  if (h1s.length !== 1) {
    error(file, `Found ${h1s.length} <h1> tags. Expected exactly 1.`)
  }

  // 2. Headings order (no skipped levels)
  let prevLevel = 1 // Assume starting after h1
  const headings = $("h1, h2, h3, h4, h5, h6")
  headings.each((_, el) => {
    const level = parseInt(el.tagName.substring(1), 10)
    if (level > prevLevel + 1) {
      error(file, `Skipped heading level: from h${prevLevel} to h${level}`)
    }
    prevLevel = level
  })

  // 3. Title unique and <= 60 chars
  const title = $("title").text()
  if (!title) {
    error(file, `Missing <title> tag.`)
  } else {
    if (title.length > 60) {
      error(file, `Title too long: ${title.length} chars (max 60).`)
    }
    if (!is404) {
      if (titles.has(title)) {
        error(file, `Duplicate title found: "${title}"`)
      }
      titles.add(title)
    }
  }

  // 4. Meta description unique and 120-160 chars
  const metaDesc = $("meta[name='description']").attr("content")
  if (!metaDesc) {
    error(file, `Missing meta description.`)
  } else {
    if (metaDesc.length < 120 || metaDesc.length > 160) {
      error(
        file,
        `Meta description length ${metaDesc.length} is not between 120 and 160 chars.`
      )
    }
    if (!is404) {
      if (descriptions.has(metaDesc)) {
        error(file, `Duplicate meta description found.`)
      }
      descriptions.add(metaDesc)
    }
  }

  // 5. Canonical link self-referencing absolute
  const canonical = $("link[rel='canonical']").attr("href")
  let expectedCanonical = `${siteUrl}/${file.replace("index.html", "").replace(".html", "")}`

  if (expectedCanonical.endsWith("/") && expectedCanonical !== `${siteUrl}/`) {
    expectedCanonical = expectedCanonical.slice(0, -1) // handle trailing slashes appropriately based on config
  }

  if (file === "index.html") {
    expectedCanonical = `${siteUrl}`
  } else if (file.endsWith("/index.html")) {
    expectedCanonical = `${siteUrl}/${file.replace("/index.html", "")}`
  }

  if (is404) {
    // Skip canonical validation for the default next.js 404 pages
  } else {
    if (!canonical) {
      error(file, `Missing canonical link.`)
    } else if (
      canonical !== expectedCanonical &&
      canonical !== `${expectedCanonical}/`
    ) {
      error(
        file,
        `Invalid canonical link. Expected ${expectedCanonical} or ${expectedCanonical}/, got ${canonical}`
      )
    }
  }

  // 6. Open Graph tags
  const ogTitle = $("meta[property='og:title']").attr("content")
  const ogDesc = $("meta[property='og:description']").attr("content")
  const ogType = $("meta[property='og:type']").attr("content")
  const ogUrl = $("meta[property='og:url']").attr("content")
  const ogImage = $("meta[property='og:image']").attr("content")

  if (!ogTitle || !ogDesc || !ogType || !ogUrl || !ogImage) {
    error(file, `Missing one or more required Open Graph tags.`)
  }

  // 7. Twitter card
  const twitterCard = $("meta[name='twitter:card']").attr("content")
  if (twitterCard !== "summary_large_image") {
    error(file, `twitter:card is not summary_large_image.`)
  }

  // 8. HTML lang
  if ($("html").attr("lang") !== "en") {
    error(file, `Missing or invalid html lang. Expected "en".`)
  }

  // 9. Banned strings
  bannedStrings.forEach((str) => {
    if (content.toLowerCase().includes(str.toLowerCase())) {
      error(file, `Contains banned string: "${str}"`)
    }
  })

  // 10. Valid JSON-LD and banned schemas
  const scripts = $("script[type='application/ld+json']")
  scripts.each((_, el) => {
    try {
      const json = JSON.parse($(el).html())
      const types = Array.isArray(json)
        ? json.map((j) => j["@type"])
        : [json["@type"]]

      bannedSchemas.forEach((banned) => {
        if (types.includes(banned)) {
          if (
            banned === "FAQPage" &&
            !content.toLowerCase().includes("faq") &&
            !content.toLowerCase().includes("question")
          ) {
            error(
              file,
              `Contains banned schema type: ${banned} without visible Q&A content.`
            )
          }
        }
      })
    } catch (e) {
      error(file, `Invalid JSON-LD format.`)
    }
  })
})

if (hasErrors) {
  console.error("SEO checks failed.")
  process.exit(1)
}

console.log("SEO checks passed.")
