import { SEO } from './types';

export interface ContactContent {
  seo: SEO;
  hero: {
    headline: string;
  };
  details: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  form: {
    headline: string;
    subheadline: string;
    fields: {
      names: string;
      email: string;
      phone: string;
      eventDates: string;
      guestCount: string;
      location: string;
      vision: string;
    };
    submitLabel: string;
  };
  faq: Array<{ question: string; answer: string }>;
}

export const contactContent: ContactContent = {
  seo: {
    title: "Contact Us | Guide Events",
    description: "Begin the conversation. Reach out to Guide Events to orchestrate your luxury destination wedding.",
  },
  hero: {
    headline: "Begin the Conversation",
  },
  details: {
    address: "Sector 21C, Chandigarh, India",
    phone: "+91 98765 43210",
    email: "inquiries@guideevents.com",
    hours: "Monday – Saturday, 10:00 AM – 7:00 PM (IST)",
  },
  form: {
    headline: "Inquire About Your Celebration",
    subheadline: "Please provide the preliminary details of your event. A senior planner will contact you within 24 hours.",
    fields: {
      names: "Couple's Names",
      email: "Email Address",
      phone: "Phone Number (with Country Code)",
      eventDates: "Anticipated Event Dates",
      guestCount: "Estimated Guest Count",
      location: "Desired Location/Venue (if known)",
      vision: "Tell us about your vision (Aesthetic, Vibe, Specific Needs)",
    },
    submitLabel: "Request a Consultation",
  },
  faq: [
    {
      question: "What happens during the initial consultation?",
      answer: "The discovery call is a relaxed, complimentary conversation. We will discuss your vision, expected guest count, destination preferences, and how our services align with your needs.",
    },
    {
      question: "Do you charge for the first meeting?",
      answer: "No, the initial discovery consultation is entirely complimentary.",
    },
  ],
};