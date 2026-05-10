export interface SEO {
  title: string;
  description: string;
}

export interface ServiceDetail {
  headline: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface ServiceTier {
  name: string;
  features: string[];
}

export interface CaseStudy {
  title: string;
  description: string;
}

export interface FeaturesContent {
  seo: SEO;
  hero: {
    headline: string;
  };
  introduction: {
    headline: string;
    description: string;
  };
  services: {
    grandWedding: ServiceDetail;
    corporateGala: ServiceDetail;
    intimateGathering: ServiceDetail;
  };
  menuDesign: {
    headline: string;
    steps: Step[];
  };
  dietaryExpertise: {
    headline: string;
    description: string;
  };
  tastingSession: {
    headline: string;
    description: string;
  };
  venueCoordination: {
    headline: string;
    description: string;
  };
  staffing: {
    headline: string;
    description: string;
  };
  equipment: {
    headline: string;
    description: string;
  };
  beverage: {
    headline: string;
    description: string;
  };
  comparisonTable: {
    headline: string;
    tiers: ServiceTier[];
  };
  caseStudies: {
    headline: string;
    studies: CaseStudy[];
  };
  faqTeaser: {
    headline: string;
    ctaText: string;
  };
  brochure: {
    headline: string;
    description: string;
    ctaText: string;
  };
  primaryCta: {
    headline: string;
    ctaText: string;
  };
}

export const featuresContent: FeaturesContent = {
  seo: {
    title: "Services & Offerings | Oasis Caterers",
    description: "Explore the bespoke catering services of Oasis Caterers. From grand weddings to intimate galas, we deliver impeccable culinary experiences.",
  },
  hero: {
    headline: "Bespoke Culinary Experiences",
  },
  introduction: {
    headline: "A Symphony of Taste and Service",
    description: "We do not offer preset packages; we craft experiences. Every event is a unique canvas, and our approach is entirely holistic. From the initial conceptualization of the menu to the final pour of champagne, Oasis Caterers orchestrates every detail with precision and grace.",
  },
  services: {
    grandWedding: {
      headline: "The Grand Wedding",
      description: "Our signature offering. We specialize in managing the complexities of large-scale, multi-day wedding celebrations. For events of 700 guests or more, we ensure that the quality of the cuisine and the attentiveness of the service remain as intimate as a private dinner.",
    },
    corporateGala: {
      headline: "Corporate Galas & Milestones",
      description: "Elevate your professional gatherings. We provide sophisticated, seamless dining experiences that reflect the prestige of your brand, complete with dedicated event captains to manage the flow of the evening.",
    },
    intimateGathering: {
      headline: "Intimate High-End Gatherings",
      description: "For exclusive parties and private family events, we offer hyper-tailored menus, utilizing the rarest seasonal ingredients and showcasing the peak of our culinary artistry.",
    },
  },
  menuDesign: {
    headline: "The Art of Menu Curation",
    steps: [
      { title: "Consultation", description: "Discovering your narrative, preferences, and the tone of the event." },
      { title: "Conceptualization", description: "Our chefs draft a bespoke culinary journey, balancing tradition and innovation." },
      { title: "Refinement", description: "Adjusting flavor profiles to ensure absolute perfection." },
    ],
  },
  dietaryExpertise: {
    headline: "Culinary Inclusivity",
    description: "We possess profound expertise in accommodating diverse dietary and cultural requirements without compromising on luxury. Whether crafting entirely Jain menus, executing flawless Halal preparations, or designing exquisite Vegan courses, our kitchens maintain strict separation and standards.",
  },
  tastingSession: {
    headline: "The Evening Fitting",
    description: "Our tasting sessions are an event unto themselves. We invite you into our culinary studio for 'The Evening Fitting'—a private, immersive experience where you will preview the exact presentation, flavor profiles, and service style that will define your celebration.",
  },
  venueCoordination: {
    headline: "Seamless Venue Integration",
    description: "We are the preferred partner for Patiala's elite venues. Our logistics team conducts rigorous site visits to orchestrate the backend flow, ensuring our kitchens operate invisibly and our service is unhindered by the space.",
  },
  staffing: {
    headline: "Immaculate Presentation",
    description: "The Oasis standard of service is defined by our staff. Elegantly uniformed, rigorously trained, and inherently gracious, our team provides family-style service that is anticipatory, never intrusive.",
  },
  equipment: {
    headline: "The Tablescape",
    description: "We provision high-end serving equipment, fine flatware, and elegant linens to complement the culinary presentation. Every chafing dish and serving platter is selected to enhance the aesthetic of your event.",
  },
  beverage: {
    headline: "Beverage & Mixology",
    description: "Complementing our cuisine, we offer sophisticated non-alcoholic beverage services, featuring bespoke mocktails, premium tea stations, and artisanal coffee bars crafted by our dedicated mixologists.",
  },
  comparisonTable: {
    headline: "Service Tiers",
    tiers: [
      {
        name: "The Classic Affair",
        features: ["Bespoke Menu Design", "Standard High-End Serviceware", "Professional Service Staff", "Dedicated Event Captain"],
      },
      {
        name: "The Signature Gala",
        features: ["Includes Classic Affair", "Premium Tablescape Selection", "Live Action Culinary Stations", "Dedicated Concierge"],
      },
      {
        name: "The Bespoke Journey",
        features: ["Includes Signature Gala", "Executive Chef On-Site", "Exclusive Ingredient Sourcing", "Full Event Coordination Partnership"],
      },
    ],
  },
  caseStudies: {
    headline: "Moments of Excellence",
    studies: [
      { title: "The Royal Heritage Wedding", description: "A multi-day event for 1,200 guests requiring three distinct culinary themes, executed flawlessly with seamless kitchen transitions." },
      { title: "The Private Estate Gala", description: "A hyper-customized 5-course plated dinner for 50 VIPs, showcasing molecular gastronomy alongside traditional Punjabi flavors." },
    ],
  },
  faqTeaser: {
    headline: "Have Specific Questions?",
    ctaText: "Explore Our FAQ",
  },
  brochure: {
    headline: "The Oasis Portfolio",
    description: "Download our comprehensive brochure to explore sample menus and service details.",
    ctaText: "Request Brochure",
  },
  primaryCta: {
    headline: "Begin Your Culinary Journey",
    ctaText: "Request a Proposal",
  },
};