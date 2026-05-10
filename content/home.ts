import { SeoMetadata, CTA, Feature } from "./types";

export const seo: SeoMetadata = {
  title: "General Williams Physiotherapy | Elite Clinical Recovery in Patiala",
  description: "Specialized clinical recovery led by Dr. Iftikhar Ali Khan. Expert paralysis rehabilitation, chronic pain recovery, and trusted care for NRI families in Patiala.",
  keywords: ["Physiotherapy Patiala", "Paralysis Rehabilitation", "Post-Op Recovery", "Chronic Pain Treatment", "NRI Trusted Physiotherapy", "Dr. Iftikhar Ali Khan"],
};

export const globalHeader = {
  logoText: "General Williams",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ],
  cta: { label: "Book Consultation", href: "/contact" } as CTA
};

export const hero = {
  headline: "Restoring Mobility. Rebuilding Lives.",
  subheadline: "Elite clinical physiotherapy and specialized paralysis rehabilitation under the expert guidance of Dr. Iftikhar Ali Khan.",
  primaryCta: { label: "Start Your Recovery", href: "/contact" } as CTA,
  secondaryCta: { label: "Our Specializations", href: "/features" } as CTA
};

export const trustIndicators = {
  stats: [
    { value: "20+", label: "Years of Excellence" },
    { value: "Trusted", label: "By NRI Families Worldwide" },
    { value: "Advanced", label: "Neuro-Rehabilitation Protocols" }
  ]
};

export const welcomeStatement = {
  quote: "True rehabilitation is not just about treating symptoms; it is about restoring the fundamental dignity of movement. Our clinical approach is built on evidence, patience, and absolute dedication to every patient's recovery.",
  author: "Dr. Iftikhar Ali Khan",
  role: "Lead Physiotherapist & Founder"
};

export const coreSpecializations = {
  header: {
    title: "Clinical Specializations",
    description: "Targeted, evidence-based recovery protocols designed for complex cases."
  },
  items: [
    {
      id: "paralysis",
      title: "Paralysis Rehabilitation",
      description: "Intensive neuro-rehabilitation protocols focused on restoring neural pathways and maximizing independent mobility after stroke or spinal cord injuries.",
      icon: "BrainIcon"
    },
    {
      id: "post-op",
      title: "Post-Operative Care",
      description: "Structured recovery phases ensuring safe tissue healing, restored range of motion, and expedited return to daily activities following orthopedic surgery.",
      icon: "ActivityIcon"
    },
    {
      id: "chronic-pain",
      title: "Chronic Pain Management",
      description: "Advanced diagnostic and therapeutic modalities to address the root causes of persistent neck, back, and joint pain, minimizing reliance on medication.",
      icon: "ShieldIcon"
    }
  ] as Feature[]
};

export const clinicEnvironment = {
  title: "An Environment Engineered for Healing",
  description: "Recovery requires the right setting. Our clinic in Patiala combines state-of-the-art rehabilitative equipment with a calm, exceptionally hygienic environment to support your physical and mental healing process.",
  cta: { label: "Take a Clinic Tour", href: "/about" } as CTA
};

export const nriFocus = {
  title: "Trusted Care for Families Abroad",
  description: "Distance should not compromise the quality of care your loved ones receive. We offer specialized concierge physiotherapy services tailored for NRI families, including regular video consultations, progress reports, and dedicated remote coordination.",
  testimonial: "Living in Canada, my biggest worry was my father's post-stroke recovery in Patiala. Dr. Khan's team not only provided world-class rehab but kept me updated every step of the way.",
  testimonialAuthor: "Sandeep S., Toronto"
};

export const doctorProfile = {
  title: "Meet Dr. Iftikhar Ali Khan",
  credentials: "Lead Clinical Physiotherapist",
  description: "With over two decades of specialized experience in neuro-muscular rehabilitation, Dr. Khan leads a team committed to unparalleled clinical excellence. His approach bridges traditional care with modern, evidence-based recovery techniques.",
  cta: { label: "Read Full Biography", href: "/about" } as CTA
};

export const patientSuccess = {
  title: "Journeys of Recovery",
  testimonials: [
    {
      quote: "After my accident, I was told walking would be difficult. The intensive paralysis rehab program here changed my life. They never gave up on me.",
      author: "Rajinder K.",
      condition: "Spinal Cord Injury Recovery"
    },
    {
      quote: "The chronic back pain I suffered for five years was resolved within months. The diagnosis was precise, and the therapy was highly effective.",
      author: "Amit P.",
      condition: "Chronic Lumbar Pain"
    }
  ]
};

export const deepDiveParalysis = {
  title: "Signature Service: Neurological & Paralysis Rehab",
  description: "Our core expertise lies in complex neurological recovery. We utilize advanced concepts including the Bobath approach and Proprioceptive Neuromuscular Facilitation (PNF) to retrain the brain and body.",
  features: [
    "Comprehensive Neurological Assessment",
    "Gait Retraining and Balance Therapy",
    "Spasticity Management",
    "Functional Independence Training"
  ]
};

export const deepDiveOrthopedic = {
  title: "Orthopedic & Sports Recovery",
  description: "From joint replacements to ligament tears, our aggressive yet safe orthopedic protocols are designed to return you to peak physical performance.",
  features: [
    "Joint Mobilization Techniques",
    "Targeted Muscle Strengthening",
    "Kinesio Taping and Soft Tissue Release",
    "Return-to-Sport Conditioning"
  ]
};

export const differentiators = {
  title: "Why Choose General Williams Physiotherapy",
  items: [
    { title: "One-on-One Attention", description: "Dedicated therapy sessions focused entirely on you." },
    { title: "Evidence-Based Practice", description: "Treatments grounded in the latest clinical research." },
    { title: "Premium Hygiene", description: "Strict sanitization protocols ensuring patient safety." },
    { title: "Advanced Equipment", description: "Modern modalities for faster, safer recovery." }
  ]
};

export const processSteps = {
  title: "The Path to Recovery",
  steps: [
    { title: "1. Comprehensive Assessment", description: "Detailed clinical evaluation of your condition." },
    { title: "2. Custom Treatment Plan", description: "A tailored roadmap designed for your specific goals." },
    { title: "3. Active Rehabilitation", description: "Guided therapy sessions using advanced modalities." },
    { title: "4. Maintenance & Prevention", description: "Strategies to sustain health and prevent recurrence." }
  ]
};

export const globalFooter = {
  brand: "General Williams Physiotherapy",
  description: "Elite clinical recovery and specialized paralysis rehabilitation in Patiala.",
  address: "General Williams Physiotherapy, Patiala, Punjab, India",
  phone: "+91 98765 43210",
  email: "care@generalwilliamsphysio.com",
  copyright: "© 2024 General Williams Physiotherapy. All rights reserved."
};
