import { SEO, CTA } from './types';

export interface BlogContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  featuredArticle: {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    href: string;
  };
  categories: string[];
  recentPosts: Array<{
    title: string;
    excerpt: string;
    category: string;
    date: string;
    href: string;
  }>;
  ctaSection: {
    headline: string;
    cta: CTA;
  };
}

export const blogContent: BlogContent = {
  seo: {
    title: "The Journal | Guide Events",
    description: "Insights, decor trends, real wedding features, and expert advice from Guide Events' master planners.",
  },
  hero: {
    headline: "The Guide Events Journal",
    subheadline: "Insights, elegant trends, and real wedding inspiration from our master orchestrators.",
  },
  featuredArticle: {
    title: "The Art of the Royal Punjabi Aesthetic",
    excerpt: "Discover how we weave rich cultural heritage into modern, palatial decor designs that leave a lasting legacy.",
    category: "Decor Trends",
    date: "October 12, 2023",
    href: "/blog/royal-punjabi-aesthetic",
  },
  categories: ["Real Weddings", "Decor Trends", "Planning Advice", "NRI Guides"],
  recentPosts: [
    {
      title: "Navigating Time Zones: The NRI Planning Guide",
      excerpt: "Expert strategies for managing a destination wedding in India while living abroad.",
      category: "NRI Guides",
      date: "September 28, 2023",
      href: "/blog/nri-planning-guide",
    },
    {
      title: "Rohan & Priya: A Lakeside Dream in Udaipur",
      excerpt: "A deep dive into the meticulously planned three-day celebration overlooking Lake Pichola.",
      category: "Real Weddings",
      date: "September 15, 2023",
      href: "/blog/rohan-priya-udaipur",
    },
    {
      title: "Curating the Perfect Gastronomic Journey",
      excerpt: "How to select a menu that honors tradition while offering an elevated culinary experience.",
      category: "Planning Advice",
      date: "August 30, 2023",
      href: "/blog/curating-gastronomic-journey",
    },
  ],
  ctaSection: {
    headline: "Ready to Create Your Own Story?",
    cta: {
      label: "Plan Your Wedding with Us",
      href: "/contact",
    },
  },
};
