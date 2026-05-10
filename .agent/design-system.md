# Design System: Sangam Caterer

## Brand Core
- **Identity**: Premier multi-cuisine wedding catering service based in Patiala. A fusion of authentic Punjabi traditions and international culinary excellence.
- **Vibe**: Traditional hospitality warmth combined with modern, clean culinary professionalism. Visually sophisticated, fresh, artistic, premium boutique.
- **Aesthetic**: Not a generic corporate or clichéd AI-startup look. It's a "warm-planner" and "full-service" premium aesthetic conveying trust and creativity.

## Typography
- **Headings**: **Playfair Display** (High-contrast serif). Provides elegance, a sense of heritage, precision, and an upscale dining/event vibe.
- **Body & UI**: **Montserrat** (Clean humanist sans-serif). Ensures readability, modern cleanliness, and structure.

## Color Palette (OKLCH)

### Light Mode (The Grand Banquet)
A warm, inviting, and clean environment.
- **Background**: Soft, warm cream/off-white (`oklch(0.98 0.01 75)`)
- **Foreground**: Deep charcoal/espresso for crisp readability (`oklch(0.20 0.02 20)`)
- **Primary**: Rich saffron/terracotta or deep crimson (`oklch(0.50 0.15 35)`)
- **Primary Foreground**: Off-white (`oklch(0.98 0.01 75)`)
- **Secondary**: Soft beige/champagne (`oklch(0.90 0.03 75)`)
- **Secondary Foreground**: Deep brown (`oklch(0.30 0.05 45)`)
- **Muted**: Pale taupe (`oklch(0.95 0.02 75)`)
- **Muted Foreground**: Medium grey-brown (`oklch(0.55 0.02 75)`)
- **Accent**: Gold/Mustard (`oklch(0.70 0.15 80)`)
- **Border/Ring**: Subtle warm grey (`oklch(0.85 0.02 75)`)

### Dark Mode (The Evening Fitting)
Not a simple inversion. A deep, ambient, luxurious background evoking a sophisticated evening gala or intimate high-end dinner.
- **Background**: Deep aubergine/midnight brown (`oklch(0.15 0.02 20)`)
- **Foreground**: Soft cream/ivory (`oklch(0.95 0.01 75)`)
- **Card/Popover**: Slightly lighter deep brown (`oklch(0.20 0.02 20)`)
- **Primary**: Muted gold/copper (`oklch(0.65 0.12 60)`)
- **Primary Foreground**: Dark background (`oklch(0.15 0.02 20)`)
- **Secondary**: Dark plum/wine (`oklch(0.25 0.05 15)`)
- **Secondary Foreground**: Soft cream (`oklch(0.95 0.01 75)`)
- **Muted**: Very dark taupe (`oklch(0.22 0.02 20)`)
- **Muted Foreground**: Warm medium grey (`oklch(0.65 0.02 75)`)
- **Accent**: Copper/Bronze (`oklch(0.55 0.10 45)`)
- **Border/Ring**: Low-contrast dark grey/brown (`oklch(0.30 0.02 20)`)

## Space & Sizing
- **Spacing Scale**: Follows a standard `rem`-based 4pt system (e.g., 0.25rem, 0.5rem, 1rem, 2rem, 4rem, 8rem).
- **Rhythm**: Generous whitespace. Padding around sections should breathe, especially in a premium context (using large vertical padding like `py-24` or `py-32` for main sections).
- **Border Radius**: Subdued curves to maintain a sophisticated, slightly architectural feel.
  - `--radius: 0.5rem` (8px). Elements aren't completely sharp, but they avoid the overly-pillowy look of casual apps.

## Motion & Animation
- **Principles**: Subtle, deliberate, and smooth. Transitions should feel like an elegant unveiling (fade-ins, gentle upward translates, slow scales on images). No bouncy or frenetic animations.
- **Accessibility**: Must respect `prefers-reduced-motion`.
- **Implementation**: SSR-safe, driven by CSS variables where necessary.

## Design Components
- **Images**: High-quality, un-cropped feeling or tastefully framed. Soft overlays if text is placed on top.
- **Cards**: Borderless or with very subtle borders. Heavy use of shadow in light mode is discouraged; rely on background color separation or gentle borders. Dark mode relies on subtle lightness differences.
