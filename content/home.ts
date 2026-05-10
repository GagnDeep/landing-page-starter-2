export interface SEO {
  title: string;
  description: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NoticeBar {
  message: string;
  linkText?: string;
  linkHref?: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
}

export interface HomeContent {
  seo: SEO;
  noticeBar: NoticeBar;
  hero: HeroSection;
  brandEssence: {
    headline: string;
    body: string;
  };
  servicesIntro: {
    headline: string;
    subheadline: string;
  };
  services: Array<{
    title: string;
    description: string;
    href: string;
    imageAlt: string;
  }>;
  fullServicePromise: {
    headline: string;
    body: string;
  };
  portfolioTeaser: {
    headline: string;
    cta: {
      label: string;
      href: string;
    };
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  processIntro: {
    headline: string;
    subheadline: string;
  };
  processSteps: Array<{
    title: string;
    description: string;
  }>;
  founderTeaser: {
    headline: string;
    body: string;
    cta: {
      label: string;
      href: string;
    };
  };
  partnersIntro: string;
  secondaryCta: {
    headline: string;
    subheadline: string;
    button: {
      label: string;
      href: string;
    };
  };
  newsletter: {
    headline: string;
    subheadline: string;
    placeholder: string;
    buttonLabel: string;
  };
}

export const homeContent: HomeContent = {
  seo: {
    title: "Blinking Eye Events | Premium Wedding & Event Planning in Chandigarh",
    description: "Full-service, bespoke event and wedding planning in Chandigarh. We blend professional rigor with the warmth of family celebrations to create unforgettable, seamless experiences.",
  },
  noticeBar: {
    message: "Now accepting inquiries for the upcoming winter wedding season.",
    linkText: "Inquire Now",
    linkHref: "/contact",
  },
  hero: {
    headline: "Crafting Elegance. Curating Memories.",
    subheadline: "Bespoke full-service event and wedding planning tailored for life's most precious celebrations.",
    ctaPrimary: {
      label: "Begin Your Journey",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Explore Our Portfolio",
      href: "/features",
    },
  },
  brandEssence: {
    headline: "The Art of the Seamless Celebration",
    body: "At Blinking Eye Events, we believe that true luxury lies in the unseen details. Under the guidance of Kavita, our boutique firm orchestrates every element of your celebration with an unwavering commitment to elegance and a deeply personal touch. We transform complex logistics into effortless poetry, allowing you to simply be present in your moment.",
  },
  servicesIntro: {
    headline: "Our Expertise",
    subheadline: "Comprehensive planning and design for discerning clients.",
  },
  services: [
    {
      title: "Bespoke Weddings",
      description: "From intimate ceremonies to grand multi-day cultural celebrations, we design and manage every facet of your wedding with grace and precision.",
      href: "/features#weddings",
      imageAlt: "An elegantly decorated wedding mandap adorned with fresh floral arrangements.",
    },
    {
      title: "Corporate Galas & Retreats",
      description: "Elevate your brand with meticulously planned corporate events that balance professional sophistication with memorable, immersive experiences.",
      href: "/features#corporate",
      imageAlt: "A sophisticated corporate gala setup with elegant table settings and ambient lighting.",
    },
    {
      title: "Private Milestones",
      description: "Anniversaries, milestone birthdays, and private dinners curated with the utmost discretion and an eye for the extraordinary.",
      href: "/features#private",
      imageAlt: "An intimate, candlelit dinner setup for a private milestone celebration.",
    },
  ],
  fullServicePromise: {
    headline: "The Full-Service Difference",
    body: "We are not just planners; we are your advocates, designers, and confidants. Our full-service approach means we are with you at every step—from the initial spark of an idea to the final farewell. We offer 24/7 reliability, a curated network of the finest vendors, and a dedication to absorbing all stress so you can revel in the joy of your celebration.",
  },
  portfolioTeaser: {
    headline: "Moments We've Crafted",
    cta: {
      label: "View the Journal",
      href: "/blog",
    },
  },
  testimonial: {
    quote: "Kavita and her team didn't just plan our wedding; they held our hands through the entire journey. Their attention to detail is unmatched, but it was their genuine warmth and calm presence that made our day truly magical. We felt entirely taken care of.",
    author: "Aisha & Rohan",
    role: "Wedding Clients, 2023",
  },
  processIntro: {
    headline: "How We Work",
    subheadline: "A refined methodology designed for peace of mind.",
  },
  processSteps: [
    {
      title: "Discovery & Vision",
      description: "We begin by understanding your story, your aesthetic, and the atmosphere you wish to create. This is where the foundation of your unique event is laid.",
    },
    {
      title: "Design & Curation",
      description: "Our team develops a comprehensive design proposal, sourcing the perfect venue and collaborating with our trusted network of elite vendors.",
    },
    {
      title: "Flawless Execution",
      description: "On the day of your event, we manage every logistical detail with quiet precision, ensuring a seamless flow and an unforgettable experience.",
    },
  ],
  founderTeaser: {
    headline: "Meet Kavita",
    body: "With a passion for design and a heart for family, Kavita founded Blinking Eye Events to bring a new level of bespoke service to Chandigarh. Her philosophy is simple: every event should be a masterpiece of emotion and elegance.",
    cta: {
      label: "Read Our Story",
      href: "/about",
    },
  },
  partnersIntro: "Trusted by the Finest Venues & Artisans",
  secondaryCta: {
    headline: "Ready to Plan the Extraordinary?",
    subheadline: "Let us turn your vision into a flawlessly executed reality.",
    button: {
      label: "Schedule a Consultation",
      href: "/contact",
    },
  },
  newsletter: {
    headline: "Join Our Circle",
    subheadline: "Receive curated event inspiration and studio updates.",
    placeholder: "Your Email Address",
    buttonLabel: "Subscribe",
  },
};
