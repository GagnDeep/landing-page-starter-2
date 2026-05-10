export interface SEO {
  title: string;
  description: string;
}

export interface LegalSection {
  title: string;
  content: string;
}

export interface TermsContent {
  seo: SEO;
  hero: {
    headline: string;
  };
  lastUpdated: string;
  introduction: string;
  sections: {
    servicesOverview: LegalSection;
    bookingAndDeposits: LegalSection;
    paymentSchedules: LegalSection;
    cancellations: LegalSection;
    guestCount: LegalSection;
    menuSubstitutions: LegalSection;
    liability: LegalSection;
    forceMajeure: LegalSection;
    venueRequirements: LegalSection;
    allergies: LegalSection;
    intellectualProperty: LegalSection;
    disputeResolution: LegalSection;
    severability: LegalSection;
    changesToTerms: LegalSection;
  };
  contact: {
    headline: string;
    description: string;
    email: string;
  };
}

export const termsContent: TermsContent = {
  seo: {
    title: "Terms of Service | Oasis Caterers",
    description: "Legal terms, conditions, and service agreements for Oasis Caterers events.",
  },
  hero: {
    headline: "Terms of Service",
  },
  lastUpdated: "Last Updated: May 2024",
  introduction: "These Terms of Service outline the legally binding agreement between you (the 'Client') and Oasis Caterers ('Company', 'we', 'us') regarding the provision of catering and hospitality services.",
  sections: {
    servicesOverview: {
      title: "Services Overview",
      content: "Oasis Caterers agrees to provide culinary, beverage, and staffing services as detailed in the final agreed-upon Event Proposal. Any additions to the scope of work requested on the day of the event will incur supplementary charges.",
    },
    bookingAndDeposits: {
      title: "Booking & Deposits",
      content: "A non-refundable 25% deposit of the estimated total invoice is required to secure your event date. The date is not reserved until both the signed contract and the initial deposit are received.",
    },
    paymentSchedules: {
      title: "Payment Schedules",
      content: "An additional 50% of the estimated total is due 90 days prior to the event date. The final 25% balance, reflecting the final guaranteed guest count and any added services, is due strictly 14 days prior to the event.",
    },
    cancellations: {
      title: "Cancellations & Refunds",
      content: "Cancellations made more than 120 days prior to the event will forfeit the initial 25% deposit. Cancellations made between 119 and 60 days prior will incur a fee equal to 50% of the estimated total. Cancellations within 60 days of the event require full payment of the estimated invoice.",
    },
    guestCount: {
      title: "Guest Count Adjustments",
      content: "The final guaranteed guest count must be provided no later than 14 days before the event. This number is not subject to reduction. If the actual guest count exceeds the final guarantee, the Client will be billed at a premium per-head rate for the overage.",
    },
    menuSubstitutions: {
      title: "Menu Substitutions",
      content: "While we strive to execute the exact menu detailed in your proposal, Oasis Caterers reserves the right to substitute ingredients of equal or greater quality based on seasonal availability and market fluctuations without prior notice.",
    },
    liability: {
      title: "Liability & Indemnification",
      content: "Oasis Caterers holds adequate liability insurance. However, the Client agrees to indemnify and hold harmless Oasis Caterers against any claims arising from the conduct of guests, damage to venue property by guests, or the consumption of alcohol.",
    },
    forceMajeure: {
      title: "Force Majeure",
      content: "Oasis Caterers shall not be liable for the failure to execute services due to acts of God, severe weather, governmental regulations, pandemics, strikes, or any other emergencies beyond our reasonable control.",
    },
    venueRequirements: {
      title: "Venue Requirements",
      content: "The Client is responsible for ensuring the chosen venue provides adequate water, power, and sanitary staging areas unless mobile infrastructure has been explicitly contracted in the Event Proposal.",
    },
    allergies: {
      title: "Allergies & Dietary Restrictions",
      content: "While Oasis Caterers maintains rigorous cross-contamination protocols, our kitchens process nuts, dairy, gluten, and shellfish. We cannot guarantee a 100% allergen-free environment and hold no liability for adverse reactions.",
    },
    intellectualProperty: {
      title: "Intellectual Property",
      content: "All recipes, menu designs, and proprietary service methods remain the intellectual property of Oasis Caterers. We reserve the right to photograph the event setup and cuisine for marketing purposes, respecting the privacy of guests.",
    },
    disputeResolution: {
      title: "Dispute Resolution",
      content: "Any disputes arising from this agreement shall be governed by the laws of Punjab, India, and resolved in the jurisdiction of the courts of Patiala.",
    },
    severability: {
      title: "Severability",
      content: "If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
    },
    changesToTerms: {
      title: "Changes to Terms",
      content: "Oasis Caterers reserves the right to update these terms at any time. The terms in effect at the time of contract signing will govern your event.",
    },
  },
  contact: {
    headline: "Legal Inquiries",
    description: "For questions regarding our Terms of Service or contract specifics, please contact our administrative office.",
    email: "legal@oasiscaterers.com",
  },
};