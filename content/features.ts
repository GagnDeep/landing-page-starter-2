import { SEO } from "./home";

export interface Service {
  title: string;
  description: string;
  features: string[];
}

export interface FeaturesContent {
  seo: SEO;
  hero: { headline: string; subheadline: string };
  services: Service[];
  cta: { headline: string; button: string };
}

export const featuresContent: FeaturesContent = {
  seo: {
    title: "Bespoke Services | Sardaar G. Tailors",
    description: "Explore our range of bespoke services including Sherwanis, Muktsari Kurta Pajamas, and precision formal wear."
  },
  hero: {
    headline: "Bespoke Services",
    subheadline: "Garments crafted not just for the body, but for the occasion."
  },
  services: [
    {
      title: "The Bespoke Sherwani",
      description: "Our signature offering. A meticulously crafted canvas of tradition and majesty for the modern groom.",
      features: ["Custom Zardosi and threadwork", "Premium velvet and silk brocades", "Matching safas, stoles, and juttis"]
    },
    {
      title: "Muktsari Kurta Pajama",
      description: "The epitome of crisp Punjabi tailoring. Known for its structured collar, immaculate drape, and comfort.",
      features: ["Signature sharp collar design", "Hidden plackets and detailed cuffs", "Breathable linen and festive silk options"]
    },
    {
      title: "Indo-Western & Formal Suits",
      description: "Bridging the gap between heritage and contemporary global fashion with structured silhouettes.",
      features: ["Jodhpuri suits and Bandhgalas", "Three-piece formal tuxedos", "Precision lapel and shoulder construction"]
    }
  ],
  cta: {
    headline: "Begin Your Bespoke Journey",
    button: "Schedule a Consultation"
  }
};
