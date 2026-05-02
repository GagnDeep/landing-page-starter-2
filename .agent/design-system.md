# Kohinoor Trends - Design System

## 1. Brand Identity
Kohinoor Trends is a trusted boutique serving generations with high-quality ethnic and bridal wear. The brand identity is "elegant, spacious, and grounded", honoring heritage while providing a modern, seamless experience. Avoid generic startup aesthetics. Embrace a sophisticated, luxurious, and "trusted boutique" feel.

## 2. Typography
We utilize a pairing of a sophisticated serif for headers and a clean, humanist sans for body text.

- **Headers (`--font-heading`)**: Playfair Display (or similar sophisticated serif) - Offers a timeless, elegant, and high-end boutique aesthetic suitable for editorial and bridal spotlights.
- **Body (`--font-sans`)**: Figtree / Lato (humanist sans) - Provides modern readability and clean lines for product descriptions, navigation, and dense information.

## 3. Color Palette & Tokens (Light/Dark Modes)
The palette is deeply rooted in hues of gold (representing bridal elegance), silk (soft, rich textures), and deep earth tones (grounded heritage). Light and dark modes are treated as first-class citizens. Accessibility and contrast ratios are prioritized.

### Light Mode
- **Background**: Silk White (`oklch(0.98 0.01 70)`) - A warm, off-white mimicking raw silk.
- **Foreground**: Deep Earth (`oklch(0.2 0.02 50)`) - Almost black with a hint of warm brown for softer contrast.
- **Primary**: Deep Maroon / Heritage Red (`oklch(0.4 0.12 20)`) - Represents bridal wear and tradition.
- **Primary Foreground**: Silk White (`oklch(0.98 0.01 70)`)
- **Secondary**: Golden Tan (`oklch(0.85 0.06 70)`)
- **Secondary Foreground**: Deep Earth (`oklch(0.2 0.02 50)`)
- **Accent**: Antique Gold (`oklch(0.7 0.15 70)`)
- **Muted**: Soft Earth (`oklch(0.93 0.02 60)`)
- **Border**: Pale Gold (`oklch(0.9 0.04 70)`)

### Dark Mode
- **Background**: Charcoal Earth (`oklch(0.18 0.02 50)`) - A deep, grounded, and rich dark background.
- **Foreground**: Silk White (`oklch(0.96 0.01 70)`)
- **Primary**: Soft Golden Amber (`oklch(0.7 0.15 70)`) - Shining against the dark background.
- **Primary Foreground**: Charcoal Earth (`oklch(0.18 0.02 50)`)
- **Secondary**: Deep Maroon / Muted Earth (`oklch(0.3 0.05 30)`)
- **Secondary Foreground**: Silk White (`oklch(0.96 0.01 70)`)
- **Accent**: Antique Gold (`oklch(0.7 0.15 70)`)
- **Muted**: Deep Earth (`oklch(0.25 0.02 50)`)
- **Border**: Dark Gold/Brown (`oklch(0.3 0.03 50)`)

## 4. Spacing System
Generous and deliberate spacing to create a "spacious and grounded" feel.

- `2xs` (0.25rem) - Subtle element gaps
- `xs` (0.5rem) - Icon/text pairing
- `sm` (1rem) - Default padding for small cards
- `md` (2rem) - Section internal spacing
- `lg` (4rem) - White space between major layout blocks
- `xl` (8rem) - Distinctive separation for Hero and Footer, enforcing a high-end editorial feel

## 5. Border Radius
Clean, elegant curves, leaning slightly towards sharper edges to retain a formal, traditional look.

- `sm`: 0.125rem
- `md`: 0.25rem
- `lg`: 0.5rem (Default for cards and images)
- `full`: 9999px (For avatars or distinctive circular badges)

## 6. Shadow System
Soft, elevated, and ethereal to match a silk/boutique theme without feeling heavy.

- `sm`: `0 2px 8px -2px rgba(0,0,0,0.05)`
- `md`: `0 4px 16px -4px rgba(0,0,0,0.08)`
- `lg`: `0 8px 32px -8px rgba(0,0,0,0.12)` (Used for modal or prominent overlays)
- Dark mode shadows will use stronger opacity with a tighter spread to maintain depth against dark backgrounds.

## 7. Motion Principles
Animations should feel graceful, deliberate, and unhurried—like flowing fabric.

- **Duration**: `slow` (500ms), `medium` (300ms), `fast` (150ms)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (Smooth ease-in-out)
- **Effects**:
  - Fade-in and subtle float up for entry animations (heritage timeline, bridal spotlights).
  - Cross-fades for image carousels instead of harsh sliding.
  - Slow scaling (1.0 to 1.05) on hover for high-quality imagery to encourage immersion.
