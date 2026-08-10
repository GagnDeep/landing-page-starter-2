# AGENTS.md

## Commands
Setup:        pnpm install --frozen-lockfile
Typecheck:    pnpm run typecheck
Lint:         pnpm run lint
Build:        pnpm run build
Check SEO:    node scripts/check-seo.mjs
Check Links:  pnpm dlx linkinator out --recurse --silent
Verify:       pnpm run typecheck && pnpm run lint && pnpm run build && node scripts/check-seo.mjs && pnpm dlx linkinator out --recurse --silent

## Route Manifest
- Hubs: `/compare/`, `/matrix/`, `/bankruptcy/`
- Spokes: `/deletion/`, `/police-access/`, `/if-sold/`, `/raw-data/`, `/providers/23andme/`
- Money page: `/privacy-picks/`
(Do not build any routes outside this manifest)

## Core Rules
1. **Tokens**: ALL design tokens (colors, fonts, radius) must live in `app/globals.css` inside the inline theme block. Never hardcode colors or spacing in components.
2. **Metadata**: `lib/site.ts` is the ONLY source of site metadata. All pages must construct metadata using this source.

## Compliance Rule (Repository Law)
No health, medical or ancestry-accuracy claims and no implication of clinical validity anywhere; we assess policy, not science.
These strings must fail the build: "clinically validated", "FDA approved", "diagnose", "health risk", "99% accurate".
Every policy claim, retention window, deletion step, ownership and bankruptcy fact ships as:
`{{VERIFY: quote the provider's policy or court filing, archive it, stamp version and date}}`
