export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
}

export interface CTA {
  label: string;
  href: string;
}

export interface HeroSection {
  heading: string;
  subheading: string;
  cta?: CTA;
  secondaryCta?: CTA;
}

export interface TextBlock {
  heading: string;
  content: string | string[];
}

export interface ImageContent {
  alt: string;
  caption?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  subItems?: NavigationItem[];
}
