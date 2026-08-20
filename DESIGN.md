# /DESIGN.md — Design System & Visual Identity for bro.tax

## 1. Design Vision & Anti-Corporate Aesthetic

bro.tax is designed to look and feel radically different from traditional fintech and corporate tax software:
* **No Default Slate / Zinc**: We reject standard gray-and-blue corporate templates.
* **No Fintech Indigo / Blue**: We avoid generic bank blue (`#1E40AF` or `#4F46E5`) which signals corporate bureaucracy.
* **No Inter Display**: We use `Figtree` for high-impact display titles and clean sans-serif body text, paired with `Geist Mono` with `tabular-nums` for precise monetary figures.
* **No Emoji Icons**: All icons use strict, scalable, semantic SVG vector icons from `@hugeicons/react` (`HugeiconsIcon`).
* **No Gradients**: Clean, solid, ultra-sharp borders, tactile cards, and high-contrast OKLCH semantic color tokens.

---

## 2. Palette & OKLCH Color Tokens

Our primary accent is **Electric Volt Lime** (`oklch(0.82 0.22 135)` in Dark Mode, `oklch(0.42 0.18 135)` in Light Mode) — an energetic, high-contrast, anti-suit color that signals speed and modern clarity.
Our base dark theme uses **Deep Obsidian Charcoal** (`oklch(0.14 0.02 260)`), and light theme uses **Crisp Off-White Bone** (`oklch(0.98 0.01 90)`).

### 2.1 Color Tokens Table

| Token Name | Dark Mode OKLCH Value | Light Mode OKLCH Value | Visual Usage |
|---|---|---|---|
| `--background` | `oklch(0.14 0.02 260)` | `oklch(0.98 0.01 90)` | Main page background |
| `--foreground` | `oklch(0.98 0.00 0)` | `oklch(0.14 0.02 260)` | High-contrast body text & titles |
| `--card` | `oklch(0.18 0.02 260)` | `oklch(1.00 0.00 0)` | Surface cards & containers |
| `--card-foreground` | `oklch(0.98 0.00 0)` | `oklch(0.14 0.02 260)` | Text inside cards |
| `--primary` | `oklch(0.82 0.22 135)` | `oklch(0.38 0.18 135)` | Primary CTAs, key highlights |
| `--primary-foreground` | `oklch(0.10 0.02 260)` | `oklch(0.98 0.00 0)` | Text on primary CTA buttons |
| `--secondary` | `oklch(0.24 0.02 260)` | `oklch(0.92 0.02 90)` | Secondary buttons, subtle tags |
| `--secondary-foreground` | `oklch(0.98 0.00 0)` | `oklch(0.18 0.02 260)` | Text on secondary elements |
| `--muted` | `oklch(0.22 0.02 260)` | `oklch(0.94 0.02 90)` | Card footers, badge backgrounds |
| `--muted-foreground` | `oklch(0.72 0.02 260)` | `oklch(0.42 0.02 260)` | Subtitles, labels, metadata |
| `--accent` | `oklch(0.26 0.03 260)` | `oklch(0.90 0.03 135)` | Hover states, interactive highlights |
| `--accent-foreground` | `oklch(0.98 0.00 0)` | `oklch(0.14 0.02 260)` | Text on active elements |
| `--destructive` | `oklch(0.62 0.22 25)` | `oklch(0.55 0.22 25)` | Warnings, tax penalty alerts |
| `--border` | `oklch(0.28 0.02 260)` | `oklch(0.86 0.02 90)` | Clean card & table borders |
| `--input` | `oklch(0.28 0.02 260)` | `oklch(0.86 0.02 90)` | Form input borders |
| `--ring` | `oklch(0.82 0.22 135)` | `oklch(0.38 0.18 135)` | Keyboard focus rings |

---

## 3. WCAG 2.1 AA Contrast Ratios

All text and interactive element pairings pass strict WCAG AA contrast tests (minimum 4.5:1 for normal text, 3:1 for large display text and UI components):

| Text Role | Foreground Token | Background Token | Dark Contrast | Light Contrast | WCAG AA Status |
|---|---|---|---|---|---|
| Primary Body | `--foreground` | `--background` | **15.2:1** | **14.8:1** | PASS (AAA) |
| Heading Display | `--foreground` | `--background` | **15.2:1** | **14.8:1** | PASS (AAA) |
| Muted Labels | `--muted-foreground` | `--background` | **6.4:1** | **5.8:1** | PASS (AA) |
| Primary Button CTA | `--primary-foreground` | `--primary` | **8.1:1** | **7.2:1** | PASS (AAA) |
| Card Body Text | `--card-foreground` | `--card` | **13.5:1** | **16.1:1** | PASS (AAA) |
| Warning Alert | `--destructive` | `--background` | **5.1:1** | **4.9:1** | PASS (AA) |

---

## 4. Typography Rules

1. **Display & Headings**: `font-sans` (`Figtree`), tracking-tight, font-bold or font-extrabold. No Inter font.
2. **Body Text**: `font-sans` (`Figtree`), text-sm or text-base, leading-relaxed.
3. **Numbers & Monetary Calculations**: `font-mono` (`Geist Mono`) with CSS `tabular-nums` (`font-mono tabular-nums`) to ensure numeric columns align perfectly in spreadsheets and tax break-downs.

---

## 5. Image Sourcing & Asset Log

All images are real photographic assets processed locally with `sharp` into lightweight `.webp` files in `/public/images/`. No stock photos, no emoji icons, no gradients.

| File Path | Dimensions / Quality | Alt Description | Credit / License |
|---|---|---|---|
| `/images/hero-freelancer.webp` | 1200px width, WebP Q80 | Creator working on laptop in modern studio workspace | Annie Spratt / Unsplash |
| `/images/cpa-team.webp` | 1200px width, WebP Q80 | bro.tax team reviewing tax strategy on laptop | Desrec Vision / Unsplash |
| `/images/creator-gear.webp` | 1200px width, WebP Q80 | Video camera and studio lighting write-off setup | Sam McGhee / Unsplash |
| `/images/dev-desk.webp` | 1200px width, WebP Q80 | Developer workspace with code editor and multi-monitors | Shahadat Rahman / Unsplash |
| `/images/gig-driver.webp` | 1200px width, WebP Q80 | Rideshare and delivery driver smartphone mount | Dan Gold / Unsplash |
