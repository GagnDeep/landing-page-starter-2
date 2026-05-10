# Design System: Capital Driving School

## 1. Brand Philosophy & Aesthetic
- **Core Principles:** Calm, Patient, Professional, Confident, Approachable, Expert-led.
- **Aesthetic:** High-end modern service studio. It should not look like a generic tech startup or a cheap local business. It should feel established, trustworthy, and premium.
- **Target Audience:** First-timers, nervous learners, people seeking flexible timings and professional instruction.

## 2. Typography
The typography aims for a balance between approachability (sans-serif) and authority/elegance (serif headers, or high-quality sans-serif).
- **Primary Font (Headings):** *Outfit* or *Plus Jakarta Sans* for a modern, approachable yet highly legible geometric feel. Alternatively, a sophisticated serif like *Playfair Display* for a more premium, established look if it fits the "high-end service studio" vibe. Let's go with a combination:
  - **Headings (H1-H4):** `Playfair Display` (Serif, authoritative, premium, calm).
  - **Body & UI (Sans-serif):** `Inter` or `Plus Jakarta Sans` (Clean, highly readable, modern, approachable).
- **Weights:**
  - Regular (400) for body text.
  - Medium (500) for UI elements, buttons, and subheadings.
  - Semi-Bold (600) or Bold (700) for emphasized headers.
- **Scale:**
  - Base size: `16px` (1rem).
  - Use a modular scale for headings to ensure rhythmic hierarchy.

## 3. Color Palette
The brand color palette should communicate calm and professionalism. Avoid overly bright or aggressive colors.
- **Primary:** Deep Teal or Forest Green (Calming, associated with go/safety, growth, and professionalism).
- **Secondary:** Warm Sand / Beige (Approachable, human, reduces sterility).
- **Accents:** Soft Gold or Amber (Premium touch, highlighting key elements like stars/ratings).

### Light Mode Tokens
- **Background:** Soft off-white (e.g., `#FAFAFA` or `#F5F5F0`).
- **Foreground:** Deep slate or charcoal (e.g., `#1A1C1A`). Never pure black.
- **Primary:** Deep Forest Green (`#0A3F2A`).
- **Primary Foreground:** Off-white (`#F5F5F0`).
- **Secondary:** Warm Sand (`#E8E4D9`).
- **Secondary Foreground:** Deep Forest Green (`#0A3F2A`).
- **Muted:** Light neutral (`#EFEFEF`).
- **Muted Foreground:** Medium gray/slate (`#666666`).
- **Accent:** Soft Gold (`#D4AF37`).
- **Border:** Light gray (`#E0E0E0`).

### Dark Mode Tokens
Dark mode must be visually rich, utilizing deep, balanced tones (e.g., deep charcoal/green) rather than `#000000`.
- **Background:** Deep rich charcoal/green (`#0B120F`).
- **Foreground:** Soft off-white (`#EAEAEA`).
- **Primary:** Soft Emerald / Lighter Teal (`#2E8B57` or `#4CA173`) - adapted for dark mode contrast.
- **Primary Foreground:** Very dark charcoal (`#0B120F`).
- **Secondary:** Deep earth / muted dark brown-green (`#1C2420`).
- **Secondary Foreground:** Soft off-white (`#EAEAEA`).
- **Muted:** Dark slate (`#1E2320`).
- **Muted Foreground:** Light slate (`#A0A4A0`).
- **Accent:** Soft Gold (`#C5A028`).
- **Border:** Dark subtle border (`#2A302C`).

## 4. Spacing & Visual Rhythm
- **Base Unit:** `4px` or `0.25rem`.
- **Scale:** `0.25rem` (1), `0.5rem` (2), `1rem` (4), `1.5rem` (6), `2rem` (8), `3rem` (12), `4rem` (16), `6rem` (24).
- **Intent:** Generous whitespace. Layouts should breathe, reflecting the "calm and patient" ethos. Do not cram content. Use padding to create distinct, focused sections.

## 5. Border Radius
Rounded corners contribute to the "approachable" and "safe" feeling. Sharp corners are too rigid.
- **Small (sm):** `0.375rem` (6px) - Inputs, small buttons, tags.
- **Medium (md):** `0.5rem` (8px) - Standard buttons, dropdowns, small cards.
- **Large (lg):** `0.75rem` (12px) - Main content cards, modals.
- **Extra Large (xl):** `1rem` (16px) or `1.5rem` (24px) - Large hero images, prominent feature sections.

## 6. Shadows (Elevation)
Shadows should be soft and diffuse, adding depth without being harsh.
- **Light Mode:** Use a cool-toned, very transparent dark gray/blue.
  - `sm`: Soft outline shadow.
  - `md`: For cards.
  - `lg`: For dropdowns and modals.
- **Dark Mode:** Shadows are less visible. Use subtle borders or very dark, tight shadows. Elevation in dark mode often relies on slightly lighter background colors (like the `Secondary` or `Muted` tokens) rather than heavy shadows.

## 7. Motion Principles
- **Vibe:** Smooth, deliberate, and calm. Avoid fast, bouncy, or aggressive animations.
- **Easing:** Ease-out or ease-in-out curves that feel natural.
- **Duration:** Slightly slower than typical aggressive tech sites (e.g., 300ms-500ms for significant transitions).
- **Accessibility:** Respect `prefers-reduced-motion` for all animations.
