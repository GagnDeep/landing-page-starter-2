# AGENTS.md

## Commands
Setup:        pnpm install --frozen-lockfile
Dev server:   pnpm run dev
Build:        pnpm run build
Types:        pnpm run typecheck
Lint:         pnpm run lint
Format:       pnpm run format
Conventions:  pnpm run check:conventions
Guardrails:   pnpm run check:guardrails
Verify:       pnpm run verify (definition of done)

## Route Manifest
- / (Home: Vendor directory and comparison)
- /about (About)
- /404 (Not Found)

## Rules
- **Tokens**: ALL design tokens live in `app/globals.css`. Never a hardcoded color inside a component.
- **Metadata**: `lib/site.ts` is the ONLY source of site metadata.
- **COMPLIANCE LAW**: The domain is instituteofunderwriting.com, but the public brand is "The Underwriting Desk". The word "Institute" MUST NEVER appear as the site name, in the logo, in any page title, masthead, footer, Open Graph tag or JSON-LD name field.
