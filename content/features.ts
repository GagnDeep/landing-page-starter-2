import { SEOData, HeroSection, TextBlock } from './types';

export const featuresSEO: SEOData = {
  title: "The Verma Difference | Artisanal Baking Techniques",
  description: "Explore the premium ingredients, slow-baking techniques, and custom craftsmanship that make Verma's Bakery the finest in Patiala.",
};

export const featuresHero: HeroSection = {
  heading: "The Verma Difference",
  subheading: "Where patience meets premium ingredients to create the exceptional.",
};

export const ingredientFocus = {
  heading: "Pure, Uncompromised Ingredients",
  items: [
    {
      title: "Local Whole Wheat & Jaggery",
      description: "We partner with Punjab's finest farmers to source nutrient-rich whole wheat and unrefined jaggery, creating rustic bakes that are as wholesome as they are flavorful."
    },
    {
      title: "Pure European-Style Butter",
      description: "Our laminations and frostings rely on high-fat, pure butter. No substitutes, no shortcuts. Just the rich, authentic taste of quality dairy."
    },
    {
      title: "Real Vanilla & Spices",
      description: "We use single-origin vanilla beans and freshly ground spices to ensure our flavors sing, completely avoiding artificial essences."
    }
  ]
};

export const techniqueShowcase = {
  heading: "The Art of Slow Baking",
  steps: [
    {
      stepNumber: "01",
      title: "Overnight Fermentation",
      description: "Our doughs rest extensively to develop complex flavors and a superior texture that cannot be rushed."
    },
    {
      stepNumber: "02",
      title: "Hand Lamination",
      description: "Every pastry is folded by hand to ensure the delicate, shatteringly crisp layers that define our morning bakes."
    },
    {
      stepNumber: "03",
      title: "Precision Baking",
      description: "Baked daily in small batches, ensuring every item hitting the display case is at peak freshness."
    }
  ]
};

export const customCraftsmanship: TextBlock = {
  heading: "Bespoke Artistry",
  content: "A cake is the centerpiece of your celebration. Our decorators are artisans, specializing in delicate sugar flowers, hand-painted details, and structural perfection. We don't just bake cakes; we craft edible centerpieces tailored to your unique aesthetic."
};

export const dietaryOptions = {
  heading: "Thoughtfully Crafted for All",
  content: "We believe everyone deserves a slice of joy. We offer carefully curated selections of eggless, gluten-sensitive, and refined-sugar-free bakes without compromising our high standards of taste and texture."
};

export const freshnessGuarantee = {
  heading: "The Daily Bake Promise",
  content: "If it's on our shelves, it was baked today. We pride ourselves on a zero-day holdover policy for our fresh pastries and breads, donating any evening surplus to local Patiala charities."
};

export const eventCatering = {
  heading: "Elevate Your Events",
  content: "From lavish dessert tables at grand weddings to elegant boxed pastries for corporate boardrooms, our catering team ensures your guests experience the pinnacle of Patiala's bakery heritage."
};

export const packagingDesign = {
  heading: "Sustainable Heritage Packaging",
  content: "Our signature pink and gold boxes are crafted from 100% recycled materials. Beautiful enough to gift, sturdy enough to protect delicate bakes, and kind to our environment."
};

export const corporateGifting = {
  heading: "Corporate Gifting",
  content: "Leave a lasting impression with bespoke gifting boxes tailored for corporate events, Diwali distributions, and executive client appreciation."
};

export const comparisonTable = {
  heading: "The Verma Standard",
  columns: ["", "Verma's Artisanal", "Commercial Bakery"],
  rows: [
    ["Butter", "100% Pure European-Style", "Margarine Blends"],
    ["Wheat", "Locally Sourced Whole Wheat", "Bleached White Flour"],
    ["Flavorings", "Real Vanilla Beans & Spices", "Artificial Essences"],
    ["Bake Cycle", "Daily, Zero Holdover", "Preservative Extended"]
  ]
};

export const customerTestimonial = {
  quote: "The only bakery in Punjab that respects the ingredients as much as they respect their customers.",
  author: "Chef Vikas",
  role: "Culinary Director"
};

export const faqPreview = {
  heading: "Common Questions",
  questions: [
    { q: "Are your breads vegan?", a: "Many of our rustic breads are naturally vegan, containing only flour, water, salt, and yeast." },
    { q: "How long do the cookies last?", a: "Stored in an airtight container, our whole wheat jaggery cookies stay fresh for up to two weeks." }
  ]
};

export const tasteTheDifferenceCTA = {
  heading: "Taste the difference craftsmanship makes.",
  cta: { label: "Explore Our Menu", href: "/pricing" }
};
