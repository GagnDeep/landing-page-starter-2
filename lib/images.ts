export type ImageEntry = {
  url: string;
  alt: string;
  credit: {
    name: string;
    link: string;
  };
};

export const ImageRegistry = {
  hero: {
    arrival: {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80&auto=format&fit=crop",
      alt: "A grand luxury wedding setup with golden lighting and floral decor",
      credit: { name: "Alasdair Elmes", link: "https://unsplash.com/@alasdairelmes" }
    },
    about: {
      url: "https://images.unsplash.com/photo-1542314831-c6a4d14213d2?w=1920&q=80&auto=format&fit=crop",
      alt: "A stunning traditional Indian wedding feast setup",
      credit: { name: "Nitin Rajput", link: "https://unsplash.com/@nitinrajput" }
    }
  },
  cuisine: {
    soyaChaap: {
      url: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1080&q=80&auto=format&fit=crop",
      alt: "Tandoori grilled cuisine skewered over charcoal",
      credit: { name: "Shreyak Singh", link: "https://unsplash.com/@shreyaksingh" }
    },
    dalMakhani: {
      url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1080&q=80&auto=format&fit=crop",
      alt: "Slow-cooked lentils in a rich, creamy sauce",
      credit: { name: "Sahand Babali", link: "https://unsplash.com/@sahandbabali" }
    },
    mithai: {
      url: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=1080&q=80&auto=format&fit=crop",
      alt: "An assortment of colorful traditional Indian sweets with silver leaf",
      credit: { name: "Jyoti Singh", link: "https://unsplash.com/@jyotisingh" }
    }
  },
  events: {
    sangeet: {
      url: "https://images.unsplash.com/photo-1533144177651-7f0abdb053eb?w=1080&q=80&auto=format&fit=crop",
      alt: "Vibrant Sangeet decor and traditional lighting",
      credit: { name: "Srinivas J", link: "https://unsplash.com/@srinivasj" }
    },
    reception: {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1080&q=80&auto=format&fit=crop",
      alt: "Sophisticated grand reception banquet hall",
      credit: { name: "Mitchell Luo", link: "https://unsplash.com/@mitchel3uo" }
    }
  },
  features: {
    liveCounters: {
      url: "https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=1080&q=80&auto=format&fit=crop",
      alt: "Chefs preparing food at interactive live cooking stations",
      credit: { name: "Jason Leung", link: "https://unsplash.com/@ninjason" }
    },
    pangat: {
      url: "https://images.unsplash.com/photo-1542848986-a07747e44a47?w=1080&q=80&auto=format&fit=crop",
      alt: "Elegant table setting reflecting a traditional seated royal meal",
      credit: { name: "Prabhash", link: "https://unsplash.com/@prabhash" }
    }
  },
  ambiance: {
    diningHall: {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80&auto=format&fit=crop",
      alt: "Parallax view of a beautifully lit, grand dining hall",
      credit: { name: "Andreas M", link: "https://unsplash.com/@andreasm" }
    }
  },
  team: {
    chef: {
      url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1080&q=80&auto=format&fit=crop",
      alt: "A focused executive chef in the kitchen",
      credit: { name: "Jeff Sheldon", link: "https://unsplash.com/@ugmonk" }
    }
  },
  avatars: [
    { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&auto=format&fit=crop", alt: "Client Avatar 1", credit: { name: "Aiony Haust", link: "https://unsplash.com/@aiony" } },
    { url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop", alt: "Client Avatar 2", credit: { name: "Jurica Koletić", link: "https://unsplash.com/@juricakoletic" } },
    { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop", alt: "Client Avatar 3", credit: { name: "Michael Dam", link: "https://unsplash.com/@michaeldam" } },
    { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop", alt: "Client Avatar 4", credit: { name: "Joseph Gonzalez", link: "https://unsplash.com/@joeyy" } }
  ]
} as const;
