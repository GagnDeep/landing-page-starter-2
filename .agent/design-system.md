# Design System: Sardaar G. Tailors

## Brand Persona
"The Sherwani Craftsman": Precise, luxurious, rooted in tradition, yet distinctly modern. The visual identity should reflect a high-end tailor's studio.

## Typography
- **Headings (Heritage Serif):** Playfair Display (or similar high-contrast serif). Evokes tradition, bespoke craftsmanship, and premium quality.
- **Body Text (Clean Sans-Serif):** Lato, Montserrat, or Inter. Ensures high readability, providing a modern, clean canvas that lets the craftsmanship shine.

## Color Palette (CSS Tokens)

### Light Mode (Crisp Linen)
- **Background:** Crisp, natural linen white (e.g., `oklch(0.98 0.01 80)`).
- **Foreground:** Deep, rich charcoal or espresso (e.g., `oklch(0.2 0.02 260)`).
- **Primary:** Rich Navy or Deep Maroon (e.g., `oklch(0.3 0.05 260)`).
- **Accent/Gold:** Antique Gold or Brass (e.g., `oklch(0.75 0.14 80)`).
- **Borders/Subtle:** Soft grey or taupe.

### Dark Mode (Premium Velvet)
- **Background:** Deep, velvety midnight blue or soft charcoal (e.g., `oklch(0.15 0.02 260)`).
- **Foreground:** Soft off-white or light linen (e.g., `oklch(0.95 0.01 80)`).
- **Primary:** Subtle Antique Gold (e.g., `oklch(0.8 0.12 80)`).
- **Accent/Highlights:** Richer gold or deep crimson.
- **Borders/Subtle:** Darkened slate or deep bronze.

## Spacing & Sizing Scale
- **Base Unit:** 4px (0.25rem).
- **Rhythm:** Open, breathable layouts. Sections should have generous padding (e.g., `py-16` or `py-24`) to simulate the unhurried luxury of a bespoke fitting.
- **Content Max Width:** Constrained (e.g., `max-w-7xl`) to maintain editorial readability.

## Border Radius
- **Style:** Subtle and refined. Avoid overly rounded (tech-startup) corners.
- **Values:** `0` (sharp) for editorial images, or `2px`-`4px` (subtle) for interactive elements to imply precision cuts.

## Motion & Animation
- **Rhythm:** Deliberate, smooth, and elegant. No jarring or overly fast animations.
- **Effects:** Soft fade-ins, gentle parallax on images to simulate the drape of fabric, smooth reveals for text.

## Accessibility
- Contrast ratios must strictly adhere to WCAG AA standards. The gold accents must maintain legibility against both light linen and dark velvet backgrounds.
