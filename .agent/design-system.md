# Design System: A-One Cakes and Gift Zone

## 1. Aesthetic Vision & Personality
- **Concept:** "The Immediate Celebration." A design that bridges the urgency of a 24/7 last-minute service with the premium, artisanal quality of specialty cakes and gifts.
- **Tone:** Premium, reliable, anticipatory, and slightly celebratory.
- **Aesthetic Direction:** Studio-grade editorial. We explicitly avoid generic "SaaS/tech startup" aesthetics (no cold blues, no floaty glassmorphism, no rounded-corner cards floating on gray backgrounds). Instead, we favor rich, tactile colors, high-contrast typography, asymmetrical grids, and generous breathing room.
- **Vibe:** It should feel like stepping into a high-end bakery at midnight—warm, inviting, immaculate, and magical.

## 2. Typography
We are using character-rich fonts to convey artisanal quality and celebration.
- **Heading Font:** **Fraunces** (or similar variable serif). Why: It has a slight vintage/artisanal feel, but with modern proportions. It scales beautifully for massive, striking headers.
- **Body Font:** **DM Sans** (or similar clean, warm sans-serif). Why: It provides excellent readability while maintaining a subtle geometric warmth that complements the ornate headings.
- **Type Scale (Fluid/Clamp):**
  - `text-xs`: 0.75rem
  - `text-sm`: 0.875rem
  - `text-base`: 1rem
  - `text-lg`: 1.125rem
  - `text-xl`: 1.25rem
  - `text-2xl`: 1.5rem
  - `text-3xl`: clamp(1.875rem, 4vw, 2.25rem)
  - `text-4xl`: clamp(2.25rem, 5vw, 3rem)
  - `text-5xl`: clamp(3rem, 6vw, 4rem)
  - `text-6xl`: clamp(3.75rem, 8vw, 5rem)
  - `text-7xl`: clamp(4.5rem, 10vw, 6.5rem)
  - `text-8xl`: clamp(5rem, 12vw, 8rem)

## 3. Color Palette & Theme Tokens (OKLCH)
A rich, warm palette centered around "Midnight Velvet" and "Buttercream," with a signature "Ruby Velvet" primary accent for celebration. Parity is maintained strictly via CSS variables.

### Light Mode
- **Background (`--background`)**: Warm Buttercream (oklch 0.98 0.01 85) - Not pure white; has a slight ivory warmth.
- **Foreground (`--foreground`)**: Deep Espresso (oklch 0.25 0.02 45) - Very dark brown, softer than black.
- **Primary (`--primary`)**: Ruby Velvet (oklch 0.45 0.15 15) - A rich, deep red/berry.
- **Primary Foreground (`--primary-foreground`)**: (oklch 0.98 0.01 85)
- **Secondary (`--secondary`)**: Matcha Green (oklch 0.85 0.04 150)
- **Secondary Foreground (`--secondary-foreground`)**: (oklch 0.25 0.02 45)
- **Muted (`--muted`)**: Champagne (oklch 0.95 0.02 85)
- **Muted Foreground (`--muted-foreground`)**: (oklch 0.55 0.02 45)
- **Border (`--border`)**: (oklch 0.90 0.02 85)
- **Card (`--card`)**: Pure Cream (oklch 0.99 0.01 85)
- **Card Foreground (`--card-foreground`)**: (oklch 0.25 0.02 45)
- **Accent (`--accent`)**: Warm Gold (oklch 0.82 0.12 80)
- **Accent Foreground (`--accent-foreground`)**: (oklch 0.25 0.02 45)

### Dark Mode
- **Background (`--background`)**: Midnight Espresso (oklch 0.18 0.02 45)
- **Foreground (`--foreground`)**: Warm Buttercream (oklch 0.98 0.01 85)
- **Primary (`--primary`)**: Radiant Ruby (oklch 0.60 0.18 15) - Brighter for dark mode contrast.
- **Primary Foreground (`--primary-foreground`)**: (oklch 0.15 0.02 45)
- **Secondary (`--secondary`)**: Deep Forest (oklch 0.35 0.04 150)
- **Secondary Foreground (`--secondary-foreground`)**: (oklch 0.98 0.01 85)
- **Muted (`--muted`)**: Dark Roast (oklch 0.25 0.02 45)
- **Muted Foreground (`--muted-foreground`)**: (oklch 0.75 0.02 45)
- **Border (`--border`)**: (oklch 0.28 0.02 45)
- **Card (`--card`)**: Dark Truffle (oklch 0.20 0.02 45)
- **Card Foreground (`--card-foreground`)**: (oklch 0.98 0.01 85)
- **Accent (`--accent`)**: Rich Gold (oklch 0.70 0.14 80)
- **Accent Foreground (`--accent-foreground`)**: (oklch 0.18 0.02 45)

## 4. Spacing Scale & Rhythm
We avoid tight, claustrophobic layouts. Space implies luxury.
- **Micro Rhythm:** 0.25rem, 0.5rem, 1rem (for intra-component spacing like buttons, list items).
- **Macro Rhythm:** 4rem, 8rem, 12rem (for inter-section spacing).
- **Asymmetry:** Sections should occasionally break the 12-column grid. Images bleed off the edge, text blocks sit slightly off-center to create visual tension and flow.

## 5. Motion Principles
- **Style:** Smooth, deliberate, and graceful. Like unwrapping a premium gift.
- **Properties:** Opacity and transform (translateY/X). Never animate layout properties.
- **Easing:** Exponential out (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Duration:** 0.6s to 1.2s for macro reveals; 0.2s to 0.3s for micro-interactions (hover states).
- **Reduced Motion:** Always respect `@media (prefers-reduced-motion: reduce)`.

## 6. Shape & Form
- **Radii:** Subtle curves. `var(--radius)` is set to `0.25rem` or `0rem` for an editorial, sharp look, avoiding the "bubbly" SaaS app feel. Images might have slight `0.25rem` rounding, while structural elements remain sharp.
- **Shadows:** Minimal. We rely on color contrast and overlapping elements rather than heavy drop shadows to create depth.
