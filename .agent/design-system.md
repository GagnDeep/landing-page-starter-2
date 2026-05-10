# Design System: Crown Caterers Pvt Ltd

## Brand Profile
Crown Caterers Pvt Ltd is a premier wedding catering service based in Patiala, serving high-end NRI clients and large-scale luxury weddings. Specializing in pure vegetarian luxury dining, the brand exudes prestige, cultural heritage, and meticulous attention to detail.

## Aesthetic Direction: Modern Heritage
The visual design combines the grandeur of Indian wedding traditions with the sleek, minimalist efficiency of modern luxury digital experiences. It must feel artisanal, bespoke, trusted, and deeply authoritative. Avoid standard "SaaS" aesthetics or generic tech looks.

## Typography
Fonts should balance the weight of tradition with modern legibility.

- **Primary Heading Font (Serif):** *Playfair Display* (or *Cormorant Garamond* / *Merriweather*). High contrast, elegant, evokes luxury and heritage. Used for large headlines, pull quotes, and major section titles.
- **Secondary/Body Font (Sans-Serif):** *Inter* (or *Open Sans* / *Lato*). Clean humanist sans, ensuring maximum legibility, especially for smaller text, metadata, and form inputs.

## Color Tokens (OKLCH)
A sophisticated palette relying on rich earthy and regal tones rather than loud artificial colors.

### Light Mode
- **Background (`--background`):** Soft Cream — `oklch(0.98 0.01 90)` (Warm, inviting, linen-like)
- **Foreground (`--foreground`):** Deep Charcoal — `oklch(0.20 0.01 250)` (High contrast but softer than pure black)
- **Primary (`--primary`):** Rich Gold — `oklch(0.70 0.15 70)` (Metallic, warm, celebratory)
- **Primary Foreground (`--primary-foreground`):** Deep Charcoal — `oklch(0.20 0.01 250)` (For text on primary buttons)
- **Secondary (`--secondary`):** Muted Sage — `oklch(0.85 0.04 150)` (Earthy, natural, pure veg connotation)
- **Secondary Foreground (`--secondary-foreground`):** Deep Charcoal — `oklch(0.20 0.01 250)`
- **Muted (`--muted`):** Warm Sand — `oklch(0.95 0.02 85)` (For subtle backgrounds)
- **Muted Foreground (`--muted-foreground`):** Slate Gray — `oklch(0.55 0.01 250)` (For secondary text)
- **Accent (`--accent`):** Terracotta/Crimson hint — `oklch(0.60 0.12 30)` (For traditional Indian accentuation, used sparingly)
- **Accent Foreground (`--accent-foreground`):** Soft Cream — `oklch(0.98 0.01 90)`
- **Border (`--border`):** `oklch(0.90 0.01 90)` (Subtle dividers)
- **Ring (`--ring`):** Rich Gold — `oklch(0.70 0.15 70)`

### Dark Mode
- **Background (`--background`):** Deep Charcoal/Onyx — `oklch(0.15 0.01 250)` (Rich, deep, museum-like dark)
- **Foreground (`--foreground`):** Soft Cream — `oklch(0.95 0.01 90)` (High contrast, easy to read)
- **Primary (`--primary`):** Rich Gold — `oklch(0.75 0.12 70)` (Slightly brighter for dark mode pop)
- **Primary Foreground (`--primary-foreground`):** Deep Charcoal — `oklch(0.15 0.01 250)`
- **Secondary (`--secondary`):** Deep Sage — `oklch(0.25 0.04 150)` (Subtle dark green)
- **Secondary Foreground (`--secondary-foreground`):** Soft Cream — `oklch(0.95 0.01 90)`
- **Muted (`--muted`):** Dark Slate — `oklch(0.20 0.01 250)`
- **Muted Foreground (`--muted-foreground`):** Light Gray — `oklch(0.70 0.01 250)`
- **Accent (`--accent`):** Deep Terracotta — `oklch(0.40 0.10 30)`
- **Accent Foreground (`--accent-foreground`):** Soft Cream — `oklch(0.95 0.01 90)`
- **Border (`--border`):** `oklch(0.25 0.01 250)`
- **Ring (`--ring`):** Rich Gold — `oklch(0.75 0.12 70)`

## Spacing & Sizing Scale
Using fluid spacing based on rem/clamp() for an elegant rhythm.

- **Base padding:** `var(--spacing-4)` (1rem)
- **Section padding (Y):** Generous, breathable sections. Small screens: `4rem`, Large: `8rem`. (Creates rhythm and avoids claustrophobic designs)
- **Container max-width:** `80rem` (1280px) for standard content, allowing wide imagery to bleed to edges.

## Border Radius
Reflecting architectural heritage — slight curves, not overly rounded SaaS pill shapes.

- `--radius-sm`: `0.125rem` (For tiny UI elements, inputs)
- `--radius-md`: `0.25rem` (For cards, standard buttons)
- `--radius-lg`: `0.5rem` (For large image containers)
- `--radius-full`: `9999px` (For avatars or circular icons only)

## Shadows & Depth
Subtle, natural shadows. We avoid harsh drops.

- **Light Mode Depth:** Soft, long, slightly warm shadows simulating natural light on physical materials.
- **Dark Mode Depth:** Dark mode relies more on borders and very subtle glow rather than standard drop shadows to define layering.

## Motion & Easing Principles
- **Duration:** Intentional and slightly luxurious (not snappy or hyper-fast). e.g., `500ms` to `800ms` for large layout shifts.
- **Easing:** Exponential/Quintic easing (e.g., `cubic-bezier(0.22, 1, 0.36, 1)`) for natural deceleration. Things should glide into place elegantly.
- **Reduced Motion:** Always respect `prefers-reduced-motion` with simple opacity cross-fades instead of complex transforms.
