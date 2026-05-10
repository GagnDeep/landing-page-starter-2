export type ImageCategory =
  | 'hero'
  | 'venues'
  | 'culinary'
  | 'service'
  | 'gallery'
  | 'journal';

export interface ImageData {
  url: string;
  alt: string;
  category: ImageCategory;
}

const buildUnsplashUrl = (id: string, params: string = 'auto=format&fit=crop&q=80') =>
  `https://images.unsplash.com/photo-${id}?${params}`;

export const IMAGES: Record<string, ImageData> = {
  // Hero & Arrival
  heroGrand: {
    url: buildUnsplashUrl('1511795409834-ef04bbd54da0', 'auto=format&fit=crop&q=80&w=2000'), // Elegant table setting
    alt: 'Grand table setting with fine crystal and soft lighting',
    category: 'hero',
  },
  heroIntimate: {
    url: buildUnsplashUrl('1414235077428-971145503d19', 'auto=format&fit=crop&q=80&w=2000'), // Intimate dark lighting
    alt: 'Intimate dining setup with warm ambient lighting',
    category: 'hero',
  },

  // Culinary Arts
  culinaryPlating: {
    url: buildUnsplashUrl('1581184953963-d15971a9daea', 'auto=format&fit=crop&q=80&w=1200'), // Chef plating
    alt: 'Master chef meticulously plating a bespoke dish',
    category: 'culinary',
  },
  culinarySpices: {
    url: buildUnsplashUrl('1596040033229-a9821ebd058d', 'auto=format&fit=crop&q=80&w=1200'), // Rich spices
    alt: 'Rich assortment of heritage spices used in Oasis kitchens',
    category: 'culinary',
  },
  culinaryDessert: {
    url: buildUnsplashUrl('1550617931-e17a7b70dce2', 'auto=format&fit=crop&q=80&w=1200'), // Elegant dessert
    alt: 'Artisanal dessert showcasing culinary craftsmanship',
    category: 'culinary',
  },

  // Service & Staff
  servicePouring: {
    url: buildUnsplashUrl('1559339352-11d035aa65de', 'auto=format&fit=crop&q=80&w=1200'), // Waiter pouring wine
    alt: 'Immaculate service staff attending to guests',
    category: 'service',
  },
  serviceSetup: {
    url: buildUnsplashUrl('1520209259169-322197ae6dc1', 'auto=format&fit=crop&q=80&w=1200'), // Waiter setting table
    alt: 'Event captain perfecting the tablescape before guest arrival',
    category: 'service',
  },

  // Venues & Atmosphere
  venuePalace: {
    url: buildUnsplashUrl('1519167758481-83f550bb16b3', 'auto=format&fit=crop&q=80&w=1200'), // Grand hall
    alt: 'A heritage venue transformed for a grand wedding gala',
    category: 'venues',
  },
  venueGarden: {
    url: buildUnsplashUrl('1464366400600-7168b8af9bc3', 'auto=format&fit=crop&q=80&w=1200'), // Outdoor setup
    alt: 'Elegant outdoor evening dining arrangement',
    category: 'venues',
  },

  // The Journal / Blog
  journalJournalism: {
    url: buildUnsplashUrl('1455390582262-044cdead2708', 'auto=format&fit=crop&q=80&w=1200'), // Writing/Notebook
    alt: 'Notes on taste and elegance',
    category: 'journal',
  },
  journalMixology: {
    url: buildUnsplashUrl('1536934331404-b6b50092fa2b', 'auto=format&fit=crop&q=80&w=1200'), // Cocktail pouring
    alt: 'The artisanal mixology experience',
    category: 'journal',
  },

  // Gallery Masonry Fillers
  galleryDetail1: {
    url: buildUnsplashUrl('1478144592103-25e218a04891', 'auto=format&fit=crop&q=80&w=800'),
    alt: 'Detail shot of premium flatware',
    category: 'gallery',
  },
  galleryDetail2: {
    url: buildUnsplashUrl('1481833761820-05a374670b8f', 'auto=format&fit=crop&q=80&w=800'),
    alt: 'Candid moment of guests celebrating',
    category: 'gallery',
  },
  galleryDetail3: {
    url: buildUnsplashUrl('1525059696034-4967a8e1dca2', 'auto=format&fit=crop&q=80&w=800'),
    alt: 'Close up of a signature Oasis cocktail',
    category: 'gallery',
  },
  galleryDetail4: {
    url: buildUnsplashUrl('1504672281656-e4981d70414b', 'auto=format&fit=crop&q=80&w=800'),
    alt: 'Wide shot of a fully catered ballroom',
    category: 'gallery',
  },
};

/**
 * Helper to quickly get an image URL by key
 */
export const getImage = (key: keyof typeof IMAGES) => IMAGES[key];
