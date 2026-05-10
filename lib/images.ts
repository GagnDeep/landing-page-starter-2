export type AppImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  photographerUrl?: string;
};

// We use Unsplash source URLs with specific IDs that match the calm, professional, driving aesthetic.
export const images = {
  hero: {
    main: {
      src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070", // Steering wheel / road perspective
      alt: "Person confidently driving on an open road",
      width: 2070,
      height: 1380,
      credit: "Averie Woodard",
      photographerUrl: "https://unsplash.com/@averieclaire",
    },
    about: {
      src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070", // Driving lesson metaphor / calm road
      alt: "Instructor and student in a car",
      width: 2070,
      height: 1380,
    },
  },
  instructor: {
    jeetPortrait: {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800", // Professional, calm portrait
      alt: "Jeet Singh - Lead Instructor",
      width: 800,
      height: 1000,
      credit: "LinkedIn Sales Solutions",
    },
  },
  fleet: {
    sedan: {
      src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200", // Modern car
      alt: "Modern white sedan used for training",
      width: 1200,
      height: 800,
    },
    hatchback: {
      src: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=1200", // Modern hatchback
      alt: "Modern hatchback used for training",
      width: 1200,
      height: 800,
    },
    interior: {
      src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1200", // Steering wheel interior
      alt: "Clean interior of a training vehicle",
      width: 1200,
      height: 800,
    },
  },
  blog: {
    anxiety: {
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200", // Calm road trip
      alt: "Driving anxiety",
      width: 1200,
      height: 800,
    },
    roundabout: {
      src: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&q=80&w=1200", // City traffic/intersections
      alt: "Roundabout navigation",
      width: 1200,
      height: 800,
    },
    maintenance: {
      src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200", // Car maintenance
      alt: "Basic car maintenance",
      width: 1200,
      height: 800,
    },
    success: {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200", // Happy driver
      alt: "Happy driver passing the test",
      width: 1200,
      height: 800,
    },
  },
  patterns: {
    texture: {
      src: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=1000", // Subtle dark noise/texture
      alt: "Subtle background texture",
      width: 1000,
      height: 1000,
    },
  },
} as const;

export type ImageRegistry = typeof images;
