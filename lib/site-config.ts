export const siteConfig = {
  name: "bro.tax",
  domain: "https://bro.tax",
  tagline:
    "Tax filing for freelancers, creators & gig workers who hate suits and high fees.",
  description:
    "Instant 1099 tax estimator, write-off tracker, and flat $199 tax filing reviewed by real CPAs for self-employed workers.",
  pricing: {
    flatFiling: 199,
    yearRoundMonthly: 29,
    estimatorCost: 0,
  },
  taxRates: {
    seTaxRate: 0.153, // 15.3%
    socialSecurityRate: 0.124, // 12.4%
    medicareRate: 0.029, // 2.9%
    seBaseFactor: 0.9235, // Schedule SE line 4a factor
    socialSecurityCap2025: 176100, // 2025 cap
    socialSecurityCap2024: 168600, // 2024 cap
    seDeductionFactor: 0.5, // 50% deduction on Schedule 1
    standardDeductionSingle2025: 15000,
    standardDeductionSingle2024: 14600,
    standardMileageRate2025: 0.7, // 70 cents/mile
    standardMileageRate2024: 0.67, // 67 cents/mile
    filingThresholdNetEarnings: 400,
  },
  deadlines2025: {
    q1: "April 15, 2025",
    q2: "June 16, 2025",
    q3: "September 15, 2025",
    q4: "January 15, 2026",
    annual: "April 15, 2025",
  },
  navLinks: [
    { label: "Tax Estimator", href: "/calculator" },
    { label: "Write-Off Library", href: "/deductions" },
    { label: "Flat Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
}
