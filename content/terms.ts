import { SEO } from './home';

export interface TermsSection {
  title: string;
  content: string;
}

export interface TermsContent {
  seo: SEO;
  hero: {
    headline: string;
  };
  lastUpdated: string;
  sections: TermsSection[];
  contactInfo: string;
}

export const termsContent: TermsContent = {
  seo: {
    title: "Terms of Service | Blinking Eye Events",
    description: "Terms and conditions for using the Blinking Eye Events website.",
  },
  hero: {
    headline: "Terms of Service",
  },
  lastUpdated: "Last Updated: October 1, 2023",
  sections: [
    {
      title: "1. Agreement to Terms",
      content: "These Terms of Service constitute a legally binding agreement made between you and Blinking Eye Events concerning your access to and use of the blinkingeyeevents.com website. By accessing the site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service.",
    },
    {
      title: "2. Intellectual Property Rights",
      content: "Unless otherwise indicated, the site and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by us and are protected by copyright and trademark laws.",
    },
    {
      title: "3. User Representations",
      content: "By using the site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete, and that you will maintain the accuracy of such information.",
    },
    {
      title: "4. Services Engagement",
      content: "Please note that the engagement of Blinking Eye Events for actual event planning and management services is governed by a separate, formal contract signed between the client and the firm. These website terms govern only the use of this digital platform.",
    },
    {
      title: "5. Prohibited Activities",
      content: "You may not access or use the site for any purpose other than that for which we make the site available. The site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
    },
    {
      title: "6. Site Management",
      content: "We reserve the right, but not the obligation, to monitor the site for violations of these Terms of Service and to manage the site in a manner designed to protect our rights and property.",
    },
    {
      title: "7. Modifications and Interruptions",
      content: "We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the site.",
    },
    {
      title: "8. Governing Law",
      content: "These Terms shall be governed by and defined following the laws of India. Blinking Eye Events and yourself irrevocably consent that the courts of Chandigarh, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.",
    },
  ],
  contactInfo: "For legal inquiries regarding these terms, please contact: legal@blinkingeyeevents.com",
};
