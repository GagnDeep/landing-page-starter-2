import { SEO } from "./home";

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface BlogContent {
  seo: SEO;
  hero: { headline: string; subheadline: string };
  featuredPost: BlogPost;
  posts: BlogPost[];
}

export const blogContent: BlogContent = {
  seo: {
    title: "The Tailor's Journal | Sardaar G. Tailors",
    description: "Insights into style, the art of traditional tailoring, and guides for the modern groom."
  },
  hero: {
    headline: "The Tailor's Journal",
    subheadline: "Chronicles of craft, style guides, and stories from the atelier."
  },
  featuredPost: {
    title: "The Anatomy of a Perfect Sherwani",
    excerpt: "Understanding the structural elements that transform a piece of fabric into a regal garment fit for a groom.",
    date: "October 12, 2023",
    category: "Style Guide"
  },
  posts: [
    {
      title: "Why the Muktsari Cut Reigns Supreme",
      excerpt: "A deep dive into the history and technical perfection of the Muktsari Kurta Pajama.",
      date: "September 05, 2023",
      category: "Heritage"
    },
    {
      title: "Choosing the Right Fabric for Your Summer Wedding",
      excerpt: "Navigate the heat without compromising on elegance with our curated summer fabric guide.",
      date: "August 20, 2023",
      category: "Fabrics"
    },
    {
      title: "The Art of Zardosi: A Dying Craft Revived",
      excerpt: "Meet the artisans who spend hundreds of hours hand-stitching the intricate details of our premium sherwanis.",
      date: "July 14, 2023",
      category: "Craftsmanship"
    }
  ]
};
