export const pricingContent = {
  metadata: {
    title: "Pricing & Packages | Armaan Driving School",
    description: "Transparent pricing for driving lessons in Chandigarh. Choose from beginner courses, refresher sessions, and dedicated RTO test prep packages.",
  },
  hero: {
    headline: "Transparent Pricing for Your Journey to the Road",
    subheadline: "No hidden fees. Just expert instruction designed to make you a safe, confident driver."
  },
  philosophy: {
    headline: "An Investment in Safety",
    body: "Quality instruction is an investment that pays dividends over a lifetime of safe driving. We price our packages competitively while ensuring we can maintain top-tier vehicles and retain the most patient, experienced instructors in Chandigarh."
  },
  tiers: [
    {
      id: "beginner",
      name: "The Beginner Course",
      price: "₹4,500",
      duration: "20 Days",
      description: "Our comprehensive zero-to-hero package, perfect for complete novices.",
      features: [
        "15 Days Practical Driving (45 mins/day)",
        "5 Days Theory & Simulator Basics",
        "Door-to-door pick-up/drop-off",
        "Dual-control vehicle",
        "Full mock RTO test"
      ],
      isPopular: true,
      ctaLabel: "Book Beginner Package"
    },
    {
      id: "refresher",
      name: "The Refresher",
      price: "₹2,500",
      duration: "10 Days",
      description: "For licensed drivers who haven't driven recently and need a confidence boost.",
      features: [
        "10 Days Practical Driving",
        "Focus on heavy traffic & parking",
        "Defensive driving techniques",
        "Door-to-door pick-up/drop-off",
        "Instructor feedback sessions"
      ],
      isPopular: false,
      ctaLabel: "Book Refresher Package"
    },
    {
      id: "test-prep",
      name: "The Test Prep",
      price: "₹1,500",
      duration: "5 Days",
      description: "Intense, focused practice designed strictly to pass the RTO examination.",
      features: [
        "Track practice (H & 8 shapes)",
        "Reversing and parking drills",
        "Vehicle familiarity for test day",
        "RTO procedure briefing",
        "2 Full Mock Tests"
      ],
      isPopular: false,
      ctaLabel: "Book Test Prep"
    }
  ],
  customPackages: {
    headline: "Need Something Specific?",
    body: "We offer hourly rates and customized packages for specific needs, such as highway-only driving or specific maneuver practice.",
    cta: { label: "Contact Us for Custom Pricing", href: "/contact" }
  },
  inclusions: {
    headline: "Included in Every Package",
    list: [
      "Training in fully air-conditioned, modern vehicles",
      "Instruction from a certified, government-registered professional",
      "Strict adherence to our 'No-Yell', anxiety-free policy",
      "Progress tracking and constructive feedback",
      "Pick-up and drop-off within 5km of Sector 47"
    ]
  },
  addons: {
    headline: "Add-ons & Extras",
    items: [
      { name: "Extra Mock Test", price: "₹300/session" },
      { name: "Highway Specific Training", price: "₹500/hour" },
      { name: "RTO File Assistance", price: "Contact for details" }
    ]
  },
  paymentMethods: {
    headline: "Payment Methods Accepted",
    methods: ["UPI (Google Pay, PhonePe, Paytm)", "Credit/Debit Cards", "Cash", "Net Banking"]
  },
  policies: {
    headline: "Booking & Cancellation Policies",
    points: [
      "A 50% deposit is required to secure your booking.",
      "Cancellations must be made at least 24 hours in advance to avoid a penalty.",
      "Missed lessons without prior notice will be counted towards your package.",
      "Refunds are processed within 5-7 business days."
    ]
  },
  corporate: {
    headline: "Corporate & Group Training",
    body: "Ensure your employees are safe on the road. We offer tailored road safety workshops and fleet driver assessments for local businesses.",
    cta: { label: "Inquire About Corporate Rates", href: "/contact" }
  },
  testimonial: {
    quote: "I thought about going with a cheaper, unregistered guy in my sector, but after seeing the professionalism, the condition of the cars, and the patience of the instructor at Armaan, it was worth every single penny.",
    author: "Sanjay D.",
    role: "Beginner Course Graduate"
  },
  faqSnippet: {
    headline: "Pricing FAQs",
    questions: [
      { q: "Can I pay in installments?", a: "Yes, for the 20-day beginner course, you can pay 50% upfront and the remaining 50% after 10 days." },
      { q: "Are there any hidden fees for fuel or maintenance?", a: "No, all fuel, vehicle wear-and-tear, and instructor time are fully included in the package price." }
    ],
    cta: { label: "View All FAQs", href: "/faq" }
  },
  process: {
    headline: "How It Works",
    steps: [
      { step: "01", title: "Choose Your Plan", description: "Select the package that best fits your experience level." },
      { step: "02", title: "Contact Us", description: "Reach out via WhatsApp or phone to confirm availability and schedule." },
      { step: "03", title: "Start Driving", description: "Your instructor will pick you up, and your journey begins." }
    ]
  },
  finalCta: {
    headline: "Ready to get started?",
    subheadline: "Secure your spot today. Our instructors' schedules fill up fast.",
    primaryCta: { label: "Book Now via WhatsApp", href: "https://wa.me/1234567890" }
  }
};
