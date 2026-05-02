import { BasePageContent, CallToAction } from './types';

export interface FAQContent extends BasePageContent {
  header: {
    title: string;
    subtitle: string;
  };
  categories: {
    title: string;
    items: { question: string; answer: string }[];
  }[];
  contactTeaser: {
    title: string;
    cta: CallToAction;
  };
}

export const faqContent: FAQContent = {
  seo: {
    title: "Frequently Asked Questions | Kohinoor Trends",
    description: "Find answers regarding orders, bespoke sizing, shipping, and bridal consultations at Kohinoor Trends.",
    keywords: ["Kohinoor Trends FAQ", "boutique order process", "custom sizing questions", "shipping policy"],
  },
  header: {
    title: "How Can We Assist You?",
    subtitle: "Find answers to our most common inquiries regarding our garments and services.",
  },
  categories: [
    {
      title: "Orders & Shipping",
      items: [
        { question: "Do you ship internationally?", answer: "Yes, we provide secure international shipping for our global clientele. Shipping rates and times vary by destination." },
        { question: "How long does a custom order take?", answer: "Custom bridal orders typically require 6 to 8 weeks, allowing our artisans ample time to perfect the hand-embroidery and fit." }
      ]
    },
    {
      title: "Sizing & Alterations",
      items: [
        { question: "Do you offer in-house alterations?", answer: "Absolutely. Our master tailors are available on-site to ensure your garment fits flawlessly." },
        { question: "Can I customize a ready-to-wear piece?", answer: "Depending on the garment's construction, we can often modify sleeves, necklines, and overall fit. Please consult with our stylists." }
      ]
    },
    {
      title: "Bridal Appointments",
      items: [
        { question: "Do I need an appointment to view bridal wear?", answer: "While walk-ins are always welcome, we highly recommend booking an appointment so we can provide you with dedicated, uninterrupted styling assistance." },
        { question: "Who should I bring to my bridal fitting?", answer: "We suggest bringing a small, trusted group whose opinions you value most, to keep the experience intimate and focused." }
      ]
    }
  ],
  contactTeaser: {
    title: "Still Need Help?",
    cta: { label: "Contact Us", href: "/contact" },
  },
};
