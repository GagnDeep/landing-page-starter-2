# Design System: Armaan Driving School

## 1. Brand Identity & Aesthetic
**Vibe:** Trusted Local Institution, Professional, Calm, Meticulous, Authority.
**Avoid:** Generic "AI startup", hyper-modern neon aesthetics, overly playful motifs.

## 2. Typography
We use a sophisticated pairing to project both heritage/trust and modern legibility.

*   **Primary Headings (Serif):** `Merriweather` or `Playfair Display`
    *   *Usage:* H1, H2, H3, Hero typographic elements, pull quotes.
    *   *Characteristics:* Sturdy, authoritative, readable, classic.
*   **Body & UI (Sans-Serif):** `Inter` or `Open Sans`
    *   *Usage:* Body text, buttons, labels, navigation, captions.
    *   *Characteristics:* Clean, highly legible, humanist, approachable.

## 3. Color Tokens
Using OKLCH for consistent perceived lightness. The palette is built around deep navies (trust, authority), slates (professionalism), and road-safety accents (amber/yellow or subtle teal).

### Light Mode (`:root`)
*   **Background:** Off-white/slate-tinted white for less eye strain (`oklch(0.98 0.01 240)`).
*   **Foreground:** Deep charcoal, almost black (`oklch(0.2 0.02 240)`).
*   **Primary:** Deep Navy (`oklch(0.3 0.1 250)`) - Trust, stability.
*   **Primary Foreground:** Crisp white (`oklch(0.98 0 0)`).
*   **Secondary:** Slate Gray (`oklch(0.9 0.02 240)`).
*   **Secondary Foreground:** Deep Navy (`oklch(0.3 0.1 250)`).
*   **Accent:** Safety Amber/Yellow (`oklch(0.8 0.15 80)`) - Highlights, warnings, special CTAs.
*   **Muted:** Light Slate (`oklch(0.95 0.01 240)`).
*   **Border:** Soft Gray (`oklch(0.9 0.01 240)`).
*   **Card:** Pure White (`oklch(1 0 0)`).

### Dark Mode (`.dark`)
Not just an inversion; a rich, deep environment.
*   **Background:** Very Deep Navy/Slate (`oklch(0.15 0.05 250)`).
*   **Foreground:** Soft White/Light Slate (`oklch(0.95 0.01 240)`).
*   **Primary:** Lighter Navy/Blue (`oklch(0.6 0.1 250)`).
*   **Primary Foreground:** Very Deep Navy (`oklch(0.15 0.05 250)`).
*   **Secondary:** Deep Slate (`oklch(0.25 0.04 250)`).
*   **Secondary Foreground:** Soft White (`oklch(0.95 0.01 240)`).
*   **Accent:** Safety Amber/Yellow (`oklch(0.75 0.15 80)`).
*   **Muted:** Deep Slate (`oklch(0.2 0.04 250)`).
*   **Border:** Subtle Light Slate (`oklch(0.3 0.04 250)`).
*   **Card:** Deep Navy (`oklch(0.18 0.05 250)`).

## 4. Spacing & Sizing
*   Based on a standard `0.25rem` (4px) scale.
*   Emphasize ample whitespace to reinforce a "calm and methodical" feeling. Tight, cluttered interfaces induce anxiety; open spaces induce confidence.
*   **Section Padding:** `py-16 md:py-24 lg:py-32`
*   **Container Max Width:** `max-w-7xl`

## 5. Border Radius
*   We use structural, confident shapes. Not overly rounded, not aggressively sharp.
*   **Base (Buttons, Inputs):** `0.375rem` (`rounded-md`)
*   **Cards/Images:** `0.5rem` (`rounded-lg`) or `0.75rem` (`rounded-xl`)

## 6. Shadows (Elevation)
*   Subtle, realistic shadows to create a sense of depth and physical presence, avoiding harsh, digital-looking drop shadows.
*   **Light Mode Shadows:** Soft, cool-toned (navy-tinted) shadows.
*   **Dark Mode Shadows:** Deeper, darker drop shadows, often using subtle borders instead of heavy shadows for elevation.

## 7. Motion & Animation Principles
*   **Intentionality:** Animations should guide the eye, not distract. No bouncy, chaotic, or overly long animations.
*   **Calmness:** Easing should be smooth (e.g., `ease-in-out` or gentle springs).
*   **Accessibility:** Respect `prefers-reduced-motion` strictly across all Framer Motion components.
*   **Types of Motion:** Fade-ins, gentle upward slides for content revealing, slow crossfades for images.
