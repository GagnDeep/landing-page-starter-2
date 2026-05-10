export interface ImageRegistryEntry {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: {
    name: string;
    url: string;
  };
}

export type ImageKey =
  | 'heroBake'
  | 'swissRoll'
  | 'biscoffCake'
  | 'rusticBread'
  | 'ingredients'
  | 'bakerPortrait'
  | 'storefront'
  | 'customWeddingCake'
  | 'pastryDetails'
  | 'doughKneading'
  | 'bakeryInterior'
  | 'eventCatering';

export const images: Record<ImageKey, ImageRegistryEntry> = {
  heroBake: {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
    alt: "Freshly baked artisan bread emerging from a warm oven",
    width: 2072,
    height: 1381,
    credit: { name: "Nadya Spetnitskaya", url: "https://unsplash.com/@spetnitskaya" }
  },
  swissRoll: {
    src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2065&auto=format&fit=crop",
    alt: "A delicate slice of cream-filled Swiss roll pastry",
    width: 2065,
    height: 1376,
    credit: { name: "Ales Krivec", url: "https://unsplash.com/@aleskrivec" }
  },
  biscoffCake: {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop",
    alt: "Rich caramel and spiced biscuit layer cake",
    width: 1989,
    height: 1326,
    credit: { name: "American Heritage Chocolate", url: "https://unsplash.com/@americanheritagechocolate" }
  },
  rusticBread: {
    src: "https://images.unsplash.com/photo-1589367920969-ab8e050bfc17?q=80&w=1974&auto=format&fit=crop",
    alt: "Crusty whole wheat sourdough loaves",
    width: 1974,
    height: 1316,
    credit: { name: "Mariana Medvedeva", url: "https://unsplash.com/@marianamedvedeva" }
  },
  ingredients: {
    src: "https://images.unsplash.com/photo-1618214227702-0e5a6fcb9fb9?q=80&w=1974&auto=format&fit=crop",
    alt: "Rustic wheat flour and fresh eggs on a wooden block",
    width: 1974,
    height: 1316,
    credit: { name: "Eiliv Aceron", url: "https://unsplash.com/@fire_brace" }
  },
  bakerPortrait: {
    src: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=2070&auto=format&fit=crop",
    alt: "A focused baker shaping dough in a warm, flour-dusted kitchen",
    width: 2070,
    height: 1380,
    credit: { name: "Antony Trivet", url: "https://unsplash.com/@antonytrivet" }
  },
  storefront: {
    src: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?q=80&w=1974&auto=format&fit=crop",
    alt: "The warm, inviting facade of a local heritage bakery",
    width: 1974,
    height: 1316,
    credit: { name: "Roman Kraft", url: "https://unsplash.com/@romankraft" }
  },
  customWeddingCake: {
    src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=2070&auto=format&fit=crop",
    alt: "An elegant, multi-tiered bespoke wedding cake with floral decorations",
    width: 2070,
    height: 1380,
    credit: { name: "Tom Pumford", url: "https://unsplash.com/@tompumford" }
  },
  pastryDetails: {
    src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop",
    alt: "Macro shot of delicate pastry layers and powdered sugar",
    width: 2070,
    height: 1380,
    credit: { name: "Celine Ylmz", url: "https://unsplash.com/@celineylmz" }
  },
  doughKneading: {
    src: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1974&auto=format&fit=crop",
    alt: "Close up of hands kneading soft, elastic dough",
    width: 1974,
    height: 1316,
    credit: { name: "Vicky Ng", url: "https://unsplash.com/@vicky_ng" }
  },
  bakeryInterior: {
    src: "https://images.unsplash.com/photo-1563219757-bbdc3f92500e?q=80&w=2071&auto=format&fit=crop",
    alt: "A cozy, dimly lit bakery interior with fresh goods on display",
    width: 2071,
    height: 1381,
    credit: { name: "Farsai Chaikulngamdee", url: "https://unsplash.com/@farsai" }
  },
  eventCatering: {
    src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2065&auto=format&fit=crop",
    alt: "An elegant spread of curated desserts for an event",
    width: 2065,
    height: 1376,
    credit: { name: "Ales Krivec", url: "https://unsplash.com/@aleskrivec" }
  }
};
