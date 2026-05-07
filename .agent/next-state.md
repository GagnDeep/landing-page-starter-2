# Next Project State
Verma's Bakery & Sweets

## Phase 6 Handoff: Implement Transactional Pages (Pricing & Contact)

### Objective
Assemble the two transactional pages (`app/pricing/page.tsx` and `app/contact/page.tsx`) by integrating their respective layout blueprints, exported content strings, and the design system visual library.

### Required Actions
1. **Layout Mapping:** Refer to `.agent/layout-pricing.md` and `.agent/layout-contact.md` to structure the TSX files.
2. **Content Integration:** Import `pricingContent` from `content/pricing.ts` and `contactContent` from `content/contact.ts`. Use them exclusively for text mapping.
3. **Structured UI:**
   - Ensure the Pricing page clearly uses tabular/grid formats for easy reading.
   - Ensure the Contact page implements the required forms and operational hours cleanly.
4. **Visuals & Styling:**
   - Apply `oklch` CSS variables for light/dark mode parity.
   - Reuse components from `components/visuals/` to introduce motion to these highly structured pages.
   - Utilize images from `lib/images.ts` using the Next.js `<Image />` component.
5. **Accessibility:** Forms must have correct ARIA labels, semantic `<form>` tags, and proper input associations.

### Acceptance Criteria
- `app/pricing/page.tsx` perfectly reflects the blueprint from `layout-pricing.md`.
- `app/contact/page.tsx` perfectly reflects the blueprint from `layout-contact.md`.
- No hardcoded text exists in either file; everything is sourced from the respective TypeScript content file.
- Forms are visually implemented and accessible (functionality is not required, just the UI).
- The project memory files (`.agent/current-state.md`, `.agent/next-state.md`, `.agent/agent.md`) are updated to reflect the completion of Phase 6.
