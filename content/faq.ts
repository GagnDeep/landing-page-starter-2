import { SEOData, HeroSection } from './types';

export const faqSEO: SEOData = {
  title: "Frequently Asked Questions | Verma's Bakery & Sweets",
  description: "Find answers about ordering, custom cakes, dietary options, and delivery from Verma's Bakery in Patiala.",
};

export const faqHero: HeroSection = {
  heading: "Frequently Asked Questions",
  subheading: "Everything you need to know about our bakes, ordering, and policies.",
};

export const faqCategories = ["Ordering", "Custom Cakes", "Dietary & Allergens", "Delivery"];

export const faqs = {
  "Ordering": [
    {
      question: "How far in advance should I place an order?",
      answer: "For everyday breads and pastries, 24 hours is preferred for large quantities. For custom celebration cakes, we request at least 1-2 weeks notice, especially during wedding season (October to February)."
    },
    {
      question: "Do you require a deposit?",
      answer: "Yes, all custom cake orders and orders over ₹2,000 require a 50% non-refundable deposit to secure the date and begin preparations."
    }
  ],
  "Custom Cakes": [
    {
      question: "Can I schedule a cake tasting?",
      answer: "Absolutely. We offer complimentary tasting consultations for wedding cakes and large event orders (serving 50+). Please contact us to schedule an appointment."
    },
    {
      question: "Do you replicate cakes from Pinterest or Instagram?",
      answer: "We use inspiration photos as a guide but we do not copy designs exactly. We prefer to take your inspiration and create a custom design that fits the Verma aesthetic and your specific event."
    }
  ],
  "Dietary & Allergens": [
    {
      question: "Do you offer eggless cakes?",
      answer: "Yes! The majority of our signature cakes and pastries can be made eggless upon request, maintaining our high standard of moisture and flavor."
    },
    {
      question: "Are your products nut-free?",
      answer: "No. We use almonds, pistachios, walnuts, and hazelnuts extensively in our kitchen. While we can omit nuts from a recipe, we cannot guarantee a 100% nut-free environment for severe allergies."
    }
  ],
  "Delivery": [
    {
      question: "Do you deliver?",
      answer: "We offer delivery within Patiala city limits for custom tiered cakes to ensure safe transport. For daily items, we are partnered with local delivery apps."
    },
    {
      question: "Can I pick up my wedding cake?",
      answer: "We highly recommend our delivery and setup service for cakes two tiers or larger. If you choose to pick up, we provide structural boxes and transport instructions, but assume no liability once the cake leaves our premises."
    }
  ]
};

export const supportCTA = {
  heading: "Still have questions?",
  content: "If you couldn't find the answer you were looking for, please reach out to our team directly.",
  cta: { label: "Contact Us", href: "/contact" }
};
