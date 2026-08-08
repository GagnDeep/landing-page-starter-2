import fs from "fs"
import path from "path"
import { JSDOM } from "jsdom"

const OUT_DIR = path.join(process.cwd(), "out")

const BANNED_STRINGS = [
  "you should buy",
  "we recommend buying",
  "guaranteed return",
  "guaranteed profit",
  "risk-free",
  "beat the market",
  "financial advice",
  "investment advice",
]

const BANNED_JSONLD_TYPES = [
  "FinancialProduct",
  "InvestmentOrDeposit",
  "Product",
  "Offer",
  "AggregateRating",
]

const MANDATORY_PAST_PERF_STRING =
  "past performance does not indicate future results"

let exitCode = 0

function fail(file, message) {
  console.error(`❌ [${file}] ${message}`)
  exitCode = 1
}

function checkFile(filePath) {
  if (!filePath.endsWith(".html")) return
  const relativePath = path.relative(OUT_DIR, filePath)

  // Ignore Next.js server-side generated error files
  if (
    relativePath.includes("_global-error.html") ||
    relativePath.includes("500.html") ||
    relativePath.includes("server/")
  )
    return
  const html = fs.readFileSync(filePath, "utf8")

  if (html.includes("{{VERIFY:")) {
    fail(relativePath, "Contains surviving {{VERIFY: token")
  }

  const dom = new JSDOM(html)
  const document = dom.window.document

  // Title
  const titleEls = document.querySelectorAll("title")
  if (titleEls.length === 0) {
    fail(relativePath, "Missing <title>")
  } else if (titleEls.length > 1) {
    fail(relativePath, "Duplicate <title>")
  } else {
    const title = titleEls[0].textContent
    if (title.length > 60) {
      fail(relativePath, `Title > 60 chars (${title.length})`)
    }
  }

  // Meta Description
  const descEls = document.querySelectorAll("meta[name='description']")
  if (descEls.length === 0) {
    fail(relativePath, "Missing meta description")
  } else if (descEls.length > 1) {
    fail(relativePath, "Duplicate meta description")
  } else {
    const desc = descEls[0].getAttribute("content")
    if (desc.length < 120 || desc.length > 160) {
      fail(
        relativePath,
        `Meta description length out of range 120-160 (${desc.length})`
      )
    }
  }

  // Canonical
  const canonicalEl = document.querySelector("link[rel='canonical']")
  if (!canonicalEl) {
    fail(relativePath, "Missing canonical URL")
  } else {
    const canonicalUrl = canonicalEl.getAttribute("href")
    if (!canonicalUrl.startsWith("http")) {
      fail(relativePath, "Relative canonical URL")
    }
  }

  // OG / Twitter
  const ogTitle = document.querySelector("meta[property='og:title']")
  if (!ogTitle) fail(relativePath, "Missing og:title")
  const twCard = document.querySelector("meta[name='twitter:card']")
  if (!twCard) fail(relativePath, "Missing twitter:card")

  // Headings
  const h1s = document.querySelectorAll("h1")
  if (h1s.length !== 1) {
    fail(relativePath, `Found ${h1s.length} <h1> tags, exactly 1 required`)
  }

  // Check skipped heading levels
  const allHeadings = Array.from(
    document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  )
  let prevLevel = 1
  for (const h of allHeadings) {
    const level = parseInt(h.tagName.substring(1))
    if (level > prevLevel + 1) {
      fail(
        relativePath,
        `Skipped heading level from H${prevLevel} to H${level}`
      )
    }
    prevLevel = level
  }

  // Banned Strings
  const lowerHtml = html.toLowerCase()
  for (const banned of BANNED_STRINGS) {
    // Exclude disclaimers where it says "Not investment advice" or "This site does not provide financial advice"
    const isDisclaimer =
      banned === "investment advice" &&
      lowerHtml.includes("not investment advice")
    const isFinAdvice =
      banned === "financial advice" &&
      lowerHtml.includes("does not provide financial advice")
    if (!isDisclaimer && !isFinAdvice && lowerHtml.includes(banned)) {
      fail(relativePath, `Contains banned string: "${banned}"`)
    }
  }

  // Mandatory Past Performance Language
  const isPerformancePage =
    relativePath.includes("leaderboard") ||
    relativePath.includes("data") ||
    relativePath.includes("reviews/") ||
    relativePath.includes("vs/")
  if (isPerformancePage && !lowerHtml.includes(MANDATORY_PAST_PERF_STRING)) {
    fail(relativePath, "Missing mandatory past performance disclaimer")
  }

  // Affiliate Disclosure above fold check
  const hasAffiliateLinks = lowerHtml.includes("disclosures") // Simplistic check; actual logic might vary
  if (hasAffiliateLinks && !lowerHtml.includes("earn a commission")) {
    fail(relativePath, "Missing affiliate disclosure")
  }

  // JSON-LD
  const jsonLdScripts = document.querySelectorAll(
    "script[type='application/ld+json']"
  )
  for (const script of Array.from(jsonLdScripts)) {
    try {
      const data = JSON.parse(script.textContent)
      const type = data["@type"]
      if (BANNED_JSONLD_TYPES.includes(type)) {
        fail(relativePath, `Contains banned JSON-LD type: ${type}`)
      }
      if (type === "Review" && data.reviewRating) {
        fail(relativePath, `Contains banned JSON-LD Review with reviewRating`)
      }
    } catch (e) {
      fail(relativePath, `Invalid JSON-LD syntax: ${e.message}`)
    }
  }

  // Word Floors
  const textContent = document.body.textContent.replace(/\s+/g, " ").trim()
  const wordCount = textContent.split(" ").length
  if (
    relativePath.includes("methodology") ||
    relativePath.includes("guides/")
  ) {
    if (wordCount < 1800 && relativePath.includes("guides/")) {
      fail(relativePath, `Word count floor breach: ${wordCount} < 1800`)
    }
  }

  // Internal Links
  const internalLinks = Array.from(
    document.querySelectorAll("a[href^='/']")
  ).map((a) => a.getAttribute("href"))
  for (const link of internalLinks) {
    const targetFile =
      link === "/"
        ? "index.html"
        : path.join(link.replace(/^\//, ""), "index.html")
    const fullTargetPath = path.join(OUT_DIR, targetFile)
    const targetFileWithExt = path.join(
      OUT_DIR,
      link.replace(/^\//, "") + ".html"
    )
    if (
      !fs.existsSync(fullTargetPath) &&
      !fs.existsSync(targetFileWithExt) &&
      link !== "/"
    ) {
      fail(relativePath, `Broken internal link: ${link}`)
    }
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath)
    } else {
      checkFile(fullPath)
    }
  }
}

console.log("Checking SEO & Compliance...")
walkDir(OUT_DIR)
if (exitCode === 0) {
  console.log("✅ All checks passed.")
}
process.exit(exitCode)
