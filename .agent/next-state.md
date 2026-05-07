# Next Project State
Verma's Bakery & Sweets

## Phase 7 Handoff: Implement Supporting Pages (Blog, FAQ, Legal)

### Objective
Assemble the supporting and informational pages (`app/blog/page.tsx`, `app/faq/page.tsx`, `app/careers/page.tsx`, `app/terms/page.tsx`, `app/privacy/page.tsx`) by integrating their respective layout blueprints, exported content strings, and the design system visual library.

### Required Actions
1. **Layout Mapping:** Refer to `.agent/layout-blog.md`, `.agent/layout-faq.md`, `.agent/layout-careers.md`, `.agent/layout-terms.md`, and `.agent/layout-privacy.md` to structure the TSX files.
2. **Content Integration:** Import the respective content objects (e.g., `blogContent`, `faqContent`, `careersContent`, `termsContent`, `privacyContent`) from the `content/` directory. Use them exclusively for text mapping.
3. **Structured UI:**
   - Ensure the Blog page uses a clean grid for articles and a clear header structure.
   - Ensure the FAQ page uses an accordion or similar interactive element for ease of reading.
   - Ensure Legal pages (Terms, Privacy) are structured with clean typography, appropriate headings, and readable line lengths.
4. **Visuals & Styling:**
   - Apply `oklch` CSS variables for light/dark mode parity.
   - Reuse components from `components/visuals/` to introduce motion subtly where appropriate.
   - Utilize images from `lib/images.ts` using the Next.js `<Image />` component.

### Acceptance Criteria
- `app/blog/page.tsx`, `app/faq/page.tsx`, `app/careers/page.tsx`, `app/terms/page.tsx`, and `app/privacy/page.tsx` perfectly reflect their blueprints.
- No hardcoded text exists in any of these files; everything is sourced from the respective TypeScript content file.
- The project memory files (`.agent/current-state.md`, `.agent/next-state.md`, `.agent/agent.md`) are updated to reflect the completion of Phase 7.
