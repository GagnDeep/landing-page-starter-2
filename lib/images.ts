export type UnsplashImage = {
  src: string;
  alt: string;
  credit: string;
};

// Helper function to build Unsplash URLs with standardized query params
const getUnsplashUrl = (id: string, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${width}&q=80&auto=format&fit=crop`;

export const siteImages: Record<string, UnsplashImage> = {
  // Hero & Backgrounds
  heroAmbiance: {
    src: getUnsplashUrl("1560066984-138dadb4c035", 1920), // Abstract warm tones / salon vibe
    alt: "Warm ambient salon lighting",
    credit: "Photo by Unsplash",
  },
  bohoTexture: {
    src: getUnsplashUrl("1600122247781-8077bc882799", 1920), // Organic texture, linen/sand
    alt: "Organic boho texture",
    credit: "Photo by Unsplash",
  },

  // Salon Interior (Sector 17, Chandigarh vibe)
  interiorMain: {
    src: getUnsplashUrl("1522337660859-02fbefca4702", 1200), // Modern salon interior
    alt: "The Boho Salon interior",
    credit: "Photo by Unsplash",
  },
  interiorDetail: {
    src: getUnsplashUrl("1633681926022-84c23e8cb2d6", 800), // Mirror/light detail
    alt: "Salon mirror and lighting detail",
    credit: "Photo by Unsplash",
  },

  // Nails
  nailsChrome: {
    src: getUnsplashUrl("1604654894610-df63bc536371", 800), // Close up of gel nails
    alt: "Chrome gel nail art",
    credit: "Photo by Unsplash",
  },
  nailsBiab: {
    src: getUnsplashUrl("1516975080664-ed2fc6a32937", 800), // Natural healthy nails
    alt: "BIAB natural nail overlay",
    credit: "Photo by Unsplash",
  },

  // Hair
  hairCurly: {
    src: getUnsplashUrl("1519699047748-de8e457a634e", 800), // Beautiful curly hair
    alt: "Advanced curly hair cut",
    credit: "Photo by Unsplash",
  },
  hairBalayage: {
    src: getUnsplashUrl("1521590832167-7bfc17484d8d", 800), // Balayage color
    alt: "Dimensional balayage color",
    credit: "Photo by Unsplash",
  },
  hairStylistWorking: {
    src: getUnsplashUrl("1562322140813-1b91eb9775f2", 1200), // Stylist cutting hair
    alt: "Senior stylist performing a precision cut",
    credit: "Photo by Unsplash",
  },

  // Bridal
  bridalPrep: {
    src: getUnsplashUrl("1583939003579-730e3918a45a", 1200), // Updated to a valid image
    alt: "Bridal preparation and styling",
    credit: "Photo by Unsplash",
  },
  bridalDetail: {
    src: getUnsplashUrl("1583939003579-730e3918a45a", 800), // Jewelry/makeup detail
    alt: "Bridal hair and makeup detail",
    credit: "Photo by Unsplash",
  },

  // Aesthetics & Spa
  aestheticsSkin: {
    src: getUnsplashUrl("1616394584738-fc6e612e71b9", 800), // Clean skincare / facial
    alt: "Hydrating facial treatment",
    credit: "Photo by Unsplash",
  },

  // Team / Portraits
  teamMember1: {
    src: getUnsplashUrl("1534528741775-53994a69daeb", 600), // Professional portrait
    alt: "Senior Stylist Portrait",
    credit: "Photo by Unsplash",
  },
  teamMember2: {
    src: getUnsplashUrl("1580489944761-15a19d654956", 600), // Professional portrait
    alt: "Master Nail Technician Portrait",
    credit: "Photo by Unsplash",
  },
  teamMember3: {
    src: getUnsplashUrl("1573496359142-b8d87734a5a2", 600), // Professional portrait
    alt: "Front Desk Manager Portrait",
    credit: "Photo by Unsplash",
  },
};
