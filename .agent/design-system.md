# Design System: Sangam Caterer

## Brand Ethos & Aesthetic Direction

**Sangam Caterer** provides high-end, authentic Punjabi and international catering for luxury destination weddings and elite events. The aesthetic direction is **"Destination Luxury & Culinary Editorial"**.

We are intentionally avoiding the generic "AI tech startup" look (glowing gradients, pure black/white, overly rounded corners, inter UI font). Instead, we are aiming for the look of a high-end culinary magazine (e.g., Kinfolk, Cereal, or Vogue Entertaining):
- **Tone**: Sophisticated, appetizing, warm, and highly professional.
- **Visual Rhythm**: Breathable, intentional use of negative space, asymmetric but balanced grid layouts.
- **Texture**: Rich, warm tones that evoke spices, gold, and fine linens, rather than cold digital screens.

---

## 1. Typography

Our typographic choices reflect a balance between traditional elegance and modern legibility.

- **Primary Display / Headings**: `Cormorant Garamond` (Serif)
  - *Usage*: Hero headlines, section titles, large pull quotes.
  - *Characteristics*: High contrast, elegant, evokes heritage and premium quality.
  - *Weights*: Regular (400), Medium (500), SemiBold (600) for varied emphasis.

- **Secondary Body / UI**: `Montserrat` (Sans-Serif)
  - *Usage*: Body copy, navigation, buttons, small captions.
  - *Characteristics*: Clean, geometric, legible at small sizes, modern counterbalance to the serif.
  - *Weights*: Light (300), Regular (400), Medium (500).

---

## 2. Color Palette & Tokens (CSS Variables)

We use `oklch` for our color tokens to ensure perceptual uniformity and smooth gradients. The palette relies on warm, earthy neutrals mixed with rich, appetizing accents (saffron, deep burgundy, olive).

### Light Mode (The "Day Wedding" Aesthetic)
Warm, bright, evoking sunlight on fine linen and fresh ingredients.

- `--background`: `oklch(0.98 0.01 75)` — Warm pearl/alabaster.
- `--foreground`: `oklch(0.20 0.02 20)` — Deep charcoal with a hint of warm brown, softer than pure black.
- `--primary`: `oklch(0.45 0.12 45)` — Rich Saffron / Terracotta. (Signature brand color)
- `--primary-foreground`: `oklch(0.98 0.01 75)` — Matches background for high contrast.
- `--secondary`: `oklch(0.92 0.02 75)` — Light oatmeal/champagne for subtle sections.
- `--secondary-foreground`: `oklch(0.25 0.04 45)` — Deep warm brown.
- `--accent`: `oklch(0.35 0.10 20)` — Deep Burgundy / Wine for striking highlights.
- `--accent-foreground`: `oklch(0.98 0.01 75)` — Alabaster.
- `--muted`: `oklch(0.95 0.01 75)` — Very light warm gray for borders and subtle cards.
- `--muted-foreground`: `oklch(0.50 0.02 75)` — Medium warm gray for secondary text.
- `--border`: `oklch(0.90 0.01 75)` — Soft structural lines.

### Dark Mode (The "Gala Dinner" Aesthetic)
Deep, rich, dramatic, evoking candlelight, fine wine, and luxury evening events.

- `--background`: `oklch(0.15 0.02 20)` — Very deep warm charcoal/espresso.
- `--foreground`: `oklch(0.95 0.01 75)` — Warm off-white/pearl for readability.
- `--primary`: `oklch(0.65 0.15 45)` — Glowing Saffron (lighter for dark mode contrast).
- `--primary-foreground`: `oklch(0.15 0.02 20)` — Deep espresso.
- `--secondary`: `oklch(0.22 0.02 20)` — Slightly lighter charcoal for elevated cards.
- `--secondary-foreground`: `oklch(0.90 0.02 75)` — Soft pearl.
- `--accent`: `oklch(0.45 0.15 20)` — Vibrant Ruby/Wine for dark mode pop.
- `--accent-foreground`: `oklch(0.95 0.01 75)` — Warm off-white.
- `--muted`: `oklch(0.20 0.01 20)` — Subtle contrast background.
- `--muted-foreground`: `oklch(0.70 0.02 75)` — Dimmed warm gray.
- `--border`: `oklch(0.25 0.01 20)` — Visible but unobtrusive structural lines.

---

## 3. Spacing & Rhythm

The layout relies on generous whitespace to create a feeling of luxury and deliberate pacing.

- **Micro (UI Elements)**: Tight, precise spacing for buttons and forms.
- **Macro (Sections)**: Large, sweeping margins. Minimum `py-24` or `py-32` for major sections.
- **Grid**: We favor asymmetrical, 12-column grids where text might span 4 columns and an image spans 7, creating a dynamic, editorial feel rather than a rigid 50/50 split.

---

## 4. Motion Principles

Motion should feel like turning the pages of a high-end magazine—smooth, deliberate, and unhurried.

- **Entry Animations**: Soft fade-ins with slight upward translations (`y: 20`, `opacity: 0` to `y: 0`, `opacity: 1`).
- **Easing**: Custom spring physics with low stiffness and high damping to avoid "bouncy" or "snappy" tech-startup feelings. (e.g., `transition: { type: "spring", stiffness: 50, damping: 20 }`).
- **Hover States**: Subtle scale-ups on imagery (`scale: 1.03` over `0.6s`), never jarring or immediate.
- **Accessibility**: All animations **must** respect `prefers-reduced-motion` using Framer Motion's `useReducedMotion` hook to gracefully degrade to simple opacity fades or no animation.
