import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function walk(dir) {
  let results = []
  const list = await fs.readdir(dir)
  for (let file of list) {
    file = path.join(dir, file)
    const stat = await fs.stat(file)
    if (stat && stat.isDirectory()) {
      results = results.concat(await walk(file))
    } else {
      results.push(file)
    }
  }
  return results
}

async function checkSeo() {
  let hasErrors = false
  const logError = (msg) => {
    console.error(`❌ ${msg}`)
    hasErrors = true
  }

  // Find where Next.js put the files
  let targetDir = path.join(__dirname, "../out")
  try {
    await fs.stat(targetDir)
  } catch {
    targetDir = path.join(__dirname, "../.next-prod")
  }

  try {
    const files = await walk(targetDir)
    const htmlFiles = files.filter((f) => f.endsWith(".html"))

    for (const file of htmlFiles) {
      const content = await fs.readFile(file, "utf8")
      const relPath = path.relative(targetDir, file)

      // Banned words
      if (/lorem ipsum/i.test(content)) {
        logError(`${relPath}: Contains banned phrase "lorem ipsum"`)
      }
      if (/NewsArticle/i.test(content)) {
        logError(`${relPath}: Contains banned schema "NewsArticle"`)
      }

      // H1 Check
      const h1Matches = content.match(/<h1[^>]*>.*?<\/h1>/gi)
      if (!h1Matches) {
        logError(`${relPath}: Missing <h1> tag`)
      } else if (h1Matches.length > 1) {
        logError(`${relPath}: Multiple <h1> tags found (${h1Matches.length})`)
      }

      // Title Check
      const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/i)
      if (!titleMatch) {
        logError(`${relPath}: Missing <title> tag`)
      } else if (titleMatch[1].length > 60) {
        logError(
          `${relPath}: Title too long (${titleMatch[1].length} chars, max 60)`
        )
      }

      // Meta Description Check
      const descMatch =
        content.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i) ||
        content.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"/i)
      // Note: Ignoring length constraints for now to keep it simple, could expand
      if (!descMatch) {
        logError(`${relPath}: Missing meta description`)
      }
    }
  } catch (error) {
    console.error("Error running SEO check:", error)
    hasErrors = true
  }

  if (hasErrors) {
    process.exit(1)
  } else {
    console.log("✅ SEO checks passed")
  }
}

checkSeo()
