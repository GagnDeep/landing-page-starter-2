# Next State: Blinking Eye Events

**Upcoming Phase:** Phase 4 - Core Layout & Home Page Implementation

## Immediate Objectives
- Create the global layout wrapper (`app/layout.tsx`) including the Main Navigation (transparent to solid on scroll) and Global Footer.
- Assemble the Home Page (`app/page.tsx`) using the data from `content/home.ts` and the visual components from `components/visuals/`.
- Translate the narrative structure defined in `.agent/layout-home.md` into responsive, semantic React components.
- Ensure light/dark mode toggling works flawlessly across the new layout using `next-themes`.

## Technical Requirements for Next Phase
- Stick to React Server Components where possible. Use `"use client"` only for interactive elements (like the nav toggle or specific visual components that need hydration context).
- Ensure image rendering uses `next/image` referencing the `lib/images.ts` registry.
- Do not pass non-serializable props (like functions) to Client Components from Server Components.

## Blockers / Considerations
- Verify that `shadcn/ui` components needed for the navigation or footer (like buttons or sheets for mobile nav) are installed before attempting to use them.