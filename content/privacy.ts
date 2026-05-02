import { BasePageContent } from './types';

export interface PrivacyContent extends BasePageContent {
  lastUpdated: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

export const privacyContent: PrivacyContent = {
  seo: {
    title: "Privacy Policy | Aura Boutique",
    description: "Read Aura Boutique's Privacy Policy regarding the collection and use of your personal data.",
  },
  hero: {
    heading: "Privacy Policy",
  },
  lastUpdated: "April 20, 2024",
  sections: [
    {
      heading: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, submit measurements for custom stitching, subscribe to our newsletter, or make a purchase. This may include your name, email address, phone number, shipping address, and body measurements."
    },
    {
      heading: "2. How We Use Your Information",
      content: "We use the information we collect to fulfill your orders, provide custom tailoring services, communicate with you about your order status, and send you promotional offers if you have opted in to our newsletter."
    },
    {
      heading: "3. Data Security",
      content: "We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
      heading: "4. Sharing of Information",
      content: "We do not sell your personal information. We may share necessary details (like address and phone number) with trusted third-party courier services solely for the purpose of delivering your orders."
    },
    {
      heading: "5. Your Rights",
      content: "You have the right to request access to the personal data we hold about you and to ask that your personal data be corrected, updated, or deleted. Please contact us at hello@auraboutique.in to exercise these rights."
    }
  ]
};
