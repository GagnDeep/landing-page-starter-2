export interface ContactContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
  };
  form: {
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    dateLabel: string;
    guestsLabel: string;
    messageLabel: string;
    submitButton: string;
    validation: {
      nameMin: string;
      emailInvalid: string;
      phoneInvalid: string;
      messageMin: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      guests: string;
      message: string;
    };
    successMessage: string;
  };
  info: {
    heading: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
}

export const contactContent: ContactContent = {
  meta: {
    title: "Contact Us | Bawa Caterers Enterprises",
    description: "Get in touch to plan your royal feast. Contact Bawa Caterers in Patiala for event inquiries, quotes, and tastings.",
  },
  hero: {
    headline: "Let's Plan Your Feast",
  },
  form: {
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    dateLabel: "Expected Event Date",
    guestsLabel: "Estimated Guest Count",
    messageLabel: "Tell us about your event (Theme, Venue, Preferences)",
    submitButton: "Send Inquiry",
    validation: {
      nameMin: "Please provide your full name.",
      emailInvalid: "A valid email address is required.",
      phoneInvalid: "A valid phone number is required for follow-up.",
      messageMin: "Please provide a brief description of your event."
    },
    placeholders: {
      name: "Your Name",
      email: "you@example.com",
      phone: "+91 98765 43210",
      guests: "e.g. 300",
      message: "Describe your grand vision..."
    },
    successMessage: "Your inquiry has been received. Our event specialists will contact you shortly to begin planning your royal feast."
  },
  info: {
    heading: "Direct Contact",
    phone: "+91 98765 43210",
    email: "events@bawacaterers.com",
    address: "45 Heritage Avenue, Patiala, Punjab 147001",
    hours: "Monday - Saturday: 10:00 AM - 7:00 PM"
  }
};
