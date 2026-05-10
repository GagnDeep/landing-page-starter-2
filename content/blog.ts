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
  }
};
