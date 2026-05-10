export interface SEO {
  title: string;
  description: string;
}

export interface Tier {
  name: string;
  priceStart: string;
  description: string;
  inclusions: string[];
}

export interface IncludedProvision {
  title: string;
  description: string;
}

export interface AddOn {
  title: string;
  description: string;
}

export interface Milestone {
  percentage: string;
  timing: string;
}

export interface PricingContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  philosophy: {
    headline: string;
    description: string;
  };
  tiers: {
    classic: Tier;
    signature: Tier;
    bespoke: Tier;
  };
  alwaysIncluded: {
    headline: string;
    provisions: IncludedProvision[];
  };
  addOns: {
    headline: string;
    services: AddOn[];
  };
  scalingInfo: {
    headline: string;
    description: string;
  };
  consultationFee: {
    headline: string;
    description: string;
  };
  paymentMilestones: {
    headline: string;
    milestones: Milestone[];
  };
  policies: {
    headline: string;
    cancellation: string;
    adjustments: string;
  };
  valueProposition: {
    headline: string;
    description: string;
  };
  testimonial: {
    quote: string;
    author: string;
  };
  additionalFees: {
    headline: string;
    venueTaxes: string;
    travelLogistics: string;
  };
  faqTeaser: {
    headline: string;
    ctaText: string;
  };
  proposalTeaser: {
    headline: string;
    description: string;
    ctaText: string;
  };
  primaryCta: {
    headline: string;
    ctaText: string;
  };
}

export const pricingContent: PricingContent = {
  seo: {
    title: "Investments & Packages | Oasis Caterers",
    description: "Discover the investment required for a truly bespoke culinary experience with Oasis Caterers. Curated tiers tailored to the scale of your celebration.",
  },
  hero: {
    headline: "The Investment",
    subheadline: "Curated experiences tailored to your scale.",
  },
  philosophy: {
    headline: "Our Pricing Philosophy",
    description: "At Oasis Caterers, we do not believe in rigid, one-size-fits-all packages. Every event is a bespoke creation. However, to guide your planning, we have established baseline investment tiers that reflect the uncompromising quality of our ingredients, the depth of our staff, and the elegance of our presentation.",
  },
  tiers: {
    classic: {
      name: "The Classic Affair",
      priceStart: "Starting from ₹3,500 per guest",
      description: "An elegant baseline for grand celebrations, offering our signature quality and impeccable family-style service.",
      inclusions: [
        "Curated 4-Course Menu",
        "Standard Luxury Flatware & Linens",
        "Dedicated Event Captain",
        "1 Waitstaff per 20 Guests",
      ],
    },
    signature: {
      name: "The Signature Gala",
      priceStart: "Starting from ₹5,500 per guest",
      description: "Our most sought-after experience, featuring elevated culinary artistry, live stations, and enhanced service ratios.",
      inclusions: [
        "Extensive 6-Course Bespoke Menu",
        "2 Live Action Culinary Stations",
        "Premium Artisanal Tablescape",
        "1 Waitstaff per 12 Guests",
        "Dedicated Concierge Service",
      ],
    },
    bespoke: {
      name: "The Bespoke Journey",
      priceStart: "Price Upon Request",
      description: "The absolute pinnacle of luxury catering. A limitless culinary canvas designed for the most exclusive and intimate gatherings.",
      inclusions: [
        "Limitless Menu Customization",
        "Executive Chef On-Site Execution",
        "Exclusive Imported Ingredient Sourcing",
        "White-Glove Service Ratio (1 per 5 Guests)",
        "Comprehensive Sommelier/Mixology Pairings",
      ],
    },
  },
  alwaysIncluded: {
    headline: "The Oasis Standard",
    provisions: [
      { title: "Immaculate Service Staff", description: "Fully uniformed, rigorously trained professionals." },
      { title: "Kitchen Infrastructure", description: "Complete back-of-house setup and sanitation." },
      { title: "Menu Design Consultation", description: "Personalized sessions with our culinary directors." },
      { title: "Premium Serving Equipment", description: "Elegant chafing dishes and display architecture." },
    ],
  },
  addOns: {
    headline: "Enhance Your Evening",
    services: [
      { title: "Late-Night Culinary Stations", description: "Keep the celebration vibrant with bespoke midnight snacks, from artisanal sliders to regional street food elegantly presented." },
      { title: "The Artisanal Mixology Bar", description: "A dedicated non-alcoholic bar featuring craft mocktails, fresh infusions, and premium botanical waters." },
      { title: "The Grand Dessert Atelier", description: "An expanded, interactive dessert installation featuring live flambé, patisserie displays, and bespoke confections." },
    ],
  },
  scalingInfo: {
    headline: "Scale & Investment",
    description: "The per-guest investment naturally adjusts based on the total headcount. Larger gatherings benefit from economies of scale regarding infrastructure, while intimate events command a premium for hyper-concentrated service and specialized sourcing.",
  },
  consultationFee: {
    headline: "The Tasting Deposit",
    description: "We invite serious inquiries to experience 'The Evening Fitting'. A consultation and tasting deposit of ₹15,000 is required, which is fully credited towards your final invoice upon booking.",
  },
  paymentMilestones: {
    headline: "Investment Milestones",
    milestones: [
      { percentage: "25%", timing: "Upon Contract Signing to Secure the Date" },
      { percentage: "50%", timing: "90 Days Prior to the Event" },
      { percentage: "25%", timing: "14 Days Prior, Alongside Final Guest Count" },
    ],
  },
  policies: {
    headline: "Agreements & Policies",
    cancellation: "We understand that circumstances change. Cancellations made 120 days prior to the event will receive a full refund minus the initial deposit. Subsequent cancellations are subject to our tiered policy.",
    adjustments: "Final guest counts and menu adjustments must be locked 14 days prior to the event to ensure immaculate sourcing and preparation.",
  },
  valueProposition: {
    headline: "The True Value of Elegance",
    description: "Choosing Oasis Caterers is an investment in peace of mind. We absorb the complexities of event dining so that you, as the host, can be a guest at your own celebration. The value lies not just in what is on the plate, but in the seamless joy of the experience.",
  },
  testimonial: {
    quote: "When reviewing our wedding budget, Oasis was our most significant investment, and without question, it provided the highest return. They delivered a flawless evening that our family will talk about for generations.",
    author: "S. Kapoor",
  },
  additionalFees: {
    headline: "Logistics & Externalities",
    venueTaxes: "Please note that all investments are subject to applicable GST. Furthermore, any specific kitchen buyout fees mandated by your chosen venue will be detailed clearly in your proposal.",
    travelLogistics: "For events hosted outside the Patiala region, a logistical surcharge will be applied to accommodate secure transport, staff accommodation, and mobile kitchen infrastructure.",
  },
  faqTeaser: {
    headline: "Clarifications on Investment",
    ctaText: "Review Financial FAQs",
  },
  proposalTeaser: {
    headline: "Receive a Custom Estimate",
    description: "Allow us to draft a preliminary investment overview based on your specific vision.",
    ctaText: "Request an Estimate",
  },
  primaryCta: {
    headline: "Ready to Discuss Your Vision?",
    ctaText: "Schedule a Consultation",
  },
};