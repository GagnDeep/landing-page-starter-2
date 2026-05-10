// Centralized, type-safe image registry utilizing Unsplash assets for the A2Zee Events project.
// All images must be consumed through this registry to ensure consistency and licensing compliance.

export type ImageAsset = {
  src: string;
  alt: string;
  credit?: string; // Optional photographer credit for Unsplash compliance
};

export const IMAGES: Record<string, ImageAsset> = {
  // Hero & Cinematic Overviews
  heroMain: {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop",
    alt: "Elegant destination wedding setup with floral arches over a coastal backdrop",
    credit: "Jeremy Wong Weddings",
  },
  heroAbout: {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2940&auto=format&fit=crop",
    alt: "Candid moment of a couple at a luxury resort",
    credit: "Samantha Gades",
  },
  heroServices: {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop",
    alt: "Event production team setting up lighting and structural rigs",
    credit: "Thomas William",
  },

  // Destinations
  destGoa: {
    src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2874&auto=format&fit=crop",
    alt: "Luxury coastal resort pool area at sunset in Goa",
    credit: "Sumit Chinchane",
  },
  destUdaipur: {
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2827&auto=format&fit=crop",
    alt: "Historic Indian palace architecture across a lake in Udaipur",
    credit: "Ankit Jain",
  },
  destLakeComo: {
    src: "https://images.unsplash.com/photo-1587825027984-c4e50289c4f5?q=80&w=2940&auto=format&fit=crop",
    alt: "Classic Italian villa overlooking Lake Como",
    credit: "Luca Micheli",
  },

  // Aesthetics & Details (Masonry Grid)
  detailTableSetting: {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2940&auto=format&fit=crop",
    alt: "Bespoke luxury table setting with fine crystal and floral centerpieces",
    credit: "Photos by Lanty",
  },
  detailFlorals: {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2940&auto=format&fit=crop",
    alt: "Intricate floral arrangement featuring rare blooms",
    credit: "Leonardo Wong",
  },
  detailLighting: {
    src: "https://images.unsplash.com/photo-1505944357431-27579db47558?q=80&w=2946&auto=format&fit=crop",
    alt: "Elegant ambient lighting design in a grand hall",
    credit: "Chuttersnap",
  },

  // Team & Founder
  founderPortrait: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2776&auto=format&fit=crop",
    alt: "Professional editorial portrait of Honey Walia in a tailored suit",
    credit: "Christina @ wocintechchat.com",
  },

  // Blog/Journal
  journalArticle1: {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop",
    alt: "Bride and groom walking near a coastal cliff",
    credit: "Trung Nguyen",
  },
  journalArticle2: {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2938&auto=format&fit=crop",
    alt: "Logistical planning documents and blueprints on a desk",
    credit: "Green Chameleon",
  },
  journalArticle3: {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2786&auto=format&fit=crop",
    alt: "High-contrast editorial wedding detail shot",
    credit: "Nick Karvounis",
  },

  // Miscellaneous
  moodReelFallback: {
    src: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2938&auto=format&fit=crop",
    alt: "Cinematic shot of a grand ballroom setup",
    credit: "Alasdair Elmes",
  }
} as const;
