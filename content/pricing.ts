import { SeoMetadata, CTA } from "./types";

export const seo: SeoMetadata = {
  title: "Consultation & Pricing | General Williams Physiotherapy",
  description: "Transparent pricing for clinical physiotherapy, specialized neuro-rehab packages, and dedicated NRI patient care services in Patiala.",
  keywords: ["Physiotherapy Cost Patiala", "Paralysis Rehab Pricing", "NRI Physiotherapy Packages", "Consultation Fees"],
};

export const hero = {
  title: "Transparent & Premium Care",
  subtitle: "Investing in your health with clear, straightforward pricing for clinical excellence."
};

export const tiers = {
  title: "Clinical Services",
  items: [
    {
      name: "Initial Comprehensive Assessment",
      description: "A mandatory first step. A thorough 45-60 minute evaluation of your condition, medical history, and biomechanics, culminating in a custom treatment roadmap.",
      price: "₹800",
      features: ["Full Musculoskeletal Diagnosis", "Neurological Assessment", "Postural Analysis", "Custom Treatment Plan Creation"]
    },
    {
      name: "Standard Clinical Session",
      description: "Individual, one-on-one physiotherapy sessions utilizing targeted manual therapy and necessary clinical modalities.",
      price: "₹600",
      features: ["45-Minute Dedicated Session", "Manual Therapy", "Electrotherapy (if required)", "Exercise Progression"]
    }
  ]
};

export const packages = {
  title: "Intensive Rehabilitation Packages",
  description: "For chronic conditions and post-operative recovery requiring consistent, long-term intervention.",
  items: [
    {
      name: "Paralysis / Neuro-Rehab (10 Sessions)",
      description: "A structured block of intensive neurological rehabilitation tailored for stroke or SCI recovery.",
      price: "₹5,500",
      features: ["Priority Scheduling", "Continuous Progress Monitoring", "Caregiver Training", "Discounted Block Rate"]
    },
    {
      name: "Post-Op Recovery (10 Sessions)",
      description: "Dedicated protocols for safe and effective recovery after major orthopedic surgery.",
      price: "₹5,500",
      features: ["Surgeon Protocol Adherence", "Scar Management", "Aggressive ROM Restoration"]
    }
  ]
};

export const nriCare = {
  title: "NRI Trusted Care Packages",
  description: "Comprehensive care coordination for families living abroad who require premium, reliable treatment for relatives in Patiala.",
  details: "Our NRI packages include entirely managed care. We provide regular, detailed digital progress reports, bi-weekly video consultations with family members abroad, and dedicated concierge scheduling to ensure absolute peace of mind.",
  cta: { label: "Inquire About NRI Services", href: "/contact" } as CTA
};

export const faq = {
  title: "Billing & Insurance",
  questions: [
    { q: "Do you accept health insurance?", a: "We provide detailed clinical invoices and treatment receipts that can be submitted to your health insurance provider for reimbursement under standard OPD covers." },
    { q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, UPI payments, and cash." },
    { q: "Are block packages refundable?", a: "Block packages are generally non-refundable to ensure commitment to the recovery process, but sessions can be paused in case of medical emergencies." }
  ]
};
