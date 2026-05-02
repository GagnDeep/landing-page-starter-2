import { SEO } from "./home";

export interface TermsContent {
  seo: SEO;
  hero: { headline: string; lastUpdated: string };
  sections: { title: string; content: string }[];
}

export const termsContent: TermsContent = {
  seo: {
    title: "Terms & Conditions | Sardaar G. Tailors",
    description: "Terms and conditions of service for Sardaar G. Tailors."
  },
  hero: {
    headline: "Terms & Conditions",
    lastUpdated: "Last Updated: October 2023"
  },
  sections: [
    {
      title: "1. Bespoke Agreements",
      content: "By commissioning a bespoke garment, you agree to the timeline and measurement procedures outlined during your initial consultation. Variations in handmade garments are a hallmark of bespoke tailoring, not defects."
    },
    {
      title: "2. Deposits & Payments",
      content: "A non-refundable 50% deposit is required before any fabric is cut. The remaining balance must be cleared prior to the final handover of the garments."
    },
    {
      title: "3. Fittings & Alterations",
      content: "We provide up to two fitting sessions included in the bespoke price. Weight fluctuations or significant body changes after the initial measurement may incur additional alteration fees."
    },
    {
      title: "4. Refunds",
      content: "Due to the highly customized nature of bespoke clothing, we do not offer refunds once the fabric has been cut. We are committed to working with you to adjust the garment to your satisfaction."
    }
  ]
};
