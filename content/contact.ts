import { BasePageContent } from './types';

export interface ContactContent extends BasePageContent {
  header: {
    title: string;
    subtitle: string;
  };
  info: {
    address: { title: string; lines: string[] };
    hours: { title: string; lines: string[] };
    contact: { title: string; phone: string; email: string };
  };
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      inquiryType: string;
      message: string;
    };
    submitLabel: string;
  };
}

export const contactContent: ContactContent = {
  seo: {
    title: "Contact Us | Kohinoor Trends Chandigarh",
    description: "Get in touch with Kohinoor Trends. Book a styling appointment, inquire about our collections, or visit our Chandigarh boutique.",
    keywords: ["contact Kohinoor Trends", "Chandigarh boutique address", "book styling appointment", "ethnic wear store location"],
  },
  header: {
    title: "Get in Touch",
    subtitle: "We welcome your inquiries and look forward to assisting you.",
  },
  info: {
    address: {
      title: "Boutique Location",
      lines: ["SCO 123, Sector 17-C", "Chandigarh, 160017", "India"]
    },
    hours: {
      title: "Operating Hours",
      lines: ["Monday - Saturday: 10:30 AM - 8:00 PM", "Sunday: Closed"]
    },
    contact: {
      title: "Direct Contact",
      phone: "+91 172 123 4567",
      email: "inquiries@kohinoortrends.com"
    }
  },
  form: {
    title: "Send us a Message",
    fields: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      inquiryType: "Nature of Inquiry",
      message: "Your Message"
    },
    submitLabel: "Send Message"
  }
};
