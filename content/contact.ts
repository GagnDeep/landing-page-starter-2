import { SEOData, HeroSection } from './types';

export const contactSEO: SEOData = {
  title: "Contact & Location | Verma's Bakery & Sweets",
  description: "Get in touch with Verma's Bakery. Find our Patiala location, opening hours, and contact information for orders and inquiries.",
};

export const contactHero: HeroSection = {
  heading: "Visit Us",
  subheading: "We'd love to hear from you. Stop by the bakery or send us a message.",
};

export const contactDetails = {
  address: {
    heading: "The Bakery",
    lines: ["123 Heritage Lane", "Old City, Patiala", "Punjab 147001", "India"]
  },
  hours: {
    heading: "Opening Hours",
    schedule: [
      { days: "Tuesday – Saturday", time: "8:00 AM – 9:00 PM" },
      { days: "Sunday", time: "9:00 AM – 8:00 PM" },
      { days: "Monday", time: "Closed for Deep Cleaning & Prep" }
    ]
  },
  contact: {
    heading: "Get in Touch",
    phone: "+91 98765 43210",
    email: "hello@vermasbakery.com"
  }
};

export const formLabels = {
  heading: "Send an Inquiry",
  description: "For custom cakes or large orders, please provide as much detail as possible (date, guest count, theme).",
  fields: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number (Optional)",
    inquiryType: "Inquiry Type",
    inquiryOptions: ["General Question", "Custom Cake Request", "Wholesale/Catering", "Feedback"],
    message: "Your Message",
    submit: "Send Message"
  },
  successMessage: "Thank you for reaching out. A member of our family will get back to you within 24 hours."
};
