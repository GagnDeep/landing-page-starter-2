import { SEO, NoticeBar } from './home';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface AboutContent {
  seo: SEO;
  noticeBar: NoticeBar;
  hero: {
    headline: string;
    subheadline: string;
  };
  mission: {
    headline: string;
    body: string;
  };
  founderProfile: {
    headline: string;
    name: string;
    bio: string;
    philosophyQuote: string;
  };
  teamIntro: {
    headline: string;
    subheadline: string;
  };
  teamMembers: TeamMember[];
  coreValuesIntro: string;
  coreValues: CoreValue[];
  workspace: {
    headline: string;
    description: string;
  };
  milestones: Array<{
    year: string;
    event: string;
  }>;
  community: {
    headline: string;
    description: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  secondaryCta: {
    headline: string;
    button: {
      label: string;
      href: string;
    };
  };
}

export const aboutContent: AboutContent = {
  seo: {
    title: "About Us | Blinking Eye Events",
    description: "Learn about the passionate team behind Blinking Eye Events. Discover our commitment to elegance, reliability, and creating unforgettable celebrations.",
  },
  noticeBar: {
    message: "Now accepting inquiries for the upcoming winter wedding season.",
    linkText: "Inquire Now",
    linkHref: "/contact",
  },
  hero: {
    headline: "Our Story",
    subheadline: "Crafting legacies of joy through meticulous planning and heartfelt design.",
  },
  mission: {
    headline: "The Heart of the Celebration",
    body: "Blinking Eye Events was born from a simple belief: that life’s most profound moments deserve to be celebrated without the burden of logistics. We exist to protect the sanctity of your joy. Our mission is to blend the rigorous, exacting standards of top-tier event management with the genuine warmth of a trusted family friend.",
  },
  founderProfile: {
    headline: "The Visionary",
    name: "Kavita",
    bio: "Kavita brings years of deep expertise in luxury hospitality and event design to the forefront of Blinking Eye Events. Known for her calm demeanor under pressure and an impeccable eye for aesthetic harmony, she leads the studio with a commitment to excellence. Her approach is highly personal, treating every client's celebration as if it were her own family's.",
    philosophyQuote: "\"Elegance is not just what you see; it is how the event makes you feel. True luxury is the absence of stress.\"",
  },
  teamIntro: {
    headline: "The Artisans Behind the Scenes",
    subheadline: "A dedicated collective of designers, planners, and logistics experts.",
  },
  teamMembers: [
    {
      name: "Aarti Sharma",
      role: "Lead Designer",
      bio: "Aarti translates abstract visions into tangible, breathtaking environments. Her background in fine arts informs every floral arrangement and tablescape.",
    },
    {
      name: "Vikram Singh",
      role: "Director of Logistics",
      bio: "The backbone of our operations, Vikram ensures that every timeline is met, every vendor is coordinated, and every technical element performs flawlessly.",
    },
    {
      name: "Neha Patel",
      role: "Client Liaison",
      bio: "Neha is the warm, constant point of contact for our families, ensuring communication is seamless, transparent, and always reassuring.",
    },
  ],
  coreValuesIntro: "Our Foundational Pillars",
  coreValues: [
    {
      title: "Elegance & Detail",
      description: "We believe in understated luxury. Every element, from the texture of the linens to the timing of the toasts, is curated with intentionality.",
    },
    {
      title: "Unwavering Reliability",
      description: "Trust is our most valuable currency. We promise transparency, prompt communication, and a proactive approach to problem-solving.",
    },
    {
      title: "Warmth & Family",
      description: "We are entering your lives during highly emotional times. We honor that privilege with empathy, kindness, and genuine care.",
    },
  ],
  workspace: {
    headline: "The Design Studio",
    description: "Located in the heart of Chandigarh, our studio is a sanctuary of inspiration. It is where textures are chosen, palettes are perfected, and the blueprints for your celebrations are drawn. We invite our clients into this space to collaborate and dream.",
  },
  milestones: [
    {
      year: "2015",
      event: "Blinking Eye Events is founded by Kavita.",
    },
    {
      year: "2018",
      event: "Expanded services to include comprehensive corporate gala planning.",
    },
    {
      year: "2021",
      event: "Recognized as a premier boutique planner for NRI destination weddings in Punjab.",
    },
  ],
  community: {
    headline: "Supporting Local Artisans",
    description: "We are deeply committed to our community. Whenever possible, we source from local craftsmen, florists, and independent vendors, ensuring that our celebrations also enrich the local economy.",
  },
  testimonial: {
    quote: "Working with Kavita and the team felt like planning a wedding with my most organized, stylish best friends. They listened intently and executed perfectly.",
    author: "Priya M.",
    role: "Bride",
  },
  secondaryCta: {
    headline: "Let's Write Your Next Chapter Together",
    button: {
      label: "Start Your Story",
      href: "/contact",
    },
  },
};
