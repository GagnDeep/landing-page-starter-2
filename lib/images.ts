export type ImageMeta = {
  src: string;
  alt: string;
  credit?: string;
  creditUrl?: string;
};

// Luxury destination wedding imagery from Unsplash
export const SITE_IMAGES = {
  // Global & Heroes
  heroHome: {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070",
    alt: "Elegant outdoor wedding setup with floral arches and string lights",
    credit: "Thomas William",
    creditUrl: "https://unsplash.com/@thomasw"
  },
  heroAbout: {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2069",
    alt: "Bride and groom holding hands in a sunlit forest",
    credit: "Scott Webb",
    creditUrl: "https://unsplash.com/@scottwebb"
  },
  heroFeatures: {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=2069",
    alt: "Luxury table setting with crystal glassware and floral centerpieces",
    credit: "Photos by Lanty",
    creditUrl: "https://unsplash.com/@photosbylanty"
  },
  heroPricing: {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=2070",
    alt: "Abstract soft focus of wedding dress fabric",
    credit: "Jonathan Borba",
    creditUrl: "https://unsplash.com/@jonathanborba"
  },
  heroContact: {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=2070",
    alt: "Two glasses of champagne clinking together",
    credit: "Alexander Naglestad",
    creditUrl: "https://unsplash.com/@alexb"
  },

  // Destinations Spotlight
  destLakeComo: {
    src: "https://images.unsplash.com/photo-1582202685938-1a5c68b7dbcd?auto=format&fit=crop&q=80&w=1974",
    alt: "Scenic view of Lake Como, Italy",
    credit: "Cristina Gottardi",
    creditUrl: "https://unsplash.com/@cristina_gottardi"
  },
  destProvence: {
    src: "https://images.unsplash.com/photo-1598284698544-e2b2fbcd0ed5?auto=format&fit=crop&q=80&w=1974",
    alt: "Lavender fields in Provence, France",
    credit: "Erol Ahmed",
    creditUrl: "https://unsplash.com/@erol"
  },
  destBali: {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1938",
    alt: "Lush green terraced fields in Bali",
    credit: "Geio Tischler",
    creditUrl: "https://unsplash.com/@geiotischler"
  },
  destSantorini: {
    src: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1964",
    alt: "Whitewashed architecture in Santorini overlooking the sea",
    credit: "Ryan Spencer",
    creditUrl: "https://unsplash.com/@ryanspencer"
  },
  destAmalfi: {
    src: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&q=80&w=2069",
    alt: "Coastal view of Positano on the Amalfi Coast",
    credit: "Ricardo Gomez Angel",
    creditUrl: "https://unsplash.com/@ripato"
  },

  // Services
  servicePlanning: {
    src: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&q=80&w=2072",
    alt: "Architectural blueprint and planning tools",
    credit: "Sven Mieke",
    creditUrl: "https://unsplash.com/@svenmieke"
  },
  serviceStyling: {
    src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=2070",
    alt: "Detailed floral arrangement and elegant table decor",
    credit: "Annie Gray",
    creditUrl: "https://unsplash.com/@anniegray"
  },
  serviceConcierge: {
    src: "https://images.unsplash.com/photo-1549467645-ec0566378e9b?auto=format&fit=crop&q=80&w=1974",
    alt: "Luxurious vintage car waiting for guests",
    credit: "Evgeny Tchebotarev",
    creditUrl: "https://unsplash.com/@tchebotarev"
  },

  // Team & Studio
  founderPortrait: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976",
    alt: "Portrait of the principal founder",
    credit: "Christina @ wocintechchat.com",
    creditUrl: "https://unsplash.com/@wocintechchat"
  },
  studioVibe: {
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000",
    alt: "Elegant modern studio interior with natural light",
    credit: "Jared Rice",
    creditUrl: "https://unsplash.com/@jaredrice"
  },
  teamCollaboration: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
    alt: "Team collaborating over design plans",
    credit: "Annie Spratt",
    creditUrl: "https://unsplash.com/@anniespratt"
  },

  // Miscellaneous / Generic
  weddingDetails1: {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=2070",
    alt: "Close up of wedding rings",
    credit: "Sandy Millar",
    creditUrl: "https://unsplash.com/@sandymillar"
  },
  weddingDetails2: {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2070",
    alt: "Elegant wedding cake with floral adornments",
    credit: "David Holifield",
    creditUrl: "https://unsplash.com/@davidholifield"
  },
  weddingDetails3: {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=2070",
    alt: "Bride holding a bouquet",
    credit: "Scott Webb",
    creditUrl: "https://unsplash.com/@scottwebb"
  },
  testimonialBg: {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070",
    alt: "Soft focused elegant lighting background",
    credit: "Thomas William",
    creditUrl: "https://unsplash.com/@thomasw"
  }
} as const;
