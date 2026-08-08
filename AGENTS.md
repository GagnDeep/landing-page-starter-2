# AGENTS.md

## Commands
```
Setup:        pnpm install --frozen-lockfile
Dev server:   pnpm run dev
Build:        pnpm run build
Types:        pnpm run typecheck
Lint:         pnpm run lint
Format:       pnpm run format
Conventions:  pnpm run check:conventions
Guardrails:   pnpm run check:guardrails
Verify:       pnpm run verify
```
`pnpm run verify` must exit 0 for a task to be complete.

## Route Manifest
- `/` - Home (Hub/Showpiece)
- `/about` - About Page

## Token Rules
- All semantic and color tokens must be defined in `app/globals.css` using the exact OKLCH values in the domain brief.
- Light Palette: background oklch(0.985 0.006 95), foreground oklch(0.22 0.015 250), primary oklch(0.30 0.048 252), accent oklch(0.68 0.11 78), muted oklch(0.955 0.008 95), border oklch(0.88 0.010 250).
- Dark Palette: background oklch(0.19 0.014 252), foreground oklch(0.94 0.006 95), primary oklch(0.80 0.06 90), accent oklch(0.74 0.12 78).
- Border radius: `0.25rem`.
- Never use hex/rgb/hsl literals. Consume ONLY semantic tokens. Both themes must work flawlessly.

## Metadata & SEO Rules
- `lib/site.ts` is the single source of truth for site metadata.
- All pages must have: `<title>` (<= 60 chars), `<meta name="description">` (120-160 chars), self-referencing canonical link, OG tags, twitter:card summary_large_image, html lang en, and valid JSON-LD.
- Organization and WebSite schema on home, BreadcrumbList on every subpage.
- NO dummy content, no lorem ipsum.

## Compliance & Content Law
- Permitted facts: 2025 was the most active year on record for RIA M&A per the DeVoe and Company RIA Deal Book; the amended SEC Marketing Rule, effective 2022, is still reshaping what advisers and vendors may publish.
- ANY figure, price, date, fee, threshold, payout, or vendor claim not supplied in the brief ships as literal token `{{VERIFY: ...}}`.
- Never guess, estimate, or reconstruct a plausible number.
- No fabricated social proof (no fake testimonials, logo walls, etc.).

## Art Direction
- The theme is "Regulatory Ledger". Minimalist, no drop shadows, no gradient blobs, no pill buttons, no SaaS purple, no emojis, no illustration.
- Layout is a "filing cabinet": hairline rules carry structure, narrow left rails have monospace section numbers, dense ruled tables.
- Signature component: `FilingCallout` (bordered block, docket label, rule, content, dated source).

## Constraints
- React 19 Server Components by default.
- Tailwind CSS v4 inline in `app/globals.css`.
- Shadcn/ui elements in `components/ui` preserved.
