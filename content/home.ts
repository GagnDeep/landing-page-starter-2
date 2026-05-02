import { BasePageContent, CallToAction } from './types';

export interface HomeContent extends BasePageContent {
  header: {
    logo: string;
    bookConsultation: CallToAction;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: CallToAction;
  };
  introduction: {
    title: string;
    paragraph: string;
  };
  heritage: {
    title: string;
    description: string;
  };
  bridalSpotlight: {
    title: string;
    description: string;
    cta: CallToAction;
  };
  groomMatching: {
    title: string;
    description: string;
    cta: CallToAction;
  };
  dailyWear: {
    title: string;
    description: string;
    cta: CallToAction;
  };
  featuredCollections: {
    title: string;
  };
  craftsmanship: {
    title: string;
    description: string;
  };
  testimonials: {
    title: string;
    description: string;
  };
  boutiqueExperience: {
    title: string;
    description: string;
    cta: CallToAction;
  };
  stylistConsultation: {
    title: string;
    description: string;
    cta: CallToAction;
  };
  trendingNow: {
    title: string;
  };
  artisanSpotlight: {
    title: string;
    description: string;
  };
  lookbook: {
    title: string;
  };
  gifting: {
    title: string;
    description: string;
    cta: CallToAction;
  };
  faqTeaser: {
    title: string;
    cta: CallToAction;
  };
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    submitLabel: string;
  };
  instagramGallery: {
    title: string;
    handle: string;
  };
}

export const homeContent: HomeContent = {
  seo: {
    title: "Kohinoor Trends | Luxury Ethnic & Bridal Wear in Chandigarh",
    description: "Since 1998, Kohinoor Trends has been Chandigarh's trusted boutique for exquisite bridal lehengas, groom sherwanis, and premium daily wear cotton suits.",
    keywords: ["bridal wear Chandigarh", "ethnic boutique", "lehengas", "sherwanis", "cotton suits", "Kohinoor Trends", "heritage fashion"],
  },
  header: {
    logo: "Kohinoor Trends",
    bookConsultation: { label: "Book Consultation", href: "/contact" },
  },
  hero: {
    headline: "Elegance Woven in Tradition",
    subheadline: "Celebrating generations of exquisite craftsmanship and timeless bridal couture since 1998.",
    cta: { label: "Explore Our Collections", href: "/features" },
  },
  introduction: {
    title: "Our Heritage",
    paragraph: "For over two decades, Kohinoor Trends has stood as a beacon of trust and refined taste in Chandigarh. We honor the rich tapestry of Indian textiles, bringing forth collections that are as enduring as the families we serve.",
  },
  heritage: {
    title: "A Legacy Since 1998",
    description: "From our humble beginnings to becoming a multi-generational destination, journey through the milestones of Kohinoor Trends.",
  },
  bridalSpotlight: {
    title: "The Bridal Trousseau",
    description: "Discover lehengas crafted with devotion. Each thread tells a story of heritage, designed to make your most cherished moments unforgettable.",
    cta: { label: "View Bridal Wear", href: "/features#bridal" },
  },
  groomMatching: {
    title: "For the Groom",
    description: "Complementary elegance. Our bespoke sherwanis and tailored ensembles ensure the groom stands with equal grace.",
    cta: { label: "View Groom Wear", href: "/features#groom" },
  },
  dailyWear: {
    title: "Everyday Elegance",
    description: "Embrace the comfort and sophistication of our premium cotton suits, perfect for your daily narrative.",
    cta: { label: "Shop Cotton Suits", href: "/features#daily" },
  },
  featuredCollections: {
    title: "Current Season Highlights",
  },
  craftsmanship: {
    title: "The Fabric of Us",
    description: "Immerse yourself in the delicate intricacies of our Zari work, hand-embroidery, and the purest silks sourced across the nation.",
  },
  testimonials: {
    title: "Generations of Trust",
    description: "Hear from the brides and families who have made us a part of their joyous celebrations.",
  },
  boutiqueExperience: {
    title: "Visit Our Chandigarh Boutique",
    description: "Step into a world of curated elegance. Experience our fabrics firsthand and receive personalized attention from our style experts.",
    cta: { label: "Get Directions", href: "/contact" },
  },
  stylistConsultation: {
    title: "Personal Styling Appointments",
    description: "Allow us to assist you in curating the perfect look for your upcoming occasions with a dedicated styling session.",
    cta: { label: "Book Now", href: "/contact#consultation" },
  },
  trendingNow: {
    title: "Trending Silhouettes",
  },
  artisanSpotlight: {
    title: "Behind the Seams",
    description: "We pay homage to the master weavers and artisans whose lifelong dedication brings our visions to life.",
  },
  lookbook: {
    title: "Kohinoor Elegance",
  },
  gifting: {
    title: "Gifting & Trousseau",
    description: "Elevate your giving with our bespoke trousseau packaging, perfect for weddings and festive occasions.",
    cta: { label: "Explore Gifting", href: "/features#gifting" },
  },
  faqTeaser: {
    title: "Common Inquiries",
    cta: { label: "Read All FAQs", href: "/faq" },
  },
  newsletter: {
    title: "Join Our Inner Circle",
    description: "Subscribe to receive exclusive previews of our seasonal collections and heritage stories.",
    placeholder: "Your email address",
    submitLabel: "Subscribe",
  },
  instagramGallery: {
    title: "Follow Our Journey",
    handle: "@kohinoortrends",
  },
};
