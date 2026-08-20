import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const IMAGES = [
  {
    filename: "hero-freelancer.webp",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    alt: "Young creator working on laptop in modern studio workspace",
    credit: "Unsplash / Annie Spratt",
  },
  {
    filename: "cpa-team.webp",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    alt: "bro.tax team reviewing tax strategy on laptop together",
    credit: "Unsplash / Desrec Vision",
  },
  {
    filename: "creator-gear.webp",
    url: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80",
    alt: "Content creator video camera and studio lighting write-off setup",
    credit: "Unsplash / Sam McGhee",
  },
  {
    filename: "dev-desk.webp",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer workspace showing code editor and multiple displays",
    credit: "Unsplash / Shahadat Rahman",
  },
  {
    filename: "gig-driver.webp",
    url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    alt: "Rideshare and delivery driver smartphone navigation on dashboard",
    credit: "Unsplash / Dan Gold",
  },
]

async function processImages() {
  const publicDir = path.join(process.cwd(), "public", "images")
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const log = []

  for (const img of IMAGES) {
    console.log(`Fetching ${img.filename}...`)
    const res = await fetch(img.url)
    if (!res.ok) {
      throw new Error(`Failed to fetch ${img.url}: ${res.statusText}`)
    }
    const buffer = Buffer.from(await res.arrayBuffer())
    const targetPath = path.join(publicDir, img.filename)

    await sharp(buffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(targetPath)

    const stats = fs.statSync(targetPath)
    log.push({
      file: `/images/${img.filename}`,
      sizeKb: Math.round(stats.size / 1024),
      alt: img.alt,
      credit: img.credit,
      sourceUrl: img.url,
    })
  }

  fs.writeFileSync(
    path.join(publicDir, "images-manifest.json"),
    JSON.stringify(log, null, 2)
  )
  console.log("Successfully downloaded and processed images with Sharp!")
}

processImages().catch((err) => {
  console.error("Error processing images:", err)
  process.exit(1)
})
