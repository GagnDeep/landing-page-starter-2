# A2Zee Events - Design System

## Core Design Principles
A2Zee Events is a premier destination wedding planning firm. The design intent is "hospitality-pro meets luxury destination." The aesthetic should feel like a high-end editorial magazine, balancing logistical precision with emotive storytelling.

**Vibe:** Premium-craft, bespoke tailoring, deep rich tones, intentional dark mode (ambient background 'The Evening Fitting').
**Avoid:** Clichéd "tech startup" generic designs, bright neon colors, flat illustrations.

## Typography
The typographic system relies on a high-contrast pairing to establish a refined, editorial feel.

*   **Primary Heading Font (`--font-heading`): Playfair Display**
    *   **Usage:** Hero titles, section headers, elegant drop caps, and key pull quotes.
    *   **Characteristics:** High contrast serif, sophisticated, evokes traditional luxury and editorial print.
*   **Primary Sans/Body Font (`--font-sans`): Montserrat (or Lato)**
    *   **Usage:** Body copy, UI elements (buttons, labels), metadata, technical details.
    *   **Characteristics:** Clean, humanist sans-serif, highly legible, provides modern contrast to the traditional serif.

### Typographic Scale
*   **H1 (Hero):** 4rem - 6rem, tight tracking (`tracking-tight`), `font-normal` or `font-medium`.
*   **H2 (Section):** 2.5rem - 3.5rem, `tracking-tight`, `font-normal`.
*   **H3 (Card/Subsection):** 1.5rem - 2rem, `font-medium`.
*   **Body (Large):** 1.125rem - 1.25rem, `leading-relaxed`.
*   **Body (Base):** 1rem, `leading-relaxed`.
*   **Caption/Eyebrow:** 0.875rem, `tracking-widest`, uppercase, medium weight.

## Color Tokens (OKLCH)
Colors are mapped as CSS variables in `globals.css` using the OKLCH color space for accessibility and consistent visual appeal. The dark mode is an intentional "The Evening Fitting" deep ambient background, not just an inversion.

### Light Mode ('The Morning Ceremony')
*   **Background (`--background`):** `oklch(0.98 0.01 60)` (Warm ivory/alabaster)
*   **Foreground (`--foreground`):** `oklch(0.25 0.02 260)` (Deep slate/charcoal)
*   **Primary (`--primary`):** `oklch(0.35 0.05 260)` (Midnight slate)
*   **Primary Foreground (`--primary-foreground`):** `oklch(0.98 0.01 60)` (Alabaster)
*   **Secondary/Accent (`--secondary`):** `oklch(0.75 0.12 75)` (Muted Gold Leaf / Champagne)
*   **Secondary Foreground (`--secondary-foreground`):** `oklch(0.20 0.02 260)` (Very dark slate)
*   **Muted (`--muted`):** `oklch(0.95 0.01 60)` (Soft linen)
*   **Muted Foreground (`--muted-foreground`):** `oklch(0.55 0.02 260)` (Mid-grey slate)
*   **Border (`--border`):** `oklch(0.90 0.01 60)` (Subtle grey border)
*   **Card (`--card`):** `oklch(1 0 0)` (Pure white or near white for contrast)
*   **Card Foreground (`--card-foreground`):** `oklch(0.25 0.02 260)`

### Dark Mode ('The Evening Fitting')
*   **Background (`--background`):** `oklch(0.18 0.02 260)` (Rich deep charcoal/onyx)
*   **Foreground (`--foreground`):** `oklch(0.95 0.01 60)` (Soft linen text)
*   **Primary (`--primary`):** `oklch(0.85 0.05 75)` (Brightened Gold Leaf for contrast)
*   **Primary Foreground (`--primary-foreground`):** `oklch(0.18 0.02 260)` (Charcoal)
*   **Secondary/Accent (`--secondary`):** `oklch(0.25 0.03 260)` (Elevated deep slate)
*   **Secondary Foreground (`--secondary-foreground`):** `oklch(0.95 0.01 60)` (Linen text)
*   **Muted (`--muted`):** `oklch(0.22 0.02 260)` (Slightly lighter than background)
*   **Muted Foreground (`--muted-foreground`):** `oklch(0.70 0.01 260)` (Soft grey)
*   **Border (`--border`):** `oklch(0.30 0.02 260)` (Subtle dark border)
*   **Card (`--card`):** `oklch(0.20 0.02 260)` (Elevated dark card)
*   **Card Foreground (`--card-foreground`):** `oklch(0.95 0.01 60)`

## Spacing & Sizing Scale
A generous, airy spacing system to reflect luxury.
*   **Base Unit:** `0.25rem` (Tailwind default)
*   **Section Padding (Y):** `py-24` or `py-32` (Heavy use of vertical whitespace)
*   **Container Width:** Max width 80rem (`max-w-7xl`), allowing for elegant negative space.
*   **Gaps:** Use `gap-8`, `gap-12`, `gap-16` for grid layouts rather than tight clustered groups.

## Border Radius System
*   **Base (`--radius`):** `0.5rem` (Subtle rounding, not overly bubbly)
*   **Sharp Edges:** Use `rounded-none` or `rounded-sm` for imagery and high-impact containers to evoke a print-like, architectural feel.
*   Avoid large pill shapes (`rounded-full`) except for small interactive elements like pagination dots or avatars.

## Shadows & Depth
*   **Light Mode:** Focus on subtle, diffuse shadows that simulate ambient light.
    *   `shadow-sm` for interactive elements.
    *   `shadow-lg` (with low opacity, e.g., `rgb(0 0 0 / 0.05)`) for floating cards.
*   **Dark Mode:** Minimize shadow usage; rely on subtle border highlights (`border-t border-white/5`) or slight background color elevation (`bg-card`) to define depth.

## Motion & Animation Principles
*   **Intent:** Smooth, deliberate, and unhurried. No bouncy or rapid transitions.
*   **Duration:** Typically `500ms` - `700ms` for page transitions or reveal animations.
*   **Easing:** Use custom cubic-bezier (e.g., `cubic-bezier(0.22, 1, 0.36, 1)`) for a 'slow reveal' cinematic effect.
*   **Accessibility:** All animations must respect `prefers-reduced-motion`. In Tailwind, use the `motion-reduce:` prefix (e.g., `motion-reduce:transition-none`).
*   **Technical Implementation:** Animated components must be SSR-safe and driven by CSS variables for themeing.
*   **Common Effects:** Slow fade-ins on scroll, subtle image scale-up on hover (e.g., `hover:scale-105 duration-700`), gentle parallax effects.