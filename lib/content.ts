export type VerificationRequirement = {
  fact: string
  sourceNeeded: string
  verifiedDate?: string
}

export type ContentPage = {
  slug: string
  title: string
  description: string
  content: string
  type: "hub" | "spoke" | "review" | "programmatic"
  parentSlug?: string
  relatedSlugs: string[]
  verifications: VerificationRequirement[]
  publishedAt: string
  modifiedAt: string
}

import { contentDatabase } from "./content-data"

export function getContent(slug: string): ContentPage | undefined {
  return contentDatabase.find((c) => c.slug === slug)
}

export function getAllContent(): ContentPage[] {
  return contentDatabase
}

export function getChildren(parentSlug: string): ContentPage[] {
  return contentDatabase.filter((c) => c.parentSlug === parentSlug)
}
