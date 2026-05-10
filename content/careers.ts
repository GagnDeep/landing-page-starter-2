import { SEO, CTA } from './types';

export interface CareersContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  culture: {
    headline: string;
    body: string;
  };
  benefits: Array<{ title: string; description: string }>;
  openPositions: Array<{
    title: string;
    department: string;
    location: string;
    type: string;
  }>;
  ctaSection: {
    headline: string;
    body: string;
    cta: CTA;
  };
}

export const careersContent: CareersContent = {
  seo: {
    title: "Careers | Guide Events",
    description: "Join the architects of celebration. Explore career opportunities at Guide Events.",
  },
  hero: {
    headline: "Join the Architects of Celebration",
    subheadline: "We are always seeking exceptional talent to join our master orchestrators.",
  },
  culture: {
    headline: "A Culture of Uncompromising Excellence",
    body: "Working at Guide Events is demanding, fast-paced, and incredibly rewarding. We operate at the highest echelon of luxury hospitality. Our team consists of meticulous planners, visionary designers, and relentless problem-solvers who share a singular passion: executing perfection.",
  },
  benefits: [
    {
      title: "Elite Clientele",
      description: "Collaborate on high-profile events, offering unparalleled exposure to the world of luxury hospitality.",
    },
    {
      title: "Global Travel",
      description: "Opportunities to travel to breathtaking destinations as part of our core execution team.",
    },
    {
      title: "Mentorship & Growth",
      description: "Work directly alongside industry veterans, gaining invaluable expertise in high-end event orchestration.",
    },
  ],
  openPositions: [
    {
      title: "Senior Wedding Planner",
      department: "Event Planning",
      location: "Chandigarh / Remote (India)",
      type: "Full-Time",
    },
    {
      title: "Spatial & Decor Designer",
      department: "Design & Aesthetics",
      location: "Chandigarh",
      type: "Full-Time",
    },
    {
      title: "Client Experience Liaison (NRI Division)",
      department: "Client Relations",
      location: "Remote",
      type: "Full-Time",
    },
  ],
  ctaSection: {
    headline: "Don't see a fit?",
    body: "We are always eager to connect with extraordinary talent. Submit a general application, and we will keep you in mind for future roles.",
    cta: {
      label: "Submit General Application",
      href: "mailto:careers@guideevents.com",
    },
  },
};
