import { SEOData, HeroSection, TextBlock, Testimonial } from './types';

export const aboutSEO: SEOData = {
  title: "Our Story | Verma's Bakery & Sweets",
  description: "Discover the history and heritage of Verma's Bakery & Sweets. A journey of passion, family, and the finest baking traditions in Patiala.",
};

export const aboutHero: HeroSection = {
  heading: "Our Story",
  subheading: "A heritage of warmth, crafted by hand since 1985.",
};

export const theBeginning: TextBlock = {
  heading: "Where the Oven First Warmed",
  content: [
    "It started with a simple belief: that a community thrives around a shared table, and every shared table deserves exceptional bread. In the winter of 1985, the first batch of Verma's signature Swiss rolls emerged from a modest brick oven in the heart of Patiala.",
    "Driven by family recipes passed down through generations, our founders sought to elevate the everyday bake. It wasn't just about mixing flour and water; it was about honoring the ingredients and the time-honored techniques of slow fermentation and careful pastry work."
  ]
};

export const founderQuote: Testimonial = {
  quote: "Baking is not a rushed science; it is a patient art. We don't just feed our community, we celebrate with them.",
  author: "Mr. Verma",
  role: "Founder"
};

export const generationsTimeline = [
  {
    year: "1985",
    title: "The First Loaf",
    description: "Opening our doors in Patiala with a focus on traditional breads and our now-famous Swiss rolls."
  },
  {
    year: "1998",
    title: "The Sweet Expansion",
    description: "Introducing our bespoke cake division, bringing high-end sugar craft to local weddings."
  },
  {
    year: "2015",
    title: "A Modern Heritage",
    description: "The next generation takes the helm, introducing modern flavors like Biscoff while fiercely protecting our heritage recipes."
  }
];

export const ourPhilosophy = {
  heading: "Our Philosophy",
  values: [
    {
      title: "Uncompromising Quality",
      description: "We refuse to cut corners. From pure butter to slow-proofed doughs, we respect the process."
    },
    {
      title: "Honoring Tradition",
      description: "Our core recipes remain unchanged since day one, ensuring the taste of nostalgia in every bite."
    },
    {
      title: "Community First",
      description: "We source locally, hire locally, and bake for the neighbors who have supported us for decades."
    }
  ]
};

export const kitchenStats = [
  { label: "Years of Heritage", value: "35+" },
  { label: "Custom Cakes Baked", value: "15,000+" },
  { label: "Local Wheat Sourced", value: "100%" }
];

export const meetTheBakers = {
  heading: "The Hands Behind the Craft",
  profiles: [
    {
      name: "Aman Verma",
      role: "Head Pastry Chef",
      specialty: "Mastering the perfect crumb structure."
    },
    {
      name: "Priya Singh",
      role: "Lead Cake Decorator",
      specialty: "Intricate floral sugar craft."
    },
    {
      name: "Raju Chacha",
      role: "Master Baker",
      specialty: "Guarding the secret whole-wheat recipe since 1990."
    }
  ]
};

export const communityInvolvement = {
  heading: "Rooted in Patiala",
  content: "Our success is the community's success. We are proud to support local schools with daily fresh bread donations and sponsor the annual heritage festival, ensuring the spirit of Punjab lives on in every celebration."
};

export const awardsAndRecognition = [
  "Voted Best Custom Cake Bakery - Punjab Heritage Awards 2022",
  "Featured in The Patiala Post for artisanal bread craftsmanship",
  "15+ Years continuous service excellence award"
];

export const joinOurFamilyCTA = {
  heading: "Passionate about baking?",
  cta: { label: "View Open Positions", href: "/careers" }
};
