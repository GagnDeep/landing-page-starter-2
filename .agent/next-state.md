# Next State: Armaan Driving School

**Target Phase:** 2/8 — Content Files

## Goal
To completely separate all text content from the UI codebase. We will create structured TypeScript objects containing all hardcoded strings (headings, paragraphs, button text, FAQs, etc.) based on the established layout blueprints.

## Planned Actions
1.  **Directory Creation:** Create a `content/` directory at the root level.
2.  **File Generation:** Create individual `.ts` files corresponding to each page layout (e.g., `content/home.ts`, `content/about.ts`, `content/pricing.ts`).
3.  **Data Structuring:** Within each file, export strongly typed objects/interfaces that map to the specific sections outlined in the Phase 1 layout documents.
4.  **Copywriting:** Populate these objects with professional, confidence-inspiring, and locally optimized (Sector 47, Chandigarh) copy suitable for a premium driving school.

## Constraints & Considerations
*   **No UI Code:** Continue to strictly avoid writing any TSX or React components in this phase.
*   **Type Safety:** Ensure the content objects are structured in a way that will be easy to consume and type-check in later phases.
*   **Tone Alignment:** Maintain the "Calm, Methodical, Safe" voice established in the brand guidelines.