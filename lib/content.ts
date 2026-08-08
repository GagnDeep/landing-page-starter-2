export type GovSource =
  | `{{VERIFY: cite the specific .gov source}}`
  | `https://${string}.gov/${string}`

export interface StateLaw {
  id: string
  name: string
  salesLimit: string
  salesLimitSource: GovSource
  permitCost: string
  permitCostSource: GovSource
  permitRequired: boolean
  permitRequiredSource: GovSource
  verificationDate: string
}

export const stateLaws: Record<string, StateLaw> = {
  california: {
    id: "california",
    name: "California",
    salesLimit: "{{VERIFY: California sales limit}}",
    salesLimitSource: "{{VERIFY: cite the specific .gov source}}",
    permitCost: "{{VERIFY: California permit cost}}",
    permitCostSource: "{{VERIFY: cite the specific .gov source}}",
    permitRequired: true,
    permitRequiredSource: "{{VERIFY: cite the specific .gov source}}",
    verificationDate: "{{VERIFY: California verification date}}",
  },
  texas: {
    id: "texas",
    name: "Texas",
    salesLimit: "{{VERIFY: Texas sales limit}}",
    salesLimitSource: "{{VERIFY: cite the specific .gov source}}",
    permitCost: "{{VERIFY: Texas permit cost}}",
    permitCostSource: "{{VERIFY: cite the specific .gov source}}",
    permitRequired: false,
    permitRequiredSource: "{{VERIFY: cite the specific .gov source}}",
    verificationDate: "{{VERIFY: Texas verification date}}",
  },
  florida: {
    id: "florida",
    name: "Florida",
    salesLimit: "{{VERIFY: Florida sales limit}}",
    salesLimitSource: "{{VERIFY: cite the specific .gov source}}",
    permitCost: "{{VERIFY: Florida permit cost}}",
    permitCostSource: "{{VERIFY: cite the specific .gov source}}",
    permitRequired: false,
    permitRequiredSource: "{{VERIFY: cite the specific .gov source}}",
    verificationDate: "{{VERIFY: Florida verification date}}",
  },
}

export const stateSlugs = Object.keys(stateLaws)
