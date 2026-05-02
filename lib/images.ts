export type ImageSlot =
  | "heroHome"
  | "heroAbout"
  | "heroCareers"
  | "heroContact"
  | "salonInterior"
  | "mobileSetup"
  | "products"
  | "bridal"
  | "hairCut"
  | "hairColor"
  | "nails"
  | "skincare"
  | "team1"
  | "team2"
  | "team3"
  | "blog1"
  | "blog2"
  | "blog3";

export const IMAGE_REGISTRY: Record<ImageSlot, { src: string; alt: string; credit?: string }> = {
  heroHome: {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
    alt: "Elegant modern salon interior",
    credit: "Guille Pozzi"
  },
  heroAbout: {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
    alt: "Stylist working on client's hair",
    credit: "Adam Winger"
  },
  heroCareers: {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=2000&auto=format&fit=crop",
    alt: "Styling tools and brushes",
    credit: "Bhonchal"
  },
  heroContact: {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop",
    alt: "Hands arranging flowers in a serene space",
    credit: "Chinh Le Duc"
  },
  salonInterior: {
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2111&auto=format&fit=crop",
    alt: "Pristine salon interior setup",
    credit: "Jason Leung"
  },
  mobileSetup: {
    src: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=2070&auto=format&fit=crop",
    alt: "Home interior prepared for beauty service",
    credit: "Spacejoy"
  },
  products: {
    src: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2053&auto=format&fit=crop",
    alt: "High-end beauty products on display",
    credit: "Kelly Sikkema"
  },
  bridal: {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    alt: "Bride getting ready",
    credit: "Photos by Lanty"
  },
  hairCut: {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
    alt: "Close up of perfect haircut",
    credit: "Guille Pozzi"
  },
  hairColor: {
    src: "https://images.unsplash.com/photo-1615397323180-28246f414a38?q=80&w=1974&auto=format&fit=crop",
    alt: "Balayage hair color",
    credit: "Awcreative"
  },
  nails: {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop", // Reusing an aesthetic image
    alt: "Editorial manicure",
    credit: "Adam Winger"
  },
  skincare: {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    alt: "Relaxing facial treatment",
    credit: "Raphael Lovaski"
  },
  team1: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    alt: "Portrait of Master Stylist",
    credit: "Aiony Haust"
  },
  team2: {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    alt: "Portrait of Senior Colorist",
    credit: "Craig McKay"
  },
  team3: {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
    alt: "Portrait of Lead Esthetician",
    credit: "Jurica Koletić"
  },
  blog1: {
    src: "https://images.unsplash.com/photo-1512496015851-a1c8ce9013de?q=80&w=1974&auto=format&fit=crop",
    alt: "Aesthetic skincare routine",
    credit: "Curology"
  },
  blog2: {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop",
    alt: "Luxurious bathroom setup",
    credit: "Curology"
  },
  blog3: {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop",
    alt: "Hair treatment products",
    credit: "Bhonchal"
  }
};