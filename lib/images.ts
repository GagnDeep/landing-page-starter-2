export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  photographerUrl: string;
};

// Strongly typed registry for all images used across the application.
// We strictly use direct Unsplash URLs configured in next.config.mjs.

export const ImageRegistry: Record<string, ImageType> = {
  // Global & Brand
  LogoPlaceholder: {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800",
    alt: "Royal Flower Decoration Brand Floral",
    width: 800,
    height: 800,
    credit: "Evie S.",
    photographerUrl: "https://unsplash.com/@evieshaffer"
  },

  // Home Page
  HomeHeroBackground: {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000",
    alt: "Elegant wedding decor with soft lighting",
    width: 2000,
    height: 1333,
    credit: "Photos by Lanty",
    photographerUrl: "https://unsplash.com/@photosbylanty"
  },
  HomeServiceAnandKaraj: {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
    alt: "Traditional Anand Karaj floral decor",
    width: 1200,
    height: 800,
    credit: "Suresh Kumar",
    photographerUrl: "https://unsplash.com/@sureshkumar"
  },
  HomeServiceReception: {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1200",
    alt: "Lavish reception table centerpieces",
    width: 1200,
    height: 800,
    credit: "Jeremy Wong Weddings",
    photographerUrl: "https://unsplash.com/@jeremywongweddings"
  },
  HomeServicePreWedding: {
    src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf4?auto=format&fit=crop&q=80&w=1200",
    alt: "Vibrant Haldi and Mehndi decor",
    width: 1200,
    height: 800,
    credit: "Vikram Singh",
    photographerUrl: "https://unsplash.com/@vikramsingh"
  },
  HomeSignatureFloral: {
    src: "https://images.unsplash.com/photo-1561181286-d3fee7d55ef6?auto=format&fit=crop&q=80&w=1600",
    alt: "Signature premium floral bouquet",
    width: 1600,
    height: 1067,
    credit: "Secret Garden",
    photographerUrl: "https://unsplash.com/@secretgarden"
  },

  // About Page
  AboutHeroSplit: {
    src: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=1200",
    alt: "Floral artisans arranging fresh blooms",
    width: 1200,
    height: 1600,
    credit: "Zoe Schaeffer",
    photographerUrl: "https://unsplash.com/@zoeschaeffer"
  },
  AboutTeamAli: {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    alt: "Ali Bhai - Founder",
    width: 800,
    height: 800,
    credit: "Jurica Koletić",
    photographerUrl: "https://unsplash.com/@juricakoletic"
  },
  AboutTeamFeroz: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    alt: "Feroz Bhai - Co-founder",
    width: 800,
    height: 800,
    credit: "Mubariz Mehdizadeh",
    photographerUrl: "https://unsplash.com/@mubariz"
  },
  AboutGallery1: {
    src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    alt: "Behind the scenes floral setup",
    width: 800,
    height: 1000,
    credit: "Nadine Primeau",
    photographerUrl: "https://unsplash.com/@nadineprimeau"
  },
  AboutGallery2: {
    src: "https://images.unsplash.com/photo-1523694998246-0b1d31061f00?auto=format&fit=crop&q=80&w=800",
    alt: "Selecting fresh local blooms",
    width: 800,
    height: 800,
    credit: "Yoksel Zok",
    photographerUrl: "https://unsplash.com/@yoksel"
  },
  AboutGallery3: {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
    alt: "Final touches on wedding decor",
    width: 800,
    height: 1200,
    credit: "Alisa Anton",
    photographerUrl: "https://unsplash.com/@alisaanton"
  },

  // Features Page
  FeaturesHero: {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000",
    alt: "Bespoke event decor overview",
    width: 2000,
    height: 1000,
    credit: "Thomas William",
    photographerUrl: "https://unsplash.com/@thomasw"
  },
  FeaturesInstallations: {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600",
    alt: "Massive hanging floral installation",
    width: 1600,
    height: 900,
    credit: "Annie Spratt",
    photographerUrl: "https://unsplash.com/@anniespratt"
  },

  // Blog / Contact / General Utility
  JournalHero: {
    src: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?auto=format&fit=crop&q=80&w=1600",
    alt: "Journal and inspiration",
    width: 1600,
    height: 800,
    credit: "Jessica Ruscello",
    photographerUrl: "https://unsplash.com/@jruscello"
  },
  ContactHero: {
    src: "https://images.unsplash.com/photo-1457089328109-e5d9ca49ee09?auto=format&fit=crop&q=80&w=1600",
    alt: "Soft floral background for contact",
    width: 1600,
    height: 600,
    credit: "Karolina Grabowska",
    photographerUrl: "https://unsplash.com/@karolinagrabowska"
  },
  ContactDecorative: {
    src: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&q=80&w=1200",
    alt: "Beautiful floral arrangement detail",
    width: 1200,
    height: 800,
    credit: "Georgia de Lotz",
    photographerUrl: "https://unsplash.com/@georgiadelotz"
  },
  CareersHero: {
    src: "https://images.unsplash.com/photo-1589088656828-e4905df7598c?auto=format&fit=crop&q=80&w=1600",
    alt: "Team working together on an event",
    width: 1600,
    height: 800,
    credit: "Priscilla Du Preez",
    photographerUrl: "https://unsplash.com/@priscilladupreez"
  },

  // Avatars for Testimonial Stack
  Avatar1: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    alt: "Client 1", width: 150, height: 150,
    credit: "Ayo Ogunseinde", photographerUrl: "https://unsplash.com/@armedshutter"
  },
  Avatar2: {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    alt: "Client 2", width: 150, height: 150,
    credit: "Craig McKay", photographerUrl: "https://unsplash.com/@craigmckay"
  },
  Avatar3: {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    alt: "Client 3", width: 150, height: 150,
    credit: "Michael Dam", photographerUrl: "https://unsplash.com/@michaeldam"
  },
  Avatar4: {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
    alt: "Client 4", width: 150, height: 150,
    credit: "Aiony Haust", photographerUrl: "https://unsplash.com/@aiony"
  },
};
