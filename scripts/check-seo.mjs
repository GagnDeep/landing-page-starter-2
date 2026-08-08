import fs from "fs"
import path from "path"
import { load } from "cheerio"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, "..", "out")

if (!fs.existsSync(outDir)) {
  console.log("No outDir found, run `pnpm build` first.")
  process.exit(0)
}

const bannedStrings = ["lorem ipsum", "TODO", "FIXME"]

let errors = 0

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f)
    const isDirectory = fs.statSync(dirPath).isDirectory()
    if (isDirectory) {
      walkDir(dirPath, callback)
    } else {
      if (f.endsWith(".html")) {
        // Skip Next.js internal / error pages
        if (
          f === "_global-error.html" ||
          f === "_not-found.html" ||
          f === "404.html" ||
          f === "500.html"
        )
          return
        callback(path.join(dir, f))
      }
    }
  })
}

walkDir(outDir, (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8")
  const $ = load(content)

  const routeName = filePath.replace(outDir, "").replace(".html", "")

  // Check h1s
  const h1s = $("h1")
  if (h1s.length !== 1) {
    console.error(
      `[SEO] ${routeName}: Found ${h1s.length} <h1> tags. Expected exactly 1.`
    )
    errors++
  }

  // Meta description
  const metaDesc = $('meta[name="description"]').attr("content")
  if (!metaDesc) {
    console.error(`[SEO] ${routeName}: Missing meta description.`)
    errors++
  } else if (metaDesc.length < 120 || metaDesc.length > 160) {
    console.warn(
      `[SEO] ${routeName}: Meta description length (${metaDesc.length}) outside 120-160 chars.`
    )
    // Warnings are non-fatal for now, but logged.
  }

  // Canonical
  const canonical = $('link[rel="canonical"]').attr("href")
  if (!canonical) {
    console.error(`[SEO] ${routeName}: Missing canonical link.`)
    errors++
  }

  // Open Graph
  const ogTitle = $('meta[property="og:title"]').attr("content")
  if (!ogTitle) {
    console.error(`[SEO] ${routeName}: Missing og:title.`)
    errors++
  }

  const ogDesc = $('meta[property="og:description"]').attr("content")
  if (!ogDesc) {
    console.error(`[SEO] ${routeName}: Missing og:description.`)
    errors++
  }

  const ogType = $('meta[property="og:type"]').attr("content")
  if (!ogType) {
    console.error(`[SEO] ${routeName}: Missing og:type.`)
    errors++
  }

  const ogUrl = $('meta[property="og:url"]').attr("content")
  if (!ogUrl) {
    console.error(`[SEO] ${routeName}: Missing og:url.`)
    errors++
  }

  const ogImage = $('meta[property="og:image"]').attr("content")
  if (!ogImage) {
    console.error(`[SEO] ${routeName}: Missing og:image.`)
    errors++
  }

  // Twitter Card
  const twitterCard = $('meta[name="twitter:card"]').attr("content")
  if (twitterCard !== "summary_large_image") {
    console.error(
      `[SEO] ${routeName}: twitter:card is not summary_large_image.`
    )
    errors++
  }

  // HTML Lang
  const htmlLang = $("html").attr("lang")
  if (!htmlLang) {
    console.error(`[SEO] ${routeName}: Missing html lang.`)
    errors++
  }

  // Banned strings
  const textContent = $("body").text().toLowerCase()
  for (const banned of bannedStrings) {
    if (textContent.includes(banned.toLowerCase())) {
      console.error(`[SEO] ${routeName}: Found banned string "${banned}".`)
      errors++
    }
  }

  // Word Floors
  // Home page > 1800 words
  // About > 900 words
  const words = textContent.split(/\s+/).length
  if (routeName === "/index" && words < 1800) {
    console.warn(
      `[SEO] ${routeName}: Word count (${words}) is under 1800 floor requirement, warning only.`
    )
  }
  if (routeName === "/about" && words < 900) {
    console.warn(
      `[SEO] ${routeName}: Word count (${words}) is under 900 floor requirement, warning only.`
    )
  }
})

if (errors > 0) {
  console.error(`\n[SEO] ${errors} errors found.`)
  process.exit(1)
} else {
  console.log("[SEO] All checks passed.")
}
