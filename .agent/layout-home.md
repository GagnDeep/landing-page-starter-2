# Layout Documentation: Home Page

This document defines the structural blueprint and visual rhythm for the Sangam Caterer Home Page. It focuses purely on layout intent and hierarchy.

## 1. Global Header (Sticky)
- **Layout**: Full width, transparent on initial load, transitioning to a frosted glass background (`bg-background/80 backdrop-blur-md`) on scroll.
- **Structure**:
  - Left: Elegant Wordmark Logo (Cormorant Garamond).
  - Center: Hidden on mobile, inline navigation links on desktop (Montserrat, text-sm, wide tracking).
  - Right: Primary CTA Button ("Book a Consultation").

## 2. Hero Section
- **Layout**: Full viewport height (`min-h-screen`).
- **Visuals**: Large, high-quality, atmospheric background image (darkened slightly for text contrast).
- **Structure**: Center-aligned.
  - Subtitle: Small serif, tracked out (e.g., "AUTHENTIC PUNJABI & INTERNATIONAL CUISINE").
  - Title: Massive serif heading (`Cormorant Garamond`), spanning multiple lines.
  - Actions: Primary CTA and a subtle "View Menu" link below.

## 3. Introduction / Philosophy Statement
- **Layout**: Asymmetrical 12-column grid. `py-32`.
- **Structure**:
  - Left (Cols 1-5): Large pull quote or philosophy statement (Cormorant Garamond, text-4xl).
  - Right (Cols 7-12): Flowing body copy (Montserrat) explaining the heritage and quality, followed by a refined signature script or founder's name.

## 4. The Sangam Experience (Features Grid)
- **Layout**: Full width container, `py-24`.
- **Structure**:
  - Section Header: Centered, small accent text above a serif section title.
  - Grid: 3-column CSS grid (desktop), stacking on mobile.
  - Cards: Minimalist. Subtle border or slight background tint. Top-aligned icon, serif title, sans-serif description.

## 5. Featured Cuisines (Split View)
- **Layout**: Alternating 50/50 split sections. No visible gap.
- **Block A (Punjabi Heritage)**:
  - Left: Edge-to-edge image.
  - Right: Generously padded content block. Serif heading, evocative description, CTA ("Explore Menu").
- **Block B (International Flair)**:
  - Left: Padded content block.
  - Right: Edge-to-edge image.

## 6. Signature Dishes Carousel
- **Layout**: Overflowing horizontal carousel to imply abundance and scale.
- **Structure**:
  - Left aligned section header.
  - Carousel items: Portrait aspect ratio (e.g., 4:5). Image takes up 80% of height. Below: Dish name (Serif) and short description.

## 7. Destination Weddings Focus
- **Layout**: Full width, dark background (`bg-primary` or `bg-secondary` in dark mode) to create a dramatic pacing break. `py-32`.
- **Structure**: Centered content. Heavy use of gold/saffron accents. Emphasizing capability to travel and execute large-scale luxury events.

## 8. Testimonial / Social Proof
- **Layout**: Elegant, singular focus.
- **Structure**: A single, very large quote centered on the screen. Below it, the couple's name and wedding location (e.g., "Lake Como, Italy").

## 9. Visual Gallery Grid
- **Layout**: Masonry or tightly packed CSS grid of 5-7 images.
- **Structure**: Mix of wide, square, and tall images showing food details, event setups, and happy guests.

## 10. The Process (Steps)
- **Layout**: Vertical timeline or horizontal 4-step row.
- **Structure**: Numbered steps (01, 02, etc. in a large, faint serif font behind the text). Clear, concise headings.

## 11. Press & Recognition (Logos)
- **Layout**: Horizontal scrolling marquee or a simple flex row of faded logos.
- **Structure**: "Featured In" heading. Monochromatic or low-opacity partner logos.

## 12. Lead Chef / Founder Profile
- **Layout**: 12-column grid.
- **Structure**:
  - Cols 2-5: Portrait of the chef.
  - Cols 7-11: Biography, culinary philosophy, and a personal quote.

## 13. Sustainability & Sourcing
- **Layout**: Image background with a text overlay card offset to one side.
- **Structure**: Focus on farm-to-table, fresh ingredients, and ethical sourcing.

## 14. Event Types List
- **Layout**: A clean, typographic list.
- **Structure**: Large interactive text rows that reveal an image on hover (desktop). E.g., "Weddings", "Corporate Galas", "Private Dinners".

## 15. FAQ Teaser
- **Layout**: 2-column layout.
- **Structure**: Left side: "Questions?" heading and contact CTA. Right side: 3-4 beautifully styled accordion items.

## 16. Recent Journal/Blog Entries
- **Layout**: 3-column card layout.
- **Structure**: Image top, date, serif title, read more link.

## 17. Newsletter / Inner Circle Sign Up
- **Layout**: Centered narrow container.
- **Structure**: Minimalist form input with a solid button seamlessly attached.

## 18. Instagram Feed / Social
- **Layout**: 4-column flush grid of square images.
- **Structure**: "@SangamCaterer" overlay in the center.

## 19. Final CTA (Book Now)
- **Layout**: Massive, screen-filling section. `py-40`.
- **Structure**: Huge typography, compelling invite to start the conversation, large primary button.

## 20. Global Footer
- **Layout**: Multi-column `py-16`.
- **Structure**:
  - Col 1: Logo and brief tagline.
  - Col 2/3/4: Sitemaps, Legal links.
  - Bottom row: Copyright, social icons, subtle credit.