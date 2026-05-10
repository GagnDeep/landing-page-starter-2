export type ImageMeta = {
  src: string;
  alt: string;
  author: string;
  authorUrl: string;
};

export const images = {
  hero: {
    primary: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
      alt: "Modern, clean clinical recovery environment",
      author: "Hush Naidoo Jade Photography",
      authorUrl: "https://unsplash.com/@hushnaidoo"
    },
    about: {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
      alt: "Professional healthcare setting representing clinical heritage",
      author: "Martha Dominguez de Gouveia",
      authorUrl: "https://unsplash.com/@marthadom"
    }
  },
  clinic: {
    interior: {
      src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1600",
      alt: "Pristine clinical rehabilitation facility",
      author: "Luis Melendez",
      authorUrl: "https://unsplash.com/@luismelendez"
    },
    equipment: {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
      alt: "Advanced technological medical equipment",
      author: "ThisisEngineering",
      authorUrl: "https://unsplash.com/@thisisengineering"
    }
  },
  team: {
    drKhanPlaceholder: {
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200",
      alt: "Experienced clinical professional in a medical setting",
      author: "Usman Yousaf",
      authorUrl: "https://unsplash.com/@usmanyousaf"
    }
  },
  blog: {
    neuroplasticity: {
      src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200",
      alt: "Abstract medical brain representation",
      author: "National Cancer Institute",
      authorUrl: "https://unsplash.com/@nci"
    },
    orthoRehab: {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200",
      alt: "Active orthopedic physical therapy session",
      author: "FitNish Media",
      authorUrl: "https://unsplash.com/@fitnish"
    },
    wellness: {
      src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200",
      alt: "Ergonomic workspace setup",
      author: "Grovemade",
      authorUrl: "https://unsplash.com/@grovemade"
    }
  },
  services: {
    paralysis: {
      src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200",
      alt: "Medical professional assisting a patient in rehabilitation",
      author: "National Cancer Institute",
      authorUrl: "https://unsplash.com/@nci"
    },
    chronicPain: {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      alt: "Detailed anatomical study or clinical massage therapy",
      author: "Toa Heftiba",
      authorUrl: "https://unsplash.com/@heftiba"
    }
  }
} as const;
