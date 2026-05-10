export type SiteImagesType = {
  hero: {
    main: string;
    about: string;
  };
  gallery: {
    superhero: string;
    unicorn: string;
    wedding: string;
    floral: string;
  };
  flavors: {
    chocolate: string;
    vanilla: string;
    berry: string;
  };
  team: {
    baker1: string;
    baker2: string;
  };
  blog: {
    post1: string;
    post2: string;
    post3: string;
  };
};

export const SITE_IMAGES: SiteImagesType = {
  hero: {
    // Beautiful, high-quality cake hero images
    main: "https://images.unsplash.com/photo-1557925923-33b2512ea2aa?q=80&w=2000&auto=format&fit=crop",
    about: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop",
  },
  gallery: {
    // Themed cakes
    superhero: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000&auto=format&fit=crop",
    unicorn: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000&auto=format&fit=crop",
    wedding: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop",
    floral: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop",
  },
  flavors: {
    chocolate: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1000&auto=format&fit=crop",
    vanilla: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop",
    berry: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop",
  },
  team: {
    baker1: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?q=80&w=1000&auto=format&fit=crop", // Baker working
    baker2: "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?q=80&w=1000&auto=format&fit=crop", // Baker portrait
  },
  blog: {
    post1: "https://images.unsplash.com/photo-1512484776495-a09271e96a2f?q=80&w=1000&auto=format&fit=crop",
    post2: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop",
    post3: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
  }
};
