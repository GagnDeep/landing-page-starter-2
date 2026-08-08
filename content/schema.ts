export interface Maker {
  slug: string
  name: string
  location: string
  basePrice: string
  waitTime: string
  source: string
  verificationDate: string
}

// Ensure at build time that these fields exist by utilizing the interface in typed data structures
