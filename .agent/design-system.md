# Design System: Imran Tailor

## Overview
The design system for Imran Tailor establishes a premium, bespoke visual identity. It balances a 20+ year legacy of craftsmanship with a globally accessible digital experience, catering specifically to an NRI audience. The aesthetic is "premium-craft", avoiding generic startup tropes in favor of an elegant, tactile, and authoritative presence.

## Typography
Global typography conventions mandate a high-contrast serif for authoritative headings and a clean, humanist sans-serif for legible body text.

*   **Primary Headings (`--font-heading`):** Playfair Display
    *   *Usage:* Display text, section titles, blockquotes. It evokes heritage, elegance, and the precision of tailoring.
*   **Body & UI Text (`--font-sans`):** Lato or Montserrat (Montserrat preferred for slightly wider, more premium tracking).
    *   *Usage:* Paragraphs, navigation, buttons, small text. It provides modern readability and balances the ornate serif.

## Color Palette (Tokens)
The color palette is grounded in the materials of high-end tailoring. Dark mode is intentionally luxurious, shifting away from pure black towards deep, ambient tones.

### Light Mode (The Atelier)
*   **Background:** Warm, natural linen white.
*   **Foreground:** Deep charcoal (nearly black, but softer for readability).
*   **Primary Accent:** Rich Gold-Leaf (symbolizing premium quality and NRI heritage).
*   **Secondary/Muted:** Slate grey and subtle taupe.
*   **Borders:** Soft, faint grey to separate sections without harsh lines.

### Dark Mode (The Evening Fitting)
*   **Background:** Deep slate/charcoal (not pure black). Evokes a sophisticated, intimate fitting room.
*   **Foreground:** Soft, off-white/cream for reduced eye strain.
*   **Primary Accent:** Luminous Gold (stands out vibrantly against the dark background).
*   **Secondary/Muted:** Mid-tone slate.
*   **Borders:** Very subtle, semi-transparent white/grey.

### Accessibility Note
All text/background pairings must meet WCAG AA standards (minimum 4.5:1 contrast ratio for normal text, 3:1 for large text). Gold accents on light backgrounds should be used carefully for text.

## Spacing & Rhythm
Spacing should feel generous and deliberate, mimicking the careful measurements in tailoring.

*   Use a base-8 or base-4 scale (e.g., 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px).
*   Macro-spacing (between sections): Large (96px - 128px) to allow content to breathe and emphasize individual elements.
*   Micro-spacing (within components): Tight and precise.

## Border Radii
Curves should be minimal or intentional to maintain a structured, classic feel.

*   `--radius-sm`: 2px (Subtle softening)
*   `--radius-md`: 4px (Standard for small inputs)
*   `--radius-lg`: 8px (Standard for cards/images)
*   Avoid overly rounded (pill-shaped) elements unless specifically required for a specific UI paradigm, as they lean too "tech-startup".

## Motion Principles
Animation should be subtle, deliberate, and smooth.
*   **Fade-ins:** Gentle opacity transitions for images and text blocks as they scroll into view.
*   **Hover states:** Soft color transitions or slight scale changes (e.g., `scale-105`) for interactive elements.
*   **Avoid:** Bouncy, erratic, or overly fast animations. The tone is measured and precise.
