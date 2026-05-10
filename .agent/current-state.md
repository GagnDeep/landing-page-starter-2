# Current State: Blinking Eye Events

**Project Phase:** Phase 3 (Complete) - Animated Visuals & Image Registry

## What is Currently Built
- **Design System & Layout:** Phase 1 complete. `globals.css` configured with OKLCH tokens. Layout blueprints available in `.agent/layout-*.md`.
- **Content Architecture:** Phase 2 complete. Strongly-typed TypeScript files exist in `content/` acting as the single source of truth.
- **Image Registry:** `lib/images.ts` is established, mapping Unsplash URLs to specific content needs while preserving photographer credit metadata. `next.config.mjs` is updated to support this.
- **Visual Components:** 8 highly reusable, prop-driven visual components are built in `components/visuals/` using Tailwind CSS and inline SVGs. They are hydration-safe and adhere to `prefers-reduced-motion` guidelines.

## Technical Details
- Next.js (App Router) is scaffolded.
- Tailwind CSS v4 and shadcn/ui are initialized.
- CSS animations are preferred over heavy JavaScript animation libraries for performance.

## Known Constraints
- No actual page route UI code (TSX/layouts) has been assembled yet. All pieces (Data, Assets, Visuals) are waiting to be integrated into pages in Phase 4.