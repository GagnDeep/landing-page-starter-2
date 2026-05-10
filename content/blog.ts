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
      authorRole: "Lead Instructor",
      category: "Beginner Tips",
      excerpt: "Stalling at a red light is a beginner's worst nightmare. Here is a step-by-step breakdown of how to find the biting point every single time.",
      bodyHtml: `
        <h2>Understanding the Fundamentals</h2>
        <p>When it comes to mastering vehicle control, patience and repetition are your best friends. Many beginners struggle because they try to rush the learning process, attempting to synthesize multiple actions (steering, clutching, checking mirrors) before they have built muscle memory for any single one of them.</p>
        <blockquote><p>"The road doesn't rush you; your anxiety does. Take a breath, find the bite point, and let the car do the work."</p></blockquote>
        <h3>Step-by-Step Approach</h3>
        <p>At Armaan Driving School, our <strong>Calm, Methodical, Safe</strong> philosophy dictates that we break down complex maneuvers into their smallest constituent parts.</p>
        <ul>
          <li><strong>Step 1:</strong> Familiarize yourself with the cockpit drill.</li>
          <li><strong>Step 2:</strong> Master the clutch bite point in a stationary position.</li>
          <li><strong>Step 3:</strong> Begin applying gentle throttle.</li>
        </ul>
        <p>This structured approach is what allows our students to confidently navigate even the busiest roundabouts in Chandigarh without stalling or panicking.</p>
      `
    },
    {
      title: "Navigating Chandigarh Roundabouts: Right of Way Explained",
      slug: "chandigarh-roundabouts",
      date: "September 28, 2023",
      author: "Armaan Team",
      authorRole: "Editorial Team",
      category: "Local Rules",
      excerpt: "Chandigarh is famous for its roundabouts, but they can be intimidating. Learn exactly who has the right of way and how to exit safely.",
      bodyHtml: `
        <h2>The Roundabout Rule of Thumb</h2>
        <p>Chandigarh's traffic flow relies heavily on roundabouts. The golden rule is simple but often forgotten: vehicles already inside the roundabout have the right of way.</p>
        <h3>Approaching the Roundabout</h3>
        <p>Always slow down as you approach. Shift to a lower gear, usually second, to maintain control while being ready to stop if necessary. Do not assume entering vehicles will yield to you; defensive driving is key.</p>
        <ul>
          <li><strong>Left Turn:</strong> Stay in the left lane, indicate left.</li>
          <li><strong>Straight Ahead:</strong> Stay in the middle or left lane, indicate left right before your exit.</li>
          <li><strong>Right Turn/U-Turn:</strong> Stay in the right lane, indicate right upon entering, switch to left indicator before your exit.</li>
        </ul>
      `
    },
    {
      title: "5 Pre-Drive Checks You Should Do Every Morning",
      slug: "pre-drive-checks",
      date: "September 15, 2023",
      author: "Armaan Team",
      authorRole: "Maintenance Experts",
      category: "Car Maintenance",
      excerpt: "A safe drive starts before you even turn the key. These five quick checks take less than two minutes and can prevent major headaches.",
      bodyHtml: `
        <h2>Safety Starts in the Driveway</h2>
        <p>Before you even turn the ignition, taking 60 seconds to inspect your vehicle can save you from breakdowns or accidents.</p>
        <h3>The 5-Point Checklist</h3>
        <ol>
          <li><strong>Tire Pressure and Condition:</strong> Look for visible sagging or damage.</li>
          <li><strong>Fluid Leaks:</strong> Check the ground under the car for fresh oil or coolant spots.</li>
          <li><strong>Lights and Indicators:</strong> Ensure headlights, taillights, and turn signals are working.</li>
          <li><strong>Mirrors and Windows:</strong> Clean any dirt or debris that obstructs visibility.</li>
          <li><strong>Dashboard Warnings:</strong> When you turn the key to the 'ON' position (before starting the engine), ensure all warning lights illuminate momentarily, then turn off once the engine starts.</li>
        </ol>
      `
    }
  ],

  postLayoutStrings: {
    backToBlog: "← Back to all articles",
    writtenBy: "Written by",
    shareThis: "Share this article:",
    relatedPosts: "You might also like",
    authorBioPrefix: "About the author:",
    featuredLabel: "Featured",
    readArticleBtn: "Read Article",
    inlineCta: {
      headline: "Struggling with these techniques?",
      body: "Our expert instructors can help you master them in just a few lessons.",
      btnLabel: "Book a Refresher Lesson",
      btnHref: "/contact"
    }
  }
};
