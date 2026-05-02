import { SEO, CTA, GlobalHeader, GlobalFooter } from "./types"

export const seo: SEO = {
  title: "Villa Hair Sense | Premium Salon in Chandigarh",
  description:
    "Experience world-class hair transformations at Villa Hair Sense, a luxury stylist-led salon in Chandigarh's Sector 9, specializing in bespoke cuts, color, and premium spa services.",
}

export const globalHeader: GlobalHeader = {
  logoText: "VILLA HAIR SENSE",
  primaryLinks: [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Book Appointment", href: "/booking" },
}

export const globalFooter: GlobalFooter = {
  salonName: "Villa Hair Sense",
  description:
    "The premier destination for luxury hair care and transformations in Chandigarh.",
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/villahairsense" },
    { label: "Facebook", href: "https://facebook.com/villahairsense" },
  ],
  legalLinks: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  contactInfo: {
    address: "Sector 9, Madhya Marg, Chandigarh",
    phone: "+91 98765 43210",
    email: "hello@villahairsense.com",
  },
  copyright: "© 2024 Villa Hair Sense. All rights reserved.",
}

export const hero = {
  heading: "The Art of Hair, Perfected.",
  subheading:
    "Discover Chandigarh’s most exclusive stylist-led salon, where luxury meets bespoke artistry for your ultimate hair transformation.",
  cta: { label: "Begin Your Transformation", href: "/booking" } as CTA,
}

export const brandPromise = {
  heading: "More Than a Salon. An Experience.",
  content:
    "At Villa Hair Sense, we believe your hair is your ultimate accessory. Under the expert guidance of stylists Aarif and Arman, we curate an environment of absolute luxury and precision, ensuring every client leaves feeling empowered, refreshed, and radiant.",
}

export const signatureServices = {
  heading: "Our Signatures",
  services: [
    {
      title: "The Butterfly Cut",
      description:
        "Our viral signature style that delivers breathtaking volume, face-framing layers, and effortless movement.",
      href: "/services#butterfly-cut",
    },
    {
      title: "Bespoke Balayage",
      description:
        "Custom-painted, sun-kissed color tailored perfectly to your skin tone and hair texture.",
      href: "/services#balayage",
    },
    {
      title: "Restorative Spa Rituals",
      description:
        "Deeply nourishing treatments using premium global products to restore vitality to your scalp and strands.",
      href: "/services#spa",
    },
  ],
}

export const stylistSpotlight = {
  heading: "Meet The Artisans",
  content:
    "Aarif and Arman bring decades of combined international experience to Chandigarh. Their philosophy is simple: understand the client, respect the hair, and deliver unparalleled artistry.",
  cta: { label: "Read Our Story", href: "/about" } as CTA,
}

export const beforeAndAfterGallery = {
  heading: "Transformations",
  subheading: "Witness the artistry. Swipe to see our latest client journeys.",
}

export const clientTestimonials = {
  heading: "Words of Praise",
  reviews: [
    {
      quote:
        "The only place I trust with my hair in Chandigarh. The level of detail and luxury is unmatched.",
      author: "Simran K.",
    },
    {
      quote:
        "Aarif transformed my damaged hair into a healthy, voluminous masterpiece. A truly premium experience.",
      author: "Priya R.",
    },
  ],
}

export const salonExperience = {
  heading: "The Sanctuary",
  content:
    "Located in the heart of Sector 9, our salon is designed to be your private retreat. Relax in our plush seating, enjoy a complimentary beverage, and let our experts take care of the rest.",
}

export const featuredProducts = {
  heading: "The Arsenal",
  subheading:
    "We exclusively use and retail the world's most luxurious haircare brands to ensure your results last long after you leave.",
  cta: { label: "Explore Products", href: "/services#products" } as CTA,
}

export const membershipTeaser = {
  heading: "The Villa Insider",
  content:
    "Elevate your routine with our exclusive membership tiers, offering priority booking, complimentary treatments, and special pricing on retail products.",
  cta: { label: "Discover Memberships", href: "/pricing#memberships" } as CTA,
}

export const bridalTeaser = {
  heading: "The Bridal Suite",
  content:
    "Your most important day demands the highest level of expertise. Discover our bespoke bridal styling packages tailored for elegance and longevity.",
  cta: { label: "View Bridal Services", href: "/services#bridal" } as CTA,
}

export const blogTeaser = {
  heading: "The Editorial",
  content:
    "Stay ahead of the trends. Read the latest insights, care tips, and style forecasts from our master stylists.",
  cta: { label: "Read the Journal", href: "/blog" } as CTA,
}

export const instagramFeed = {
  heading: "Follow Our Journey",
  subheading: "@villahairsense",
}

export const locationAndContact = {
  heading: "Visit Us",
  address: "Sector 9, Madhya Marg, Chandigarh",
  hours: "Tuesday - Sunday: 10:00 AM - 8:00 PM | Monday: Closed",
  cta: { label: "Get Directions", href: "/contact" } as CTA,
}

export const faqTeaser = {
  heading: "Common Questions",
  questions: [
    {
      q: "Do I need an appointment?",
      a: "To ensure the premium experience our clients expect, we highly recommend booking in advance.",
    },
    {
      q: "What products do you use?",
      a: "We partner exclusively with luxury brands like Kérastase and Olaplex.",
    },
  ],
  cta: { label: "View All FAQs", href: "/faq" } as CTA,
}

export const newsletterSignup = {
  heading: "Join The Guestlist",
  subheading:
    "Subscribe for exclusive updates, styling tips, and private invitations.",
}

export const pressMentions = {
  heading: "As Seen In",
  subheading:
    "Recognized by leading publications for excellence in hair artistry.",
}

export const whyChooseUs = {
  heading: "The Villa Difference",
  reasons: [
    {
      title: "Bespoke Consultations",
      description:
        "Every appointment begins with an in-depth analysis of your hair goals.",
    },
    {
      title: "Master Craftsmanship",
      description: "Our stylists undergo continuous global education.",
    },
    {
      title: "Uncompromising Quality",
      description: "Only the finest products touch your hair.",
    },
  ],
}

export const finalCta = {
  heading: "Ready for Your Transformation?",
  subheading: "Secure your appointment with Chandigarh's finest stylists.",
  cta: { label: "Book Now", href: "/booking" } as CTA,
}
