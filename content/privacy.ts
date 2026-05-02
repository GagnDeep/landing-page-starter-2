import { BasePageContent } from './types';

export interface PrivacyContent extends BasePageContent {
  header: {
    title: string;
    lastUpdated: string;
  };
  sections: { title: string; content: string }[];
}

export const privacyContent: PrivacyContent = {
  seo: {
    title: "Privacy Policy | Kohinoor Trends",
    description: "Our privacy policy explains how Kohinoor Trends protects and manages your personal information.",
    keywords: ["privacy policy", "data protection", "Kohinoor Trends privacy"],
  },
  header: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: October 2023",
  },
  sections: [
    {
      title: "1. Information We Collect",
      content: "We collect personal information such as your name, email address, phone number, and physical measurements when you book an appointment, make a purchase, or subscribe to our newsletter. We also collect non-identifying browsing data to improve our digital storefront."
    },
    {
      title: "2. How We Use Your Information",
      content: "Your information is used to process your orders, facilitate custom fittings, communicate regarding appointments, and send curated promotional materials if you have opted in. We do not sell your personal data to third parties."
    },
    {
      title: "3. Data Security",
      content: "We employ industry-standard security measures to protect your personal information during transmission and storage. However, no digital platform is entirely secure, and we cannot guarantee absolute security."
    },
    {
      title: "4. Contacting Us Regarding Privacy",
      content: "If you have any questions about our privacy practices or wish to update or delete your personal information, please contact our support team at privacy@kohinoortrends.com."
    }
  ]
};
