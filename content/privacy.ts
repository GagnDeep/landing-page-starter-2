import { SEOData, TextBlock } from './types';

export const privacySEO: SEOData = {
  title: "Privacy Policy | Verma's Bakery & Sweets",
  description: "How Verma's Bakery collects, uses, and protects your personal information.",
};

export const privacyHero = {
  heading: "Privacy Policy",
  lastUpdated: "Last Updated: October 1, 2023"
};

export const privacyContent: TextBlock[] = [
  {
    heading: "1. Information We Collect",
    content: "We collect information you provide directly to us when placing an order, subscribing to our newsletter, or contacting us through our website. This may include your name, email address, phone number, delivery address, and payment details."
  },
  {
    heading: "2. How We Use Your Information",
    content: [
      "To process and fulfill your bakery orders.",
      "To communicate with you regarding your order status or consultation.",
      "To send promotional emails or newsletters, provided you have explicitly opted in."
    ]
  },
  {
    heading: "3. Information Sharing",
    content: "We do not sell or rent your personal information to third parties. We may share information with trusted third-party service providers (such as payment processors or delivery couriers) strictly for the purpose of fulfilling your order."
  },
  {
    heading: "4. Data Security",
    content: "We implement reasonable security measures to protect your personal information from unauthorized access or disclosure. However, no internet transmission is entirely secure, and we cannot guarantee absolute security."
  },
  {
    heading: "5. Your Rights",
    content: "You have the right to request access to the personal data we hold about you, or request that we delete it. To unsubscribe from our newsletter, simply use the 'unsubscribe' link at the bottom of any promotional email."
  },
  {
    heading: "6. Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us at privacy@vermasbakery.com."
  }
];
