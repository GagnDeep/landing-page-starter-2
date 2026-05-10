# CakeDelights Design System

## 1. Brand Concept & Aesthetic
The visual foundation for CakeDelights Patiala revolves around **"Celebration & Craftsmanship."** The aesthetic avoids generic, cold, and sterile startup looks. Instead, it utilizes warm, inviting, confection-inspired tones that evoke the joy of a child's birthday, while retaining a polished layout fitting a high-end, 4.8★-rated custom boutique.

## 2. Color Tokens (CSS Variables)
The palette uses warm, confection-inspired hues. All values must be represented using modern OKLCH formatting to guarantee vibrant, consistent display across gamuts.

### Core Palette
- **Buttercream (Backgrounds/Muted):** A warm, soft off-white/cream.
- **Velvet Cocoa (Text/Foregrounds):** A rich, deep dark brown, avoiding harsh pure black.
- **Vibrant Berry (Primary/Accents):** A bright, playful pinkish-red that drives attention to interactive elements.

### Light Mode (`:root`)
- `--background`: Soft Buttercream
- `--foreground`: Velvet Cocoa
- `--primary`: Vibrant Berry
- `--primary-foreground`: Pure White/Light Cream
- `--secondary`: Warm Dough (A muted beige)
- `--secondary-foreground`: Velvet Cocoa
- `--muted`: Vanilla Frost (Very light beige)
- `--muted-foreground`: Faded Cocoa
- `--accent`: Light Berry Frosting
- `--accent-foreground`: Velvet Cocoa
- `--destructive`: Burnt Caramel/Red
- `--border`: Vanilla Frost
- `--input`: Vanilla Frost
- `--ring`: Vibrant Berry

### Dark Mode (`.dark`)
*Note: Dark mode flips the balance, acting like a rich, decadent chocolate box.*
- `--background`: Deep Cocoa
- `--foreground`: Soft Buttercream
- `--primary`: Vibrant Berry (slightly adjusted for contrast)
- `--primary-foreground`: Soft Buttercream
- `--secondary`: Dark Truffle
- `--secondary-foreground`: Soft Buttercream
- `--muted`: Dark Truffle
- `--muted-foreground`: Faded Cream
- `--accent`: Dark Berry
- `--accent-foreground`: Soft Buttercream
- `--destructive`: Vibrant Red/Caramel
- `--border`: Dark Truffle
- `--input`: Dark Truffle
- `--ring`: Vibrant Berry

## 3. Typography
A pairing that marries structural readability with artistic flair.
- **Display/Headings (`--font-display`):** A playful, display-heavy font. Think chunky, bouncy, and expressive (e.g., Fredoka, Sniglet, or a warm display serif like Fraunces). Used for section titles and hero copy.
- **Body (`--font-sans`):** A clean, readable geometric sans-serif (e.g., Poppins, Quicksand, or Nunito) that softens the technical edge of standard sans fonts but remains highly legible on mobile devices.

## 4. Spacing & Sizing
A consistent, modular scale ensures an airy, comfortable rhythm.
- `sm`: 4px - 8px
- `md`: 16px - 24px
- `lg`: 32px - 48px
- `xl`: 64px - 96px
- `2xl`: 128px (Used for distinct section separations)

## 5. Border Radius
Embracing the theme of cakes and pastries, UI elements should lack sharp edges.
- **Radius Scale:** Soft, rounded corners throughout the UI.
- Buttons, cards, and image containers should utilize heavily rounded styles (e.g., `--radius: 1rem;` up to fully pill-shaped `--radius: 9999px;` for primary CTAs).

## 6. Motion Principles & Animations
Animations should feel like pulling taffy or frosting a cake—elastic, bouncy, and joyful.
- **Eases:** Use spring-based animations with slight bounce (e.g., `type: "spring", stiffness: 300, damping: 20` in Framer Motion).
- **Triggers:** Hover states on interactive elements should scale slightly (`scale: 1.05`) with a bouncy release.
- **Accessibility (CRITICAL):** All animations **must** respect user preferences. Always integrate `useReducedMotion` from Framer Motion. If `prefers-reduced-motion` is active, animations must gracefully fallback to instantaneous transitions or simple, gentle crossfades to prevent motion sickness or vestibular discomfort.
