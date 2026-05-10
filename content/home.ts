import { SEOData, HeroSection, CTA, Testimonial } from './types';

export const homeSEO: SEOData = {
  title: "Verma's Bakery & Sweets | Patiala's Heritage Bakery Since 1985",
  description: "Experience the warmth of Patiala's beloved heritage bakery. Discover our artisanal whole-wheat-jaggery bakes, signature Swiss rolls, and custom celebration cakes.",
};

export const globalAnnouncement = {
  text: "Pre-order our signature Biscoff specialties for the weekend. Local delivery available across Patiala.",
};

export const homeHero: HeroSection = {
  heading: "Crafting Sweet Memories for Generations",
  subheading: "Authentic Swiss rolls, artisanal breads, and bespoke celebration cakes baked fresh daily with local, premium ingredients.",
  cta: { label: "Order Now", href: "/pricing" },
  secondaryCta: { label: "Our Story", href: "/about" },
};

export const brandTrust = {
  statement: "A cherished Patiala heritage institution since 1985.",
};

export const introEditorial = {
  heading: "The Verma Legacy",
  content: "For over three decades, Verma's Bakery & Sweets has been the heart of Patiala's celebrations. What began as a modest neighborhood oven has blossomed into a beloved institution, yet our core remains unchanged: an unwavering commitment to craftsmanship, authentic recipes, and the warmth of a family kitchen.",
};

export const signatureSweetsShowcase = {
  heading: "Our Signature Bakes",
  items: [
    {
      name: "Classic Swiss Roll",
      description: "Our time-honored recipe featuring impossibly light sponge cake wrapped around fresh, whipped vanilla cream.",
      cta: { label: "Order", href: "/pricing#swiss-rolls" }
    },
    {
      name: "Biscoff Dream Cake",
      description: "A modern classic. Rich caramel and spiced biscuit flavors layered to perfection.",
      cta: { label: "Order", href: "/pricing#biscoff" }
    },
    {
      name: "Whole Wheat & Jaggery Cookies",
      description: "Traditional, rustic, and wholesome. Baked using locally sourced ingredients for an authentic taste.",
      cta: { label: "Order", href: "/pricing#cookies" }
    }
  ]
};

export const bespokeCakes = {
  heading: "Bespoke Celebration Cakes",
  content: "From intimate birthdays to grand weddings, our master decorators work closely with you to design cakes that are as breathtakingly beautiful as they are delicious. Every tier is a canvas of your vision, crafted with premium frostings and delicate details.",
  cta: { label: "Consultation", href: "/contact" }
};

export const homeTestimonials: Testimonial[] = [
  {
    quote: "Verma's isn't just a bakery; it's a part of our family history. They baked my wedding cake, and now they bake for my children's birthdays.",
    author: "Simran K.",
    role: "Loyal Patron"
  },
  {
    quote: "The only place in Patiala where the quality of the bread matches the warmth of the service. Their whole-wheat loaves are unparalleled.",
    author: "Chef Rajeev",
    role: "Local Restaurateur"
  }
];

export const localIngredients = {
  heading: "Rooted in Punjab",
  content: "We believe great baking starts with great farming. We proudly source our whole wheat, pure dairy, and rich jaggery from local Patiala farms, ensuring every bite supports our community and delivers unmatched freshness."
};

export const visitUs = {
  heading: "Visit the Bakery",
  address: "123 Heritage Lane, Old City, Patiala, Punjab 147001",
  hours: "Tuesday – Sunday: 8:00 AM – 9:00 PM | Monday: Closed",
  cta: { label: "Get Directions", href: "/contact" }
};
