// Centralized image registry for all required photographic slots

export const images = {
  hero: {
    bestsellerCake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop", // Elegant dark chocolate cake
    weddingCake: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=2000&auto=format&fit=crop", // White tiered wedding cake
  },
  products: {
    vanillaBean: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop", // Clean slice of cake
    espressoTiramisu: "https://images.unsplash.com/photo-1571115177098-24c42ffdb9fa?q=80&w=800&auto=format&fit=crop", // Rich coffee dessert
    pistachioRose: "https://images.unsplash.com/photo-1621236378699-8597fa620f5b?q=80&w=800&auto=format&fit=crop", // Green/pink pastry
    macarons: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop", // Box of macarons
  },
  categories: {
    flowers: "https://images.unsplash.com/photo-1563241527-20045012521c?q=80&w=1200&auto=format&fit=crop", // High-end floral arrangement
    gifts: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop", // Elegant gift box
  },
  features: {
    midnightKitchen: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1600&auto=format&fit=crop", // Dark, atmospheric kitchen
    ingredients: "https://images.unsplash.com/photo-1615485925600-97237c4fa1ed?q=80&w=1200&auto=format&fit=crop", // Raw ingredients / flour dusting
    delivery: "https://images.unsplash.com/photo-1586041828039-b8d193d6d1ed?q=80&w=1200&auto=format&fit=crop", // Premium packaging/box
  },
  about: {
    founders: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?q=80&w=1000&auto=format&fit=crop", // Artisanal bakers
    craftsmanship: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?q=80&w=1200&auto=format&fit=crop", // Piting icing detail
  },
  blog: {
    trends: "https://images.unsplash.com/photo-1559553156-2e97137ea163?q=80&w=1000&auto=format&fit=crop", // Modern cake design
    weddings: "https://images.unsplash.com/photo-1610488257077-8025e1732e70?q=80&w=1000&auto=format&fit=crop", // Wedding reception detail
  }
} as const;
