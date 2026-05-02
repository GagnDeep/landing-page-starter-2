import { SEO } from "./home";

export interface PricingTier {
  name: string;
  description: string;
  startingPrice: string;
  includes: string[];
}

export interface PricingContent {
  seo: SEO;
  hero: { headline: string; subheadline: string };
  philosophy: { headline: string; body: string };
  tiers: PricingTier[];
  note: string;
}

export const pricingContent: PricingContent = {
  seo: {
    title: "An Investment in Craft | Sardaar G. Tailors",
    description: "Understand the investment required for true bespoke craftsmanship and tailored luxury."
  },
  hero: {
    headline: "An Investment in Craft",
    subheadline: "Transparent pricing for uncompromising quality and dedicated artisanship."
  },
  philosophy: {
    headline: "The Value of Bespoke",
    body: "A bespoke garment is an investment in time, premium materials, and decades of honed skill. Our pricing reflects the extensive hours of handwork, multiple fittings, and the exclusive fabrics required to create a masterpiece that lasts generations."
  },
  tiers: [
    {
      name: "Muktsari Kurta Sets",
      description: "Everyday elegance and festive essentials.",
      startingPrice: "₹5,000",
      includes: ["Premium Cotton/Linen blends", "Custom measurement and fitting", "Signature collar finishing"]
    },
    {
      name: "Indo-Western & Bandhgalas",
      description: "Contemporary silhouettes for pre-wedding and formal events.",
      startingPrice: "₹15,000",
      includes: ["Structured suiting fabrics", "Custom lapel and button detailing", "Two fitting sessions"]
    },
    {
      name: "Bespoke Sherwani",
      description: "The ultimate groom's attire, customized down to the last thread.",
      startingPrice: "₹35,000",
      includes: ["Exclusive silks and velvets", "Hand-crafted Zardosi embroidery", "Complete trousseau consultation (stole, safa)"]
    }
  ],
  note: "All prices are starting estimates. Final investment depends on fabric selection, intricacy of embroidery, and timeline requirements."
};
