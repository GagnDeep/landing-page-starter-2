# Guide Events Design System

## 1. Aesthetic Direction
- **Brand Personality**: High-end, artistic, established tradition, deeply orchestrated luxury.
- **Tone**: Refined, timeless, editorial, quietly confident.
- **Vibe**: Not a "startup tool," but an exclusive club or a high-end editorial magazine.

## 2. Typography System
*A distinctive, non-generic typography pair blending artistic tradition with modern readability.*

- **Display/Serif**: *Playfair Display* (or similar high-contrast elegant serif). Used for heroic moments, section headers, and key quotes.
  - Characteristics: High contrast, elegant curves, traditional but striking.
- **Sans-Serif/Body**: *Inter* or *Helvetica Neue* is banned. We use *Cormorant* (if full serif needed) or an elegant sans-serif like *Optima* or *Montserrat* (light weights) for body. For this project, we'll assume a bespoke or premium feel.
  - **Heading Font**: `var(--font-heading)` -> Elegant Serif (e.g., Playfair Display).
  - **Body Font**: `var(--font-sans)` -> Clean, sophisticated sans (e.g., Montserrat or a geometric sans).
- **Scale (Fluid)**: Modular type scale implemented via CSS clamp().

## 3. Color Tokens (OKLCH)
*Avoiding the AI cyan/purple slop. Focusing on warm, earthy luxury, rich creams, deep charcoal, and soft champagne accents.*

### Light Mode
- `--background`: `oklch(0.98 0.01 75)` /* Soft, warm alabaster white */
- `--foreground`: `oklch(0.2 0.02 75)` /* Deep espresso/charcoal, not pure black */
- `--card`: `oklch(0.99 0.005 75)` /* Almost white, slight warmth */
- `--card-foreground`: `oklch(0.2 0.02 75)`
- `--popover`: `oklch(0.99 0.005 75)`
- `--popover-foreground`: `oklch(0.2 0.02 75)`
- `--primary`: `oklch(0.3 0.05 45)` /* Deep rich bronze/brown */
- `--primary-foreground`: `oklch(0.98 0.01 75)` /* Alabaster */
- `--secondary`: `oklch(0.92 0.02 75)` /* Soft warm grey/beige */
- `--secondary-foreground`: `oklch(0.3 0.05 45)`
- `--muted`: `oklch(0.95 0.01 75)`
- `--muted-foreground`: `oklch(0.5 0.02 75)`
- `--accent`: `oklch(0.85 0.04 75)` /* Champagne accent */
- `--accent-foreground`: `oklch(0.2 0.02 75)`
- `--destructive`: `oklch(0.5 0.15 25)` /* Deep elegant red */
- `--border`: `oklch(0.9 0.02 75)`
- `--input`: `oklch(0.9 0.02 75)`
- `--ring`: `oklch(0.85 0.04 75)`

### Dark Mode
*Equally polished. Think moody, candlelit reception.*
- `--background`: `oklch(0.15 0.01 75)` /* Deep warm charcoal */
- `--foreground`: `oklch(0.95 0.01 75)` /* Soft warm grey/white */
- `--card`: `oklch(0.18 0.01 75)`
- `--card-foreground`: `oklch(0.95 0.01 75)`
- `--popover`: `oklch(0.18 0.01 75)`
- `--popover-foreground`: `oklch(0.95 0.01 75)`
- `--primary`: `oklch(0.85 0.04 75)` /* Champagne accent */
- `--primary-foreground`: `oklch(0.2 0.02 75)`
- `--secondary`: `oklch(0.22 0.01 75)`
- `--secondary-foreground`: `oklch(0.95 0.01 75)`
- `--muted`: `oklch(0.22 0.01 75)`
- `--muted-foreground`: `oklch(0.7 0.01 75)`
- `--accent`: `oklch(0.3 0.05 45)`
- `--accent-foreground`: `oklch(0.95 0.01 75)`
- `--border`: `oklch(0.25 0.01 75)`
- `--input`: `oklch(0.25 0.01 75)`
- `--ring`: `oklch(0.85 0.04 75)`

## 4. Spacing Scale
- Fluid rhythm using CSS clamp.
- Generous whitespace, avoiding cramped "app" aesthetics.
- Intentional asymmetry and breaking of grids to feel editorial.

## 5. Border Radius
- `--radius`: `0rem` or `0.25rem`.
- High-end editorial design rarely uses heavy rounding (like 1rem or full pills). We will use sharp corners or very subtle rounding to convey established tradition.

## 6. Shadows
- No generic drop shadows.
- Use soft, diffuse, organic shadows only when necessary to lift elements, or stark brutalist drop shadows if aiming for an avant-garde editorial look. Here, soft and imperceptible is better.
- `shadow-sm`: `0 2px 4px oklch(0 0 0 / 0.02)`
- `shadow-md`: `0 4px 12px oklch(0 0 0 / 0.05)`
- `shadow-lg`: `0 12px 32px oklch(0 0 0 / 0.08)`

## 7. Motion & Interaction
- **Entrance**: Slow, deliberate staggered reveals.
- **Easing**: Exponential easing (ease-out-quint) for organic deceleration.
- **Interactions**: Subtle color shifts, scale up slightly on images, ghost buttons that fill elegantly.
- No bouncy or elastic easing.
