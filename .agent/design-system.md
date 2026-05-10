# Design System: Blinking Eye Events

## Overview
This document outlines the core visual language and design system for Blinking Eye Events, a premium, full-service event and wedding planning firm based in Chandigarh. The aesthetic is a balance between a "warm-planner" feel and "full-service" professional rigor. It moves away from generic corporate aesthetics towards a refined, boutique studio identity conveying trust, creativity, and 24/7 reliability.

## Typography
Global typography conventions mandate a high-contrast serif for headers and a clean humanist sans-serif for body text.

- **Primary Font (Headings):** Playfair Display (High-contrast serif, elegant, character-rich, suited for wedding/boutique feel)
- **Secondary Font (Body/UI):** Montserrat (Clean, modern, highly legible humanist sans-serif)

### Typography Scale
- **H1:** 4rem (Desktop) / 3rem (Mobile) - Playfair Display, Regular / Italic accents
- **H2:** 3rem (Desktop) / 2.25rem (Mobile) - Playfair Display, Regular
- **H3:** 2.25rem (Desktop) / 1.75rem (Mobile) - Playfair Display, Medium
- **H4:** 1.5rem (Desktop) / 1.25rem (Mobile) - Playfair Display, Medium
- **Lead:** 1.25rem - Montserrat, Regular
- **Body:** 1rem - Montserrat, Regular
- **Small:** 0.875rem - Montserrat, Light
- **Tiny:** 0.75rem - Montserrat, Medium (Uppercase, tracking wider)

## Color Palette (OKLCH Tokens)
The palette uses deep, rich tones (charcoal, slate, gold-leaf accents) with a warm foundational base. Dark mode represents an intentional "Evening Fitting" ambient background rather than a simple inversion.

### Light Mode (Daylight Celebration)
- `--background`: oklch(0.98 0.01 75) /* Warm off-white / Pearl */
- `--foreground`: oklch(0.20 0.02 75) /* Deep Charcoal */
- `--primary`: oklch(0.45 0.08 75) /* Muted Gold / Brass */
- `--primary-foreground`: oklch(0.98 0.01 75) /* Pearl */
- `--secondary`: oklch(0.92 0.02 75) /* Warm Sand */
- `--secondary-foreground`: oklch(0.20 0.02 75) /* Deep Charcoal */
- `--muted`: oklch(0.95 0.01 75) /* Soft Linen */
- `--muted-foreground`: oklch(0.50 0.02 75) /* Slate Grey */
- `--accent`: oklch(0.85 0.04 75) /* Champagne */
- `--accent-foreground`: oklch(0.20 0.02 75) /* Deep Charcoal */
- `--border`: oklch(0.90 0.02 75) /* Light Sand Border */
- `--card`: oklch(1.0 0.0 0) /* Pure White for contrast */
- `--card-foreground`: oklch(0.20 0.02 75) /* Deep Charcoal */

### Dark Mode (The Evening Fitting)
- `--background`: oklch(0.15 0.01 75) /* Deep Obsidian/Charcoal */
- `--foreground`: oklch(0.95 0.01 75) /* Soft Pearl */
- `--primary`: oklch(0.65 0.10 75) /* Radiant Gold-leaf */
- `--primary-foreground`: oklch(0.15 0.01 75) /* Deep Obsidian */
- `--secondary`: oklch(0.25 0.02 75) /* Dark Slate */
- `--secondary-foreground`: oklch(0.95 0.01 75) /* Soft Pearl */
- `--muted`: oklch(0.20 0.01 75) /* Dark Linen */
- `--muted-foreground`: oklch(0.70 0.02 75) /* Light Slate Grey */
- `--accent`: oklch(0.35 0.04 75) /* Deep Bronze */
- `--accent-foreground`: oklch(0.95 0.01 75) /* Soft Pearl */
- `--border`: oklch(0.25 0.02 75) /* Dark Slate Border */
- `--card`: oklch(0.18 0.01 75) /* Slightly lighter than background */
- `--card-foreground`: oklch(0.95 0.01 75) /* Soft Pearl */

## Spacing Scale
Uses an 8px base grid system for vertical and horizontal rhythm.
- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-4`: 1rem (16px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px)
- `space-24`: 6rem (96px) - Section padding
- `space-32`: 8rem (128px) - Hero padding

## Border Radius
Boutique feel demands subtle, elegant curves rather than sharp or overly pill-shaped elements.
- `--radius-sm`: 0.125rem (2px)
- `--radius-md`: 0.25rem (4px)
- `--radius-lg`: 0.5rem (8px)
- `--radius-xl`: 1rem (16px)

## Shadow System
Shadows should feel like natural, diffused light, never harsh.
- `shadow-sm`: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- `shadow-md`: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)
- `shadow-lg`: 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)
- `shadow-elegant`: 0 20px 40px -10px rgb(0 0 0 / 0.08)

## Motion Principles
Motion should prioritize elegance, intentionality, and grace. Animations must be SSR-safe, driven by CSS variables for themeing, and respect `prefers-reduced-motion`.
- **Durations:** Slow and deliberate (300ms - 600ms).
- **Easings:** `cubic-bezier(0.22, 1, 0.36, 1)` for smooth, elegant decelerations.
- **Fade Ins:** Soft opacity transitions.
- **Parallax:** Subtle background parallax on scroll to create depth.
- **Hover States:** Gentle lift or color bloom (e.g., gold accents catching the light).
- **Reduced Motion:** Provide `motion-reduce:animate-none` or `motion-reduce:transition-none` alternatives for all animations.
