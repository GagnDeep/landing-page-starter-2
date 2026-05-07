# Next State: Phase 6 (Implement Transactional Pages)

## Goal
To implement the critical conversion-focused pages: Pricing and Contact/Booking.

## Handoff Context
- Phase 1 defined the layout intents (`.agent/layout-secondary.md`).
- Phase 2 populated the hardcoded copy (`content/pricing.ts`, `content/contact.ts`).
- Phase 3 established the image registry (`lib/images.ts`) and animated primitives (`components/visuals/`).
- Phase 4 & 5 implemented the core branding, home page, and supporting informational pages.

## Required Actions
- Implement the page routes for `/pricing` and `/contact`.
- Ensure the forms and pricing tiers adhere strictly to the luxury editorial design system, avoiding standard SaaS-like UI patterns.
- Reuse the animated visual primitives.

## Acceptance Criteria
- `/pricing` and `/contact` render successfully.
- The contact form structure is fully styled (it does not need to handle real form submissions yet, but the UI must be pristine).
- Content is fully data-driven from their respective `content/` TypeScript files.