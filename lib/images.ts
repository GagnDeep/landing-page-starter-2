export type ImageAsset = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

// All images are selected from Unsplash to fit the premium, luxury, pure-veg catering aesthetic.
export const siteImages = {
  home: {
    heroFallback: {
      url: "https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=2560&auto=format&fit=crop", // Elegant table setting
      alt: "Grand luxury wedding table setting",
      width: 2560,
      height: 1440
    },
    culinaryArtistry: {
      url: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1200&auto=format&fit=crop", // Exquisite vegetarian dish
      alt: "Exquisite pure veg culinary masterpiece",
      width: 1200,
      height: 1600
    },
    grandSetup: {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop", // Beautiful venue decoration
      alt: "Breathtaking luxury dining environment",
      width: 1200,
      height: 1600
    },
    impeccableHospitality: {
      url: "https://images.unsplash.com/photo-1559811814-e2c59a5eee8f?q=80&w=1200&auto=format&fit=crop", // Staff preparing/serving
      alt: "Highly trained staff anticipating every need",
      width: 1200,
      height: 1600
    },
    signatureDish1: {
      url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop", // Rich Indian dessert/dish
      alt: "Exquisite royal thali component",
      width: 800,
      height: 1000
    },
    signatureDish2: {
      url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop", // Modern presentation
      alt: "Modern fusion appetizer",
      width: 800,
      height: 1000
    },
    signatureDish3: {
      url: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=800&auto=format&fit=crop", // Sweet treat
      alt: "Elegant dessert presentation",
      width: 800,
      height: 1000
    },
    signatureDish4: {
      url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop", // Elegant drink
      alt: "Bespoke welcome drinks",
      width: 800,
      height: 1000
    }
  },
  about: {
    hero: {
      url: "https://images.unsplash.com/photo-1466978913421-bac2e5e4d6a4?q=80&w=2560&auto=format&fit=crop", // Expansive dining table
      alt: "Expansive beautifully set dining table",
      width: 2560,
      height: 1440
    },
    founder1: {
      url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop", // Professional male portrait
      alt: "Rajesh Sharma, Founder",
      width: 800,
      height: 1000
    },
    founder2: {
      url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop", // Chef portrait
      alt: "Vikram Sharma, Culinary Director",
      width: 800,
      height: 1000
    },
    teamAction: {
      url: "https://images.unsplash.com/photo-1577219492769-b63a779fac28?q=80&w=1200&auto=format&fit=crop", // Busy high-end kitchen
      alt: "Chefs in action at a grand event",
      width: 1200,
      height: 800
    }
  },
  features: {
    hero: {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2560&auto=format&fit=crop", // Elegant event setup
      alt: "Luxury wedding event setup",
      width: 2560,
      height: 1000
    },
    weddingCatering: {
      url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop", // Large feast/buffet
      alt: "Grand pure veg wedding feast",
      width: 1600,
      height: 1000
    },
    destinationLogistics: {
      url: "https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=1200&auto=format&fit=crop", // Scenic outdoor setup
      alt: "Destination wedding outdoor catering setup",
      width: 1200,
      height: 1600
    },
    eventStyling: {
      url: "https://images.unsplash.com/photo-1505944357431-27579db47558?q=80&w=1200&auto=format&fit=crop", // Detailed floral/table setting
      alt: "Intricate table styling and floral arrangements",
      width: 1200,
      height: 1600
    },
    beverageMixology: {
      url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop", // Moody cocktail/mocktail shot
      alt: "Artisanal mocktails and beverage styling",
      width: 1200,
      height: 1600
    }
  },
  pricing: {
    hero: {
      url: "https://images.unsplash.com/photo-1414235077428-33898ed1e829?q=80&w=2560&auto=format&fit=crop", // Fine dining plate focus
      alt: "A beautifully plated bespoke dish",
      width: 2560,
      height: 1440
    }
  },
  blog: {
    hero: {
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2560&auto=format&fit=crop", // Wedding reception celebration
      alt: "Grand wedding banquet celebration",
      width: 2560,
      height: 1440
    },
    article1: {
      url: "https://images.unsplash.com/photo-1587825027984-c4476461ac89?q=80&w=1200&auto=format&fit=crop", // Royal Indian style setup
      alt: "Royal wedding setup in Udaipur",
      width: 1200,
      height: 800
    },
    article2: {
      url: "https://images.unsplash.com/photo-1626200419189-322197607775?q=80&w=1200&auto=format&fit=crop", // Indian Thali/Dish
      alt: "Modern interpretation of a traditional Thali",
      width: 1200,
      height: 800
    },
    article3: {
      url: "https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=1200&auto=format&fit=crop", // Lake/Italian setting
      alt: "Luxury catering by Lake Como",
      width: 1200,
      height: 800
    }
  },
  contact: {
    heroSideImage: {
      url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop", // Welcoming hospitality image
      alt: "Elegant hospitality staff ready to serve",
      width: 1200,
      height: 1600
    }
  },
  careers: {
    hero: {
      url: "https://images.unsplash.com/photo-1583394207869-7c152e259e8f?q=80&w=2560&auto=format&fit=crop", // High-end kitchen brigade
      alt: "Culinary team working in a high-end kitchen",
      width: 2560,
      height: 1440
    }
  }
};
