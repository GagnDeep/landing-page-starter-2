# Next State: Armaan Driving School

**Target Phase:** 7/8 — Contact, Careers, and Legal Pages

## Goal
To complete the site map by implementing the final operational and legal pages: Contact, Careers, Terms & Conditions, and Privacy Policy.

## Planned Actions
1.  **Contact Page (`app/contact/page.tsx`):**
    *   Build out the contact grid (Phone, Email, Map).
    *   Implement the contact request form UI based on `.agent/layout-contact.md` and `content/contact.ts`.
2.  **Careers Page (`app/careers/page.tsx`):**
    *   Construct the recruitment layout detailing core values, requirements, and current openings based on `.agent/layout-careers.md` and `content/careers.ts`.
3.  **Legal Pages (`app/terms/page.tsx` and `app/privacy/page.tsx`):**
    *   Create clean, text-heavy layouts utilizing `@tailwindcss/typography` (`prose`) to render the policy arrays defined in `content/terms.ts` and `content/privacy.ts`.

## Constraints & Considerations
*   **Data Binding:** Maintain the strict rule of zero hardcoded strings in the UI components; all copy must flow from the `content/` directory.
*   **Form Implementation:** The forms on the Contact and Careers pages should be visually complete (using Shadcn UI inputs) but do not require backend submission logic in this frontend phase. Ensure they are SSR safe.
*   **Typography Reuse:** Leverage the same `prose` setup used in the blog for the legal pages to maintain typographical consistency.