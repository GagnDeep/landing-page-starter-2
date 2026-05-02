import { BasePageContent } from './types';

export interface AboutContent extends BasePageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  ourStory: {
    title: string;
    paragraphs: string[];
  };
  founders: {
    title: string;
    description: string;
  };
  philosophy: {
    title: string;
    values: { heading: string; text: string }[];
  };
  generationsServed: {
    title: string;
    description: string;
  };
}

export const aboutContent: AboutContent = {
  seo: {
    title: "About Us | Kohinoor Trends Chandigarh",
    description: "Learn about the heritage of Kohinoor Trends, Chandigarh's premier boutique for ethnic wear, grounded in tradition and trusted since 1998.",
    keywords: ["about Kohinoor Trends", "Chandigarh boutique history", "heritage fashion", "ethnic wear founders"],
  },
  hero: {
    title: "Our Heritage",
    subtitle: "A legacy of elegance, crafted over decades.",
  },
  ourStory: {
    title: "The Kohinoor Story",
    paragraphs: [
      "Founded in 1998 in the heart of Chandigarh, Kohinoor Trends began with a simple yet profound vision: to provide garments that honor traditional Indian craftsmanship while meeting the desires of the modern wearer.",
      "Over the years, we have grown from a modest boutique into a landmark destination for families seeking the finest ethnic and bridal wear. Our journey is woven with the threads of countless celebrations and the trust of the community we serve."
    ],
  },
  founders: {
    title: "The Visionaries",
    description: "Guided by a passion for textiles and an unwavering commitment to quality, our founders have curated collections that stand the test of time.",
  },
  philosophy: {
    title: "Our Philosophy",
    values: [
      { heading: "Uncompromising Quality", text: "We source only the finest fabrics, ensuring every garment feels as luxurious as it looks." },
      { heading: "Rooted in Tradition", text: "We honor the ancestral techniques of Indian artisans, preserving crafts that have been passed down through generations." },
      { heading: "Generational Trust", text: "We build lasting relationships, treating every client like family and serving grandmothers, mothers, and daughters alike." }
    ],
  },
  generationsServed: {
    title: "Serving Generations",
    description: "It is our greatest honor to see our garments worn by successive generations of the same family, a true testament to the timeless appeal and enduring quality of Kohinoor Trends.",
  },
};
