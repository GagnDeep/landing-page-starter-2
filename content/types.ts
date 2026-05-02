export interface SEOContent {
  title: string;
  description: string;
}

export interface GlobalContent {
  navigation: {
    links: Array<{ label: string; href: string }>;
  };
  footer: {
    brandMantra: string;
    links: Array<{
      category: string;
      items: Array<{ label: string; href: string }>;
    }>;
    social: Array<{ platform: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
    contactInfo: {
      address: string;
      email: string;
      phone: string;
    };
  };
}
