import { SEO, NoticeBar } from './home';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
}

export interface BlogContent {
  seo: SEO;
  noticeBar: NoticeBar;
  hero: {
    headline: string;
    subheadline: string;
  };
  featuredPost: BlogPost;
  categories: string[];
  recentPostsIntro: string;
  recentPosts: BlogPost[];
  newsletterCta: {
    headline: string;
    subheadline: string;
    buttonLabel: string;
  };
  trendingIntro: string;
  trendingPosts: Pick<BlogPost, 'id' | 'title' | 'category'>[];
  socialTeaser: {
    headline: string;
    handle: string;
  };
}

export const blogContent: BlogContent = {
  seo: {
    title: "The Journal | Blinking Eye Events",
    description: "Inspiration, real weddings, and expert advice from the planners at Blinking Eye Events.",
  },
  noticeBar: {
    message: "Now accepting inquiries for the upcoming winter wedding season.",
    linkText: "Inquire Now",
    linkHref: "/contact",
  },
  hero: {
    headline: "The Journal",
    subheadline: "Curated inspiration, real celebrations, and musings from our studio.",
  },
  featuredPost: {
    id: "featured-1",
    title: "A Masterclass in Understated Elegance: Aisha & Rohan's Winter Wedding",
    category: "Real Weddings",
    excerpt: "Discover how we transformed a heritage property in Punjab into a warm, candlelit sanctuary for a modern, multi-cultural celebration.",
    date: "October 12, 2023",
    imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "An elegant wedding reception table setup",
  },
  categories: ["All", "Real Weddings", "Design Inspiration", "Planning Advice", "Behind the Scenes"],
  recentPostsIntro: "Latest Stories",
  recentPosts: [
    {
      id: "post-1",
      title: "The Return of the Intimate Gathering",
      category: "Planning Advice",
      excerpt: "Why smaller guest lists are leading to more profound, memorable, and highly personalized event experiences.",
      date: "September 28, 2023",
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      imageAlt: "Guests enjoying a toast at an intimate wedding",
    },
    {
      id: "post-2",
      title: "Selecting Your Signature Palette",
      category: "Design Inspiration",
      excerpt: "A guide to moving beyond trendy colors and selecting a visual identity that speaks to your personal narrative.",
      date: "September 15, 2023",
      imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "A detailed shot of floral arrangements and color palettes",
    },
    {
      id: "post-3",
      title: "Behind the Scenes: A 48-Hour Corporate Gala Build",
      category: "Behind the Scenes",
      excerpt: "Step into our world as we detail the logistical ballet required to construct a full-scale corporate gala from the ground up.",
      date: "August 30, 2023",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Event staff setting up a large conference venue",
    },
    {
      id: "post-4",
      title: "Navigating Destination Weddings in India",
      category: "Planning Advice",
      excerpt: "Expert tips on managing logistics, guest travel, and local vendor sourcing for a flawless destination celebration.",
      date: "August 12, 2023",
      imageUrl: "https://images.unsplash.com/photo-1583939000155-e87f2da50fb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "A scenic view of a destination wedding location in India",
    },
    {
      id: "post-5",
      title: "The Art of the Tablescape",
      category: "Design Inspiration",
      excerpt: "How texture, height, and lighting come together to create dining experiences that delight the senses.",
      date: "July 25, 2023",
      imageUrl: "https://images.unsplash.com/photo-1522413452208-99673f5146b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "A close-up of fine dining table settings",
    },
    {
      id: "post-6",
      title: "Meera & Siddharth's Botanical Sangeet",
      category: "Real Weddings",
      excerpt: "A look inside a vibrant, foliage-heavy design that brought the outdoors in for an unforgettable night of dance.",
      date: "July 10, 2023",
      imageUrl: "https://images.unsplash.com/photo-1606214555890-df457bceb813?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Vibrant decorations at a Sangeet ceremony",
    },
  ],
  newsletterCta: {
    headline: "Inspiration to Your Inbox",
    subheadline: "Join our newsletter for weekly design insights and studio updates.",
    buttonLabel: "Subscribe",
  },
  trendingIntro: "Popular Reads",
  trendingPosts: [
    { id: "post-1", title: "The Return of the Intimate Gathering", category: "Planning Advice" },
    { id: "post-2", title: "Selecting Your Signature Palette", category: "Design Inspiration" },
    { id: "post-4", title: "Navigating Destination Weddings in India", category: "Planning Advice" },
  ],
  socialTeaser: {
    headline: "Follow the Journey",
    handle: "@blinkingeyeevents",
  },
};
