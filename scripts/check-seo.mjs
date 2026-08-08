import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const outDir = path.join(__dirname, "../.next-prod")

const bannedStrings = ["lorem ipsum", "TODO", "FIXME"]

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8")

  for (const banned of bannedStrings) {
    if (content.toLowerCase().includes(banned.toLowerCase())) {
      console.error(`ERROR: Found banned string "${banned}" in ${filePath}`)
      process.exit(1)
    }
  }

  if (filePath.endsWith(".html")) {
    if (!content.includes("<h1")) {
      console.error(`ERROR: Missing <h1> in ${filePath}`)
      process.exit(1)
    }

    const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/i)
    if (!titleMatch || !titleMatch[1]) {
      console.error(`ERROR: Missing <title> in ${filePath}`)
      process.exit(1)
    }
    if (titleMatch[1].length > 60) {
      console.error(
        `ERROR: Title too long (${titleMatch[1].length} chars) in ${filePath}`
      )
      process.exit(1)
    }

    const metaDescMatch = content.match(
      /<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i
    )
    if (!metaDescMatch || !metaDescMatch[1]) {
      console.error(`ERROR: Missing meta description in ${filePath}`)
      process.exit(1)
    }
    const descLen = metaDescMatch[1].length
    if (!filePath.includes("404")) {
      if (descLen < 120 || descLen > 160) {
        console.error(
          `ERROR: Meta description length ${descLen} (must be 120-160) in ${filePath}.`
        )
        process.exit(1)
      }
    }
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist yet.`)
    return
  }
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath)
    } else {
      checkFile(fullPath)
    }
  }
}

walk(outDir)
console.log("SEO and content checks passed!")
