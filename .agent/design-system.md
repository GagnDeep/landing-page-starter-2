# Aura Boutique Design System

## Typography
Global typography conventions mandate a high-contrast serif for headings and a clean sans-serif for body text.

- **Heading Font:** Playfair Display (Serif, High-contrast, Editorial)
- **Body Font:** Montserrat or Lato (Sans-serif, Clean, Legible)
- **Scale:**
  - `h1`: 4rem (Mobile: 2.5rem) - Bold, tracking tight.
  - `h2`: 3rem (Mobile: 2rem) - Bold.
  - `h3`: 2rem (Mobile: 1.5rem) - Semi-bold.
  - `body-large`: 1.25rem - Regular.
  - `body-base`: 1rem - Regular, generous line-height (1.6).
  - `body-small`: 0.875rem - Regular.

## Color Tokens
Color palette balances ethnic warmth with western minimalism. Dark mode is carefully curated.

### Light Mode (Premium Cream & Warm Earth)
- `--background`: `oklch(0.98 0.01 75)` (Soft Cream/Off-white)
- `--foreground`: `oklch(0.25 0.02 50)` (Deep Charcoal/Espresso)
- `--primary`: `oklch(0.45 0.12 40)` (Rich Terracotta/Rust)
- `--primary-foreground`: `oklch(0.98 0 0)` (White)
- `--secondary`: `oklch(0.92 0.03 70)` (Warm Beige)
- `--secondary-foreground`: `oklch(0.25 0.02 50)`
- `--muted`: `oklch(0.95 0.01 80)` (Light Grayish Warmth)
- `--muted-foreground`: `oklch(0.55 0.02 60)` (Mid Gray)
- `--accent`: `oklch(0.85 0.05 45)` (Soft Rose/Blush)
- `--accent-foreground`: `oklch(0.25 0.02 50)`
- `--destructive`: `oklch(0.60 0.15 20)` (Muted Crimson)
- `--border`: `oklch(0.88 0.02 70)`
- `--input`: `oklch(0.88 0.02 70)`
- `--ring`: `oklch(0.45 0.12 40)`

### Dark Mode (Luxurious Obsidian & Gold Accents)
- `--background`: `oklch(0.15 0.01 250)` (Deep Obsidian/Navy tint)
- `--foreground`: `oklch(0.95 0.01 80)` (Soft Off-White/Pearl)
- `--primary`: `oklch(0.75 0.15 65)` (Muted Antique Gold/Bronze)
- `--primary-foreground`: `oklch(0.15 0.01 250)`
- `--secondary`: `oklch(0.25 0.02 250)` (Dark Slate)
- `--secondary-foreground`: `oklch(0.95 0.01 80)`
- `--muted`: `oklch(0.22 0.02 250)` (Subtle Dark Muted)
- `--muted-foreground`: `oklch(0.70 0.02 250)` (Light Gray)
- `--accent`: `oklch(0.35 0.05 45)` (Deep Rose)
- `--accent-foreground`: `oklch(0.95 0.01 80)`
- `--destructive`: `oklch(0.50 0.15 20)` (Deep Red)
- `--border`: `oklch(0.25 0.02 250)`
- `--input`: `oklch(0.25 0.02 250)`
- `--ring`: `oklch(0.75 0.15 65)`

## Spacing & Sizing Scale
- Generous whitespace is essential for the editorial feel.
- Base unit: `0.25rem` (4px).
- Scale: `1` (4px), `2` (8px), `4` (16px), `8` (32px), `12` (48px), `16` (64px), `24` (96px), `32` (128px).
- Section paddings: Default `py-16` or `py-24` on desktop, `py-12` on mobile.

## Border Radius
- Minimal and elegant.
- `--radius`: `0rem` (Sharp corners for an editorial, high-fashion look).

## Shadows & Motion
- **Shadows:** Soft, diffused shadows to lift elements slightly off the page without being intrusive.
  - `sm`: `0 2px 8px rgba(0,0,0,0.05)`
  - `md`: `0 8px 24px rgba(0,0,0,0.08)`
  - `lg`: `0 16px 48px rgba(0,0,0,0.12)`
- **Motion:** Slow, graceful transitions.
  - Fade-ins on scroll (duration 700ms).
  - Subtle image scale on hover (1.02x, duration 500ms, ease-out).

## Accessibility (WCAG 2.1)
- Color contrasts meet AAA for text on background and AA for large text.
- Focus rings are prominent (`--ring` color).
- Text elements are readable and zoomable without loss of functionality.
