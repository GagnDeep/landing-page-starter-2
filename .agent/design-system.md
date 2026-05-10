# Design System: Harbhajan's Catering Patiala

## Visual Identity Concept: "Modern Heritage"
The visual identity blends the rich, vibrant heritage of authentic Punjabi cuisine with clean, modern web aesthetics. It evokes the warmth of a traditional kitchen and family functions, balanced by a sophisticated layout suitable for a 4.8-star luxury catering business.

## Typography
To balance tradition and readability, the site uses a high-contrast pairing:

- **Headings (`--font-heading`):** `Playfair Display`
  - *Intent:* A bold serif to evoke heritage, elegance, and tradition. Perfect for hero headlines, section titles, and featured statistics.
- **Body (`--font-sans`):** `Inter`
  - *Intent:* A clean, legible sans-serif for body text, UI elements, navigation, and dense informational text to ensure modern readability and high performance.

## Color Tokens (CSS Variables)

We use OKLCH colors for perceptually uniform gradients and accessible contrast.

### Light Mode (The "Warm Kitchen")
A bright, welcoming palette inspired by turmeric, saffron, marigolds, and warm clay, grounded by crisp neutrals.

- `--background`: `oklch(0.99 0.01 75)` - Soft Cream (Warm, non-stark white)
- `--foreground`: `oklch(0.20 0.01 75)` - Deep Charcoal/Espresso
- `--card`: `oklch(1 0 0)` - Pure White
- `--card-foreground`: `oklch(0.20 0.01 75)` - Deep Charcoal
- `--popover`: `oklch(1 0 0)`
- `--popover-foreground`: `oklch(0.20 0.01 75)`
- `--primary`: `oklch(0.55 0.18 50)` - Rich Marigold/Turmeric (Primary Brand Color)
- `--primary-foreground`: `oklch(0.98 0.01 75)` - Warm White
- `--secondary`: `oklch(0.85 0.04 60)` - Muted Sand/Clay
- `--secondary-foreground`: `oklch(0.25 0.04 60)` - Earthy Brown
- `--muted`: `oklch(0.94 0.01 75)` - Very Light Warm Gray
- `--muted-foreground`: `oklch(0.50 0.02 75)` - Mid-tone Gray
- `--accent`: `oklch(0.90 0.06 100)` - Soft Muted Sage/Green
- `--accent-foreground`: `oklch(0.30 0.04 100)` - Deep Forest Green
- `--destructive`: `oklch(0.60 0.18 20)` - Brick Red
- `--border`: `oklch(0.90 0.01 75)`
- `--input`: `oklch(0.90 0.01 75)`
- `--ring`: `oklch(0.55 0.18 50)` - Matches Primary
- `--radius`: `0.75rem` (Generous, rounded corners)

### Dark Mode (The "Evening Banquet")
A luxurious, intimate dark mode reminiscent of an evening reception, avoiding stark blacks in favor of deep warm grays and glowing accents.

- `--background`: `oklch(0.18 0.01 75)` - Deep Warm Gray (Not stark black)
- `--foreground`: `oklch(0.96 0.01 75)` - Off-White
- `--card`: `oklch(0.22 0.02 75)` - Slightly lighter warm gray
- `--card-foreground`: `oklch(0.96 0.01 75)`
- `--popover`: `oklch(0.22 0.02 75)`
- `--popover-foreground`: `oklch(0.96 0.01 75)`
- `--primary`: `oklch(0.65 0.16 50)` - Brightened Marigold (for contrast on dark)
- `--primary-foreground`: `oklch(0.15 0.01 75)` - Very Dark Charcoal
- `--secondary`: `oklch(0.30 0.03 60)` - Deep Earthy Brown
- `--secondary-foreground`: `oklch(0.96 0.01 75)` - Off-White
- `--muted`: `oklch(0.25 0.01 75)` - Dark Gray
- `--muted-foreground`: `oklch(0.70 0.01 75)` - Light Gray
- `--accent`: `oklch(0.30 0.04 100)` - Deep Forest Green
- `--accent-foreground`: `oklch(0.96 0.01 75)`
- `--destructive`: `oklch(0.50 0.18 20)` - Brick Red
- `--border`: `oklch(0.30 0.01 75)`
- `--input`: `oklch(0.30 0.01 75)`
- `--ring`: `oklch(0.65 0.16 50)` - Matches Dark Primary

## Spacing & Layout
- Generous padding and margins to reflect "generous portions" and "hospitality".
- Container width maxes out at `1280px` or `1440px` for readability.
- Consistent rhythm using Tailwind's default spacing scale (`4`, `8`, `12`, `16`, `24`, `32`).

## Motion Principles
- **Smooth and Intentional:** Animations should feel smooth, welcoming, and deliberate, avoiding frantic or overly snappy easing.
- **Fade and Slide:** Content should gently fade in and slide up to replicate the feeling of a grand presentation.
- **Reduced Motion:** Always respect `prefers-reduced-motion` with accessible fallbacks.
- **Micro-interactions:** Hover states should be soft (e.g., a slow scale-up of images, subtle color shifts) to convey premium quality.
