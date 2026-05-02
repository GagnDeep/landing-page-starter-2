# Purba Fashion Makers: Design System

## 1. Brand Identity & Aesthetic
- **Tone:** Ethnic-Modern, Premium Craft, Bespoke Tailoring, Masculine Elegance (with a refined touch).
- **Core Values:** Artisanal Quality, Discerning Taste, Tradition meets Modernity.
- **Aesthetic Direction:** Avoid generic tech startup clichés. Embrace a high-end, editorial feel with deep, rich colors and sophisticated typography. Dark mode must feel luxurious and intentional, not just inverted.

## 2. Typography
A classic pairing that balances heritage with modern digital readability.

- **Primary Font (Headings):** Playfair Display (Serif)
  - Usage: Display, H1-H4, pull quotes, key highlights.
  - Weights: Regular (400), Medium (500), Bold (700).
  - Characteristics: High-contrast, elegant, traditional, editorial.
- **Secondary Font (Body/UI):** Lato or Montserrat (Sans-serif)
  - Usage: Body text, UI elements, navigation, buttons, captions.
  - Weights: Light (300), Regular (400), Medium (500), SemiBold (600).
  - Characteristics: Clean, geometric but humanist, highly readable at small sizes.

## 3. Color Palette (Ethnic-Modern Luxury)

The palette focuses on deep teals, warm golds, and slate greys, evoking a sense of bespoke tailoring and premium fabric.

### 3.1. Light Mode Tokens
- `--background`: `oklch(0.99 0 0)` (Soft Off-White/Pearl)
- `--foreground`: `oklch(0.2 0.02 240)` (Deep Slate Blue/Grey)
- `--primary`: `oklch(0.4 0.08 220)` (Deep Tailor's Teal)
- `--primary-foreground`: `oklch(0.98 0.02 80)` (Soft Gold/Cream)
- `--secondary`: `oklch(0.7 0.12 80)` (Warm Antique Gold)
- `--secondary-foreground`: `oklch(0.15 0.02 240)` (Dark Slate)
- `--muted`: `oklch(0.95 0.01 240)` (Cool Light Grey)
- `--muted-foreground`: `oklch(0.5 0.02 240)` (Medium Slate)
- `--accent`: `oklch(0.95 0.02 80)` (Pale Gold Tint)
- `--accent-foreground`: `oklch(0.3 0.05 220)` (Rich Teal)
- `--border`: `oklch(0.9 0.01 240)` (Subtle Cool Grey Border)
- `--card`: `oklch(1 0 0)` (Pure White)
- `--card-foreground`: `oklch(0.2 0.02 240)`

### 3.2. Dark Mode Tokens (Intentional Luxury)
- `--background`: `oklch(0.15 0.02 240)` (Deep Charcoal/Slate - Not pure black)
- `--foreground`: `oklch(0.95 0.01 80)` (Soft Warm Off-White)
- `--primary`: `oklch(0.6 0.1 220)` (Luminous Muted Teal)
- `--primary-foreground`: `oklch(0.1 0.02 240)` (Dark Charcoal)
- `--secondary`: `oklch(0.65 0.15 80)` (Rich Antique Gold)
- `--secondary-foreground`: `oklch(0.1 0.02 240)` (Dark Charcoal)
- `--muted`: `oklch(0.2 0.02 240)` (Dark Cool Grey)
- `--muted-foreground`: `oklch(0.7 0.02 240)` (Light Slate)
- `--accent`: `oklch(0.25 0.02 80)` (Dark Gold Tint)
- `--accent-foreground`: `oklch(0.9 0.05 80)` (Bright Pale Gold)
- `--border`: `oklch(0.25 0.02 240)` (Dark Grey Border)
- `--card`: `oklch(0.18 0.02 240)` (Slightly lighter Charcoal for elevation)
- `--card-foreground`: `oklch(0.95 0.01 80)`

## 4. Spacing & Rhythm
A generous, breathable spacing scale to emphasize the premium editorial feel.

- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-6`: 1.5rem (24px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px) - Section gaps
- `space-24`: 6rem (96px) - Major section gaps

## 5. Shadow & Elevation
Subtle, soft shadows to create depth without looking overly digital.
- `shadow-sm`: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- `shadow-md`: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- `shadow-lg`: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`
- `shadow-editorial`: `0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.01)` (Very soft, spread out shadow for key feature cards).

## 6. Motion & Animation
Elegant, deliberate, and smooth.
- **Easing:** `cubic-bezier(0.25, 1, 0.5, 1)` (Smooth out)
- **Durations:**
  - Fast (Hover states): 150ms
  - Medium (Menu reveals): 300ms
  - Slow (Page loads, hero reveals): 700ms - 1000ms
- **Effects:** Fade-ins, gentle slide-ups (10-20px), slow scale-ups on images (e.g., 1.05x on hover).

## 7. Border Radius
Restricted to maintain a tailored, structured feel.
- `--radius`: `0.25rem` (4px) - Slightly rounded corners, avoiding overly bubbly (pill) shapes for structural elements, keeping it sharp and masculine-elegant.
