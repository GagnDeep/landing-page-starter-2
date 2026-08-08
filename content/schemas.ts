export type VerificationDate = `${number}${number}${number}${number}-${number}${number}-${number}${number}`

export interface VendorSchema {
  id: string
  name: string
  category: string
  fundingAmount: string
  fundingSource: string
  fundingDate: VerificationDate
  sponsorshipRate: string
  sponsorshipSource: string
  description: string
  slug: string
  hubSlug: string
  content: string
}

export interface CategorySchema {
  id: string
  name: string
  description: string
  slug: string
  content: string
}

export interface JobSchema {
  id: string
  title: string
  company: string
  salary: string
  salarySource: string
  verificationDate: VerificationDate
  location: string
  slug: string
  hubSlug: string
  content: string
}

export interface HubSchema {
  id: string
  title: string
  description: string
  slug: string
  content: string
}
