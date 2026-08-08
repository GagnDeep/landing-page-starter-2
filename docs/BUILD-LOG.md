# BUILD LOG

## Pass Status
| Pass | Status |
|------|--------|
| PASS 1 FOUNDATION | COMPLETE |
| PASS 2 INFORMATION ARCHITECTURE | OUTSTANDING |
| PASS 3 DEPTH AND CONVERSION | OUTSTANDING |
| PASS 4 DESIGN ELEVATION | OUTSTANDING |
| PASS 5 HARDENING | OUTSTANDING |
| PASS 6 PRODUCTION GATE | OUTSTANDING |

## Changed Files
- `next.config.mjs`: Set output to export.
- `app/page.tsx`: Replaced demo content with homepage showpiece.
- `app/layout.tsx`: Configured fonts and added font variables.
- `app/globals.css`: Added OKLCH palette, mapped missing tokens, and imported typography plugin.
- `app/globals.d.ts`: Fixed CSS import typing.
- `AGENTS.md`: Reduced lines, consolidated commands, routes, rules, and constraints.
- `lib/site.ts`: Added metadata and JSON-LD helpers.
- `app/sitemap.ts`: Generated sitemap static route.
- `app/robots.ts`: Generated robots static route.
- `components/header.tsx`: Created Header component.
- `components/footer.tsx`: Created Footer component.
- `components/breadcrumbs.tsx`: Created Breadcrumbs component.
- `components/prose.tsx`: Created Prose wrapper component.
- `components/ticket-rail.tsx`: Created pure CSS `TicketRail` mask component.
- `app/about/page.tsx`: Built finished About page.
- `app/not-found.tsx`: Built finished 404 page.
- `scripts/check-seo.mjs`: Added script for enforcing SEO and compliance rules.
- `package.json`: Added `glob`, `cheerio` and `@tailwindcss/typography`.

## Verification Outputs
`pnpm run verify` passed all checks successfully.
`node scripts/check-seo.mjs` passed.
`pnpm run build` generated static export successfully.

## Decisions Made
- Used the `TicketRail` component visually on the homepage as a cost breakdown module.
- Allowed missing canonical links for the `not-found` page in `check-seo.mjs`.
- Fixed the TS Next config to statically export dynamic pages.
- Overwrote shadcn/ui missing token variables mapped directly to the brief’s colour palette.

## Outstanding VERIFY Tokens
- `app/page.tsx`: `{{VERIFY: $X,XXX/yr}}` (Toast POS system estimate)
- `app/page.tsx`: `{{VERIFY: $XXX/mo}}` (Square Payroll estimate)
- `app/page.tsx`: `{{VERIFY: $XXX/mo}}` (Reservations estimate)
- `app/page.tsx`: `{{VERIFY: X% per order}}` (Online Ordering estimate)
- `app/page.tsx`: `{{VERIFY: $X,XXX}}` (Est. Initial Cost)

## Next Action
PASS 2 INFORMATION ARCHITECTURE
