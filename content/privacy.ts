import { SEO } from './types';

export interface PrivacyContent {
  seo: SEO;
  hero: {
    headline: string;
  };
  lastUpdated: string;
  sections: Array<{
    heading: string;
    content: string;
  }>;
}

export const privacyContent: PrivacyContent = {
  seo: {
    title: "Privacy Policy | Guide Events",
    description: "Understand how Guide Events collects, uses, and protects your personal information.",
  },
  hero: {
    headline: "Privacy Policy",
  },
  lastUpdated: "October 15, 2023",
  sections: [
    {
      heading: "1. Information Collection",
      content: "We collect information necessary to meticulously plan and execute your event. This includes names, contact details, financial information for billing, dietary requirements, and guest lists.",
    },
    {
      heading: "2. Use of Information",
      content: "Your data is used strictly for the purpose of event orchestration, communication, contract execution, and internal record keeping. We do not sell your personal information.",
    },
    {
      heading: "3. Data Sharing with Third Parties",
      content: "To execute your event, it is necessary to share relevant details (e.g., guest counts, dietary needs) with trusted third-party vendors such as hotels, caterers, and transport services. They are bound by confidentiality to use this data only for event fulfillment.",
    },
    {
      heading: "4. International Data Transfers",
      content: "For our NRI clients, be aware that data provided to us will be processed in India. We adhere to strict security protocols to ensure your data is protected during transfer and storage.",
    },
    {
      heading: "5. Data Security",
      content: "We implement robust physical, electronic, and managerial procedures to safeguard and secure the information we collect, preventing unauthorized access, alteration, or disclosure.",
    },
    {
      heading: "6. Your Rights & Access",
      content: "You have the right to request access to the personal information we hold about you, and to ask that your personal information be corrected or, under certain circumstances, deleted.",
    },
    {
      heading: "7. Cookies & Tracking",
      content: "Our website uses standard cookies to enhance user experience and analyze site traffic. You can choose to accept or decline cookies through your browser settings.",
    },
    {
      heading: "8. Contacting Us",
      content: "If you have any questions regarding this privacy policy or the handling of your data, please contact our Data Protection Officer at privacy@guideevents.com.",
    },
  ],
};
