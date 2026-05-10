import { SEOData, HeroSection } from './types';

export const pricingSEO: SEOData = {
  title: "Menu & Pricing | Verma's Bakery & Sweets",
  description: "Browse our menu of artisanal breads, signature pastries, and bespoke celebration cakes. Transparent pricing for premium quality.",
};

export const pricingHero: HeroSection = {
  heading: "Our Menu & Offerings",
  subheading: "Baked fresh daily. Crafted to order.",
};

export const menuCategories = [
  { id: "signature", label: "Signature Sweets" },
  { id: "breads", label: "Artisanal Breads" },
  { id: "cakes", label: "Custom Cakes" },
  { id: "savories", label: "Savories" }
];

export const menuItems = {
  signature: [
    { name: "Classic Vanilla Swiss Roll", description: "Light sponge, fresh cream.", price: "₹150", featured: true },
    { name: "Chocolate Truffle Swiss Roll", description: "Rich cocoa sponge, dark ganache.", price: "₹180" },
    { name: "Biscoff Dream Slice", description: "Lotus biscuit base, caramel cream.", price: "₹220", featured: true },
    { name: "Whole Wheat Jaggery Cookie Box", description: "Box of 12 rustic cookies.", price: "₹300" }
  ],
  breads: [
    { name: "Sourdough Boule", description: "Naturally leavened, 24-hour ferment.", price: "₹250", featured: true },
    { name: "100% Whole Wheat Loaf", description: "Soft, everyday sandwich bread.", price: "₹80" },
    { name: "Garlic & Herb Focaccia", description: "Olive oil rich, baked fresh.", price: "₹180" }
  ],
  savories: [
    { name: "Mushroom & Truffle Quiche", description: "Flaky crust, savory custard.", price: "₹200" },
    { name: "Spicy Paneer Puff", description: "Hand-laminated pastry, spiced filling.", price: "₹90", featured: true }
  ]
};

export const customCakePricing = {
  heading: "Bespoke Celebration Cakes",
  description: "Our custom cakes are priced based on size, flavor complexity, and the intricacy of the design.",
  basePricing: [
    { tier: "Single Tier (6 inch)", servings: "8-10 Servings", startingPrice: "₹1,200" },
    { tier: "Single Tier (8 inch)", servings: "15-20 Servings", startingPrice: "₹2,000" },
    { tier: "Two Tier", servings: "30-40 Servings", startingPrice: "₹4,500" },
    { tier: "Three Tier Wedding", servings: "75+ Servings", startingPrice: "From ₹9,000" }
  ],
  flavors: {
    sponges: ["Classic Vanilla Bean", "Rich Belgian Chocolate", "Red Velvet", "Pistachio & Cardamom"],
    fillings: ["Fresh Berry Compote", "Salted Caramel", "Dark Chocolate Ganache", "Biscoff Buttercream"]
  },
  addons: "Custom sugar flowers, fondant sculptures, and edible gold leaf are quoted separately based on design requirements."
};

export const orderingProcess = {
  heading: "How to Order",
  steps: [
    { title: "Browse & Select", description: "Review our menu. For standard items, walk in or call ahead." },
    { title: "Consultation", description: "For custom cakes, schedule a consultation to discuss flavors and design." },
    { title: "Confirm & Enjoy", description: "A 50% deposit secures your date. We'll handle the rest." }
  ]
};

export const dietaryInfo = {
  text: "Eggless options are available for most of our menu items. Please inquire about specific gluten-sensitive or vegan requirements. Note: We bake in a facility that handles nuts and wheat."
};
