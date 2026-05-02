import { BasePageContent } from './types';

export interface TermsContent extends BasePageContent {
  lastUpdated: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

export const termsContent: TermsContent = {
  seo: {
    title: "Terms & Conditions | Aura Boutique",
    description: "Read the Terms & Conditions for shopping and custom stitching services at Aura Boutique.",
  },
  hero: {
    heading: "Terms & Conditions",
  },
  lastUpdated: "April 20, 2024",
  sections: [
    {
      heading: "1. General Overview",
      content: "Welcome to Aura Boutique. These terms and conditions outline the rules and regulations for the use of our website and services, located in Tripuri, Patiala. By accessing this website, we assume you accept these terms and conditions."
    },
    {
      heading: "2. Custom Stitching Services",
      content: "Measurements provided online are the responsibility of the customer. Aura Boutique is not liable for fit issues arising from incorrect measurements submitted via our forms. We require a 50% advance payment before commencing any custom stitching work."
    },
    {
      heading: "3. Shipping & Delivery",
      content: "While we strive to meet all delivery timelines, especially our 4-Day Express delivery, unforeseen circumstances with courier partners may cause delays. Aura Boutique is not liable for delays beyond our control."
    },
    {
      heading: "4. Returns & Alterations",
      content: "Custom-made garments cannot be returned or exchanged. We offer one complimentary round of minor alterations within 7 days of delivery. Ready-to-wear items may be returned within 7 days if unworn and with original tags."
    },
    {
      heading: "5. Intellectual Property",
      content: "Unless otherwise stated, Aura Boutique owns the intellectual property rights for all material on this website. All intellectual property rights are reserved."
    }
  ]
};
