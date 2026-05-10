export interface AboutContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
  };
  origin: {
    heading: string;
    story: string[];
  };
  mission: {
    heading: string;
    values: { title: string; description: string }[];
  };
  leadership: {
    heading: string;
    profiles: { name: string; role: string; description: string }[];
  };
  behindTheScenes: {
    heading: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  community: {
    heading: string;
    description: string;
  };
  awards: {
    heading: string;
    badgesAlt: string[];
  };
  cta: {
    heading: string;
    button: string;
  };
}

export const aboutContent: AboutContent = {
  meta: {
    title: "Our Heritage | Bawa Caterers Enterprises",
    description: "Discover the legacy of Bawa Caterers Enterprises. Decades of authentic Punjabi culinary excellence and grand hospitality in Patiala.",
  },
  hero: {
    headline: "Our Heritage, Your Feast",
  },
  origin: {
    heading: "A Legacy Built on Flavor",
    story: [
      "Founded on the principle that food is the heart of every great celebration, Bawa Caterers began as a humble kitchen dedicated to preserving authentic Punjabi recipes.",
      "Over the decades, we have grown into Patiala's premier catering service, renowned for our ability to scale traditional flavors to events of magnificent proportions without compromising on the soul of the dish."
    ],
  },
  mission: {
    heading: "The Pillars of Our Service",
    values: [
      { title: "Authenticity", description: "Uncompromising dedication to traditional recipes and genuine flavors." },
      { title: "Grandeur", description: "Elevating the dining experience through spectacular presentation and theatrical live stalls." },
      { title: "Hospitality", description: "Treating every guest with the warmth and respect customary of true Punjabi culture." }
    ]
  },
  leadership: {
    heading: "The Visionaries",
    profiles: [
      { name: "Gurpreet Bawa", role: "Founder & Chairman", description: "The driving force behind our commitment to culinary excellence." },
      { name: "Rajinder Bawa", role: "Operations Director", description: "Ensuring flawless execution at every scale." }
    ]
  },
  behindTheScenes: {
    heading: "The Engine of Grandeur",
    description: "Our state-of-the-art prep facilities are designed for scale and safety, allowing us to manage immense logistical challenges seamlessly.",
    stats: [
      { label: "Daily Prep Capacity", value: "5000+ Guests" },
      { label: "Fleet Vehicles", value: "12" },
      { label: "Full-Time Staff", value: "150+" }
    ]
  },
  community: {
    heading: "Rooted in Our Community",
    description: "We believe in giving back to Patiala. By sourcing locally and training aspiring culinary talents from the region, we strengthen the community that has supported us for generations."
  },
  awards: {
    heading: "Recognized Excellence",
    badgesAlt: ["Best Wedding Caterer Patiala 2023", "Culinary Heritage Award", "Excellence in Hospitality"]
  },
  cta: {
    heading: "Experience the Legacy Firsthand.",
    button: "Meet Us for a Tasting"
  }
};
