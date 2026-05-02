# Design System: Stitching Solutions

## 1. Brand Identity & Aesthetic
**Aesthetic:** Premium-craft, feminine, editorial, and sophisticated.
**Vibe:** Master craftsmanship, polite, owner-led service, reliability.
**Keywords:** Elegant, Precise, Trustworthy, Warm, Luxurious.
**Anti-patterns:** Generic tech startup, overly playful, flat and lifeless, harsh pure black/white contrast.

## 2. Typography
The typography system uses a high-contrast serif for headings to convey elegance and a clean sans-serif for body copy for maximum readability.

- **Heading Font:** Playfair Display (or similar elegant serif, e.g., Cormorant Garamond).
- **Body Font:** Lato, Montserrat, or Inter (with slight tracking adjustments to feel more editorial).
- **Monospace/Numbers:** For precise tailoring measurements, a clean monospace or tabular-nums enabled sans-serif.

### Scale
- `--text-xs`: 0.75rem (12px) - Captions, subtle metadata
- `--text-sm`: 0.875rem (14px) - Small body, utility labels
- `--text-base`: 1rem (16px) - Primary body text
- `--text-lg`: 1.125rem (18px) - Lead paragraphs
- `--text-xl`: 1.25rem (20px) - Small headings (H6)
- `--text-2xl`: 1.5rem (24px) - Headings (H5)
- `--text-3xl`: 1.875rem (30px) - Headings (H4)
- `--text-4xl`: 2.25rem (36px) - Headings (H3)
- `--text-5xl`: 3rem (48px) - Headings (H2)
- `--text-6xl`: 3.75rem (60px) - Display (H1)
- `--text-7xl`: 4.5rem (72px) - Hero Display

## 3. Color Tokens
The color palette avoids harsh #000000 and #FFFFFF. We use warm, muted tones mixed with deep, luxurious darks.
*Note: The exact OKLCH values for implementation are defined in `app/globals.css`.*

### Light Mode
- **Background:** Warm Pearl (Off-white with a hint of cream)
- **Foreground:** Deep Charcoal / Espresso (Soft black for readability)
- **Primary:** Rich Burgundy / Mulberry (Evokes premium tailoring)
- **Primary Foreground:** Crisp Pearl
- **Secondary:** Soft Blush / Taupe (Feminine and warm)
- **Secondary Foreground:** Deep Charcoal
- **Muted/Accent:** Champagne / Soft Gold
- **Card/Popover:** Crisp Pearl (slightly lighter than background)
- **Borders:** Subtle warm gray

### Dark Mode
*Dark mode is a curated luxurious space, resembling a dimly lit, high-end boutique interior.*
- **Background:** Midnight Espresso (Very deep, warm charcoal)
- **Foreground:** Soft Pearl (Off-white, reducing eye strain)
- **Primary:** Softened Mulberry / Rose Gold
- **Primary Foreground:** Midnight Espresso
- **Secondary:** Deep Taupe
- **Secondary Foreground:** Soft Pearl
- **Muted/Accent:** Muted Gold
- **Card/Popover:** Slightly lighter Espresso (to provide elevation)
- **Borders:** Low-opacity warm highlight

## 4. Spacing System
A generous spacing system gives the design room to breathe, a hallmark of editorial layout.
- `--spacing-1`: 0.25rem (4px)
- `--spacing-2`: 0.5rem (8px)
- `--spacing-3`: 0.75rem (12px)
- `--spacing-4`: 1rem (16px)
- `--spacing-6`: 1.5rem (24px)
- `--spacing-8`: 2rem (32px)
- `--spacing-12`: 3rem (48px)
- `--spacing-16`: 4rem (64px)
- `--spacing-24`: 6rem (96px)
- `--spacing-32`: 8rem (128px)

## 5. Border Radius
Boutique aesthetics favor subtle curves.
- `--radius-sm`: 0.25rem (4px) - Small inputs, buttons
- `--radius-md`: 0.375rem (6px) - Cards, imagery
- `--radius-lg`: 0.5rem (8px) - Large layout elements
- `--radius-full`: 9999px - Pills, avatars

## 6. Shadows & Elevation
Shadows should be soft, diffused, and warm, avoiding harsh gray drop-shadows.
- **Shadow-sm:** Delicate elevation for small interactive elements.
- **Shadow-md:** Standard elevation for cards and dropdowns.
- **Shadow-lg:** Pronounced elevation for modals and floating navs.
*In dark mode, elevation is primarily achieved through lighter background colors rather than shadows.*

## 7. Motion & Animation Principles
Animations should feel deliberate, smooth, and elegant, mirroring the care of a master tailor.
- **Durations:** Relaxed (300ms - 500ms for layout changes, 150ms - 250ms for micro-interactions).
- **Easings:** Custom cubic-bezier curves (e.g., `cubic-bezier(0.22, 1, 0.36, 1)`) for a smooth, "glide-to-stop" feel.
- **Effects:** Fade-ins, gentle upward slides, and subtle scale-ups on hover. Avoid jarring bounces or rapid flashes.
