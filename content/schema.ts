// Strict typed content layer schema.
export type GuideContent = {
  slug: string
  title: string
  description: string
  lastVerifiedDate: string // strict type enforcement
  sourceAuthority: string // strict type enforcement
  body: string
  requirements: string[]
  relatedGuides: string[] // Enforce minimum 2 siblings
}

export type StatePageContent = {
  slug: string
  stateName: string
  stateAbbreviation: string
  description: string
  lastVerifiedDate: string
  sourceAuthority: string
  localRequirements: string[]
  body?: string
}
