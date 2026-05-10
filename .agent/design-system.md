# Design System: Azad Driving School

## Brand Identity & Principles
Azad Driving School represents **Govt-Registered Authority, Real-Traffic Safety, and Modern Accessibility**. The design must balance the rigor and trust of a certified institution with a welcoming, high-conversion digital experience suited for modern learners (especially for automatic car classes).

**Core Pillars:**
- **Authority & Trust:** Deep, grounded tones and sturdy typography.
- **Safety & Clarity:** High visibility accents (safety amber/gold), clear structural rhythms, and unmistakable calls-to-action.
- **Accessibility:** Generous spacing, large touch targets, and full respect for WCAG contrast ratios and motion preferences.

---

## Typography
To avoid generic AI defaults, we utilize a combination of an authoritative, sign-like display font for headings and a highly legible, modern sans-serif for body text.

- **Headings (`var(--font-heading)`):** **Oswald**
  *Rationale: Oswald evokes highway signage and institutional authority. It is sturdy, impactful, and instills confidence.*
- **Body (`var(--font-sans)`):** **DM Sans**
  *Rationale: DM Sans is a friendly, geometric sans-serif that ensures excellent readability across small and large viewports, softening the strictness of Oswald.*

---

## Color Palette (OKLCH)

The color palette uses OKLCH for consistent perceived lightness. It relies on a "Deep Highway Slate" for authority and "Safety Amber" for accents and the 4.7★ rating.

### Light Mode
- **Background:** `oklch(0.99 0.01 250)` (Crisp, slightly cool off-white)
- **Foreground:** `oklch(0.15 0.02 250)` (Deep slate/charcoal)
- **Primary:** `oklch(0.30 0.05 250)` (Authoritative Navy)
- **Primary Foreground:** `oklch(0.99 0.01 250)` (White)
- **Secondary:** `oklch(0.95 0.02 250)` (Light slate gray)
- **Secondary Foreground:** `oklch(0.20 0.04 250)` (Dark slate)
- **Accent (Safety Amber):** `oklch(0.75 0.18 55)` (High-visibility gold/amber for ratings and CTA highlights)
- **Accent Foreground:** `oklch(0.15 0.02 250)`
- **Muted:** `oklch(0.96 0.01 250)`
- **Muted Foreground:** `oklch(0.55 0.02 250)`
- **Border/Input:** `oklch(0.90 0.02 250)`
- **Ring:** `oklch(0.75 0.18 55)` (Amber focus ring for visibility)
- **Card/Popover:** `oklch(1.0 0 0)`

### Dark Mode (The "Night Drive")
Dark mode is not a simple inversion; it is an ambient, deep background that reduces eye strain while maintaining the authoritative navy tint.
- **Background:** `oklch(0.12 0.02 250)` (Very deep slate)
- **Foreground:** `oklch(0.98 0.01 250)` (Soft white)
- **Primary:** `oklch(0.85 0.05 250)` (Softened navy/blue for dark mode)
- **Primary Foreground:** `oklch(0.12 0.02 250)`
- **Secondary:** `oklch(0.20 0.03 250)` (Dark slate gray)
- **Secondary Foreground:** `oklch(0.98 0.01 250)`
- **Accent (Safety Amber):** `oklch(0.70 0.16 55)` (Slightly subdued amber to prevent glare)
- **Accent Foreground:** `oklch(0.12 0.02 250)`
- **Muted:** `oklch(0.18 0.02 250)`
- **Muted Foreground:** `oklch(0.70 0.02 250)`
- **Border/Input:** `oklch(0.25 0.02 250)`
- **Ring:** `oklch(0.70 0.16 55)`
- **Card/Popover:** `oklch(0.15 0.02 250)`

---

## Spacing Scale
A mathematically sound 4px/8px base scale ensures a predictable visual rhythm.
- `space-1` : 0.25rem (4px)
- `space-2` : 0.5rem (8px)
- `space-3` : 0.75rem (12px)
- `space-4` : 1rem (16px)
- `space-6` : 1.5rem (24px)
- `space-8` : 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px)
- `space-24`: 6rem (96px)
- `space-32`: 8rem (128px)

---

## Border Radius
Slightly rounded corners to balance strict authority with approachability.
- **Base (`--radius`):** `0.5rem` (8px)
- **Small (`--radius-sm`):** `calc(var(--radius) - 2px)` (6px)
- **Medium (`--radius-md`):** `calc(var(--radius) - 2px)` (Wait, let's stick to standard `var(--radius)` math)
- *Refined mapping:*
  - `--radius`: `0.5rem`
  - `--radius-sm`: `calc(var(--radius) * 0.75)` (6px)
  - `--radius-md`: `calc(var(--radius))` (8px)
  - `--radius-lg`: `calc(var(--radius) * 1.5)` (12px)
  - `--radius-xl`: `calc(var(--radius) * 2)` (16px)

---

## Shadows
Subtle, structured shadows for depth without muddiness.
- **Light Mode:**
  - `sm`: `0 1px 2px 0 oklch(0.15 0.02 250 / 0.05)`
  - `md`: `0 4px 6px -1px oklch(0.15 0.02 250 / 0.1), 0 2px 4px -1px oklch(0.15 0.02 250 / 0.06)`
  - `lg`: `0 10px 15px -3px oklch(0.15 0.02 250 / 0.1), 0 4px 6px -2px oklch(0.15 0.02 250 / 0.05)`
- **Dark Mode:**
  - Shadows in dark mode are primarily rendered as inner borders or extremely soft, darker drop shadows (`oklch(0 0 0 / 0.5)`).

---

## Motion Principles
Animations should feel intentional, smooth, and safe—like a well-executed lane change.
- **Durations:** Fast for micro-interactions (150ms), moderate for layout shifts (300ms).
- **Easings:** `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind's `ease-in-out` is acceptable, but a slightly more deceleration-heavy curve implies control).
- **Accessibility:** All animated components must respect `prefers-reduced-motion` using the `motion-reduce:` utility. Visual changes under `motion-reduce` should fallback to instant opacity transitions or remain static.
