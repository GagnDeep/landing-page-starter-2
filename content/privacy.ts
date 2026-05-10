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

export const privacyContent: LegalContent = {
  meta: {
    title: "Privacy Policy | Bawa Caterers Enterprises",
    description: "Privacy policy regarding client data and communication.",
  },
  hero: {
    headline: "Privacy Policy",
  },
  lastUpdated: "Last Updated: January 15, 2024",
  content: "Bawa Caterers Enterprises respects your privacy. Any personal information collected through our contact forms, including names, phone numbers, and email addresses, is used strictly for the purpose of communicating event details and providing quotes. We do not sell or share your data with third-party marketing agencies. Financial information is processed securely and is never stored on our public servers."
};
