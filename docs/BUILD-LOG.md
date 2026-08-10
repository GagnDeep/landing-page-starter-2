# RALPH BUILD LOG

## PASSES
| Pass | Name | Status |
|---|---|---|
| 1 | Foundation | COMPLETE |
| 2 | Information Architecture | OUTSTANDING |
| 3 | Depth and Conversion | OUTSTANDING |
| 4 | Design Elevation | OUTSTANDING |
| 5 | Hardening | OUTSTANDING |
| 6 | Production Gate | OUTSTANDING |

## CHANGELOG (Pass 1)
- `app/page.tsx`: Built the home page with 8 distinct sections, using grid layouts, typography styling, and a custom interactive svg.
- `app/about/page.tsx`: Created a finished About page using the `Prose` component.
- `app/not-found.tsx`: Created a completed 404 error page.
- `app/globals.css`: Implemented the full "Machine Shop" OKLCH token palette. Added spacing and type scales.
- `app/layout.tsx`: Configured Next/Font to load Archivo, IBM Plex Sans, and IBM Plex Mono. Wired up the ThemeProvider.
- `AGENTS.md`: Shortened and updated to reflect the specific compliance rules and domain context.
- `lib/site.ts`: Added site configuration and a type-safe `buildMetadata` helper function.
- `lib/json-ld.ts`: Added helpers to generate JSON-LD script attributes.
- `app/sitemap.ts` & `app/robots.ts`: Setup sitemap and robot directives.
- `components/header.tsx` & `components/footer.tsx`: Built the global navigation elements.
- `components/matrix.tsx`: Created the core "Bill of Materials Matrix" component with a search interface and tabular data rendering. Ensure that data is not faked and contains proper VERIFY checks.
- `components/breadcrumbs.tsx`: Created a semantic breadcrumb component.
- `components/theme-toggle.tsx`: Added a functional dark/light mode toggle in the header.
- `components/prose.tsx`: Reusable prose wrapper for rich text.
- `components/ui/*`: Maintained standard shadcn ui components (button, badge, input).
- `scripts/check-seo.mjs`: Added custom node script to assert domain-specific SEO rules and banned strings.
- `next.config.mjs`: Configured `output: "export"` for a fully static site output.

## VERIFICATION RESULTS
- `pnpm run verify`: Exited 0. No typescript, formatting, linting, or convention errors.
- `node scripts/check-seo.mjs`: ✅ All SEO checks passed.
- `grep -ri "lorem ipsum" app components content lib`: Clean.
- `grep -rn "TODO\|FIXME" app components content lib`: Clean.
- `grep -rn "@ts-ignore\|@ts-expect-error\|eslint-disable" app components content lib`: Clean.

## DECISIONS MADE
- Selected Next.js static exports (`output: "export"`) due to the requirement that the site will be fully static on Cloudflare pages.
- Enforced strict VERIFY compliance, removed hardcoded generated date and fake supplier assertions from Matrix component and directory pages.
- Left the `.next-prod` generated internal paths unresolved for Linkinator. These represent Pass 2 scope architecture routes.

## OUTSTANDING VERIFY TOKENS
- `app/page.tsx`: `{{VERIFY: Total Platforms}}`
- `app/page.tsx`: `{{VERIFY: Total Components}}`
- `app/page.tsx`: `{{VERIFY: Total Suppliers}}`
- `app/page.tsx`: `{{VERIFY: Total Jobs}}`
- `app/page.tsx`: `{{VERIFY: Top 5 Suppliers by confirmed integrations}}`
- `app/page.tsx`: `{{VERIFY: Job Post Price}}`
- `components/matrix.tsx`: `{{VERIFY: Matrix edge list JSON data}}`

## NEXT ACTION
Begin Pass 2: Information Architecture.
