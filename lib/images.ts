export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  photographerUrl?: string;
}

// Elegant, feminine, premium-craft imagery focusing on boutique, fashion, embroidery, and atelier vibes.
export const siteImages: Record<string, SiteImage> = {
  heroAtmosphere: {
    src: "https://images.unsplash.com/photo-1583391733958-615fba3edbc3?auto=format&fit=crop&w=2000&q=80",
    alt: "Luxurious fabric draped elegantly with subtle light and shadow",
    width: 2000,
    height: 1333,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  featuredLook1: {
    src: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80",
    alt: "Midnight velvet suit with detailed zardozi work",
    width: 800,
    height: 1200,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  featuredLook2: {
    src: "https://images.unsplash.com/photo-1610030469983-98e550d615ef?auto=format&fit=crop&w=800&q=80",
    alt: "Ivory and pearl embellished Chanderi silk",
    width: 800,
    height: 1200,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  featuredLook3: {
    src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=80",
    alt: "Regal flowing anarkali with intricate threadwork",
    width: 1600,
    height: 1067,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  craftsmanshipFabric: {
    src: "https://images.unsplash.com/photo-1605335029013-1b997cc96120?auto=format&fit=crop&w=1000&q=80",
    alt: "Close up of premium silk fabric textures",
    width: 1000,
    height: 667,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  craftsmanshipEmbroidery: {
    src: "https://images.unsplash.com/photo-1551893478-d724eaf3eca9?auto=format&fit=crop&w=1000&q=80",
    alt: "Hands working on intricate traditional embroidery",
    width: 1000,
    height: 667,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  atelierParallax: {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2000&q=80",
    alt: "A sunlit tailor's workspace showcasing measuring tapes and fabrics",
    width: 2000,
    height: 1333,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  aboutHero: {
    src: "https://images.unsplash.com/photo-1590457632616-8c43314dfa48?auto=format&fit=crop&w=1600&q=80",
    alt: "Elegant mood setting of a fashion atelier with vintage accents",
    width: 1600,
    height: 1067,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  founderPortrait: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    alt: "Portrait of Pooja Avasthi, Founder and Creative Director",
    width: 800,
    height: 800,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  tailorPortrait: {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    alt: "Master tailor at work, measuring and cutting fabric",
    width: 800,
    height: 800,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  embroidererPortrait: {
    src: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
    alt: "Artisan focused on delicate hand embroidery",
    width: 800,
    height: 800,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  pricingHero: {
    src: "https://images.unsplash.com/photo-1603503378519-74d1bf4c5401?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxurious measuring tape and scissors resting on premium fabric",
    width: 1600,
    height: 1067,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  blogHero: {
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80",
    alt: "Editorial fashion flatlay with sketches and swatches",
    width: 1600,
    height: 1067,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  contactHero: {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    alt: "A serene, welcoming view of a boutique entrance or waiting area",
    width: 1600,
    height: 1067,
    credit: "Unsplash",
    photographerUrl: "https://unsplash.com"
  },
  socialGrid1: { src: "https://images.unsplash.com/photo-1613061527119-56809e29ddf8?auto=format&fit=crop&w=600&q=80", alt: "Social aesthetic 1", width: 600, height: 600 },
  socialGrid2: { src: "https://images.unsplash.com/photo-1584448098048-52fb82236a28?auto=format&fit=crop&w=600&q=80", alt: "Social aesthetic 2", width: 600, height: 600 },
  socialGrid3: { src: "https://images.unsplash.com/photo-1596434440539-78f921ab0dcf?auto=format&fit=crop&w=600&q=80", alt: "Social aesthetic 3", width: 600, height: 600 },
  socialGrid4: { src: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&w=600&q=80", alt: "Social aesthetic 4", width: 600, height: 600 },
};
