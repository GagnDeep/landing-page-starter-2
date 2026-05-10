# Layout Blueprint: Blog & Advice Page (`/blog` and `/blog/[slug]`)

## Goal
To position Armaan Driving School as a thought leader in road safety and driver education in Chandigarh, aiding SEO and providing ongoing value.

## Section Architecture (Blog Index - 15 Blocks)

1.  **Global Navigation (Header):** Standard global component.
2.  **Hero Section:** "Driving Tips, Safety Advice, and Local Updates."
3.  **Search Bar & Categories:** Allow filtering (e.g., Beginner Tips, Local Rules, Car Maintenance).
4.  **Featured Post:** Large card highlighting the most important recent article.
5.  **Recent Posts Grid:** 3-column grid of the latest articles.
6.  **Popular Topics Tags:** Quick links to popular tags (e.g., "Roundabouts", "Parallel Parking").
7.  **Newsletter/Updates Signup:** "Get driving tips in your inbox."
8.  **Category Highlight: Beginner Guides:** Dedicated section for novice drivers.
9.  **Category Highlight: Chandigarh Specifics:** Posts about local traffic updates or RTO changes.
10. **Instructor Tips:** A specific recurring series featuring advice straight from the instructors.
11. **Pagination/Load More:** Controls to view older posts.
12. **Promo Banner:** Mid-page banner advertising a driving package.
13. **Student Stories/Interviews:** Occasional features on successful students.
14. **Final CTA:** "Ready to put these tips into practice?"
15. **Global Footer:** Standard global component.

## Section Architecture (Blog Post Layout - `[slug]`)

1.  **Global Navigation (Header):** Standard global component.
2.  **Article Header:** Title, Date, Author (Instructor name), Category tag.
3.  **Hero Image:** High-quality, relevant image.
4.  **Article Body (Rich Text):** Using `@tailwindcss/typography` for clean reading.
5.  **Pull Quotes:** Styled blocks for important advice.
6.  **Inline Images/Diagrams:** Crucial for explaining maneuvers (e.g., parking diagrams).
7.  **Author Bio Box:** Short bio of the instructor who wrote it.
8.  **Social Share Buttons:** Easy sharing to WhatsApp, Facebook, etc.
9.  **Related Posts:** 3 suggestions at the bottom.
10. **Inline CTA:** Call to action embedded within or at the end of the article content.
11. **Global Footer:** Standard global component.