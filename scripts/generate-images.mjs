import fs from "fs"
import path from "path"
import sharp from "sharp"

const publicImagesDir = path.join(process.cwd(), "public", "images")
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true })
}

// Generate Dr. Ameena Profile Placeholder SVG
const drProfileSvg = `
<svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="1000" fill="#2d3b36" />
  <radialGradient id="bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#3d4f48" />
    <stop offset="100%" stop-color="#1e2724" />
  </radialGradient>
  <rect width="800" height="1000" fill="url(#bg)" />
  <circle cx="400" cy="380" r="160" fill="#d97736" opacity="0.15" />
  <path d="M400 240 C440 240, 470 270, 470 320 C470 380, 430 420, 400 420 C370 420, 330 380, 330 320 C330 270, 360 240, 400 240 Z" fill="#f4efe6" opacity="0.9"/>
  <path d="M260 620 C260 500, 320 460, 400 460 C480 460, 540 500, 540 620 L560 850 L240 850 Z" fill="#e2dacd" opacity="0.85"/>
  <rect x="385" y="460" width="30" height="120" fill="#c28e0e" opacity="0.8" />
  <text x="400" y="880" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#f4efe6" text-anchor="middle">Dr. Ameena Patel, MD, FACP</text>
  <text x="400" y="920" font-family="sans-serif" font-size="18" fill="#d97736" text-anchor="middle">[NEEDS CONFIRMATION: Official Physician Portrait]</text>
</svg>
`

// Generate Clinic Interior Placeholder SVG
const clinicSvg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" fill="#1e2724" />
  <rect x="100" y="100" width="1000" height="600" rx="16" fill="#2d3b36" stroke="#d97736" stroke-width="2" opacity="0.6"/>
  <text x="600" y="380" font-family="Georgia, serif" font-size="32" fill="#f4efe6" text-anchor="middle">Warm, Patient-Centered Clinical Consultation Suite</text>
  <text x="600" y="430" font-family="sans-serif" font-size="20" fill="#d97736" text-anchor="middle">[NEEDS CONFIRMATION: Practice Consultation Room Photo]</text>
  <circle cx="600" cy="520" r="40" fill="none" stroke="#f4efe6" stroke-width="2" opacity="0.4"/>
</svg>
`

// Generate Medical Diagram Placeholders
const diagramSvg = (title, subtitle) => `
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#2d3b36" />
  <rect x="40" y="40" width="720" height="520" rx="12" fill="#1e2724" stroke="#c28e0e" stroke-width="2" />
  <text x="400" y="260" font-family="Georgia, serif" font-size="26" fill="#f4efe6" text-anchor="middle">${title.replace("&", "&amp;")}</text>
  <text x="400" y="310" font-family="sans-serif" font-size="16" fill="#d97736" text-anchor="middle">${subtitle.replace("&", "&amp;")}</text>
  <path d="M250 400 Q400 320 550 400 T700 400" fill="none" stroke="#d97736" stroke-width="3"/>
</svg>
`

async function main() {
  await sharp(Buffer.from(drProfileSvg))
    .webp()
    .toFile(path.join(publicImagesDir, "dr-ameena-profile.webp"))
  await sharp(Buffer.from(clinicSvg))
    .webp()
    .toFile(path.join(publicImagesDir, "clinic-consultation-room.webp"))
  await sharp(
    Buffer.from(
      diagramSvg(
        "Thyroid & Endocrine Pathway",
        "Evidence-Based Patient Education Diagram"
      )
    )
  )
    .webp()
    .toFile(path.join(publicImagesDir, "medical-diagram-thyroid.webp"))
  await sharp(
    Buffer.from(
      diagramSvg("Hormonal & Metabolic Balance", "Clinical Physiological Model")
    )
  )
    .webp()
    .toFile(path.join(publicImagesDir, "medical-diagram-hormone.webp"))
  await sharp(
    Buffer.from(
      diagramSvg("Gut-Brain Axis & Microbiome", "Patient Care Education Visual")
    )
  )
    .webp()
    .toFile(path.join(publicImagesDir, "medical-diagram-gut.webp"))
  console.log("Images generated successfully in /public/images/")
}

main().catch(console.error)
