# AGENTS.md

Next.js App Router landing-page starter for Aerospace UAE.

## Commands
Setup:        pnpm install --frozen-lockfile
Dev server:   pnpm run dev          # port 7811
Build:        pnpm run build
Types:        pnpm run typecheck
Lint:         pnpm run lint
Format:       pnpm run format
Conventions:  pnpm run check:conventions
Guardrails:   pnpm run check:guardrails
Verify:       pnpm run verify       # typecheck + lint + format:check + conventions + build

**Definition of done for every task: `pnpm run verify` exits 0.**

## Route Manifest
- `/` - Home Page (Curated directory & leaderboard)
- `/about` - About Page
- `/suppliers` - Suppliers Directory Hub
- `/jobs` - Jobs Board Hub
(Plus individual supplier and job detail programmatic routes as specified).

## Rules
- **Tokens only:** All design tokens live in `app/globals.css`. Use them via Tailwind classes (e.g. `bg-background`). No hardcoded colors.
- **Metadata source:** `lib/site.ts` is the single source of truth for site metadata.
- **Components:** Server Components by default. Reuse `components/ui/` primitives. Use `cn()` from `lib/utils.ts`.

## Strict Compliance (Domain Law)
- **NO JOURNALISM.** Aerospace UAE publishes NO journalism.
- No news routes, no NewsArticle schema, no datelines, no reporting on current events.
- No opinion, no commentary on government policy, no coverage of incidents, contract awards, or procurement decisions.
- **NO DEFENSE-SENSITIVE DETAIL.**
- Records carry commercial capability and certifications only.
- NEVER weapons systems, platform-specific defense programs, munitions, classified or export-controlled capability, or named individuals.
- **PERMITTED FACTS:** The UAE is building a sovereign aerospace manufacturing base, In-Country Value is a UAE local-content program, and AS9100 and Nadcap are aerospace quality standards.
- Everything else MUST BE VERIFIED using `{{VERIFY: ...}}`. NO INVENTED FACTS.
