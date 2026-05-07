export const contactContent = {
  hero: {
    headline: "Initiate a Commission.",
    subheadline: "We accept a strictly limited number of engagements annually to ensure uncompromising dedication to our clients. Please provide initial details regarding your celebration.",
  },
  form: {
    personalDetails: {
      heading: "Personal Details",
      fields: [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "email", label: "Email Address", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel" },
      ]
    },
    eventDetails: {
      heading: "Event Parameters",
      fields: [
        { name: "eventDate", label: "Anticipated Date or Season", type: "text" },
        { name: "destination", label: "Desired Destination(s)", type: "text" },
        { name: "guestCount", label: "Estimated Guest Count", type: "text" },
        { name: "budget", label: "Anticipated Event Investment (Excluding Planning Fees)", type: "select", options: ["$250k - $500k", "$500k - $1M", "$1M+"] },
      ]
    },
    vision: {
      heading: "The Vision",
      fields: [
        { name: "details", label: "Please share a brief overview of your vision and any specific requirements.", type: "textarea" },
      ]
    },
    submitLabel: "Submit Inquiry"
  },
  directContact: {
    heading: "Direct Correspondence",
    description: "For press inquiries, brand partnerships, or immediate assistance, please contact our management team directly.",
    email: "inquiries@guideevents.com",
    phone: "+1 (800) 555-0199"
  },
  officeLocations: {
    heading: "Global Presence",
    locations: [
      { city: "New York", description: "Global Headquarters" },
      { city: "Milan", description: "European Operations" },
      { city: "Dubai", description: "MENA & Asia Operations" }
    ]
  }
};
