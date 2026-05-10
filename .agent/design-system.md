# Guide Events Design System

## Brand Identity & Aesthetic
The visual design reflects a sophisticated, "royal Punjabi luxury" aesthetic. It evokes the feel of a high-end editorial magazine rather than a standard tech startup.

- **Vibe:** Warm, elegant, premium, trustworthy, meticulous.
- **Key Motifs:** Deep jewel tones (represented in photography), rich neutrals, clean and spacious layouts, deliberate and slow typography.

## Typography
A sophisticated pairing ensuring readability and elegance.

- **Primary Heading Font:** Cormorant Garamond (High-contrast serif). Used for H1, H2, and key editorial H3s. Evokes tradition and luxury.
- **Primary Body Font:** Montserrat (Refined humanist sans-serif). Used for body copy, buttons, labels, and UI elements. Clean, modern, and highly readable.
- **Fallback:** System UI serif and sans-serif stacks.

### Typography Scale (Tailwind)
- `text-xs`: 0.75rem / 1rem
- `text-sm`: 0.875rem / 1.25rem
- `text-base`: 1rem / 1.5rem (Default body)
- `text-lg`: 1.125rem / 1.75rem (Intro text)
- `text-xl`: 1.25rem / 1.75rem
- `text-2xl`: 1.5rem / 2rem (H4)
- `text-3xl`: 1.875rem / 2.25rem (H3)
- `text-4xl`: 2.25rem / 2.5rem (H2)
- `text-5xl`: 3rem / 1 (H1)
- `text-6xl`: 3.75rem / 1 (Hero Title)

## Color Palette (OKLCH)
Defined in `app/globals.css`. Contrast ratios mapped to WCAG AA.

### Light Mode ("Daytime Elegance")
- **Background:** Warm off-white `oklch(0.98 0.01 90)`
- **Foreground:** Deep charcoal `oklch(0.24 0.01 260)`
- **Primary (Accent):** Gold/Champagne `oklch(0.77 0.14 85)`
- **Secondary/Muted:** Light warm gray `oklch(0.93 0.01 90)`
- **Border:** Soft warm gray `oklch(0.85 0.01 90)`

### Dark Mode ("Evening Reception")
*Not merely an inversion, but a curated evening theme.*
- **Background:** Deepest charcoal `oklch(0.2 0.01 260)`
- **Foreground:** Warm off-white `oklch(0.98 0.01 90)`
- **Primary (Accent):** Gold/Champagne `oklch(0.77 0.14 85)`
- **Secondary/Muted:** Dark charcoal `oklch(0.3 0.01 260)`
- **Border:** Mid-dark charcoal `oklch(0.4 0.01 260)`

## Spacing & Layout Rhythm
- **Container:** Max-width of `7xl` (`1280px`) with generous side padding (`px-6` mobile, `px-12` desktop).
- **Section Spacing:** Generous vertical rhythm. Use `py-24` or `py-32` for distinct sections to let content breathe.
- **Component Spacing:** Use multiples of `4` (`gap-4`, `gap-8`, `gap-16`).

## Border Radii
- **Default Radius:** `0.5rem` (`var(--radius)`). Soft but structured. Avoid pill-shaped extremes unless specifically for a badge or distinct UI element.
- **Cards/Images:** Use `rounded-lg` or `rounded-xl` for large imagery.

## Motion & Interaction Principles
All animations are built using Framer Motion and standard CSS.
- **Philosophy:** "Deliberate and graceful." No bouncy or fast transitions. Animations should feel like turning the pages of an expensive book.
- **Reveal:** Gentle fade-ins and subtle upward translations (`y: 20` to `y: 0`) over 0.6s to 1s.
- **Easing:** Smooth easing curves (e.g., `ease: [0.25, 0.1, 0.25, 1]`).
- **Accessibility:** ALL animations MUST respect `prefers-reduced-motion` using Framer Motion's `useReducedMotion` hook.

## Component Specifics
- **Buttons:** Solid primary buttons use the gold/champagne background with dark charcoal text. Secondary buttons use transparent backgrounds with borders. Hover states should feature a subtle opacity change or a slow background fill, not an abrupt color swap.
- **Cards:** Minimal borders in light mode, perhaps a very subtle shadow (`shadow-sm`). In dark mode, rely on surface color differentiation (`bg-card`).

## Accessibility
- Minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.
- Interactive elements must have clear `:focus-visible` ring states (utilizing the gold/champagne ring color).
