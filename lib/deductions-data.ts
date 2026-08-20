export interface DeductionItem {
  id: string
  title: string
  category: string
  categoriesSlug: string
  isDeductible: boolean
  percentage: string
  shortDescription: string
  whatQualifies: string
  evidenceRequired: string
  example: string
  applicableRoles: string[]
}

export const DEDUCTIONS_DATABASE: DeductionItem[] = [
  {
    id: "home-office",
    title: "Home Office Space",
    category: "Home & Workspace",
    categoriesSlug: "home-office",
    isDeductible: true,
    percentage: "100% Proportional",
    shortDescription:
      "Deduct the percentage of your home dedicated strictly and regularly to your business.",
    whatQualifies:
      "A dedicated room, studio, or desk area used EXCLUSIVELY and REGULARLY for work.",
    evidenceRequired:
      "Square footage measurements of home and office, lease or mortgage statements, utility bills.",
    example:
      "If your apartment is 1,000 sq ft and your dedicated office is 200 sq ft (20%), deduct 20% of rent, electricity, and internet.",
    applicableRoles: [
      "Software Engineer",
      "Graphic Designer",
      "Content Creator",
      "Copywriter",
      "Crypto Trader",
    ],
  },
  {
    id: "hardware-gear",
    title: "Laptops, PC Gear & Tech Workstations",
    category: "Hardware & Gear",
    categoriesSlug: "hardware-gear",
    isDeductible: true,
    percentage: "100%",
    shortDescription:
      "Computers, monitors, keyboards, microphones, and camera gear used for client work.",
    whatQualifies:
      "Laptops, monitors, server racks, microphones, and cameras used directly for business activities.",
    evidenceRequired:
      "Purchase receipt, model details, asset log if partially used for personal entertainment.",
    example:
      "A $2,400 M3 Max MacBook Pro bought for freelance software development is 100% written off using Section 179.",
    applicableRoles: [
      "Software Engineer",
      "Graphic Designer",
      "Content Creator",
      "Photographer",
      "OnlyFans Creator",
    ],
  },
  {
    id: "software-subscriptions",
    title: "Software & Cloud Services (SaaS)",
    category: "Software Subscriptions",
    categoriesSlug: "software-subscriptions",
    isDeductible: true,
    percentage: "100%",
    shortDescription:
      "GitHub, Adobe CC, Figma, AWS, OpenAI ChatGPT Plus, Notion, Midjourney.",
    whatQualifies:
      "Any software subscription required to perform, deliver, or manage your freelance client projects.",
    evidenceRequired:
      "Monthly digital invoices or credit card receipts clearly showing the subscription tier.",
    example:
      "ChatGPT Plus ($20/mo) and Adobe Creative Cloud ($55/mo) total $900/year in 100% deductible business expenses.",
    applicableRoles: [
      "Software Engineer",
      "Graphic Designer",
      "Content Creator",
      "Copywriter",
      "E-commerce Seller",
    ],
  },
  {
    id: "vehicle-mileage",
    title: "Business Vehicle Mileage",
    category: "Vehicle & Mileage",
    categoriesSlug: "vehicle-mileage",
    isDeductible: true,
    percentage: "70¢ / mile (TY2025)",
    shortDescription:
      "Driving for DoorDash/Uber deliveries, client meetings, or equipment pickup.",
    whatQualifies:
      "Miles driven strictly for business tasks. Driving from home to a fixed W2 office does NOT qualify.",
    evidenceRequired:
      "Date, starting location, destination, business purpose, and total miles logged in a tracking app.",
    example:
      "Driving 10,000 miles for DoorDash deliveries in 2025 equals an instant $7,000 Schedule C tax deduction.",
    applicableRoles: [
      "DoorDash / Uber Eats Driver",
      "Photographer",
      "Fitness Coach",
      "Consultant",
    ],
  },
  {
    id: "travel-meals",
    title: "Business Client Meals & Coffee",
    category: "Travel & Meals",
    categoriesSlug: "travel-meals",
    isDeductible: true,
    percentage: "50%",
    shortDescription:
      "Taking a client or contractor out for dinner, coffee, or drinks to discuss active business.",
    whatQualifies:
      "Meals where real business strategy, prospective work, or contract terms are actively discussed.",
    evidenceRequired:
      "Itemized receipt plus note of WHO attended and WHAT business topic was discussed.",
    example:
      "A $120 dinner discussing a website redesign contract yields a $60 tax deduction.",
    applicableRoles: [
      "Software Engineer",
      "Graphic Designer",
      "Copywriter",
      "Photographer",
      "Fitness Coach",
    ],
  },
  {
    id: "health-insurance",
    title: "Self-Employed Health Insurance",
    category: "Health Insurance",
    categoriesSlug: "health-insurance",
    isDeductible: true,
    percentage: "100% AGI Offset",
    shortDescription:
      "Medical, dental, and vision insurance premiums paid for yourself and dependents.",
    whatQualifies:
      "Premiums paid if you are self-employed with net profit and NOT eligible for a spouse's employer plan.",
    evidenceRequired:
      "Form 1095-A, 1095-B, or annual health insurance premium payment summary statement.",
    example:
      "Paying $450/month ($5,400/yr) for health insurance directly reduces your taxable income dollar-for-dollar.",
    applicableRoles: [
      "Software Engineer",
      "Graphic Designer",
      "Content Creator",
      "DoorDash / Uber Eats Driver",
      "Crypto Trader",
    ],
  },
  {
    id: "education-courses",
    title: "Professional Education & Courses",
    category: "Education & Courses",
    categoriesSlug: "education-courses",
    isDeductible: true,
    percentage: "100%",
    shortDescription:
      "Technical bootcamps, online masterclasses, industry books, and certifications.",
    whatQualifies:
      "Courses or books that maintain or improve skills needed in your CURRENT business. Must not qualify you for a new trade.",
    evidenceRequired: "Course receipt, syllabus, proof of payment.",
    example:
      "A $499 advanced React or Rust development course for an active software contractor is 100% deductible.",
    applicableRoles: [
      "Software Engineer",
      "Graphic Designer",
      "Copywriter",
      "Fitness Coach",
    ],
  },
  {
    id: "marketing-ads",
    title: "Marketing, Ads & Branding",
    category: "Marketing & Ads",
    categoriesSlug: "marketing-ads",
    isDeductible: true,
    percentage: "100%",
    shortDescription:
      "Google Ads, Meta Ads, domain registration, business cards, portfolio hosting.",
    whatQualifies:
      "All advertising, public relations, domain names, and promotional campaigns designed to attract clients.",
    evidenceRequired: "Ad account receipts, domain invoices, agency invoices.",
    example:
      "Spending $1,200 on Google Search Ads to get client leads for your agency is 100% written off.",
    applicableRoles: [
      "Graphic Designer",
      "E-commerce Seller",
      "OnlyFans Creator",
      "Copywriter",
    ],
  },
  {
    id: "contractor-fees",
    title: "Subcontractor & Freelance Fees",
    category: "Contractor Fees",
    categoriesSlug: "contractor-fees",
    isDeductible: true,
    percentage: "100%",
    shortDescription:
      "Payments to virtual assistants, video editors, tax advisors, or dev freelancers.",
    whatQualifies:
      "Amounts paid to non-employees for services rendered to your business. Issue 1099-NEC if ≥$600.",
    evidenceRequired:
      "Invoices, contract agreements, copies of filed 1099-NEC forms.",
    example:
      "Paying a video editor $3,000 for YouTube production yields $3,000 in Schedule C expense offsets.",
    applicableRoles: [
      "Content Creator",
      "Software Engineer",
      "E-commerce Seller",
      "Photographer",
    ],
  },
  {
    id: "internet-phone",
    title: "Cell Phone & Fiber Internet",
    category: "Internet & Phone",
    categoriesSlug: "internet-phone",
    isDeductible: true,
    percentage: "Proportional Business %",
    shortDescription:
      "Monthly smartphone bill and home internet allocated to business usage.",
    whatQualifies:
      "The percentage of your mobile data plan and internet bill used for client work, research, or gig apps.",
    evidenceRequired:
      "Monthly itemized bills, documented business vs personal usage percentage estimate.",
    example:
      "If your monthly phone bill is $100 and you use it 70% for DoorDash/client calls, deduct $70/mo ($840/yr).",
    applicableRoles: [
      "DoorDash / Uber Eats Driver",
      "Software Engineer",
      "Content Creator",
      "Copywriter",
    ],
  },
  {
    id: "professional-services",
    title: "Legal, Tax & Accounting Fees",
    category: "Professional Services",
    categoriesSlug: "professional-services",
    isDeductible: true,
    percentage: "100%",
    shortDescription:
      "CPA tax preparation, Enrolled Agent reviews, legal contract drafting.",
    whatQualifies:
      "Fees paid to accountants, tax pros, lawyers, and business consultants for business matters.",
    evidenceRequired:
      "Itemized invoices specifying business tax prep or legal services.",
    example:
      "Paying $149 for a bro.tax EA Pro Review is 100% deductible on next year's Schedule C.",
    applicableRoles: [
      "Software Engineer",
      "Content Creator",
      "Crypto Trader",
      "Photographer",
    ],
  },
  {
    id: "crypto-losses",
    title: "Crypto Capital Losses & Gas Fees",
    category: "Crypto Losses",
    categoriesSlug: "crypto-losses",
    isDeductible: true,
    percentage: "Up to $3,000 / year",
    shortDescription:
      "Realized losses from selling tokens or NFT mints plus network gas fees.",
    whatQualifies:
      "Net capital losses realized upon selling, swapping, or disposing of cryptocurrency assets.",
    evidenceRequired:
      "Exchange Form 1099-DA, transaction hashes, and CSV trade history logs.",
    example:
      "Realizing $5,000 in memecoin losses offsets all capital gains plus up to $3,000 of ordinary 1099 income.",
    applicableRoles: ["Crypto Trader", "Software Engineer"],
  },
]
