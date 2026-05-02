export interface SEO {
  title: string
  description: string
}

export interface CTA {
  label: string
  href: string
}

export interface ImagePlaceholder {
  alt: string
  placeholder: string
}

export interface BaseSection {
  heading?: string
  subheading?: string
  content?: string
  cta?: CTA
}

export interface Link {
  label: string
  href: string
}

export interface GlobalHeader {
  logoText: string
  primaryLinks: Link[]
  cta: CTA
}

export interface GlobalFooter {
  salonName: string
  description: string
  socialLinks: Link[]
  legalLinks: Link[]
  contactInfo: {
    address: string
    phone: string
    email: string
  }
  copyright: string
}

// Ensure the types module is treated as a module
export {}
