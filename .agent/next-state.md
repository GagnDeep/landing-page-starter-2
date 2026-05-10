# Next State: Armaan Driving School

**Target Phase:** 6/8 — Blog and FAQ Page Implementation

## Goal
To build the `/blog` and `/faq` routes, providing structured, SEO-friendly homes for the school's driving advice, local RTO updates, and frequently asked questions.

## Planned Actions
1.  **FAQ Page (`app/faq/page.tsx`):**
    *   Implement the accordion-based FAQ layout according to `.agent/layout-faq.md`.
    *   Hydrate with data from `content/faq.ts`.
    *   Include the search/filter UI placeholder and contact form block.
2.  **Blog Index Page (`app/blog/page.tsx`):**
    *   Implement the blog listing layout (Hero, Featured, Grid) based on `.agent/layout-blog.md`.
    *   Hydrate with mock data from `content/blog.ts`.
3.  **Blog Post Template (Optional/Prep):**
    *   Outline the `app/blog/[slug]/page.tsx` structure if time permits.

## Constraints & Considerations
*   **Accessibility:** Ensure the FAQ accordions are fully accessible (keyboard navigable, proper ARIA states) — utilizing the existing shadcn/ui Accordion component is recommended.
*   **Data Binding:** Continue the strict pattern of pulling all strings from the `content/` directory.