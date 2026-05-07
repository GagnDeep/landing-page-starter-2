export type ImageAsset = {
  src: string;
  alt: string;
  photographerName?: string;
  photographerUrl?: string;
};

export const images = {
  home: {
    hero: {
      src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=3165&auto=format&fit=crop", // Elegant layered cake
      alt: "Beautiful layered custom cake by CakeDelights",
      photographerName: "Alina Karpenko",
      photographerUrl: "https://unsplash.com/@alinakarpenko",
    },
    signatureArtistry: {
      src: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2850&auto=format&fit=crop", // Decorating a cake
      alt: "Pastry chef decorating a custom cake",
      photographerName: "American Heritage Chocolate",
      photographerUrl: "https://unsplash.com/@americanheritagechocolate",
    },
    process: [
      {
        src: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=3000&auto=format&fit=crop", // Cake sketch/planning
        alt: "Designing a custom cake",
        photographerName: "Kelsey Chance",
        photographerUrl: "https://unsplash.com/@kchance8",
      },
      {
        src: "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?q=80&w=2940&auto=format&fit=crop", // Baking
        alt: "Mixing premium ingredients",
        photographerName: "Kelsey Chance",
        photographerUrl: "https://unsplash.com/@kchance8",
      },
      {
        src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=3000&auto=format&fit=crop", // Celebration
        alt: "Kids enjoying cake at a birthday party",
        photographerName: "Lidya Nada",
        photographerUrl: "https://unsplash.com/@lidyanada",
      }
    ],
    bestsellers: {
      unicorn: {
        src: "https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?q=80&w=3087&auto=format&fit=crop", // Unicorn cake
        alt: "Magical unicorn kid's cake",
        photographerName: "Deva Williamson",
        photographerUrl: "https://unsplash.com/@devamack",
      },
      truffle: {
        src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2889&auto=format&fit=crop", // Chocolate truffle cake
        alt: "Decadent chocolate truffle cake",
        photographerName: "American Heritage Chocolate",
        photographerUrl: "https://unsplash.com/@americanheritagechocolate",
      },
      floral: {
        src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=2940&auto=format&fit=crop", // Floral wedding cake
        alt: "Elegant floral milestone cake",
        photographerName: "Thomas William",
        photographerUrl: "https://unsplash.com/@thomasw",
      },
      superhero: {
        src: "https://images.unsplash.com/photo-1559553156-2e97137ea163?q=80&w=2940&auto=format&fit=crop", // Colorful cake, alternative for superhero
        alt: "Action-packed themed cake",
        photographerName: "David Holifield",
        photographerUrl: "https://unsplash.com/@davidholifield",
      }
    }
  },
  about: {
    hero: {
      src: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=3124&auto=format&fit=crop", // Flour dust / baking
      alt: "Baking process in our Patiala studio",
      photographerName: "Pilar",
      photographerUrl: "https://unsplash.com/@pilar",
    },
    story: {
      src: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?q=80&w=2940&auto=format&fit=crop", // Cozy home bakery vibes
      alt: "Where the CakeDelights story began",
      photographerName: "Brooke Lark",
      photographerUrl: "https://unsplash.com/@brookelark",
    },
    founder: {
      src: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=2864&auto=format&fit=crop", // Female baker portrait
      alt: "Simran Kaur, Founder of CakeDelights",
      photographerName: "Antoni Shkraba",
      photographerUrl: "https://unsplash.com/@antonishkraba",
    }
  },
  features: {
    hero: {
      src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=3040&auto=format&fit=crop", // Detailed cake texture
      alt: "Close up of exquisite cake frosting details",
      photographerName: "Annie Spratt",
      photographerUrl: "https://unsplash.com/@anniespratt",
    },
    customDesign: {
      src: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=2901&auto=format&fit=crop", // Decorating
      alt: "Hand-painting a custom cake tier",
      photographerName: "Kateryna Hliznitsova",
      photographerUrl: "https://unsplash.com/@hjkp",
    },
    flavors: {
      src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2787&auto=format&fit=crop", // Sliced cake showing layers
      alt: "Rich cake layers and fillings",
      photographerName: "Joseph Gonzalez",
      photographerUrl: "https://unsplash.com/@joesoot",
    }
  },
  pricing: {
    tastingBox: {
      src: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ce6?q=80&w=2944&auto=format&fit=crop", // Cupcakes/samples
      alt: "Sample tasting box of various cake flavors",
      photographerName: "Deva Williamson",
      photographerUrl: "https://unsplash.com/@devamack",
    }
  },
  blog: {
    covers: [
      {
        src: "https://images.unsplash.com/photo-1628196614456-11f81c95ee88?q=80&w=2938&auto=format&fit=crop", // Kids party cake
        alt: "Kid's birthday party celebration",
      },
      {
        src: "https://images.unsplash.com/photo-1509482560494-4126f8225994?q=80&w=2960&auto=format&fit=crop", // Sponge cake
        alt: "Freshly baked eggless sponge cake",
      },
      {
        src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2904&auto=format&fit=crop", // Transporting/holding cake box
        alt: "Safely transporting a custom cake",
      },
      {
        src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2874&auto=format&fit=crop", // Pistachio/green cake
        alt: "Pistachio flavored signature cake",
      },
      {
        src: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2836&auto=format&fit=crop", // Smash cake / baby
        alt: "First birthday smash cake",
      }
    ]
  },
  contact: {
    hero: {
      src: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=3124&auto=format&fit=crop", // Welcoming studio/bakery vibe
      alt: "Welcome to CakeDelights Patiala",
    }
  },
  careers: {
    hero: {
      src: "https://images.unsplash.com/photo-1579699046152-19e48d5d4d38?q=80&w=2940&auto=format&fit=crop", // Team in bakery
      alt: "Our passionate baking team at work",
    }
  }
} as const;
