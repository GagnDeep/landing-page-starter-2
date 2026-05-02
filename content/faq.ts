import { SEO } from "./home";

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
  hero: { headline: string; subheadline: string };
  categories: FAQCategory[];
  cta: { text: string; button: string };
}

export const faqContent: FAQContent = {
  seo: {
    title: "Frequently Asked Questions | Sardaar G. Tailors",
    description: "Answers to common questions regarding our bespoke process, fabrics, and timelines."
  },
  hero: {
    headline: "Frequently Asked Questions",
    subheadline: "Clarity on our process, from the first measurement to the final fitting."
  },
  categories: [
    {
      title: "The Bespoke Process",
      items: [
        { question: "How long does the bespoke process take?", answer: "A standard kurta-pajama requires 1-2 weeks. Intricate sherwanis and wedding trousseaus require 4-6 weeks to ensure perfection across multiple fittings." },
        { question: "How many fittings will I need?", answer: "Typically, we require an initial measurement session followed by a 'baste' fitting (the skeleton of the garment), and a final fitting before delivery." }
      ]
    },
    {
      title: "Fabrics & Care",
      items: [
        { question: "Can I provide my own fabric?", answer: "While we highly recommend selecting from our curated, quality-tested fabric library, we do accept client-provided fabrics subject to an inspection by our master tailor." },
        { question: "How should I care for my bespoke garments?", answer: "All silk, velvet, and embroidered garments must be strictly dry-cleaned. Store them in the breathable garment bags provided." }
      ]
    },
    {
      title: "Orders & Shipping",
      items: [
        { question: "Do you cater to international clients?", answer: "Yes, we offer virtual consultations and precise measurement guides for our international clients, with secure global shipping." },
        { question: "What is your deposit policy?", answer: "We require a 50% deposit to commence fabric cutting and crafting, with the balance due upon final delivery." }
      ]
    }
  ],
  cta: {
    text: "Still have questions regarding your bespoke needs?",
    button: "Contact the Atelier"
  }
};
