export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export interface CTA {
  label: string;
  href: string;
}

export interface SectionHeader {
  title: string;
  subtitle?: string;
  description?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
