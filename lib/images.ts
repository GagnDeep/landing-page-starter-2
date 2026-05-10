export type RemoteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: {
    name: string;
    link: string;
  };
};

export const siteImages: Record<string, RemoteImage> = {
  heroCatering: {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    alt: "A grand buffet setup at a luxury wedding",
    width: 2070,
    height: 1380,
  },
  founderStory: {
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop",
    alt: "A portrait of an experienced chef in a kitchen",
    width: 1977,
    height: 2966,
  },
  amritsariKulcha: {
    src: "https://images.unsplash.com/photo-1626082929543-6bbf20ce5b0e?q=80&w=2071&auto=format&fit=crop",
    alt: "Freshly baked Indian bread",
    width: 2071,
    height: 1380,
  },
  dalMakhani: {
    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop",
    alt: "A warm bowl of dal makhani",
    width: 2070,
    height: 1380,
  },
  paneerButterMasala: {
    src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=1974&auto=format&fit=crop",
    alt: "Rich paneer butter masala in a traditional bowl",
    width: 1974,
    height: 2961,
  },
  grandWeddings: {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    alt: "Beautiful table setting at a wedding reception",
    width: 2069,
    height: 1379,
  },
  corporateBanquets: {
    src: "https://images.unsplash.com/photo-1530103862676-de889fa09800?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional corporate event food setup",
    width: 2070,
    height: 1380,
  },
  intimateGatherings: {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "People enjoying a warm meal at a family gathering",
    width: 2070,
    height: 1380,
  },
  liveCounters: {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    alt: "Chef preparing food at a live counter",
    width: 1974,
    height: 2961,
  },
  dessertBar: {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964&auto=format&fit=crop",
    alt: "Elegant dessert bar with traditional sweets",
    width: 1964,
    height: 2946,
  },
  staffUniform: {
    src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop",
    alt: "Waitstaff in uniform holding trays",
    width: 2070,
    height: 1380,
  },
  freshIngredients: {
    src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    alt: "Fresh vegetables and spices",
    width: 2070,
    height: 1380,
  },
  kitchenAction: {
    src: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop",
    alt: "Busy kitchen with chefs working",
    width: 2070,
    height: 1380,
  },
  blogWinterWedding: {
    src: "https://images.unsplash.com/photo-1628185590924-d2e82f507ba8?q=80&w=2070&auto=format&fit=crop",
    alt: "Warm winter wedding spread",
    width: 2070,
    height: 1380,
  },
};
