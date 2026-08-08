# AI and Investing - Rules and Conventions

## Commands
- Build: `pnpm run build`
- SEO check: `node scripts/check-seo.mjs`
- Typecheck: `pnpm run typecheck`
- Lint: `pnpm run lint`

## Route Manifest
- / (Home)
- /about
- /404 (Not Found)

## Tokens & Theme
- All color tokens MUST live in `app/globals.css`.
- Use semantic classes (e.g. `bg-background`, `text-primary`) rather than raw colors or default tailwind palettes.

## Metadata & SEO
- `lib/site.ts` is the ONLY source for site constants and metadata helper functions.
- Site URLs must have proper trailing slash behavior and absolute paths.

## Compliance & Content Law
- NO INVENTED FACTS.
- NO `lorem ipsum`, `TODO`, or `FIXME`.
- ANY unavailable claim or number from the domain brief MUST use `{{VERIFY: what is needed}}`.
