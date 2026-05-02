import { BasePageContent } from './types';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageAlt: string;
}

export interface BlogContent extends BasePageContent {
  categories: string[];
  featuredPost: BlogPost;
  posts: BlogPost[];
  newsletterCTA: {
    heading: string;
    subheading: string;
    buttonLabel: string;
  };
}

export const blogContent: BlogContent = {
  seo: {
    title: "The Style Journal | Trends & Tips | Aura Boutique",
    description: "Read the latest fashion trends, styling tips, and behind-the-scenes stories from the Aura Boutique studio.",
  },
  hero: {
    heading: "The Style Journal",
    subheading: "Curated insights on modern elegance and traditional craftsmanship.",
  },
  categories: ["Trends", "Style Guides", "Behind the Seams", "Bridal Diaries"],
  featuredPost: {
    id: "summer-wedding-guest-guide",
    title: "The Ultimate Guide to Summer Wedding Guest Attire",
    excerpt: "Navigating summer weddings can be tricky. Here is how to stay cool while looking impeccably chic in our latest lightweight silks and georgettes.",
    date: "April 15, 2024",
    category: "Style Guides",
    imageAlt: "Woman wearing a lightweight floral lehenga"
  },
  posts: [
    {
      id: "evolution-of-the-anarkali",
      title: "The Evolution of the Anarkali Suit",
      excerpt: "From royal courts to modern runways, explore how the classic Anarkali has adapted to contemporary fashion.",
      date: "March 28, 2024",
      category: "Trends",
      imageAlt: "Modern anarkali suit design"
    },
    {
      id: "behind-the-scenes-embroidery",
      title: "Behind the Seams: The Art of Zardosi",
      excerpt: "Meet the artisans in our Patiala studio keeping the intricate art of Zardosi hand-embroidery alive.",
      date: "March 10, 2024",
      category: "Behind the Seams",
      imageAlt: "Close up of gold zardosi embroidery"
    },
    {
      id: "power-dressing-women",
      title: "Power Dressing: The Western Wear Edit",
      excerpt: "Command the boardroom and the after-party with our new line of custom-fit blazers and shift dresses.",
      date: "February 22, 2024",
      category: "Style Guides",
      imageAlt: "Woman in a tailored blazer"
    }
  ],
  newsletterCTA: {
    heading: "Never Miss a Trend",
    subheading: "Subscribe to our newsletter for exclusive style updates and early access to new collections.",
    buttonLabel: "Subscribe"
  }
};
