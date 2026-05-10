export interface PricingContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
  };
  philosophy: {
    heading: string;
    description: string;
  };
  tiers: {
    name: string;
    description: string;
    features: string[];
    idealFor: string;
  }[];
  addons: {
    heading: string;
    items: { name: string; description: string }[];
  };
  included: {
    heading: string;
    items: string[];
  };
  faq: {
    heading: string;
    questions: { q: string; a: string }[];
  };
  cta: {
    heading: string;
    button: string;
  };
}

export const pricingContent: PricingContent = {
  meta: {
    title: "Pricing Packages | Bawa Caterers Enterprises",
    description: "Transparent, premium pricing tiers for Royal Punjabi catering. Explore our Silver, Gold, and Platinum packages for events of all scales.",
  },
  hero: {
    headline: "Invest in Unforgettable Flavors",
  },
  philosophy: {
    heading: "The Value of Excellence",
    description: "We do not compromise on quality. Our pricing reflects the premium nature of our ingredients, the expertise of our master chefs, and our high staff-to-guest service ratio, ensuring a flawless experience."
  },
  tiers: [
    {
      name: "The Silver Feast",
      description: "An elegant spread covering all the traditional essentials, perfect for pre-wedding functions or large gatherings focused on classic flavors.",
      features: ["2 Starters", "3 Main Courses", "Standard Breads & Rice", "2 Desserts"],
      idealFor: "Events of 200-500 guests."
    },
    {
      name: "The Gold Standard",
      description: "Our most sought-after package, offering an extensive menu variety and introducing our signature live stalls.",
      features: ["4 Starters", "5 Main Courses", "2 Live Cooking Stalls", "Premium Desserts & Mocktails"],
      idealFor: "Grand weddings and major corporate galas."
    },
    {
      name: "The Royal Platinum",
      description: "The ultimate opulence. Unlimited premium live stalls, imported ingredients, and exclusive chef-curated interactive experiences.",
      features: ["Unlimited Live Stalls", "Exclusive Regional Cuisines", "Specialized Dessert Bars", "VIP Table Service"],
      idealFor: "Luxury events demanding unparalleled grandeur."
    }
  ],
  addons: {
    heading: "Enhance Your Feast",
    items: [
      { name: "Premium Mocktail Bar", description: "Expert mixologists crafting custom beverages." },
      { name: "International Cheese & Grazing Stations", description: "A sophisticated addition for high-end receptions." }
    ]
  },
  included: {
    heading: "Always Included",
    items: ["Professional uniformed service staff", "Premium chafing dishes and display setups", "Standard crockery and cutlery", "Complete setup and teardown"]
  },
  faq: {
    heading: "Pricing Inquiries",
    questions: [
      { q: "Is there a minimum guest count?", a: "Yes, our packages generally require a minimum of 100 guests, though we offer bespoke quotes for intimate gatherings." },
      { q: "What are the payment terms?", a: "We require a 30% advance booking amount, with structured payments leading up to the event date." }
    ]
  },
  cta: {
    heading: "Let us tailor a package for you.",
    button: "Get a Precise Quote"
  }
};
