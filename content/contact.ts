export const contactContent = {
  metadata: {
    title: "Contact Us | Harbhajan's Catering Patiala",
    description: "Get in touch with Harbhajan's Catering to plan your event, request a quote, or schedule a food tasting in Patiala.",
  },
  hero: {
    headline: "Let's Plan Your Feast",
    imageAlt: "A beautifully set catering table awaiting guests",
  },
  contactInfo: {
    phone: {
      title: "Call Us",
      primary: "+91 98765 43210",
      secondary: "+91 98765 43211",
    },
    email: {
      title: "Email Us",
      primary: "hello@harbhajans.com",
      booking: "bookings@harbhajans.com",
    },
    location: {
      title: "Visit Our Kitchen",
      address: "123 Heritage Lane, Ghuman Nagar, Patiala, Punjab 147001",
    },
    hours: {
      title: "Business Hours",
      office: "Mon-Sat: 9:00 AM - 7:00 PM",
      kitchen: "Open 24/7 for scheduled events",
    },
  },
  form: {
    title: "Request a Quote",
    fields: {
      name: { label: "Full Name", placeholder: "e.g. Amanpreet Singh" },
      email: { label: "Email Address", placeholder: "e.g. aman@example.com" },
      phone: { label: "Phone Number", placeholder: "+91 90000 00000" },
      eventDate: { label: "Event Date", placeholder: "Select a date" },
      guestCount: { label: "Estimated Guest Count", placeholder: "e.g. 500" },
      eventType: {
        label: "Event Type",
        placeholder: "Select event type",
        options: [
          { value: "wedding", label: "Wedding / Reception" },
          { value: "prewedding", label: "Pre-Wedding (Sangeet/Mehendi)" },
          { value: "corporate", label: "Corporate Event" },
          { value: "private", label: "Private Family Function" },
          { value: "other", label: "Other" },
        ],
      },
      message: { label: "Special Requests or Details", placeholder: "Tell us about your vision, venue details, or any specific dietary requirements..." },
    },
    submitButton: "Send Inquiry",
  },
  map: {
    alt: "Map showing Harbhajan's Catering location in Patiala",
  },
  whatsappConnect: {
    title: "Prefer to Chat?",
    cta: "Chat on WhatsApp",
  },
  tastingCta: {
    title: "Want to schedule a tasting?",
    description: "Fill out the form above and mention 'Tasting Request' in your message.",
  },
  socialLinks: {
    title: "Follow Our Kitchen",
    instagram: "https://instagram.com/harbhajanscatering",
    facebook: "https://facebook.com/harbhajanscatering",
  },
  responsePromise: "We aim to respond to all inquiries within 24 hours.",
  faqTeaser: {
    text: "Looking for quick answers?",
    linkText: "Check our FAQ page",
    href: "/faq",
  },
};
