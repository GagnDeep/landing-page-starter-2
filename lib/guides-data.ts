export interface OccupationGuide {
  slug: string
  role: string
  tagline: string
  overview: string
  topDeductions: string[]
  commonPitfalls: string
  workedExample: string
}

export const OCCUPATION_GUIDES: OccupationGuide[] = [
  {
    slug: "freelance-software-engineer",
    role: "Freelance Software Engineer",
    tagline:
      "Tax write-offs for dev setups, cloud servers, AI tools, and remote workspaces.",
    overview:
      "Software contractors have massive potential Schedule C deductions ranging from powerful M-series Apple silicon workstations to high-performance cloud server hosting.",
    topDeductions: [
      "MacBooks, High-Refresh Monitors, and Ergonomic Chairs (Sec 179)",
      "GitHub Copilot, OpenAI ChatGPT Plus, and JetBrains Subscriptions",
      "Home Office Fiber Internet Allocation (Proportional %)",
      "AWS / GCP Cloud Server Sandbox Instances for Client Testing",
    ],
    commonPitfalls:
      "Deducting 100% of your home fiber internet when you also use it for personal 4K video streaming.",
    workedExample:
      "Earning $120,000 gross and writing off $14,000 in dev laptops, AWS sandbox servers, and SaaS subscriptions lowers taxable income from $120k to $106k, saving ~$4,200 in combined taxes.",
  },
  {
    slug: "content-creator-youtuber",
    role: "Content Creator & YouTuber",
    tagline:
      "Camera gear, studio lighting, editing software, props, and video editor fees.",
    overview:
      "Video creators manage complex equipment and contractor expense landscapes. Everything required to shoot, edit, and publish content is potentially deductible.",
    topDeductions: [
      "Sony/Canon Mirrorless Cameras, Lenses, and Studio Lighting Rigs",
      "Adobe Creative Cloud Suite, Epidemic Sound, and TubeBuddy SaaS",
      "Subcontractor Payments to Freelance Video Editors & Thumbnail Designers",
      "Video Props and Set Decoration Items Used Exclusively for Video Shoots",
    ],
    commonPitfalls:
      "Trying to write off personal clothing or makeup as video props without showing exclusive studio use.",
    workedExample:
      "A creator earning $90,000 who pays $12,000 to freelance editors and $6,000 for studio camera upgrades saves ~$5,500 in taxes.",
  },
  {
    slug: "graphic-designer",
    role: "Freelance Graphic Designer & UI/UX Specialist",
    tagline:
      "Figma licenses, Wacom drawing tablets, stock asset libraries, and color-accurate displays.",
    overview:
      "Designers rely on high-end visual hardware and digital subscriptions to deliver client branding assets.",
    topDeductions: [
      "Figma, Adobe Creative Cloud, and Midjourney AI Subscriptions",
      "Color-Accurate Displays (Apple Studio Display) and iPad Pro + Apple Pencil",
      "Font Licenses and Stock Asset Library Downloads (Envato, Shutterstock)",
      "Dedicated Studio Space at Home",
    ],
    commonPitfalls:
      "Failing to keep receipts for individual digital font license purchases.",
    workedExample:
      "A UI/UX designer with $80,000 in freelance revenue writes off $8,500 in design subscriptions and Apple tablet gear, netting $2,600 in tax savings.",
  },
  {
    slug: "ubereats-doordash-driver",
    role: "DoorDash, Uber Eats & Rideshare Driver",
    tagline:
      "Maximize your 70¢/mile deduction, phone plan, insulated bags, and tolls.",
    overview:
      "Gig delivery drivers can dramatically reduce or eliminate their 1099 tax burden by systematically logging every business mile driven.",
    topDeductions: [
      "Standard IRS Mileage Rate (70¢ per mile in Tax Year 2025)",
      "Insulated Catering Bags, Phone Mounts, and Flashlights",
      "Proportional Cell Phone Bill Usage (App Navigation)",
      "Parking Fees and Tolls Incurred During Active Deliveries",
    ],
    commonPitfalls:
      "Trying to deduct BOTH standard mileage and actual gas/oil receipts — the IRS forces you to choose one method.",
    workedExample:
      "Driving 18,000 business miles for DoorDash yields an instant $12,600 Schedule C tax write-off.",
  },
  {
    slug: "crypto-trader",
    role: "Crypto Trader & Web3 Contributor",
    tagline:
      "Gas fees, hardware wallets, trading bot subscriptions, and loss harvesting.",
    overview:
      "Active crypto traders and DAO contributors must track on-chain gas fees, staking rewards, and capital gains/losses on Form 8949.",
    topDeductions: [
      "Up to $3,000 Net Capital Loss Offset Against Ordinary Income",
      "Ethereum/Solana Network Gas Fees Deducted from Capital Gains Basis",
      "Ledger / Trezor Cold Storage Hardware Wallets",
      "Trading Terminal Subscriptions (TradingView, Nansen, Glassnode)",
    ],
    commonPitfalls:
      "Forgetting that token-to-token swaps (e.g., ETH to SOL) are taxable events in the US.",
    workedExample:
      "Harvesting $3,000 in memecoin capital losses directly lowers ordinary 1099 taxable income dollar-for-dollar.",
  },
  {
    slug: "onlyfans-creator",
    role: "OnlyFans & Digital Adult Content Creator",
    tagline:
      "Production gear, lingerie/costumes, web hosting, and DMCA takedown services.",
    overview:
      "Digital creators operate specialized subscription media businesses with unique production and online privacy expense needs.",
    topDeductions: [
      "Ring Lights, High-End Smartphones, and Tripods",
      "Specialized Costumes, Lingerie, and Stage Makeup Used Strictly for Production",
      "DMCA Copyright Takedown SaaS and Online Brand Protection Services",
      "Home Production Studio Room Allocation",
    ],
    commonPitfalls:
      "Claiming everyday streetwear or gym clothes as deductible stage wardrobe.",
    workedExample:
      "An OnlyFans creator earning $110,000 who deducts $15,000 in production gear, costumes, and privacy management cuts their tax bill by ~$4,600.",
  },
  {
    slug: "copywriter-consultant",
    role: "Freelance Copywriter & Business Consultant",
    tagline:
      "Client meeting meals, Grammarly/ProWritingAid, books, and home office space.",
    overview:
      "Consultants and writers convert intellectual property into client revenue, utilizing research and communication tools.",
    topDeductions: [
      "50% Deduction for Client Business Strategy Lunches and Coffee",
      "Grammarly, Notion, Jasper AI, and Copy.ai Subscriptions",
      "Industry Reference Books, Publications, and Research Subscriptions",
      "Dedicated Home Writing Desk Space",
    ],
    commonPitfalls:
      "Failing to write down the business purpose on the back of coffee and meal receipts.",
    workedExample:
      "A copywriter taking $1,200 in client lunch deductions and $2,000 in writing SaaS reduces tax liability by ~$980.",
  },
  {
    slug: "e-commerce-seller",
    role: "E-Commerce & Amazon FBA Seller",
    tagline:
      "Inventory cost of goods sold, shipping supplies, ad spend, and warehouse space.",
    overview:
      "Sellers manage physical product inventory, platform fees, logistics, and digital marketing spend.",
    topDeductions: [
      "Cost of Goods Sold (COGS) for Purchased Wholesale Inventory",
      "Packaging Tape, Custom Boxes, Polymailers, and Label Printers",
      "Amazon FBA Merchant Fees and Shopify Monthly Platform Subscriptions",
      "PPC Advertising Spend on Meta, Google, and Amazon Sponsored Ads",
    ],
    commonPitfalls:
      "Deducting unsold inventory before it actually sells — COGS is deducted only when sold.",
    workedExample:
      "Selling $150,000 in goods with $60,000 COGS and $20,000 in Amazon fees leaves $70,000 net taxable profit.",
  },
  {
    slug: "photographer-videographer",
    role: "Wedding & Event Photographer",
    tagline:
      "Camera lenses, drone hardware, travel mileage, and memory storage.",
    overview:
      "Photographers carry expensive physical gear assets and travel heavily to event locations.",
    topDeductions: [
      "Canon/Nikon Camera Lenses, Flashes, Drones, and Memory Cards",
      "Travel Vehicle Mileage to Event Venues (70¢/mile)",
      "Lightroom, Photoshop, and Pixieset Gallery Hosting Subscriptions",
      "Studio / Equipment Insurance Premiums",
    ],
    commonPitfalls:
      "Not maintaining an equipment inventory log with purchase dates and serial numbers.",
    workedExample:
      "A photographer booking $65,000 in weddings who writes off $11,000 in new lenses and travel mileage saves ~$3,400 in taxes.",
  },
  {
    slug: "fitness-coach",
    role: "Personal Trainer & Online Fitness Coach",
    tagline:
      "Training facility rentals, client coaching apps, liability insurance, and CPR certs.",
    overview:
      "Fitness professionals combine physical coaching session overhead with online digital workout programming tools.",
    topDeductions: [
      "Gym Floor & Facility Rental Hourly Space Fees",
      "Client Coaching Software (Trainerize, TrueCoach, MyFitnessPal)",
      "Personal Trainer General Liability Insurance Premiums",
      "CPR / First Aid Recertification & Continuing Education Units (CEUs)",
    ],
    commonPitfalls:
      "Trying to deduct personal athletic shoes or everyday workout apparel.",
    workedExample:
      "A coach earning $70,000 who spends $8,000 on gym floor rental and coaching apps saves ~$2,500.",
  },
]
