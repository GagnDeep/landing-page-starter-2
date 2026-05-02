import { BasePageContent, CTA } from './types';

export interface HomeContent extends BasePageContent {
  noticeBar: string;
  brandEssence: string;
  featuredCollection: {
    title: string;
    description: string;
    cta: CTA;
  };
  customStitchingBanner: {
    heading: string;
    subheading: string;
  };
  customStitchingSteps: {
    title: string;
    description: string;
    icon: string; // Placeholder for icon name/identifier
  }[];
  lookbook: {
    title: string;
    cta: CTA;
  };
  categories: {
    name: string;
    href: string;
  }[];
  boutiqueFavorites: {
    title: string;
    description: string;
    cta: CTA;
  }[];
  founderNote: {
    heading: string;
    message: string;
    signature: string;
  };
  newArrivals: {
    marquee: string;
    title: string;
    cta: CTA;
  };
  testimonials: {
    quote: string;
    author: string;
  }[];
  instagramShop: {
    title: string;
    handle: string;
  };
  location: {
    title: string;
    address: string;
    hours: string;
    cta: CTA;
  };
  sustainablePromise: {
    title: string;
    points: { title: string; description: string }[];
  };
  newsletter: {
    heading: string;
    placeholder: string;
    buttonLabel: string;
  };
}

export const homeContent: HomeContent = {
  seo: {
    title: "Aura Boutique & Fashion Studio | Premium Custom Stitching in Patiala",
    description: "Discover Aura Boutique's curated western and ethnic wear. Experience bespoke fashion with our premium custom stitching and fast pan-India delivery.",
  },
  noticeBar: "Enjoy Free Pan-India Shipping on Orders Over ₹5000 | 4-Day Express Delivery Available",
  hero: {
    heading: "Crafting Your Aura.",
    subheading: "Where traditional craftsmanship meets contemporary elegance.",
    cta: [
      { label: "Shop New Arrivals", href: "/collections/new" },
      { label: "Book a Fitting", href: "/contact" }
    ],
  },
  brandEssence: "We believe fashion is personal. Aura Boutique bridges the warmth of local Patiala artistry with a nationwide, premium digital experience. Every stitch tells your story.",
  featuredCollection: {
    title: "The Summer Soirée",
    description: "Effortless silhouettes in breathable fabrics, designed for the modern woman who embraces both comfort and unapologetic style.",
    cta: { label: "Explore the Collection", href: "/collections/summer-soiree" }
  },
  customStitchingBanner: {
    heading: "The Art of Custom Stitching",
    subheading: "Bespoke tailoring, perfected for your unique measurements."
  },
  customStitchingSteps: [
    { title: "Consultation", description: "Share your vision or let our stylists guide you.", icon: "MessageCircle" },
    { title: "Measurement", description: "Precise measurements for a flawless fit.", icon: "Ruler" },
    { title: "Creation", description: "Our artisans bring your garment to life.", icon: "Scissors" }
  ],
  lookbook: {
    title: "Aura Lookbook",
    cta: { label: "View Full Gallery", href: "/lookbook" }
  },
  categories: [
    { name: "Ethnic Wear", href: "/collections/ethnic" },
    { name: "Western Wear", href: "/collections/western" },
    { name: "Indo-Western Fusion", href: "/collections/fusion" },
    { name: "Accessories", href: "/collections/accessories" }
  ],
  boutiqueFavorites: [
    { title: "The Classic Anarkali", description: "Timeless elegance with modern detailing.", cta: { label: "Shop Now", href: "/product/classic-anarkali" } },
    { title: "Silk Wrap Dress", description: "A versatile staple for evening events.", cta: { label: "Shop Now", href: "/product/silk-wrap-dress" } }
  ],
  founderNote: {
    heading: "A Note from Deepika",
    message: "Aura was born from a desire to make every woman feel powerful in her own skin. Whether it's a meticulously crafted custom suit or a ready-to-wear statement piece, our goal is to offer fashion that resonates with your personal aura.",
    signature: "Deepika, Founder"
  },
  newArrivals: {
    marquee: "NEW ARRIVALS ✦ JUST DROPPED ✦ SHOP THE LATEST TRENDS",
    title: "Fresh in Studio",
    cta: { label: "View All", href: "/collections/new" }
  },
  testimonials: [
    { quote: "The fit of my custom lehenga was absolutely perfect. The detailing is exquisite, and the 4-day delivery to Mumbai was a lifesaver!", author: "Priya S." },
    { quote: "Aura Boutique is my go-to for both festive wear and office chic. The quality is unmatched.", author: "Neha R." }
  ],
  instagramShop: {
    title: "Shop the Gram",
    handle: "@auraboutique.patiala"
  },
  location: {
    title: "Visit Our Studio",
    address: "Tripuri, Patiala, Punjab",
    hours: "Mon - Sat, 10:00 AM - 8:00 PM",
    cta: { label: "Get Directions", href: "/contact" }
  },
  sustainablePromise: {
    title: "Our Commitment to Quality",
    points: [
      { title: "Premium Fabrics", description: "Sourced globally for unparalleled feel and durability." },
      { title: "Local Artisans", description: "Empowering the skilled craftsmen of Patiala." },
      { title: "Made to Last", description: "Timeless designs that transcend fast fashion trends." }
    ]
  },
  newsletter: {
    heading: "Join the Aura Inner Circle",
    placeholder: "Enter your email address",
    buttonLabel: "Subscribe"
  }
};
