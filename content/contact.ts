export interface SEO {
  title: string;
  description: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  link?: string;
}

export interface FormFields {
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  datePlaceholder: string;
  guestCountPlaceholder: string;
  venuePlaceholder: string;
  visionPlaceholder: string;
  submitText: string;
}

export interface ContactContent {
  seo: SEO;
  hero: {
    headline: string;
    subheadline: string;
  };
  form: {
    headline: string;
    fields: FormFields;
    privacyAssurance: string;
    newsletterOptIn: string;
    responseTime: string;
  };
  directContact: {
    headline: string;
    details: ContactDetail[];
  };
  headquarters: {
    headline: string;
    address: string;
    mapLinkText: string;
  };
  operatingHours: {
    headline: string;
    hours: string;
  };
  processInfo: {
    headline: string;
    description: string;
  };
  faqTeaser: {
    text: string;
    linkText: string;
  };
  specializedContacts: {
    corporate: ContactDetail;
    press: ContactDetail;
    vendors: ContactDetail;
  };
  socialMedia: {
    headline: string;
    platforms: ContactDetail[];
  };
  testimonial: {
    quote: string;
    author: string;
  };
  secondaryCta: {
    headline: string;
    ctaText: string;
  };
}

export const contactContent: ContactContent = {
  seo: {
    title: "Contact & Consultations | Oasis Caterers",
    description: "Connect with the Oasis concierge to begin planning your bespoke culinary experience in Patiala and beyond.",
  },
  hero: {
    headline: "Begin the Conversation",
    subheadline: "Reach out to our dedicated concierge to discuss the vision for your upcoming celebration.",
  },
  form: {
    headline: "Inquire About Your Event",
    fields: {
      namePlaceholder: "Your Full Name",
      emailPlaceholder: "Email Address",
      phonePlaceholder: "Phone Number (Optional)",
      datePlaceholder: "Anticipated Event Date",
      guestCountPlaceholder: "Estimated Guest Count",
      venuePlaceholder: "Venue or Location",
      visionPlaceholder: "Briefly describe the vision for your event...",
      submitText: "Request a Consultation",
    },
    privacyAssurance: "Your details are held in strict confidence and will only be used to facilitate your consultation.",
    newsletterOptIn: "Subscribe to The Journal for seasonal culinary insights.",
    responseTime: "Our concierge team will review your inquiry and respond within 24 hours to schedule an initial consultation.",
  },
  directContact: {
    headline: "Direct Inquiries",
    details: [
      { label: "Concierge Email", value: "concierge@oasiscaterers.com", link: "mailto:concierge@oasiscaterers.com" },
      { label: "Phone & WhatsApp", value: "+91 98765 43210", link: "tel:+919876543210" },
    ],
  },
  headquarters: {
    headline: "The Culinary Studio",
    address: "Oasis Caterers Headquarters,\nBhupindra Road, Patiala,\nPunjab 147001",
    mapLinkText: "View on Map",
  },
  operatingHours: {
    headline: "Hours of Operation",
    hours: "Monday – Saturday\n10:00 AM to 7:00 PM\n(Consultations by appointment only)",
  },
  processInfo: {
    headline: "What Happens Next?",
    description: "Once we receive your inquiry, our concierge will contact you to arrange an initial phone consultation. During this call, we will discuss your culinary preferences, scale, and logistics before drafting a preliminary proposal.",
  },
  faqTeaser: {
    text: "Looking for immediate answers regarding our process or pricing?",
    linkText: "Visit our FAQ",
  },
  specializedContacts: {
    corporate: { label: "Corporate Galas & B2B", value: "corporate@oasiscaterers.com", link: "mailto:corporate@oasiscaterers.com" },
    press: { label: "Press & Media Inquiries", value: "pr@oasiscaterers.com", link: "mailto:pr@oasiscaterers.com" },
    vendors: { label: "Partner & Vendor Submissions", value: "partners@oasiscaterers.com", link: "mailto:partners@oasiscaterers.com" },
  },
  socialMedia: {
    headline: "Follow the Evening",
    platforms: [
      { label: "Instagram", value: "@OasisCaterers", link: "https://instagram.com" },
      { label: "Facebook", value: "Oasis Caterers Patiala", link: "https://facebook.com" },
    ],
  },
  testimonial: {
    quote: "From the very first phone call, the Oasis team made us feel like our wedding was the only event they were focusing on.",
    author: "A. Singh",
  },
  secondaryCta: {
    headline: "Not quite ready to speak?",
    ctaText: "Download Our Brochure",
  },
};