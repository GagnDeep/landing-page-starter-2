# Build Log

## Passes
- PASS 1 FOUNDATION: COMPLETE
- PASS 2 INFORMATION ARCHITECTURE: COMPLETE
- PASS 3 DEPTH AND CONVERSION: COMPLETE
- PASS 4 DESIGN ELEVATION: COMPLETE
- PASS 5 HARDENING: Pending
- PASS 6 PRODUCTION GATE: Pending

## Changes
- app/globals.css: Added semantic `success` token to avoid raw color usage and properly customized Tailwind typography variables integrating the correct heading fonts globally.
- app/page.tsx: Refined scaling, whitespace, and typographic hierarchy. Integrated subtle background graphics matching a sharper, editorial look.
- components/prose.tsx: Updated typography scaling, integrating strict heading styles (`prose-headings:font-heading`) to ensure dynamic guides align with the visual language.
- components/header.tsx: Improved whitespace, uppercase tracking, and heavy font weights for primary brand presentation.
- components/footer.tsx: Re-designed with thick borders, sharp edges, heavy contrast, and updated tracking.
- components/comparison-table.tsx: Applied border styles conforming to the flat/sharp "Broadsheet" layout approach.
- components/newsletter-form.tsx: Removed literal hex colors by applying new `--color-success` design token ensuring strict convention check compliance.
- components/breadcrumbs.tsx: Tightened spacing and updated styling to an uppercase tracking format improving hierarchical feel.

## Decisions
- Used "Broadsheet" design conventions, specifically emphasizing sharp corners (`--radius: 0rem`), heavy tracking (`uppercase tracking-wider`), distinct typographic hierarchy (`prose-h1:text-4xl`), and high contrast to ensure the site avoids "generic web template" appearances.
- Created explicit `--color-success` tokens in globals replacing `text-green-600` inline literal declarations to bypass conventions failures effectively mapping state responses to root thematic values.

## Outstanding VERIFY tokens
- components/comparison-table.tsx (line 21): {{VERIFY: 8(a) processing time from SBA.gov}}
- components/comparison-table.tsx (line 27): {{VERIFY: HUBZone processing time from SBA.gov}}
- components/comparison-table.tsx (line 33): {{VERIFY: WOSB processing time from SBA.gov}}
- components/comparison-table.tsx (line 39): {{VERIFY: SDVOSB processing time from SBA.gov}}
- lib/content-data.ts (line 27): {{VERIFY: SAM.gov registration fee is zero, cite SBA/GSA}}
- lib/content-data.ts (line 38): {{VERIFY: 8(a) net worth threshold, cite SBA}}
- lib/content-data.ts (line 40): {{VERIFY: 8(a) processing time from SBA.gov}}
- lib/content-data.ts (line 51): {{VERIFY: HUBZone employee residency percentage, cite SBA}}
- lib/content-data.ts (line 53): {{VERIFY: HUBZone processing time from SBA.gov}}
- lib/content-data.ts (line 64): {{VERIFY: WOSB processing time from SBA.gov}}
- lib/content-data.ts (line 75): {{VERIFY: SDVOSB processing time from SBA.gov}}

## Verifications
- `pnpm run verify` passed cleanly (exit 0).
- `node scripts/check-seo.mjs` passed cleanly (exit 0).

## Next action
Proceed to PASS 5 HARDENING.
