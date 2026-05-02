import { BasePageContent } from './types';

export interface FeaturesContent extends BasePageContent {
  header: {
    title: string;
    subtitle: string;
  };
  fabricPurity: {
    title: string;
    description: string;
  };
  customTailoring: {
    title: string;
    description: string;
  };
  embroidery: {
    title: string;
    description: string;
  };
  trousseau: {
    title: string;
    description: string;
  };
}

export const featuresContent: FeaturesContent = {
  seo: {
    title: "Collections & Craftsmanship | Kohinoor Trends",
    description: "Explore the distinctive features of Kohinoor Trends: pure fabrics, bespoke tailoring, intricate hand-embroidery, and premium bridal trousseau services.",
    keywords: ["custom tailoring Chandigarh", "Zardosi embroidery", "bridal trousseau", "pure silk suits"],
  },
  header: {
    title: "Collections & Craftsmanship",
    subtitle: "The hallmarks of a Kohinoor Trends garment.",
  },
  fabricPurity: {
    title: "Fabric Purity",
    description: "From the softest daily wear cottons to the most opulent Banarasi silks, we guarantee the authenticity and purity of every weave we offer.",
  },
  customTailoring: {
    title: "Bespoke Tailoring",
    description: "Our master tailors ensure a flawless fit. We offer comprehensive alteration and custom tailoring services to ensure your garment drapes perfectly.",
  },
  embroidery: {
    title: "Masterful Embroidery",
    description: "Our formal and bridal collections feature exquisite hand-embroidery, including intricate Zardosi and delicate thread work, executed by skilled artisans.",
  },
  trousseau: {
    title: "Bridal Trousseau Packaging",
    description: "We offer premium trousseau packing services, ensuring that your bridal collection is presented with the utmost elegance and care for your new beginnings.",
  },
};
