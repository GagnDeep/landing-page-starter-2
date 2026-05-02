import { GlobalContent } from './types';

export const globalContent: GlobalContent = {
  navigation: {
    links: [
      { label: "Collection", href: "/#collection" },
      { label: "Bespoke", href: "/features" },
      { label: "Atelier", href: "/about" },
      { label: "Journal", href: "/blog" },
      { label: "Investment", href: "/pricing" },
      { label: "Contact", href: "/contact" }
    ]
  },
  footer: {
    brandMantra: "Crafting timeless elegance through bespoke ethnic wear. From Chandigarh to the world.",
    links: [
      {
        category: "Explore",
        items: [
          { label: "The Collection", href: "/#collection" },
          { label: "Our Story", href: "/about" },
          { label: "The Bespoke Process", href: "/features" },
          { label: "Journal", href: "/blog" }
        ]
      },
      {
        category: "Client Care",
        items: [
          { label: "Pricing & Investment", href: "/pricing" },
          { label: "FAQ", href: "/faq" },
          { label: "Contact Us", href: "/contact" },
          { label: "Careers", href: "/careers" }
        ]
      }
    ],
    social: [
      { platform: "Instagram", href: "https://instagram.com/yavadesigns" },
      { platform: "Pinterest", href: "https://pinterest.com/yavadesigns" }
    ],
    legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" }
    ],
    contactInfo: {
      address: "Sector 10, Chandigarh, India",
      email: "atelier@yavadesigns.com",
      phone: "+91 98765 43210"
    }
  }
};
