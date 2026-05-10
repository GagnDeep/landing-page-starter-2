export interface SEO {
  title: string;
  description: string;
}

export interface Category {
  label: string;
  href: string;
}

export interface PostTeaser {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  slug: string;
}

export interface Tag {
  label: string;
  href: string;
}

export interface Author {
  name: string;
  role: string;
  bio: string;
}

export interface BlogContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  featuredArticle: PostTeaser;
  categories: Category[];
  recentPosts: {
    headline: string;
    posts: PostTeaser[];
  };
  editorsPick: {
    headline: string;
    post: PostTeaser;
  };
  newsletter: {
    headline: string;
    description: string;
    placeholder: string;
    ctaText: string;
  };
  articleList: {
    headline: string;
    posts: PostTeaser[];
  };
  trendingTopics: {
    headline: string;
    tags: Tag[];
  };
  guestContributor: {
    headline: string;
    post: PostTeaser;
  };
  seasonalTeaser: {
    headline: string;
    description: string;
    ctaText: string;
  };
  behindTheRecipes: {
    headline: string;
    description: string;
  };
  eventGalleries: {
    headline: string;
    description: string;
  };
  paginationText: string;
  relatedServicesBanner: {
    headline: string;
    ctaText: string;
  };
  socialIntegration: {
    headline: string;
    ctaText: string;
  };
  authors: {
    headline: string;
    list: Author[];
  };
  searchPlaceholder: string;
  primaryCta: {
    headline: string;
    ctaText: string;
  };
}

export const blogContent: BlogContent = {
  seo: {
    title: "The Journal | Oasis Caterers",
    description: "Notes on taste, elegance, and celebration. Explore culinary insights, event highlights, and thought leadership from the team at Oasis Caterers.",
  },
  hero: {
    headline: "The Journal",
    subheadline: "Notes on Taste, Elegance, and Celebration.",
  },
  featuredArticle: {
    title: "The Return of the Grand Banquet: Redefining Luxury for 1,000 Guests",
    excerpt: "How we orchestrated a seamless dining experience for a monumental heritage wedding without compromising the intimacy of a private dinner.",
    category: "Event Spotlight",
    date: "October 12, 2023",
    author: "Robin",
    slug: "return-of-the-grand-banquet",
  },
  categories: [
    { label: "Culinary Arts", href: "/blog/category/culinary-arts" },
    { label: "Event Spotlight", href: "/blog/category/event-spotlight" },
    { label: "The Art of Service", href: "/blog/category/art-of-service" },
    { label: "Lifestyle & Culture", href: "/blog/category/lifestyle" },
  ],
  recentPosts: {
    headline: "Recent Musings",
    posts: [
      {
        title: "Sourcing Saffron: A Journey to the Valleys",
        excerpt: "Our culinary director's travel log on finding the most potent, aromatic spices for the autumn wedding season.",
        category: "Culinary Arts",
        date: "September 28, 2023",
        author: "Aman",
        slug: "sourcing-saffron",
      },
      {
        title: "The Psychology of the Tablescape",
        excerpt: "Why the weight of the flatware and the texture of the linen matters just as much as the first bite.",
        category: "The Art of Service",
        date: "September 15, 2023",
        author: "Robin",
        slug: "psychology-of-tablescape",
      },
      {
        title: "A Patiala Gala: Tradition Meets Modernity",
        excerpt: "A visual essay of our latest corporate gala, featuring a bespoke menu that bridged local heritage with contemporary plating.",
        category: "Event Spotlight",
        date: "September 02, 2023",
        author: "Editorial Team",
        slug: "patiala-gala",
      },
    ],
  },
  editorsPick: {
    headline: "Curator's Choice",
    post: {
      title: "Mastering the 'Evening Fitting'",
      excerpt: "An inside look at our private tasting sessions, where menus are not just tasted, but meticulously tailored to the client's narrative.",
      category: "The Art of Service",
      date: "August 20, 2023",
      author: "Robin",
      slug: "mastering-evening-fitting",
    },
  },
  newsletter: {
    headline: "Subscribe to The Journal",
    description: "Receive our quarterly digest of culinary trends, exclusive event recaps, and insights into the art of high-end hospitality.",
    placeholder: "Enter your email address",
    ctaText: "Subscribe",
  },
  articleList: {
    headline: "The Archives",
    posts: [
      {
        title: "Vegan Luxury: Elevating Plant-Based Menus",
        excerpt: "Dispelling the myth that vegan catering cannot be opulent.",
        category: "Culinary Arts",
        date: "August 05, 2023",
        author: "Aman",
        slug: "vegan-luxury",
      },
      {
        title: "Navigating Multi-Day Event Logistics",
        excerpt: "The unseen choreography required to execute three distinct menus over a single weekend.",
        category: "The Art of Service",
        date: "July 22, 2023",
        author: "Robin",
        slug: "multi-day-logistics",
      },
    ],
  },
  trendingTopics: {
    headline: "Trending",
    tags: [
      { label: "Bespoke Menus", href: "/blog/tag/bespoke" },
      { label: "Wedding Trends 2024", href: "/blog/tag/wedding-trends" },
      { label: "Mixology", href: "/blog/tag/mixology" },
      { label: "Patiala Venues", href: "/blog/tag/venues" },
    ],
  },
  guestContributor: {
    headline: "Voices of Industry",
    post: {
      title: "Lighting the Dining Experience",
      excerpt: "Guest post by renowned event designer Meera K., exploring how ambient lighting transforms the perception of flavor.",
      category: "Lifestyle & Culture",
      date: "July 10, 2023",
      author: "Meera K.",
      slug: "lighting-dining-experience",
    },
  },
  seasonalTeaser: {
    headline: "The Autumn Collection",
    description: "Explore the rich, warming flavor profiles our chefs have curated for the upcoming season.",
    ctaText: "Discover the Menu",
  },
  behindTheRecipes: {
    headline: "Behind the Recipes",
    description: "Deep dives into the heritage, technique, and passion that construct our signature dishes.",
  },
  eventGalleries: {
    headline: "Visual Essays",
    description: "Immersive photo galleries capturing the elegance of Oasis catered events.",
  },
  paginationText: "Discover More",
  relatedServicesBanner: {
    headline: "Experience the Artistry Firsthand",
    ctaText: "View Our Services",
  },
  socialIntegration: {
    headline: "Join the Conversation",
    ctaText: "Follow @OasisCaterers on Instagram",
  },
  authors: {
    headline: "The Voices of Oasis",
    list: [
      { name: "Robin", role: "Executive Director", bio: "Sharing insights on the business of luxury hospitality and the philosophy of service." },
      { name: "Aman", role: "Culinary Director", bio: "Writing on flavor profiles, ingredient sourcing, and the evolution of traditional cuisine." },
    ],
  },
  searchPlaceholder: "Search The Journal...",
  primaryCta: {
    headline: "Ready to Plan Your Event?",
    ctaText: "Schedule a Consultation",
  },
};