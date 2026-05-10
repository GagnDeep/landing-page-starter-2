export interface SEO {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureSpotlight {
  headline: string;
  description: string;
  ctaText: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  eventContext: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface EventType {
  title: string;
  description: string;
}

export interface HomeContent {
  seo: SEO;
  headerLinks: NavLink[];
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  introduction: {
    headline: string;
    paragraph: string;
  };
  trustMetrics: Metric[];
  spotlightMenu: FeatureSpotlight;
  spotlightService: FeatureSpotlight;
  spotlightVenues: FeatureSpotlight;
  testimonials: Testimonial[];
  signatureDish: {
    headline: string;
    description: string;
  };
  theTeam: {
    headline: string;
    description: string;
    ctaText: string;
  };
  experienceMap: {
    headline: string;
    description: string;
  };
  galleryTeaser: {
    headline: string;
    ctaText: string;
  };
  process: {
    headline: string;
    steps: Step[];
  };
  eventTypes: EventType[];
  faqTeaser: {
    headline: string;
    ctaText: string;
  };
  newsletter: {
    headline: string;
    description: string;
    placeholder: string;
    ctaText: string;
  };
  primaryCta: {
    headline: string;
    description: string;
    ctaText: string;
  };
  socialTeaser: {
    headline: string;
    handle: string;
  };
  footerLinks: NavLink[];
}

export const homeContent: HomeContent = {
  seo: {
    title: "Oasis Caterers | Premium Wedding & Gala Catering in Patiala",
    description: "Experience the pinnacle of culinary elegance with Oasis Caterers. Bespoke menus, immaculate family-style service, and a promise-exceeding commitment to your grandest celebrations.",
  },
  headerLinks: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/features" },
    { label: "The Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    headline: "A Legacy of Impeccable Taste.",
    subheadline: "Curating bespoke culinary experiences for life's most momentous occasions.",
    ctaPrimary: "Begin Your Journey",
    ctaSecondary: "View The Menu",
  },
  introduction: {
    headline: "Exceeding the Promise.",
    paragraph: "For over two decades, Oasis Caterers has set the standard for high-end event catering in Patiala. We believe that true luxury is not just in the ingredients we select, but in the meticulous, family-style service that makes every guest feel exclusively attended to. From grand weddings of 700 to intimate evening galas, our craftsmanship elevates every moment.",
  },
  trustMetrics: [
    { value: "20+", label: "Years of Heritage" },
    { value: "15,000+", label: "Guests Served Annually" },
    { value: "100%", label: "Bespoke Menus" },
  ],
  spotlightMenu: {
    headline: "The Culinary Canvas",
    description: "Our master chefs design hyper-tailored menus that blend authentic heritage with contemporary elegance. Every dish is a testament to flavor, presentation, and seasonal perfection.",
    ctaText: "Explore Culinary Arts",
  },
  spotlightService: {
    headline: "Immaculate Service",
    description: "We bring the warmth of a family-run ethos to the precision of a five-star dining room. Our highly trained staff anticipates needs before they are voiced, ensuring a seamless flow to your evening.",
    ctaText: "Discover Our Standard",
  },
  spotlightVenues: {
    headline: "Iconic Venues",
    description: "We are the trusted culinary partner for Patiala's most prestigious locations, transforming spaces into extraordinary dining environments.",
    ctaText: "View Our Venues",
  },
  testimonials: [
    {
      quote: "Oasis Caterers didn't just serve food; they orchestrated an unforgettable dining experience. The attention to detail was nothing short of perfection.",
      author: "The Sharma Family",
      eventContext: "Grand Wedding Gala, 2023",
    },
    {
      quote: "Our corporate guests were completely blown away by the elegance and fluidity of the service. Truly the highest standard in the region.",
      author: "Rajiv M.",
      eventContext: "Annual Corporate Retreat",
    },
  ],
  signatureDish: {
    headline: "The Art of the Plating",
    description: "A showcase of our commitment to visual and culinary excellence.",
  },
  theTeam: {
    headline: "Meet the Artisans",
    description: "Led by a family of culinary visionaries, our executive chefs and service directors bring decades of high-end hospitality experience to your table.",
    ctaText: "Read Our Story",
  },
  experienceMap: {
    headline: "The Oasis Journey",
    description: "From the initial consultation to the final toast, discover how we meticulously plan your event.",
  },
  galleryTeaser: {
    headline: "Moments of Grandeur",
    ctaText: "View Full Gallery",
  },
  process: {
    headline: "How We Curate",
    steps: [
      { title: "The Consultation", description: "Understanding your vision, scale, and palate." },
      { title: "The Evening Fitting", description: "A private tasting experience to refine the bespoke menu." },
      { title: "The Execution", description: "Flawless delivery by our expert culinary and service teams." },
    ],
  },
  eventTypes: [
    { title: "Grand Weddings", description: "Opulent, multi-day culinary celebrations." },
    { title: "Corporate Galas", description: "Sophisticated dining for professional milestones." },
    { title: "Intimate Gatherings", description: "Exclusive, highly curated private dinners." },
  ],
  faqTeaser: {
    headline: "Common Inquiries",
    ctaText: "Read All FAQs",
  },
  newsletter: {
    headline: "Join the Tastemakers",
    description: "Subscribe to our journal for seasonal insights, event inspiration, and culinary artistry.",
    placeholder: "Enter your email address",
    ctaText: "Subscribe",
  },
  primaryCta: {
    headline: "Ready to Plan Your Event?",
    description: "Connect with our concierge to begin discussing your upcoming celebration.",
    ctaText: "Schedule a Consultation",
  },
  socialTeaser: {
    headline: "Follow the Evening",
    handle: "@OasisCaterers",
  },
  footerLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Careers", href: "/careers" },
  ],
};