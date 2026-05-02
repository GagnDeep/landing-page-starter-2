export interface ImageMeta {
  src: string;
  alt: string;
  credit?: {
    name: string;
    url: string;
  };
}

const buildUnsplashUrl = (id: string, width: number = 1920) => {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${width}`;
};

export const SITE_IMAGES = {
  hero: {
    main: {
      src: buildUnsplashUrl("1583316174577-7434fa5b3c58"), // Tailoring/Fabric
      alt: "Close up of tailoring craft with needle and fine thread",
      credit: { name: "Salvatore Ventura", url: "https://unsplash.com/photos/1583316174577-7434fa5b3c58" }
    },
    about: {
      src: buildUnsplashUrl("1575424909187-548480373e2d"), // Atelier/Workshop
      alt: "A heritage tailor workshop setting",
      credit: { name: "Ozgur Akbas", url: "https://unsplash.com/photos/1575424909187-548480373e2d" }
    }
  },
  collections: {
    sherwani1: {
      src: buildUnsplashUrl("1620245059639-661f0ce00ec5"), // Ornate fabric/embroidery
      alt: "Detailed zardosi embroidery on a bespoke sherwani",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    },
    kurta1: {
      src: buildUnsplashUrl("1512436991641-6745cdb1723f"), // Linen/Clean fabric texture
      alt: "Crisp white linen folds representing Muktsari kurta pajamas",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    },
    suit1: {
      src: buildUnsplashUrl("1594938298603-c8148c4dae35"), // Classic tailoring/suit
      alt: "Close up of a tailored suit lapel",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    }
  },
  process: {
    measuring: {
      src: buildUnsplashUrl("1584277264876-0f836da8d2c4"), // Tape measure
      alt: "A tailor's measuring tape on fine cloth",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    },
    cutting: {
      src: buildUnsplashUrl("1606118469956-628d09852f6b"), // Scissors/Cutting
      alt: "Shears cutting through high-quality fabric",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    },
    stitching: {
      src: buildUnsplashUrl("1556909114-f6e7af7d6876"), // Sewing machine/stitching
      alt: "Close-up of precise stitching on a sewing machine",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    }
  },
  team: {
    masterTailor: {
      src: buildUnsplashUrl("1530268729831-4b0b9e170218"), // Portrait of a craftsman
      alt: "Portrait of the Master Tailor in the workshop",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    }
  },
  blog: {
    post1: {
      src: buildUnsplashUrl("1592388056263-ee6f8df04e84"), // Velvet texture
      alt: "Deep blue velvet fabric texture",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    },
    post2: {
      src: buildUnsplashUrl("1629198688000-71f23e745b6e"), // Summer fabric/Linen
      alt: "Light, breathable summer fabrics folded neatly",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    },
    post3: {
      src: buildUnsplashUrl("1612085732128-4ce67ed0f443"), // Gold thread/embroidery
      alt: "Golden threads used for intricate zardosi work",
      credit: { name: "Unsplash", url: "https://unsplash.com" }
    }
  }
} as const;
