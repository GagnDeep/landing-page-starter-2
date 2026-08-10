export type VerificationSource = "direct_email" | "maker_website" | "user_report"

export interface VerifiedDataPoint<T> {
  value: T
  source: VerificationSource | string
  verificationDate: string
}

export interface Maker {
  slug: string
  name: string
  location: string
  basePrice: VerifiedDataPoint<string>
  waitTime: VerifiedDataPoint<string>
  materials: string[]
  website?: string
}

export interface Review {
  slug: string
  title: string
  makerSlug: string
  body: string
  publishedAt: string
  updatedAt: string
}
