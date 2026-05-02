# Designlane Heena – Design System

## 1. Brand Identity & Aesthetic Intent
- **Vibe:** Luxury fashion editorial, premium designer atelier, tactile, warm, intentional.
- **Keywords:** Bespoke, Hand-stitched, Artisanal, Gift-focused elegance, High-touch craftsmanship.
- **Aesthetic:** Avoiding generic AI aesthetics. Prioritizing rhythm, sophisticated typography, and cohesive colors that emulate the physical experience of a luxury boutique in Chandigarh.

## 2. Typography
A sophisticated pairing conveying authority in embroidery and bespoke tailoring.
- **Primary / Headings:** High-contrast Serif. **Playfair Display** or **Cormorant Garamond**. Used for editorial impact, section titles, and pull quotes.
- **Secondary / UI / Body:** Refined, airy Sans-serif. **Montserrat** or **Jost**. Used for readability, metadata, and interface elements.
- **Typographic Scale:**
  - `text-xs`: 0.75rem (12px) - Metadata, tiny captions.
  - `text-sm`: 0.875rem (14px) - UI elements, small body.
  - `text-base`: 1rem (16px) - Default body.
  - `text-lg`: 1.125rem (18px) - Intro paragraphs.
  - `text-xl`: 1.25rem (20px) - Small headings.
  - `text-2xl`: 1.5rem (24px) - Section sub-headings.
  - `text-3xl`: 1.875rem (30px) - Section headings.
  - `text-4xl`: 2.25rem (36px) - Large headings.
  - `text-5xl`: 3rem (48px) - Hero headings.
  - `text-6xl`: 3.75rem (60px) - Editorial display.

## 3. Color Tokens (CSS Variables)
Using OKLCH for perceptually uniform colors. The palette uses warm neutrals, soft creams, deep charcoals, and rich terracotta accents reminiscent of traditional embroidery threads and luxury fabrics.

### Light Mode
- **Background:** `oklch(0.98 0.01 75)` — Warm cream/alabaster.
- **Foreground:** `oklch(0.20 0.02 50)` — Deep charcoal/espresso, not pure black.
- **Primary:** `oklch(0.40 0.08 40)` — Rich terracotta / rusty amber.
- **Primary Foreground:** `oklch(0.98 0.01 75)` — Cream.
- **Secondary (Accents/Backgrounds):** `oklch(0.94 0.02 75)` — Light linen.
- **Secondary Foreground:** `oklch(0.30 0.04 40)` — Dark brown.
- **Muted:** `oklch(0.90 0.02 75)` — Beige.
- **Muted Foreground:** `oklch(0.50 0.02 50)` — Taupe/grey.
- **Accent (Interactive/Hover):** `oklch(0.85 0.04 60)` — Soft gold/champagne.
- **Border/Ring:** `oklch(0.85 0.02 75)` — Subtle warm border.

### Dark Mode
- **Background:** `oklch(0.18 0.02 50)` — Deep espresso/charcoal.
- **Foreground:** `oklch(0.96 0.01 75)` — Soft cream.
- **Primary:** `oklch(0.60 0.10 40)` — Lighter terracotta, vibrant enough for dark mode.
- **Primary Foreground:** `oklch(0.18 0.02 50)` — Deep charcoal.
- **Secondary (Accents/Backgrounds):** `oklch(0.25 0.02 50)` — Darker taupe.
- **Secondary Foreground:** `oklch(0.96 0.01 75)` — Cream.
- **Muted:** `oklch(0.28 0.02 50)` — Deep grey-brown.
- **Muted Foreground:** `oklch(0.70 0.02 50)` — Light taupe.
- **Accent (Interactive/Hover):** `oklch(0.35 0.04 60)` — Tarnished gold.
- **Border/Ring:** `oklch(0.30 0.02 50)` — Subtle dark border.

## 4. Spacing & Rhythm
Rhythm focuses on an airy, editorial feel. We avoid cramming components together, mimicking the physical space of a luxury boutique.
- **Micro-spacing:** `0.25rem` to `1rem` (4-16px) for UI alignment.
- **Component-spacing:** `1.5rem` to `3rem` (24-48px) for internal padding of cards or text blocks.
- **Section-spacing:** `5rem` to `10rem` (80-160px) between major vertical sections to let the content breathe.

## 5. Border Radius
Restraint is key. We lean towards sharp corners or very subtle rounding to maintain an elegant, high-end editorial feel rather than a "tech startup" look.
- **Default (Buttons, Cards):** `0` (Sharp) or `0.125rem` (Subtle 2px).
- **Images:** Mostly sharp corners to frame photography like art pieces.

## 6. Shadow Depth
Shadows should emulate soft, ambient lighting in a physical boutique, avoiding harsh drops.
- **Soft (Cards):** `0 4px 20px oklch(0 0 0 / 0.05)`
- **Hover/Floating:** `0 10px 40px oklch(0 0 0 / 0.08)`

## 7. Motion & Interaction Principles
- **Pacing:** Slow, intentional, and smooth.
- **Easing:** Exponential easing (`ease-out-expo`) for a natural, grounded deceleration.
- **Entrances:** Elements fade in with a very subtle upward drift.
- **Hover States:** Instead of abrupt color changes, use slight opacity shifts, subtle scaling (`scale-105` on images), or graceful underline reveals on text.
