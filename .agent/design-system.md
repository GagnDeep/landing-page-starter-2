# Oasis Caterers Design System

## 1. Brand Identity & Aesthetic
**Aesthetic Vision**: Premium, bespoke catering service. The feeling is "luxury editorial"—high-end print magazine, bespoke studio, and immaculate family-style service. We avoid generic startup or flat minimalist aesthetics, leaning into rich, textured, and deeply elegant styling.

**Light Mode**: Warm, inviting, and clean. Emphasizes "warm ivory", classic charcoal text, and understated gold leaf accents for a pristine daylight event feel.
**Dark Mode ("The Evening Fitting")**: Deep, rich, and ambient. Not a simple color inversion. It uses deep slate, charcoal, and muted warm golds to evoke an exclusive evening gala.

## 2. Color Tokens (OKLCH)

All colors are implemented as OKLCH tokens to ensure consistency, accessibility, and smooth gradients.

### Light Mode Variables
- `--background`: `oklch(0.98 0.01 75)` (Warm Ivory - Soft, off-white with a hint of warmth)
- `--foreground`: `oklch(0.20 0.02 250)` (Deep Charcoal - High contrast, soft on eyes)
- `--card`: `oklch(1 0 0)` (Pure White for elevation)
- `--card-foreground`: `oklch(0.20 0.02 250)`
- `--popover`: `oklch(0.98 0.01 75)`
- `--popover-foreground`: `oklch(0.20 0.02 250)`
- `--primary`: `oklch(0.35 0.03 250)` (Slate Grey - Anchoring primary color)
- `--primary-foreground`: `oklch(0.98 0.01 75)`
- `--secondary`: `oklch(0.92 0.02 80)` (Sand/Oat - Supporting warm neutral)
- `--secondary-foreground`: `oklch(0.25 0.02 250)`
- `--muted`: `oklch(0.94 0.01 75)`
- `--muted-foreground`: `oklch(0.55 0.02 250)`
- `--accent`: `oklch(0.78 0.12 75)` (Gold Leaf - Soft, rich gold for highlights)
- `--accent-foreground`: `oklch(0.20 0.02 250)`
- `--destructive`: `oklch(0.55 0.15 25)` (Deep Crimson)
- `--destructive-foreground`: `oklch(0.98 0.01 75)`
- `--border`: `oklch(0.85 0.02 75)`
- `--input`: `oklch(0.85 0.02 75)`
- `--ring`: `oklch(0.78 0.12 75)` (Gold Leaf ring)

### Dark Mode Variables ("The Evening Fitting")
- `--background`: `oklch(0.18 0.01 250)` (Deep Ambient Charcoal - Not pure black)
- `--foreground`: `oklch(0.95 0.01 75)` (Soft Pearl - For high readability)
- `--card`: `oklch(0.22 0.01 250)` (Elevated deep slate)
- `--card-foreground`: `oklch(0.95 0.01 75)`
- `--popover`: `oklch(0.22 0.01 250)`
- `--popover-foreground`: `oklch(0.95 0.01 75)`
- `--primary`: `oklch(0.85 0.02 75)` (Soft warm grey)
- `--primary-foreground`: `oklch(0.18 0.01 250)`
- `--secondary`: `oklch(0.28 0.02 250)`
- `--secondary-foreground`: `oklch(0.95 0.01 75)`
- `--muted`: `oklch(0.28 0.02 250)`
- `--muted-foreground`: `oklch(0.65 0.02 250)`
- `--accent`: `oklch(0.70 0.10 75)` (Muted Evening Gold)
- `--accent-foreground`: `oklch(0.18 0.01 250)`
- `--destructive`: `oklch(0.45 0.15 25)`
- `--destructive-foreground`: `oklch(0.95 0.01 75)`
- `--border`: `oklch(0.30 0.02 250)`
- `--input`: `oklch(0.30 0.02 250)`
- `--ring`: `oklch(0.70 0.10 75)`

## 3. Typography
**Typefaces**:
- **Headings (Display/Serif)**: `Playfair Display` (or similar high-contrast serif). Used for H1, H2, H3, and large pull quotes. Conveys heritage, elegance, and premium quality.
- **Body & UI (Sans-Serif)**: `Montserrat` (or `Lato`). A clean, humanist sans-serif used for body copy, buttons, and functional UI. Provides modern readability and balances the ornate headings.

**Scale**:
- Base: `16px` (`1rem`)
- Fine Print: `0.875rem`
- H4 / Lead: `1.25rem`
- H3: `1.5rem` to `2rem`
- H2: `2.5rem` to `3.5rem` (tight tracking, refined line-height)
- H1: `4rem` to `5rem` (editorial display)

## 4. Spacing & Grid System
Emphasizes breathing room, honoring a print-editorial layout.
- Container: Max-width of `80rem` (1280px) with generous lateral padding (`px-6` or `px-8` on desktop, `px-4` on mobile).
- Vertical Rhythm: Large spacing blocks (`py-24`, `py-32`) between sections to create a sense of scale and pause.
- Grid: Standard 12-column CSS Grid. Use asymmetric layouts (e.g., 5-col text next to 7-col image) to evoke an editorial spread.

## 5. Border Radii
Subtle, deliberate shaping. Avoid overly pill-shaped elements (generic startup feel) and harsh squares.
- `--radius`: `0.25rem` (Subtle 4px rounding for buttons and inputs, keeping lines tailored and sharp).
- Large images: `0.5rem` (8px) to soften the edges elegantly.

## 6. Motion & Animation
- **Principles**: Slow, intentional, and fade-led. "Graceful entrance" over "snappy pop".
- **Easing**: Smooth cubic-bezier transitions (`ease-out`, `duration-500` or `duration-700`).
- **Accessibility**: All motion must support `prefers-reduced-motion` using Tailwind's `motion-reduce:` prefix (e.g., `motion-reduce:transition-none`).
- **SSR Safety**: Animations must not rely on client-only layout calculations initially; driven by CSS variables to prevent layout shifts.

## 7. Icons & Graphics
- Thin, elegant stroke weights (using `lucide-react` or `@hugeicons/react` with a stroke width of 1 or 1.5).
- Avoid heavy, filled glyphs unless functionally necessary.