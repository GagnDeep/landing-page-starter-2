import { SoftwareData } from "./schemas"

export const softwareData: SoftwareData[] = [
  {
    slug: "caterbase",
    name: "CaterBase",
    category: "CRM & Invoicing",
    pricing: "{{VERIFY: cite specific pricing source for CaterBase}}",
    features: ["Event Management", "Invoicing", "Client Portal"],
    verificationSource: "{{VERIFY: cite official CaterBase website}}",
    lastVerifiedDate: "2023-10-01",
    content: "CaterBase is a comprehensive CRM and invoicing platform tailored specifically for catering operators. It streamlines event management, client communication, and payment processing into one unified dashboard. By automating tedious administrative tasks, it allows operators to focus more on culinary execution and client satisfaction. Its reporting features are robust, giving insights into profitability by event type.",
  },
  {
    slug: "recipe-cost-pro",
    name: "Recipe Cost Pro",
    category: "Costing & Inventory",
    pricing: "{{VERIFY: cite specific pricing source for Recipe Cost Pro}}",
    features: ["Ingredient Cost Tracking", "Menu Pricing", "Yield Analysis"],
    verificationSource: "{{VERIFY: cite official Recipe Cost Pro website}}",
    lastVerifiedDate: "2023-10-01",
    content: "Recipe Cost Pro is an essential tool for operators who need precise control over their food costs. It allows you to input raw ingredient costs and automatically calculates the cost per serving for any recipe. This ensures your menu pricing is always aligned with your target margins, even when market prices fluctuate. The yield analysis feature helps minimize waste and maximize profitability.",
  },
  {
    slug: "staff-scheduler",
    name: "Staff Scheduler",
    category: "Staffing",
    pricing: "{{VERIFY: cite specific pricing source for Staff Scheduler}}",
    features: ["Shift Bidding", "Time Tracking", "Payroll Export"],
    verificationSource: "{{VERIFY: cite official Staff Scheduler website}}",
    lastVerifiedDate: "2023-10-01",
    content: "Managing a roster of on-call catering staff can be a nightmare. Staff Scheduler simplifies this by offering shift bidding, where staff can claim available shifts for upcoming events. It includes integrated time tracking via a mobile app and seamlessly exports timesheets to most major payroll providers, drastically reducing administrative overhead after busy event weekends.",
  }
]
