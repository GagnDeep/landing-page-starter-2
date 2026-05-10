export interface BlogContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
  };
  categories: string[];
  newsletter: {
    heading: string;
    button: string;
    placeholder: string;
  };
  posts: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    content: string;
    isFeatured?: boolean;
    imageKey: string;
  }[];
}

export const blogContent: BlogContent = {
  meta: {
    title: "The Royal Kitchen Journal | Bawa Caterers",
    description: "Insights, trends, and stories from the heart of Patiala's premier catering service. Discover culinary secrets and event planning tips.",
  },
  hero: {
    headline: "The Royal Kitchen Journal",
  },
  categories: ["Weddings", "Corporate Events", "Recipes & Traditions", "Company News"],
  newsletter: {
    heading: "Stay Inspired",
    placeholder: "Your email address",
    button: "Subscribe to the Journal"
  },
  posts: [
    {
      slug: "live-stall-trends-2024",
      title: "Top 5 Live Stall Trends for 2024 Weddings",
      excerpt: "Discover the interactive food stations that are captivating guests this season.",
      date: "March 15, 2024",
      author: "Chef Vikram Bawa",
      content: "Live stalls are the heart of any Punjabi wedding. In 2024, we are seeing a massive shift towards interactive, high-theatre food stations. Gone are the days of simple buffets; today's guests want to see their food flame-grilled, tossed, and customized. Top trends include the artisanal Chaat cart, infused with liquid nitrogen for drama, the global fusion pasta wheel, and the return of the classic Amritsari Kulcha, served straight from a traditional clay tandoor. At Bawa Caterers, we believe the cooking process is as important as the final taste.",
      isFeatured: true,
      imageKey: "placeholder"
    },
    {
      slug: "secret-dal-makhani",
      title: "The Secret Behind Our Signature Dal Makhani",
      excerpt: "A glimpse into the overnight slow-cooking process that creates our most beloved dish.",
      date: "February 28, 2024",
      author: "Chef Harjeet Singh",
      content: "Our Dal Makhani is not just a dish; it's a legacy. The secret lies in the slow-cooking process. We simmer black lentils over a low charcoal flame for over 18 hours, allowing the flavors of the whole spices to deeply infuse the lentils. Finished with freshly churned butter and a touch of cream, it represents the epitome of Royal Punjabi indulgence.",
      imageKey: "dalMakhani"
    },
    {
      slug: "curating-royal-thali",
      title: "Curating a 5-Course Royal Thali",
      excerpt: "How to balance flavors and presentation to leave a lasting impression.",
      date: "January 10, 2024",
      author: "Gurpreet Bawa",
      content: "A Royal Thali is a symphony of flavors—sweet, savory, spicy, and tangy, all balanced meticulously on a single platter. The key is progressive dining. We start with light, palate-cleansing starters, move into rich gravies, and conclude with warm, aromatic desserts. Presentation is paramount; we use traditional copper and silver service ware to elevate the sensory experience.",
      imageKey: "thali"
    },
    {
      slug: "corporate-catering-beyond-buffet",
      title: "Corporate Catering: Beyond the Buffet",
      excerpt: "Elevating professional gatherings with sophisticated plated service.",
      date: "December 05, 2023",
      author: "Rajinder Bawa",
      content: "Corporate galas demand precision and elegance. While buffets are efficient, plated service offers a superior level of sophistication. At Bawa Caterers, our corporate division focuses on seamless, synchronized service, ensuring that hundreds of guests are served hot, beautifully presented meals simultaneously without disrupting the event's flow.",
      imageKey: "corporate"
    }
  ]
};
