export type UnsplashImage = {
  url: string;
  alt: string;
  credit: string;
};

export const images: Record<string, UnsplashImage> = {
  // Home Page
  homeHero: {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000",
    alt: "Cinematic view of an elegant wedding table setting in a grand hall.",
    credit: "Photo by Photos by Lanty on Unsplash",
  },
  homeDestinationComo: {
    url: "https://images.unsplash.com/photo-1601004128945-81ddf59f6368?auto=format&fit=crop&q=80&w=800",
    alt: "Scenic view of Lake Como, Italy.",
    credit: "Photo by Alessio Rovera on Unsplash",
  },
  homeDestinationKyoto: {
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    alt: "Traditional architecture in Kyoto, Japan.",
    credit: "Photo by Su San Lee on Unsplash",
  },
  homeDestinationProvence: {
    url: "https://images.unsplash.com/photo-1482860829828-568b2f90117b?auto=format&fit=crop&q=80&w=800",
    alt: "Sun-drenched vineyards and rolling hills in Provence, France.",
    credit: "Photo by John Doe on Unsplash", // placeholder credit
  },
  homeDestinationUdaipur: {
    url: "https://images.unsplash.com/photo-1598282361661-841f3e7bcebb?auto=format&fit=crop&q=80&w=800",
    alt: "Regal architecture in Udaipur, India.",
    credit: "Photo by Frugal Flyer on Unsplash",
  },
  homeFeaturedWeddingMain: {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1600",
    alt: "Extravagant outdoor wedding setup.",
    credit: "Photo by Samantha Gades on Unsplash",
  },
  homeFeaturedWeddingDetail1: {
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
    alt: "Close-up of bespoke floral arrangements.",
    credit: "Photo by Kats Weil on Unsplash",
  },
  homeFeaturedWeddingDetail2: {
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600",
    alt: "Elegant table setting close-up.",
    credit: "Photo by Thomas William on Unsplash",
  },
  homeFeaturedWeddingDetail3: {
    url: "https://images.unsplash.com/photo-1522067751935-ee16f1958619?auto=format&fit=crop&q=80&w=600",
    alt: "Champagne pouring detail shot.",
    credit: "Photo by Billy Pasco on Unsplash",
  },
  homeServiceFullPlanning: {
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    alt: "Planner arranging details at a luxury event.",
    credit: "Photo by Asad Photo Maldives on Unsplash",
  },
  homeServiceDesign: {
    url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    alt: "Artistic overhead shot of an event layout.",
    credit: "Photo by chuttersnap on Unsplash",
  },
  homeAtmosphereStrip: {
    url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=2000",
    alt: "Moody, atmospheric shot of a wedding reception.",
    credit: "Photo by Jared Rice on Unsplash",
  },

  // About Page
  aboutHero: {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
    alt: "Event team coordinating behind the scenes.",
    credit: "Photo by Antenna on Unsplash",
  },
  aboutFounder: {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    alt: "Portrait of Elena Rossi, Founder.",
    credit: "Photo by Christina @ wocintechchat.com on Unsplash",
  },
  aboutTeamJulian: {
    url: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
    alt: "Portrait of Julian Sterling.",
    credit: "Photo by Austin Distel on Unsplash",
  },
  aboutTeamAmara: {
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    alt: "Portrait of Amara Singh.",
    credit: "Photo by Jurica Koletić on Unsplash",
  },

  // Features Page
  featuresHero: {
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1600",
    alt: "Moody, grand architectural space set for an event.",
    credit: "Photo by Dan LeFebvre on Unsplash",
  },
  featuresFullService: {
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    alt: "Elegant wedding ceremony setup.",
    credit: "Photo by Jeremy Wong Weddings on Unsplash",
  },
  featuresDesignStyling: {
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000",
    alt: "Close-up of bespoke table styling.",
    credit: "Photo by Thomas William on Unsplash",
  },

  // Pricing Page
  pricingHero: {
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1600",
    alt: "Stark, minimalist architectural detail.",
    credit: "Photo by Scott Webb on Unsplash",
  },

  // Blog Page
  blogHero: {
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1600",
    alt: "Featured real wedding article cover.",
    credit: "Photo by Victoria Priessnitz on Unsplash",
  },
  blogArticle1: {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    alt: "Real wedding in Florence.",
    credit: "Photo by Photos by Lanty on Unsplash",
  },
  blogArticle2: {
    url: "https://images.unsplash.com/photo-1522067751935-ee16f1958619?auto=format&fit=crop&q=80&w=800",
    alt: "Table setting architecture.",
    credit: "Photo by Billy Pasco on Unsplash",
  },
  blogArticle3: {
    url: "https://images.unsplash.com/photo-1601004128945-81ddf59f6368?auto=format&fit=crop&q=80&w=800",
    alt: "Italy's hidden estates.",
    credit: "Photo by Alessio Rovera on Unsplash",
  },
  blogArticle4: {
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    alt: "Remote island buyout logistics.",
    credit: "Photo by Asad Photo Maldives on Unsplash",
  },

  // Contact Page
  contactHero: {
    url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80&w=1000",
    alt: "Elegant stationery and fountain pen.",
    credit: "Photo by Kelly Sikkema on Unsplash",
  },

  // Careers Page
  careersHero: {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
    alt: "Dynamic team collaborating.",
    credit: "Photo by Annie Spratt on Unsplash",
  },
};
