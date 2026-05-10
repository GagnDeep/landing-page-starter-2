import { SEO, CTA } from './types';

export interface AboutContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  founder: {
    headline: string;
    body: string;
    name: string;
    role: string;
  };
  coreValues: {
    headline: string;
    values: Array<{ title: string; description: string }>;
  };
  heritage: {
    headline: string;
    body: string;
  };
  promise: {
    headline: string;
    body: string;
  };
  ctaSection: {
    headline: string;
    cta: CTA;
  };
}

export const aboutContent: AboutContent = {
  seo: {
    title: "About Us | Guide Events",
    description: "Discover the heritage, philosophy, and master orchestrators behind Guide Events, Chandigarh's premier luxury wedding planners.",
  },
  hero: {
    headline: "The Architects of Celebration",
    subheadline: "Crafting legacies and orchestrating unforgettable moments since our inception.",
  },
  founder: {
    headline: "A Vision of Uncompromising Elegance",
    body: "Founded on the principles of impeccable service and aesthetic brilliance, Guide Events was born from a desire to elevate the standard of celebration. We approach every event not just as planners, but as artisans crafting a masterpiece. Our commitment is to translate your most intricate visions into a breathtaking, stress-free reality, allowing you to be a guest at your own celebration.",
    name: "Mr. Negi",
    role: "Founder & Lead Orchestrator",
  },
  coreValues: {
    headline: "Our Guiding Principles",
    values: [
      {
        title: "Absolute Precision",
        description: "Meticulous attention to the unseen details that distinguish a good event from a spectacular one.",
      },
      {
        title: "Unwavering Discretion",
        description: "A commitment to privacy and seamless, invisible service for our high-profile clientele.",
      },
      {
        title: "Cultural Authenticity",
        description: "Honoring traditions with a modern, sophisticated execution tailored to a global standard.",
      },
    ],
  },
  heritage: {
    headline: "Rooted in Culinary Excellence",
    body: "Our foundation is deeply tied to the prestigious legacy of Bawa Caterers Enterprises. This profound culinary heritage allows us to offer an unparalleled gastronomic experience, seamlessly blending the robust flavors of royal Punjabi cuisine with contemporary presentation.",
  },
  promise: {
    headline: "The 4.9★ Standard",
    body: "Excellence is not an aspiration; it is our baseline. Our consistent 4.9★ reputation is a testament to our relentless pursuit of perfection and the unwavering trust our clients place in our hands.",
  },
  ctaSection: {
    headline: "Begin Your Journey With Us",
    cta: {
      label: "Schedule a Consultation",
      href: "/contact",
    },
  },
};
