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
const bannedSchemas = ["FAQPage"]

const siteUrl = "https://instituteofcatering.com"

const titles = new Set()
const descriptions = new Set()

// Data structure for link analysis
const links = {} // { "source.html": ["dest1.html", "dest2.html"] }
const allPages = new Set()

htmlFiles.forEach((file) => {
  const is404 =
    file === "404.html" ||
    file === "_not-found.html" ||
    file.includes("404/index.html") ||
    file.includes("_not-found/index.html")

  if (is404) return // exclude 404 from our core logic

  allPages.add(file)
  links[file] = []

  const filePath = path.join(OUT_DIR, file)
  const content = fs.readFileSync(filePath, "utf-8")
  const $ = cheerio.load(content)

  // Link analysis
  $("a").each((_, el) => {
    let href = $(el).attr("href")
    if (href && href.startsWith("/")) {
      // Resolve href to the actual generated file in our `out` directory
      // Example: /states -> states/index.html or states.html depending on trailing slash config.
      // We know trailingSlash is true, so /states -> states/index.html

      let targetFile = ""
      if (href === "/") {
        targetFile = "index.html"
      } else {
        // Strip leading slash
        let cleanHref = href.substring(1)
        // Strip trailing slash if present for building path
        if (cleanHref.endsWith("/"))
          cleanHref = cleanHref.substring(0, cleanHref.length - 1)
        targetFile = `${cleanHref}/index.html`
      }

      links[file].push(targetFile)
    }
  })

  // 1. One h1
  const h1s = $("h1")
  if (h1s.length !== 1) {
    error(file, `Found ${h1s.length} <h1> tags. Expected exactly 1.`)
  }

  // 2. Headings order (no skipped levels)
  let prevLevel = 1
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
    if (titles.has(title)) {
      error(file, `Duplicate title found: "${title}"`)
    }
    titles.add(title)
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
    if (descriptions.has(metaDesc)) {
      error(file, `Duplicate meta description found.`)
    }
    descriptions.add(metaDesc)
  }

  // 5. Canonical link self-referencing absolute
  const canonical = $("link[rel='canonical']").attr("href")
  let expectedCanonical = `${siteUrl}/${file.replace("index.html", "").replace(".html", "")}`

  if (expectedCanonical.endsWith("/") && expectedCanonical !== `${siteUrl}/`) {
    expectedCanonical = expectedCanonical.slice(0, -1)
  }

  if (file === "index.html") {
    expectedCanonical = `${siteUrl}`
  } else if (file.endsWith("/index.html")) {
    expectedCanonical = `${siteUrl}/${file.replace("/index.html", "")}`
  }

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
    } catch {
      error(file, `Invalid JSON-LD format.`)
    }
  })

  // 11. Word floors
  const textContent = $("body").text().replace(/\s+/g, " ").trim()
  const wordCount = textContent.split(" ").length

  if (
    file === "index.html" ||
    file === "states/index.html" ||
    file === "software/index.html" ||
    file === "templates/index.html"
  ) {
    if (wordCount < 1800)
      error(file, `Hub/Home page word count ${wordCount} is below 1800 floor.`)
  } else if (file.includes("software/") && file !== "software/index.html") {
    if (wordCount < 1200)
      error(file, `Review page word count ${wordCount} is below 1200 floor.`)
  } else if (
    (file.includes("states/") && file !== "states/index.html") ||
    (file.includes("templates/") && file !== "templates/index.html") ||
    file === "about/index.html"
  ) {
    if (wordCount < 900)
      error(
        file,
        `Spoke/Guide page word count ${wordCount} is below 900 floor.`
      )
  }
})

// Analyze internal linking
// Law: hub and spoke.
// - every child links up to its hub
// - across to at least two siblings
// - every hub links to every published child
// - zero orphan pages
// - nothing sits more than two clicks from home page
const hubs = [
  "states/index.html",
  "software/index.html",
  "templates/index.html",
]

// We need to calculate shortest paths from home ("index.html")
const distances = {}
allPages.forEach((p) => (distances[p] = Infinity))
distances["index.html"] = 0

const queue = ["index.html"]
while (queue.length > 0) {
  const current = queue.shift()
  const currentDist = distances[current]

  const outLinks = links[current] || []
  outLinks.forEach((target) => {
    if (allPages.has(target) && distances[target] === Infinity) {
      distances[target] = currentDist + 1
      queue.push(target)
    }
  })
}

allPages.forEach((page) => {
  // 1. Zero orphans / Clicks from home <= 2
  if (distances[page] > 2) {
    error(
      page,
      `Page is an orphan or more than 2 clicks from home (distance: ${distances[page]}).`
    )
  }

  const outLinks = new Set(links[page] || [])

  // 2. Hub logic
  if (hubs.includes(page)) {
    const folder = page.split("/")[0] // "states", "software", "templates"
    const children = Array.from(allPages).filter(
      (p) => p.startsWith(`${folder}/`) && p !== page
    )

    children.forEach((child) => {
      if (!outLinks.has(child)) {
        error(page, `Hub page is missing a link to child ${child}.`)
      }
    })
  }

  // 3. Child logic
  let isChild = false
  let hubForChild = ""
  let folder = ""
  if (page.startsWith("states/") && page !== "states/index.html") {
    isChild = true
    hubForChild = "states/index.html"
    folder = "states"
  }
  if (page.startsWith("software/") && page !== "software/index.html") {
    isChild = true
    hubForChild = "software/index.html"
    folder = "software"
  }
  if (page.startsWith("templates/") && page !== "templates/index.html") {
    isChild = true
    hubForChild = "templates/index.html"
    folder = "templates"
  }

  if (isChild) {
    if (!outLinks.has(hubForChild)) {
      error(page, `Child page is missing a link up to its hub ${hubForChild}.`)
    }

    const siblings = Array.from(allPages).filter(
      (p) => p.startsWith(`${folder}/`) && p !== page && p !== hubForChild
    )
    let linkedSiblingsCount = 0
    siblings.forEach((sibling) => {
      if (outLinks.has(sibling)) linkedSiblingsCount++
    })

    if (linkedSiblingsCount < 2 && siblings.length >= 2) {
      error(
        page,
        `Child page links to ${linkedSiblingsCount} siblings. Must link to at least 2.`
      )
    }
  }
})

if (hasErrors) {
  console.error("SEO checks failed.")
  process.exit(1)
}

console.log("SEO checks passed.")
