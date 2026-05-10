# Design System & Blueprint

## Brand Identity & Tone
**Brand:** General Williams Physiotherapy (led by Dr. Iftikhar Ali Khan)
**Focus:** Paralysis rehabilitation, chronic recovery, NRI-focused care
**Aesthetic:** "Clinical-Premium" — Established, safe, highly professional, and distinctly non-generic. High-trust, accessible, and sophisticated.

## Typography
**Headers (Serif):** *Playfair Display*
A sophisticated, high-contrast serif that conveys authority, heritage, and elite care. Used for headings, pull quotes, and major section titles.
- CSS Variable: `--font-heading`

**Body (Sans-Serif):** *Inter*
A clean, highly legible, and neutral sans-serif that ensures maximum accessibility and clarity for medical information and dense copy.
- CSS Variable: `--font-sans`

## Color Palette (OKLCH)
The palette uses OKLCH color tokens to ensure perceptual uniformity and high contrast across light and dark modes. The colors are chosen to evoke trust, calm, and clinical premium authority.

### Light Mode
- **Background:** Clean White (`oklch(0.99 0.01 250)`) — Crisp, clinical feel without being harsh.
- **Foreground:** Deep Slate (`oklch(0.25 0.02 250)`) — Very dark blue-grey for maximum legibility without the harshness of pure black.
- **Primary:** Trust Blue (`oklch(0.40 0.08 250)`) — A deep, authoritative blue representing medical expertise and reliability.
- **Primary Foreground:** White (`oklch(0.99 0 0)`)
- **Secondary / Accent:** Healing Teal / Sage (`oklch(0.65 0.08 190)`) — Calm, restorative, and optimistic color for highlights and soft accents.
- **Secondary Foreground:** Deep Slate (`oklch(0.25 0.02 250)`)
- **Muted / Surface:** Soft Blue-Grey (`oklch(0.96 0.01 250)`) — For secondary cards and subtle section backgrounds.
- **Muted Foreground:** Slate (`oklch(0.45 0.02 250)`)
- **Border:** Light Slate (`oklch(0.90 0.01 250)`)
- **Destructive:** Clinical Red (`oklch(0.60 0.15 20)`)

### Dark Mode
- **Background:** Deep Navy (`oklch(0.18 0.02 250)`) — Immersive, premium dark mode.
- **Foreground:** Soft White (`oklch(0.95 0.01 250)`)
- **Primary:** Trust Blue Light (`oklch(0.70 0.08 250)`)
- **Primary Foreground:** Deep Navy (`oklch(0.18 0.02 250)`)
- **Secondary / Accent:** Healing Teal (`oklch(0.65 0.08 190)`)
- **Secondary Foreground:** Deep Navy (`oklch(0.18 0.02 250)`)
- **Muted / Surface:** Slate Navy (`oklch(0.25 0.02 250)`)
- **Muted Foreground:** Soft Slate (`oklch(0.75 0.02 250)`)
- **Border:** Dark Slate (`oklch(0.30 0.02 250)`)
- **Destructive:** Soft Red (`oklch(0.65 0.15 20)`)

## Spacing Scale
A consistent spacing rhythm to establish hierarchy and breathing room, essential for a premium feel.
- **Base Unit:** 4px (0.25rem)
- **Compact:** 8px, 12px, 16px (Tight grouping within cards)
- **Standard:** 24px, 32px (Between related components)
- **Generous:** 48px, 64px (Between distinct conceptual blocks)
- **Sectional:** 96px, 128px (Major structural breaks to give a "premium" uncrowded feel)

## Border Radius
Subtle rounding to feel approachable but clinical (not toy-like).
- **Small (Buttons/Inputs):** 6px (`0.375rem`)
- **Medium (Cards/Images):** 12px (`0.75rem`)
- **Large (Sections):** 24px (`1.5rem`)

## Shadow Depth & Elevation
Shadows are soft, diffuse, and slightly cool-tinted to match the clinical vibe.
- **Level 1 (Subtle):** Hover states for buttons.
- **Level 2 (Float):** Cards and modular content blocks.
- **Level 3 (Modal):** Popovers, dropdowns, and dialogs.

## Motion & Animation Principles
- **Comfort & Stability:** Animations must be exceptionally smooth, predictable, and slow enough to feel reassuring. No erratic or bouncing movements.
- **Easing:** Use soft ease-out curves (e.g., `cubic-bezier(0.33, 1, 0.68, 1)` or spring `stiffness: 100, damping: 20`).
- **Duration:** Slightly longer durations (0.4s - 0.6s) to feel deliberate and calm.
- **Accessibility:** Strictly observe `prefers-reduced-motion` and use `useReducedMotion` hook in Framer Motion to fall back to simple opacity fades.
