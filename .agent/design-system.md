# Design System: Bawa Caterers Enterprises

## 1. Core Philosophy
The visual identity of Bawa Caterers Enterprises reflects "Royal Punjabi" elegance. The design balances warmth, opulence, and professional precision to create a high-end, immersive digital experience. It moves beyond generic templates, conveying a luxurious hospitality brand.

## 2. Typography
A distinct pairing of classic serifs for headers with high personality and clean, legible sans-serifs for body text to ensure readability and modern elegance.

- **Heading Font:** Playfair Display (or similar high-contrast serif)
  - Usage: Display headers, primary section titles, large numbers (e.g., stats).
  - Characteristics: Elegant, traditional, luxurious.
- **Body Font:** Inter (or similar highly legible sans-serif)
  - Usage: Paragraphs, UI elements, navigation, fine print.
  - Characteristics: Clean, neutral, highly readable across devices.

## 3. Color Tokens (OKLCH)
A sophisticated palette focusing on royal gold, deep velvet, and neutral slate, engineered for both light and dark modes to guarantee accessibility and consistent opulence.

### Light Mode
- `--background`: Warm off-white, resembling fine linen. `oklch(0.98 0.01 75)`
- `--foreground`: Deep slate/charcoal for crisp contrast. `oklch(0.25 0.02 260)`
- `--primary`: Royal Gold (vibrant yet refined). `oklch(0.75 0.15 80)`
- `--primary-foreground`: Deep contrast against gold. `oklch(0.15 0.02 260)`
- `--secondary`: Deep Velvet/Crimson accent. `oklch(0.40 0.15 15)`
- `--secondary-foreground`: Crisp white. `oklch(0.98 0 0)`
- `--accent`: Subtle gold/sand tint for soft highlights. `oklch(0.92 0.05 80)`
- `--accent-foreground`: Deep charcoal. `oklch(0.20 0.02 260)`
- `--muted`: Neutral slate (soft grey/blue). `oklch(0.90 0.02 260)`
- `--muted-foreground`: Medium slate. `oklch(0.45 0.02 260)`
- `--border`: Soft boundary lines. `oklch(0.85 0.02 260)`

### Dark Mode
- `--background`: Deep velvet/charcoal almost black. `oklch(0.15 0.02 260)`
- `--foreground`: Soft off-white for low eye-strain. `oklch(0.95 0.01 75)`
- `--primary`: Royal Gold (slightly desaturated for dark mode glow). `oklch(0.70 0.14 80)`
- `--primary-foreground`: Dark base. `oklch(0.15 0.02 260)`
- `--secondary`: Deep Crimson/Velvet. `oklch(0.35 0.12 15)`
- `--secondary-foreground`: Crisp white. `oklch(0.98 0 0)`
- `--accent`: Dark slate with a hint of gold. `oklch(0.25 0.04 80)`
- `--accent-foreground`: Soft white. `oklch(0.95 0.01 75)`
- `--muted`: Dark slate. `oklch(0.22 0.02 260)`
- `--muted-foreground`: Medium soft slate. `oklch(0.65 0.02 260)`
- `--border`: Subtle dark boundaries. `oklch(0.25 0.02 260)`

## 4. Spacing System
A generously proportioned scale to let content breathe, emphasizing a premium feel.

- `space-xs`: 0.25rem (4px)
- `space-sm`: 0.5rem (8px)
- `space-md`: 1rem (16px)
- `space-lg`: 2rem (32px)
- `space-xl`: 4rem (64px) - Used for primary section spacing.
- `space-2xl`: 8rem (128px) - Deep gaps between major thematic sections.

## 5. Border Radii
Combining gentle curves for UI elements with grander arches for imagery to evoke traditional architecture.

- `--radius-sm`: 0.25rem (subtle buttons, inputs)
- `--radius-md`: 0.5rem (cards, dropdowns)
- `--radius-lg`: 1rem (hero containers, featured images)
- `--radius-arch`: 9999px (pill-shaped buttons, decorative arch cutouts)

## 6. Shadow & Elevation System
Shadows should feel like natural, diffused light, never harsh, simulating depth and physical luxury.

- `shadow-sm`: Diffused baseline shadow for slight elevation.
- `shadow-md`: Hover states for interactive elements.
- `shadow-lg`: Prominent elevation for modal dialogs and floating navigations.
- `shadow-glow`: A subtle, colored glow (often royal gold) to highlight active primary actions.

## 7. Motion & Animation Principles
Motion must be "subtle yet luxurious", reflecting meticulous hospitality.

- **Easing:** Smooth, languid curves. Avoid rapid, bouncy spring physics unless explicitly needed. Use custom cubic-bezier (e.g., `cubic-bezier(0.25, 1, 0.5, 1)`).
- **Fade & Drift:** Sections should gracefully fade in and drift upward gently as the user scrolls.
- **Stagger:** Lists (e.g., menu items, gallery images) should enter with a measured, cascading delay.
- **Accessibility:** Must rigorously respect `prefers-reduced-motion`, disabling all non-essential translations and leaving only simple opacities or static states.
