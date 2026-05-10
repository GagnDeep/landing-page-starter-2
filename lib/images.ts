export type ImageAsset = {
  url: string;
  alt: string;
  credit: {
    name: string;
    link: string;
  };
};

// All images are sourced from Unsplash with optimized parameters
const optimize = (url: string, w = 1200) => `${url}?w=${w}&q=80&auto=format&fit=crop`;

export const siteImages = {
  home: {
    hero: {
      url: optimize("https://images.unsplash.com/photo-1519741497674-611481863552", 1920),
      alt: "Cinematic shot of a wedding couple walking down a sunlit path",
      credit: { name: "Jeremy Wong", link: "https://unsplash.com/@jeremywongtsz" }
    },
    introPortrait: {
      url: optimize("https://images.unsplash.com/photo-1542042161784-26ab9e041e89", 800),
      alt: "Close up of a vibrant wedding celebration",
      credit: { name: "Priyanka Singh", link: "https://unsplash.com/@priyankasingh" }
    },
    servicePhoto: {
      url: optimize("https://images.unsplash.com/photo-1511285560929-80b456fea0bc", 800),
      alt: "Wedding rings close up",
      credit: { name: "Zoriana Stakhniv", link: "https://unsplash.com/@zoriana" }
    },
    serviceVideo: {
      url: optimize("https://images.unsplash.com/photo-1601614488825-961fc3268805", 800),
      alt: "Cinematographer capturing a moment",
      credit: { name: "Vanilla Bear Films", link: "https://unsplash.com/@vanillabearfilms" }
    },
    caseStudyOne: {
      url: optimize("https://images.unsplash.com/photo-1583939003579-730e3918a45a", 1000),
      alt: "Traditional Indian bride in ornate jewelry",
      credit: { name: "Dev Asangbam", link: "https://unsplash.com/@devasangbam" }
    },
    caseStudyTwo: {
      url: optimize("https://images.unsplash.com/photo-1606800052052-a08af7148866", 1000),
      alt: "Destination wedding setup with floral mandap",
      credit: { name: "Mitesh Patil", link: "https://unsplash.com/@mitesh" }
    },
    founderPortrait: {
      url: optimize("https://images.unsplash.com/photo-1554046920-90dc2e5055b8", 600),
      alt: "Sanjay - Lead Photographer",
      credit: { name: "Jovan Vasiljević", link: "https://unsplash.com/@jovanv" }
    }
  },
  about: {
    hero: {
      url: optimize("https://images.unsplash.com/photo-1511895426328-dc8714191300", 1920),
      alt: "Photographers setting up a shot at dusk",
      credit: { name: "Avel Chuklanov", link: "https://unsplash.com/@avel" }
    },
    teamGrid: [
      {
        url: optimize("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", 400),
        alt: "Rahul - Lead Cinematographer",
        credit: { name: "Joseph Gonzalez", link: "https://unsplash.com/@joeyc" }
      },
      {
        url: optimize("https://images.unsplash.com/photo-1494790108377-be9c29b29330", 400),
        alt: "Simran - Senior Editor",
        credit: { name: "Michael Dam", link: "https://unsplash.com/@michaeldam" }
      },
      {
        url: optimize("https://images.unsplash.com/photo-1500648767791-00dcc994a43e", 400),
        alt: "Vikram - Second Photographer",
        credit: { name: "Jurica Koletić", link: "https://unsplash.com/@jckobck" }
      },
      {
        url: optimize("https://images.unsplash.com/photo-1534528741775-53994a69daeb", 400),
        alt: "Aman - Studio Manager",
        credit: { name: "Jurica Koletić", link: "https://unsplash.com/@jckobck" }
      }
    ]
  },
  features: {
    hero: {
      url: optimize("https://images.unsplash.com/photo-1605806616949-1e87b487bc2a", 1920),
      alt: "Abstract lighting setup representing cinematic creation",
      credit: { name: "Avel Chuklanov", link: "https://unsplash.com/@avel" }
    }
  },
  blog: {
    featuredPost: {
      url: optimize("https://images.unsplash.com/photo-1602083547805-4f32e604f64c", 1200),
      alt: "Palatial wedding in Jaipur at sunset",
      credit: { name: "Aman Kumar", link: "https://unsplash.com/@aman" }
    }
  },
  careers: {
    hero: {
      url: optimize("https://images.unsplash.com/photo-1452587925148-ce544e77e70d", 1920),
      alt: "Studio workspace with editing monitors",
      credit: { name: "Glenn Carstens-Peters", link: "https://unsplash.com/@glenncarstenspeters" }
    }
  }
};
