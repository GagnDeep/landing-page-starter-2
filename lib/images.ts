export interface ImageMeta {
  url: string;
  alt: string;
  photographer: string;
  creditUrl: string;
}

export const IMAGES = {
  home: {
    hero: {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop",
      alt: "Elegant wedding feast setup",
      photographer: "Mithul Varshan",
      creditUrl: "https://unsplash.com/@mithulvarshan",
    },
    ethos: {
      url: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1000&auto=format&fit=crop",
      alt: "Royal Indian Thali and spices",
      photographer: "Rohan G",
      creditUrl: "https://unsplash.com/@rohang",
    },
    liveStall: {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop",
      alt: "Chef cooking at a live fire stall",
      photographer: "Karthik Reddy",
      creditUrl: "https://unsplash.com/@karthikreddy",
    },
    caseStudy: {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
      alt: "Grand luxury wedding venue setup",
      photographer: "Alasdair Elmes",
      creditUrl: "https://unsplash.com/@alasdairelmes",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800&auto=format&fit=crop",
        alt: "Biryani presentation",
        photographer: "Shreyak Singh",
        creditUrl: "https://unsplash.com/@shreyaksingh",
      },
      {
        url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop",
        alt: "Indian Dal Makhani",
        photographer: "Kawaldeep Singh",
        creditUrl: "https://unsplash.com/@kawaldeep",
      },
      {
        url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
        alt: "Samosas and chutney",
        photographer: "Deepak Goswami",
        creditUrl: "https://unsplash.com/@deepakgoswami",
      }
    ],
  },
  about: {
    hero: {
      url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2000&auto=format&fit=crop",
      alt: "Heritage kitchen cooking",
      photographer: "Ameer Basheer",
      creditUrl: "https://unsplash.com/@ameerbasheer",
    },
    founder: {
      url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop",
      alt: "Portrait of executive chef",
      photographer: "René Porter",
      creditUrl: "https://unsplash.com/@reneporter",
    }
  },
  services: {
    wedding: {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
      alt: "Wedding catering spread",
      photographer: "Katelyn MacMillan",
      creditUrl: "https://unsplash.com/@katelynmacmillan",
    },
    corporate: {
      url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
      alt: "Corporate gala event",
      photographer: "Evangeline Shaw",
      creditUrl: "https://unsplash.com/@evangelineshaw",
    }
  },
  blog: {
    placeholder: {
      url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      alt: "Healthy food bowl",
      photographer: "Anna Pelzer",
      creditUrl: "https://unsplash.com/@annapelzer",
    }
  }
} as const;

export type ImageRegistry = typeof IMAGES;
