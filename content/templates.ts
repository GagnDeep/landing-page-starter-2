import { TemplateData } from "./schemas"

export const templatesData: TemplateData[] = [
  {
    slug: "standard-catering-contract",
    name: "Standard Catering Contract",
    category: "Legal",
    price: "{{VERIFY: specific price}}",
    verificationSource: "{{VERIFY: source}}",
    lastVerifiedDate: "{{VERIFY: YYYY-MM-DD}}",
    content: "{{VERIFY: Write description of what this template actually includes}}",
  },
  {
    slug: "event-prep-sheet",
    name: "Master Event Prep Sheet",
    category: "Operations",
    price: "{{VERIFY: specific price}}",
    verificationSource: "{{VERIFY: source}}",
    lastVerifiedDate: "{{VERIFY: YYYY-MM-DD}}",
    content: "{{VERIFY: Write description of what this template actually includes}}",
  },
  {
    slug: "client-intake-form",
    name: "Client Intake Form",
    category: "Sales",
    price: "{{VERIFY: specific price}}",
    verificationSource: "{{VERIFY: source}}",
    lastVerifiedDate: "{{VERIFY: YYYY-MM-DD}}",
    content: "{{VERIFY: Write description of what this template actually includes}}",
  }
]
