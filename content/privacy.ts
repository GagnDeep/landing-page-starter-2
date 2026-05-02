import { SEO } from "./home";

export interface PrivacyContent {
  seo: SEO;
  hero: { headline: string; lastUpdated: string };
  sections: { title: string; content: string }[];
}

export const privacyContent: PrivacyContent = {
  seo: {
    title: "Privacy Policy | Sardaar G. Tailors",
    description: "Privacy policy and data handling procedures for Sardaar G. Tailors."
  },
  hero: {
    headline: "Privacy Policy",
    lastUpdated: "Last Updated: October 2023"
  },
  sections: [
    {
      title: "1. Information We Collect",
      content: "We collect personal information necessary to provide our bespoke services, including your name, contact details, physical measurements, and payment information."
    },
    {
      title: "2. How We Use Your Information",
      content: "Your physical measurements are kept strictly confidential and are stored securely to facilitate future orders. We do not sell or share your personal data with third parties for marketing purposes."
    },
    {
      title: "3. Photography & Media",
      content: "We occasionally take photographs during fittings for our archival records to ensure fit consistency. We will never publish photos of you or your commissioned garments on our website or social media without your explicit prior consent."
    },
    {
      title: "4. Contacting Us",
      content: "If you have questions regarding your data or wish to have your measurement profile deleted from our records, please contact us at atelier@sardaargtailors.com."
    }
  ]
};
