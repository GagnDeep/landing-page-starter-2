import { SeoMetadata } from "./types";

export const seo: SeoMetadata = {
  title: "Clinical Insights & Blog | General Williams Physiotherapy",
  description: "Read the latest clinical insights, recovery tips, and updates on neuro-rehabilitation and physical health from Dr. Iftikhar Ali Khan.",
  keywords: ["Physiotherapy Blog", "Health Insights", "Stroke Recovery Tips", "Back Pain Advice"],
};

export const hero = {
  title: "Clinical Insights",
  subtitle: "Expert advice, patient guides, and the latest in rehabilitation science from our clinical team."
};

export const categories = [
  { id: "all", label: "All Articles" },
  { id: "neuro", label: "Neuro-Rehab" },
  { id: "ortho", label: "Orthopedic Care" },
  { id: "wellness", label: "Prevention & Wellness" }
];

export const articles = [
  {
    id: "understanding-neuroplasticity",
    title: "Understanding Neuroplasticity in Stroke Recovery",
    category: "Neuro-Rehab",
    excerpt: "How the brain rewires itself after a stroke and why intensive, repetitive physical therapy is the key to restoring lost movement.",
    date: "October 12, 2023",
    readTime: "5 min read",
    imageAlt: "Brain scan showing neural pathways"
  },
  {
    id: "post-tkr-rehab",
    title: "The First 30 Days After a Total Knee Replacement",
    category: "Orthopedic Care",
    excerpt: "A comprehensive guide on what to expect, critical milestones, and why early mobilization is vital for a successful knee replacement.",
    date: "September 28, 2023",
    readTime: "4 min read",
    imageAlt: "Patient performing knee exercises"
  },
  {
    id: "ergonomics-wfh",
    title: "Ergonomics in the WFH Era: Stopping Neck Pain Before It Starts",
    category: "Prevention & Wellness",
    excerpt: "Simple adjustments to your home office setup that can prevent chronic cervical issues and posture-related headaches.",
    date: "September 15, 2023",
    readTime: "3 min read",
    imageAlt: "Proper desk posture illustration"
  }
];

export const newsletter = {
  title: "Stay Informed",
  description: "Subscribe to receive monthly insights on mobility, pain management, and healthy living directly from our clinical team.",
  inputPlaceholder: "Enter your email address",
  buttonText: "Subscribe"
};
