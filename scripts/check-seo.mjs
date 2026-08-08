import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const OUT_DIR = path.join(__dirname, "..", ".next-prod")

const DOMAIN_RAW = "instituteofunderwriting.com"
const BANNED_WORD = "Institute"
const IGNORED_BANNED_CONTEXT = DOMAIN_RAW.toLowerCase()

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback)
    } else if (fullPath.endsWith(".html")) {
      callback(fullPath)
    }
  }
}

function checkBannedString(content, filePath) {
  const regex = new RegExp(BANNED_WORD, "gi")
  let match
  while ((match = regex.exec(content)) !== null) {
    const start = Math.max(0, match.index - 20)
    const end = Math.min(content.length, match.index + BANNED_WORD.length + 20)
    const context = content.substring(start, end).toLowerCase()

    if (!context.includes(IGNORED_BANNED_CONTEXT)) {
      console.error(`❌ Banned word "${BANNED_WORD}" found in ${filePath}`)
      console.error(`   Context: ...${content.substring(start, end)}...`)
      process.exit(1)
    }
  }
}

function checkSeo() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error("❌ Build output directory (.next-prod) not found.")
    process.exit(1)
  }

  let errors = 0
  let htmlFiles = 0

  walkDir(OUT_DIR, (filePath) => {
    // skip internal Next.js files
    if (filePath.includes("_next")) return

    htmlFiles++
    const content = fs.readFileSync(filePath, "utf-8")
    const relativePath = path.relative(OUT_DIR, filePath)

    // Compliance Check
    checkBannedString(content, filePath)

    // Quick regex checks since we don't have cheerio
    const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/)
    const descMatch =
      content.match(
        /<meta[^>]*name=(["'])description\1[^>]*content=(["'])(.*?)\2/i
      ) ||
      content.match(
        /<meta[^>]*content=(["'])(.*?)\1[^>]*name=(["'])description\3/i
      )

    if (!titleMatch || !titleMatch[1]) {
      console.error(`❌ ${relativePath}: Missing title tag`)
      errors++
    } else if (titleMatch[1].length > 60) {
      console.error(
        `❌ ${relativePath}: Title exceeds 60 characters (${titleMatch[1].length})`
      )
      errors++
    }

    const desc = descMatch ? descMatch[3] || descMatch[2] : null
    if (!desc) {
      console.error(`❌ ${relativePath}: Missing meta description`)
      errors++
    } else if (desc.length < 120 || desc.length > 160) {
      console.error(
        `❌ ${relativePath}: Meta description length (${desc.length}) not between 120 and 160 characters`
      )
      errors++
    }

    const h1Matches = content.match(/<h1[^>]*>/gi)
    if (!h1Matches || h1Matches.length !== 1) {
      console.error(
        `❌ ${relativePath}: Must have exactly one h1 (found ${h1Matches ? h1Matches.length : 0})`
      )
      errors++
    }

    if (!content.includes('rel="canonical"')) {
      console.error(`❌ ${relativePath}: Missing canonical link`)
      errors++
    }

    if (
      !content.includes('property="og:title"') ||
      !content.includes('property="og:description"')
    ) {
      console.error(`❌ ${relativePath}: Missing Open Graph tags`)
      errors++
    }

    if (
      !content.includes('name="twitter:card" content="summary_large_image"')
    ) {
      console.error(
        `❌ ${relativePath}: twitter:card must be summary_large_image`
      )
      errors++
    }

    if (
      !content.includes("<html") ||
      (!content.includes('lang="en"') && !content.includes("lang='en'"))
    ) {
      console.error(`❌ ${relativePath}: Missing html lang attribute`)
      errors++
    }

    if (!content.includes('type="application/ld+json"')) {
      console.error(`❌ ${relativePath}: Missing JSON-LD structured data`)
      errors++
    }
  })

  if (htmlFiles === 0) {
    console.error("❌ No HTML files found to check.")
    errors++
  }

  if (errors > 0) {
    console.error(`\n❌ SEO check failed with ${errors} errors.`)
    process.exit(1)
  }

  console.log("✅ All SEO and compliance checks passed!")
}

checkSeo()
