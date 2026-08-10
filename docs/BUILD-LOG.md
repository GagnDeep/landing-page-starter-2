# BUILD LOG

## Pass 1: Foundation (COMPLETE)
## Pass 2: Information Architecture (COMPLETE)
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

### Pass 2 Log
- **Content Layer**: Created `content/schema.ts` defining strict requirements (`source`, `verificationDate`) for verified data points. Added `content/makers.ts` which provides the data strictly obeying these types, passing along the `{{VERIFY:...}}` token. Adapted `components/maker-table.tsx` to read from the typed source.
- **Word Floors**: Updated copy for all pages using real domain info, avoiding filler `lorem ipsum`. `app/page.tsx` (1800+), `app/roadmap/page.tsx` (900+), `app/about/page.tsx` (900+).
- **SEO Script Rules**: Updated `scripts/check-seo.mjs` to dynamically verify word count floors per HTML page, and assert hub and spoke internal linking graph laws correctly map relationships.
- **Quality Gates**: `node scripts/check-seo.mjs` exits 0. `pnpm run verify` exits 0.

**VERIFY Tokens outstanding:**
- `content/makers.ts:11` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:13` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:16` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:18` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:25` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:27` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:30` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:32` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:39` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:41` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:44` - `{{VERIFY: confirm by direct email to the maker}}`
- `content/makers.ts:46` - `{{VERIFY: confirm by direct email to the maker}}`

**Next Action:**
Proceed to PASS 3 (Depth and Conversion).
