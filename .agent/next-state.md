# Next Project State
Verma's Bakery & Sweets

## Phase 4 Handoff: Build Core Homepage Experience

### Objective
Assemble the homepage (`app/page.tsx`) by integrating the layout blueprints, the exported content strings, the design system tokens, and the newly created visual/animation components.

### Required Actions
1. **Layout Mapping:** Refer to `.agent/layout-home.md` to structure the TSX layout.
2. **Content Integration:** Import `homeContent` from `content/home.ts` and use it exclusively for all text on the homepage.
3. **Visuals & Styling:**
   - Apply the `oklch` CSS variables and typography variables defined in `.agent/design-system.md`.
   - Incorporate the animated wrappers from `components/visuals/` to introduce motion elegantly.
   - Utilize images from `lib/images.ts` using the Next.js `<Image />` component.
4. **Accessibility:** Ensure semantic HTML, proper ARIA labeling, and responsive design across all breakpoints.

### Acceptance Criteria
- `app/page.tsx` perfectly reflects the blueprint from `layout-home.md`.
- No hardcoded text exists in the TSX file; everything is sourced from `content/home.ts`.
- The homepage utilizes at least three different animated visual components.
- The project memory files (`.agent/current-state.md`, `.agent/next-state.md`, `.agent/agent.md`) are updated to reflect the completion of Phase 4.
