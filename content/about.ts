import { BasePageContent, CTA } from './types';

export interface AboutContent extends BasePageContent {
  story: string;
  designer: {
    name: string;
    bio: string;
  };
  craftsmanship: {
    heading: string;
    description: string;
  };
  values: {
    title: string;
    description: string;
  }[];
  galleryHeading: string;
  bottomCta: CTA;
}

export const aboutContent: AboutContent = {
  seo: {
    title: "About Aura Boutique | Our Story & Craftsmanship",
    description: "Learn about Aura Boutique's journey, our commitment to premium fashion, and meet our founder, Deepika.",
  },
  hero: {
    heading: "The Aura Story",
    subheading: "Redefining elegance, one stitch at a time.",
  },
  story: "What started as a small passion project in Tripuri, Patiala, has blossomed into a nationwide destination for premium women's fashion. Aura Boutique is built on the belief that clothing should be an extension of your personality—flawlessly fitted, beautifully designed, and ethically crafted.",
  designer: {
    name: "Deepika",
    bio: "With a keen eye for contemporary trends and a deep respect for traditional weaving and stitching techniques, Deepika founded Aura Boutique to bridge the gap between high-fashion aesthetics and accessible, custom-fit clothing."
  },
  craftsmanship: {
    heading: "The Art of the Stitch",
    description: "Every piece that leaves our studio undergoes rigorous quality checks. From selecting the finest silks, cottons, and georgettes to the final hand-finished hem, our Patiala-based artisans pour their heritage into your garments."
  },
  values: [
    { title: "Uncompromising Quality", description: "We use only premium materials that look luxurious and feel exceptional." },
    { title: "The Perfect Fit", description: "Our bespoke tailoring service ensures your clothes celebrate your unique shape." },
    { title: "Trend-Forward Tradition", description: "We seamlessly blend modern silhouettes with classic detailing." }
  ],
  galleryHeading: "Inside the Studio",
  bottomCta: {
    label: "Book a Custom Fitting",
    href: "/contact"
  }
};
