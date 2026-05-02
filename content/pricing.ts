import { BasePageContent, CTA } from './types';

export interface PricingCategory {
  name: string;
  basePrice: string;
  description?: string;
}

export interface PricingContent extends BasePageContent {
  stitchingRates: PricingCategory[];
  fabricNote: string;
  addons: {
    name: string;
    startingPrice: string;
  }[];
  faqSnippet: { question: string; answer: string }[];
  contactCta: CTA;
}

export const pricingContent: PricingContent = {
  seo: {
    title: "Transparent Pricing & Stitching Rates | Aura Boutique",
    description: "View our clear, competitive rates for custom tailoring, embroidery, and alterations at Aura Boutique.",
  },
  hero: {
    heading: "Transparent Pricing for Custom Craftsmanship",
    subheading: "Investing in clothes that actually fit.",
  },
  stitchingRates: [
    { name: "Basic Kurti / Tunic", basePrice: "₹800", description: "Standard stitching without lining." },
    { name: "Kurti Set (with Pants/Salwar)", basePrice: "₹1,500", description: "Complete set with standard detailing." },
    { name: "Designer Blouse", basePrice: "₹1,200", description: "Padded, intricate back designs." },
    { name: "Lehenga Choli (Basic)", basePrice: "₹3,500", description: "Standard flair with lining." },
    { name: "Western Dress", basePrice: "₹2,000", description: "Custom fit A-line or shift dresses." }
  ],
  fabricNote: "Please note: The prices listed above are for stitching services only and do not include the cost of fabric. Fabric can be provided by the client or sourced by us at an additional cost.",
  addons: [
    { name: "Premium Lining", startingPrice: "+ ₹300" },
    { name: "Hand Embroidery Details", startingPrice: "+ ₹1,000" },
    { name: "Intricate Tassels/Latkans", startingPrice: "+ ₹250" }
  ],
  faqSnippet: [
    { question: "How do I pay for a custom order?", answer: "We require a 50% advance to begin stitching, with the remaining balance due before dispatch." },
    { question: "Are alterations included?", answer: "We offer one round of minor alterations free of charge within 7 days of receiving your garment." }
  ],
  contactCta: {
    label: "Request a Custom Quote",
    href: "/contact"
  }
};
