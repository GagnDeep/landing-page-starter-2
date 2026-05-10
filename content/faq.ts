import { SeoMetadata } from "./types";

export const seo: SeoMetadata = {
  title: "Frequently Asked Questions | General Williams Physiotherapy",
  description: "Find answers to common questions regarding appointments, treatments, NRI services, and what to expect during your visit.",
  keywords: ["Physiotherapy FAQ", "What to expect physiotherapy", "Clinic policies"],
};

export const hero = {
  title: "Frequently Asked Questions",
  subtitle: "Clear answers to help you prepare for your clinical recovery journey."
};

export const categories = [
  {
    title: "Appointments & Visits",
    items: [
      {
        q: "Do I need a doctor's referral to book an appointment?",
        a: "No, you do not need a referral. As specialized physiotherapists, we are primary care practitioners capable of diagnosing and treating musculoskeletal and neurological conditions directly. However, if you have surgical notes or recent scans, please bring them."
      },
      {
        q: "What should I wear to my session?",
        a: "Please wear loose, comfortable clothing that allows easy access to the area being treated. For example, shorts for knee issues or a tank top for shoulder problems."
      },
      {
        q: "How long does a session typically last?",
        a: "Your initial comprehensive assessment will last 45-60 minutes. Subsequent standard treatment sessions usually run between 30 to 45 minutes, depending on the complexity of your treatment plan."
      }
    ]
  },
  {
    title: "Treatments & Care",
    items: [
      {
        q: "Will the physiotherapy treatment hurt?",
        a: "Physiotherapy should generally not be painful, though you may experience some discomfort or temporary soreness after certain treatments (like deep tissue release or stretching tight structures). We always work within your tolerance limits and communicate constantly during the session."
      },
      {
        q: "How many sessions will I need?",
        a: "This varies entirely based on your specific condition, chronicity, and individual healing rate. During your initial assessment, Dr. Khan will provide a realistic timeline and discuss the expected number of sessions required for optimal recovery."
      }
    ]
  },
  {
    title: "NRI & Remote Care",
    items: [
      {
        q: "How does the NRI Care package work if I live abroad?",
        a: "We manage the complete care of your relative locally in Patiala. We set up initial video consultations to understand your expectations, establish the treatment plan locally, and provide you with bi-weekly updates and digital progress reports via WhatsApp or email."
      }
    ]
  }
];

export const finalCta = {
  title: "Still have questions?",
  description: "Our clinical team is ready to provide specific answers regarding your unique condition.",
  cta: { label: "Contact Us Directly", href: "/contact" }
};
