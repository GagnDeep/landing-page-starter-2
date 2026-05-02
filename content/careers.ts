import { BasePageContent, CTA } from './types';

export interface JobRole {
  title: string;
  type: string;
  location: string;
  description: string;
}

export interface CareersContent extends BasePageContent {
  culture: {
    heading: string;
    description: string;
  };
  benefits: { title: string; description: string }[];
  openRoles: JobRole[];
  generalApplication: {
    heading: string;
    description: string;
    cta: CTA;
  };
}

export const careersContent: CareersContent = {
  seo: {
    title: "Careers | Join the Team | Aura Boutique",
    description: "Looking to work in fashion? View open roles at Aura Boutique in Patiala, including styling, tailoring, and retail positions.",
  },
  hero: {
    heading: "Join Our Team",
    subheading: "Help us craft the future of premium ethnic and western wear.",
  },
  culture: {
    heading: "Life at Aura",
    description: "We are a passionate team of designers, artisans, and fashion enthusiasts based in Patiala. We believe in fostering creativity, respecting traditional craftsmanship, and delivering exceptional experiences to our clients."
  },
  benefits: [
    { title: "Creative Environment", description: "Work surrounded by beautiful fabrics and inspiring designs." },
    { title: "Skill Development", description: "Learn from master tailors and experienced stylists." },
    { title: "Employee Discounts", description: "Enjoy generous discounts on Aura apparel." }
  ],
  openRoles: [
    {
      title: "Master Tailor",
      type: "Full-Time",
      location: "Patiala Studio",
      description: "Seeking an experienced tailor specializing in women's ethnic wear and intricate blouse designs."
    },
    {
      title: "Fashion Consultant / Stylist",
      type: "Full-Time",
      location: "Patiala Studio",
      description: "Looking for an energetic stylist to assist clients with custom fittings and ready-to-wear selections."
    },
    {
      title: "Social Media Manager",
      type: "Part-Time / Remote",
      location: "Remote (India)",
      description: "Manage our Instagram presence, plan photoshoots, and engage with our digital community."
    }
  ],
  generalApplication: {
    heading: "Don't see a fit?",
    description: "We are always looking for talented individuals. Send us your resume and portfolio.",
    cta: {
      label: "Email Us Your Resume",
      href: "mailto:careers@auraboutique.in"
    }
  }
};
