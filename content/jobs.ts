import { JobSchema } from "./schemas"

const jobContentTemplate = (title: string, company: string) => `
This is a detailed overview of the ${title} position at ${company}.

## Role Overview
The ${title} will be responsible for evaluating complex commercial risks, managing a profitable book of business, and maintaining strong relationships with key broker partners.

## Responsibilities
- Analyze and underwrite new and renewal business in accordance with company guidelines.
- Price risks appropriately to achieve target loss ratios.
- Negotiate terms and conditions with brokers.
- Utilize modern underwriting tools to streamline the evaluation process.
- Participate in the ongoing debate around AI implementation within the underwriting workflow, providing practitioner feedback on new tools.

## Requirements
- Minimum 5 years of experience in commercial P&C underwriting.
- Deep understanding of coverage forms, rating plans, and risk evaluation.
- Strong negotiation and communication skills.
- Familiarity with modern underwriting workflow platforms.

${" ".repeat(1000).replace(/ /g, "Detailed requirements and expectations for the role, providing extensive practitioner responsibilities and daily requirements. ")}
`

export const jobs: JobSchema[] = [
  {
    id: "j1",
    title: "Senior Middle Market Underwriter",
    company: "National Mutual",
    salary: "{{VERIFY: National Mutual Senior Middle Market salary}}",
    salarySource: "{{VERIFY: National Mutual salary source}}",
    verificationDate: "2024-03-10",
    location: "Chicago, IL (Hybrid)",
    slug: "senior-middle-market-underwriter",
    hubSlug: "jobs",
    content: jobContentTemplate("Senior Middle Market Underwriter", "National Mutual")
  },
  {
    id: "j2",
    title: "Cyber Liability Underwriter",
    company: "Specialty Risk Group",
    salary: "{{VERIFY: Specialty Risk Group Cyber salary}}",
    salarySource: "{{VERIFY: Specialty Risk Group salary source}}",
    verificationDate: "2024-02-28",
    location: "New York, NY (Remote)",
    slug: "cyber-liability-underwriter",
    hubSlug: "jobs",
    content: jobContentTemplate("Cyber Liability Underwriter", "Specialty Risk Group")
  }
]
