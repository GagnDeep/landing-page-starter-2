import { SEOContent } from './types';

export const blogContent = {
  seo: {
    title: "The Journal | YAVA DESIGNS",
    description: "Read the latest insights on ethnic fashion, fabric care, and stories from the YAVA DESIGNS atelier in Chandigarh."
  } as SEOContent,
  hero: {
    title: "The Journal",
    subtitle: "Notes on style, craft, and the art of living beautifully."
  },
  categories: [
    { label: "All", href: "/blog" },
    { label: "Style Guides", href: "/blog?category=style" },
    { label: "The Craft", href: "/blog?category=craft" },
    { label: "Atelier News", href: "/blog?category=news" }
  ],
  featuredArticle: {
    title: "The Return of Velvet for Winter Weddings",
    excerpt: "As the temperatures drop, we explore how rich jewel-toned velvets are reclaiming their place as the ultimate fabric for winter celebrations, offering both warmth and unparalleled regal elegance.",
    date: "October 15, 2023",
    category: "Style Guides",
    readTime: "4 min read",
    cta: "Read Article"
  },
  articles: [
    {
      title: "Understanding Silk: A Buyer's Guide to Chanderi vs. Banarasi",
      excerpt: "Navigate the world of premium silks. We break down the differences in weave, weight, and occasion suitability to help you choose the perfect fabric for your next bespoke suit.",
      date: "September 28, 2023",
      category: "The Craft",
      readTime: "6 min read"
    },
    {
      title: "Preserving Your Embroidered Heirlooms",
      excerpt: "Expert advice from our master artisans on how to store, clean, and protect your intricate Zardozi and Aari work garments so they last for generations.",
      date: "September 10, 2023",
      category: "Style Guides",
      readTime: "5 min read"
    },
    {
      title: "Inside the Atelier: The Making of the 'Gulmohar' Collection",
      excerpt: "Take a behind-the-scenes look at our latest festive collection, inspired by the vibrant flora of Chandigarh's spring.",
      date: "August 22, 2023",
      category: "Atelier News",
      readTime: "3 min read"
    },
    {
      title: "The Evolution of the Modern Salwar",
      excerpt: "From traditional wide pleats to contemporary tailored cuts, discover how the classic salwar has evolved to meet the needs of the modern woman.",
      date: "July 14, 2023",
      category: "Style Guides",
      readTime: "4 min read"
    }
  ],
  newsletterInterstitial: {
    heading: "Curated Elegance, Delivered.",
    description: "Subscribe to our journal for bi-weekly insights on style and craftsmanship.",
    cta: "Subscribe to the Journal"
  },
  pagination: {
    loadMore: "Load More Articles"
  }
};
