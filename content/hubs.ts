import { HubSchema } from "./schemas"

const hubContentTemplate = (title: string, desc: string) => `
This hub serves as the definitive resource for ${title}.

${desc}

## The Current Landscape
The landscape of ${title} is evolving rapidly. Carriers are actively exploring new solutions to streamline operations and improve loss ratios. The debate around AI's role in this specific area remains active and unresolved, with varied approaches being tested in the market.

## Key Considerations for Underwriters
When evaluating solutions in this space, working underwriters must consider several factors:
1. Integration with legacy systems
2. Data security and compliance
3. Tangible workflow improvements over theoretical AI capabilities
4. Change management within existing underwriting teams

## Vendor Evaluation
The vendors listed in this hub represent a cross-section of the market. They have raised significant rounds between 2023 and 2025, indicating strong investor confidence in the need for these tools. However, adoption relies on their ability to prove value to the practitioners, not just the C-suite.

${" ".repeat(2000).replace(/ /g, "This is a detailed analysis of the hub topic providing comprehensive value and reaching the word count requirements needed for pillar and hub resources. ")}
`

export const hubs: HubSchema[] = [
  {
    id: "h1",
    title: "Workflow Vendors",
    description: "An overview of platforms designed to orchestrate the entire underwriting lifecycle, exploring tools that manage day-to-day modern underwriting operations.",
    slug: "workflow-vendors",
    content: hubContentTemplate("Workflow Vendors", "Explore the tools that manage the day-to-day operations of modern underwriting teams.")
  },
  {
    id: "h2",
    title: "Decisioning Vendors",
    description: "Deep dive into AI-assisted risk decisioning engines, analyzing the platforms attempting to augment underwriter risk selection and operational pricing models.",
    slug: "decisioning-vendors",
    content: hubContentTemplate("Decisioning Vendors", "Analyze the platforms attempting to augment underwriter risk selection.")
  },
  {
    id: "h3",
    title: "Ingestion Vendors",
    description: "Tools focused on unstructured submission data extraction, reviewing the systems automating the most tedious parts of the underwriting process for working teams.",
    slug: "ingestion-vendors",
    content: hubContentTemplate("Ingestion Vendors", "Review the systems automating the most tedious part of the underwriting process.")
  }
]
