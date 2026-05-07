export const IMAGES = {
  home: {
    hero: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=2000", // Large, elegant dining setup or food
    philosophy: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1200", // Indian food preparation
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000", // Wedding/event venue
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000", // Rich food
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=1000", // Thali/traditional setup
    ],
    venues: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
    ]
  },
  about: {
    hero: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=2000", // Kitchen/cooking
    team: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800", // Chef 1
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800", // Chef 2
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800", // Chef 3
    ]
  },
  features: {
    hero: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=2000", // Elegant banquet
    weddings: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200", // Wedding detail
    corporate: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200", // Corporate event
  },
  blog: {
    hero: "https://images.unsplash.com/photo-1490818387583-1b057d5f9e45?auto=format&fit=crop&q=80&w=2000",
    posts: [
      "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    ]
  },
  general: {
    placeholder: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    pattern: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000", // Subtle texture
  }
} as const;

export type ImageSlots = typeof IMAGES;
