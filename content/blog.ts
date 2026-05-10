import { SEOData, HeroSection } from './types';

export const blogSEO: SEOData = {
  title: "The Bakery Journal | Verma's Bakery & Sweets",
  description: "Recipes, stories, and behind-the-scenes glimpses from the ovens of Verma's Bakery in Patiala.",
};

export const blogHero: HeroSection = {
  heading: "The Bakery Journal",
  subheading: "Stories of flour, family, and the craft of baking.",
};

export const blogCategories = ["All", "Recipes", "Behind the Scenes", "Heritage", "Community"];

export const staticArticles = [
  {
    id: "perfecting-the-swiss-roll",
    title: "Perfecting the Swiss Roll: A 30-Year Journey",
    excerpt: "Discover the secret behind the impossibly light sponge and the perfect swirl of our signature bake.",
    category: "Heritage",
    date: "October 12, 2023",
    readTime: "4 min read",
    author: "Aman Verma"
  },
  {
    id: "local-wheat-difference",
    title: "Why Local Wheat Matters",
    excerpt: "An inside look at our partnership with Punjab farmers and how it transforms our bread.",
    category: "Behind the Scenes",
    date: "September 28, 2023",
    readTime: "5 min read",
    author: "Mr. Verma"
  },
  {
    id: "jaggery-cookie-recipe",
    title: "Bake at Home: Whole Wheat & Jaggery Cookies",
    excerpt: "We're sharing a simplified version of our rustic classic for your home kitchen.",
    category: "Recipes",
    date: "September 10, 2023",
    readTime: "6 min read",
    author: "Aman Verma"
  }
];

export const newsletterPrompt = {
  heading: "Join the Recipe Club",
  description: "Subscribe to receive our latest baking tips, new menu announcements, and exclusive seasonal offers directly to your inbox.",
  cta: { label: "Subscribe", href: "#" }
};
