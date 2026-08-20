# doctorameena.com — Integrative Internal Medicine Practice Website

Personal-brand medical site for Dr. Ameena Patel, MD, FACP. Designed to convert searching patients, establish medical authority for press and speaking, and publish peer-reviewed patient education.

---

## Technical Stack & Library Justifications

Built on **Next.js 16 (App Router)**, **TypeScript 6**, **Tailwind CSS v4**, and **shadcn/ui**.

### Pinned Dependencies & Justifications
* `next-mdx-remote` (`^6.0.0`): Server-side MDX rendering for medical blog articles and long-form patient guides without client JS bloat.
* `gray-matter` (`^4.0.3`): Parsing frontmatter metadata (reading time, published dates, peer-reviewed citations) in content files.
* `lucide-react` (`^1.33.0`): Utility iconography supporting standard UI primitives.
* `@hugeicons/react` (`^1.1.9`): Primary design system vector icons.
* `framer-motion` (`^13.1.0`): Minimal fluid animations with strict `@media (prefers-reduced-motion: reduce)` support.
* `fuse.js` (`^7.5.0`): Fast, lightweight client-side fuzzy search across conditions, treatments, and blog posts.
* `sharp` (`^0.35.3`): High-performance WebP image processing and optimization for local visual assets.

---

## Design System & Theme Tokens

Tokens are defined in OKLCH color space within `@theme inline` in `app/globals.css`.

* **Background (`--background`)**: Warm Parchment (`oklch(0.985 0.012 85)` in Light Mode, `oklch(0.18 0.02 155)` in Dark Mode).
* **Primary (`--primary`)**: Academic Sage (`oklch(0.32 0.05 155)`).
* **Accent (`--accent`)**: Warm Terracotta Amber (`oklch(0.62 0.14 48)`).
* **Destructive (`--destructive`)**: Crimson Red-Flag Warning (`oklch(0.50 0.18 25)`).
* **Typography**: Newsreader Serif (`--font-serif`) for academic headings paired with Figtree Sans (`--font-sans`) for clinical prose.

---

## How to Add or Update Content

### 1. Adding a New Condition Guide
Open `lib/clinical-data.ts` and append an entry to `CONDITIONS_DATA`:
```typescript
{
  slug: "my-new-condition",
  title: "Condition Title",
  tagline: "Clinical Tagline",
  summary: "Comprehensive clinical summary...",
  primaryKeyword: "target keyword Chicago",
  icd10Code: "ICD-10 Code",
  prevalence: "Prevalence statistics...",
  symptoms: [...],
  causes: [...],
  diagnosticTests: [...],
  treatmentTradeoffs: [...],
  appointmentExpectations: [...],
  urgentCareNotice: "Red-flag warning...",
  faqs: [...],
  citations: [...],
  lastReviewed: "YYYY-MM-DD",
  relatedTreatments: [...],
  relatedSymptoms: [...]
}
```

### 2. Adding a New Medical Blog Article
Append a post object to `BLOG_POSTS_DATA` in `lib/clinical-data.ts`. The route `/blog/[slug]` will automatically generate the static SSG page and include it in `sitemap.xml` and `feed.xml`.

---

## Verification & Commands

```bash
pnpm run verify    # typecheck -> lint -> format:check -> check:conventions -> build
pnpm run dev       # port 7811
pnpm run start     # port 7822
```

---

## Facts Requiring Client Confirmation

See `/DEVIATIONS.md` for the full catalog of `[NEEDS CONFIRMATION]` items including physician license numbers, practice address, phone/fax, insurance contracts, and cash consultation fees.
