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

## Route Manifest
- / (Home)
- /about
- /states (Hub)
- /states/[state] (Spokes)
- /software (Hub/Reviews)
- /software/[tool] (Reviews)
- /templates (Hub/Products)
- /templates/[template] (Products)
- /pricing-calculator (Interactive Tool)
- 404 (Not Found)

## Repository Rules
1. **Tokens:** ALL design tokens live inline in `app/globals.css`. Never use a hex/rgb/hsl literal or Tailwind palette color (`bg-zinc-800`). Use only semantic tokens (e.g. `bg-background`).
2. **Metadata:** `lib/site.ts` is the ONLY source of site metadata. Use its `buildMetadata` helper for all `generateMetadata` exports.
3. **Compliance Law:** Every state rule, permit cost, fee and threshold is `{{VERIFY: cite the specific .gov source}}`. Never write a plausible-sounding state rule; a state page with an invented permit requirement is worse than no state page.

## Additional Conventions
- No placeholder content (`lorem ipsum`, `TODO`, `FIXME`). All strings must be final copy.
- Both light and dark themes must work with parity.
- Accessible by default: visible keyboard focus, one `<h1>` per page, semantic landmarks, skip-to-content, no `div` buttons.
- No `<img>`, use `next/image`. Use `next/font` for fonts.
- Component layout uses `cn()` from `@/lib/utils`.
