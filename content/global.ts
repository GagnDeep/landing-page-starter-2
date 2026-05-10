import { NavigationItem } from './types';

export interface GlobalContent {
  brand: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  navigation: NavigationItem[];
  footerLinks: {
    company: NavigationItem[];
    legal: NavigationItem[];
    social: NavigationItem[];
  };
  copyright: string;
}

export const globalContent: GlobalContent = {
  brand: "Guide Events",
  contactEmail: "inquiries@guideevents.com",
  contactPhone: "+91 98765 43210",
  address: "Sector 21C, Chandigarh, India",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" },
    ],
    legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    social: [
      { label: "Instagram", href: "#" },
      { label: "Pinterest", href: "#" },
    ],
  },
  copyright: "© 2024 Guide Events. All rights reserved.",
};
