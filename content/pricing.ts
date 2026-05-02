import { BasePageContent } from './types';

export interface PricingContent extends BasePageContent {
  header: {
    title: string;
    subtitle: string;
  };
  readyToWear: {
    title: string;
    description: string;
  };
  bridalCouture: {
    title: string;
    description: string;
  };
  bespokeServices: {
    title: string;
    description: string;
  };
  consultation: {
    title: string;
    description: string;
  };
}

export const pricingContent: PricingContent = {
  seo: {
    title: "Investment & Pricing | Kohinoor Trends",
    description: "Understand the investment behind our heritage garments. Transparent pricing for ready-to-wear, bridal couture, and bespoke services at Kohinoor Trends.",
    keywords: ["bridal lehenga price Chandigarh", "custom boutique pricing", "designer suits cost", "Kohinoor Trends prices"],
  },
  header: {
    title: "Investment in Elegance",
    subtitle: "Transparent insights into our collections and custom services.",
  },
  readyToWear: {
    title: "Ready-to-Wear Ranges",
    description: "Our ready-to-wear collections encompass everything from elegant daily cotton suits to festive semi-formals. Pricing reflects the quality of fabric and intricacy of design, offering accessible luxury for every occasion.",
  },
  bridalCouture: {
    title: "Bridal Couture Tiers",
    description: "Bridal ensembles are profound investments. Our lehengas and gowns are tiered based on the complexity of hand-embroidery, fabric rarity, and custom design requirements.",
  },
  bespokeServices: {
    title: "Bespoke & Alteration Services",
    description: "Creating a garment from scratch or refining an existing piece requires the expertise of our master tailors. Costs are assessed individually based on the scope of the tailoring required.",
  },
  consultation: {
    title: "Styling Consultations",
    description: "We offer complimentary initial consultations to discuss your bridal or festive vision. Dedicated, in-depth styling sessions may carry a nominal fee which is adjustable against your final purchase.",
  },
};
