export interface ImageAsset {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

export const imageRegistry: Record<string, ImageAsset> = {
  heroFallback: {
    src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2000&auto=format&fit=crop",
    alt: "Assortment of traditional Indian sweets and freshly baked cookies on a dark rustic table",
    credit: "The Matter of Food",
    creditUrl: "https://unsplash.com/@thematteroffood",
  },
  traditionalSweets: {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1500&auto=format&fit=crop",
    alt: "Close up of bright yellow and orange Indian sweets like ladoo and jalebi",
    credit: "Sanjeevan Satheesh",
    creditUrl: "https://unsplash.com/@sanjeevan",
  },
  freshBakery: {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1500&auto=format&fit=crop",
    alt: "Freshly baked artisan bread and croissants cooling on a wire rack",
    credit: "Wesual Click",
    creditUrl: "https://unsplash.com/@wesual",
  },
  weddingBox: {
    src: "https://images.unsplash.com/photo-1628198759020-f1db12330a6c?q=80&w=1500&auto=format&fit=crop",
    alt: "Elegant gift box with a ribbon containing premium treats",
    credit: "Artem Kniaz",
    creditUrl: "https://unsplash.com/@artemkniaz",
  },
  customCake: {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1500&auto=format&fit=crop",
    alt: "A beautifully decorated, multi-tiered celebration cake with floral accents",
    credit: "Alina Karpenko",
    creditUrl: "https://unsplash.com/@alinakarpenko",
  },
  artisanalProcess: {
    src: "https://images.unsplash.com/photo-1605515257906-896860d5b1bf?q=80&w=1500&auto=format&fit=crop",
    alt: "Chef carefully arranging and preparing a delicate pastry dessert",
    credit: "Hanna Balan",
    creditUrl: "https://unsplash.com/@hannahbalan",
  },
  storefront: {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1500&auto=format&fit=crop",
    alt: "Warmly lit interior of a cozy, heritage-style bakery cafe",
    credit: "Rod Long",
    creditUrl: "https://unsplash.com/@rodlong",
  },
  founder: {
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1500&auto=format&fit=crop",
    alt: "Portrait of an experienced, smiling chef in a kitchen setting",
    credit: "Jeff Siepman",
    creditUrl: "https://unsplash.com/@jeffsiepman",
  },
  ingredients: {
    src: "https://images.unsplash.com/photo-1596647466589-f5385d8869c4?q=80&w=1500&auto=format&fit=crop",
    alt: "A rustic spread of pure milk, roasted nuts, and aromatic spices",
    credit: "Monika Grabkowska",
    creditUrl: "https://unsplash.com/@moniqa",
  },
  teamWorking: {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1500&auto=format&fit=crop",
    alt: "A busy commercial kitchen with chefs working closely together",
    credit: "Rene Porter",
    creditUrl: "https://unsplash.com/@reneporter",
  },
  gheePour: {
    src: "https://images.unsplash.com/photo-1616499380629-87588e7b952a?q=80&w=1500&auto=format&fit=crop",
    alt: "Golden, pure melted butter pouring into a copper pot",
    credit: "Deepal",
    creditUrl: "https://unsplash.com/@deepals",
  },
  blogSweetsHistory: {
    src: "https://images.unsplash.com/photo-1634560756779-7a716c02685c?q=80&w=1500&auto=format&fit=crop",
    alt: "A traditional spread of festive Indian sweets for Diwali",
    credit: "Bite Sized Cooking",
    creditUrl: "https://unsplash.com/@bitesizedcooking",
  },
  blogKitchen: {
    src: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cb?q=80&w=1500&auto=format&fit=crop",
    alt: "Close up of flour dusting a wooden table with rolling pins",
    credit: "Nadine Primeau",
    creditUrl: "https://unsplash.com/@nadineprimeau",
  },
  cateringEvent: {
    src: "https://images.unsplash.com/photo-1519167758481-83f5c0744655?q=80&w=1500&auto=format&fit=crop",
    alt: "Elegant catering setup at a grand wedding event",
    credit: "Photos by Lanty",
    creditUrl: "https://unsplash.com/@photos_by_lanty",
  }
};
