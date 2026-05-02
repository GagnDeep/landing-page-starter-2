import { BasePageContent } from './types';

export interface BlogContent extends BasePageContent {
  header: {
    title: string;
    subtitle: string;
  };
  categories: string[];
  featuredTitle: string;
  recentTitle: string;
}

export const blogContent: BlogContent = {
  seo: {
    title: "The Heritage Journal | Kohinoor Trends Blog",
    description: "Read our latest editorial pieces on bridal styling, fabric care, and the enduring heritage of Indian ethnic wear.",
    keywords: ["ethnic wear blog", "bridal styling tips", "fabric care guide", "Indian fashion trends"],
  },
  header: {
    title: "The Heritage Journal",
    subtitle: "Insights, styling guides, and stories from the world of Kohinoor Trends.",
  },
  categories: ["Bridal Diaries", "Style Guides", "Heritage & Craft", "News & Events"],
  featuredTitle: "Featured Article",
  recentTitle: "Recent Stories",
};
