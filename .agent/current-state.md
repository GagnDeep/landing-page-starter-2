# Current State

Phase 4 (Core Layout and Global Components) is complete.

- Engineered `components/layout/Navbar.tsx` and `components/layout/Footer.tsx` using the tokens established in Phase 1 and copy populated from Phase 2 (`content/home.ts`).
- Avoided hardcoded strings in layouts by dynamically referencing the content registry for brand names, phone numbers, hours, and addresses.
- Integrated the visual `AnimatedFloralSVG.tsx` built in Phase 3 as the brand mark in the header and footer.
- Established `app/layout.tsx` to handle the overarching Next.js layout, wrapping the application in a `ThemeProvider` to persist light/dark modes using the OKLCH theme engine.
- Connected global typography (Inter and Playfair Display) smoothly across the layout.

The site shell is now fully accessible, responsive, hydration-safe, and visually consistent with the Royal Flower Decoration aesthetic.
