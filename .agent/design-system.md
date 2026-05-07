# Design System: Harbhajan's Catering Patiala

## 1. Aesthetic Direction
**Theme:** Punjabi Tradition meets Destination Luxury
**Tone:** Established, Generous, Warm, Polished, Authentic
**Vibe:** A high-end editorial magazine focused on rich culinary heritage.
Avoid transient "tech startup" aesthetics (e.g., pure minimal sans-serif everywhere, cyan/purple glows). Embrace rich earthy tones, elegant serifs for display, and clean but sophisticated sans-serif for body text.

## 2. Typography
**Display Font (`--font-heading`):** Playfair Display (or similar elegant serif). Used for major headings, quotes, and primary numerical stats. Provides a sense of heritage and premium quality.
**Body Font (`--font-sans`):** Montserrat (or similar polished sans-serif). Used for body copy, UI elements, and labels. Ensures readability while maintaining a modern, editorial feel.

## 3. Color Palette (OKLCH)

### Light Mode (The "Daytime Function" Palette)
- **Background:** `oklch(0.98 0.01 60)` - A warm, creamy off-white (like ivory or soft linen).
- **Foreground:** `oklch(0.20 0.02 50)` - Deep charcoal with a hint of warm brown.
- **Primary:** `oklch(0.45 0.15 40)` - A rich, vibrant terracotta/saffron (evoking turmeric, marigold, and warm spices).
- **Primary Foreground:** `oklch(0.98 0.01 60)` - Warm off-white for contrast.
- **Secondary:** `oklch(0.85 0.05 70)` - A soft mustard/gold tone.
- **Secondary Foreground:** `oklch(0.20 0.02 50)` - Deep charcoal.
- **Accent:** `oklch(0.92 0.03 50)` - A subtle warm beige for backgrounds and highlights.
- **Accent Foreground:** `oklch(0.30 0.05 40)` - Rich brown.
- **Muted:** `oklch(0.95 0.02 60)` - Very soft linen.
- **Muted Foreground:** `oklch(0.45 0.02 50)` - Warm medium gray.
- **Border/Ring:** `oklch(0.85 0.02 50)` - Soft taupe.

### Dark Mode (The "Evening Gala" Palette)
- **Background:** `oklch(0.15 0.01 50)` - A deep, rich espresso/charcoal (not pure black).
- **Foreground:** `oklch(0.95 0.02 60)` - Soft, warm off-white.
- **Primary:** `oklch(0.55 0.15 40)` - Brightened terracotta/saffron for dark mode contrast.
- **Primary Foreground:** `oklch(0.15 0.01 50)` - Deep espresso.
- **Secondary:** `oklch(0.30 0.05 70)` - Deep, muted gold/bronze.
- **Secondary Foreground:** `oklch(0.95 0.02 60)` - Warm off-white.
- **Accent:** `oklch(0.20 0.02 50)` - Subtle dark warm brown for card backgrounds.
- **Accent Foreground:** `oklch(0.90 0.05 40)` - Light warm tan.
- **Muted:** `oklch(0.20 0.01 50)` - Soft dark gray/brown.
- **Muted Foreground:** `oklch(0.70 0.02 50)` - Warm light gray.
- **Border/Ring:** `oklch(0.30 0.02 50)` - Dark taupe.

## 4. Spacing & Rhythm
- Generous padding to create an editorial, uncrowded feel.
- Use asymmetrical layouts to evoke visual interest rather than rigid, identical grids.
- **Border Radius:** Minimal or slightly rounded (`0.25rem` or `0.5rem`) to maintain a polished, structural look. Avoid overly pill-shaped buttons unless specifically for distinct CTAs.

## 5. Motion Principles
- **Pacing:** Slow, deliberate, and graceful. Like the unfolding of a well-planned event.
- **Easing:** `ease-out-expo` or `ease-out-quart`.
- **Effects:** Fade-ins, gentle upward slides, and subtle parallax for imagery. No bouncy or aggressive animations.

## 6. Implementation Notes for Tailwind/shadcn
- All color variables in `globals.css` will be updated to match the OKLCH values defined above.
- The `--radius` will be set to `0.5rem` for a balanced, premium feel.
