export interface CareersContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
  };
  culture: {
    heading: string;
    description: string;
    benefits: string[];
  };
  positions: {
    heading: string;
    roles: { title: string; type: string; description: string }[];
  };
  application: {
    heading: string;
    resumeLabel: string;
    button: string;
  };
}

export const careersContent: CareersContent = {
  meta: {
    title: "Careers | Join the Royal Kitchen at Bawa Caterers",
    description: "Build a career in premium hospitality. Explore job openings for chefs, event managers, and service staff at Bawa Caterers.",
  },
  hero: {
    headline: "Join the Royal Kitchen",
  },
  culture: {
    heading: "A Culture of Excellence",
    description: "Working at Bawa Caterers means being part of a legacy. We demand perfection, but we reward it with unparalleled opportunities to grow and learn in the fast-paced world of luxury events.",
    benefits: ["Competitive compensation", "Skill development programs", "Health benefits", "Opportunity to work at elite venues"]
  },
  positions: {
    heading: "Current Openings",
    roles: [
      { title: "Sous Chef (Tandoor Specialist)", type: "Full-Time", description: "Looking for an expert in traditional tandoor techniques to lead our live interactive stalls." },
      { title: "Event Logistics Manager", type: "Full-Time", description: "Coordinate transportation, setup, and teardown for large-scale wedding events." },
      { title: "Senior Service Captain", type: "Contract/Full-Time", description: "Lead our uniformed service staff to ensure impeccable guest experiences." }
    ]
  },
  application: {
    heading: "Apply Now",
    resumeLabel: "Upload Resume (PDF only)",
    button: "Submit Application"
  }
};
