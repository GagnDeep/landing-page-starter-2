import { SEOContent } from './types';

export const pricingContent = {
  seo: {
    title: "Pricing & Investment | YAVA DESIGNS",
    description: "Understand the investment behind our bespoke ethnic wear. Transparent pricing based on fabric, embroidery, and meticulous craftsmanship."
  } as SEOContent,
  hero: {
    title: "An Investment in Craft",
    subtitle: "Transparent pricing that reflects the quality of materials, the complexity of design, and the hours of dedicated artistry."
  },
  philosophy: {
    heading: "Our Pricing Philosophy",
    description: "True bespoke clothing is not standardized. The final investment for your garment will depend on your choice of fabric, the intricacy of the hand-embroidery, and specific design requirements. The figures below represent our starting points for various categories, guiding you as you plan your custom wardrobe."
  },
  categories: [
    {
      title: "Everyday Elegance",
      description: "Sophisticated, lightweight suits perfect for daily wear, office environments, or casual gatherings. Focuses on premium pure cottons and elegant, minimal detailing.",
      startingPrice: "Starting at ₹4,500 / $55 USD"
    },
    {
      title: "Festive & Occasion Wear",
      description: "Elevated ensembles designed to make an entrance. Utilizing rich silks, georgettes, and velvets, featuring detailed hand-embroidery and custom styling.",
      startingPrice: "Starting at ₹12,000 / $145 USD"
    },
    {
      title: "Bridal & Couture",
      description: "Heirloom-quality masterpieces requiring extensive consultation, multiple fittings (virtual or in-person), and weeks of meticulous handcrafting.",
      startingPrice: "Custom Quote Required"
    }
  ],
  whatsIncluded: {
    heading: "The YAVA Standard",
    items: [
      "Initial style and fabric consultation",
      "Detailed measurement guidance (virtual or in-person)",
      "Premium fabric sourcing and preparation",
      "Expert tailoring and hand-finishing",
      "Final quality assurance inspection",
      "Elegant, protective packaging"
    ]
  },
  faqTeaser: {
    heading: "Questions about your investment?",
    questions: [
      {
        q: "Do you require a deposit?",
        a: "Yes, we require a 50% advance to begin sourcing your fabric and initiating the tailoring process."
      },
      {
        q: "Are shipping costs included?",
        a: "Domestic shipping within India is complimentary. International shipping is calculated based on destination and package weight."
      }
    ]
  },
  cta: {
    heading: "Let us create something beautiful together.",
    ctaLabel: "Schedule a Consultation",
    href: "/contact"
  }
};
