import { SEO, NoticeBar } from './home';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export interface FAQContent {
  seo: SEO;
  noticeBar: NoticeBar;
  hero: {
    headline: string;
    subheadline: string;
  };
  searchPlaceholder: string;
  categories: FAQCategory[];
  supportBox: {
    headline: string;
    description: string;
    contactInfo: string;
  };
  secondaryCta: {
    headline: string;
    button: {
      label: string;
      href: string;
    };
  };
}

export const faqContent: FAQContent = {
  seo: {
    title: "Frequently Asked Questions | Blinking Eye Events",
    description: "Find answers to common questions about our event planning process, pricing, and services.",
  },
  noticeBar: {
    message: "Now accepting inquiries for the upcoming winter wedding season.",
    linkText: "Inquire Now",
    linkHref: "/contact",
  },
  hero: {
    headline: "Questions & Clarity",
    subheadline: "Everything you need to know about partnering with Blinking Eye Events.",
  },
  searchPlaceholder: "Search for answers...",
  categories: [
    {
      title: "General Inquiries",
      items: [
        {
          question: "What areas do you serve?",
          answer: "We are based in Chandigarh and primarily serve the Punjab region, including Mohali, Panchkula, and Ludhiana. However, we regularly manage destination events across India and internationally upon request.",
        },
        {
          question: "How far in advance should we book your services?",
          answer: "For full-service wedding planning, we recommend reaching out 9 to 12 months in advance. For corporate events or smaller private celebrations, 3 to 6 months is typically sufficient. However, we sometimes accommodate shorter timelines depending on our availability.",
        },
        {
          question: "Do you handle destination events?",
          answer: "Yes, we have extensive experience managing the complex logistics of destination events. We handle everything from travel coordination and accommodation blocks to local vendor sourcing and legal requirements in the destination city.",
        },
      ],
    },
    {
      title: "Pricing & Contracts",
      items: [
        {
          question: "How are payments structured?",
          answer: "Our standard payment structure involves an initial retainer to secure your date and commence services, followed by scheduled milestone payments leading up to the event. The final balance is due prior to the event day. We will provide a clear, customized payment schedule with your proposal.",
        },
        {
          question: "Are vendor costs included in your fee?",
          answer: "No. Our planning and design fees cover our professional time, expertise, and management services. All external vendor costs (venue, catering, decor rentals, photography, etc.) are billed separately. We negotiate these contracts on your behalf and ensure they align with your approved budget.",
        },
        {
          question: "What is your cancellation policy?",
          answer: "Our cancellation policy is detailed in our standard contract. Generally, the initial retainer is non-refundable as it secures our time and prevents us from booking other events on your date. Subsequent payments depend on the timeline of the cancellation relative to the event date.",
        },
      ],
    },
    {
      title: "The Planning Process",
      items: [
        {
          question: "How involved do I need to be in the planning?",
          answer: "As much or as little as you prefer. Our full-service model is designed to handle all the heavy lifting, presenting you with curated, pre-vetted options to choose from. You make the fun decisions; we handle the logistics and execution.",
        },
        {
          question: "Do you require us to use specific vendors?",
          answer: "While we have a carefully curated network of preferred vendors whose quality and reliability we trust implicitly, we are entirely flexible. We are happy to review and collaborate with vendors you have already selected or specifically wish to hire, provided they meet our professional standards.",
        },
        {
          question: "How do we communicate during the planning process?",
          answer: "We establish a clear communication rhythm from the start. This typically includes a dedicated client portal for document sharing and updates, scheduled monthly or bi-weekly check-in calls, and priority email support for ongoing questions.",
        },
      ],
    },
  ],
  supportBox: {
    headline: "Still Have Questions?",
    description: "We're here to provide the clarity you need. Reach out to our team directly.",
    contactInfo: "hello@blinkingeyeevents.com | +91 98765 43210",
  },
  secondaryCta: {
    headline: "Ready to Begin?",
    button: {
      label: "Schedule a Call",
      href: "/contact",
    },
  },
};
