export interface DeductionItem {
  name: string
  scheduleCLine: string
  deductibility: string // e.g. "100%" or "Pro-rated"
  auditRisk: "Low" | "Medium" | "High"
  description: string
  exampleSavings: number
}

export interface RoleDeductionGuide {
  slug: string
  title: string
  shortTitle: string
  category:
    | "Tech & Software"
    | "Gig & Transit"
    | "Content & Media"
    | "Creative & Design"
    | "Services & Consulting"
  heroDescription: string
  avgSavings: number
  topWriteOffs: DeductionItem[]
  auditWatchouts: string[]
  faqs: { question: string; answer: string }[]
}

export const DEDUCTIONS_DATA: Record<string, RoleDeductionGuide> = {
  "freelance-developer": {
    slug: "freelance-developer",
    title: "Freelance Developer Tax Write-Offs & Schedule C Guide (2025)",
    shortTitle: "Freelance Developer",
    category: "Tech & Software",
    heroDescription:
      "As a freelance software engineer or contractor, your development environment, cloud hosting, AI assistant subscriptions, and home workstation are prime Schedule C write-offs.",
    avgSavings: 3850,
    topWriteOffs: [
      {
        name: "Cursor AI, Copilot, & ChatGPT Plus Subscriptions",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Monthly or annual fees for developer AI tools used to write and review code.",
        exampleSavings: 98,
      },
      {
        name: "AWS, Vercel, Supabase, & Server Infrastructure",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Cloud hosting, API tokens, domain registrations, and staging server costs.",
        exampleSavings: 450,
      },
      {
        name: "M3/M4 MacBook Pro & Dual 4K Displays",
        scheduleCLine: "Line 13 (Depreciation) or Section 179",
        deductibility: "100% (Instant Expensing)",
        auditRisk: "Low",
        description:
          "Primary hardware used for software engineering can be written off in full in year 1.",
        exampleSavings: 820,
      },
      {
        name: "Exclusive Home Office Workstation",
        scheduleCLine: "Form 8829 (Home Office Deduction)",
        deductibility:
          "Pro-rated square footage ($5/sq ft standard method up to $1,500)",
        auditRisk: "Medium",
        description:
          "Dedicated desk area used exclusively for coding for paying clients.",
        exampleSavings: 750,
      },
      {
        name: "Ergonomic Desk Chair & Standing Desk",
        scheduleCLine: "Line 18 (Office Expense)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Furniture bought specifically for your home office development setup.",
        exampleSavings: 215,
      },
      {
        name: "High-Speed Business Internet Portion",
        scheduleCLine: "Line 25 (Utilities)",
        deductibility: "Pro-rated business usage (typically 50%-75%)",
        auditRisk: "Low",
        description:
          "The percentage of home internet used for git pushes, deployment, and client video calls.",
        exampleSavings: 540,
      },
    ],
    auditWatchouts: [
      "Do not claim 100% of your home apartment rent unless you have a dedicated room used solely for business.",
      "Keep receipts for hardware purchases exceeding $2,500 for Section 179 documentation.",
    ],
    faqs: [
      {
        question: "Can I write off my mechanical keyboard and mouse?",
        answer:
          "Yes, peripheral equipment bought for software development is 100% deductible on Schedule C Line 18.",
      },
      {
        question: "Does GitHub Copilot count as a write-off?",
        answer:
          "Yes, developer software subscriptions are fully deductible operating expenses under Line 27a.",
      },
    ],
  },

  "uber-lyft-driver": {
    slug: "uber-lyft-driver",
    title: "Uber & Lyft Driver Tax Deductions & Mileage Guide (2025)",
    shortTitle: "Uber & Lyft Driver",
    category: "Gig & Transit",
    heroDescription:
      "Rideshare drivers can save thousands by claiming the 70.0¢/mile standard mileage rate for 2025 IRS filings along with passenger amenities and phone service.",
    avgSavings: 4200,
    topWriteOffs: [
      {
        name: "Standard Business Mileage (70.0¢ per mile in 2025)",
        scheduleCLine: "Line 9 (Car and Truck Expenses)",
        deductibility: "100% of tracked business miles",
        auditRisk: "Low",
        description:
          "Covers gas, vehicle depreciation, oil changes, insurance, and wear & tear during online rideshare hours.",
        exampleSavings: 3150,
      },
      {
        name: "Dashcam & Smartphone Car Mount",
        scheduleCLine: "Line 18 (Office & Business Expense)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Security dashcams and magnetic dashboard phone holders used while driving.",
        exampleSavings: 65,
      },
      {
        name: "Passenger Amenities (Water, Mints, Charging Cables)",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Complimentary items provided exclusively to increase passenger rating.",
        exampleSavings: 110,
      },
      {
        name: "Vehicle Detailing & Car Washes",
        scheduleCLine: "Line 9 or Actual Expense method",
        deductibility:
          "100% if claiming actual expense method, or separate cleaning expense",
        auditRisk: "Medium",
        description:
          "Routine cleaning necessary to maintain high rideshare vehicle standards.",
        exampleSavings: 280,
      },
      {
        name: "Cell Phone Service Plan (Driver Portion)",
        scheduleCLine: "Line 25 (Utilities)",
        deductibility: "Pro-rated business usage (usually 70%-85%)",
        auditRisk: "Low",
        description:
          "Data plan required to run Uber Partner & Lyft Driver apps while on the road.",
        exampleSavings: 595,
      },
    ],
    auditWatchouts: [
      "You cannot deduct gas receipts AND standard mileage at the same time; pick one method for the vehicle year.",
      "Always maintain a continuous mileage log app (like Stride or Driversnote) detailing dates and business trips.",
    ],
    faqs: [
      {
        question:
          "Can I write off miles driven between passenger drop-off and next pickup?",
        answer:
          "Yes, all miles driven while waiting for rides or cruising for riders in an active ride area are deductible.",
      },
    ],
  },

  "onlyfans-creator": {
    slug: "onlyfans-creator",
    title: "OnlyFans Creator Tax Deductions & Expense Guide (2025)",
    shortTitle: "OnlyFans Creator",
    category: "Content & Media",
    heroDescription:
      "Digital subscription creators on OnlyFans and Fansly can deduct video camera rigs, ring lights, staging props, and beauty/makeup expenses specifically tied to shoots.",
    avgSavings: 3200,
    topWriteOffs: [
      {
        name: "Ring Lights, Softboxes, & Lighting Rigs",
        scheduleCLine: "Line 18 (Office & Production Supplies)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Lighting equipment bought for high-quality video and photo shoots.",
        exampleSavings: 180,
      },
      {
        name: "Camera Bodies, Lenses, & Tripods",
        scheduleCLine: "Line 13 (Depreciation / Section 179)",
        deductibility: "100%",
        auditRisk: "Low",
        description: "Professional photography and 4K recording equipment.",
        exampleSavings: 680,
      },
      {
        name: "Photo/Video Shoot Props & Staging Supplies",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Themed backdrop materials, room decorations, and specialized shoot props.",
        exampleSavings: 310,
      },
      {
        name: "Pro-Rated Photoshoot Hair, Makeup, & Costumes",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "Pro-rated shoot specific",
        auditRisk: "Medium",
        description:
          "Wardrobe and cosmetics used exclusively during professional media shoots.",
        exampleSavings: 420,
      },
      {
        name: "OnlyFans Platform Fee Deductions (20% Platform Cut)",
        scheduleCLine: "Line 10 (Commissions and Fees)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "The 20% processing cut retained by OnlyFans before payout.",
        exampleSavings: 1200,
      },
    ],
    auditWatchouts: [
      "Everyday casual clothing suitable for general wear outside shoots cannot be deducted.",
      "Ensure you keep receipts for all equipment and software tools.",
    ],
    faqs: [
      {
        question: "Is OnlyFans income reported on Form 1099-NEC or 1099-K?",
        answer: "OnlyFans issues 1099-NEC forms for creator payouts over $600.",
      },
    ],
  },

  "youtube-creator": {
    slug: "youtube-creator",
    title: "YouTube Creator & Video Editor Tax Write-Offs (2025)",
    shortTitle: "YouTube Creator",
    category: "Content & Media",
    heroDescription:
      "YouTubers and video editors can write off microphone hardware, video editing software subscriptions, thumbnails, sound libraries, and filming set equipment.",
    avgSavings: 3600,
    topWriteOffs: [
      {
        name: "Shure SM7B, Audio Interfaces, & Boom Arms",
        scheduleCLine: "Line 18 (Supplies)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Audio recording equipment dedicated to voiceovers and commentary.",
        exampleSavings: 240,
      },
      {
        name: "Adobe Premiere Pro, Final Cut, & Epidemic Sound",
        scheduleCLine: "Line 27a (Software Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Video editing software and royalty-free music library licenses.",
        exampleSavings: 190,
      },
      {
        name: "Freelance Thumbnail Designers & Video Editors",
        scheduleCLine: "Line 11 (Contract Labor)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Payments made to external contractors who design graphics or edit video files.",
        exampleSavings: 950,
      },
      {
        name: "Filming Location Rentals & Studio Space",
        scheduleCLine: "Line 20b (Rent of Business Property)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "PeerSpace rentals or studio booking fees for video shoots.",
        exampleSavings: 420,
      },
    ],
    auditWatchouts: [
      "If you pay contractor editors over $600/year, you must issue them a 1099-NEC form by January 31.",
    ],
    faqs: [
      {
        question: "Can I write off games or products I review in my videos?",
        answer:
          "Yes, products purchased specifically to review on video are legitimate cost of content expenses.",
      },
    ],
  },

  "freelance-designer": {
    slug: "freelance-designer",
    title: "Freelance Designer & Illustrator Tax Write-Offs Guide (2025)",
    shortTitle: "Freelance Designer",
    category: "Creative & Design",
    heroDescription:
      "UI/UX designers, brand strategists, and graphic illustrators can deduct Figma subscriptions, Adobe Creative Cloud, font licenses, and color calibrators.",
    avgSavings: 2950,
    topWriteOffs: [
      {
        name: "Figma Professional & Adobe Creative Cloud",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Primary design tool subscriptions used for client deliverables.",
        exampleSavings: 229,
      },
      {
        name: "Font Licenses, Stock Vector, & Icon Libraries",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Paid typography licenses, Envato Elements, and asset purchases.",
        exampleSavings: 160,
      },
      {
        name: "iPad Pro, Apple Pencil, & Drawing Tablets",
        scheduleCLine: "Line 18 or Section 179",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Hardware used for digital illustration and UI wireframing.",
        exampleSavings: 380,
      },
    ],
    auditWatchouts: [
      "Keep digital receipts for font licenses and commercial asset purchases.",
    ],
    faqs: [
      {
        question: "Can I write off stock photography subscriptions?",
        answer:
          "Yes, stock asset subscriptions used in client work are 100% deductible.",
      },
    ],
  },

  "doordash-driver": {
    slug: "doordash-driver",
    title: "DoorDash Dasher & Food Courier Tax Write-Offs Guide (2025)",
    shortTitle: "DoorDash Courier",
    category: "Gig & Transit",
    heroDescription:
      "Dashers, UberEats, and Instacart couriers can deduct business mileage (70.0¢/mile in 2025), thermal insulated bags, smartphone mounts, and mobile data usage.",
    avgSavings: 2800,
    topWriteOffs: [
      {
        name: "Delivery Mileage (70.0¢ per mile in 2025)",
        scheduleCLine: "Line 9 (Car Expenses)",
        deductibility: "100% of delivery miles",
        auditRisk: "Low",
        description:
          "All miles driven while waiting for orders, picking up food, and delivering to customers.",
        exampleSavings: 2200,
      },
      {
        name: "Thermal Insulated Food Delivery Bags & Drink Holders",
        scheduleCLine: "Line 18 (Supplies)",
        deductibility: "100%",
        auditRisk: "Low",
        description: "Hot bags bought to keep food warm during transit.",
        exampleSavings: 45,
      },
    ],
    auditWatchouts: [
      "Log your mileage continuously during delivery shifts using a smartphone tracker.",
    ],
    faqs: [
      {
        question: "Can I deduct my smartphone bill as a Dasher?",
        answer:
          "Yes, deduct the percentage of your mobile data plan used while running delivery apps.",
      },
    ],
  },

  "airbnb-host": {
    slug: "airbnb-host",
    title: "Airbnb & Short-Term Rental Host Tax Deductions (2025)",
    shortTitle: "Airbnb Host",
    category: "Services & Consulting",
    heroDescription:
      "Short-term rental hosts can deduct professional cleaning services, guest linens, smart locks, toiletries, occupancy repairs, and platform service fees.",
    avgSavings: 5400,
    topWriteOffs: [
      {
        name: "Professional Turnover Cleaning & Laundry",
        scheduleCLine: "Line 11 (Contract Labor)",
        deductibility: "100%",
        auditRisk: "Low",
        description: "Cleaning service fees paid between guest stays.",
        exampleSavings: 1800,
      },
      {
        name: "Guest Linens, Towels, & Toiletries",
        scheduleCLine: "Line 22 (Supplies)",
        deductibility: "100%",
        auditRisk: "Low",
        description: "Soaps, shampoo, fresh sheets, and guest amenities.",
        exampleSavings: 620,
      },
    ],
    auditWatchouts: [
      "Keep separate business and personal expense receipts for property maintenance.",
    ],
    faqs: [
      {
        question: "Are Airbnb 3% host service fees deductible?",
        answer:
          "Yes, platform commissions are 100% deductible on Schedule C Line 10.",
      },
    ],
  },

  consultant: {
    slug: "consultant",
    title: "Independent Consultant & Business Advisor Deductions (2025)",
    shortTitle: "Business Consultant",
    category: "Services & Consulting",
    heroDescription:
      "Solo advisors and management consultants can deduct client dinners (50%), coworking desk memberships, domain hosting, and professional development courses.",
    avgSavings: 3100,
    topWriteOffs: [
      {
        name: "Client Business Dinners & Meetings",
        scheduleCLine: "Line 24b (Meals)",
        deductibility: "50%",
        auditRisk: "Low",
        description:
          "Meals held with clients where business strategy is discussed.",
        exampleSavings: 340,
      },
      {
        name: "WeWork or Coworking Space Desk Membership",
        scheduleCLine: "Line 20b (Rent)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Shared office desk rentals used for business client meetings.",
        exampleSavings: 850,
      },
    ],
    auditWatchouts: [
      "Note the names of clients and business topics on meal receipts.",
    ],
    faqs: [
      {
        question: "Can I deduct client coffee meetings?",
        answer:
          "Yes, business meals with clients are 50% deductible with proper receipts.",
      },
    ],
  },

  photographer: {
    slug: "photographer",
    title: "Photographer & Videographer Tax Deductions Guide (2025)",
    shortTitle: "Photographer",
    category: "Creative & Design",
    heroDescription:
      "Wedding, portrait, and commercial photographers can deduct camera bodies, prime lenses, memory cards, studio booking rentals, and Lightroom subscriptions.",
    avgSavings: 3900,
    topWriteOffs: [
      {
        name: "Camera Lenses, Flash Units, & Tripods",
        scheduleCLine: "Line 13 (Depreciation) or Line 18",
        deductibility: "100%",
        auditRisk: "Low",
        description: "Photography glass and flash lighting hardware.",
        exampleSavings: 920,
      },
      {
        name: "Adobe Lightroom & Photoshop Photography Plan",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description: "Editing software used to process RAW client images.",
        exampleSavings: 130,
      },
    ],
    auditWatchouts: [
      "Itemize high-value lenses exceeding $2,500 under Section 179.",
    ],
    faqs: [
      {
        question: "Are hard drives and memory cards deductible?",
        answer:
          "Yes, backup storage media bought for photo shoots are 100% deductible.",
      },
    ],
  },

  copywriter: {
    slug: "copywriter",
    title: "Freelance Copywriter & Content Strategist Write-Offs (2025)",
    shortTitle: "Freelance Copywriter",
    category: "Services & Consulting",
    heroDescription:
      "Copywriters, ghostwriters, and SEO strategists can write off Grammarly Premium, domain hosting, research books, home workstation desks, and client coffee meetings.",
    avgSavings: 2400,
    topWriteOffs: [
      {
        name: "Grammarly Premium & Copywriting Software",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description: "AI grammar checkers and research tool subscriptions.",
        exampleSavings: 140,
      },
      {
        name: "Client Research Books & Industry Publications",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Books and subscriptions purchased to research client niches.",
        exampleSavings: 95,
      },
    ],
    auditWatchouts: ["Keep digital invoices for software subscriptions."],
    faqs: [
      {
        question: "Can I write off my home website hosting?",
        answer: "Yes, hosting for your portfolio site is 100% deductible.",
      },
    ],
  },

  "fitness-trainer": {
    slug: "fitness-trainer",
    title: "Personal Fitness Trainer & Athletic Coach Write-Offs (2025)",
    shortTitle: "Fitness Trainer",
    category: "Services & Consulting",
    heroDescription:
      "Independent fitness trainers and athletic coaches can deduct certification renewal fees, liability insurance, mobile gym gear, Spotify subscriptions, and client booking apps.",
    avgSavings: 2700,
    topWriteOffs: [
      {
        name: "NASM / ACE Certification Renewal & Continuing Ed",
        scheduleCLine: "Line 27a (Other Expenses)",
        deductibility: "100%",
        auditRisk: "Low",
        description:
          "Mandatory training certifications to maintain professional status.",
        exampleSavings: 210,
      },
      {
        name: "Trainer Liability Insurance Policy",
        scheduleCLine: "Line 15 (Insurance)",
        deductibility: "100%",
        auditRisk: "Low",
        description: "Professional liability coverage for training clients.",
        exampleSavings: 320,
      },
    ],
    auditWatchouts: [
      "General personal workout clothes are non-deductible unless branded exclusively with your company logo.",
    ],
    faqs: [
      {
        question: "Can I write off gym membership fees?",
        answer:
          "Only if you pay facility access fees specifically to train paying clients there.",
      },
    ],
  },

  "streamer-gaming": {
    slug: "streamer-gaming",
    title: "Twitch & Gaming Streamer Tax Write-Offs Guide (2025)",
    shortTitle: "Gaming Streamer",
    category: "Content & Media",
    heroDescription:
      "Gaming streamers and esports creators can deduct capture cards, Stream Decks, custom PC GPU hardware, broadcast microphones, and games reviewed live on stream.",
    avgSavings: 3500,
    topWriteOffs: [
      {
        name: "Elgato Capture Cards & Stream Deck",
        scheduleCLine: "Line 18 (Supplies)",
        deductibility: "100%",
        auditRisk: "Low",
        description: "Broadcast switching and game capture hardware.",
        exampleSavings: 180,
      },
      {
        name: "Gaming GPU, Processor, & Dual PC Setup",
        scheduleCLine: "Line 13 or Section 179",
        deductibility: "100% if used exclusively for streaming",
        auditRisk: "Low",
        description:
          "High-performance PC hardware used to broadcast games live.",
        exampleSavings: 850,
      },
    ],
    auditWatchouts: [
      "Keep clear records of games purchased and broadcast live on Twitch or YouTube.",
    ],
    faqs: [
      {
        question: "Can I write off video games I stream?",
        answer:
          "Yes, games bought to review or broadcast live for income generation are deductible content expenses.",
      },
    ],
  },
}
