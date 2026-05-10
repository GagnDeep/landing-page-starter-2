import { SEO, NoticeBar } from './home';

export interface Benefit {
  title: string;
  description: string;
  iconType: string;
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
}

export interface CareersContent {
  seo: SEO;
  noticeBar: NoticeBar;
  hero: {
    headline: string;
    subheadline: string;
  };
  culture: {
    headline: string;
    body: string;
  };
  benefitsIntro: string;
  benefits: Benefit[];
  openingsIntro: string;
  openings: JobOpening[];
  generalApplication: {
    headline: string;
    description: string;
    buttonLabel: string;
    href: string;
  };
  diversityStatement: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  hiringProcess: {
    headline: string;
    steps: string[];
  };
  socialTeaser: {
    headline: string;
    linkText: string;
    href: string;
  };
}

export const careersContent: CareersContent = {
  seo: {
    title: "Careers | Blinking Eye Events",
    description: "Join the team at Blinking Eye Events. We are always looking for passionate, detail-oriented event professionals in Chandigarh.",
  },
  noticeBar: {
    message: "Now accepting inquiries for the upcoming winter wedding season.",
    linkText: "Inquire Now",
    linkHref: "/contact",
  },
  hero: {
    headline: "Join the Artisans",
    subheadline: "Build a career creating unforgettable moments and mastering the art of hospitality.",
  },
  culture: {
    headline: "Our Environment",
    body: "Working at Blinking Eye Events means operating at the intersection of high-stakes logistics and profound emotional significance. We maintain uncompromising standards of excellence, but we do so within a deeply supportive, family-like culture. We value proactive problem solvers, creative thinkers, and those who find joy in serving others.",
  },
  benefitsIntro: "Why Build Your Career Here?",
  benefits: [
    {
      title: "Creative Autonomy",
      description: "We empower our team to bring fresh, innovative ideas to the table, trusting your expertise to elevate our designs.",
      iconType: "Lightbulb",
    },
    {
      title: "Premium Exposure",
      description: "Work on high-profile, luxury events that challenge and refine your skills on a grand scale.",
      iconType: "Star",
    },
    {
      title: "Mentorship & Growth",
      description: "Direct collaboration with senior leadership and ongoing opportunities for professional development.",
      iconType: "TrendingUp",
    },
  ],
  openingsIntro: "Current Opportunities",
  openings: [
    {
      id: "senior-producer",
      title: "Senior Event Producer",
      type: "Full-Time",
      location: "Chandigarh",
    },
    {
      id: "design-coordinator",
      title: "Design & Styling Coordinator",
      type: "Full-Time",
      location: "Chandigarh",
    },
    {
      id: "event-intern",
      title: "Event Management Internship",
      type: "Seasonal",
      location: "Chandigarh",
    },
  ],
  generalApplication: {
    headline: "Don't see the right fit?",
    description: "We are always eager to connect with exceptional talent. Send us your resume and a brief note about how you can contribute to our team.",
    buttonLabel: "Submit General Application",
    href: "mailto:careers@blinkingeyeevents.com",
  },
  diversityStatement: "Blinking Eye Events is proud to be an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.",
  testimonial: {
    quote: "The standards here are incredibly high, which pushes you to be your absolute best. But what makes it special is that you're never doing it alone; the team always has your back.",
    author: "Ritu S.",
    role: "Event Producer",
  },
  hiringProcess: {
    headline: "Our Hiring Process",
    steps: [
      "Initial Portfolio & Resume Review",
      "Culture Fit & Experience Interview",
      "Practical Skills Assessment or Trial Project",
      "Final Leadership Interview",
    ],
  },
  socialTeaser: {
    headline: "Follow Our Work Behind the Scenes",
    linkText: "Connect on LinkedIn",
    href: "https://linkedin.com",
  },
};
