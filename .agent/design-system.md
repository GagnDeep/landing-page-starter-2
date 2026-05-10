# Royal Flower Decoration: Design System

## Aesthetic Vision
**"Anand Karaj & Floral Artisan"**
The visual identity is warm, inviting, and culturally resonant. It embodies the elegance of Sikh weddings (Anand Karaj) and the meticulous craftsmanship of floral artistry. We avoid generic, cold, or highly corporate "startup" aesthetics. Instead, we lean into tactile elegance, celebration, and organic structure.

## Typography
We pair a highly refined serif for headings (conveying tradition, craft, and elegance) with a clean geometric sans-serif for body text (ensuring modern readability).

- **Heading Font (`--font-heading`)**: Playfair Display, Lora, or similar refined serif. Used for large display titles, section headers, and important quotes.
- **Body Font (`--font-sans`)**: Inter, Plus Jakarta Sans, or similar highly readable geometric sans-serif. Used for all UI elements, paragraphs, and functional text.

## Color Tokens (OKLCH)
Our colors are built on an OKLCH scale to ensure perceptually uniform contrast and symmetric dark/light modes. The palette uses warm buttercream, velvet cocoa, and vibrant berry (floral) accents.

### Light Mode
- **Background**: `oklch(0.98 0.02 60)` - Warm buttercream, a soft, inviting canvas.
- **Foreground**: `oklch(0.20 0.05 45)` - Velvet cocoa, deep and grounding.
- **Primary**: `oklch(0.45 0.15 20)` - Vibrant berry/crimson, representing floral vitality.
- **Primary Foreground**: `oklch(0.98 0.02 60)` - Buttercream text on primary elements.
- **Secondary**: `oklch(0.92 0.03 55)` - Pale sand for subtle contrast.
- **Secondary Foreground**: `oklch(0.30 0.06 45)` - Rich brown for readability.
- **Accent**: `oklch(0.85 0.08 75)` - Soft marigold for highlights.
- **Accent Foreground**: `oklch(0.25 0.05 45)` - Deep brown.
- **Muted**: `oklch(0.95 0.02 60)` - Very soft off-white.
- **Muted Foreground**: `oklch(0.45 0.05 45)` - Soft brown/gray.
- **Border**: `oklch(0.88 0.02 60)` - Subtle, warm dividing lines.

### Dark Mode (Symmetric)
Dark mode shifts to deep, atmospheric elegance like an evening reception.
- **Background**: `oklch(0.18 0.03 45)` - Deep espresso/velvet night.
- **Foreground**: `oklch(0.95 0.02 60)` - Soft buttercream text.
- **Primary**: `oklch(0.55 0.15 20)` - Brighter berry for visibility against dark.
- **Primary Foreground**: `oklch(0.95 0.02 60)` - Buttercream text.
- **Secondary**: `oklch(0.25 0.04 45)` - Rich, darker brown for layered cards.
- **Secondary Foreground**: `oklch(0.90 0.03 55)` - Pale sand.
- **Accent**: `oklch(0.35 0.08 75)` - Muted, glowing marigold.
- **Accent Foreground**: `oklch(0.95 0.02 60)` - Buttercream text.
- **Muted**: `oklch(0.22 0.03 45)` - Subtle elevation.
- **Muted Foreground**: `oklch(0.70 0.04 45)` - Readable soft text.
- **Border**: `oklch(0.30 0.03 45)` - Deep, structural lines.

*(Note: Contrast ratios guarantee WCAG 2.1 compliance for text readability on respective backgrounds).*

## Spacing & Sizing Scale
Using an 8px base for organic rhythm, leaning towards more generous whitespace to let images and typography "breathe" elegantly.
- **Micro**: `0.25rem`, `0.5rem` (for icons, tight group spacing)
- **Component**: `1rem`, `1.5rem` (inner card padding, button sizing)
- **Layout**: `2rem`, `3rem` (between standard blocks)
- **Section**: `6rem`, `8rem`, `12rem` (generous vertical breathing room between major page sections)

## Border-Radius
Soft, gentle curves to mimic natural floral shapes without being overly "bubbly."
- **Small (`--radius-sm`)**: `0.25rem` (subtle rounding for inputs)
- **Medium (`--radius-md`)**: `0.5rem` (standard cards, buttons)
- **Large (`--radius-lg`)**: `1rem` (hero images, large feature panels)
- **Extra Large**: `2rem` (decorative background shapes)

## Shadow Depth
Shadows should feel like soft ambient light falling on tactile materials, not harsh artificial drops.
- **Subtle**: `0 4px 20px oklch(0 0 0 / 0.04)` (for hovering interactive elements)
- **Elevated**: `0 12px 40px oklch(0 0 0 / 0.08)` (for dropdowns, overlapping layout layers)

## Motion Principles
Animation must be intentional, prioritizing elegance over excitement.
- **Easing**: Smooth, drawn-out eases. Use standard CSS `cubic-bezier(0.25, 1, 0.5, 1)` or spring physics with low stiffness and high damping.
- **Reveal**: Content fades and drifts up slowly (e.g., `y: 20, opacity: 0` to `y: 0, opacity: 1` over 0.8s).
- **Reduced Motion**: All animations must respect `prefers-reduced-motion`.
