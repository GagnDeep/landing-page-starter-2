# Design System & Visual Identity

## Brand Essence: Royal Punjabi Luxury
Bawa Caterers Enterprises represents the pinnacle of luxury wedding catering, drawing inspiration from royal Punjabi heritage. The visual identity should feel opulent, traditional yet modern, expansive, and deeply trustworthy. The aesthetic must mirror a high-end editorial magazine rather than a typical startup—expect rich textures, dramatic typography, and profound visual depth.

## Typography
The typographic pairing is chosen to balance classic elegance with modern readability.

*   **Headings (Primary): Cormorant Garamond**
    *   *Usage:* Hero titles, section headers, dramatic pull quotes, and oversized numerals.
    *   *Characteristics:* High contrast, elegant serifs, majestic feel. Highly expressive in italics.
    *   *Weights:* Medium (500) for general headings, Bold (700) for emphasis, Italic for graceful accents.

*   **Body (Secondary): Montserrat**
    *   *Usage:* Body copy, small caps utility text, buttons, navigation, and technical details.
    *   *Characteristics:* Clean, geometric, neutral, providing perfect contrast to the ornate serif.
    *   *Weights:* Light (300) or Regular (400) for body text, Medium (500) for interactive elements, SemiBold (600) for small labels.

## Color Palette (Tokens)
The color palette relies on deep jewel tones and rich neutrals to evoke abundance and heritage.

### Light Mode
*   **Background:** `#FAFAF8` (Warm Pearl - a soft, luxurious off-white, never stark white)
*   **Foreground (Text):** `#1A1514` (Deep Charcoal - softer than pure black, reducing eye strain)
*   **Primary (Brand Accents):** `#8B1C31` (Royal Ruby - deep crimson red, symbolizing celebration and prosperity)
*   **Secondary (Accents):** `#0F4C3A` (Emerald Heritage - lush, rich green)
*   **Accent (Highlights):** `#D4AF37` (Antique Gold - used sparingly for borders, delicate icons, and hover states)
*   **Muted (Backgrounds):** `#EFECE6` (Sandstone - for subtle card backgrounds and section breaks)
*   **Muted Foreground:** `#5C5855` (Slate Brown)

### Dark Mode
*   **Background:** `#0A0908` (Obsidian - an ultra-deep, warm black)
*   **Foreground (Text):** `#F2EFE9` (Alabaster - soft white for readability against dark backgrounds)
*   **Primary (Brand Accents):** `#A3243B` (Vibrant Ruby - slightly lighter red for dark mode contrast)
*   **Secondary (Accents):** `#166850` (Bright Emerald)
*   **Accent (Highlights):** `#E5C158` (Luminous Gold - glows softly on dark backgrounds)
*   **Muted (Backgrounds):** `#1A1817` (Deep Espresso - for card and elevated surface backgrounds)
*   **Muted Foreground:** `#A6A09C` (Warm Ash)

## Spacing & Layout Rhythm
The layout should breathe. Luxury is conveyed through negative space.

*   **Section Padding:** Sections should have massive vertical padding (`py-24` or `py-32` in Tailwind) to allow content to command attention.
*   **Container Width:** Use maximum widths (e.g., `max-w-7xl`) but employ asymmetric column layouts (e.g., 5-col / 7-col split) to create editorial tension.
*   **Gaps:** Use wider gaps (`gap-12` or `gap-16`) between grid items to avoid clutter.
*   **Borders:** Where borders are used, they should be hairline thin (`border-width: 1px`) and often utilize the Gold accent with low opacity.

## Motion & Interaction Principles
Animation must be deliberate, slow, and graceful. No bouncy or rapid movements.

*   **Easing:** Use slow ease-out or custom cubic-bezier curves (e.g., `cubic-bezier(0.22, 1, 0.36, 1)`) for a floating, cinematic feel.
*   **Reveal:** Text should reveal line-by-line with a gentle fade and upward drift. Images should utilize slow, dramatic zooms (Ken Burns effect) on hover or scroll.
*   **Accessibility:** All animations must respect `prefers-reduced-motion` using the `useReducedMotion` hook from Framer Motion. Fallbacks should immediately present the final state.
*   **Hover States:** Subtle text color shifts or delicate gold underlines that expand from the center. Images may darken slightly to reveal overlaid text.

## Shape & Geometry
*   **Corners:** Opt for either perfectly sharp corners (`rounded-none`) for a severe, high-fashion look, or very subtle rounding (`rounded-sm`) to soften edges. Avoid pill-shapes or heavy border radii which feel too "startup-tech".
*   **Aspect Ratios:** Favor dramatic, cinematic aspect ratios for imagery (e.g., 21:9 for sweeping venue shots) and classic portrait ratios (3:4 or 4:5) for food and detail shots.