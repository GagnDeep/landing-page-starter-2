import { SEO, NoticeBar } from './home';

export interface PricingModel {
  title: string;
  description: string;
  inclusions: string[];
  startingInvestment: string;
}

export interface Enhancement {
  title: string;
  description: string;
}

export interface PricingContent {
  seo: SEO;
  noticeBar: NoticeBar;
  hero: {
    headline: string;
    subheadline: string;
  };
  philosophy: {
    headline: string;
    body: string;
  };
  models: PricingModel[];
  enhancementsIntro: string;
  enhancements: Enhancement[];
  clarification: {
    headline: string;
    body: string;
  };
  faqTeaser: {
    headline: string;
    link: {
      label: string;
      href: string;
    };
  };
  secondaryCta: {
    headline: string;
    button: {
      label: string;
      href: string;
    };
  };
}

export const pricingContent: PricingContent = {
  seo: {
    title: "Investment & Engagement Models | Blinking Eye Events",
    description: "Transparent pricing and engagement models for bespoke event and wedding planning in Chandigarh. We offer full-service, partial planning, and event management.",
  },
  noticeBar: {
    message: "Now accepting inquiries for the upcoming winter wedding season.",
    linkText: "Inquire Now",
    linkHref: "/contact",
  },
  hero: {
    headline: "Your Investment",
    subheadline: "A partnership dedicated to your peace of mind and the perfection of your celebration.",
  },
  philosophy: {
    headline: "The Value of Presence",
    body: "We view our fees not merely as the cost of planning, but as an investment in your own joy. By entrusting the logistics, vendor negotiations, and creative execution to us, you are buying back your time and the emotional space to be truly present on your most important days.",
  },
  models: [
    {
      title: "Full-Service Planning & Design",
      description: "Our most comprehensive offering. We guide you from the inception of the idea through to the final guest's departure, managing every detail in between.",
      inclusions: [
        "Complete budget development and management",
        "Venue scouting, selection, and contract negotiation",
        "Bespoke event design, styling, and conceptualization",
        "Curation and management of all vendor teams",
        "Comprehensive timeline creation and logistical routing",
        "Full day-of coordination with a dedicated senior team",
      ],
      startingInvestment: "Custom Proposal Based on Scope",
    },
    {
      title: "Partial Planning & Design",
      description: "Designed for clients who have secured their venue and perhaps a few key vendors, but require professional guidance to bring the cohesive design and remaining logistics together.",
      inclusions: [
        "Review and integration of existing vendor contracts",
        "Design conceptualization and decor management",
        "Sourcing of remaining required vendors",
        "Detailed month-of timeline creation",
        "Complete day-of coordination",
      ],
      startingInvestment: "Starting at ₹1,50,000",
    },
    {
      title: "Event Management (Month-Of)",
      description: "For the highly organized client who has planned their event but needs an expert team to step in and execute the final weeks and the day itself flawlessly.",
      inclusions: [
        "Handover meetings starting 6 weeks prior to the event",
        "Review of all vendor contracts and logistical plans",
        "Creation of the master run-of-show",
        "Vendor liaison and confirmation in the final weeks",
        "On-site management and execution on the event day",
      ],
      startingInvestment: "Starting at ₹75,000",
    },
  ],
  enhancementsIntro: "A La Carte Enhancements",
  enhancements: [
    {
      title: "RSVP & Guest Concierge",
      description: "Complete management of guest lists, invitations, RSVPs, dietary requirements, and accommodation block tracking.",
    },
    {
      title: "Multi-Day Event Support",
      description: "Extended coordination services for welcome dinners, mehendi ceremonies, or post-wedding brunches.",
    },
  ],
  clarification: {
    headline: "Transparency in Pricing",
    body: "Please note that our professional fees cover our time, expertise, and the intellectual property of our designs. The costs associated with the venue, catering, decor elements, and external vendors are separate and will be managed within your approved budget.",
  },
  faqTeaser: {
    headline: "Have questions about our models?",
    link: {
      label: "Read our FAQ",
      href: "/faq",
    },
  },
  secondaryCta: {
    headline: "Let's Build Your Custom Proposal",
    button: {
      label: "Request a Consultation",
      href: "/contact",
    },
  },
};
