# Design System: Villa Hair Sense

## Core Aesthetic
Premium, stylist-led, elegant, modern, sophisticated. Editorial approach with visual breathing room and high-contrast typography. Tailored to high-end hair transformations.

## Typography
- **Headings (High-Contrast Serif):** Playfair Display
  - Used for h1, h2, h3, and stylistic pull-quotes.
  - Imparts a classic, premium, and sophisticated salon feel.
- **Body Text (Clean Sans-Serif):** Lato or Montserrat (Implementing Montserrat for a modern, geometric balance to the serif)
  - Used for body paragraphs, UI elements, navigation, and small text.
  - Ensures high legibility and a contemporary finish.

## Color Tokens (CSS Variables)

The palette draws inspiration from sophisticated haircare: deep charcoals, soft creams, and warm metallic accents (gold/champagne). Dark mode is a carefully curated luxury dark theme, not a simple inversion.

### Light Mode (Crisp, Creamy, Elegant)
- `--background`: Soft Cream (e.g., `#faf9f6`)
- `--foreground`: Deep Charcoal (e.g., `#1a1a1a`)
- `--primary`: Warm Metallic/Champagne (e.g., `#d4af37`)
- `--primary-foreground`: White or very light cream
- `--secondary`: Muted Sand/Taupe
- `--secondary-foreground`: Charcoal
- `--muted`: Light Gray/Beige
- `--muted-foreground`: Medium Gray
- `--accent`: Soft Gold
- `--accent-foreground`: Dark Charcoal
- `--border`: Light Beige/Gray

### Dark Mode (Luxurious, Deep, Intimate)
- `--background`: Deep Charcoal/Off-Black (e.g., `#121212` or `#1c1c1c`)
- `--foreground`: Soft Cream (e.g., `#f5f5f5`)
- `--primary`: Warm Metallic/Champagne (e.g., `#d4af37` or slightly brighter for contrast)
- `--primary-foreground`: Deep Charcoal
- `--secondary`: Dark Slate/Taupe
- `--secondary-foreground`: Soft Cream
- `--muted`: Very Dark Gray
- `--muted-foreground`: Light Gray
- `--accent`: Muted Gold
- `--accent-foreground`: Soft Cream
- `--border`: Dark Gray/Charcoal

## Spacing Scale
Emphasizes breathing room and editorial layouts.
- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 2rem (32px)
- `xl`: 4rem (64px) - Used for standard section padding
- `2xl`: 8rem (128px) - Used for heroic spacing and major section delineations

## Border Radius System
Subtle and elegant, avoiding the overly rounded "tech startup" look. Emphasizing slight curves or sharp edges depending on the element.
- `--radius`: 0.375rem (6px) - The baseline for cards, buttons, and inputs. Provides a slight softening without being bubbly.

## Motion Principles
- **Subtle & Deliberate:** Animations should be slow and purposeful (e.g., fades, slow scales, graceful slides).
- **Easing:** Use ease-in-out or custom cubic-bezier for a luxurious, unhurried feel.
- **Staggered Entrances:** Content should reveal itself elegantly upon scrolling.
