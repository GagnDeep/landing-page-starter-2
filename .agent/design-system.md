# Design System & Visual Identity

## Aesthetic Philosophy
The aesthetic is "destination-luxury" - akin to a high-end editorial magazine. It conveys a sophisticated, trustworthy online experience that immediately communicates elegance, professionalism, and commitment to exceeding expectations.

## Typography
- **Heading Font:** Cormorant Garamond (Serif). Used for all major headings (H1, H2, H3), emphasizing a refined, established elegance.
- **Body Font:** Montserrat (Sans-serif). Clean, highly legible, modern sans-serif used for body copy, UI elements, and subheadings, offering a crisp contrast to the serif headings.

## Color Palette (Light Mode Tokens)
The light mode uses a classic, rich, warm neutral palette inspired by high-end event spaces and fine stationery.

- `--background`: `oklch(0.99 0.01 75)` - Warm, soft off-white (Cream/Linen). Avoid stark #FFFFFF.
- `--foreground`: `oklch(0.2 0.02 20)` - Deep, almost-black espresso for high readability.
- `--primary`: `oklch(0.3 0.05 40)` - Rich, deep mahogany or warm charcoal.
- `--primary-foreground`: `oklch(0.98 0.01 75)` - Light contrast for primary buttons.
- `--secondary`: `oklch(0.92 0.02 60)` - Soft taupe/beige for secondary backgrounds.
- `--secondary-foreground`: `oklch(0.25 0.02 30)` - Dark brown/grey for secondary text.
- `--accent`: `oklch(0.85 0.04 50)` - A muted gold or warm sand for subtle highlights.
- `--accent-foreground`: `oklch(0.2 0.02 20)`
- `--muted`: `oklch(0.95 0.01 70)` - Very soft grey/beige for subdued areas.
- `--muted-foreground`: `oklch(0.4 0.02 40)` - Medium-dark text for less emphasis.
- `--border`: `oklch(0.85 0.02 60)` - Subtle, warm border color.
- `--card`: `oklch(0.99 0.01 75)`
- `--card-foreground`: `oklch(0.2 0.02 20)`
- `--radius`: `0.3rem` - Slight rounding, keeping edges sharp and elegant, not bubbly.

## Color Palette (Dark Mode Tokens)
Dark mode must feel like an exclusive, intimate evening event—rich, deep, and luxurious, rather than "hacker dark mode."

- `--background`: `oklch(0.18 0.02 20)` - Deep, rich charcoal brown (not pure black).
- `--foreground`: `oklch(0.95 0.01 70)` - Soft, warm white for text.
- `--primary`: `oklch(0.85 0.04 50)` - Muted gold/sand for primary actions in dark mode.
- `--primary-foreground`: `oklch(0.15 0.02 20)` - Dark text on primary buttons.
- `--secondary`: `oklch(0.25 0.02 25)` - Slightly lighter deep tone for secondary cards.
- `--secondary-foreground`: `oklch(0.9 0.01 70)`
- `--accent`: `oklch(0.3 0.03 30)` - Deep bronze/warm metallic tone.
- `--accent-foreground`: `oklch(0.95 0.01 70)`
- `--muted`: `oklch(0.22 0.02 22)`
- `--muted-foreground`: `oklch(0.7 0.01 60)`
- `--border`: `oklch(0.3 0.02 25)` - Very subtle dark borders.
- `--card`: `oklch(0.18 0.02 20)`
- `--card-foreground`: `oklch(0.95 0.01 70)`

## Spacing & Layout Rhythm
- Emphasize "breathing room" and white space to convey luxury.
- Sections should have generous padding (`py-24` to `py-32` on desktop).
- Use distinct, asynchronous grid layouts (e.g., overlapping images with text blocks) rather than standard rigid grids.
- Margins between text blocks should follow a deliberate typographic scale, allowing headings to stand out.

## Motion & Animation Principles
- **Subtle & Deliberate:** Animations must be incredibly smooth, slow, and intentional. Think slow crossfades, gentle parallax, and elegant reveals (e.g., masks revealing images).
- **No Bouncing:** Avoid springy, playful animations. Stick to ease-in-out or slow ease-out curves.
- **Accessibility:** All animations MUST respect `prefers-reduced-motion` using Framer Motion's `useReducedMotion` or Tailwind's `motion-reduce` utilities.
