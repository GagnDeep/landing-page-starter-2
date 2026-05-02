import { BasePageContent, CTA } from './types';

export interface FeaturesContent extends BasePageContent {
  services: {
    title: string;
    description: string;
    details?: string[];
  }[];
  bookingCta: {
    heading: string;
    description: string;
    cta: CTA;
  };
}

export const featuresContent: FeaturesContent = {
  seo: {
    title: "Our Services | Custom Stitching & Styling | Aura Boutique",
    description: "Explore our signature services including bespoke custom stitching, ready-to-wear curation, and expert bridal styling at Aura Boutique.",
  },
  hero: {
    heading: "Our Signature Services",
    subheading: "Elevating your wardrobe with personalized craftsmanship.",
  },
  services: [
    {
      title: "Bespoke Custom Stitching",
      description: "Experience the luxury of clothes made exclusively for you. Send us your measurements, or visit our studio, and our expert tailors will craft the perfect garment.",
      details: ["Suits & Kurti Sets", "Blouses & Lehengas", "Western Dresses & Gowns"]
    },
    {
      title: "Ready-to-Wear Curation",
      description: "Shop our carefully curated collections of ethnic and western wear, designed to keep you on-trend for any occasion."
    },
    {
      title: "Bridal & Trousseau Styling",
      description: "From intimate pre-wedding functions to the grand reception, let us design a cohesive, stunning bridal wardrobe that reflects your personal style."
    },
    {
      title: "Express 4-Day Delivery",
      description: "Need it fast? We offer expedited 4-day shipping across India for our ready-to-wear pieces and select custom orders."
    }
  ],
  bookingCta: {
    heading: "Ready to Create Your Look?",
    description: "Consult with our stylists today to begin your custom design journey.",
    cta: {
      label: "Book an Appointment",
      href: "/contact"
    }
  }
};
