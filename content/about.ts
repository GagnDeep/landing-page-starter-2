import { SeoMetadata, CTA } from "./types";

export const seo: SeoMetadata = {
  title: "About Us | General Williams Physiotherapy | Patiala",
  description: "Learn about General Williams Physiotherapy and our founder, Dr. Iftikhar Ali Khan. Discover our heritage of healing and commitment to clinical excellence.",
  keywords: ["About General Williams Physiotherapy", "Dr. Iftikhar Ali Khan", "Best Physiotherapy Clinic Patiala", "Clinic History"],
};

export const hero = {
  title: "A Heritage of Healing",
  subtitle: "Dedicated to restoring mobility and enhancing quality of life through expert clinical care since our founding."
};

export const founderStory = {
  title: "Meet the Founder",
  name: "Dr. Iftikhar Ali Khan",
  role: "Lead Clinical Physiotherapist",
  biography: "Dr. Iftikhar Ali Khan established General Williams Physiotherapy with a singular vision: to provide a level of clinical excellence previously unavailable in the region. With extensive specialized training in neuro-rehabilitation and chronic pain management, Dr. Khan has dedicated his career to the most complex cases, including stroke recovery, spinal cord injuries, and severe orthopedic trauma. His philosophy blends profound medical knowledge with deep empathy, ensuring that every patient is treated not just as a condition, but as an individual on a critical journey back to health."
};

export const clinicalPhilosophy = {
  title: "Our Clinical Philosophy",
  description: "We believe that optimal recovery requires more than passive treatments. It demands accurate diagnosis, evidence-based interventions, and the active participation of the patient. We do not offer generic routines; every exercise, every modality, and every session is strictly tailored to the biomechanical and neurological needs of the individual.",
  pillars: [
    { title: "Precision Diagnosis", description: "Identifying the root cause rather than merely treating the symptoms." },
    { title: "Evidence-Based Care", description: "Utilizing globally recognized protocols and peer-reviewed methods." },
    { title: "Patient Empowerment", description: "Educating patients to understand and maintain their own physical health." }
  ]
};

export const facilityTour = {
  title: "A Facility Engineered for Excellence",
  description: "Our clinic is designed to reflect our high standards of care. We maintain an immaculate, serene environment equipped with advanced therapeutic technology. From specialized neuro-rehab apparatus to modern electrotherapy machines, our facility is fully equipped to handle comprehensive recovery needs."
};

export const team = {
  title: "Our Specialized Team",
  description: "Under the guidance of Dr. Khan, our team consists of certified, highly trained physiotherapists dedicated to various sub-specialties of rehabilitation."
};

export const finalCta = {
  title: "Begin Your Recovery Journey",
  description: "Experience the difference of premium clinical care. Schedule your comprehensive assessment today.",
  cta: { label: "Book an Appointment", href: "/contact" } as CTA
};
