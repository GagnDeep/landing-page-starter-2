import { SEO, CTA } from "./types"

export const seo: SEO = {
  title: "The Editorial | Hair Trends & Advice | Villa Hair Sense",
  description:
    "Explore the latest hair trends, expert styling tips, and salon news curated by the master stylists at Villa Hair Sense Chandigarh.",
}

export const hero = {
  heading: "The Editorial",
  subheading: "Insights, trends, and expert advice from our master stylists.",
}

export const featuredArticle = {
  title: "The Return of the Butterfly Cut: Why It's Everywhere",
  excerpt:
    "Volume is back, and it's more glamorous than ever. Discover why the butterfly cut is our most requested style this season and how to maintain it.",
  href: "/blog/return-of-the-butterfly-cut",
}

export const categories = [
  { label: "Color Trends", href: "/blog/category/color" },
  { label: "Hair Health", href: "/blog/category/health" },
  { label: "Styling Tips", href: "/blog/category/styling" },
  { label: "Salon News", href: "/blog/category/news" },
]

export const latestPosts = {
  heading: "Latest Dispatch",
  posts: [
    {
      title: "Maintaining Your Balayage in the Chandigarh Heat",
      excerpt:
        "Expert tips on preventing brassiness and preserving the longevity of your custom color during the summer months.",
      href: "/blog/maintaining-balayage-chandigarh",
      date: "May 15, 2024",
    },
    {
      title: "Kérastase vs. Olaplex: Which is Right for You?",
      excerpt:
        "A deep dive into our two premier reparative systems, helping you understand which protocol your hair truly needs.",
      href: "/blog/kerastase-vs-olaplex",
      date: "April 28, 2024",
    },
    {
      title: "The Art of the Perfect Blowout",
      excerpt:
        "Arman shares his step-by-step guide to achieving salon-quality volume and smoothness at home.",
      href: "/blog/art-of-the-perfect-blowout",
      date: "April 10, 2024",
    },
  ],
}

export const trendingTopic1 = {
  heading: "Focus: Color Innovation",
  description: "Discover the latest techniques in dimensional color.",
}

export const trendingTopic2 = {
  heading: "Focus: Structural Health",
  description: "Strategies for rehabilitating damaged hair.",
}

export const stylistSpotlight = {
  heading: "Inside the Mind of Aarif",
  excerpt:
    "Our co-founder discusses the philosophy behind precision cutting and why consultation is the most important part of any service.",
  href: "/blog/interview-aarif",
}

export const videoTeaser = {
  heading: "The Transformation Archive",
  description: "Watch our signature techniques in action.",
}

export const clientStories = {
  heading: "Client Journeys",
  description:
    "Real clients, stunning transformations, and the stories behind their new looks.",
}

export const productReviews = {
  heading: "The Product Dossier",
  description:
    "Honest, stylist-driven reviews of the luxury products we stock.",
}

export const seasonalGuides = {
  heading: "Seasonal Care",
  description:
    "Adapting your hair regimen for the changing Chandigarh climate.",
}

export const localEvents = {
  heading: "Community & Events",
  description: "What's happening at Villa Hair Sense and in Sector 9.",
}

export const newsletterSignup = {
  heading: "Subscribe to The Editorial",
  subheading: "Receive our latest articles directly to your inbox.",
}

export const popularPosts = {
  heading: "Most Read",
  links: [
    {
      label: "How Often Should You Really Wash Your Hair?",
      href: "/blog/washing-frequency",
    },
    { label: "Decoding Hair Porosity", href: "/blog/hair-porosity" },
  ],
}

export const tagsCloud = {
  heading: "Explore by Topic",
  tags: [
    "Balayage",
    "Volume",
    "Scalp Care",
    "Bridal",
    "Extensions",
    "Men's Styling",
  ],
}

export const searchBar = {
  placeholder: "Search The Editorial...",
}

export const pagination = {
  next: "Older Posts",
  prev: "Newer Posts",
}

export const bookingCta = {
  heading: "Inspired by What You See?",
  subheading: "Let's bring these trends to life for you.",
  cta: { label: "Book Your Style", href: "/booking" } as CTA,
}
