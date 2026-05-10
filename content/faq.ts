export interface FaqContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
  };
  categories: {
    name: string;
    questions: { q: string; a: string }[];
  }[];
  contactPrompt: {
    heading: string;
    description: string;
    button: string;
  };
}

export const faqContent: FaqContent = {
  meta: {
    title: "Frequently Asked Questions | Bawa Caterers",
    description: "Find answers to common questions about booking, menus, and logistics for our premium catering services.",
  },
  hero: {
    headline: "Frequently Asked Questions",
  },
  categories: [
    {
      name: "Booking & Payments",
      questions: [
        { q: "How far in advance should we book?", a: "For the peak wedding season (October to March), we recommend booking 6 to 8 months in advance to secure your dates." },
        { q: "What is the cancellation policy?", a: "Cancellations made 90 days prior to the event will receive a partial refund of the deposit. Specific terms are detailed in your contract." }
      ]
    },
    {
      name: "Menu & Tasting",
      questions: [
        { q: "Do you offer menu tasting?", a: "Yes, once a preliminary contract is signed, we host a comprehensive tasting session for up to 4 family members." },
        { q: "Can you accommodate dietary restrictions?", a: "Absolutely. We can curate specific Jain, Vegan, or Gluten-free menus upon request." }
      ]
    },
    {
      name: "Logistics & Setup",
      questions: [
        { q: "Do you provide tables and seating?", a: "We provide food display tables, chafing dishes, and live stall setups. Guest seating and dining tables are typically handled by the venue or decorators." },
        { q: "How much time do you need for setup?", a: "Depending on the scale of the event, our team requires 4 to 6 hours for a full royal setup prior to the first guest's arrival." }
      ]
    }
  ],
  contactPrompt: {
    heading: "Still have questions?",
    description: "Our event specialists are here to provide all the details you need.",
    button: "Contact Our Team"
  }
};
