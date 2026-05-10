export const pricingContent = {
  metadata: {
    title: "Pricing & Packages | Capital Driving School",
    description: "Transparent pricing for driving lessons in Chandigarh. Choose from beginner crash courses, standard 15-day packages, or hourly refresher sessions.",
  },
  hero: {
    heading: "Invest in Your Driving Confidence",
    subheading: "Clear, transparent pricing with no hidden fees. Choose the package that fits your experience level and schedule.",
  },
  packages: [
    {
      id: "crash-course",
      name: "Beginner Crash Course",
      duration: "7 Days",
      price: "₹3,500",
      description: "Intensive, fast-paced training for quick learners who need to grasp the basics rapidly.",
      features: [
        "7 hours of practical driving",
        "Basic vehicle controls",
        "Quiet road navigation",
        "Doorstep pickup & drop-off",
      ],
      ctaLabel: "Book Crash Course",
    },
    {
      id: "standard-course",
      name: "Standard 15-Day Course",
      duration: "15 Days",
      price: "₹6,000",
      description: "Our most popular package. A comprehensive, patiently paced course designed for complete beginners.",
      isPopular: true,
      features: [
        "15 hours of practical driving",
        "City traffic navigation",
        "Advanced parking maneuvers",
        "RTO mock test included",
        "Doorstep pickup & drop-off",
        "Full RTO paperwork assistance",
      ],
      ctaLabel: "Book Standard Course",
    },
    {
      id: "refresher",
      name: "Refresher Sessions",
      duration: "Hourly",
      price: "₹500 / hr",
      description: "Already have a license but lack confidence? Book hourly sessions to polish your skills.",
      features: [
        "Customized lesson plan",
        "Focus on specific weaknesses (e.g., parking, highways)",
        "Use your own car or ours",
        "Flexible scheduling",
      ],
      ctaLabel: "Book a Session",
    },
  ],
  inclusions: {
    heading: "Included in Every Package",
    items: [
      "Patient, certified instructor",
      "Modern, dual-controlled vehicle",
      "Flexible 24/7 scheduling options",
      "1-on-1 personalized training",
    ],
  },
  addOns: {
    heading: "Add-on Services",
    services: [
      { name: "Extra RTO Mock Test", price: "₹800" },
      { name: "Highway Driving Special (2 hrs)", price: "₹1,200" },
      { name: "Night Driving Familiarization (2 hrs)", price: "₹1,200" },
    ],
  },
  paymentMethods: {
    heading: "Accepted Payment Methods",
    methods: ["UPI (GPay, PhonePe, Paytm)", "Credit/Debit Cards", "Cash (at the office)"],
  },
  faq: {
    heading: "Pricing & Payment FAQs",
    questions: [
      {
        question: "Do you offer installment plans?",
        answer: "Yes, for the Standard 15-Day course, you can pay 50% upfront and the remaining 50% halfway through the course.",
      },
      {
        question: "Are RTO fees included in the package price?",
        answer: "No, the official government RTO fees for the learner's and permanent licenses are separate and must be paid directly to the RTO. We only provide the paperwork assistance as part of the package.",
      },
      {
        question: "What is your refund policy?",
        answer: "We offer a full refund if you cancel before your first lesson. If you decide to stop mid-course, we will refund the prorated amount for the remaining un-taken hours.",
      },
    ],
  },
  guarantee: {
    heading: "Our Promise to You",
    description: "We are committed to your success. If you don't feel confident after completing the Standard Course, we offer discounted refresher sessions until you are ready.",
  },
  contactTeaser: {
    heading: "Need help choosing the right package?",
    description: "Give us a call or send a WhatsApp message, and we'll help assess your needs.",
    ctaLabel: "Contact Us",
  },
};
