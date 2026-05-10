export type RemoteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  photographerUrl: string;
};

// Helper to standardise Unsplash URLs with optimization params
const createUnsplashUrl = (id: string, width: number = 1920) =>
  `https://images.unsplash.com/photo-${id}?w=${width}&q=80&auto=format&fit=crop`;

export const Images: Record<string, RemoteImage> = {
  heroBackground: {
    src: createUnsplashUrl("1469049448834-31f8f74220b3"), // A road/driving perspective
    alt: "View from inside a car driving safely on a highway",
    width: 1920,
    height: 1080,
    credit: "Samuele Errico Piccarini",
    photographerUrl: "https://unsplash.com/@samuele_errico_piccarini",
  },
  instructorPortrait: {
    src: createUnsplashUrl("1560250097-0b93528c311a", 800), // Professional male portrait
    alt: "Kadar Khan, Lead Instructor at Azad Driving School",
    width: 800,
    height: 1000,
    credit: "Jurica Koletić",
    photographerUrl: "https://unsplash.com/@juricakoletic",
  },
  automaticCar: {
    src: createUnsplashUrl("1549317661-bd32c8ce0db2", 1200), // Modern car interior/shifter
    alt: "Modern automatic car interior used for training",
    width: 1200,
    height: 800,
    credit: "Peter Kasprzyk",
    photographerUrl: "https://unsplash.com/@p_k",
  },
  manualCar: {
    src: createUnsplashUrl("1552554746-0ce3d289b37a", 1200), // Manual gear shift
    alt: "Manual transmission gear shift used in driving lessons",
    width: 1200,
    height: 800,
    credit: "Erik Mclean",
    photographerUrl: "https://unsplash.com/@introspectivedsgn",
  },
  highwayDriving: {
    src: createUnsplashUrl("1469049448834-31f8f74220b3", 1600), // Highway
    alt: "Cars driving safely on a multi-lane highway",
    width: 1600,
    height: 900,
    credit: "Samuele Errico Piccarini",
    photographerUrl: "https://unsplash.com/@samuele_errico_piccarini",
  },
  cityTraffic: {
    src: createUnsplashUrl("1520698188045-8c7af6a8a29b", 1200), // Busy city intersection
    alt: "Real-traffic conditions in a busy city intersection",
    width: 1200,
    height: 800,
    credit: "Denys Nevozhai",
    photographerUrl: "https://unsplash.com/@dnevozhai",
  },
  nightDriving: {
    src: createUnsplashUrl("1492144534655-ae79c964c9d7", 1200), // Night driving view
    alt: "View of the road during night driving practice",
    width: 1200,
    height: 800,
    credit: "Matt Palmer",
    photographerUrl: "https://unsplash.com/@mattpalmer",
  },
  studentSuccess: {
    src: createUnsplashUrl("1507038772120-7ff26c608674", 800), // Happy person in car
    alt: "Happy student celebrating passing their driving test",
    width: 800,
    height: 800,
    credit: "Averie Woodard",
    photographerUrl: "https://unsplash.com/@averieclaire",
  },
  officeFront: {
    src: createUnsplashUrl("1497366216548-37526070297c", 1200), // Office/Building front
    alt: "Azad Driving School office location in Burail, Chandigarh",
    width: 1200,
    height: 800,
    credit: "Scott Webb",
    photographerUrl: "https://unsplash.com/@scottwebb",
  },
  maintenanceClass: {
    src: createUnsplashUrl("1487754180451-c84784e1b7b7", 1200), // Checking under the hood
    alt: "Instructor demonstrating basic car maintenance under the hood",
    width: 1200,
    height: 800,
    credit: "Tim Mossholder",
    photographerUrl: "https://unsplash.com/@timmossholder",
  },
  drivingTheory: {
    src: createUnsplashUrl("1453928582365-b6ad33cbcf64", 1200), // Notebook/learning
    alt: "Student studying traffic rules and driving theory",
    width: 1200,
    height: 800,
    credit: "Green Chameleon",
    photographerUrl: "https://unsplash.com/@sctgrhm",
  },
};
