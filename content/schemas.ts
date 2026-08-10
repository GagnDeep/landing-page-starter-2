export type VerificationSource = {
  quote: string
  url: string
  dateRead: string
  version: string
}

export type VerifiableClaim = {
  text: string
  source: VerificationSource // Missing source is a type error
}

export type PageContent = {
  id: string
  title: string
  description: string
  type: "hub" | "spoke" | "money" | "pillar" | "review" | "comparison"
  datePublished: string
  dateModified: string
  wordFloorTarget: number
  bodySections: {
    heading: string
    content: string | VerifiableClaim
  }[]
  faqs?: {
    question: string
    answer: string | VerifiableClaim
  }[]
}
