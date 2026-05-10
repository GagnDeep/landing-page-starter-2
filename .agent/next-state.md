# Next State: Armaan Driving School

**Target Phase:** 8/8 — Final Polish, SEO, and Audit

## Goal
To perform a comprehensive site-wide audit, optimizing performance, accessibility, and search engine visibility to ensure the project is fully production-ready.

## Planned Actions
1.  **SEO & Metadata:**
    *   Review all `metadata` exports across `app/**/page.tsx`.
    *   Add Open Graph (OG) tags, Twitter cards, and structured schema markup (LocalBusiness for Armaan Driving School).
    *   Ensure canonical URLs are set.
2.  **Accessibility (a11y) Audit:**
    *   Verify ARIA labels on interactive elements (buttons, accordions, forms).
    *   Check color contrast ratios against the OKLCH tokens defined in the design system.
    *   Ensure `prefers-reduced-motion` is universally respected by Framer Motion wrappers.
3.  **Performance & Polish:**
    *   Review `next/image` usage for proper sizing, `priority` loading on LCP images (heroes), and appropriate lazy loading.
    *   Audit Framer Motion variants to ensure they aren't causing layout shifts or excessive repaints.
    *   Final cross-page visual consistency check (spacing rhythm, typography scales).

## Constraints & Considerations
*   **No New Features:** This phase is strictly for refinement and optimization. Do not introduce new sections, pages, or major UI shifts unless they fix a critical accessibility or layout bug.
*   **Performance Budget:** Ensure the site maintains high Lighthouse scores, particularly regarding LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift).