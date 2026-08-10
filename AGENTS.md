# AGENTS.md

## Commands
Setup: pnpm install --frozen-lockfile
Dev: pnpm run dev
Build: pnpm run build
Types: pnpm run typecheck
Lint: pnpm run lint
Format: pnpm run format (or format:check)
Check Conventions: pnpm run check:conventions
Check Guardrails: pnpm run check:guardrails
Verify: pnpm run verify

## Route Manifest
/, /matrix/, /platforms/, /components/, /components/actuators/, /suppliers/, /jobs/, /jobs/post/, /methodology/

## Design System Rules
All tokens (colors, fonts, radius) live in app/globals.css inside the @theme block.
Use semantic color tokens only (bg-background, text-foreground, etc).
Never use a hardcoded color or Tailwind palette literal inside a component.

## Metadata Rule
lib/site.ts is the ONLY source of site metadata.

## COMPLIANCE RULE (Repository Law)
A supplier relationship is fact ONLY when publicly documented and dated by filing, press release, or teardown, with source and date. Inferred links wear an Unconfirmed badge or do not ship; leaked or confidential sourcing never appears.
BANNED STRINGS: exclusive supplier, confirmed supplier of, leaked BOM.
Every spec, relationship, funding figure, and platform claim must be denoted with {{VERIFY: what to check and where to source it}} if not explicitly supplied.
