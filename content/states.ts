import { StateData } from "./schemas"

export const statesData: StateData[] = [
  {
    slug: "california",
    name: "California",
    permitCost: "{{VERIFY: cite the specific .gov source for CA permit cost}}",
    threshold: "{{VERIFY: cite the specific .gov source for CA revenue threshold}}",
    fees: "{{VERIFY: cite the specific .gov source for CA additional fees}}",
    verificationSource: "{{VERIFY: cite the specific .gov source for California Cottage Food Operations}}",
    lastVerifiedDate: "2023-10-01",
    content: `California has a two-tiered system for Cottage Food Operations (CFO). Class A allows you to sell directly to the public from your home, while Class B allows for indirect sales to restaurants or retail shops. It is vital to determine which class fits your business model. Both classes require an inspection of your home kitchen, though the rigor differs. To start, you must complete a food processor course and submit your application to your local environmental health department.`,
  },
  {
    slug: "texas",
    name: "Texas",
    permitCost: "{{VERIFY: cite the specific .gov source for TX permit cost}}",
    threshold: "{{VERIFY: cite the specific .gov source for TX revenue threshold}}",
    fees: "{{VERIFY: cite the specific .gov source for TX additional fees}}",
    verificationSource: "{{VERIFY: cite the specific .gov source for Texas Cottage Food Law}}",
    lastVerifiedDate: "2023-10-01",
    content: `Texas has some of the most permissive cottage food laws in the country following recent updates. You do not need a permit from the local health department to operate, nor do you need to undergo a kitchen inspection. However, you must obtain a food handler's card. Your products must fall into the approved category of non-time and temperature-controlled for safety (non-TCS) foods. Labeling requirements are strict and must include allergens and a statement that the food was prepared in a home kitchen.`,
  },
  {
    slug: "florida",
    name: "Florida",
    permitCost: "{{VERIFY: cite the specific .gov source for FL permit cost}}",
    threshold: "{{VERIFY: cite the specific .gov source for FL revenue threshold}}",
    fees: "{{VERIFY: cite the specific .gov source for FL additional fees}}",
    verificationSource: "{{VERIFY: cite the specific .gov source for Florida Cottage Food Operations}}",
    lastVerifiedDate: "2023-10-01",
    content: `Florida's cottage food operators can produce and sell a wide range of products without needing a permit from the Department of Agriculture and Consumer Services (FDACS) or a commercial kitchen. Recent legislative changes have significantly increased the gross sales cap, allowing operators to grow their businesses substantially from home. Like most states, you are restricted to non-hazardous foods and must follow specific labeling rules to inform consumers that the product is made in a home kitchen.`,
  }
]
