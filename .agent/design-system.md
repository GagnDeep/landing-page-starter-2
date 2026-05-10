# Design System & Token Architecture
**Project**: A-One Cakes and Gift Zone
**Aesthetic Theme**: Boutique Craft (Approachable, Premium, Reliable, 24/7 Rescue)

## 1. Typography System
Pairing an expressive, warm serif for headings with a clean geometric sans for UI text.

**Typefaces:**
- **Heading (`font-heading`)**: *Fraunces* or *Playfair Display* - Evokes warmth, tradition, and editorial elegance.
- **Body/UI (`font-sans`)**: *Outfit* or *Plus Jakarta Sans* - Clean, geometric, reliable, highly legible.

**Scale (Fluid for headings, Fixed for UI):**
- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: fluid(1.25rem, 2vw, 1.5rem)
- `text-2xl`: fluid(1.5rem, 3vw, 2rem)
- `text-3xl`: fluid(1.875rem, 4vw, 2.5rem)
- `text-4xl`: fluid(2.25rem, 5vw, 3.5rem)
- `text-5xl`: fluid(3rem, 7vw, 4.5rem)

## 2. Color Palette (OKLCH)
A warm, inviting palette inspired by baked goods, night-time rescues (24/7 aspect), and premium gifting.

### Brand Hues
- **Primary (Cake Warmth/Caramel)**: `oklch(65% 0.15 45)`
- **Secondary (Deep Night Sky/Reliability)**: `oklch(25% 0.05 260)`
- **Accent (Gold/Celebration)**: `oklch(80% 0.12 85)`

### Light Mode Tokens ("The Morning Display")
- `--background`: Creamy warm white `oklch(98% 0.01 60)`
- `--foreground`: Deep charcoal `oklch(20% 0.02 260)`
- `--primary`: Warm caramel `oklch(65% 0.15 45)`
- `--primary-foreground`: White `oklch(98% 0.01 60)`
- `--secondary`: Soft dough `oklch(92% 0.03 60)`
- `--secondary-foreground`: Charcoal `oklch(20% 0.02 260)`
- `--muted`: Vanilla `oklch(95% 0.02 60)`
- `--muted-foreground`: Warm gray `oklch(55% 0.02 60)`
- `--accent`: Gold `oklch(80% 0.12 85)`
- `--accent-foreground`: Dark brown `oklch(25% 0.04 45)`
- `--border`: Light crust `oklch(90% 0.03 60)`

### Dark Mode Tokens ("The 24/7 Rescue / Evening Fitting")
- `--background`: Deep night `oklch(15% 0.02 260)`
- `--foreground`: Cream text `oklch(95% 0.01 60)`
- `--primary`: Bright caramel `oklch(75% 0.15 45)`
- `--primary-foreground`: Dark brown `oklch(15% 0.05 45)`
- `--secondary`: Midnight blue `oklch(25% 0.04 260)`
- `--secondary-foreground`: Cream text `oklch(95% 0.01 60)`
- `--muted`: Deep slate `oklch(22% 0.02 260)`
- `--muted-foreground`: Cool gray `oklch(65% 0.02 260)`
- `--accent`: Gold `oklch(80% 0.12 85)`
- `--accent-foreground`: Dark background `oklch(15% 0.02 260)`
- `--border`: Subtle night border `oklch(25% 0.02 260)`

## 3. Spacing & Rhythm
Rhythmic spacing that avoids monotonous repetition. Tight groupings for related items, generous spacing for distinct sections.

- `spacing-tight`: 0.25rem - 0.5rem (Icons to text)
- `spacing-base`: 1rem - 1.5rem (Between paragraphs/components)
- `spacing-loose`: 3rem - 4rem (Between minor sections)
- `spacing-section`: 6rem - 8rem (Fluid gap between major page sections)

## 4. Radii & Shapes
Approachable, soft, but distinct. Avoid perfectly pill-shaped buttons everywhere.

- `--radius-sm`: 0.25rem (4px) - Tooltips, small tags
- `--radius-md`: 0.5rem (8px) - Cards, inputs
- `--radius-lg`: 0.75rem (12px) - Major UI panels, images
- `--radius-full`: 9999px - Circular avatars, special CTA badges only

## 5. Shadows & Depth
Subtle, warm shadows in light mode. Depth via lightness in dark mode.

- `shadow-sm`: Soft drop for inputs
- `shadow-md`: Hover states for cards
- `shadow-lg`: Floating elements, modals

## 6. Motion & Interaction
Motion should feel like "gentle, tactile, welcoming". Natural easing.

- **Entrance**: Fade up with slight scale (1.02 -> 1.0) using exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Hover**: Color shift and slight transform. No bouncy easing.
- **Duration**: Fast for UI feedback (150ms), deliberate for page loads (600ms-800ms).
- Respect `prefers-reduced-motion`.
