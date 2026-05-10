export interface SEO {
  title: string;
  description: string;
}

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
  introduction: string;
  sections: {
    informationCollected: PrivacySection;
    howWeUse: PrivacySection;
    informationSharing: PrivacySection;
    dataSecurity: PrivacySection;
    cookies: PrivacySection;
    thirdPartyLinks: PrivacySection;
    clientRights: PrivacySection;
    dataRetention: PrivacySection;
    internationalTransfers: PrivacySection;
    marketing: PrivacySection;
    changes: PrivacySection;
  };
  contact: {
    headline: string;
    description: string;
    email: string;
  };
}

export const privacyContent: PrivacyContent = {
  seo: {
    title: "Privacy Policy | Oasis Caterers",
    description: "Details on how Oasis Caterers collects, utilizes, and protects your personal and event data.",
  },
  hero: {
    headline: "Privacy Policy",
  },
  lastUpdated: "Last Updated: May 2024",
  introduction: "Oasis Caterers ('we', 'us', 'our') respects your privacy and is committed to protecting the personal data of our clients and website visitors. This policy outlines our data handling practices.",
  sections: {
    informationCollected: {
      title: "Information We Collect",
      content: "We collect personal information necessary to facilitate our services. This includes contact details (name, email, phone number), event specifics (dates, venues, guest counts), financial information for billing, and dietary preferences related to your event.",
    },
    howWeUse: {
      title: "How We Use Your Information",
      content: "Your data is used strictly to execute catering services, process payments, communicate regarding your event, and improve our offerings. We do not sell your personal data to third parties.",
    },
    informationSharing: {
      title: "Information Sharing & Disclosure",
      content: "We may share necessary event details with trusted partner vendors (e.g., venues, decorators, or rental companies) solely for the purpose of executing your event. All partners are bound by confidentiality agreements.",
    },
    dataSecurity: {
      title: "Data Security",
      content: "We implement robust physical, electronic, and managerial procedures to safeguard your data against unauthorized access, alteration, or disclosure. Financial transactions are processed through encrypted, industry-standard payment gateways.",
    },
    cookies: {
      title: "Cookies and Tracking Technologies",
      content: "Our website uses cookies to analyze traffic and enhance user experience. You may configure your browser to decline cookies, though this may limit certain functionalities of the site.",
    },
    thirdPartyLinks: {
      title: "Third-Party Links",
      content: "Our site may contain links to external vendors or partners. Oasis Caterers is not responsible for the privacy practices or content of these external websites.",
    },
    clientRights: {
      title: "Your Data Rights",
      content: "You have the right to request access to the personal data we hold about you, request corrections to inaccuracies, or ask for the deletion of your data, subject to legal and contractual retention requirements.",
    },
    dataRetention: {
      title: "Retention of Information",
      content: "We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, including fulfilling any legal, accounting, or reporting obligations (typically 7 years for financial records).",
    },
    internationalTransfers: {
      title: "International Data Transfers",
      content: "For our NRI clients, please note that your data may be transferred to and processed in India. By utilizing our services, you consent to this transfer under the protection of this policy.",
    },
    marketing: {
      title: "Marketing Communications",
      content: "If you have opted into our newsletter, we may send you occasional updates. You can unsubscribe at any time using the link provided in the emails without affecting your event correspondence.",
    },
    changes: {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy periodically to reflect changes in our practices. The revised policy will be posted on this page with an updated timestamp.",
    },
  },
  contact: {
    headline: "Privacy Concerns",
    description: "If you have any questions or concerns regarding our data practices, please contact our Data Protection Officer.",
    email: "privacy@oasiscaterers.com",
  },
};