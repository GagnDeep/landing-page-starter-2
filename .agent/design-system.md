# Design System & Visual Identity
Verma's Bakery & Sweets

## Overview
This design system establishes the visual rules and design tokens for Verma's Bakery & Sweets. The aesthetic must evoke a heritage, artisanal, and fresh-baked quality, moving away from standard modern tech aesthetics. The palette and typography are inspired by the richness of traditional Indian sweets and bakery goods.

## Typography
The project uses a distinctive, artistic typography stack to reflect heritage and elegance.

- **Heading Font**: `Cormorant Garamond`
  - Usage: All `h1` through `h6` elements, large display text, and primary navigation elements.
  - Weight: Typically 400, 500, or 600 (Semi-bold).
  - Tracking: Slightly tight for display sizes to enhance elegance.
- **Body Font**: `Montserrat`
  - Usage: Paragraphs, UI elements, button text, and small details.
  - Weight: 300 (Light), 400 (Regular), 500 (Medium).
  - Tracking: Normal to slightly loose for readability.

## Color Tokens
Color tokens are managed exclusively using CSS variables with `oklch` values to ensure absolute equality between light and dark modes.

### Light Mode
- **Background (Cream)**: `oklch(0.97 0.02 80)`
- **Foreground (Deep Chocolate)**: `oklch(0.25 0.05 40)`
- **Primary (Saffron/Gold)**: `oklch(0.65 0.15 50)`
- **Primary Foreground**: `oklch(0.98 0.01 80)`
- **Secondary (Pistachio)**: `oklch(0.85 0.08 140)`
- **Secondary Foreground**: `oklch(0.25 0.05 40)`
- **Muted (Light Cardamom)**: `oklch(0.90 0.04 100)`
- **Muted Foreground**: `oklch(0.50 0.05 60)`
- **Accent (Rose Water)**: `oklch(0.85 0.08 10)`
- **Accent Foreground**: `oklch(0.25 0.05 40)`

### Dark Mode
- **Background (Deep Chocolate)**: `oklch(0.20 0.04 40)`
- **Foreground (Cream)**: `oklch(0.95 0.02 80)`
- **Primary (Saffron/Gold)**: `oklch(0.70 0.15 50)`
- **Primary Foreground**: `oklch(0.15 0.03 40)`
- **Secondary (Deep Pistachio)**: `oklch(0.35 0.06 140)`
- **Secondary Foreground**: `oklch(0.95 0.02 80)`
- **Muted (Dark Cardamom)**: `oklch(0.30 0.04 100)`
- **Muted Foreground**: `oklch(0.75 0.05 60)`
- **Accent (Deep Rose)**: `oklch(0.35 0.08 10)`
- **Accent Foreground**: `oklch(0.95 0.02 80)`

## Spacing Scale
A consistent spacing scale built on a base of `0.25rem` (4px).

- `space-1`: 0.25rem
- `space-2`: 0.5rem
- `space-3`: 0.75rem
- `space-4`: 1rem
- `space-6`: 1.5rem
- `space-8`: 2rem
- `space-12`: 3rem
- `space-16`: 4rem
- `space-24`: 6rem
- `space-32`: 8rem

*Usage*: `space-4` to `space-8` for component internals, `space-16` to `space-32` for section margins/padding.

## Shadows & Elevation
Shadows are soft, diffuse, and slightly tinted to match the heritage aesthetic, avoiding harsh, synthetic dropshadows.

- `shadow-sm`: Soft ambient shadow for interactive cards.
- `shadow-md`: Elevated cards, dropdowns.
- `shadow-lg`: Modals, high-elevation focus items.
*Note: In dark mode, shadows are subtler or utilize border highlights instead.*

## Motion & Animation Principles
- **Duration**: Gentle and deliberate. Standard transition time: `300ms` - `500ms`.
- **Easing**: Smooth, elegant easing curves (e.g., `cubic-bezier(0.4, 0, 0.2, 1)` or custom ease-out).
- **Triggers**: Scroll-driven fade-ins, gentle upward translates for imagery, subtle scale transforms on hover for interactive elements.
- **Accessibility**: All motion must respect `prefers-reduced-motion` using framer-motion's `useReducedMotion` or equivalent media queries.
