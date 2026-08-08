# Build Log

## Passes
- PASS 1 FOUNDATION: COMPLETE
- PASS 2 INFORMATION ARCHITECTURE: COMPLETE
- PASS 3 DEPTH AND CONVERSION: COMPLETE
- PASS 4 DESIGN ELEVATION: Pending
- PASS 5 HARDENING: Pending
- PASS 6 PRODUCTION GATE: Pending

## Changes
- app/page.tsx: Added the Interactive Tool to the homepage directly above the comparison table as the principal asset.
- components/decision-tree.tsx: Built interactive fully-keyboard-operable decision tree tracking logic for 5 certifications using `useState`. Included `<noscript>` fallback list for static crawlers.
- components/newsletter-form.tsx: Built Newsletter email capture handling standard states with graceful failure mapped to `NEXT_PUBLIC_NEWSLETTER_ENDPOINT`.
- components/footer.tsx: Re-designed to include the newly minted Newsletter form.

## Decisions
- Chose an elegant "Path finder" Decision tree logic based strictly on the named certification limits and rules provided within the content.
- Placed dummy mock success fallback directly within `NewsletterForm` when `NEXT_PUBLIC` is undefined to ensure real success state demonstrations as required without throwing exceptions unconditionally.

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
Proceed to PASS 4 DESIGN ELEVATION.
