export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface CallToAction {
  label: string;
  href: string;
}

export interface BasePageContent {
  seo: SEOData;
}
