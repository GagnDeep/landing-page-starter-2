import { SEO } from './types';

export interface TermsContent {
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

export const termsContent: TermsContent = {
  seo: {
    title: "Terms of Service | Guide Events",
    description: "Read the Terms of Service for engaging with Guide Events.",
  },
  hero: {
    headline: "Terms of Service",
  },
  lastUpdated: "October 15, 2023",
  sections: [
    {
      heading: "1. Introduction & Acceptance",
      content: "These Terms of Service govern your engagement with Guide Events. By signing a contract or paying a retainer, you agree to these terms, ensuring a mutual understanding of expectations and responsibilities.",
    },
    {
      heading: "2. Services Provided",
      content: "Guide Events agrees to provide event planning, design, and coordination services as explicitly detailed in your Custom Proposal and finalized Contract. Any services requested outside the agreed scope will be subject to additional fees.",
    },
    {
      heading: "3. Financial Agreements & Retainers",
      content: "A non-refundable retainer is required to secure our services for your date. This retainer reserves our exclusive time and resources. Subsequent payments must be made according to the schedule outlined in your contract.",
    },
    {
      heading: "4. Client Responsibilities",
      content: "The success of the event relies on timely communication. Clients are responsible for providing guest lists, final approvals, and necessary documentation within the deadlines established by the planning timeline.",
    },
    {
      heading: "5. Cancellations & Force Majeure",
      content: "In the event of cancellation by the client, the initial retainer remains non-refundable. Guide Events is not liable for failures to perform duties due to acts of God, extreme weather, global pandemics, or other circumstances beyond our reasonable control.",
    },
    {
      heading: "6. Vendor Liability",
      content: "While we rigorously vet and curate all vendors, Guide Events acts as an agent on your behalf. We are not legally liable for the performance, defaults, or negligence of third-party vendors (e.g., photographers, independent venues).",
    },
    {
      heading: "7. Intellectual Property",
      content: "Guide Events retains the right to use photography and videography from the event for portfolio, marketing, and promotional purposes, unless a strict non-disclosure agreement (NDA) is executed prior to the event.",
    },
    {
      heading: "8. Dispute Resolution",
      content: "Any disputes arising from these terms shall be resolved through arbitration in Chandigarh, India, in accordance with local laws.",
    },
  ],
};
