export interface UnsplashImage {
  src: string;
  alt: string;
  credit: {
    name: string;
    url: string;
  };
}

export type ImageCategory = 'hero' | 'weddings' | 'corporate' | 'private' | 'portraits' | 'details' | 'venues';

export const imageRegistry: Record<string, UnsplashImage> = {
  // Hero Images
  'hero-main': {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2070&q=80',
    alt: 'Elegant wedding reception table setup with warm lighting',
    credit: {
      name: 'Victoria Priessnitz',
      url: 'https://unsplash.com/@v_priessnitz',
    },
  },
  'hero-about': {
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=2070&q=80',
    alt: 'Detailed shot of floral arrangements and color palettes',
    credit: {
      name: 'Nadine Primeau',
      url: 'https://unsplash.com/@nadineprimeau',
    },
  },
  'hero-services': {
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2069&q=80',
    alt: 'Guests enjoying a toast at an elegant wedding',
    credit: {
      name: 'Alasdair Elmes',
      url: 'https://unsplash.com/@alasdairelmes',
    },
  },
  'hero-contact': {
    src: 'https://images.unsplash.com/photo-1522413452208-99673f5146b9?auto=format&fit=crop&w=2070&q=80',
    alt: 'A close-up of fine dining table settings',
    credit: {
      name: 'Nils Stahl',
      url: 'https://unsplash.com/@nilsstahl',
    },
  },

  // Service Categories
  'service-weddings': {
    src: 'https://images.unsplash.com/photo-1583939000155-e87f2da50fb2?auto=format&fit=crop&w=2070&q=80',
    alt: 'A scenic view of an elegant wedding location',
    credit: {
      name: 'Asad Photo Maldives',
      url: 'https://unsplash.com/@asadphotomaldives',
    },
  },
  'service-corporate': {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2070&q=80',
    alt: 'A sophisticated corporate gala setup with elegant table settings',
    credit: {
      name: 'Evangeline Shaw',
      url: 'https://unsplash.com/@evieshaffer',
    },
  },
  'service-private': {
    src: 'https://images.unsplash.com/photo-1606214555890-df457bceb813?auto=format&fit=crop&w=2070&q=80',
    alt: 'Vibrant decorations at a private milestone celebration',
    credit: {
      name: 'Rahul Mishra',
      url: 'https://unsplash.com/@rahulmishra',
    },
  },

  // Portraits & Team
  'founder-portrait': {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    alt: 'Portrait of Kavita, the founder of Blinking Eye Events',
    credit: {
      name: 'Christina @ wocintechchat.com',
      url: 'https://unsplash.com/@wocintechchat',
    },
  },
  'team-working': {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80',
    alt: 'The event planning team collaborating on a design',
    credit: {
      name: 'Jason Goodman',
      url: 'https://unsplash.com/@jasongoodman_youxventures',
    },
  },

  // Details & Textures
  'detail-florals': {
    src: 'https://images.unsplash.com/photo-1561181286-d3fee7d55ef8?auto=format&fit=crop&w=2000&q=80',
    alt: 'Close up of bespoke floral arrangements',
    credit: {
      name: 'Secret Garden',
      url: 'https://unsplash.com/@secretgarden',
    },
  },
  'detail-table': {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2000&q=80',
    alt: 'Elegant table setting detail',
    credit: {
      name: 'Thomas William',
      url: 'https://unsplash.com/@thomaswillm',
    },
  },
};

export function getImage(key: string): UnsplashImage {
  const image = imageRegistry[key];
  if (!image) {
    console.warn(`Image key "${key}" not found in registry. Falling back to default.`);
    return imageRegistry['hero-main'];
  }
  return image;
}

export function getAllCredits(): Array<{ name: string; url: string }> {
  const uniqueCredits = new Map<string, { name: string; url: string }>();
  Object.values(imageRegistry).forEach((image) => {
    uniqueCredits.set(image.credit.url, image.credit);
  });
  return Array.from(uniqueCredits.values());
}
