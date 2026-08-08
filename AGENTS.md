# AGENTS.md

Next.js App Router landing-page starter. Read this before changing anything.
Every line here is a fact you would otherwise get wrong.

## Commands

```
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
It runs typecheck → lint → format:check → check:conventions → build. Run it
before you finish. If it does not pass, the task is not done.

## Route Manifest

- `/` - Home
- `/roadmap/` - Handpan Buyer's Roadmap

## Rules

- Every design token lives in `app/globals.css`.
- `lib/site.ts` is the only source of site metadata.
- **COMPLIANCE RULE:** Every price, wait time, and maker claim must be {{VERIFY: confirm by direct email to the maker}}. The table's entire value is that its numbers were verified by outreach. Never estimate, interpolate, or reconstruct a plausible-looking number. No fabricated social proof: no testimonials, logo walls, review counts, star ratings, author bios, headshots, or trusted-by claims.
- The finished site must not be recognisable as the starter.
