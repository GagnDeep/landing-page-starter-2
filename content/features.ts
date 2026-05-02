export const featuresContent = {
  meta: {
    title: "Tailoring Services | Imran Tailor",
    description: "Explore our comprehensive tailoring services, including full bespoke construction, made-to-measure refinement, and our specialized NRI wardrobe management.",
  },
  hero: {
    title: "Our Services",
    subtitle: "From raw fabric to final polish, discover the extent of our craftsmanship.",
    imagePlaceholder: "fabric_swatches_modern.jpg",
  },
  services: [
    {
      id: "bespoke",
      title: "The Bespoke Commission",
      subtitle: "The pinnacle of tailoring. Over 50 hours of handcraft.",
      description: "A bespoke suit from Imran Tailor is an entirely original creation. A unique paper pattern is drafted exclusively for your measurements, taking into account the nuanced slopes and postures of your body. Hand-cut and predominantly hand-stitched, it requires multiple fittings to achieve a silhouette that is distinctively yours.",
      details: ["Individual paper pattern", "Full floating canvas", "Hand-stitched lapels and buttonholes", "Minimum 3 fittings"],
      imagePlaceholder: "service_bespoke.jpg",
    },
    {
      id: "mtm",
      title: "Made to Measure",
      subtitle: "Streamlined elegance without compromising quality.",
      description: "Our Made to Measure service utilizes our expertly drafted master patterns, adjusted to your specific measurements. This offers a faster turnaround while still allowing extensive customization of fabrics, linings, and stylistic details.",
      details: ["Adapted from master patterns", "Half or full canvas options", "Extensive customization", "1-2 fittings"],
      imagePlaceholder: "service_mtm.jpg",
    },
    {
      id: "alterations",
      title: "Master Alterations",
      subtitle: "Breathing new life into existing garments.",
      description: "A poorly fitting luxury garment is a tragedy. Our alteration service applies our bespoke standards to your existing wardrobe. From subtle tapering to complete recuts, we restore the intended elegance of your clothing.",
      details: ["Suit resizing", "Trouser tapering", "Jacket restructuring", "Vintage restoration"],
      imagePlaceholder: "service_alterations.jpg",
    },
    {
      id: "nri",
      title: "NRI Wardrobe Management",
      subtitle: "Your Patiala tailor, accessible globally.",
      description: "Designed specifically for our clients abroad. We maintain a detailed, securely vaulted profile of your measurements and style preferences. Conduct consultations via WhatsApp, select fabrics digitally, and receive perfectly tailored garments shipped directly to your international address.",
      details: ["Secure measurement vault", "WhatsApp video consultations", "Digital fabric selection", "Insured global shipping"],
      imagePlaceholder: "service_nri.jpg",
    },
  ],
  comparisonTable: {
    heading: "Understanding the Craft",
    columns: ["Feature", "Bespoke", "Made to Measure"],
    rows: [
      { feature: "Pattern", bespoke: "Drafted from scratch", mtm: "Adapted from master" },
      { feature: "Construction", bespoke: "Full hand-padded canvas", mtm: "Half or full canvas" },
      { feature: "Fittings Required", bespoke: "3 to 4", mtm: "1 to 2" },
      { feature: "Turnaround Time", bespoke: "6 - 8 Weeks", mtm: "3 - 4 Weeks" },
    ],
  },
};
