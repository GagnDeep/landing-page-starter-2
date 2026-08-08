# AGENTS.md

## Commands
Setup:        pnpm install --frozen-lockfile
Dev server:   pnpm run dev          # port 7811
Build:        pnpm run build
Types:        pnpm run typecheck
Lint:         pnpm run lint
Format:       pnpm run format
Conventions:  pnpm run check:conventions
Guardrails:   pnpm run check:guardrails
Verify:       pnpm run verify       # Must exit 0

## Route Manifest
- `/`: Homepage (showpiece, comparison table, countdown, decision tree, directory, leaderboard)
- `/about`: About page

## Styling Rules
- All tokens live in `app/globals.css`.
- Semantic tokens only, never hardcoded colours in components.
- cn() from lib/utils for className merging.
- Server Components by default.
- Layout: kitchen ticket rail, dense monospace tables, no cards.
- Orange marks only the single decisive action on a page.

## Metadata Rules
- `lib/site.ts` is the only source of site metadata.

## Compliance Rule
- No invented facts. Any figure, price, date, fee, threshold, payout, vendor claim or missing copy must be supplied as `{{VERIFY: ...}}`.
- No fabricated social proof (testimonials, logo walls, review counts, etc.).
- No lorem ipsum, TODO, or FIXME.
