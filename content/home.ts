export interface SEO {
  title: string;
  description: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  cta: string;
}

export interface HomeContent {
  seo: SEO;
  hero: HeroContent;
  brandEssence: { headline: string; body: string };
  sherwaniCollection: { headline: string; description: string; items: string[] };
  kurtaCollection: { headline: string; description: string; items: string[] };
  masterTailor: { name: string; title: string; quote: string };
  process: { headline: string; steps: { title: string; description: string }[] };
  fabricGallery: { headline: string; description: string };
  testimonials: { quote: string; author: string; event: string }[];
  heritage: { headline: string; body: string };
  faqTeaser: { headline: string; questions: { q: string; a: string }[] };
  newsletter: { headline: string; subheadline: string; cta: string };
  location: { headline: string; address: string; cta: string };
}

export const homeContent: HomeContent = {
  seo: {
    title: "Sardaar G. Tailors | Premier Bespoke Tailoring in Patiala",
    description: "Experience the art of bespoke craftsmanship. Sardaar G. Tailors specializes in designer sherwanis, Muktsari kurta-pajamas, and precision menswear in Patiala."
  },
  hero: {
    headline: "The Art of Bespoke Heritage",
    subheadline: "Precision cuts, luxurious fabrics, and a legacy of Patiala craftsmanship woven into every stitch.",
    cta: "Book a Fitting"
  },
  brandEssence: {
    headline: "The Sardaar G. Promise",
    body: "Rooted in the royal traditions of Punjab, we believe every garment is a testament to the wearer's journey. Our atelier in Patiala combines time-honored techniques with modern precision to craft garments that command a room."
  },
  sherwaniCollection: {
    headline: "Bespoke Sherwanis",
    description: "Intricate hand-embroidery meets architectural tailoring for your most momentous occasions.",
    items: ["Zardosi Masterpieces", "Velvet Classics", "Contemporary Indo-Western"]
  },
  kurtaCollection: {
    headline: "The Muktsari Kurta Pajama",
    description: "Crisp lines, impeccable drape. The definitive silhouette of Punjabi elegance.",
    items: ["Pure Linen Blends", "Festive Silks", "Everyday Cotton"]
  },
  masterTailor: {
    name: "The Head Craftsman",
    title: "Master Tailor & Visionary",
    quote: "A true fit is not just about measurements; it is about capturing the character of the man wearing it."
  },
  process: {
    headline: "The Bespoke Journey",
    steps: [
      { title: "Consultation", description: "Discuss your vision, explore our fabric library, and define the silhouette." },
      { title: "Measurements", description: "Over 30 precise measurements are taken to map your unique posture and form." },
      { title: "First Baste Fitting", description: "The skeleton of the garment is tried on to refine the drape and cut." },
      { title: "Final Delivery", description: "Your completed masterpiece, refined to absolute perfection." }
    ]
  },
  fabricGallery: {
    headline: "The Fabric Library",
    description: "Sourced from the finest mills globally. From rich Banarasi brocades to breathable Italian linens."
  },
  testimonials: [
    { quote: "The sherwani they crafted for my wedding was nothing short of regal. The fit was impeccable.", author: "Rajveer S.", event: "Groom" },
    { quote: "Their Muktsari kurtas are the standard. The attention to the collar and cuff detail is unmatched.", author: "Amanpreet D.", event: "Loyal Client" }
  ],
  heritage: {
    headline: "Our Patiala Roots",
    body: "Born in the heart of Punjab, our aesthetic is deeply influenced by the vibrant culture and royal history of Patiala. We carry this legacy forward, one bespoke garment at a time."
  },
  faqTeaser: {
    headline: "Frequently Asked",
    questions: [
      { q: "How long does a bespoke sherwani take?", a: "Typically 4-6 weeks, depending on the complexity of the embroidery." },
      { q: "Do you accept international orders?", a: "Yes, we arrange virtual consultations and ship globally." },
      { q: "Can I bring my own fabric?", a: "We prefer using our curated library to guarantee the drape, but we can evaluate your fabric upon request." }
    ]
  },
  newsletter: {
    headline: "Join the Guild",
    subheadline: "Subscribe for insights into sartorial elegance, fabric care, and our latest collections.",
    cta: "Subscribe"
  },
  location: {
    headline: "Visit the Studio",
    address: "New Market, Tripuri, Patiala, Punjab",
    cta: "Get Directions"
  }
};
