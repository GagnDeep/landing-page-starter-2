export const images = {
  hero: {
    main: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop",
    about: "https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?q=80&w=2940&auto=format&fit=crop",
    services: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=2865&auto=format&fit=crop",
    contact: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop"
  },
  services: {
    weddings: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop",
    corporate: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2940&auto=format&fit=crop",
    social: "https://images.unsplash.com/photo-1530103862676-de8892ebe829?q=80&w=2940&auto=format&fit=crop",
    bespoke: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop"
  },
  food: {
    starters: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=2800&auto=format&fit=crop",
    mains: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2836&auto=format&fit=crop",
    desserts: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2787&auto=format&fit=crop",
    plated: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2938&auto=format&fit=crop",
    buffet: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2940&auto=format&fit=crop"
  },
  team: {
    chef1: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2884&auto=format&fit=crop",
    chef2: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2877&auto=format&fit=crop",
    chef3: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2940&auto=format&fit=crop",
  },
  gallery: {
    g1: "https://images.unsplash.com/photo-1414235077428-33898dd1444c?q=80&w=2940&auto=format&fit=crop",
    g2: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop",
    g3: "https://images.unsplash.com/photo-1466978913421-bac2e5e75e4e?q=80&w=2842&auto=format&fit=crop",
    g4: "https://images.unsplash.com/photo-1548325605-cb6d5731737e?q=80&w=2940&auto=format&fit=crop",
    g5: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop",
    g6: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2936&auto=format&fit=crop"
  }
} as const;

export type ImageKey = keyof typeof images;
