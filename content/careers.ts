export const careersContent = {
  metadata: {
    title: "Careers | Harbhajan's Catering Patiala",
    description: "Join the Harbhajan's Catering family. We are always looking for passionate chefs, event coordinators, and hospitality staff in Patiala.",
  },
  hero: {
    headline: "Join Our Kitchen Family",
    imageAlt: "Harbhajan's catering staff smiling together in uniform",
  },
  culture: {
    body: "At Harbhajan's, we believe that great food comes from happy people. We cultivate an environment of respect, continuous learning, and teamwork. When you work with us, you aren't just an employee—you are a vital part of a tradition that brings joy to thousands of people every year.",
  },
  benefits: {
    title: "Why Work With Us",
    items: [
      {
        title: "Competitive Pay",
        description: "We offer industry-leading salaries and event-based performance bonuses.",
        icon: "Banknote",
      },
      {
        title: "Training & Growth",
        description: "Learn traditional culinary techniques and modern hospitality management directly from industry veterans.",
        icon: "TrendingUp",
      },
      {
        title: "Meals Provided",
        description: "Enjoy our authentic Punjabi meals during your shifts. A well-fed team is a happy team.",
        icon: "Utensils",
      },
      {
        title: "Family Environment",
        description: "We look out for our own, offering supportive scheduling and a culture of mutual respect.",
        icon: "Heart",
      },
    ],
  },
  testimonial: {
    quote: "I started here as an assistant cook ten years ago. Today, I lead the Tandoor division. The family supported my growth every step of the way.",
    author: "Rajinder Singh, Sous Chef",
  },
  openings: {
    title: "Current Openings",
    filters: ["All", "Kitchen", "Front of House", "Admin"],
    jobs: [
      {
        title: "Tandoor Chef (Commis I)",
        type: "Full-time",
        department: "Kitchen",
        description: "Seeking an experienced chef specialized in traditional clay oven baking and tandoori marinades.",
      },
      {
        title: "Event Service Captain",
        type: "Full-time",
        department: "Front of House",
        description: "Lead a team of waitstaff during high-profile weddings. Strong leadership and communication skills required.",
      },
      {
        title: "Client Relations Assistant",
        type: "Part-time",
        department: "Admin",
        description: "Help coordinate tasting sessions, manage client inquiries, and assist our event planners.",
      },
    ],
  },
  process: {
    title: "How to Apply",
    steps: [
      { step: "1", title: "Submit Application", description: "Fill out the form below with your details and resume." },
      { step: "2", title: "Initial Interview", description: "A brief phone call to discuss your experience and goals." },
      { step: "3", title: "Kitchen/Floor Trial", description: "A paid one-day trial to see how you mesh with the team." },
    ],
  },
  applicationForm: {
    title: "General Application",
    fields: {
      name: { label: "Full Name", placeholder: "e.g. Jasmeet Kaur" },
      email: { label: "Email Address", placeholder: "e.g. jasmeet@example.com" },
      phone: { label: "Phone Number", placeholder: "+91 90000 00000" },
      role: {
        label: "Role of Interest",
        placeholder: "Select a role",
        options: [
          { value: "kitchen", label: "Kitchen / Culinary" },
          { value: "service", label: "Service / Front of House" },
          { value: "management", label: "Management / Admin" },
        ],
      },
      resume: { label: "Upload Resume (PDF)", placeholder: "Choose file" },
      message: { label: "Why Harbhajan's?", placeholder: "Tell us a bit about yourself and why you want to join our team..." },
    },
    submitButton: "Submit Application",
  },
  eoe: "Harbhajan's Catering is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.",
};
