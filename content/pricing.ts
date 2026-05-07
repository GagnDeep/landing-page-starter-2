export const pricingContent = {
  hero: {
    headline: "The Menu",
    subheadline: "Exceptional ingredients, transparently priced. Every cake is baked fresh to order.",
  },
  classic: {
    heading: "Classic Cakes",
    description: "Perfect for everyday celebrations. Available for immediate dispatch.",
    items: [
      { name: "Vanilla Bean Dream", price: "$65", serves: "8-10" },
      { name: "Double Chocolate Fudge", price: "$75", serves: "8-10" },
      { name: "Lemon Raspberry", price: "$70", serves: "8-10" },
    ]
  },
  signature: {
    heading: "Signature Creations",
    description: "Our pastry chefs' most elaborate, deeply layered creations.",
    items: [
      { name: "The Velvet Midnight", price: "$95", serves: "12-15", detail: "Dark chocolate, raspberry core." },
      { name: "Pistachio Rosewater", price: "$105", serves: "12-15", detail: "Persian-inspired perfection." },
      { name: "Caramel Macchiato", price: "$90", serves: "12-15", detail: "Espresso sponge, salted caramel." },
    ]
  },
  custom: {
    heading: "Custom & Wedding",
    description: "Bespoke designs tailored to your exact vision. Requires minimum 48 hours notice.",
    startingPrice: "Starts at $250",
    cta: "Request Consultation"
  },
  addons: {
    heading: "Gifts & Add-ons",
    items: [
      { name: "Dozen Red Roses", price: "$85" },
      { name: "Artisanal Truffle Box", price: "$45" },
      { name: "Sparkler Candles", price: "$15" },
      { name: "Handwritten Calligraphy Note", price: "$10" },
    ]
  },
  faq: {
    heading: "Ordering Questions",
    items: [
      { q: "Is delivery included?", a: "Delivery is calculated at checkout based on your distance from our kitchen." },
      { q: "Do you offer gluten-free options?", a: "Yes, we have a dedicated gluten-free menu to prevent cross-contamination." },
    ]
  }
};
