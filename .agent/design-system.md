# A2Zee Events - Design System & Visual Identity

## Brand Essence
A2Zee Events represents the pinnacle of luxury destination wedding planning. The visual identity must convey sophistication, trust, flawless coordination, and an aspirational, high-end hospitality aesthetic. The design should feel akin to a curated editorial magazine or a bespoke studio rather than a standard tech startup.

## Typography
The typography relies on a high-contrast pairing of a classic, elegant serif for headings and a clean, modern sans-serif for body copy, reflecting the blend of timeless romance and precise execution.

- **Heading Font (Serif):** `Cormorant Garamond` (or similar elegant serif like `Playfair Display`). Used for main page titles, section headings, and pull quotes. Evokes luxury, tradition, and editorial quality.
- **Body Font (Sans-Serif):** `Montserrat` (or `Inter` with slightly wider tracking). Used for all body copy, UI elements, buttons, and small metadata. Provides clean readability and a modern, structural balance.
- **Base Font Size:** 16px.
- **Line Height:** 1.6 for body text, 1.1 - 1.2 for headings.

## Color Palette (CSS Tokens)

The color palette avoids stark black and white, instead using soft alabasters, rich charcoals, and sophisticated accent tones (muted champagne, deep sage) to create warmth and exclusivity.

### Light Mode
- `--background`: `oklch(0.98 0.01 75)` (Soft Pearl / Alabaster)
- `--foreground`: `oklch(0.20 0.02 250)` (Deep Charcoal / Almost Black)
- `--primary`: `oklch(0.35 0.05 65)` (Rich Sage / Olive)
- `--primary-foreground`: `oklch(0.98 0.01 75)` (Pearl)
- `--secondary`: `oklch(0.90 0.03 85)` (Champagne / Sand)
- `--secondary-foreground`: `oklch(0.25 0.03 250)` (Charcoal)
- `--muted`: `oklch(0.94 0.02 85)` (Soft Greige)
- `--muted-foreground`: `oklch(0.45 0.02 250)` (Muted Stone)
- `--accent`: `oklch(0.88 0.04 70)` (Warm Taupe)
- `--accent-foreground`: `oklch(0.15 0.02 250)` (Dark Charcoal)
- `--card`: `oklch(1.00 0.00 0)` (Pure White)
- `--card-foreground`: `oklch(0.20 0.02 250)` (Deep Charcoal)
- `--border`: `oklch(0.85 0.02 85)` (Subtle Sand Border)
- `--ring`: `oklch(0.35 0.05 65)` (Sage Ring for focus states)

### Dark Mode
- `--background`: `oklch(0.15 0.02 250)` (Deep Charcoal / Slate)
- `--foreground`: `oklch(0.95 0.01 75)` (Soft Pearl)
- `--primary`: `oklch(0.85 0.04 70)` (Warm Taupe / Muted Gold)
- `--primary-foreground`: `oklch(0.15 0.02 250)` (Dark Charcoal)
- `--secondary`: `oklch(0.25 0.03 250)` (Dark Slate)
- `--secondary-foreground`: `oklch(0.90 0.03 85)` (Champagne)
- `--muted`: `oklch(0.22 0.02 250)` (Deep Greige)
- `--muted-foreground`: `oklch(0.65 0.02 250)` (Light Stone)
- `--accent`: `oklch(0.30 0.03 250)` (Charcoal Accent)
- `--accent-foreground`: `oklch(0.95 0.01 75)` (Soft Pearl)
- `--card`: `oklch(0.18 0.02 250)` (Slightly lighter slate)
- `--card-foreground`: `oklch(0.95 0.01 75)` (Soft Pearl)
- `--border`: `oklch(0.25 0.02 250)` (Subtle Slate Border)
- `--ring`: `oklch(0.85 0.04 70)` (Taupe Ring for focus states)

## Spacing Scale
The spacing system emphasizes "breathing room" to ensure a luxurious, uncrowded feel.
- `spacing-none`: 0
- `spacing-xs`: 0.25rem (4px)
- `spacing-sm`: 0.5rem (8px)
- `spacing-md`: 1rem (16px)
- `spacing-lg`: 1.5rem (24px)
- `spacing-xl`: 2rem (32px)
- `spacing-2xl`: 3rem (48px)
- `spacing-3xl`: 5rem (80px)
- `spacing-4xl`: 8rem (128px) - Used for major section breaks to create vertical rhythm and an airy editorial feel.

## Border Radius
To maintain a sophisticated, bespoke look, border radii are kept minimal or subtly soft, avoiding overly bubbly or "techy" rounded corners.
- `--radius-sm`: 0.125rem (2px)
- `--radius`: 0.25rem (4px) - Default for cards, buttons, inputs.
- `--radius-lg`: 0.5rem (8px) - For larger hero images or key featured panels.
- `--radius-full`: 9999px - Strictly for avatars and circular icon wrappers.

## Shadow System
Shadows should simulate realistic depth, using soft, highly diffused spreads rather than harsh drops.
- `shadow-sm`: `0 2px 8px -2px rgba(0,0,0,0.05)`
- `shadow-md`: `0 8px 24px -4px rgba(0,0,0,0.08)` (Cards on hover)
- `shadow-lg`: `0 16px 32px -8px rgba(0,0,0,0.12)` (Dropdowns, modals)

## Motion Principles
Animations should feel like a graceful unveiling. Transitions must be fluid, slow-paced, and deliberate.
- **Timing Function:** Custom ease out (`cubic-bezier(0.22, 1, 0.36, 1)`) for a smooth, natural deceleration.
- **Durations:**
  - Fast (Hover states, color changes): 200ms
  - Medium (Menu reveals, modal opens): 400ms
  - Slow (Page loads, scroll reveals): 800ms
- **Patterns:**
  - **Fade In & Up:** Elements gently rise into place (10-20px) while fading in as the user scrolls.
  - **Parallax:** Very subtle background image parallax to add depth without inducing motion sickness.
  - **Image Reveal:** Images unmasking slowly, often with a slight scale-down effect (1.05 to 1.0) to feel expansive and cinematic.
