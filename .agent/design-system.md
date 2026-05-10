# Design System: Studio Sanjay Arts

## 1. Design Philosophy
The visual identity of Studio Sanjay Arts aims to evoke warmth, professional reliability, and artistic candidness suitable for premium, NRI-friendly weddings. The aesthetic avoids generic corporate or AI-starter templates, instead leaning into a "magazine-style" studio vibe.
- **Light Mode ("The Sunlit Mandap")**: Bright, warm, inviting, and clean.
- **Dark Mode ("The Evening Fitting")**: Deep, ambient, elegant, providing a high-contrast cinematic experience.

## 2. Typography
A strict two-font system is used to balance elegance with modern readability.
- **Headings (`--font-heading`)**: Playfair Display (High-contrast serif). Used for all headers, pull quotes, and primary calls to action.
- **Body & UI (`--font-sans`)**: Montserrat / Lato (Clean, humanist sans-serif). Used for body copy, navigation, buttons, and micro-copy.

## 3. Color Tokens (OKLCH)
Color tokens are mapped as CSS variables to ensure consistency and accessibility.

### Light Mode
- `--background`: Warm ivory/off-white (`oklch(0.98 0.01 75)`)
- `--foreground`: Deep charcoal (`oklch(0.20 0.01 250)`)
- `--primary`: Elegant gold/brass (`oklch(0.65 0.12 65)`)
- `--primary-foreground`: White (`oklch(0.98 0 0)`)
- `--secondary`: Soft taupe/warm gray (`oklch(0.90 0.02 70)`)
- `--secondary-foreground`: Dark slate (`oklch(0.30 0.01 250)`)
- `--muted`: Subtle sand (`oklch(0.95 0.01 75)`)
- `--muted-foreground`: Medium gray (`oklch(0.55 0.01 250)`)
- `--accent`: Muted terracotta (`oklch(0.70 0.10 45)`)
- `--accent-foreground`: White (`oklch(0.98 0 0)`)
- `--border`: Light gray (`oklch(0.90 0.01 250)`)
- `--input`: Light gray (`oklch(0.90 0.01 250)`)
- `--ring`: Elegant gold/brass (`oklch(0.65 0.12 65)`)
- `--card`: White (`oklch(1 0 0)`)
- `--card-foreground`: Deep charcoal (`oklch(0.20 0.01 250)`)
- `--popover`: White (`oklch(1 0 0)`)
- `--popover-foreground`: Deep charcoal (`oklch(0.20 0.01 250)`)
- `--destructive`: Red (`oklch(0.60 0.20 20)`)

### Dark Mode
- `--background`: Deep ambient obsidian (`oklch(0.15 0.02 250)`)
- `--foreground`: Soft pearl/off-white (`oklch(0.95 0.01 75)`)
- `--primary`: Muted gold (`oklch(0.60 0.10 65)`)
- `--primary-foreground`: Dark obsidian (`oklch(0.15 0.02 250)`)
- `--secondary`: Dark slate/taupe (`oklch(0.25 0.02 250)`)
- `--secondary-foreground`: Soft pearl (`oklch(0.95 0.01 75)`)
- `--muted`: Very dark gray (`oklch(0.20 0.01 250)`)
- `--muted-foreground`: Light gray (`oklch(0.70 0.01 250)`)
- `--accent`: Deep terracotta/burgundy (`oklch(0.40 0.10 30)`)
- `--accent-foreground`: Soft pearl (`oklch(0.95 0.01 75)`)
- `--border`: Dark charcoal (`oklch(0.25 0.01 250)`)
- `--input`: Dark charcoal (`oklch(0.25 0.01 250)`)
- `--ring`: Muted gold (`oklch(0.60 0.10 65)`)
- `--card`: Dark ambient (`oklch(0.18 0.02 250)`)
- `--card-foreground`: Soft pearl (`oklch(0.95 0.01 75)`)
- `--popover`: Dark ambient (`oklch(0.18 0.02 250)`)
- `--popover-foreground`: Soft pearl (`oklch(0.95 0.01 75)`)
- `--destructive`: Dark Red (`oklch(0.50 0.15 20)`)

## 4. Spacing & Sizing Scale
A robust responsive spacing scale based on the 4px baseline, utilizing `rem` units. Standard Tailwind spacing is supported, with specific structural spacing applied:
- Section Vertical Padding: `py-16` (4rem) on mobile, `py-24` (6rem) on desktop.
- Inter-element spacing: `gap-4` to `gap-8` (1rem to 2rem) typical.

## 5. Border Radius System
Subtle radii to maintain a premium feel without being overly sharp or overly playful.
- `--radius`: `0.3rem` (Base)

## 6. Motion Principles
Animations must be SSR-safe, driven by CSS variables, and respect `prefers-reduced-motion`.
- **Entrance**: Fade-in and subtle slide-up for elements scrolling into view.
- **Interaction**: Micro-interactions on buttons/links should use subtle scaling or color fades, feeling deliberate and luxurious rather than snappy.
- **Accessibility**: Use `motion-reduce:animate-none` and `motion-reduce:transition-none` prefixes.

## 7. Imagery & Assets
- No local images; all images will be sourced from Unsplash and registered centrally in `lib/images.ts`.
- Aspect ratios should reflect traditional photography aesthetics.