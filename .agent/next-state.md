# Next State: Phase 7 (Implement Auxiliary Pages)

## Goal
To implement the auxiliary content pages that build brand authority and provide necessary legal compliance: Blog, Careers, Terms, and Privacy.

## Handoff Context
- Phase 1 defined the layout intents (`.agent/layout-secondary.md`).
- Phase 2 populated the hardcoded copy (`content/blog.ts`, `content/careers.ts`, `content/terms.ts`, `content/privacy.ts`).
- Phase 3 established the image registry (`lib/images.ts`) and animated primitives (`components/visuals/`).
- Phase 4, 5 & 6 implemented the core navigation paths, supporting info, and critical conversion workflows.

## Required Actions
- Implement the page routes for `/blog`, `/careers`, `/terms`, and `/privacy`.
- Ensure the Blog and Careers pages reflect the same high-end editorial standard as the rest of the site.
- Ensure the Terms and Privacy pages are highly legible, centered reading experiences.
- Continue to leverage the animated visual primitives and the design system tokens.

## Acceptance Criteria
- `/blog`, `/careers`, `/terms`, and `/privacy` render successfully and are fully responsive.
- Content is strictly pulled from the respective `content/` TypeScript files.