export interface HomeContent {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    logoText: string;
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustBar: {
    ratingText: string;
    experienceText: string;
    partnerLogosAlt: string[];
  };
  ethos: {
    heading: string;
    paragraphs: string[];
  };
  services: {
    heading: string;
    items: { title: string; description: string }[];
  };
  galleryIntro: {
    heading: string;
    subheading: string;
  };
  liveCooking: {
    heading: string;
    description: string;
  };
  menuHighlights: {
    heading: string;
    categories: { name: string; items: { name: string; description: string }[] }[];
  };
  howItWorks: {
    heading: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    heading: string;
    reviews: { quote: string; author: string; role: string }[];
  };
  caseStudy: {
    heading: string;
    eventTitle: string;
    stats: { label: string; value: string }[];
    story: string;
  };
  chefs: {
    heading: string;
    profiles: { name: string; role: string; bio: string }[];
  };
  quality: {
    heading: string;
    features: { title: string; description: string }[];
  };
  pricingTeaser: {
    heading: string;
    description: string;
    tiers: string[];
    cta: string;
  };
  venues: {
    heading: string;
    logosAlt: string[];
  };
  faqTeaser: {
    heading: string;
    questions: { q: string; a: string }[];
  };
  blogTeaser: {
    heading: string;
    posts: { title: string; excerpt: string; date: string }[];
  };
  newsletter: {
    heading: string;
    description: string;
    placeholder: string;
    button: string;
  };
  preFooterCta: {
    heading: string;
    button: string;
  };
  footer: {
    address: string;
    phone: string;
    email: string;
    links: { label: string; href: string }[];
    socials: string[];
    copyright: string;
  };
}

export const homeContent: HomeContent = {
  meta: {
    title: "Bawa Caterers Enterprises | Premium Royal Punjabi Catering in Patiala",
    description: "Experience the grandeur of Royal Punjabi hospitality. Bawa Caterers offers premium wedding and event catering, signature live stalls, and impeccable service in Patiala.",
  },
  navigation: {
    logoText: "Bawa Caterers",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Story", href: "/about" },
      { label: "Services", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Journal", href: "/blog" },
    ],
    cta: "Book a Tasting",
  },
  hero: {
    headline: "A Grand Feast Awaits.",
    subtitle: "Bringing the opulence of Royal Punjabi heritage to your most cherished celebrations. Impeccable taste, grand presentation, and warmth in every serving.",
    primaryCta: "Plan Your Event",
    secondaryCta: "Explore the Menu",
  },
  trustBar: {
    ratingText: "Rated 4.8/5 by over 500 happy families",
    experienceText: "Serving Patiala's grandest events for over 15 years",
    partnerLogosAlt: ["Patiala Palace Banquet", "Royal Orchid Hotel", "The Grand Heritage"],
  },
  ethos: {
    heading: "The Royal Punjabi Promise",
    paragraphs: [
      "At Bawa Caterers Enterprises, we do not merely serve food; we curate an experience of grand hospitality. Rooted deeply in the rich culinary traditions of Punjab, our spreads are designed to evoke warmth, joy, and indulgence.",
      "From the meticulous selection of spices to the flawless execution of service by our uniformed staff, every detail is handled with professional precision to ensure your celebration is truly unforgettable."
    ],
  },
  services: {
    heading: "Signature Offerings",
    items: [
      { title: "Grand Weddings", description: "Breathtaking culinary experiences crafted for your special day, featuring expansive multi-course feasts." },
      { title: "Live Interactive Stalls", description: "The theatrics of food brought to life. Watch our master chefs prepare sizzling chaat and tandoor delicacies right before your eyes." },
      { title: "Corporate Banquets", description: "Sophisticated and scalable catering solutions tailored for high-end professional gatherings and galas." },
      { title: "Intimate Gatherings", description: "Boutique catering designed for smaller, exclusive events where every detail matters." },
    ],
  },
  galleryIntro: {
    heading: "The Royal Spread",
    subheading: "A visual journey through our most celebrated dishes and magnificent presentations.",
  },
  liveCooking: {
    heading: "The Mastery of the Live Stall",
    description: "Feel the warmth of the tandoor and the aroma of fresh spices. Our live cooking stations provide an interactive, sensory experience that delights guests and brings the vibrant energy of Punjabi street food to your elegant affair.",
  },
  menuHighlights: {
    heading: "A Taste of Opulence",
    categories: [
      {
        name: "Starters",
        items: [
          { name: "Saffron Paneer Tikka", description: "Cottage cheese marinated in rich saffron, char-grilled to perfection." },
          { name: "Galouti Kebab", description: "Melt-in-the-mouth minced kebabs infused with traditional Awadhi spices." }
        ]
      },
      {
        name: "Mains",
        items: [
          { name: "Dal Makhani", description: "Slow-cooked black lentils simmered overnight for an incredibly rich texture." },
          { name: "Shahi Biryani", description: "Fragrant basmati rice layered with premium ingredients, sealed with dough." }
        ]
      }
    ]
  },
  howItWorks: {
    heading: "The Bawa Experience",
    steps: [
      { title: "Consultation", description: "We begin with a detailed discussion to understand your vision, theme, and dietary preferences." },
      { title: "The Tasting", description: "Experience a private tasting session to curate your personalized menu." },
      { title: "Meticulous Planning", description: "Our team coordinates every logistical detail, ensuring flawless execution." },
      { title: "The Grand Execution", description: "Relax and enjoy your celebration as we deliver a spectacular culinary experience." }
    ]
  },
  testimonials: {
    heading: "The Royal Court",
    reviews: [
      { quote: "The live stalls were the absolute highlight of our wedding. The flavors were authentic, and the service was nothing short of regal.", author: "Amanpreet Kaur", role: "Bride" },
      { quote: "Professional, punctual, and profoundly delicious. Bawa Caterers elevated our corporate gala to a new standard of luxury.", author: "Rajiv Singh", role: "Event Director" }
    ]
  },
  caseStudy: {
    heading: "A Night of Thousand Lights",
    eventTitle: "The Gill-Sandhu Wedding Gala",
    stats: [
      { label: "Guests Served", value: "1,200+" },
      { label: "Live Stalls", value: "15" },
      { label: "Chefs Deployed", value: "45" }
    ],
    story: "For the grand Gill-Sandhu wedding, we transformed the venue into a culinary paradise, offering an expansive menu spanning 5 distinct regional cuisines, all orchestrated with seamless precision."
  },
  chefs: {
    heading: "Meet the Masters",
    profiles: [
      { name: "Chef Harjeet Singh", role: "Executive Culinary Director", bio: "With over two decades of experience, Chef Harjeet brings authentic Punjabi recipes passed down through generations." },
      { name: "Chef Vikram Bawa", role: "Head of Live Experiences", bio: "A pioneer in interactive catering, Chef Vikram ensures every live stall is a theatrical masterpiece." }
    ]
  },
  quality: {
    heading: "Our Commitment to Excellence",
    features: [
      { title: "Premium Sourcing", description: "We partner directly with local farmers to ensure only the freshest, highest-quality ingredients." },
      { title: "Authentic Spices", description: "Our spice blends are roasted and ground in-house, preserving the true essence of Punjabi flavor." },
      { title: "Impeccable Hygiene", description: "We maintain the highest standards of cleanliness and food safety from prep kitchen to serving station." }
    ]
  },
  pricingTeaser: {
    heading: "Tailored for Every Grandeur",
    description: "From elegant intimate gatherings to lavish platinum-tier weddings, we offer curated packages to suit the scale of your celebration.",
    tiers: ["The Silver Feast", "The Gold Standard", "The Royal Platinum"],
    cta: "View Full Pricing Details"
  },
  venues: {
    heading: "Preferred Partners",
    logosAlt: ["The Royal Fort Patiala", "Majestic Banquets", "Heritage Gardens", "Imperial Palace"]
  },
  faqTeaser: {
    heading: "Common Inquiries",
    questions: [
      { q: "Do you cater events outside of Patiala?", a: "Yes, we proudly serve clients across Punjab and neighboring regions for large-scale events." },
      { q: "Can we customize the menu completely?", a: "Absolutely. Our chefs work with you to design a bespoke menu that fits your exact preferences." }
    ]
  },
  blogTeaser: {
    heading: "The Royal Kitchen Journal",
    posts: [
      { title: "Top 5 Live Stall Trends for 2024 Weddings", excerpt: "Discover the interactive food stations that are captivating guests this season.", date: "March 15, 2024" },
      { title: "The Secret Behind Our Signature Dal Makhani", excerpt: "A glimpse into the overnight slow-cooking process that creates our most beloved dish.", date: "February 28, 2024" }
    ]
  },
  newsletter: {
    heading: "Join Our Table",
    description: "Subscribe to receive culinary inspiration, exclusive tasting invitations, and the latest trends in luxury event planning.",
    placeholder: "Enter your email address",
    button: "Subscribe"
  },
  preFooterCta: {
    heading: "Let Us Craft Your Perfect Menu.",
    button: "Contact Us Today"
  },
  footer: {
    address: "Bawa Caterers Enterprises, 45 Heritage Avenue, Patiala, Punjab 147001",
    phone: "+91 98765 43210",
    email: "events@bawacaterers.com",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" }
    ],
    socials: ["Instagram", "Facebook", "LinkedIn"],
    copyright: "© 2024 Bawa Caterers Enterprises. All rights reserved."
  }
};
