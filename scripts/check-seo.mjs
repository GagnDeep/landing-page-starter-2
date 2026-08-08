import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, "../out")

let hasError = false

function error(msg) {
  console.error(`❌ ${msg}`)
  hasError = true
}

if (!fs.existsSync(OUT_DIR)) {
  console.error("out/ directory not found. Please run pnpm build first.")
  process.exit(1)
}

// Banned words check
const BANNED_STRINGS = ["lorem ipsum", "TODO", "FIXME", "NewsArticle"]

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f)
    let isDirectory = fs.statSync(dirPath).isDirectory()
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f))
  })
}

const htmlFiles = []
walkDir(OUT_DIR, (filepath) => {
  if (filepath.endsWith(".html")) {
    htmlFiles.push(filepath)
  }
})

htmlFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8")
  const relPath = path.relative(OUT_DIR, file)

  // Banned strings
  BANNED_STRINGS.forEach((str) => {
    if (content.toLowerCase().includes(str.toLowerCase())) {
      error(`${relPath}: Contains banned string '${str}'`)
    }
  })

  // H1 check
  const h1Match = content.match(/<h1[^>]*>.*?<\/h1>/gi)
  if (!h1Match || h1Match.length !== 1) {
    error(
      `${relPath}: Must have exactly one <h1>. Found ${h1Match ? h1Match.length : 0}`
    )
  }

  // Heading order check (no skipped levels from h1 to h3)
  const headings = [...content.matchAll(/<(h[1-6])[^>]*>/gi)].map((m) =>
    parseInt(m[1].replace("h", ""), 10)
  )
  let prevLevel = 1 // Always start assuming h1 is the first
  for (const level of headings) {
    if (level > prevLevel + 1) {
      error(`${relPath}: Skipped heading level from h${prevLevel} to h${level}`)
    }
    prevLevel = level
  }

  // Title check
  const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/i)
  if (!titleMatch) {
    error(`${relPath}: Missing <title> tag`)
  } else if (titleMatch[1].length > 60) {
    error(`${relPath}: Title too long (${titleMatch[1].length} chars, max 60)`)
  }

  // Meta description check
  const descMatch = content.match(
    /<meta[^>]*name="description"[^>]*content="([^"]*)"/i
  )
  if (!descMatch) {
    error(`${relPath}: Missing meta description`)
  } else if (descMatch[1].length < 120 || descMatch[1].length > 160) {
    error(
      `${relPath}: Meta description length ${descMatch[1].length} not between 120 and 160`
    )
  }

  // Canonical link check
  const canonicalMatch = content.match(
    /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i
  )
  if (!canonicalMatch) {
    error(`${relPath}: Missing canonical link`)
  } else if (!canonicalMatch[1].startsWith("http")) {
    error(`${relPath}: Canonical link must be absolute`)
  }

  // Open Graph checks
  const ogProps = ["title", "description", "type", "url", "image"]
  ogProps.forEach((prop) => {
    const ogMatch = content.match(
      new RegExp(`<meta[^>]*property="og:${prop}"[^>]*content="([^"]*)"`, "i")
    )
    if (!ogMatch) error(`${relPath}: Missing og:${prop}`)
  })

  // Twitter card check
  const twMatch = content.match(
    /<meta[^>]*name="twitter:card"[^>]*content="([^"]*)"/i
  )
  if (!twMatch || twMatch[1] !== "summary_large_image") {
    error(
      `${relPath}: Missing or incorrect twitter:card (must be summary_large_image)`
    )
  }

  // HTML lang check
  const htmlLangMatch = content.match(/<html[^>]*lang="([^"]*)"/i)
  if (!htmlLangMatch) {
    error(`${relPath}: Missing html lang attribute`)
  }

  // JSON-LD schema check
  const jsonLdMatch = content.match(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/i
  )
  if (!jsonLdMatch) {
    error(`${relPath}: Missing JSON-LD structured data`)
  } else {
    try {
      const json = JSON.parse(jsonLdMatch[1])
      const jsonStr = JSON.stringify(json)
      if (jsonStr.includes("NewsArticle")) {
        error(`${relPath}: Uses banned NewsArticle schema`)
      }
    } catch (e) {
      // Ignore parse errors here, assume valid json output by Next.js
    }
  }

  // Word floor check (rough count based on text content)
  const textContent = content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  const wordCount = textContent.split(" ").length

  // Categorize pages based on URL to enforce limits
  let minWords = 0
  if (relPath === "index.html") {
    minWords = 1800 // home is hub/pillar
  } else if (relPath.startsWith("guides/")) {
    if (relPath === "guides/index.html") {
      minWords = 1800 // Hub
    } else {
      minWords = 900 // Spokes/guides
    }
  }

  const exemptPages = [
    "404.html",
    "404/index.html",
    "_not-found/index.html",
    "about/index.html",
    "editorial-policy/index.html",
    "disclaimers/index.html",
    "disclosures/index.html",
  ]
  if (!exemptPages.includes(relPath) && wordCount < minWords) {
    error(
      `${relPath}: Word count ${wordCount} is below strict minimum floor ${minWords}`
    )
  }
})

// Site-wide checks
const sitemapPath = path.join(OUT_DIR, "sitemap.xml")
if (!fs.existsSync(sitemapPath)) {
  error("sitemap.xml not found")
}

const robotsPath = path.join(OUT_DIR, "robots.txt")
if (!fs.existsSync(robotsPath)) {
  error("robots.txt not found")
}

if (hasError) {
  process.exit(1)
} else {
  console.log("✅ SEO checks passed!")
}
