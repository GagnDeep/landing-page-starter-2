# Build Log

## Passes
- PASS 1 FOUNDATION: COMPLETE
- PASS 2 INFORMATION ARCHITECTURE: Pending
- PASS 3 DEPTH AND CONVERSION: Pending
- PASS 4 DESIGN ELEVATION: Pending
- PASS 5 HARDENING: Pending
- PASS 6 PRODUCTION GATE: Pending

## Changes
- AGENTS.md: Created with foundation commands and compliance rules.
- docs/BUILD-LOG.md: Created to store state.
- next.config.mjs: Set `output: "export"` and `trailingSlash: true`.
- app/globals.css: Configured Broadsheet theme OKLCH color palette for both light and dark mode, retaining variables.
- app/layout.tsx: Imported and wired Merriweather (heading) and Inter (sans).
- lib/site.ts: Added metadata generator.
- app/sitemap.ts, app/robots.ts: Setup with static export compatibility.
- components/header.tsx, components/footer.tsx, components/breadcrumbs.tsx, components/prose.tsx: Built layout elements.
- components/comparison-table.tsx: Built signature component tracking set-aside programs.
- app/page.tsx, app/about/page.tsx, app/not-found.tsx: Developed with accurate copy per requirements.
- scripts/check-seo.mjs: Script built successfully checking h1, title length, desc length and banned schemas/strings.

## Decisions
- Chose Merriweather and Inter as the primary typefaces to align with "Broadsheet" theme constraints.
- Overrode primary colors with charcoal/slate variants to avoid any mimicry of US Government "Navy" blue while maintaining contrast.
- Ensured `node scripts/check-seo.mjs` natively understands `.next-prod` paths alongside standard `out` to integrate smoothly with the Next.js dev vs prod builds in this repository.

## Outstanding VERIFY tokens
- components/comparison-table.tsx (line 21): {{VERIFY: 8(a) processing time from SBA.gov}}
- components/comparison-table.tsx (line 27): {{VERIFY: HUBZone processing time from SBA.gov}}
- components/comparison-table.tsx (line 33): {{VERIFY: WOSB processing time from SBA.gov}}
- components/comparison-table.tsx (line 39): {{VERIFY: SDVOSB processing time from SBA.gov}}

## Verifications
- `pnpm run verify` passed cleanly (exit 0).
- `node scripts/check-seo.mjs` passed cleanly (exit 0).

## Next action
Proceed to PASS 2 INFORMATION ARCHITECTURE.
