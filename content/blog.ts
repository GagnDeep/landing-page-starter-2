export const blogContent = {
  metadata: {
    title: "Driving Advice & News | Armaan Driving School Blog",
    description: "Expert driving tips, road safety advice, and local RTO updates from the instructors at Chandigarh's trusted Armaan Driving School.",
  },
  hero: {
    headline: "The Armaan Driving Journal",
    subheadline: "Driving Tips, Safety Advice, and Local Chandigarh Traffic Updates."
  },
  categories: [
    { label: "All", slug: "all" },
    { label: "Beginner Tips", slug: "beginner-tips" },
    { label: "Local Rules (Chandigarh)", slug: "local-rules" },
    { label: "Car Maintenance", slug: "car-maintenance" },
    { label: "Instructor Advice", slug: "instructor-advice" }
  ],
  newsletter: {
    headline: "Get driving tips in your inbox",
    subheadline: "Join our community for weekly advice on becoming a safer, smarter driver.",
    buttonLabel: "Subscribe",
    placeholder: "Enter your email address"
  },
  featuredCategory: {
    beginnerGuides: {
      headline: "Essential Guides for Beginners",
      description: "Must-read articles if you are just starting your driving journey."
    },
    localUpdates: {
      headline: "Chandigarh Traffic & RTO Updates",
      description: "Stay informed about local road closures, new traffic rules, and RTO procedures in the Tricity area."
    }
  },
  instructorSeries: {
    headline: "Straight from the Instructor's Seat",
    description: "Insights, anecdotes, and pro-tips written directly by our lead trainers."
  },
  promoBanner: {
    headline: "Ready to put these tips into practice?",
    subheadline: "Experience the difference of a professional, patient instructor.",
    cta: { label: "View Our Packages", href: "/pricing" }
  },
  studentStories: {
    headline: "Student Spotlights",
    description: "Real stories of overcoming anxiety and achieving independence on the road."
  },
  finalCta: {
    headline: "Don't just read about it. Drive it.",
    primaryCta: { label: "Book a Lesson", href: "/contact" }
  },

  // NOTE: In Phase 6 (Implementation), this mock data will be moved to an MDX or CMS structure.
  // For Phase 2, we define the structure of a post for the UI to consume.
  mockPosts: [
    {
      title: "How to Master Clutch Control Without Stalling",
      slug: "master-clutch-control",
      date: "October 12, 2023",
      author: "Rajesh Kumar",
      category: "Beginner Tips",
      excerpt: "Stalling at a red light is a beginner's worst nightmare. Here is a step-by-step breakdown of how to find the biting point every single time."
    },
    {
      title: "Navigating Chandigarh Roundabouts: Right of Way Explained",
      slug: "chandigarh-roundabouts",
      date: "September 28, 2023",
      author: "Armaan Team",
      category: "Local Rules",
      excerpt: "Chandigarh is famous for its roundabouts, but they can be intimidating. Learn exactly who has the right of way and how to exit safely."
    },
    {
      title: "5 Pre-Drive Checks You Should Do Every Morning",
      slug: "pre-drive-checks",
      date: "September 15, 2023",
      author: "Armaan Team",
      category: "Car Maintenance",
      excerpt: "A safe drive starts before you even turn the key. These five quick checks take less than two minutes and can prevent major headaches."
    }
  ],

  postLayoutStrings: {
    backToBlog: "← Back to all articles",
    writtenBy: "Written by",
    shareThis: "Share this article:",
    relatedPosts: "You might also like",
    authorBioPrefix: "About the author:"
  }
};
