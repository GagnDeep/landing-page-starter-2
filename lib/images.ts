// Centralized registry for all Unsplash imagery used across the site
// Includes direct URLs and attribution to satisfy Unsplash license requirements.

export const siteImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1581452202619-3c726354fa40?q=80&w=2800&auto=format&fit=crop",
    alt: "Luxurious bespoke embroidered fabric",
    credit: "Photo by Tofin Creations on Unsplash",
  },
  about: {
    hero: {
      src: "https://images.unsplash.com/photo-1590401886899-73fb61a3378b?q=80&w=2000&auto=format&fit=crop",
      alt: "Tailor carefully adjusting a garment",
      credit: "Photo by Rio Lecatompessy on Unsplash",
    },
    atelier: {
      src: "https://images.unsplash.com/photo-1558227096-7c0800b73c4f?q=80&w=1800&auto=format&fit=crop",
      alt: "A beautifully lit designer boutique workspace",
      credit: "Photo by Clark Street Mercantile on Unsplash",
    },
  },
  features: {
    tailoring: {
      src: "https://images.unsplash.com/photo-1605635833446-2d3eecc99e55?q=80&w=1600&auto=format&fit=crop",
      alt: "Master tailor measuring a bespoke suit",
      credit: "Photo by Javier Reyes on Unsplash",
    },
    embroidery: {
      src: "https://images.unsplash.com/photo-1589416558230-07e155c56d78?q=80&w=1600&auto=format&fit=crop",
      alt: "Close up of intricate threadwork and beads",
      credit: "Photo by Nareeta Martin on Unsplash",
    },
    bridal: {
      src: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=1600&auto=format&fit=crop",
      alt: "Elegant bridal wear detail",
      credit: "Photo by Shagun on Unsplash",
    },
  },
  pricing: {
    hero: {
      src: "https://images.unsplash.com/photo-1563603357963-439f52473623?q=80&w=2000&auto=format&fit=crop",
      alt: "Rolls of premium silk and cotton fabrics",
      credit: "Photo by Karly Jones on Unsplash",
    },
  },
  blog: {
    hero: {
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop",
      alt: "Fashion editorial spread",
      credit: "Photo by Flaunter on Unsplash",
    },
  },
  contact: {
    hero: {
      src: "https://images.unsplash.com/photo-1594913222387-a2f01f80214a?q=80&w=2000&auto=format&fit=crop",
      alt: "A warm, welcoming boutique storefront",
      credit: "Photo by Ashim D'Silva on Unsplash",
    },
  },
  careers: {
    hero: {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop",
      alt: "Team of artisans working collaboratively",
      credit: "Photo by ThisisEngineering RAEng on Unsplash",
    },
  },
} as const;

export type SiteImage = {
  src: string;
  alt: string;
  credit: string;
};
