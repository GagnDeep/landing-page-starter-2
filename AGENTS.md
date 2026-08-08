# AGENTS.md

## Commands
- `pnpm run verify` is the definition of done. Everything must pass.
- `node scripts/check-seo.mjs` must also pass.

## Route Manifest
- /
- /about
- /404
- /guides
- /guides/sam-gov-registration
- /guides/8a-certification
- /guides/hubzone-certification
- /guides/wosb-certification
- /guides/sdvosb-certification

## Rules
- All design tokens live in `app/globals.css`.
- `lib/site.ts` is the only source of site metadata.
- Domain brief compliance rule: This must not read as a news site — no news routes, no reporting, no opinion, no political commentary, no NewsArticle schema.
- It must never be mistaken for a US government website — no federal navy, no USWDS component patterns, no seals, eagles or flags, no .gov mimicry, no official-sounding language. A persistent non-dismissible disclosure appears on every page.
