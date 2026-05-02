export const contactContent = {
  meta: {
    title: "Contact & Location | The Boho Salon Chandigarh",
    description: "Get in touch with The Boho Salon. Find our Sector 17 location, opening hours, and contact information to book your next luxury beauty experience.",
  },
  hero: {
    headline: "Get in Touch",
    subheadline: "We're here to assist with your bookings, consultations, and any inquiries you may have.",
  },
  contactInfo: {
    phone: {
      label: "Call Us",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    whatsapp: {
      label: "WhatsApp",
      value: "Message for quick inquiries",
      href: "https://wa.me/919876543210"
    },
    email: {
      label: "Email",
      value: "hello@thebohosalon.com",
      href: "mailto:hello@thebohosalon.com"
    },
    instagram: {
      label: "Instagram",
      value: "@bohosalon.chd",
      href: "https://instagram.com/bohosalon.chd"
    }
  },
  location: {
    title: "Visit Us",
    address: {
      street: "SCO 14, First Floor, Sector 17-E",
      city: "Chandigarh, 160017",
      country: "India"
    },
    hours: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday - Sunday", time: "10:00 AM - 7:30 PM" }
    ],
    mapCta: "Get Directions on Google Maps",
    mapUrl: "https://maps.google.com/?q=Sector+17+Chandigarh"
  },
  form: {
    title: "Send a Message",
    fields: {
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number (Optional)",
      subject: "Inquiry Type",
      subjectOptions: [
        "General Inquiry",
        "Booking Assistance",
        "Bridal Packages",
        "Press/PR"
      ],
      message: "Your Message"
    },
    submitBtn: "Send Message",
    successMessage: "Thank you. Our front desk will get back to you within 24 hours."
  }
};
