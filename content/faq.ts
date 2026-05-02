import { SEO, CTA } from "./types"

export const seo: SEO = {
  title: "Frequently Asked Questions | Villa Hair Sense",
  description:
    "Find answers to common questions about booking, services, pricing, and salon policies at Villa Hair Sense, Chandigarh.",
}

export const hero = {
  heading: "How Can We Assist You?",
  subheading:
    "Everything you need to know to prepare for your Villa Hair Sense experience.",
}

export const quickLinks = [
  { label: "Booking & Appointments", href: "#booking" },
  { label: "Services & Treatments", href: "#services" },
  { label: "Pricing & Payments", href: "#pricing" },
  { label: "Location & Policies", href: "#location" },
]

export const bookingFaq = {
  category: "Booking & Appointments",
  id: "booking",
  questions: [
    {
      q: "How far in advance should I book my appointment?",
      a: "To secure your preferred stylist and time slot, we recommend booking 1-2 weeks in advance, especially for extensive color services or weekend appointments.",
    },
    {
      q: "Do you accept walk-ins?",
      a: "While we do accommodate walk-ins when our schedule permits, we strongly advise booking an appointment to ensure you receive the unhurried, premium experience we are known for.",
    },
    {
      q: "What is your cancellation policy?",
      a: "We kindly request at least 24 hours' notice for any cancellations or rescheduling. Cancellations made with less notice may incur a fee equivalent to 50% of the scheduled service value.",
    },
  ],
}

export const servicesFaq = {
  category: "Services & Treatments",
  id: "services",
  questions: [
    {
      q: "What exactly is a Butterfly Cut?",
      a: "The Butterfly Cut is a highly layered, voluminous style. It utilizes shorter face-framing layers (resembling butterfly wings) combined with longer layers to create movement and texture without sacrificing overall length.",
    },
    {
      q: "How long does a Balayage appointment take?",
      a: "Custom balayage is an intricate process. Depending on your hair's length, density, and starting color, you should anticipate being in the salon for 3 to 5 hours.",
    },
    {
      q: "Are your smoothing treatments safe for color-treated hair?",
      a: "Absolutely. We offer specific keratin and smoothing formulations that are not only safe but actually enhance and protect color-treated hair.",
    },
  ],
}

export const pricingFaq = {
  category: "Pricing & Payments",
  id: "pricing",
  questions: [
    {
      q: "Why do prices vary by stylist?",
      a: "Our pricing structure reflects the education, experience, and demand of our stylists. Our Master Stylists, Aarif and Arman, have the highest level of expertise and demand, which is reflected in their tier pricing.",
    },
    {
      q: "Are the prices listed on the website final?",
      a: "For chemical and color services, the listed prices are starting points. Final pricing depends on product usage, hair length, and density, and will always be confirmed during your consultation before any service begins.",
    },
  ],
}

export const locationFaq = {
  category: "Location, Preparation & Policies",
  id: "location",
  questions: [
    {
      q: "Is there parking available near the salon?",
      a: "Yes, there is ample public parking available in Sector 9, Madhya Marg, directly adjacent to our salon.",
    },
    {
      q: "How should I prepare my hair for a color appointment?",
      a: "Please arrive with dry, relatively clean hair (washed within the last 48 hours is ideal). Avoid heavy styling products, dry shampoo, or root touch-up sprays on the day of your appointment.",
    },
    {
      q: "Can I bring my child or a guest?",
      a: "To maintain the relaxing, tranquil environment our clients expect, we politely request that you attend your appointment solo, unless your child is also receiving a service.",
    },
  ],
}

export const contactCta = {
  heading: "Still Have Questions?",
  subheading: "Our salon coordinators are here to help.",
  cta: { label: "Contact Us", href: "/contact" } as CTA,
}
