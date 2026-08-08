# AGENTS.md

Next.js App Router landing-page starter for Battery Digital Passport Reference.

## Commands

```bash
Setup:        pnpm install --frozen-lockfile
Dev server:   pnpm run dev          # port 7811
Build:        pnpm run build
Types:        pnpm run typecheck
Lint:         pnpm run lint
Format:       pnpm run format       # pnpm run format:check to verify only
Conventions:  pnpm run check:conventions
Guardrails:   pnpm run check:guardrails
```

**Definition of done for every task: `pnpm run verify` exits 0.**

## Route Manifest
- `/` (Home page)
- `/about` (About page)

## Rules
- All design tokens live in `app/globals.css`. Do not hardcode colors in components.
- `lib/site.ts` is the single source of truth for site metadata.
- Internal linking must be hub and spoke.
- Zero orphan pages.
- Nothing sits more than two clicks from the home page.
- Do not edit vendored `components/ui/**`.
- Output must be exported statically from Next via `next.config.mjs`

## Compliance Rule (Repository Law)
No invented facts. Any figure, price, date, fee, threshold, payout, or vendor claim not supplied in the domain brief ships as the literal token `VERIFY`, wrapped in double curly braces, followed by what is needed and where to source it: `{{VERIFY: re-check against EUR-Lex}}`. Never estimate, interpolate, or reconstruct a plausible-looking number.
Permitted facts: the 18 February 2027 date, Regulation (EU) 2023/1542, Article 77, Article 44 covering the QR code, the 2 kWh industrial threshold, and the three scope categories.
