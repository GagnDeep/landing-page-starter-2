# AGENTS.md

Next.js App Router landing-page starter.

## Commands
Setup:        pnpm install --frozen-lockfile
Dev server:   pnpm run dev          # port 7811
Build:        pnpm run build
Types:        pnpm run typecheck
Lint:         pnpm run lint
Format:       pnpm run format       # pnpm run format:check to verify only
Conventions:  pnpm run check:conventions
Guardrails:   pnpm run check:guardrails
Verify:       pnpm run verify       # Definition of done

## Route Manifest
- Home: /
- /about/
- /editorial-policy/
- /disclaimers/
- /disclosures/
- /guides/
- /guides/sam-gov-registration/
- /guides/cage-code/
- /guides/8a-certification/
- /guides/hubzone-certification/
- /guides/sdvosb-certifi/

## Repository Law
1. **Compliance Constraint**: Aerospace UAE domain strict compliance constraints. No journalism, news routes, NewsArticle schema, commentary on policy, or defense-sensitive details. Content must be evergreen, descriptive explainers focusing on commercial capabilities, certifications, and a specialist jobs board.
2. **Tokens**: All tokens live in `app/globals.css`. Never a hex/`rgb()`/`hsl()` literal. Use semantic color tokens only.
3. **Metadata**: `lib/site.ts` is the only source of site metadata.
4. **Style**: No semicolons, double quotes, 2-space indent, 80-char width. Tailwind CSS v4. RSC by default, 'use client' only where necessary. `cn()` from `lib/utils` for class merging.
