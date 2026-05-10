import { SEO, CTA } from './types';

export interface FeaturesContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  services: Array<{
    id: string;
    headline: string;
    body: string;
    highlights?: string[];
  }>;
  nriAdvantage: {
    headline: string;
    body: string;
  };
  ctaSection: {
    headline: string;
    cta: CTA;
  };
}

export const featuresContent: FeaturesContent = {
  seo: {
    title: "Our Services | Guide Events",
    description: "Explore our comprehensive suite of luxury wedding planning services, from end-to-end orchestration to thematic decor and culinary excellence.",
  },
  hero: {
    headline: "Orchestrating Every Detail",
    subheadline: "A comprehensive, high-touch approach to luxury event execution.",
  },
  services: [
    {
      id: "planning",
      headline: "End-to-End Orchestration",
      body: "We manage the infinite complexities of event planning, allowing you to immerse yourself entirely in the joy of the occasion. From venue curation and contract negotiations to timeline management and vendor synchronization, our team handles it all with exacting precision.",
      highlights: ["Comprehensive Timeline Management", "Budget Optimization", "Vendor Contract Negotiation"],
    },
    {
      id: "decor",
      headline: "Thematic Decor & Spatial Design",
      body: "Our spatial architects translate your vision into an immersive, tactile reality. We specialize in creating grand, palatial atmospheres, intimate floral wonderlands, and everything in between, ensuring every visual element speaks to your unique style.",
      highlights: ["Custom Stage Fabrication", "Bespoke Floral Arrangements", "Immersive Lighting Design"],
    },
    {
      id: "culinary",
      headline: "Culinary Excellence & Hospitality",
      body: "Leveraging our heritage with Bawa Caterers Enterprises, we curate gastronomic journeys that become a defining memory of your celebration. From authentic, vibrant live stalls to opulent royal thalis, our service is impeccably timed and exquisitely presented.",
      highlights: ["Menu Curation & Tastings", "Live Thematic Stalls", "Premium Bar Management"],
    },
    {
      id: "logistics",
      headline: "Global Guest Logistics",
      body: "We provide white-glove hospitality for your esteemed guests. Our dedicated logistics team ensures seamless airport transfers, effortless hotel check-ins, and curated welcome experiences, reflecting your warmth as a host.",
      highlights: ["Airport Concierge Services", "Accommodation Management", "Curated Welcome Hampers"],
    },
  ],
  nriAdvantage: {
    headline: "The Tech-Enabled Advantage",
    body: "For our global clientele, distance is an illusion. We utilize sophisticated client portals to provide 24/7 access to design boards, vendor contracts, and real-time budget tracking. You are always informed, always in control, regardless of the time zone.",
  },
  ctaSection: {
    headline: "Ready to Discuss Your Vision?",
    cta: {
      label: "Book a Discovery Call",
      href: "/contact",
    },
  },
};
