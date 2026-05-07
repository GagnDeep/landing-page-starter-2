# Design System: Custom Cake Specialty Shop

## Brand Identity & Aesthetic
The visual identity of the brand is premium, celebratory, artistic, and highly trustworthy. It targets parents and celebratory customers who appreciate high-end, custom artistry. The design should feel akin to a high-end magazine—sophisticated, reliable, and aesthetically rich, avoiding generic tech startup clichés.

## Typography
*   **Headings**: `Playfair Display` (Serif) — Conveys elegance, tradition, and premium artistry.
*   **Body**: `Montserrat` (Sans-Serif) — Clean, modern, highly readable, and perfectly balances the classic feel of the headings.

### Typographic Scale
*   `--text-xs`: 0.75rem (12px)
*   `--text-sm`: 0.875rem (14px)
*   `--text-base`: 1rem (16px)
*   `--text-lg`: 1.125rem (18px)
*   `--text-xl`: 1.25rem (20px)
*   `--text-2xl`: 1.5rem (24px)
*   `--text-3xl`: 1.875rem (30px)
*   `--text-4xl`: 2.25rem (36px)
*   `--text-5xl`: 3rem (48px)
*   `--text-6xl`: 3.75rem (60px)
*   `--text-7xl`: 4.5rem (72px)

## Color Palette (Tokens)
The color palette uses OKLCH to ensure vibrant, perceptive blending, providing a warm, joyous, yet luxurious foundation.

### Light Mode
*   `--background`: `oklch(0.99 0.01 75)` - Warm, creamy white (Vanilla)
*   `--foreground`: `oklch(0.25 0.02 75)` - Deep espresso/charcoal for excellent readability
*   `--primary`: `oklch(0.65 0.15 30)` - Rich, celebratory terracotta/rose (Artisan Pink)
*   `--primary-foreground`: `oklch(0.98 0.01 30)` - Soft white for contrast on primary
*   `--secondary`: `oklch(0.92 0.03 75)` - Soft beige/cream for subtle hierarchy
*   `--secondary-foreground`: `oklch(0.3 0.05 75)` - Dark muted brown
*   `--muted`: `oklch(0.95 0.02 75)` - Very soft gray-beige
*   `--muted-foreground`: `oklch(0.5 0.02 75)` - Medium gray-beige
*   `--accent`: `oklch(0.85 0.1 85)` - Delicate gold/champagne accent
*   `--accent-foreground`: `oklch(0.2 0.05 85)` - Deep olive/gold-brown
*   `--destructive`: `oklch(0.5 0.2 25)` - Deep crimson
*   `--border`: `oklch(0.9 0.02 75)` - Subtle border
*   `--input`: `oklch(0.9 0.02 75)` - Input field borders
*   `--ring`: `oklch(0.65 0.15 30)` - Focus rings match primary
*   `--card`: `oklch(1 0 0)` - Pure white for elevation
*   `--card-foreground`: `oklch(0.25 0.02 75)` - Standard text on cards
*   `--popover`: `oklch(1 0 0)` - Pure white
*   `--popover-foreground`: `oklch(0.25 0.02 75)` - Standard text on popovers

### Dark Mode (Night Mode)
An aesthetically rich, luxurious dark mode, resembling a high-end evening event.
*   `--background`: `oklch(0.15 0.02 280)` - Deep midnight blue/charcoal
*   `--foreground`: `oklch(0.95 0.01 75)` - Soft, warm white
*   `--primary`: `oklch(0.7 0.15 30)` - Brighter terracotta/rose for dark backgrounds
*   `--primary-foreground`: `oklch(0.15 0.02 280)` - Deep midnight text
*   `--secondary`: `oklch(0.25 0.03 280)` - Elevated dark blue/gray
*   `--secondary-foreground`: `oklch(0.9 0.01 75)` - Warm off-white
*   `--muted`: `oklch(0.2 0.02 280)` - Subdued dark background
*   `--muted-foreground`: `oklch(0.65 0.02 280)` - Medium gray
*   `--accent`: `oklch(0.85 0.1 85)` - Glowing gold/champagne
*   `--accent-foreground`: `oklch(0.15 0.02 280)` - Deep midnight
*   `--destructive`: `oklch(0.6 0.2 25)` - Brighter crimson
*   `--border`: `oklch(0.25 0.02 280)` - Subtle dark border
*   `--input`: `oklch(0.25 0.02 280)` - Input field borders
*   `--ring`: `oklch(0.7 0.15 30)` - Focus rings match primary
*   `--card`: `oklch(0.18 0.02 280)` - Slightly elevated dark surface
*   `--card-foreground`: `oklch(0.95 0.01 75)` - Soft white text
*   `--popover`: `oklch(0.18 0.02 280)` - Slightly elevated dark surface
*   `--popover-foreground`: `oklch(0.95 0.01 75)` - Soft white text

## Spacing & Layout
A generous, rhythmic spacing system to allow the artistry of the cakes to breathe.
*   `--spacing-1`: 0.25rem
*   `--spacing-2`: 0.5rem
*   `--spacing-3`: 0.75rem
*   `--spacing-4`: 1rem
*   `--spacing-6`: 1.5rem
*   `--spacing-8`: 2rem
*   `--spacing-12`: 3rem
*   `--spacing-16`: 4rem
*   `--spacing-24`: 6rem
*   `--spacing-32`: 8rem

## Radii (Borders)
Soft, elegant rounding that evokes warmth without feeling childish.
*   `--radius`: 0.5rem
*   `--radius-sm`: calc(var(--radius) * 0.5)
*   `--radius-md`: calc(var(--radius) * 1.5)
*   `--radius-lg`: calc(var(--radius) * 2)
*   `--radius-xl`: calc(var(--radius) * 3)
*   `--radius-full`: 9999px

## Shadows (Elevation)
Soft, diffuse shadows that create depth and a tactile feel.
*   `--shadow-sm`: 0 1px 2px 0 rgb(0 0 0 / 0.05)
*   `--shadow`: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)
*   `--shadow-md`: 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)
*   `--shadow-lg`: 0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)

## Motion Principles
Motion should feel intentional, elegant, and graceful, like a high-end unboxing experience.
*   **Timing**: Use slower, more deliberate durations for large layout changes (600ms - 800ms) and snappy, responsive durations for micro-interactions (150ms - 300ms).
*   **Easing**: Use exponential easing (`ease-out-expo` or `cubic-bezier(0.16, 1, 0.3, 1)`) for a natural, decelerating feel. Avoid elastic or bouncy easing.
*   **Triggers**: Orchestrate staggered reveals on page load to draw the eye gracefully down the page. Use subtle transform/opacity changes on hover.
*   **Accessibility**: Always respect `prefers-reduced-motion` to disable non-essential animations.
