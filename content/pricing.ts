import { SEO, CTA } from "./types"

export const seo: SEO = {
  title: "Investment Menu | Villa Hair Sense",
  description:
    "Transparent pricing for our luxury hair services, color treatments, and bespoke styling at Villa Hair Sense, Chandigarh.",
}

export const hero = {
  heading: "The Investment Menu",
  subheading: "Transparent pricing for unparalleled artistry.",
}

export const pricingPhilosophy = {
  heading: "Our Philosophy",
  content:
    "We believe in complete transparency. Our pricing reflects the caliber of our master stylists, the premium products we utilize, and the unhurried, luxurious experience we provide.",
}

export const stylistTiers = {
  heading: "Understanding Our Tiers",
  content:
    "Prices vary based on the experience and demand of your chosen stylist. Whether you book with a Senior Stylist or our Master Founders, excellence is guaranteed.",
}

export const haircutMenu = {
  heading: "Precision Cutting & Styling",
  items: [
    { service: "The Butterfly Cut", price: "Starting at ₹2,500" },
    { service: "Bespoke Women's Cut", price: "Starting at ₹2,000" },
    { service: "Signature Blowout", price: "Starting at ₹1,000" },
  ],
}

export const colorMenu = {
  heading: "The Color Studio",
  items: [
    { service: "Custom Balayage", price: "Starting at ₹8,000" },
    { service: "Global Color", price: "Starting at ₹5,000" },
    { service: "Root Touch-up", price: "Starting at ₹2,500" },
  ],
}

export const chemicalMenu = {
  heading: "Texture & Smoothing",
  items: [
    { service: "Keratin Treatment", price: "Starting at ₹7,000" },
    { service: "Rebonding", price: "Starting at ₹6,000" },
  ],
}

export const spaMenu = {
  heading: "Restorative Rituals",
  items: [
    { service: "Kérastase Signature Spa", price: "Starting at ₹3,000" },
    { service: "Olaplex Standalone Treatment", price: "Starting at ₹3,500" },
    { service: "Intensive Scalp Detox", price: "Starting at ₹2,000" },
  ],
}

export const extensionsPricing = {
  heading: "Luxury Extensions",
  content:
    "Pricing for extensions requires an in-person consultation to determine length, volume, and color matching.",
}

export const bridalPackages = {
  heading: "Bridal Styling",
  content:
    "Bespoke bridal packages are available upon request. Please contact our salon coordinator for a tailored quote.",
}

export const mensMenu = {
  heading: "Gentlemen's Services",
  items: [
    { service: "Bespoke Men's Cut", price: "Starting at ₹1,000" },
    { service: "Beard Detailing", price: "Starting at ₹500" },
  ],
}

export const addonServices = {
  heading: "Enhancements",
  items: [
    { service: "Color Gloss / Toner", price: "Starting at ₹1,500" },
    { service: "Quick Hydration Mask", price: "Starting at ₹800" },
  ],
}

export const consultationFees = {
  heading: "Consultation Policy",
  content:
    "In-depth consultations are ₹500. This fee is fully redeemable against any service booked within 30 days.",
}

export const packageDeals = {
  heading: "Curated Packages",
  content:
    "Ask your stylist about our seasonal bundles for comprehensive transformations at preferred pricing.",
}

export const membershipTiers = {
  heading: "The Villa Insider Memberships",
  content:
    "Exclusive annual memberships offering significant value for our most frequent guests. Inquire within.",
}

export const cancellationPolicy = {
  heading: "Cancellation Policy",
  content:
    "We request a minimum of 24 hours' notice for cancellations. Late cancellations or no-shows may incur a fee of 50% of the booked service value.",
}

export const paymentMethods = {
  heading: "Accepted Payments",
  content: "We accept all major credit cards, UPI, and cash.",
}

export const faqPricing = {
  heading: "Pricing Questions",
  content:
    "All chemical service prices are baseline estimates. Final quotes are provided during your pre-service consultation based on hair density and length.",
}

export const giftCards = {
  heading: "The Gift of Luxury",
  content:
    "Beautifully presented gift cards are available for purchase in-salon or online, valid for all services and retail products.",
}

export const bookingCta = {
  heading: "Ready to Invest in Yourself?",
  subheading: "Secure your time with our specialists.",
  cta: { label: "Book Now", href: "/booking" } as CTA,
}
