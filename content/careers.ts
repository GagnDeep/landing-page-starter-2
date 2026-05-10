export interface SEO {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface JobListing {
  title: string;
  department: string;
  type: string;
  description: string;
  linkText: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface CareersContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  culture: {
    headline: string;
    description: string;
  };
  whyOasis: {
    headline: string;
    features: Feature[];
  };
  openRoles: {
    headline: string;
    filters: string[];
    listings: JobListing[];
  };
  testimonials: {
    headline: string;
    quotes: Testimonial[];
  };
  training: {
    headline: string;
    description: string;
  };
  benefits: {
    headline: string;
    list: string[];
  };
  diversity: {
    headline: string;
    description: string;
  };
  process: {
    headline: string;
    steps: Step[];
  };
  generalApplication: {
    headline: string;
    description: string;
    ctaText: string;
  };
  apprenticeship: {
    headline: string;
    description: string;
    ctaText: string;
  };
  galleryTeaser: {
    headline: string;
  };
  primaryCta: {
    headline: string;
    ctaText: string;
  };
}

export const careersContent: CareersContent = {
  seo: {
    title: "Careers & Artisanship | Oasis Caterers",
    description: "Join the prestige of Oasis Caterers. We are seeking passionate culinary artists and hospitality professionals to define the future of luxury catering.",
  },
  hero: {
    headline: "Join the Craft",
    subheadline: "A legacy built by master artisans and dedicated professionals.",
  },
  culture: {
    headline: "The Culture of Excellence",
    description: "Working at Oasis Caterers is not merely a job; it is a commitment to the highest standards of hospitality. We foster a demanding yet deeply supportive environment where precision is celebrated, and every team member is vital to the seamless execution of our grand events.",
  },
  whyOasis: {
    headline: "Why Build Your Career Here?",
    features: [
      { title: "Unparalleled Prestige", description: "Be part of the team that executes the most high-profile and exclusive events in the region." },
      { title: "Continuous Growth", description: "We believe in promoting from within, offering pathways from prep cooks to executive culinary leadership." },
      { title: "The Culinary Studio", description: "Work in state-of-the-art facilities with access to the finest ingredients and equipment." },
    ],
  },
  openRoles: {
    headline: "Current Opportunities",
    filters: ["All", "Culinary", "Service", "Logistics", "Management"],
    listings: [
      {
        title: "Sous Chef – Indian Cuisine",
        department: "Culinary",
        type: "Full-Time",
        description: "Seeking a master of traditional North Indian flavor profiles to assist the Executive Director in executing bespoke menus for events of 500+ guests.",
        linkText: "View Details & Apply",
      },
      {
        title: "Senior Event Captain",
        department: "Service",
        type: "Full-Time",
        description: "We require an experienced front-of-house leader to orchestrate the flow of service, manage waitstaff, and act as the primary liaison during events.",
        linkText: "View Details & Apply",
      },
      {
        title: "Logistics & Operations Manager",
        department: "Logistics",
        type: "Full-Time",
        description: "Manage the complex backend of our catering operations, including mobile kitchen setups, equipment transport, and venue coordination.",
        linkText: "View Details & Apply",
      },
    ],
  },
  testimonials: {
    headline: "Voices from the Kitchen",
    quotes: [
      {
        quote: "The standards here are rigorous, but the knowledge I've gained about high-volume fine dining is something no culinary school could teach.",
        author: "Vikram S.",
        role: "Chef de Partie",
      },
      {
        quote: "Oasis treats its staff like family. When we execute a flawless wedding, the pride we share as a team is incredible.",
        author: "Priya M.",
        role: "Event Captain",
      },
    ],
  },
  training: {
    headline: "The Oasis Academy",
    description: "Every new member of our front-of-house team undergoes rigorous training at the Oasis Academy, ensuring they master the choreography of our signature family-style service before stepping onto the floor.",
  },
  benefits: {
    headline: "Benefits & Provisions",
    list: [
      "Competitive Salary & Performance Bonuses",
      "Comprehensive Health Coverage",
      "Premium Uniforms & Maintenance Allowances",
      "Staff Meals Prepared by the Culinary Team",
      "Clear Pathways for Promotion",
    ],
  },
  diversity: {
    headline: "Commitment to Inclusion",
    description: "Oasis Caterers is an equal opportunity employer. We believe that a diverse kitchen and service staff brings varied perspectives that only enhance our creative output and hospitality.",
  },
  process: {
    headline: "The Application Journey",
    steps: [
      { title: "Submission", description: "Submit your resume and cover letter detailing your relevant luxury hospitality experience." },
      { title: "The Interview", description: "A formal discussion regarding your background, philosophy of service, and cultural fit." },
      { title: "The Stage", description: "For culinary and service roles, a practical trial shift to demonstrate your skills in our environment." },
    ],
  },
  generalApplication: {
    headline: "Don't See Your Role?",
    description: "If you possess exceptional talent but don't see a current opening that fits your profile, we still want to hear from you.",
    ctaText: "Submit General Application",
  },
  apprenticeship: {
    headline: "Culinary Apprenticeships",
    description: "We offer limited placements for recent culinary graduates looking to master the art of large-scale fine dining.",
    ctaText: "Learn About the Program",
  },
  galleryTeaser: {
    headline: "The Team in Action",
  },
  primaryCta: {
    headline: "Ready to Join the Standard?",
    ctaText: "View All Openings",
  },
};