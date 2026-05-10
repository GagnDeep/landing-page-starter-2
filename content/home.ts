import { SEO, CTA } from './types';

export interface HomeContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
    cta: CTA;
  };
  introduction: {
    headline: string;
    body: string;
  };
  servicesOverview: {
    headline: string;
    services: Array<{ title: string; description: string; href: string }>;
  };
  nriExperience: {
    headline: string;
    body: string;
    cta: CTA;
  };
  signatureApproach: {
    headline: string;
    steps: Array<{ title: string; description: string }>;
  };
  testimonial: {
    quote: string;
    author: string;
    event: string;
  };
  ctaSection: {
    headline: string;
    body: string;
    cta: CTA;
  };
}

export const homeContent: HomeContent = {
  seo: {
    title: "Guide Events | Premier Destination Wedding Planners in Chandigarh",
    description: "Orchestrating world-class, luxury destination weddings with flawless precision. Based in Chandigarh, serving a global clientele.",
  },
  hero: {
    headline: "The Architects of Unforgettable Celebrations",
    subheadline: "Crafting royal, flawless destination weddings tailored for the discerning global elite.",
    cta: {
      label: "Book a Consultation",
      href: "/contact",
    },
  },
  introduction: {
    headline: "The Art of Celebration",
    body: "At Guide Events, we believe a wedding is not merely an event, but a legacy unfolding. Rooted in the rich heritage of Punjabi luxury and meticulous hospitality, we curate bespoke experiences that transcend the ordinary. Every detail, from palatial decor to royal culinary affairs, is orchestrated with absolute precision.",
  },
  servicesOverview: {
    headline: "The Orchestration",
    services: [
      {
        title: "End-to-End Planning",
        description: "Seamless conceptualization to flawless execution, ensuring your day is entirely stress-free.",
        href: "/features#planning",
      },
      {
        title: "Thematic Decor Design",
        description: "Breathtaking aesthetics tailored to your vision, transforming spaces into ethereal experiences.",
        href: "/features#decor",
      },
      {
        title: "Royal Culinary Affairs",
        description: "Curated gastronomic journeys featuring authentic live stalls and opulent dining.",
        href: "/features#culinary",
      },
      {
        title: "Global Guest Logistics",
        description: "Impeccable hospitality, travel, and accommodation management for your esteemed guests.",
        href: "/features#logistics",
      },
    ],
  },
  nriExperience: {
    headline: "The NRI Experience: Seamlessly Bridging Continents",
    body: "We understand the unique complexities of planning a celebration from afar. Our specialized 24/7 coordination ensures that distance never compromises your vision. With transparent communication and absolute discretion, we act as your proxy, orchestrating every detail flawlessly so you simply arrive and celebrate.",
    cta: {
      label: "Discover Our Process",
      href: "/features",
    },
  },
  signatureApproach: {
    headline: "The Signature Approach",
    steps: [
      {
        title: "Consultation & Vision",
        description: "An intimate dialogue to unearth your desires, aesthetic preferences, and the unique story you wish to tell.",
      },
      {
        title: "Design & Curation",
        description: "Developing detailed blueprints, mood boards, and curating the absolute best vendors to match your exact standards.",
      },
      {
        title: "Flawless Execution",
        description: "On-the-ground mastery. Our team operates invisibly to ensure absolute perfection in every moment.",
      },
    ],
  },
  testimonial: {
    quote: "Guide Events orchestrated a celebration that exceeded our wildest dreams. Planning from London felt effortless; their attention to detail and unwavering support gave us complete peace of mind.",
    author: "Rohan & Priya",
    event: "Destination Wedding, Udaipur",
  },
  ctaSection: {
    headline: "Let Us Design Your Day",
    body: "Begin the journey to an extraordinary celebration. Connect with our dedicated planners today.",
    cta: {
      label: "Request a Custom Proposal",
      href: "/contact",
    },
  },
};
