import { BasePageContent } from './types';

export interface TermsContent extends BasePageContent {
  header: {
    title: string;
    lastUpdated: string;
  };
  sections: { title: string; content: string }[];
}

export const termsContent: TermsContent = {
  seo: {
    title: "Terms & Conditions | Kohinoor Trends",
    description: "Read the terms and conditions regarding purchases, custom orders, and use of the Kohinoor Trends website.",
    keywords: ["terms and conditions", "purchase policy", "Kohinoor Trends legal"],
  },
  header: {
    title: "Terms & Conditions",
    lastUpdated: "Last Updated: October 2023",
  },
  sections: [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the Kohinoor Trends website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services."
    },
    {
      title: "2. Custom Orders and Alterations",
      content: "All custom bridal orders and bespoke tailoring require a non-refundable deposit before work commences. Once fabric has been cut or custom embroidery initiated, the order cannot be canceled. We conduct multiple fittings to ensure satisfaction."
    },
    {
      title: "3. Returns and Exchanges",
      content: "Ready-to-wear items may be exchanged within 7 days of purchase, provided they are unworn, unwashed, and retain all original tags. Custom, bespoke, and altered items are strictly final sale."
    },
    {
      title: "4. Intellectual Property",
      content: "All imagery, logos, and designs featured on this website are the exclusive property of Kohinoor Trends. Unauthorized use or reproduction is strictly prohibited."
    }
  ]
};
