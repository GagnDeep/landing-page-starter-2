export interface LegalContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
  };
  lastUpdated: string;
  content: string;
}

export const termsContent: LegalContent = {
  meta: {
    title: "Terms of Service | Bawa Caterers Enterprises",
    description: "Terms and conditions for utilizing the catering services of Bawa Caterers Enterprises.",
  },
  hero: {
    headline: "Terms of Service",
  },
  lastUpdated: "Last Updated: January 15, 2024",
  content: "By booking the services of Bawa Caterers Enterprises, clients agree to the contractual terms regarding payment schedules, guest count finalizations, and cancellation policies. A finalized guest count must be provided 14 days prior to the event; charges will be based on this number or the actual attendance, whichever is higher. Bawa Caterers reserves the right to make minor menu substitutions based on ingredient availability and quality."
};
