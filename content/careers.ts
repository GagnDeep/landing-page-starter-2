import { SEO } from "./home";

export interface CareersContent {
  seo: SEO;
  hero: { headline: string; subheadline: string };
  culture: { headline: string; body: string };
  apprenticeship: { headline: string; body: string };
  openings: { title: string; type: string }[];
}

export const careersContent: CareersContent = {
  seo: {
    title: "Careers & Apprenticeships | Sardaar G. Tailors",
    description: "Join the Sardaar G. Tailors atelier in Patiala. We are looking for master craftsmen and passionate apprentices."
  },
  hero: {
    headline: "Join the Atelier",
    subheadline: "Where tradition meets relentless pursuit of perfection."
  },
  culture: {
    headline: "Our Culture of Craft",
    body: "At Sardaar G. Tailors, we do not just sew garments; we preserve history. Our atelier is a quiet, focused environment where skill is revered above all else. We provide a space for artisans to practice their craft with the finest materials available."
  },
  apprenticeship: {
    headline: "The Apprenticeship Program",
    body: "We believe in passing the needle to the next generation. Our rigorous apprenticeship program pairs novices with our master tailors to learn the fundamentals of the Muktsari cut, pattern making, and hand-finishing."
  },
  openings: [
    { title: "Master Pattern Cutter", type: "Full-Time" },
    { title: "Zardosi Embroidery Specialist", type: "Full-Time" },
    { title: "Tailoring Apprentice", type: "Program (2 Years)" }
  ]
};
