import { BasePageContent } from './types';

export interface CareersContent extends BasePageContent {
  header: {
    title: string;
    subtitle: string;
  };
  culture: {
    title: string;
    description: string;
  };
  openings: {
    title: string;
    positions: { role: string; department: string; type: string }[];
  };
  process: {
    title: string;
    description: string;
  };
}

export const careersContent: CareersContent = {
  seo: {
    title: "Careers | Join the Kohinoor Trends Family",
    description: "Explore career opportunities at Kohinoor Trends. We are always looking for passionate stylists, master tailors, and digital professionals.",
    keywords: ["fashion jobs Chandigarh", "boutique careers", "tailor jobs", "stylist positions"],
  },
  header: {
    title: "Join Our Family",
    subtitle: "Build a career surrounded by heritage, craftsmanship, and elegance.",
  },
  culture: {
    title: "Our Culture",
    description: "At Kohinoor Trends, we foster an environment of respect and artistic appreciation. We value the dedication it takes to uphold a legacy, and we support our team in growing both personally and professionally within the fashion industry.",
  },
  openings: {
    title: "Current Openings",
    positions: [
      { role: "Senior Bridal Stylist", department: "Retail", type: "Full-Time" },
      { role: "Master Tailor", department: "Atelier", type: "Full-Time" },
      { role: "Digital Marketing Manager", department: "Operations", type: "Full-Time" }
    ]
  },
  process: {
    title: "How to Apply",
    description: "If you share our passion for ethnic wear and exceptional service, please send your resume and a brief cover letter to careers@kohinoortrends.com. We look forward to discovering how your talents align with our vision.",
  }
};
