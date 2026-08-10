import { TemplateData } from "./schemas"

export const templatesData: TemplateData[] = [
  {
    slug: "standard-catering-contract",
    name: "Standard Catering Contract",
    category: "Legal",
    price: "{{VERIFY: specific price}}",
    verificationSource: "{{VERIFY: source}}",
    lastVerifiedDate: "2023-10-01",
    content: "Our Standard Catering Contract is drafted by legal professionals specifically for the catering industry. It covers crucial clauses such as cancellation policies, payment schedules, liability limitations, and force majeure. Using a rock-solid contract protects your business from unforeseen circumstances and ensures you get paid for your work, even if an event is unexpectedly canceled.",
  },
  {
    slug: "event-prep-sheet",
    name: "Master Event Prep Sheet",
    category: "Operations",
    price: "{{VERIFY: specific price}}",
    verificationSource: "{{VERIFY: source}}",
    lastVerifiedDate: "2023-10-01",
    content: "The Master Event Prep Sheet is the backbone of a smooth event. This template provides a highly organized structure for listing all required ingredients, prep steps, cooking times, and equipment needed. It is designed to be easily readable in a busy kitchen environment, ensuring that nothing is missed during the chaotic hours leading up to service.",
  },
  {
    slug: "client-intake-form",
    name: "Client Intake Form",
    category: "Sales",
    price: "{{VERIFY: specific price}}",
    verificationSource: "{{VERIFY: source}}",
    lastVerifiedDate: "2023-10-01",
    content: "A thorough Client Intake Form is the first step to a successful event. This template asks all the right questions upfront: dietary restrictions, venue constraints, preferred service style, and budget expectations. By gathering this information early, you can provide an accurate quote and avoid costly misunderstandings later in the planning process.",
  }
]
