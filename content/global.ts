export interface GlobalContent {
  navLinks: Array<{ label: string; href: string }>;
  contactEmail: string;
  contactPhone: string;
  partnerLogos: string[];
}

export const globalContent: GlobalContent = {
  navLinks: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/features' },
    { label: 'Investment', href: '/pricing' },
    { label: 'Journal', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ],
  contactEmail: 'hello@blinkingeyeevents.com',
  contactPhone: '+91 98765 43210',
  partnerLogos: [
    "Vogue Weddings",
    "Taj Hotels",
    "Oberoi Resorts",
    "Harper's Bazaar",
    "WedMeGood"
  ]
};
