import { SEOData, HeroSection } from './types';

export const careersSEO: SEOData = {
  title: "Join the Family | Careers at Verma's Bakery",
  description: "Build a career in artisanal baking. Explore current job openings and apprenticeships at Verma's Bakery & Sweets in Patiala.",
};

export const careersHero: HeroSection = {
  heading: "Join Our Family",
  subheading: "Passion for pastry. Dedication to the craft. A community in the kitchen.",
};

export const cultureStatement = {
  heading: "More Than Just a Job",
  content: "At Verma's, we don't just hire employees; we welcome artisans into our family. Whether you're laminating dough at dawn or ensuring every customer leaves with a smile, you are vital to continuing our 35-year legacy. We value hard work, respect for ingredients, and a willingness to learn."
};

export const perks = {
  heading: "Why Work With Us",
  items: [
    { title: "Continuous Learning", description: "Work alongside master bakers and decorators to refine your craft." },
    { title: "Staff Meals & Bakes", description: "Daily fresh bread and a generous employee discount on all sweets." },
    { title: "Respectful Hours", description: "Unlike many kitchens, we strive for predictable schedules to support work-life balance." }
  ]
};

export const openPositions = {
  heading: "Current Openings",
  jobs: [
    {
      title: "Assistant Pastry Chef",
      type: "Full-Time",
      department: "Kitchen",
      description: "Assisting the Head Chef in morning prep, focusing on sponge cakes and daily tarts. 2+ years experience required."
    },
    {
      title: "Cake Decorator (Fondant & Sugar Craft)",
      type: "Full-Time",
      department: "Custom Cakes",
      description: "Looking for an artist to join our wedding cake team. Must have a portfolio demonstrating clean fondant work."
    },
    {
      title: "Front of House Manager",
      type: "Full-Time",
      department: "Retail",
      description: "Managing daily bakery operations, customer relations, and order intake. Must possess a warm, welcoming demeanor."
    }
  ],
  cta: { label: "Apply Now", href: "mailto:careers@vermasbakery.com" }
};

export const generalApplication = {
  heading: "Don't see a fit?",
  content: "We are always looking for passionate people. If you love baking and think you belong here, send your resume to careers@vermasbakery.com."
};
