import { SEO } from './home';

export interface PrivacySection {
  title: string;
  content: string;
}

export interface PrivacyContent {
  seo: SEO;
  hero: {
    headline: string;
  };
  lastUpdated: string;
  sections: PrivacySection[];
  contactInfo: string;
}

export const privacyContent: PrivacyContent = {
  seo: {
    title: "Privacy Policy | Blinking Eye Events",
    description: "Privacy policy detailing how Blinking Eye Events collects, uses, and protects your personal information.",
  },
  hero: {
    headline: "Privacy Policy",
  },
  lastUpdated: "Last Updated: October 1, 2023",
  sections: [
    {
      title: "1. Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when you register on the site, express an interest in obtaining information about us or our services, or otherwise contact us. This includes names, phone numbers, email addresses, and event details provided via our inquiry forms.",
    },
    {
      title: "2. How We Use Your Information",
      content: "We use personal information collected via our site for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.",
    },
    {
      title: "3. Disclosure of Your Information",
      content: "We only share information with your consent, to comply with laws, to provide you with services (e.g., sharing relevant details with vendor partners for your event, only with your explicit approval), to protect your rights, or to fulfill business obligations.",
    },
    {
      title: "4. Tracking Technologies",
      content: "We may use cookies, web beacons, tracking pixels, and other tracking technologies on the site to help customize the site and improve your experience. You can manage your cookie preferences through your browser settings.",
    },
    {
      title: "5. Security of Your Information",
      content: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.",
    },
    {
      title: "6. Data Retention",
      content: "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.",
    },
    {
      title: "7. Your Privacy Rights",
      content: "Depending on your location, you may have certain rights regarding your personal information, including the right to request access, correction, or deletion of your data. To exercise these rights, please contact us.",
    },
    {
      title: "8. Updates to This Notice",
      content: "We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible.",
    },
  ],
  contactInfo: "If you have questions or comments about this notice, you may email us at privacy@blinkingeyeevents.com.",
};
