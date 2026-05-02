export interface ImageAsset {
  src: string;
  alt: string;
  credit?: {
    name: string;
    url: string;
  };
}

const buildUnsplashUrl = (id: string, width: number = 1920) => {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
};

export const images: Record<string, ImageAsset> = {
  heroBackdrop: {
    src: buildUnsplashUrl("1612423288146-2485566f1fcb"), // Elegant fabric texture
    alt: "Luxurious bespoke fabric texture close up",
    credit: {
      name: "Engin Akyurt",
      url: "https://unsplash.com/@enginakyurt",
    },
  },
  kurtaDetail: {
    src: buildUnsplashUrl("1585914924626-150ac9d64eb1"), // Embroidery/fabric detail
    alt: "Detailed stitching on an ethnic kurta",
    credit: {
      name: "Ravi Sharma",
      url: "https://unsplash.com/@ravisharma",
    },
  },
  nehruJacket: {
    src: buildUnsplashUrl("1593030103066-0093718efce9"), // Man in a jacket
    alt: "A tailored Nehru jacket on a mannequin",
    credit: {
      name: "Theodore Goutas",
      url: "https://unsplash.com/@theodoregoutas",
    },
  },
  tailoringProcess: {
    src: buildUnsplashUrl("1558500201-904128543781"), // Scissors and fabric
    alt: "Master tailor cutting premium fabric",
    credit: {
      name: "Michael Burrows",
      url: "https://unsplash.com/@michaelburrows",
    },
  },
  fabricRolls: {
    src: buildUnsplashUrl("1611077544325-30045f22fc41"), // Rolls of fabric
    alt: "Rolls of fine linen and silk fabric",
    credit: {
      name: "Felipe Luiz",
      url: "https://unsplash.com/@felipeluiz",
    },
  },
  founderPortrait: {
    src: buildUnsplashUrl("1507003211169-0a1dd7228f2d"), // Mature portrait
    alt: "Portrait of a master tailor",
    credit: {
      name: "Craig McKay",
      url: "https://unsplash.com/@craigmckay",
    },
  },
  testimonialAvatar1: {
    src: buildUnsplashUrl("1500648767791-00dcc994a43e", 200), // Man portrait
    alt: "Client portrait",
    credit: {
      name: "Jurica Koletić",
      url: "https://unsplash.com/@jkoletic",
    },
  },
  testimonialAvatar2: {
    src: buildUnsplashUrl("1506794778202-cad84cf45f1d", 200), // Man portrait
    alt: "Client portrait",
    credit: {
      name: "Albert Dera",
      url: "https://unsplash.com/@albertdera",
    },
  },
  testimonialAvatar3: {
    src: buildUnsplashUrl("1544723795-3ce9d15b0fa8", 200), // Man portrait
    alt: "Client portrait",
    credit: {
      name: "Oladimeji Odunsi",
      url: "https://unsplash.com/@oladimeg",
    },
  },
};
