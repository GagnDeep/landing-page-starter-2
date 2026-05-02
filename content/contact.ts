import { SEO, CTA } from "./types"

export const seo: SEO = {
  title: "Contact & Location | Villa Hair Sense Chandigarh",
  description:
    "Get in touch with Villa Hair Sense to book your appointment, find our Sector 9 location, or inquire about our luxury salon services.",
}

export const hero = {
  heading: "Connect With Us",
  subheading:
    "We are here to assist you with appointments, inquiries, and consultations.",
}

export const primaryContact = {
  heading: "Reach Out",
  details: [
    { label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    {
      label: "Email",
      value: "hello@villahairsense.com",
      href: "mailto:hello@villahairsense.com",
    },
    {
      label: "WhatsApp",
      value: "Message Us",
      href: "https://wa.me/919876543210",
    },
  ],
}

export const locationDetails = {
  heading: "The Destination",
  address: "Sector 9, Madhya Marg,\nChandigarh, 160009\nIndia",
  directions:
    "Located prominently on Madhya Marg, easily accessible with ample parking in the immediate vicinity.",
}

export const operatingHours = {
  heading: "Hours of Operation",
  hours: [
    { day: "Tuesday - Friday", time: "10:00 AM - 8:00 PM" },
    { day: "Saturday - Sunday", time: "9:00 AM - 8:00 PM" },
    { day: "Monday", time: "Closed for Rest & Education" },
  ],
}

export const contactForm = {
  heading: "Send an Inquiry",
  fields: [
    "Name",
    "Email",
    "Phone Number",
    "Service of Interest",
    "Your Message",
  ],
  submitLabel: "Send Message",
}

export const bookingWidget = {
  heading: "Instant Booking",
  description:
    "Prefer to manage your own schedule? Use our live booking system.",
}

export const socialLinks = {
  heading: "Follow Us",
  links: [
    { label: "Instagram", href: "https://instagram.com/villahairsense" },
    { label: "Facebook", href: "https://facebook.com/villahairsense" },
  ],
}

export const responseTime = {
  content:
    "Our front desk concierge aims to respond to all digital inquiries within 2 hours during regular business hours.",
}

export const pressInquiries = {
  heading: "Press & Media",
  email: "pr@villahairsense.com",
}

export const careerInquiries = {
  heading: "Join The Team",
  email: "careers@villahairsense.com",
}

export const accessibilityInfo = {
  heading: "Accessibility",
  content:
    "Our ground-floor salon is fully wheelchair accessible. Please let us know if you require any specific accommodations.",
}

export const virtualTour = {
  heading: "Explore the Space",
  cta: { label: "Take a Virtual Tour", href: "#" } as CTA,
}

export const faqTeaser = {
  heading: "Quick Answers",
  content: "Looking for policy details or booking advice?",
  cta: { label: "Read the FAQ", href: "/faq" } as CTA,
}

export const secondaryCta = {
  heading: "Not ready to book?",
  subheading: "Join our guestlist to receive exclusive updates.",
  cta: { label: "Subscribe", href: "#newsletter" } as CTA,
}
