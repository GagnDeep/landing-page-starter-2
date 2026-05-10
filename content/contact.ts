import { SEO, NoticeBar } from './home';

export interface ContactInfo {
  type: string;
  value: string;
  href?: string;
}

export interface ContactFormFields {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  location: string;
  message: string;
}

export interface ContactContent {
  seo: SEO;
  noticeBar: NoticeBar;
  hero: {
    headline: string;
    subheadline: string;
  };
  invitationText: string;
  contactGrid: ContactInfo[];
  form: {
    headline: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      eventType: {
        label: string;
        options: string[];
      };
      date: string;
      location: string;
      message: string;
    };
    submitLabel: string;
  };
  expectationSetting: string;
}

export const contactContent: ContactContent = {
  seo: {
    title: "Contact Us | Blinking Eye Events",
    description: "Get in touch with Blinking Eye Events to discuss your upcoming wedding or event. We'd love to hear your story.",
  },
  noticeBar: {
    message: "Now accepting inquiries for the upcoming winter wedding season.",
    linkText: "Inquire Now",
    linkHref: "/contact",
  },
  hero: {
    headline: "Let's Begin",
    subheadline: "We are honored you are considering us for your celebration.",
  },
  invitationText: "Every great event starts with a conversation. We invite you to share your vision, your expectations, and your story with us. Whether you have a fully formed concept or just a date and a dream, we are here to listen.",
  contactGrid: [
    {
      type: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      type: "Email",
      value: "hello@blinkingeyeevents.com",
      href: "mailto:hello@blinkingeyeevents.com",
    },
    {
      type: "Studio",
      value: "Sector 17, Chandigarh (By Appointment Only)",
    },
    {
      type: "Hours",
      value: "Monday - Saturday, 10:00 AM - 6:00 PM",
    },
  ],
  form: {
    headline: "Tell Us About Your Vision",
    fields: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number (Optional)",
      eventType: {
        label: "Event Type",
        options: ["Wedding", "Corporate Event", "Private Milestone", "Other"],
      },
      date: "Estimated Date",
      location: "Venue / Location (If known)",
      message: "Please share details about your vision, guest count, and any specific requirements.",
    },
    submitLabel: "Send Inquiry",
  },
  expectationSetting: "Thank you for reaching out. Our team will review your details and respond within 48 business hours to schedule an initial consultation.",
};
