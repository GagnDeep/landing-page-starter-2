# Design System: Your Home Salon

## 1. Brand Identity & Aesthetic Intent
The aesthetic for Your Home Salon is **modern luxury and artistic editorial**. It should evoke the feeling of browsing a high-end lifestyle magazine—sophisticated, convenient, and deeply trustworthy.
- **Not:** Cliché tech startup, generic bootstrap, or overly chaotic.
- **Instead:** Elegant, restrained, highly readable, focusing on negative space, distinct typography, and deliberate visual rhythm.

## 2. Typography
We use a distinctive, sophisticated typography pairing to establish our editorial feel.

* **Primary/Heading Font:** `Playfair Display` (Serif)
  - Usage: H1-H6, large pull quotes, elegant section headers.
  - Characteristics: High contrast, classic, luxurious.

* **Secondary/Body Font:** `Manrope` (Sans-Serif)
  - Usage: Body copy, navigation, micro-copy, functional UI.
  - Characteristics: Clean, geometric but warm, excellent legibility at small sizes.

## 3. Color Tokens (OKLCH)
A refined, earthy, and luxurious palette built around warm creams, deep charcoals, and muted gold/bronze accents.

### Light Mode
```css
:root {
    --background: oklch(0.98 0.01 85); /* Warm, luxurious off-white */
    --foreground: oklch(0.20 0.02 20); /* Deep charcoal, almost black */

    --card: oklch(0.99 0.01 85);
    --card-foreground: oklch(0.20 0.02 20);

    --popover: oklch(0.99 0.01 85);
    --popover-foreground: oklch(0.20 0.02 20);

    --primary: oklch(0.45 0.06 60); /* Deep bronze / muted earthy gold */
    --primary-foreground: oklch(0.98 0.01 85);

    --secondary: oklch(0.92 0.02 75); /* Soft taupe/beige */
    --secondary-foreground: oklch(0.30 0.03 40);

    --muted: oklch(0.94 0.01 80);
    --muted-foreground: oklch(0.50 0.02 40);

    --accent: oklch(0.92 0.02 75);
    --accent-foreground: oklch(0.20 0.02 20);

    --destructive: oklch(0.57 0.20 27);
    --destructive-foreground: oklch(0.98 0.01 85);

    --border: oklch(0.85 0.02 75);
    --input: oklch(0.85 0.02 75);
    --ring: oklch(0.45 0.06 60);

    --radius: 0.25rem; /* Sharp, elegant corners for editorial feel */
}
```

### Dark Mode
```css
.dark {
    --background: oklch(0.18 0.01 20); /* Deep, rich off-black */
    --foreground: oklch(0.95 0.01 85); /* Soft off-white */

    --card: oklch(0.22 0.01 20);
    --card-foreground: oklch(0.95 0.01 85);

    --popover: oklch(0.22 0.01 20);
    --popover-foreground: oklch(0.95 0.01 85);

    --primary: oklch(0.75 0.08 65); /* Soft, luminous gold */
    --primary-foreground: oklch(0.18 0.01 20);

    --secondary: oklch(0.28 0.02 40);
    --secondary-foreground: oklch(0.90 0.02 75);

    --muted: oklch(0.26 0.01 20);
    --muted-foreground: oklch(0.70 0.02 40);

    --accent: oklch(0.28 0.02 40);
    --accent-foreground: oklch(0.95 0.01 85);

    --destructive: oklch(0.57 0.20 27);
    --destructive-foreground: oklch(0.95 0.01 85);

    --border: oklch(0.35 0.02 40);
    --input: oklch(0.35 0.02 40);
    --ring: oklch(0.75 0.08 65);
}
```

## 4. Spacing Scale
The spacing system emphasizes breathing room. High-end design relies heavily on negative space.
- `xs` (4px), `sm` (8px), `md` (16px) - For micro-UI relationships.
- `lg` (24px), `xl` (32px), `2xl` (48px) - For component-level spacing.
- `3xl` (64px), `4xl` (96px), `5xl` (128px) - For section-level spacing. Generous vertical rhythm is mandatory between distinct sections to avoid clutter.

## 5. Border Radius
- We are using a highly restrained border radius (`0.25rem` base).
- **Philosophy:** Harder edges create a more refined, architectural, and editorial framing of images and content, avoiding the "bubbly" tech-startup look.

## 6. Shadows & Elevation
Shadows should be barely perceptible, serving to delicately lift elements off the page rather than draw attention to themselves.
- **Light mode:** Use broad, highly diffused, low-opacity shadows (e.g., `0 10px 40px -10px oklch(0 0 0 / 0.05)`).
- **Dark mode:** Minimize shadows; rely more on subtle borders (`1px solid var(--border)`) and varying background lightness (card vs. background) to define hierarchy.

## 7. Motion & Interaction
Motion should be cinematic, graceful, and purposeful.
- **Durations:** Slower than typical UI (e.g., 300ms - 500ms for transitions) to feel deliberate and luxurious.
- **Easings:** Smooth, elegant curves like `cubic-bezier(0.25, 1, 0.5, 1)`.
- **Triggers:** Fade-ins on scroll, slow slight image scaling (ken burns effect) on hover, delicate line-drawing animations for borders. Absolutely no bouncy, frantic, or overly "playful" animations.
