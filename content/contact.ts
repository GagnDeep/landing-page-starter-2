import { SEO } from "./home";

export interface ContactContent {
  seo: SEO;
  hero: { headline: string; subheadline: string };
  info: {
    address: { label: string; value: string };
    phone: { label: string; value: string };
    email: { label: string; value: string };
    hours: { label: string; value: string[] };
  };
  form: {
    title: string;
    fields: { name: string; email: string; inquiryType: string; message: string };
    submit: string;
  };
}

export const contactContent: ContactContent = {
  seo: {
    title: "Contact the Atelier | Sardaar G. Tailors",
    description: "Get in touch with Sardaar G. Tailors in Patiala to schedule your bespoke consultation."
  },
  hero: {
    headline: "Get in Touch",
    subheadline: "Schedule a fitting or inquire about our bespoke services."
  },
  info: {
    address: { label: "Studio Location", value: "New Market, Tripuri, Patiala, Punjab 147001" },
    phone: { label: "Phone", value: "+91 98765 43210" },
    email: { label: "Email", value: "atelier@sardaargtailors.com" },
    hours: { label: "Hours of Operation", value: ["Tuesday - Sunday: 10:00 AM - 8:00 PM", "Monday: Closed for Studio Work"] }
  },
  form: {
    title: "Send an Inquiry",
    fields: {
      name: "Full Name",
      email: "Email Address",
      inquiryType: "Nature of Inquiry (e.g., Wedding Trousseau, Kurta Fitting)",
      message: "Your Message"
    },
    submit: "Send Message"
  }
};
