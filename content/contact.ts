import { SEOContent } from './types';

export const contactContent = {
  seo: {
    title: "Contact Us | YAVA DESIGNS",
    description: "Get in touch with the YAVA DESIGNS atelier. Schedule a consultation, visit our Chandigarh studio, or reach out for bespoke inquiries."
  } as SEOContent,
  hero: {
    title: "Connect With Us",
    subtitle: "Whether you are beginning your bespoke journey or have a question about our collections, we are here to assist you."
  },
  methods: [
    {
      title: "Email",
      description: "For detailed inquiries and custom design requests.",
      detail: "atelier@yavadesigns.com",
      action: "Send an Email"
    },
    {
      title: "WhatsApp & Phone",
      description: "For immediate assistance and consultation bookings.",
      detail: "+91 98765 43210",
      action: "Message Us"
    },
    {
      title: "The Atelier",
      description: "Visit us in Chandigarh by appointment only.",
      detail: "Sector 10, Chandigarh, India",
      action: "Get Directions"
    }
  ],
  form: {
    heading: "Send an Inquiry",
    fields: {
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number (with Country Code)",
      interest: "Area of Interest",
      message: "How may we help you?"
    },
    interests: [
      "Bespoke Consultation",
      "Bridal Inquiry",
      "Existing Order Status",
      "Press / Collaboration"
    ],
    submitCTA: "Submit Inquiry"
  },
  studioDetails: {
    heading: "Visit the Studio",
    description: "Experience our fabrics and craftsmanship firsthand. Our studio operates by appointment only to ensure every client receives undivided attention.",
    hours: [
      { day: "Monday - Saturday", time: "11:00 AM - 7:00 PM" },
      { day: "Sunday", time: "Closed (Available for special bridal appointments)" }
    ]
  }
};
