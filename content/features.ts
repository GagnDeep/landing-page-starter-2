export interface FeaturesContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
  };
  wedding: {
    heading: string;
    description: string;
    features: string[];
  };
  corporate: {
    heading: string;
    description: string;
  };
  liveStalls: {
    heading: string;
    description: string;
    popularStalls: string[];
  };
  intimate: {
    heading: string;
    description: string;
  };
  customDesign: {
    heading: string;
    description: string;
  };
  equipment: {
    heading: string;
    description: string;
    items: string[];
  };
  cta: {
    heading: string;
    button: string;
  };
}

export const featuresContent: FeaturesContent = {
  meta: {
    title: "Catering Services | Bawa Caterers Enterprises",
    description: "Explore our premium catering services, from grand wedding feasts and interactive live stalls to sophisticated corporate banquets.",
  },
  hero: {
    headline: "Catering for Every Grand Occasion",
  },
  wedding: {
    heading: "The Royal Wedding Experience",
    description: "We craft expansive, multi-course feasts that serve as the crown jewel of your wedding celebrations.",
    features: ["Pre-wedding function menus", "Grand reception spreads", "Dedicated VIP service"]
  },
  corporate: {
    heading: "Professional Corporate Banquets",
    description: "Scalable, sophisticated solutions for conferences, galas, and high-end professional gatherings, executed with punctuality and precision."
  },
  liveStalls: {
    heading: "Theatrics of Flavor: Live Interactive Stalls",
    description: "Engage your guests with the vibrant energy of live cooking. A sensory delight that brings the kitchen's action to the forefront.",
    popularStalls: ["Amritsari Kulcha & Chole", "Live Tandoori Grill", "Premium Chaat Counter", "Continental Pasta Station"]
  },
  intimate: {
    heading: "Boutique Intimate Gatherings",
    description: "For smaller, exclusive events, we offer highly detailed, curated culinary experiences where every plate is a masterpiece."
  },
  customDesign: {
    heading: "Bespoke Menu Design",
    description: "Our culinary team works closely with you to tailor menus to specific themes, regional preferences, or dietary requirements, ensuring a personalized feast."
  },
  equipment: {
    heading: "Premium Setup & Presentation",
    description: "We provide not just food, but a complete visual experience.",
    items: ["Imported chafing dishes", "High-end cutlery & crockery", "Uniformed, professional service staff"]
  },
  cta: {
    heading: "Ready to Plan Your Event?",
    button: "Request a Customized Proposal"
  }
};
