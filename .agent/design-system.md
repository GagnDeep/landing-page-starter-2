# Boho Salon Design System

## Brand Identity & Vibe
**Boho-Modern Elegance:** A blend of organic warmth and refined luxury. The aesthetic is welcoming, artistic, and sophisticated, avoiding generic "tech" minimalism. It caters to a high-end, NRI-friendly clientele who appreciate craftsmanship, especially in nail art and advanced haircare.
**Key Textures/Feel:** Earthy tones, soft contrasts, subtle luxurious textures (like velvet or polished chrome), and relaxed yet professional elegance.

## Typography
To achieve the luxurious yet readable editorial look:
- **Primary/Heading Font:** `Playfair Display` (High-contrast serif). Used for all headers, hero statements, and pull quotes to impart an elegant, editorial aesthetic.
- **Secondary/Body Font:** `Lato` (Clean sans-serif). Used for body text, navigation, meta information, and functional UI elements to ensure legibility and a modern touch.

## Color Tokens & Palette
Colors are defined using modern OKLCH to allow for smooth perceptual gradients and accurate color manipulation. Both light and dark modes are explicitly designed to maintain a high-contrast, accessible, and premium feel.

The primary palette leans into earthy terracottas, warm sands, muted sages, and deep charcoal/browns, moving away from harsh pure blacks and whites.

### Light Mode (Root)
- `--background`: Warm off-white/sand `oklch(0.98 0.01 75)`
- `--foreground`: Deep earthy brown/charcoal `oklch(0.25 0.02 45)`
- `--card`: Soft white `oklch(0.99 0.005 75)`
- `--card-foreground`: Deep earthy brown `oklch(0.25 0.02 45)`
- `--popover`: Soft white `oklch(0.99 0.005 75)`
- `--popover-foreground`: Deep earthy brown `oklch(0.25 0.02 45)`
- `--primary`: Terracotta / Warm Clay `oklch(0.55 0.12 40)`
- `--primary-foreground`: Off-white `oklch(0.98 0.01 75)`
- `--secondary`: Muted Sage / Olive `oklch(0.85 0.04 120)`
- `--secondary-foreground`: Dark Olive/Brown `oklch(0.30 0.04 120)`
- `--muted`: Warm Grey/Sand `oklch(0.94 0.01 75)`
- `--muted-foreground`: Medium Earthy Grey `oklch(0.55 0.02 75)`
- `--accent`: Muted Blush / Sand `oklch(0.92 0.03 40)`
- `--accent-foreground`: Dark Terracotta `oklch(0.35 0.08 40)`
- `--destructive`: Soft Red/Rust `oklch(0.60 0.15 25)`
- `--destructive-foreground`: White `oklch(1 0 0)`
- `--border`: Light Sand `oklch(0.90 0.01 75)`
- `--input`: Light Sand `oklch(0.90 0.01 75)`
- `--ring`: Terracotta `oklch(0.55 0.12 40)`
- `--sidebar`: Soft white `oklch(0.99 0.005 75)`
- `--sidebar-foreground`: Deep earthy brown `oklch(0.25 0.02 45)`
- `--sidebar-border`: Light Sand `oklch(0.90 0.01 75)`

### Dark Mode (Luxurious & Intentional)
The dark mode is not purely inverted, but a shift towards rich, deep chocolate browns, espresso, and warm charcoals to maintain the luxurious boho vibe.
- `--background`: Deep Espresso `oklch(0.20 0.02 45)`
- `--foreground`: Warm Sand / Off-white `oklch(0.95 0.01 75)`
- `--card`: Rich Chocolate `oklch(0.25 0.02 45)`
- `--card-foreground`: Warm Sand `oklch(0.95 0.01 75)`
- `--popover`: Rich Chocolate `oklch(0.25 0.02 45)`
- `--popover-foreground`: Warm Sand `oklch(0.95 0.01 75)`
- `--primary`: Soft Terracotta / Rust `oklch(0.65 0.10 40)`
- `--primary-foreground`: Deep Espresso `oklch(0.20 0.02 45)`
- `--secondary`: Deep Forest/Olive `oklch(0.30 0.04 120)`
- `--secondary-foreground`: Pale Sage `oklch(0.85 0.04 120)`
- `--muted`: Dark Warm Grey `oklch(0.30 0.01 75)`
- `--muted-foreground`: Light Warm Grey `oklch(0.70 0.01 75)`
- `--accent`: Deep Blush/Rust `oklch(0.35 0.05 40)`
- `--accent-foreground`: Light Blush `oklch(0.90 0.03 40)`
- `--destructive`: Deep Rust `oklch(0.50 0.12 25)`
- `--destructive-foreground`: Warm Sand `oklch(0.95 0.01 75)`
- `--border`: Dark Warm Grey `oklch(0.30 0.01 75)`
- `--input`: Dark Warm Grey `oklch(0.30 0.01 75)`
- `--ring`: Soft Terracotta `oklch(0.65 0.10 40)`
- `--sidebar`: Rich Chocolate `oklch(0.25 0.02 45)`
- `--sidebar-foreground`: Warm Sand `oklch(0.95 0.01 75)`
- `--sidebar-border`: Dark Warm Grey `oklch(0.30 0.01 75)`

## Structural Tokens

### Spacing Scale
A generous, airy spacing scale to allow the typography and imagery to breathe, characteristic of premium editorial design.
- `xs`: 0.25rem
- `sm`: 0.5rem
- `md`: 1rem
- `lg`: 2rem
- `xl`: 4rem
- `2xl`: 8rem
- `3xl`: 12rem

### Border Radius
Subtle rounding to maintain organic softness without feeling too playful.
- `--radius`: `0.5rem` (8px base for cards and buttons)
- `md`: `calc(var(--radius) - 2px)`
- `lg`: `calc(var(--radius) + 2px)`
- `full`: `9999px` (for pills and avatars)

### Shadow System
Soft, diffuse shadows that mimic natural lighting, avoiding harsh drop shadows.
- `sm`: `0 1px 2px 0 oklch(0.25 0.02 45 / 0.05)`
- `md`: `0 4px 6px -1px oklch(0.25 0.02 45 / 0.1), 0 2px 4px -1px oklch(0.25 0.02 45 / 0.06)`
- `lg`: `0 10px 15px -3px oklch(0.25 0.02 45 / 0.1), 0 4px 6px -2px oklch(0.25 0.02 45 / 0.05)`

## Motion Principles
- **Pacing:** Slow, graceful, and deliberate. Easing should be natural (ease-in-out or custom cubic-bezier for a "breathe" effect).
- **Animations:** Subtle fade-ins, gentle upward translates on scroll (reveal), and smooth image scaling on hover. Avoid bouncy, rapid, or aggressive animations.
