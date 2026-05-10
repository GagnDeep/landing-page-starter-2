export interface SEO {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export interface Step {
  title: string;
  description: string;
}

export interface FAQContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  searchPlaceholder: string;
  categoriesNavigation: string[];
  sections: {
    menuAndTasting: FAQCategory;
    serviceAndStaffing: FAQCategory;
    logisticsAndVenues: FAQCategory;
    pricingAndContracts: FAQCategory;
    dietaryAndAllergies: FAQCategory;
  };
  highlightedQuestion: {
    question: string;
    answer: string;
  };
  tastingProcess: {
    headline: string;
    steps: Step[];
  };
  eventDayNarrative: {
    headline: string;
    description: string;
  };
  partnerVendors: {
    headline: string;
    description: string;
  };
  sustainability: {
    headline: string;
    description: string;
  };
  emergencyProtocols: {
    headline: string;
    description: string;
  };
  support: {
    headline: string;
    email: string;
    phone: string;
    hours: string;
  };
  primaryCta: {
    headline: string;
    ctaText: string;
  };
}

export const faqContent: FAQContent = {
  seo: {
    title: "Inquiries & FAQ | Oasis Caterers",
    description: "Answers to common inquiries regarding our bespoke catering services, logistics, and planning process.",
  },
  hero: {
    headline: "Inquiries",
    subheadline: "Guiding your event planning journey with clarity and expertise.",
  },
  searchPlaceholder: "Search for answers...",
  categoriesNavigation: [
    "The Menu & Tasting",
    "Service & Staffing",
    "Logistics & Venues",
    "Pricing & Contracts",
    "Dietary & Allergies",
  ],
  sections: {
    menuAndTasting: {
      title: "The Menu & Tasting",
      items: [
        {
          question: "Do you offer pre-set menus or packages?",
          answer: "We do not offer rigid pre-set menus. While we have a portfolio of signature dishes, every event menu is bespoke, conceptualized during your consultation to reflect your specific palate and vision.",
        },
        {
          question: "How does the tasting process work?",
          answer: "We host 'The Evening Fitting', a private tasting experience at our studio. You will sample the proposed menu presented exactly as it will be on the day of your event, allowing for precise refinement.",
        },
        {
          question: "When should we schedule our tasting?",
          answer: "We recommend scheduling your tasting 3 to 4 months prior to your event date, ensuring ample time for adjustments and finalizing the logistical requirements.",
        },
      ],
    },
    serviceAndStaffing: {
      title: "Service & Staffing",
      items: [
        {
          question: "What is your staff-to-guest ratio?",
          answer: "Our standard ratio for grand events is 1 waitstaff per 20 guests. For our Signature Gala and Bespoke Journey tiers, we elevate this to 1 per 12, or even 1 per 5 for white-glove service.",
        },
        {
          question: "Are your staff directly employed or outsourced?",
          answer: "All our event captains, chefs, and core service staff are trained directly by the Oasis Academy to ensure our rigorous standard of hospitality is consistently met.",
        },
        {
          question: "Do you provide bartenders and mixologists?",
          answer: "Yes, we provide dedicated mixologists specializing in premium non-alcoholic beverages, craft mocktails, and artisanal coffee/tea stations.",
        },
      ],
    },
    logisticsAndVenues: {
      title: "Logistics & Venues",
      items: [
        {
          question: "Do you travel outside of Patiala?",
          answer: "Yes, we frequently cater destination events across Punjab and beyond. Out-of-region events require additional logistical planning and surcharges for mobile kitchen infrastructure and staff accommodation.",
        },
        {
          question: "What infrastructure do you require from the venue?",
          answer: "We conduct a thorough site visit prior to the event. Depending on the venue, we may utilize their existing kitchens or build our own fully equipped mobile staging area.",
        },
      ],
    },
    pricingAndContracts: {
      title: "Pricing & Contracts",
      items: [
        {
          question: "What is the deposit required to secure a date?",
          answer: "A 25% deposit of the estimated total is required upon signing the contract to secure your date.",
        },
        {
          question: "When is the final guest count due?",
          answer: "The final guaranteed guest count is required 14 days prior to your event. This allows us to finalize our sourcing of premium ingredients.",
        },
      ],
    },
    dietaryAndAllergies: {
      title: "Dietary & Allergies",
      items: [
        {
          question: "Can you accommodate severe allergies?",
          answer: "Yes. Our kitchens are equipped to handle severe allergies with strict cross-contamination protocols. Please detail all allergies during the consultation.",
        },
        {
          question: "Do you offer specialized cultural menus (e.g., fully Jain)?",
          answer: "Absolutely. We have extensive experience in preparing fully Jain, Halal, or Vegan menus, ensuring strict adherence to all cultural and dietary laws.",
        },
      ],
    },
  },
  highlightedQuestion: {
    question: "Can you cater events for over 1,000 guests while maintaining high-end quality?",
    answer: "This is the hallmark of Oasis Caterers. We have engineered our kitchen logistics and staffing models specifically to execute multi-course, fine-dining experiences for large-scale events without sacrificing temperature, presentation, or flavor.",
  },
  tastingProcess: {
    headline: "The Evening Fitting: Step-by-Step",
    steps: [
      { title: "Initial Concept", description: "Discussing flavor profiles and event tone." },
      { title: "The Studio Visit", description: "Experiencing the proposed menu in a private setting." },
      { title: "Refinement", description: "Tweaking spices, presentation, and final selections." },
    ],
  },
  eventDayNarrative: {
    headline: "On the Day of the Event",
    description: "Our logistics team arrives hours before the first guest. The mobile kitchen is established, the tablescape is precisely measured, and the staff undergoes a final briefing. Once the event begins, our event captain acts as the invisible conductor, ensuring a flawless rhythm from the first appetizer to the final departure.",
  },
  partnerVendors: {
    headline: "Collaborating with Decorators & Planners",
    description: "We view event planners and decorators as vital partners. We coordinate directly with them regarding floor plans, timeline integration, and aesthetic cohesion to ensure the dining experience complements the overall design.",
  },
  sustainability: {
    headline: "Our Commitment to Sustainability",
    description: "We partner with local charities to manage excess food safely and ethically. We also prioritize biodegradable service items for casual stations and source our ingredients from responsible local farmers.",
  },
  emergencyProtocols: {
    headline: "Contingency Planning",
    description: "From backup power generators for our mobile kitchens to reserve staff on standby, we plan for the unexpected so that your event remains completely insulated from logistical disruptions.",
  },
  support: {
    headline: "Still Have Questions?",
    email: "Concierge@oasiscaterers.com",
    phone: "+91 98765 43210",
    hours: "Consultations available Mon-Sat, 10:00 AM - 7:00 PM",
  },
  primaryCta: {
    headline: "Ready to Discuss the Details?",
    ctaText: "Submit an Inquiry",
  },
};