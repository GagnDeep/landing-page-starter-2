export interface SEOData {
  title: string;
  description: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Section<T = Record<string, any>> {
  title?: string;
  subtitle?: string;
  content: T;
}

export interface BasePageContent {
  seo: SEOData;
  hero: {
    heading: string;
    subheading?: string;
    cta?: CTA | CTA[];
  };
}
