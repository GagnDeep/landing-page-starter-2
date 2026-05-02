import { BasePageContent } from './types';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  categoryName: string;
  questions: FAQItem[];
}

export interface FAQContent extends BasePageContent {
  searchPlaceholder: string;
  categories: FAQCategory[];
  supportCTA: {
    heading: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const faqContent: FAQContent = {
  seo: {
    title: "Frequently Asked Questions | Aura Boutique Help",
    description: "Find answers to common questions regarding custom stitching, shipping, returns, and placing orders at Aura Boutique.",
  },
  hero: {
    heading: "How Can We Help You?",
    subheading: "Everything you need to know about shopping and tailoring with Aura.",
  },
  searchPlaceholder: "Search for answers...",
  categories: [
    {
      categoryName: "Custom Stitching",
      questions: [
        { question: "How do I submit my measurements?", answer: "Once you select a custom stitching option, you will be prompted to fill out our detailed online measurement form. We also offer video consultation for guided measuring." },
        { question: "Can I send my own fabric?", answer: "Yes! You can courier your fabric to our Patiala studio. Please contact us first so we can advise on the required yardage." },
        { question: "How long does custom stitching take?", answer: "Standard custom orders take 10-14 business days. Expedited 4-day processing is available for an additional fee." }
      ]
    },
    {
      categoryName: "Shipping & Delivery",
      questions: [
        { question: "Do you ship across India?", answer: "Yes, we offer pan-India shipping. We use reliable courier partners to ensure safe and timely delivery." },
        { question: "What is the 4-Day Express Delivery?", answer: "For select ready-to-wear items and expedited custom orders, we guarantee dispatch and delivery within 4 working days to major metro areas." }
      ]
    },
    {
      categoryName: "Returns & Alterations",
      questions: [
        { question: "Can I return a custom-stitched item?", answer: "Because custom items are made specifically to your measurements, we do not accept returns. However, we offer one free round of minor alterations if the fit is not perfect." },
        { question: "What is the return policy for ready-to-wear?", answer: "Ready-to-wear items can be returned or exchanged within 7 days of delivery, provided they are unworn and tags are attached." }
      ]
    }
  ],
  supportCTA: {
    heading: "Still have questions?",
    description: "Our customer care team is here to help you with your order.",
    ctaLabel: "Contact Support",
    ctaHref: "/contact"
  }
};
