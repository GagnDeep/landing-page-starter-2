import fs from "fs"
import path from "path"

const outDir = path.join(process.cwd(), "out")

if (!fs.existsSync(outDir)) {
  console.error("❌ 'out' directory not found. Run 'pnpm run build' first.")
  process.exit(1)
}

function getAllHtmlFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath)
  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllHtmlFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      if (
        file.endsWith(".html") &&
        !file.includes("404.html") &&
        !file.includes("_not-found.html")
      ) {
        arrayOfFiles.push(path.join(dirPath, file))
      }
    }
  })
  return arrayOfFiles
}

const htmlFiles = getAllHtmlFiles(outDir)
let failed = false

// Word floors by path patterns (simple heuristics for Pass 1 script gate)
const getWordFloor = (p) => {
  if (p === "/index.html") return 0 // Tools/utility exempt
  // For other real content pages:
  return 0 // Update in pass 2/3 as requested, but the script must be able to assert it now.
}

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8")
  const shortName = file.replace(outDir, "")

  const assert = (condition, msg) => {
    if (!condition) {
      console.error(`❌ ${shortName}: ${msg}`)
      failed = true
    }
  }

  // 1. Title <= 60
  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/)
  assert(titleMatch, "Missing <title>")
  if (titleMatch) {
    assert(
      titleMatch[1].length <= 60,
      `Title too long: ${titleMatch[1].length} chars (max 60)`
    )
  }

  // 2. Meta description 120-160
  const descMatch = content.match(
    /<meta[^>]*name="description"[^>]*content="([^"]+)"[^>]*>/
  )
  assert(descMatch, "Missing meta description")
  if (descMatch) {
    const len = descMatch[1].length
    assert(
      len >= 120 && len <= 160,
      `Meta description length ${len} not between 120-160 chars`
    )
  }

  // 3. Exactly one H1
  const h1Match = content.match(/<h1[^>]*>/g)
  assert(
    h1Match && h1Match.length === 1,
    `Expected exactly one <h1>, found ${h1Match ? h1Match.length : 0}`
  )

  // 4. Absolute Self-referencing canonical
  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/)
  assert(canonicalMatch, "Missing canonical link")
  if (canonicalMatch) {
    assert(
      canonicalMatch[1].startsWith("https://instituteofria.com"),
      `Canonical URL is not absolute: ${canonicalMatch[1]}`
    )

    // Ensure it's self-referencing. For /index.html it should be /, for /about.html it should be /about.
    let expectedPath = shortName.replace(".html", "")
    if (expectedPath === "/index") expectedPath = ""
    if (expectedPath === "") expectedPath = "/"
    assert(
      canonicalMatch[1].endsWith(expectedPath) ||
        canonicalMatch[1] === `https://instituteofria.com${expectedPath}`,
      `Canonical URL is not self-referencing. Got ${canonicalMatch[1]}, expected to end with ${expectedPath}`
    )
  }

  // 5. Open Graph tags
  assert(content.includes('property="og:title"'), "Missing og:title")
  assert(
    content.includes('property="og:description"'),
    "Missing og:description"
  )
  assert(content.includes('property="og:type"'), "Missing og:type")
  assert(content.includes('property="og:url"'), "Missing og:url")
  assert(content.includes('property="og:image"'), "Missing og:image")
  assert(
    content.includes('name="twitter:card" content="summary_large_image"'),
    "Missing twitter:card summary_large_image"
  )

  // 6. Valid HTML Lang
  assert(content.includes('<html lang="en"'), 'Missing <html lang="en">')

  // 7. Banned Things Check
  assert(
    !content.includes("shadow-"),
    "Usage of shadow utility (shadows are banned)"
  )
  assert(
    !content.includes("from-") && !content.includes("bg-gradient"),
    "Usage of gradient utility (gradients are banned)"
  )
  assert(
    !content.includes("rounded-full"),
    "Usage of fully rounded corners (pill buttons banned)"
  )

  // 8. Word Floors
  const textContent = content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  const wordCount = textContent.split(" ").length
  const floor = getWordFloor(shortName)
  assert(wordCount >= floor, `Word count ${wordCount} is below floor ${floor}`)

  // 9. Banned Strings Check (Specific phrases from brief like 'lorem ipsum', etc.)
  const bannedPhrases = ["lorem ipsum", "TODO", "FIXME"]
  for (const phrase of bannedPhrases) {
    assert(
      !content.toLowerCase().includes(phrase.toLowerCase()),
      `Contains banned string: ${phrase}`
    )
  }
}

if (failed) {
  process.exit(1)
} else {
  console.log("✅ All SEO checks passed.")
}
