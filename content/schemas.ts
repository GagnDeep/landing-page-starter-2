export interface StateData {
  slug: string
  name: string
  permitCost: string
  threshold: string
  fees: string
  verificationSource: string // Must be a .gov url or VERIFY token
  lastVerifiedDate: string // YYYY-MM-DD
  content: string // Main content for the spoke page
}

export interface SoftwareData {
  slug: string
  name: string
  category: string
  pricing: string
  features: string[]
  verificationSource: string
  lastVerifiedDate: string
  content: string
}

export interface TemplateData {
  slug: string
  name: string
  category: string
  price: string
  verificationSource: string
  lastVerifiedDate: string
  content: string
}
