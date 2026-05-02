# YAVA DESIGNS Design System

## Core Identity
YAVA DESIGNS is a premium women's ethnic boutique based in Chandigarh, specializing in bespoke custom-stitched suits.
The design aesthetic is: Premium-Craft, Feminine, Elegant, and Sophisticated.
It should feel like an editorial magazine: ample white space, rhythmic layout, subtle and graceful motion. Avoid generic "tech startup" looks.

## Typography
A unique, premium typography scale balancing a sophisticated serif with a clean, airy sans-serif.

- **Heading Font:** Playfair Display (or similar high-contrast serif)
  - Purpose: Editorial sophistication, brand identity, elegance.
  - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold).
  - Used for: Primary headings, display text, large quotes, section titles.
- **Body Font:** Lato or Montserrat (or similar clean sans-serif)
  - Purpose: Legibility, modern counterbalance, airy spacing.
  - Weights: 300 (Light), 400 (Regular).
  - Used for: Body copy, captions, UI elements, navigation.

### Type Scale (Fluid, clamp-based)
- `--font-size-xs`: `clamp(0.75rem, 0.7vw + 0.5rem, 0.875rem)`
- `--font-size-sm`: `clamp(0.875rem, 0.8vw + 0.6rem, 1rem)`
- `--font-size-base`: `clamp(1rem, 1vw + 0.75rem, 1.125rem)`
- `--font-size-lg`: `clamp(1.125rem, 1.2vw + 0.85rem, 1.35rem)`
- `--font-size-xl`: `clamp(1.35rem, 1.5vw + 1rem, 1.6rem)`
- `--font-size-2xl`: `clamp(1.6rem, 2vw + 1.2rem, 2rem)`
- `--font-size-3xl`: `clamp(2rem, 3vw + 1.5rem, 2.75rem)`
- `--font-size-4xl`: `clamp(2.75rem, 4vw + 2rem, 3.75rem)`
- `--font-size-5xl`: `clamp(3.75rem, 5vw + 2.5rem, 5rem)`

## Color Palette (OKLCH)

### Light Mode
- **Background:** `oklch(0.985 0.005 60)` - Warm, off-white (pearl/ivory).
- **Foreground:** `oklch(0.25 0.01 60)` - Deep espresso/charcoal, not pure black.
- **Card:** `oklch(1 0 0)` - Pure white for contrast against pearl background.
- **Card Foreground:** `oklch(0.25 0.01 60)`
- **Popover:** `oklch(1 0 0)`
- **Popover Foreground:** `oklch(0.25 0.01 60)`
- **Primary:** `oklch(0.4 0.04 15)` - Deep maroon/burgundy (premium ethnic craft).
- **Primary Foreground:** `oklch(0.98 0.01 15)` - Soft blush/white text on primary.
- **Secondary:** `oklch(0.92 0.02 15)` - Pale blush/rose water.
- **Secondary Foreground:** `oklch(0.3 0.03 15)` - Dark maroon.
- **Muted:** `oklch(0.95 0.01 60)` - Warm light gray.
- **Muted Foreground:** `oklch(0.5 0.01 60)` - Medium taupe/gray.
- **Accent:** `oklch(0.85 0.08 55)` - Warm gold/champagne.
- **Accent Foreground:** `oklch(0.25 0.01 60)` - Deep espresso.
- **Destructive:** `oklch(0.5 0.15 25)` - Muted, elegant crimson.
- **Border:** `oklch(0.9 0.01 60)` - Soft taupe border.
- **Input:** `oklch(0.9 0.01 60)`
- **Ring:** `oklch(0.85 0.08 55)` - Champagne gold focus ring.

### Dark Mode
*Dark mode must feel luxurious, like midnight velvet, maintaining the feminine premium vibe.*
- **Background:** `oklch(0.2 0.01 60)` - Deep charcoal/midnight taupe.
- **Foreground:** `oklch(0.96 0.01 60)` - Soft pearl white.
- **Card:** `oklch(0.24 0.01 60)` - Slightly lighter charcoal.
- **Card Foreground:** `oklch(0.96 0.01 60)`
- **Popover:** `oklch(0.24 0.01 60)`
- **Popover Foreground:** `oklch(0.96 0.01 60)`
- **Primary:** `oklch(0.85 0.05 15)` - Soft rose gold / dusty rose.
- **Primary Foreground:** `oklch(0.2 0.01 60)` - Deep charcoal text.
- **Secondary:** `oklch(0.3 0.02 15)` - Deep muted maroon.
- **Secondary Foreground:** `oklch(0.9 0.02 15)` - Pale blush.
- **Muted:** `oklch(0.28 0.01 60)` - Medium-dark taupe.
- **Muted Foreground:** `oklch(0.7 0.01 60)` - Light taupe/gray.
- **Accent:** `oklch(0.75 0.08 55)` - Muted gold/bronze.
- **Accent Foreground:** `oklch(0.15 0.01 60)` - Dark espresso.
- **Destructive:** `oklch(0.6 0.15 25)` - Softened crimson.
- **Border:** `oklch(0.3 0.01 60)` - Subtle dark border.
- **Input:** `oklch(0.3 0.01 60)`
- **Ring:** `oklch(0.75 0.08 55)` - Muted gold ring.

## Spacing & Layout Rhythm
Ample white space and fluid spacing to breathe. Layouts are driven by editorial grid principles.

- `--space-1`: `0.25rem`
- `--space-2`: `0.5rem`
- `--space-3`: `0.75rem`
- `--space-4`: `1rem`
- `--space-6`: `1.5rem`
- `--space-8`: `2rem`
- `--space-12`: `3rem`
- `--space-16`: `4rem`
- `--space-24`: `6rem`
- `--space-32`: `8rem`
- `--space-fluid-sm`: `clamp(1rem, 2vw, 1.5rem)`
- `--space-fluid-md`: `clamp(2rem, 4vw, 3rem)`
- `--space-fluid-lg`: `clamp(3rem, 6vw, 5rem)`
- `--space-fluid-xl`: `clamp(5rem, 10vw, 8rem)`

## Borders & Radius
Feminine, refined, organic. Avoid harsh boxes or hyper-rounded "tech" pill shapes. Use subtle rounding.
- `--radius-sm`: `0.125rem`
- `--radius-md`: `0.25rem`
- `--radius-lg`: `0.5rem`
- `--radius-full`: `9999px`

## Shadows & Depth
Subtle, layered shadows that evoke high-end print casting shadows on fine paper. Not digital drop-shadows.
- **Shadow-sm**: `0 1px 2px 0 oklch(0 0 0 / 0.05)`
- **Shadow-md**: `0 4px 6px -1px oklch(0 0 0 / 0.05), 0 2px 4px -2px oklch(0 0 0 / 0.05)`
- **Shadow-lg**: `0 10px 15px -3px oklch(0 0 0 / 0.05), 0 4px 6px -4px oklch(0 0 0 / 0.05)`
- **Shadow-xl**: `0 20px 25px -5px oklch(0 0 0 / 0.05), 0 8px 10px -6px oklch(0 0 0 / 0.05)`

## Motion & Easing
Graceful, natural, unhurried. Like silk moving.
- `--ease-out-silk`: `cubic-bezier(0.16, 1, 0.3, 1)` (expo out)
- `--ease-in-out-silk`: `cubic-bezier(0.65, 0, 0.35, 1)`
- `--duration-fast`: `200ms`
- `--duration-base`: `400ms`
- `--duration-slow`: `700ms`
