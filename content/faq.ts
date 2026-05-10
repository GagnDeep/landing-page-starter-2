import { SEO, CTA } from './types';

export interface FAQContent {
  seo: SEO;
  hero: {
    headline: string;
  };
  categories: Array<{
    name: string;
    questions: Array<{ question: string; answer: string }>;
  }>;
  ctaSection: {
    headline: string;
    body: string;
    cta: CTA;
  };
}

export const faqContent: FAQContent = {
  seo: {
    title: "FAQ | Guide Events",
    description: "Find clarity on the destination wedding planning process, financials, and logistics with Guide Events.",
  },
  hero: {
    headline: "Questions & Clarity",
  },
  categories: [
    {
      name: "General Planning",
      questions: [
        {
          question: "How far in advance should we secure your services?",
          answer: "For destination weddings, we highly recommend booking our services 9 to 12 months in advance. This ensures prime venue availability and allows ample time for meticulous curation and design.",
        },
        {
          question: "Do you plan weddings outside of Chandigarh?",
          answer: "Absolutely. While our headquarters are in Chandigarh, we are premier destination wedding planners. We orchestrate magnificent celebrations across India—including Rajasthan, Goa, and Kerala—and internationally.",
        },
      ],
    },
    {
      name: "NRI & Remote Planning",
      questions: [
        {
          question: "We live abroad. How do you manage the planning process across time zones?",
          answer: "We specialize in NRI coordination. We utilize a dedicated client portal and schedule consultations tailored to your time zone. From virtual venue walkthroughs to detailed 3D decor renderings, we ensure you have complete visibility and control, regardless of distance.",
        },
        {
          question: "How are vendor payments handled internationally?",
          answer: "We offer transparent financial structuring. You can choose to pay vendors directly based on our negotiated contracts, or we can consolidate payments through secure international wire transfers for your convenience.",
        },
      ],
    },
    {
      name: "Decor & Catering",
      questions: [
        {
          question: "Do you provide decor and catering in-house?",
          answer: "We have an esteemed heritage with Bawa Caterers Enterprises, allowing us to offer exceptional, authentic culinary experiences. For decor, we have an elite in-house design team and partner with the finest fabricators to bring our bespoke visions to life.",
        },
        {
          question: "Can we arrange tastings and decor mockups before the event?",
          answer: "Yes, comprehensive menu tastings and detailed decor mockups are a standard part of our Full Orchestration service, ensuring absolute perfection before the celebration begins.",
        },
      ],
    },
  ],
  ctaSection: {
    headline: "Didn't Find Your Answer?",
    body: "We invite you to reach out directly. Our planners are here to provide the clarity you seek.",
    cta: {
      label: "Book a Discovery Call",
      href: "/contact",
    },
  },
};
