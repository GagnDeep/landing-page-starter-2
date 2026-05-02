import { SEOContent } from './types';

export const faqContent = {
  seo: {
    title: "FAQ & Client Care | YAVA DESIGNS",
    description: "Answers to common questions about our bespoke process, sizing, shipping, and international delivery."
  } as SEOContent,
  hero: {
    title: "Client Care",
    subtitle: "How may we assist you with your bespoke journey?"
  },
  categories: [
    { label: "The Bespoke Process", href: "#process" },
    { label: "Shipping & Delivery", href: "#shipping" },
    { label: "Returns & Alterations", href: "#returns" }
  ],
  sections: [
    {
      id: "process",
      title: "The Bespoke Process",
      questions: [
        {
          q: "How do I take my measurements for an online order?",
          a: "Once you initiate a bespoke order, we provide a highly detailed, step-by-step video guide and a measurement form. You can also schedule a virtual consultation where one of our styling experts will guide you through the process over a video call."
        },
        {
          q: "Can I customize the design of a featured look?",
          a: "Absolutely. The beauty of bespoke is flexibility. You can alter necklines, sleeve lengths, suit lengths, or request different fabrics and embroidery densities. Our team will advise on how changes might affect the drape and pricing."
        },
        {
          q: "How long does a bespoke order take?",
          a: "Standard everyday wear typically takes 2-3 weeks from the time measurements and advance payment are received. Festive wear and pieces with heavy hand-embroidery require 4-6 weeks due to the intricate craftsmanship involved."
        }
      ]
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      questions: [
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship worldwide using trusted premium courier partners (DHL/FedEx). Your garment will be securely packaged to ensure it arrives in pristine condition."
        },
        {
          q: "How much does international shipping cost?",
          a: "International shipping rates vary based on the destination country and the weight of the package. An estimated shipping cost will be provided during your final consultation before the garment is dispatched."
        },
        {
          q: "Are customs duties included?",
          a: "No, international clients are responsible for any customs duties, taxes, or import fees levied by their respective countries upon delivery."
        }
      ]
    },
    {
      id: "returns",
      title: "Returns & Alterations",
      questions: [
        {
          q: "What is your return policy?",
          a: "Because every piece is custom-made to your specific measurements and design choices, we do not accept returns or offer refunds. However, we are deeply committed to your satisfaction and the 'Perfect Fit'."
        },
        {
          q: "What if my garment doesn't fit perfectly?",
          a: "If your garment requires slight adjustments upon arrival, we offer a complimentary alteration service within 14 days of delivery. For international clients, we recommend providing highly accurate initial measurements, but we will work with you on a case-by-case basis to resolve any fit issues."
        }
      ]
    }
  ],
  contactPrompt: {
    heading: "Still Need Assistance?",
    description: "Our concierge team is available to answer any specific questions you may have.",
    cta: "Contact Us",
    href: "/contact"
  }
};
