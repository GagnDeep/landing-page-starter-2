export const siteImages = {
  home: {
    heroFallback: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop", // Elegant event setup
    legacy: "https://images.unsplash.com/photo-1605287528171-88849767f332?q=80&w=2670&auto=format&fit=crop", // Traditional Indian cooking / brass vessels
    offerings: {
      feasts: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2670&auto=format&fit=crop", // Rich Indian food spread
      liveStalls: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop", // Chef cooking with fire
      desserts: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=2578&auto=format&fit=crop", // Indian sweets / Jalebi
    },
    gallery: [
      "https://images.unsplash.com/photo-1530047139082-54337d41fb38?q=80&w=2670&auto=format&fit=crop", // Decorated table
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop", // Spices
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2670&auto=format&fit=crop", // Grand venue
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2574&auto=format&fit=crop", // Traditional thali
    ],
    testimonialBackground: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2670&auto=format&fit=crop", // Chandelier / luxury lighting
    featuredEvent: {
      main: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2670&auto=format&fit=crop", // Sweeping venue shot
      detail1: "https://images.unsplash.com/photo-1414235077428-338988a2e8c0?q=80&w=2670&auto=format&fit=crop", // High-end plating
      detail2: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2670&auto=format&fit=crop", // Samosas/Chaat
    },
    chefs: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2568&auto=format&fit=crop", // Portrait 1
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2577&auto=format&fit=crop", // Portrait 2
    ],
    ingredients: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop", // Spices macro
  },
  about: {
    hero: "https://images.unsplash.com/photo-1505362892305-64906f3ce9ed?q=80&w=2574&auto=format&fit=crop", // Vintage/Heritage feel building
    founder: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=2574&auto=format&fit=crop", // Formal portrait silhouette or elegant figure
    sourcing: "https://images.unsplash.com/photo-1615486171448-4fbab8fb098d?q=80&w=2670&auto=format&fit=crop", // Fresh produce/markets
  },
  features: {
    hero: "https://images.unsplash.com/photo-1555244162-8338ca23b6b6?q=80&w=2670&auto=format&fit=crop", // Bustling kitchen
    liveStalls: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop", // Fire / action
    traditional: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=2668&auto=format&fit=crop", // Indian feast
    fusion: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2665&auto=format&fit=crop", // Modern plating
    tastings: "https://images.unsplash.com/photo-1510925528825-4c07b46d0dd2?q=80&w=2670&auto=format&fit=crop", // Elegant table set for two
  },
  pricing: {
    hero: "https://images.unsplash.com/photo-1507504031003-b417242a53b4?q=80&w=2670&auto=format&fit=crop", // Quiet, elegant place setting
  },
  blog: {
    hero: "https://images.unsplash.com/photo-1478144596228-3e5e48ff2f59?q=80&w=2670&auto=format&fit=crop", // Editorial food shot
    thumbnails: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2669&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop",
    ]
  },
  contact: {
    hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop", // Meeting / collaboration
  },
  careers: {
    hero: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2577&auto=format&fit=crop", // Kitchen team
  }
} as const;

export type SiteImages = typeof siteImages;
