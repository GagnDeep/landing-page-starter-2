import { BasePageContent } from './types';

export interface ContactContent extends BasePageContent {
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  form: {
    heading: string;
    successTitle: string;
    successMessage: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitLabel: string;
  };
  social: {
    heading: string;
    instagram: string;
    facebook: string;
  };
  detailsHeading: string;
}

export const contactContent: ContactContent = {
  seo: {
    title: "Contact Us | Book a Fitting | Aura Boutique",
    description: "Get in touch with Aura Boutique in Patiala. Book a custom fitting, ask about an order, or send us a message.",
  },
  hero: {
    heading: "Get in Touch",
    subheading: "We would love to hear from you. Drop by our studio or send us a message.",
  },
  contactInfo: {
    email: "hello@auraboutique.in",
    phone: "+91 98765 43210",
    address: "Aura Boutique, 123 Fashion Street, Tripuri, Patiala, Punjab 147001",
    hours: "Monday - Saturday: 10:00 AM - 8:00 PM"
  },
  form: {
    heading: "Send a Message",
    successTitle: "Message Sent Successfully!",
    successMessage: "Thank you for reaching out. We will get back to you shortly.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    subjectLabel: "Subject / Inquiry Type",
    messageLabel: "Your Message",
    submitLabel: "Send Message"
  },
  social: {
    heading: "Connect with us",
    instagram: "https://instagram.com/auraboutique.patiala",
    facebook: "https://facebook.com/auraboutiquepatiala"
  },
  detailsHeading: "Studio Details"
};
