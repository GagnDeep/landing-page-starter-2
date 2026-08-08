import { VendorSchema } from "./schemas"

const vendorContentTemplate = (name: string, category: string) => `
This is a comprehensive review and analysis of ${name}, a leading vendor in the ${category} space for P&C insurance underwriting.

In recent years, the ${category} category has seen significant innovation. Working underwriters are increasingly relying on tools like ${name} to streamline their daily workflows, analyze complex risk variables, and make more informed decisions.

## The Core Value Proposition
${name} differentiates itself by focusing heavily on reducing manual data entry. By automating the ingestion of unstructured submission documents, it allows underwriters to focus on actual risk assessment. This shift from data entry to risk analysis is a crucial evolution in the modern underwriting desk. The debate around AI in underwriting is active and unresolved inside many carriers, but the practical utility of reducing administrative burden is clear.

## Market Position and Adoption
As a key player in ${category}, ${name} has seen adoption among both regional carriers and large national insurers. The ability to integrate smoothly with existing core systems (like Guidewire or Duck Creek) is often a make-or-break factor for these tools. We have seen that ${name} invests heavily in its API capabilities to facilitate these integrations.

## The AI Debate
The role of AI in tools like ${name} is heavily debated. While some argue that AI will eventually fully automate the underwriting process for standard commercial lines, the reality on the ground is different. Currently, ${name} uses AI primarily for triage and data extraction, leaving the final decision-making authority firmly with the underwriter. This "human-in-the-loop" approach is preferred by most compliance and risk officers.

## Conclusion
For underwriting teams looking to modernize their ${category} capabilities, ${name} remains a strong contender. Its focus on practical, workflow-oriented features over theoretical AI promises makes it a pragmatic choice for the working underwriter.

${" ".repeat(1500).replace(/ /g, "We continue to evaluate their progress in providing essential features for core practitioners in this highly regulated industry space. ")}
`

export const vendors: VendorSchema[] = [
  {
    id: "v1",
    name: "Alpha Underwriting",
    category: "Workflow",
    fundingAmount: "{{VERIFY: Alpha Underwriting funding amount}}",
    fundingSource: "{{VERIFY: Alpha Underwriting funding source}}",
    fundingDate: "2024-01-15",
    sponsorshipRate: "{{VERIFY: Alpha Underwriting sponsorship rate}}",
    sponsorshipSource: "{{VERIFY: Alpha sponsorship source}}",
    description: "A leading workflow platform for commercial P&C underwriters focused on streamlining operations and complex risk evaluations.",
    slug: "alpha-underwriting",
    hubSlug: "workflow-vendors",
    content: vendorContentTemplate("Alpha Underwriting", "Workflow")
  },
  {
    id: "v2",
    name: "Beta Risk AI",
    category: "Decisioning",
    fundingAmount: "{{VERIFY: Beta Risk AI funding amount}}",
    fundingSource: "{{VERIFY: Beta Risk AI funding source}}",
    fundingDate: "2023-11-20",
    sponsorshipRate: "{{VERIFY: Beta Risk AI sponsorship rate}}",
    sponsorshipSource: "{{VERIFY: Beta sponsorship source}}",
    description: "An AI-assisted risk decisioning engine designed to support complex commercial lines evaluations while keeping underwriters in control.",
    slug: "beta-risk-ai",
    hubSlug: "decisioning-vendors",
    content: vendorContentTemplate("Beta Risk AI", "Decisioning")
  },
  {
    id: "v3",
    name: "Gamma Intake",
    category: "Ingestion",
    fundingAmount: "{{VERIFY: Gamma Intake funding amount}}",
    fundingSource: "{{VERIFY: Gamma Intake funding source}}",
    fundingDate: "2024-03-05",
    sponsorshipRate: "{{VERIFY: Gamma Intake sponsorship rate}}",
    sponsorshipSource: "{{VERIFY: Gamma sponsorship source}}",
    description: "Automated submission ingestion and triage tool for P&C carriers aimed at reducing administrative burdens in high volume environments.",
    slug: "gamma-intake",
    hubSlug: "ingestion-vendors",
    content: vendorContentTemplate("Gamma Intake", "Ingestion")
  }
]
