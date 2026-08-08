# Build Log: The Underwriting Desk (instituteofunderwriting.com)

## Standing Order / Art Direction
- Brand: The Underwriting Desk
- Domain: instituteofunderwriting.com
- Typography: Playfair Display (headings), Manrope (body)
- Images: Typed registry in `lib/images.ts` pointing to Unsplash.
- Content: Centralized in `content/`
- Layout: React Server Components by default, Tailwind CSS v4, inline OKLCH tokens, shadcn/ui.
- Theme: Dark and light modes with perfect symmetry. Semantic tokens only.

## Passes

- [x] **Pass 1: Foundation.** Set up typography (Playfair Display & Manrope in `app/layout.tsx`), the image registry (`lib/images.ts`), the content directory (`content/index.ts`), and Unsplash config in `next.config.mjs`. Update global layout.
- [ ] **Pass 2: Global Navigation & Footer.** Implement Site Header (with navigation & theme toggle) and Site Footer components.
- [ ] **Pass 3: Hero Section.** Build the main hero section with headline, CTA, and a prominent image.
- [ ] **Pass 4: Value Proposition & Features.** Add a section detailing the core offerings using shadcn/ui primitives.
- [ ] **Pass 5: Social Proof & Final CTA.** Build a testimonials or stats section, and a closing CTA.
- [ ] **Pass 6: Polish & Animations.** Ensure perfect accessibility, reduced motion support, and overall page polish.

## Decisions Recorded
- *Pass 1:* Decided to map 6 distinct passes for a comprehensive landing page build. Typography setup replaces the default font. Added standard Unsplash domains for images.
