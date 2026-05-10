export interface ImageAsset {
  src: string;
  alt: string;
  credit?: string;
}

export const IMAGES: Record<string, ImageAsset> = {
  // Hero & Global
  heroMain: {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", // Elegant wedding setup
    alt: "Spectacular royal wedding setup at dusk",
    credit: "Unsplash",
  },
  heroSecondary: {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", // Couple holding hands / rings
    alt: "Close up of couple holding hands",
  },

  // Decor Gallery
  decorFloral: {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop", // Floral arrangement
    alt: "Lush floral decor and table arrangement",
  },
  decorStage: {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop", // Lighting / stage
    alt: "Elegant lighting and stage setup for wedding reception",
  },
  decorDetails: {
    src: "https://images.unsplash.com/photo-1522413452208-99690151f464?q=80&w=2070&auto=format&fit=crop", // Table settings
    alt: "Meticulous table setting with gold accents",
  },

  // Culinary / Bawa Caterers Heritage
  culinaryThali: {
    src: "https://images.unsplash.com/photo-1626779836855-8d59187163c4?q=80&w=2071&auto=format&fit=crop", // Rich Indian food
    alt: "Rich and authentic royal Punjabi culinary spread",
  },
  culinaryStall: {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop", // Catering setup / chef
    alt: "Live catering stall with exquisite food presentation",
  },

  // Team & Founder
  teamFounder: {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop", // Professional male portrait (proxy for Mr. Negi)
    alt: "Portrait of the founder in a bespoke suit",
  },
  teamAction: {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", // Event planners
    alt: "Event planners working diligently behind the scenes",
  },

  // Locations / Destination
  locationUdaipur: {
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2027&auto=format&fit=crop", // Palace in Udaipur
    alt: "Majestic palace venue in Udaipur",
  },
  locationGoa: {
    src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop", // Beachside resort
    alt: "Serene beachside resort in Goa",
  },

  // Blog / Journal
  blogPost1: {
    src: "https://images.unsplash.com/photo-1583939008285-d84db8e10b2f?q=80&w=1974&auto=format&fit=crop", // Traditional Indian wedding
    alt: "Traditional Indian bride and groom",
  },
  blogPost2: {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop", // Tech / remote work / planning
    alt: "Remote planning and coordination across time zones",
  },

  // Testimonial / Real Couple
  realCouple: {
    src: "https://images.unsplash.com/photo-1583939411023-14783179e581?q=80&w=2070&auto=format&fit=crop", // Happy couple
    alt: "Joyful couple celebrating their destination wedding",
  }
};
