import { SEO, CTA } from './types';

export interface PricingContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  philosophy: {
    headline: string;
    body: string;
  };
  tiers: Array<{
    name: string;
    description: string;
    features: string[];
    cta: CTA;
  }>;
  process: {
    headline: string;
    steps: Array<{ title: string; description: string }>;
  };
  ctaSection: {
    headline: string;
    cta: CTA;
  };
}

export const pricingContent: PricingContent = {
  seo: {
    title: "Investment | Guide Events",
    description: "Transparent, tailored curation. Discover the investment tiers for Guide Events' premier wedding planning services.",
  },
  hero: {
    headline: "Invest in Peace of Mind",
    subheadline: "Transparent, tailored curation for the discerning client.",
  },
  philosophy: {
    headline: "Our Philosophy on Luxury",
    body: "True luxury is inherently custom. We do not believe in rigid packages that force a vision to fit a mold. Instead, we offer tiers of service engagement, tailored specifically to the scope, scale, and complexity of your unique celebration.",
  },
  tiers: [
    {
      name: "Full Orchestration",
      description: "The ultimate luxury experience. We handle every detail from inception to execution, allowing you to be entirely stress-free.",
      features: [
        "End-to-End Venue Sourcing & Negotiation",
        "Comprehensive Budget Management",
        "Bespoke Decor Design & Execution",
        "Full Vendor Curation & Coordination",
        "Complete Guest Logistics & Hospitality",
        "On-the-Day Event Direction",
      ],
      cta: {
        label: "Inquire Now",
        href: "/contact",
      },
    },
    {
      name: "The Destination Experience",
      description: "Specialized logistics and immersive planning for multi-day, multi-city international or domestic destination weddings.",
      features: [
        "Dedicated Travel & Accommodation Concierge",
        "Cross-Border Vendor Management",
        "Customized Cultural Experiences for Guests",
        "Advanced Timeline & Itinerary Creation",
        "24/7 NRI Coordination Portal Access",
      ],
      cta: {
        label: "Inquire Now",
        href: "/contact",
      },
    },
    {
      name: "Design & Coordination",
      description: "For the client who has secured a venue but requires aesthetic brilliance and flawless execution on the day.",
      features: [
        "Bespoke Visual Concept & Mood Boards",
        "Decor Vendor Management",
        "Timeline Optimization",
        "Vendor Synchronisation (1 Month Prior)",
        "On-the-Day Event Direction",
      ],
      cta: {
        label: "Inquire Now",
        href: "/contact",
      },
    },
  ],
  process: {
    headline: "The Consultation Process",
    steps: [
      {
        title: "01. Discovery Call",
        description: "An initial, complimentary conversation to understand your vision, scale, and specific requirements.",
      },
      {
        title: "02. Custom Proposal",
        description: "We present a tailored scope of work and a transparent fee structure based on your unique needs.",
      },
      {
        title: "03. Retainer & Onboarding",
        description: "Upon agreement, a formal contract is signed, the retainer is paid, and the meticulous planning begins.",
      },
    ],
  },
  ctaSection: {
    headline: "Request a Custom Proposal",
    cta: {
      label: "Connect With Our Planners",
      href: "/contact",
    },
  },
};
