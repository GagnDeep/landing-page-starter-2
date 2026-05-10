export const faqContent = {
  metadata: {
    title: "Frequently Asked Questions | Armaan Driving School",
    description: "Get answers to common questions about driving lessons, RTO test procedures, pricing, and our training methodology in Chandigarh.",
  },
  hero: {
    headline: "Frequently Asked Questions",
    subheadline: "Everything you need to know about learning to drive with Armaan Driving School."
  },
  searchPlaceholder: "Search for a question (e.g., 'license', 'fees')...",
  categories: [
    {
      id: "licensing",
      title: "Getting Started & Licensing",
      faqs: [
        {
          q: "Do I need a learner's license before joining?",
          a: "Yes, you must have a valid learner's license before you can get behind the wheel. However, if you don't have one yet, contact us, and we can guide you through the online application process for the Chandigarh RTO."
        },
        {
          q: "What documents are required to start?",
          a: "You will need a copy of your valid Learner's License, two passport-sized photographs, and a primary ID proof (Aadhar Card/Passport)."
        },
        {
          q: "At what age can I start learning?",
          a: "In India, you must be at least 18 years old to obtain a learner's license for a motor car (Light Motor Vehicle). You can begin training once you have that license."
        }
      ]
    },
    {
      id: "process",
      title: "The Training Process",
      faqs: [
        {
          q: "How long is each practical lesson?",
          a: "Standard lessons are 45 minutes of dedicated driving time. We find this is the optimal duration to maximize learning without causing cognitive fatigue for beginners."
        },
        {
          q: "Do you offer pick-up and drop-off services?",
          a: "Yes, we provide complimentary door-to-door pick-up and drop-off within a 5km radius of Sector 47. For locations slightly further away, please inquire regarding feasibility."
        },
        {
          q: "Will I have the same instructor every day?",
          a: "Yes, we believe consistency is key to learning. You will be assigned a dedicated instructor for the duration of your course to ensure they understand your specific learning curve and progress."
        },
        {
          q: "What if I am a very nervous driver?",
          a: "You are our specialty. Our methodology is specifically designed for anxious learners. We start in completely empty areas, use dual-control vehicles for absolute safety, and maintain a strict 'No-Yell' policy. You will never be rushed."
        }
      ]
    },
    {
      id: "vehicles",
      title: "Vehicles & Safety",
      faqs: [
        {
          q: "What kind of cars do you use for training?",
          a: "We maintain a fleet of modern, air-conditioned hatchbacks and compact sedans (e.g., Maruti Swift, Hyundai Grand i10). These are ideal for learning as they mirror the cars most students will drive after passing."
        },
        {
          q: "Are your cars dual-controlled?",
          a: "Absolutely. Every training vehicle is equipped with government-certified dual controls (clutch and brake on the instructor's side), allowing the instructor to take over instantly if needed."
        },
        {
          q: "Am I liable if there is an accident during a lesson?",
          a: "No. Because our instructors have dual controls, they are ultimately responsible for the safety of the vehicle. Our fleet is also comprehensively insured for training purposes."
        }
      ]
    },
    {
      id: "pricing",
      title: "Pricing & Payments",
      faqs: [
        {
          q: "Can I pay in installments?",
          a: "For our 15 and 20-day packages, yes. A 50% deposit is required to start, and the remaining 50% is due halfway through the course."
        },
        {
          q: "Are there any hidden fees?",
          a: "No. The price quoted includes fuel, instructor time, vehicle wear-and-tear, and pick-up/drop-off. (Note: RTO fees for the actual license application are separate and paid directly to the government)."
        },
        {
          q: "What is your cancellation policy?",
          a: "We require 24 hours notice to cancel or reschedule a lesson. Cancellations made with less than 24 hours notice will be counted as a completed lesson."
        }
      ]
    },
    {
      id: "rto-test",
      title: "Post-Training & The RTO Test",
      faqs: [
        {
          q: "Will you help me pass the RTO driving test?",
          a: "Yes. Our courses include specific mock test practice that simulates the RTO track (H and 8 shapes). While we cannot guarantee a pass (as the RTO examiner makes the final call), we ensure you are fully prepared."
        },
        {
          q: "Do I take the test in your car?",
          a: "Yes, you will take the RTO test in the exact vehicle you trained in, ensuring you are comfortable with the clutch bite point and steering feel."
        }
      ]
    }
  ],
  unansweredBlock: {
    headline: "Still have questions?",
    body: "If you couldn't find the answer you were looking for, our team is ready to help.",
    phone: "+91 98765 43210",
    email: "info@armaandriving.com"
  },
  questionForm: {
    headline: "Ask us directly",
    fields: {
      name: "Your Name",
      email: "Email Address",
      question: "What's your question?",
      submit: "Send Message"
    }
  },
  finalCta: {
    headline: "Clear on the details?",
    subheadline: "Let's get you on the road.",
    primaryCta: { label: "Book Your Course", href: "/pricing" }
  }
};
