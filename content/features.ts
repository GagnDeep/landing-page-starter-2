import { SeoMetadata, CTA, Feature } from "./types";

export const seo: SeoMetadata = {
  title: "Clinical Services & Treatments | General Williams Physiotherapy",
  description: "Comprehensive physiotherapy services including paralysis rehabilitation, post-operative care, chronic pain management, and sports injury recovery.",
  keywords: ["Physiotherapy Services", "Paralysis Treatment", "Post Op Rehab", "Sports Injury Recovery", "Geriatric Physiotherapy"],
};

export const hero = {
  title: "Specialized Clinical Recovery",
  subtitle: "Advanced therapeutic interventions for complex neurological, orthopedic, and systemic physical conditions."
};

export const services = [
  {
    id: "paralysis-neuro",
    title: "Paralysis & Neuro-Rehabilitation",
    description: "Our flagship service. We provide intensive, long-term rehabilitation for patients recovering from strokes (CVA), Traumatic Brain Injuries (TBI), Spinal Cord Injuries, Bell's Palsy, and other neurological disorders. Utilizing neuroplasticity principles, we work to restore motor function, balance, and independence.",
    techniques: ["Bobath Concept", "Proprioceptive Neuromuscular Facilitation (PNF)", "Gait Training", "Spasticity Reduction"]
  },
  {
    id: "post-operative",
    title: "Post-Operative Care",
    description: "Crucial for optimal surgical outcomes. We guide patients through the delicate phases of recovery following joint replacements (Knee/Hip TKR/THR), ligament reconstructions (ACL/PCL), spinal surgeries, and fracture fixations. Our goal is safe tissue healing followed by aggressive restoration of strength and mobility.",
    techniques: ["Early Mobilization Protocols", "Scar Tissue Management", "Progressive Resistance Training", "Joint Range of Motion Therapy"]
  },
  {
    id: "chronic-pain",
    title: "Chronic Pain Management",
    description: "Addressing persistent pain conditions such as chronic low back pain, cervical spondylosis, sciatica, and osteoarthritis. We move beyond temporary relief to address the biomechanical faults and muscular imbalances causing the pain.",
    techniques: ["Manual Therapy", "Core Stabilization", "Postural Correction", "Advanced Electrotherapy"]
  },
  {
    id: "sports-injury",
    title: "Sports Injury Recovery",
    description: "Rapid, safe return-to-play protocols for athletes. Treating sprains, strains, tendonitis, and overuse injuries with treatments designed to withstand the rigors of athletic performance.",
    techniques: ["Kinesiology Taping", "Sports Specific Conditioning", "Biomechanical Analysis", "Soft Tissue Release"]
  },
  {
    id: "geriatric",
    title: "Geriatric Physiotherapy",
    description: "Specialized care for older adults to maintain mobility, prevent falls, and manage age-related conditions like arthritis and osteoporosis, ensuring a high quality of independent living.",
    techniques: ["Fall Prevention Training", "Balance and Coordination Exercises", "Gentle Joint Mobilization", "Strength Maintenance"]
  }
];

export const modalities = {
  title: "Advanced Clinical Modalities",
  description: "We employ state-of-the-art therapeutic technology to accelerate healing and manage pain.",
  items: [
    { title: "Interferential Therapy (IFT)", description: "Deep tissue pain relief and swelling reduction." },
    { title: "Ultrasound Therapy", description: "Promotes cellular healing and breaks down scar tissue." },
    { title: "TENS", description: "Effective, drug-free nerve pain management." },
    { title: "Dry Needling & Cupping", description: "Targeted release of myofascial trigger points." }
  ]
};

export const finalCta = {
  title: "Require Specialized Care?",
  description: "Contact us to discuss which treatment protocol is right for your specific condition.",
  cta: { label: "Consult Our Specialists", href: "/contact" } as CTA
};
