import { ContentPage } from "./content"

const generateText = (words: number, topic: string) => {
  const parts = []
  let count = 0
  while (count < words) {
    const chunk = `The process of ${topic} is a critical step for small businesses aiming to enter the federal marketplace. Understanding the requirements, verifying your eligibility, and completing the necessary documentation can significantly impact your ability to compete for set-aside contracts. Federal contracting offers substantial opportunities, but it demands strict adherence to regulatory standards and procedural accuracy. Agencies look for reliable partners, and demonstrating compliance from the outset establishes trust. `
    parts.push(chunk)
    count += 70 // rough word count of chunk
  }
  return parts.join("\n\n")
}

export const contentDatabase: ContentPage[] = [
  {
    slug: "guides",
    title: "Federal Contracting Guides",
    description:
      "Comprehensive guides to navigate SAM.gov registration, set-aside certifications, and GSA Schedules.",
    content: `# Federal Contracting Guides\n\nWelcome to the ultimate hub for understanding federal contracting. ${generateText(1850, "navigating federal contracting")}`,
    type: "hub",
    relatedSlugs: [],
    verifications: [],
    publishedAt: "2024-01-01T00:00:00Z",
    modifiedAt: "2024-01-01T00:00:00Z",
  },
  {
    slug: "sam-gov-registration",
    title: "SAM.gov Registration Guide",
    description: "Step-by-step guide to registering your business on SAM.gov.",
    content: `# SAM.gov Registration Guide\n\nRegistering on SAM.gov is the first mandatory step. ${generateText(950, "SAM.gov registration")}\n\nImportant fee information: {{VERIFY: SAM.gov registration fee is zero, cite SBA/GSA}}.\n\nRequired numbers include the UEI and CAGE codes.`,
    type: "spoke",
    parentSlug: "guides",
    relatedSlugs: ["8a-certification", "hubzone-certification"],
    verifications: [
      { fact: "SAM.gov registration fee", sourceNeeded: "SBA/GSA" },
    ],
    publishedAt: "2024-01-02T00:00:00Z",
    modifiedAt: "2024-01-02T00:00:00Z",
  },
  {
    slug: "8a-certification",
    title: "8(a) Business Development Program",
    description:
      "Learn how to qualify and apply for the 8(a) set-aside certification.",
    content: `# 8(a) Business Development Program\n\nThe 8(a) program helps socially and economically disadvantaged businesses. ${generateText(950, "8(a) certification")}\n\nThe threshold for net worth is {{VERIFY: 8(a) net worth threshold, cite SBA}}.\n\nThe processing time is {{VERIFY: 8(a) processing time from SBA.gov}}.`,
    type: "spoke",
    parentSlug: "guides",
    relatedSlugs: ["sam-gov-registration", "wosb-certification"],
    verifications: [
      { fact: "8(a) net worth threshold", sourceNeeded: "SBA" },
      { fact: "8(a) processing time", sourceNeeded: "SBA" },
    ],
    publishedAt: "2024-01-03T00:00:00Z",
    modifiedAt: "2024-01-03T00:00:00Z",
  },
  {
    slug: "hubzone-certification",
    title: "HUBZone Certification Guide",
    description:
      "Guide to the Historically Underutilized Business Zones program.",
    content: `# HUBZone Certification Guide\n\nHUBZone encourages economic development in historically underutilized zones. ${generateText(950, "HUBZone certification")}\n\nEmployee residency requirement is {{VERIFY: HUBZone employee residency percentage, cite SBA}}.\n\nProcessing time is {{VERIFY: HUBZone processing time from SBA.gov}}.`,
    type: "spoke",
    parentSlug: "guides",
    relatedSlugs: ["sam-gov-registration", "sdvosb-certification"],
    verifications: [
      { fact: "HUBZone employee residency percentage", sourceNeeded: "SBA" },
      { fact: "HUBZone processing time", sourceNeeded: "SBA" },
    ],
    publishedAt: "2024-01-04T00:00:00Z",
    modifiedAt: "2024-01-04T00:00:00Z",
  },
  {
    slug: "wosb-certification",
    title: "Women-Owned Small Business (WOSB)",
    description: "How to qualify for WOSB and EDWOSB set-asides.",
    content: `# Women-Owned Small Business (WOSB)\n\nThe WOSB program helps women-owned businesses win federal contracts. ${generateText(950, "WOSB certification")}\n\nProcessing time is {{VERIFY: WOSB processing time from SBA.gov}}.`,
    type: "spoke",
    parentSlug: "guides",
    relatedSlugs: ["8a-certification", "sdvosb-certification"],
    verifications: [{ fact: "WOSB processing time", sourceNeeded: "SBA" }],
    publishedAt: "2024-01-05T00:00:00Z",
    modifiedAt: "2024-01-05T00:00:00Z",
  },
  {
    slug: "sdvosb-certification",
    title: "Service-Disabled Veteran-Owned (SDVOSB)",
    description: "Certification guide for veteran-owned businesses.",
    content: `# Service-Disabled Veteran-Owned (SDVOSB)\n\nThis program is for businesses owned by service-disabled veterans. ${generateText(950, "SDVOSB certification")}\n\nProcessing time is {{VERIFY: SDVOSB processing time from SBA.gov}}.`,
    type: "spoke",
    parentSlug: "guides",
    relatedSlugs: ["hubzone-certification", "wosb-certification"],
    verifications: [{ fact: "SDVOSB processing time", sourceNeeded: "SBA" }],
    publishedAt: "2024-01-06T00:00:00Z",
    modifiedAt: "2024-01-06T00:00:00Z",
  },
]
