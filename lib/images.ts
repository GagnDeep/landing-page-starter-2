export type ImageAsset = {
  src: string;
  alt: string;
};

// All images use direct unsplash URLs with standard query parameters for quality and dimensions
// Format: ?w=800&q=80&auto=format&fit=crop

export const images = {
  hero: {
    videoPlaceholder: {
      src: "https://images.unsplash.com/photo-1596468758872-3512b9c73797?w=800&q=80&auto=format&fit=crop",
      alt: "Master tailor carefully measuring fabric for a bespoke dress",
    },
    secondary: {
      src: "https://images.unsplash.com/photo-1558769132-cb1fac0840c2?w=800&q=80&auto=format&fit=crop",
      alt: "Elegant silk fabric draped gracefully",
    },
  },
  services: {
    bridal: {
      src: "https://images.unsplash.com/photo-1583391733958-d15a07c162cb?w=800&q=80&auto=format&fit=crop",
      alt: "Intricate hand embroidery on bridal lehenga",
    },
    evening: {
      src: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80&auto=format&fit=crop",
      alt: "Beautifully tailored evening gown on a mannequin",
    },
    everyday: {
      src: "https://images.unsplash.com/photo-1434389678232-04ce6ea81f4d?w=800&q=80&auto=format&fit=crop",
      alt: "Comfortable and stylish everyday kurti",
    },
    uniform: {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&auto=format&fit=crop",
      alt: "Neatly folded, sharp professional uniform",
    },
  },
  process: {
    consultation: {
      src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80&auto=format&fit=crop",
      alt: "Client and tailor discussing design options",
    },
    measurement: {
      src: "https://images.unsplash.com/photo-1520613247065-0ef8187889e4?w=800&q=80&auto=format&fit=crop",
      alt: "Precise taking of measurements with a tape measure",
    },
    making: {
      src: "https://images.unsplash.com/photo-1605280263929-1c42c62416b7?w=800&q=80&auto=format&fit=crop",
      alt: "Close up of a sewing machine needle on fabric",
    },
    fitting: {
      src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80&auto=format&fit=crop",
      alt: "Final fitting adjustments in front of a mirror",
    },
  },
  carousel: [
    {
      src: "https://images.unsplash.com/photo-1580247817119-c6ca4d744f4d?w=800&q=80&auto=format&fit=crop",
      alt: "Details of a bespoke suit jacket",
    },
    {
      src: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80&auto=format&fit=crop",
      alt: "Vibrant traditional garment with precise stitching",
    },
    {
      src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80&auto=format&fit=crop",
      alt: "Minimalist blouse demonstrating perfect fit",
    },
  ],
  founder: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of the lead master tailor",
  },
  fabric: {
    src: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&q=80&auto=format&fit=crop",
    alt: "Macro shot of high-quality woven fabric texture",
  },
  atelier: {
    src: "https://images.unsplash.com/photo-1528804603417-6490e80b2a95?w=800&q=80&auto=format&fit=crop",
    alt: "Interior view of the Stitching Solutions atelier",
  },
  about: {
    hero: {
      src: "https://images.unsplash.com/photo-1612423284934-2850a4eaea40?w=800&q=80&auto=format&fit=crop",
      alt: "Elegant storefront of a premium boutique",
    },
    team: {
      src: "https://images.unsplash.com/photo-1581375373307-e85d80b7e23f?w=800&q=80&auto=format&fit=crop",
      alt: "Team of tailors collaborating on a pattern",
    },
  },
} as const;
