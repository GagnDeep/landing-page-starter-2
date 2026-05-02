import { SEO } from "./home";

export interface AboutContent {
  seo: SEO;
  hero: { headline: string; subheadline: string };
  foundingStory: { headline: string; body: string[] };
  philosophy: { headline: string; values: { title: string; description: string }[] };
  team: { headline: string; description: string };
}

export const aboutContent: AboutContent = {
  seo: {
    title: "Our Heritage | Sardaar G. Tailors",
    description: "Discover the history and philosophy behind Patiala's premier bespoke tailoring house."
  },
  hero: {
    headline: "Our Heritage",
    subheadline: "A legacy of needle and thread, rooted in the heart of Patiala."
  },
  foundingStory: {
    headline: "The Fabric of Our History",
    body: [
      "Sardaar G. Tailors was established with a singular vision: to preserve the authentic art of Punjabi tailoring while elevating it to modern standards of luxury.",
      "From our humble beginnings in New Market, Tripuri, we have grown into a trusted name for grooms and gentlemen who refuse to compromise on fit and finish."
    ]
  },
  philosophy: {
    headline: "Our Philosophy",
    values: [
      { title: "Precision", description: "Every cut is calculated. Every stitch is intentional." },
      { title: "Tradition", description: "We honor the classic silhouettes that define our cultural identity." },
      { title: "Elegance", description: "True style whispers; it never shouts. We craft garments of quiet luxury." }
    ]
  },
  team: {
    headline: "The Master Craftsmen",
    description: "Behind every garment is a team of dedicated artisans—pattern makers, cutters, and embroiders who have spent lifetimes mastering their specific trades."
  }
};
