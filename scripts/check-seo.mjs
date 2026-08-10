import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import * as cheerio from "cheerio"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, "../out")

const BANNED_STRINGS = ["lorem ipsum", "TODO", "FIXME"]
const REQUIRED_SECTIONS = 10
const WORD_FLOOR_HOME = 1800
const WORD_FLOOR_HUB = 1800
const WORD_FLOOR_REVIEW = 1200

let hasErrors = false

function error(msg) {
  console.error(`❌ ${msg}`)
  hasErrors = true
}

const allUrls = []

function collectUrls(dir) {
  if (!fs.existsSync(dir)) return
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      collectUrls(fullPath)
    } else if (fullPath.endsWith(".html") && !fullPath.includes("404") && !fullPath.includes("_not-found")) {
      let relativePath = "/" + path.relative(OUT_DIR, fullPath).replace(/\\/g, "/")
      if (relativePath.endsWith("index.html")) {
        relativePath = relativePath.replace("index.html", "")
      }
      if (!relativePath.endsWith("/")) relativePath += "/"
      if (relativePath === "//") relativePath = "/"
      allUrls.push(relativePath)
    }
  })
}

const parsedFiles = []

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8")
  let relativePath = "/" + path.relative(OUT_DIR, filePath).replace(/\\/g, "/")
  if (relativePath.endsWith("index.html")) relativePath = relativePath.replace("index.html", "")
  if (!relativePath.endsWith("/")) relativePath += "/"
  if (relativePath === "//") relativePath = "/"

  const $ = cheerio.load(content)

  // Basic SEO Tags
  const title = $("title").text()
  if (!title || title.length > 60) {
    error(`${relativePath}: Missing title or title > 60 chars.`)
  }

  const metaDesc = $('meta[name="description"]').attr("content")
  if (!metaDesc || metaDesc.length < 120 || metaDesc.length > 160) {
    error(`${relativePath}: Meta description must be 120-160 chars.`)
  }

  const h1s = $("h1")
  if (h1s.length !== 1) {
    error(`${relativePath}: Must have exactly one H1 tag (found ${h1s.length}).`)
  }

  const canonical = $('link[rel="canonical"]').attr("href")
  if (!canonical || !canonical.startsWith("http")) {
    error(`${relativePath}: Missing or invalid canonical link.`)
  }

  // Open Graph & Twitter
  const ogTitle = $('meta[property="og:title"]').attr("content")
  if (!ogTitle) error(`${relativePath}: Missing og:title`)
  const ogDesc = $('meta[property="og:description"]').attr("content")
  if (!ogDesc) error(`${relativePath}: Missing og:description`)
  const ogType = $('meta[property="og:type"]').attr("content")
  if (!ogType) error(`${relativePath}: Missing og:type`)
  const ogUrl = $('meta[property="og:url"]').attr("content")
  if (!ogUrl) error(`${relativePath}: Missing og:url`)
  const ogImage = $('meta[property="og:image"]').attr("content")
  if (!ogImage) error(`${relativePath}: Missing og:image`)
  const twitterCard = $('meta[name="twitter:card"]').attr("content")
  if (twitterCard !== "summary_large_image") {
    error(`${relativePath}: twitter:card must be summary_large_image`)
  }
  const lang = $("html").attr("lang")
  if (!lang) {
    error(`${relativePath}: html tag missing lang attribute.`)
  }

  // JSON-LD
  const jsonLd = $('script[type="application/ld+json"]')
  if (jsonLd.length === 0) {
    error(`${relativePath}: Missing JSON-LD structured data.`)
  }

  // Banned Strings
  BANNED_STRINGS.forEach(str => {
    if (new RegExp(str, "i").test(content)) {
      error(`${relativePath}: Contains banned string: "${str}"`)
    }
  })

  const textContent = $("body").text().replace(/\s+/g, " ").trim()
  const wordCount = textContent.split(" ").length

  // Specific page logic
  if (relativePath === "/") {
    const sections = $("main > section")
    if (sections.length < REQUIRED_SECTIONS) {
      error(`index.html: Home page must have at least ${REQUIRED_SECTIONS} sections (found ${sections.length}).`)
    }
    let prevBgClass = null
    sections.each((i, el) => {
      const cls = $(el).attr("class") || ""
      const isBgBackground = cls.includes("bg-background")
      const isBgMuted = cls.includes("bg-muted")
      const currentBgClass = isBgBackground ? "bg-background" : isBgMuted ? "bg-muted" : null

      if (prevBgClass && currentBgClass && prevBgClass === currentBgClass) {
        error(`index.html: Adjacent sections share the same background class: ${currentBgClass}`)
      }
      prevBgClass = currentBgClass

      const hasVisual = $(el).find("svg, table").length > 0
      if (!hasVisual) {
        error(`index.html: Section ${i + 1} is missing an svg, icon, or table element.`)
      }
    })

    let largeSvgs = 0
    $("main svg").each((i, el) => {
        const w = parseInt($(el).attr("width") || "0", 10)
        if (w > 50 || $(el).attr("viewBox") === "0 0 200 200" || $(el).attr("viewBox") === "0 0 240 240") largeSvgs++
    })
    if (largeSvgs < 3) {
      error(`index.html: Must contain at least 3 distinct inline svg graphics (found ${largeSvgs}).`)
    }

    if (wordCount < WORD_FLOOR_HOME) {
      error(`index.html: Word count is ${wordCount}, must be >= ${WORD_FLOOR_HOME}`)
    }
  }

  if (relativePath.includes("/hubs/")) {
    if (wordCount < WORD_FLOOR_HUB) {
      error(`${relativePath}: Word count is ${wordCount}, must be >= ${WORD_FLOOR_HUB}`)
    }
  }

  if (relativePath.includes("/reviews/")) {
    if (wordCount < WORD_FLOOR_REVIEW) {
      error(`${relativePath}: Word count is ${wordCount}, must be >= ${WORD_FLOOR_REVIEW}`)
    }
  }

  // No paragraph > 120 words
  $("p").each((i, el) => {
    const text = $(el).text().trim()
    if (text) {
      const wCount = text.split(/\s+/).length
      if (wCount > 120) {
        error(`${relativePath}: Paragraph exceeds 120 words (${wCount} words).`)
      }
    }
  })

  // No external images
  $("img").each((i, el) => {
    const src = $(el).attr("src")
    if (src && src.startsWith("http") && !src.includes("images.unsplash.com")) {
      error(`${relativePath}: img points to external host: ${src}`)
    }
  })

  // INTERNAL LINKING CHECKS (Hub & Spoke logic)
  const links = []
  $("a").each((i, el) => {
    let href = $(el).attr("href")
    if (href && href.startsWith("/")) {
      if (!href.endsWith("/")) href += "/"
      links.push(href)
    } else if (href && !href.startsWith("http") && !href.startsWith("#") && !href.startsWith("mailto:")) {
      let resolvedHref = new URL(href, "http://localhost" + relativePath).pathname
      if (!resolvedHref.endsWith("/")) resolvedHref += "/"
      links.push(resolvedHref)
    }
  })

  parsedFiles.push({ path: relativePath, links })
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`Out directory not found: ${dir}. Did you run build?`)
    process.exit(1)
  }
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath)
    } else if (fullPath.endsWith(".html")) {
      if (fullPath.includes("404") || fullPath.includes("_not-found")) return
      checkFile(fullPath)
    }
  })
}

console.log("Running SEO & Design Checks...")
collectUrls(OUT_DIR)
walkDir(OUT_DIR)

// Check 2 clicks from home
const graph = new Map()
parsedFiles.forEach(f => {
  graph.set(f.path, f.links)
})

function bfsDepth(startNode) {
  const depths = new Map()
  const queue = [{ node: startNode, depth: 0 }]
  depths.set(startNode, 0)

  while(queue.length > 0) {
    const {node, depth} = queue.shift()
    const neighbors = graph.get(node) || []
    for(const n of neighbors) {
      if(!depths.has(n) && allUrls.includes(n)) {
        depths.set(n, depth + 1)
        queue.push({ node: n, depth: depth + 1 })
      }
    }
  }
  return depths
}

const distancesFromHome = bfsDepth("/")

parsedFiles.forEach(file => {
  const isHub = file.path.includes("/hubs/")
  const isSpoke = file.path.includes("/reviews/")

  if (isSpoke) {
    const hasHubLink = file.links.some(l => l.includes("/hubs/"))
    if (!hasHubLink) error(`${file.path}: Spoke does not link up to its hub.`)

    const siblingLinks = file.links.filter(l => l.includes("/reviews/") && l !== file.path)
    const uniqueSiblings = new Set(siblingLinks)
    if (uniqueSiblings.size < 2) {
      error(`${file.path}: Spoke links to ${uniqueSiblings.size} siblings, must be at least 2.`)
    }
  }

  if (isHub) {
    const allSpokes = allUrls.filter(u => u.includes("/reviews/"))
    allSpokes.forEach(spoke => {
      if (!file.links.includes(spoke)) {
        error(`${file.path}: Hub does not link to child ${spoke}`)
      }
    })
  }

  // Orphan check (is any page not linked from anywhere except itself?)
  if (file.path !== "/") {
    let isLinked = false
    parsedFiles.forEach(otherFile => {
      if (otherFile.path !== file.path && otherFile.links.includes(file.path)) {
        isLinked = true
      }
    })
    if (!isLinked) {
      error(`${file.path}: Orphan page detected (not linked from any other page).`)
    }
  }

  // Two clicks from home check
  if (file.path !== "/") {
    const dist = distancesFromHome.get(file.path)
    if (dist === undefined || dist > 2) {
      error(`${file.path}: Page is more than 2 clicks away from home page (distance: ${dist}).`)
    }
  }
})

if (hasErrors) {
  console.error("❌ Checks failed.")
  process.exit(1)
} else {
  console.log("✅ All checks passed.")
}
