# AGENTS.md

Commands:
pnpm install --frozen-lockfile
pnpm run dev
pnpm run build
pnpm run typecheck
pnpm run lint
pnpm run format
pnpm run check:conventions
pnpm run check:guardrails
pnpm run verify
pnpm run verify:pr

Manifest:
/
/roadmap/
/about/

Rules:
- All design tokens MUST live in app/globals.css
- lib/site.ts is the ONLY source of site metadata.
- Compliance Rule: Every price, wait time and maker claim is {{VERIFY: confirm by direct email to the maker}}.
- Do not make up facts.
- Do not edit components/ui.
- The definition of done is `pnpm run verify` exits 0.
