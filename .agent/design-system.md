# Design System: Verma's Bakery & Sweets

## Brand Voice & Identity
**Core Identity**: A cherished heritage institution in Patiala. Warm, authentic, premium, custom-craft, community-focused.
**Aesthetic**: "Heritage Bakery". Tactile, warm, inviting, editorial luxury, bespoke craftsmanship. Avoid generic "AI-startup" or flat minimalist aesthetics.

## Typography
- **Headings (Display/Serif)**: `Playfair Display`. Provides elegance, a premium feel, and heritage character.
- **Body & UI (Sans-serif)**: `Montserrat`. Clean, readable, humanist sans-serif that balances the ornate serif.

## Color Palette (OKLCH)
A baking-inspired palette focusing on warm crusts, cream, flour-white, and dark espresso.

### Light Mode (The Bakery Daytime)
- **Background**: Flour White (`oklch(0.98 0.01 90)`) - Soft, warm white, not stark.
- **Foreground**: Espresso (`oklch(0.25 0.02 50)`) - Deep, warm dark brown for high contrast text.
- **Primary**: Crust Gold (`oklch(0.65 0.15 65)`) - Golden baked crust, warm and inviting.
- **Primary Foreground**: Cream (`oklch(0.99 0.01 90)`)
- **Secondary**: Biscoff Beige (`oklch(0.92 0.04 70)`) - Light, warm tan.
- **Secondary Foreground**: Espresso (`oklch(0.25 0.02 50)`)
- **Muted**: Dough Grey (`oklch(0.95 0.01 80)`) - Very light, warm grey.
- **Muted Foreground**: Toasted Pecan (`oklch(0.50 0.04 60)`) - Medium warm brown.
- **Accent**: Caramel (`oklch(0.70 0.12 55)`) - Rich caramel accent.
- **Accent Foreground**: Cream (`oklch(0.99 0.01 90)`)
- **Border/Input/Ring**: Butter Cookie (`oklch(0.85 0.05 75)`)
- **Card/Popover**: Cream (`oklch(0.99 0.01 90)`) - Pure soft cream.

### Dark Mode (The Evening Fitting - Night Mode)
Carefully curated night mode retaining character, feeling like a cozy, dimly lit bespoke studio.
- **Background**: Deep Espresso (`oklch(0.18 0.02 50)`) - Very dark, warm brown.
- **Foreground**: Warm Cream (`oklch(0.95 0.02 85)`) - Soft, easy-to-read off-white.
- **Primary**: Crust Gold (`oklch(0.65 0.15 65)`)
- **Primary Foreground**: Deep Espresso (`oklch(0.18 0.02 50)`)
- **Secondary**: Dark Chocolate (`oklch(0.25 0.03 45)`)
- **Secondary Foreground**: Warm Cream (`oklch(0.95 0.02 85)`)
- **Muted**: Cocoa (`oklch(0.28 0.02 40)`)
- **Muted Foreground**: Toasted Almond (`oklch(0.75 0.04 70)`)
- **Accent**: Caramel (`oklch(0.70 0.12 55)`)
- **Accent Foreground**: Deep Espresso (`oklch(0.18 0.02 50)`)
- **Border/Input/Ring**: Mocha (`oklch(0.35 0.03 45)`)
- **Card/Popover**: Roasted Bean (`oklch(0.22 0.02 45)`)

## Shape & Structure (Radii)
Radii must evoke a soft, hand-crafted feel, avoiding sharp, aggressive modern corners.
- `--radius`: `0.75rem` (Base soft corner)
- Shapes should feel slightly organic where possible (e.g., subtle rounded corners on image frames).

## Motion Curves
Motion should be elegant, deliberate, and smooth, reflecting the slow craft of baking.
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Entrance (Slow Reveal)**: `cubic-bezier(0.22, 1, 0.36, 1)` (e.g., fading in hero images).
- *Note*: Always respect `prefers-reduced-motion`.

## Spacing & Rhythm
- Generous whitespace to allow the premium photography and typography to breathe.
- **Asymmetrical Grids**: Used occasionally to break the monotony and add an editorial, magazine-like feel.
- Base spacing scale follows standard Tailwind intervals, with emphasis on larger padding blocks (`py-16`, `py-24`) for main sections.
