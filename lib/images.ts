export type ImageData = {
  url: string;
  alt: string;
  credit: {
    name: string;
    link: string;
  };
};

// Centralized image registry using Unsplash.
// Images are tailored for A-One Cakes: Custom 6-pound cakes, bakery scenes, night delivery (24/7), and gifts.
// We apply ?auto=format,compress&q=80 to all for optimization.

export const SITE_IMAGES: Record<string, ImageData> = {
  heroCake: {
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format,compress&q=80&w=1200&fit=crop",
    alt: "A beautifully decorated, premium large custom cake",
    credit: { name: "David Holifield", link: "https://unsplash.com/@davidholifield" },
  },
  midnightRescue: {
    url: "https://images.unsplash.com/photo-1507226983735-a838615193b0?auto=format,compress&q=80&w=1200&fit=crop",
    alt: "A dark, moody scene of a bakery box or gift ready for night delivery",
    credit: { name: "Katarzyna Grabowska", link: "https://unsplash.com/@katarzyna_grabowska" },
  },
  giftHamper: {
    url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format,compress&q=80&w=800&fit=crop",
    alt: "A premium gift hamper wrapped elegantly",
    credit: { name: "Kari Shea", link: "https://unsplash.com/@karishea" },
  },
  bakeryProcess: {
    url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format,compress&q=80&w=1200&fit=crop",
    alt: "Artisanal baker crafting a cake",
    credit: { name: "Ayo Ogunseinde", link: "https://unsplash.com/@armygreena" },
  },
  teamMember1: {
    url: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?auto=format,compress&q=80&w=600&fit=crop",
    alt: "A smiling baker in an apron",
    credit: { name: "Mateusz Feliksik", link: "https://unsplash.com/@mateusz_feliksik" },
  },
  dryFruits: {
    url: "https://images.unsplash.com/photo-1596482181290-7cb529452b41?auto=format,compress&q=80&w=800&fit=crop",
    alt: "An assortment of premium dry fruits and nuts",
    credit: { name: "Tom Hermans", link: "https://unsplash.com/@tomhermans" },
  },
  storefront: {
    url: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format,compress&q=80&w=1200&fit=crop",
    alt: "A warm, inviting storefront glowing at night",
    credit: { name: "Nick Hillier", link: "https://unsplash.com/@nhillier" },
  },
  blogCakeCare: {
    url: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format,compress&q=80&w=800&fit=crop",
    alt: "A slice of delicious cake on a plate",
    credit: { name: "American Heritage Chocolate", link: "https://unsplash.com/@americanheritagechocolate" },
  },
};
