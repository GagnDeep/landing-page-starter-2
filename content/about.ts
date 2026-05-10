export interface SEO {
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface Milestone {
  year: string;
  event: string;
}

export interface ChefBio {
  name: string;
  role: string;
  bio: string;
}

export interface Guarantee {
  number: string;
  title: string;
  description: string;
}

export interface AboutContent {
  seo: SEO;
  hero: {
    headline: string;
  };
  genesis: {
    headline: string;
    paragraph1: string;
    paragraph2: string;
  };
  timeline: {
    headline: string;
    milestones: Milestone[];
  };
  foundersLetter: {
    quote: string;
    author: string;
    title: string;
  };
  coreValues: {
    headline: string;
    values: Value[];
  };
  ingredients: {
    headline: string;
    description: string;
  };
  team: {
    headline: string;
    chefs: ChefBio[];
  };
  eventStaff: {
    headline: string;
    description: string;
  };
  sustainability: {
    headline: string;
    description: string;
  };
  community: {
    headline: string;
    description: string;
  };
  standard: {
    headline: string;
    guarantees: Guarantee[];
  };
  testimonialDeepDive: {
    quote: string;
    story: string;
    author: string;
  };
  careersTeaser: {
    headline: string;
    description: string;
    ctaText: string;
  };
  primaryCta: {
    headline: string;
    ctaText: string;
  };
}

export const aboutContent: AboutContent = {
  seo: {
    title: "Our Heritage | Oasis Caterers",
    description: "Discover the legacy of Oasis Caterers. A family-run institution dedicated to culinary excellence and immaculate service in Patiala.",
  },
  hero: {
    headline: "Our Heritage",
  },
  genesis: {
    headline: "A Tradition of Taste",
    paragraph1: "Founded on the principles of uncompromising quality and deep respect for culinary tradition, Oasis Caterers began as a vision to elevate event dining in Patiala. We saw a need for a service that didn't just feed guests, but honored them through the craft of food.",
    paragraph2: "Today, under the careful stewardship of Robin and Aman, we have grown into a premier catering institution. Yet, we remain a family-run business at heart, infusing every grand gala and intimate gathering with the warmth and personal touch that defines our legacy.",
  },
  timeline: {
    headline: "The Journey",
    milestones: [
      { year: "2002", event: "The Foundation of Oasis Caterers" },
      { year: "2010", event: "Expanded to Grand Wedding Services" },
      { year: "2018", event: "Launched the 'Evening Fitting' Tasting Experience" },
      { year: "2023", event: "Recognized as Patiala's Premier Event Caterer" },
    ],
  },
  foundersLetter: {
    quote: "Our philosophy is simple: we do not just meet expectations; we make a promise to exceed them. Every plate is a reflection of our family's dedication to your celebration.",
    author: "Robin & Aman",
    title: "Founders, Oasis Caterers",
  },
  coreValues: {
    headline: "Our Principles",
    values: [
      { title: "Uncompromising Elegance", description: "In presentation, flavor, and service, we accept nothing less than extraordinary." },
      { title: "Bespoke Craftsmanship", description: "Every menu is uniquely tailored to the client's vision and palate." },
      { title: "Immaculate Service", description: "Our staff is trained to anticipate needs, offering silent, seamless attention." },
      { title: "Family Ethos", description: "We treat every event as if it were our own family's celebration." },
    ],
  },
  ingredients: {
    headline: "The Finest Elements",
    description: "True luxury begins at the source. We partner with the finest local artisans, farmers, and spice merchants to procure ingredients of unparalleled quality. Our philosophy dictates that exceptional cuisine cannot be forged without exceptional components.",
  },
  team: {
    headline: "The Culinary Visionaries",
    chefs: [
      { name: "Robin", role: "Executive Director", bio: "Overseeing the grand vision and ensuring the Oasis standard is met at every event." },
      { name: "Aman", role: "Culinary Director", bio: "The master of flavor, weaving traditional techniques with modern culinary arts." },
    ],
  },
  eventStaff: {
    headline: "The Ambassadors of Service",
    description: "Our front-of-house team is the heartbeat of the Oasis experience. Trained in the fine art of hospitality, they move with grace and purpose, ensuring that your 700 guests feel as though they are dining in an exclusive, private room.",
  },
  sustainability: {
    headline: "Responsible Luxury",
    description: "We are committed to ethical sourcing and minimizing food waste. We believe that true luxury must also be responsible to the community and the environment.",
  },
  community: {
    headline: "Rooted in Patiala",
    description: "Oasis Caterers is deeply woven into the fabric of Patiala. We actively support local culinary schools and initiatives that uplift our local food ecosystem.",
  },
  standard: {
    headline: "The Oasis Standard",
    guarantees: [
      { number: "01", title: "Flawless Execution", description: "Precision timing and impeccable delivery, regardless of scale." },
      { number: "02", title: "Absolute Freshness", description: "Ingredients prepared on-site, never compromised." },
      { number: "03", title: "Dedicated Concierge", description: "A single point of contact for your entire planning journey." },
    ],
  },
  testimonialDeepDive: {
    quote: "We entrusted Oasis with our daughter's wedding. It wasn't just catering; it was a masterpiece of hospitality.",
    story: "From the first tasting to the final dessert served to our 800 guests, the team at Oasis was a pillar of support and professionalism. The food was the talk of the town for weeks, but what truly moved us was the kindness and attentiveness of their staff.",
    author: "Mrs. K. Singh",
  },
  careersTeaser: {
    headline: "Join the Craft",
    description: "We are always seeking passionate artisans to join our culinary and service teams.",
    ctaText: "View Opportunities",
  },
  primaryCta: {
    headline: "Plan Your Next Event With Us",
    ctaText: "Schedule a Consultation",
  },
};