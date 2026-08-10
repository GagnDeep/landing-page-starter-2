import { SoftwareData } from "./schemas"

export const softwareData: SoftwareData[] = [
  {
    slug: "caterbase",
    name: "CaterBase",
    category: "CRM & Invoicing",
    pricing: "{{VERIFY: cite specific pricing source for CaterBase}}",
    features: ["Event Management", "Invoicing", "Client Portal"],
    verificationSource: "{{VERIFY: cite official CaterBase website}}",
    lastVerifiedDate: "{{VERIFY: YYYY-MM-DD}}",
    content: "{{VERIFY: Write honest, verified review of CaterBase based on actual software capabilities}}",
  },
  {
    slug: "recipe-cost-pro",
    name: "Recipe Cost Pro",
    category: "Costing & Inventory",
    pricing: "{{VERIFY: cite specific pricing source for Recipe Cost Pro}}",
    features: ["Ingredient Cost Tracking", "Menu Pricing", "Yield Analysis"],
    verificationSource: "{{VERIFY: cite official Recipe Cost Pro website}}",
    lastVerifiedDate: "{{VERIFY: YYYY-MM-DD}}",
    content: "{{VERIFY: Write honest, verified review of Recipe Cost Pro based on actual software capabilities}}",
  },
  {
    slug: "staff-scheduler",
    name: "Staff Scheduler",
    category: "Staffing",
    pricing: "{{VERIFY: cite specific pricing source for Staff Scheduler}}",
    features: ["Shift Bidding", "Time Tracking", "Payroll Export"],
    verificationSource: "{{VERIFY: cite official Staff Scheduler website}}",
    lastVerifiedDate: "{{VERIFY: YYYY-MM-DD}}",
    content: "{{VERIFY: Write honest, verified review of Staff Scheduler based on actual software capabilities}}",
  }
]
