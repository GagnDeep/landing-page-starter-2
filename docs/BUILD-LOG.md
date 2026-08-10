# BUILD LOG

## Pass 1: Foundation (COMPLETE)
## Pass 2: Information Architecture (PENDING)
## Pass 3: Depth and Conversion (PENDING)
## Pass 4: Design Elevation (PENDING)
## Pass 5: Hardening (PENDING)
## Pass 6: Production Gate (PENDING)

### Pass 1 Log
- **Deleted demo content** and wrote new `AGENTS.md` (rules explicitly applied per brief).
- **next.config.mjs**: Set `output: "export"`.
- **Theme & Fonts**: Installed Karla, Fraunces, and JetBrains Mono in `app/layout.tsx`. Configured OKLCH theme tokens for Light and Dark themes in `app/globals.css`.
- **Core Architecture**:
  - `lib/site.ts`: added `siteConfig`, `buildMetadata`, and JSON-LD structured data generators.
  - Built typed `app/sitemap.ts` and `app/robots.ts` with explicit `force-static` runtime constraint for static export.
- **Components**:
  - `components/header.tsx`
  - `components/footer.tsx`
  - `components/breadcrumbs.tsx`
  - `components/prose.tsx`
  - `components/maker-table.tsx`: Signature component carrying {{VERIFY}} markers.
- **Pages Shipped**:
  - `/` (Home page)
  - `/about`
  - `/roadmap`
  - `/not-found` (404)
- **Quality Gates & SEO Checks**:
  - Built `scripts/check-seo.mjs` checking against `out` (`.next-prod`), title max lengths, meta description floors, single `<h1>` enforcement, and banned string checks. Script exits 0.
  - Re-ran `pnpm run verify` - Exited 0 successfully.

**VERIFY Tokens outstanding:**
- `components/maker-table.tsx:14` - `{{VERIFY: confirm by direct email to the maker}}`
- `components/maker-table.tsx:15` - `{{VERIFY: confirm by direct email to the maker}}`
- `components/maker-table.tsx:16` - `{{VERIFY: confirm by direct email to the maker}}`

**Next Action:**
Proceed to PASS 2 (Information Architecture).
