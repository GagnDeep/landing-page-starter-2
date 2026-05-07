# Design System: Crown Caterers

## Brand Ethos
Crown Caterers represents the pinnacle of luxury destination weddings and premium catering for high-end NRI clientele. The visual language must communicate tradition, artistry, impeccable service, and modern sophistication. It should feel less like a tech startup and more like an editorial spread in a high-end luxury lifestyle magazine.

## Typography
To achieve the sophisticated, 'destination-luxury' aesthetic, we employ a dual-font strategy:

- **Headings (Primary): Playfair Display**
  - **Personality:** Elegant, traditional, authoritative, yet artistic. The high contrast and distinct serifs evoke classic luxury and editorial finesse.
  - **Usage:** All main headings (H1, H2, H3), large quote pullouts, and significant numeric data (e.g., years of heritage).
  - **CSS Variable:** `--font-heading`

- **Body & UI (Secondary): Montserrat**
  - **Personality:** Clean, modern, highly legible, and geometric. It provides a crisp counterpoint to the ornate serif headings.
  - **Usage:** All body copy, UI elements (buttons, navigation, form labels), captions, and small descriptive text.
  - **CSS Variable:** `--font-sans`

## Color Tokens (OKLCH)

The color palette shifts from generic grayscale to rich, deep tones that suggest heritage (gold, deep navy/charcoal, warm parchment) while maintaining high contrast.

### Light Mode
- **Background (`--background`):** Warm, soft off-white/parchment. `oklch(0.98 0.01 80)`
- **Foreground (`--foreground`):** Deep, rich charcoal (near black but warmer). `oklch(0.20 0.01 250)`
- **Primary (`--primary`):** Elegant, subdued gold/champagne. `oklch(0.75 0.12 80)`
- **Primary Foreground (`--primary-foreground`):** Deep charcoal for high contrast against gold. `oklch(0.20 0.01 250)`
- **Secondary (`--secondary`):** Very pale, subtle champagne/beige for large subtle areas. `oklch(0.95 0.02 80)`
- **Secondary Foreground (`--secondary-foreground`):** Rich charcoal. `oklch(0.25 0.01 250)`
- **Muted (`--muted`):** Soft greige. `oklch(0.92 0.01 80)`
- **Muted Foreground (`--muted-foreground`):** Medium-dark taupe/gray. `oklch(0.50 0.01 80)`
- **Accent (`--accent`):** Deep, regal navy blue. `oklch(0.30 0.05 250)`
- **Accent Foreground (`--accent-foreground`):** Crisp white. `oklch(0.98 0 0)`
- **Card (`--card`):** Pure white or slightly cooler off-white to lift from background. `oklch(1 0 0)`
- **Card Foreground (`--card-foreground`):** Deep charcoal. `oklch(0.20 0.01 250)`
- **Border (`--border`):** Delicate, subtle gold/beige line. `oklch(0.85 0.03 80)`
- **Ring (`--ring`):** Subdued gold for focus states. `oklch(0.75 0.12 80)`

### Dark Mode
*Dark mode must feel like an exclusive evening event—deep, moody, with glowing highlights.*
- **Background (`--background`):** Deep, luxurious obsidian/midnight. `oklch(0.15 0.02 250)`
- **Foreground (`--foreground`):** Soft, warm off-white (less harsh than pure white). `oklch(0.95 0.01 80)`
- **Primary (`--primary`):** Luminous, warm gold. `oklch(0.80 0.14 80)`
- **Primary Foreground (`--primary-foreground`):** Deep obsidian. `oklch(0.15 0.02 250)`
- **Secondary (`--secondary`):** Rich, dark charcoal/brown. `oklch(0.25 0.02 250)`
- **Secondary Foreground (`--secondary-foreground`):** Soft off-white. `oklch(0.95 0.01 80)`
- **Muted (`--muted`):** Darker, muted charcoal. `oklch(0.20 0.01 250)`
- **Muted Foreground (`--muted-foreground`):** Soft, medium taupe. `oklch(0.65 0.01 80)`
- **Accent (`--accent`):** Deep, glowing sapphire/navy. `oklch(0.40 0.08 250)`
- **Accent Foreground (`--accent-foreground`):** Soft white. `oklch(0.95 0.01 80)`
- **Card (`--card`):** Slightly lighter obsidian to separate from background. `oklch(0.18 0.02 250)`
- **Card Foreground (`--card-foreground`):** Soft off-white. `oklch(0.95 0.01 80)`
- **Border (`--border`):** Subtle, dark gold/bronze line. `oklch(0.35 0.04 80)`
- **Ring (`--ring`):** Luminous gold. `oklch(0.80 0.14 80)`

## Spacing & Rhythm
Luxury design relies heavily on negative space. The spacing scale is expansive to allow elements to breathe.

- **Micro (4px - 12px):** Used sparingly for fine detailing within complex components.
- **Base (16px - 24px):** Standard text margins and internal component padding.
- **Macro (32px - 64px):** Separation between related blocks of content or standard section padding on mobile.
- **Grand (96px - 160px+):** The hallmark of luxury layout. Used for major section breaks on desktop to create a deliberate, unhurried pacing as the user scrolls.

## Motion Principles
Motion should feel like a slow, deliberate reveal, never frantic or bouncy.

- **Pacing:** Slow to medium durations (e.g., 400ms - 800ms for large transitions).
- **Easing:** Smooth, cinematic curves. Heavy use of `ease-out` (decelerating) so elements glide gently into place.
- **Effects:**
  - Subtle fade-ins combined with gentle upward translations (`fade-up`).
  - Slow, continuous zooming on background imagery (`ken-burns` effect) to create a sense of scale and depth without jarring movement.
  - Elegant stagger effects for lists or grids to guide the eye sequentially.
- **Hover States:** Soft color transitions or slight scale increases. Avoid aggressive shadows or abrupt color snaps.
