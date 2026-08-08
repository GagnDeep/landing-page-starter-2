# AGENTS.md

Next.js App Router landing-page starter. Read this before changing anything.

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

## Route Manifest
- `/` (Home page)
- `/about`
- `/[state]` (State pages, e.g. state-by-state regulatory content)

## Rules
- All tokens must live in `app/globals.css`.
- `lib/site.ts` is the only source of site metadata.
- **COMPLIANCE RULE**: Every state rule, permit cost, fee and threshold MUST BE cited with a specific .gov source using `{{VERIFY: cite the specific .gov source}}`. Never write a plausible-sounding state rule; a state page with an invented permit requirement is worse than no state page.
- Do not add demo content or placeholder data (like lorem ipsum, TODO, or FIXME).
- Do not fabricate social proof.
