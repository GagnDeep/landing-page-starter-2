import { vendors } from "@/content/vendors"
import { hubs } from "@/content/hubs"
import { jobs } from "@/content/jobs"

export function getVendors() {
  return vendors
}

export function getVendorBySlug(slug: string) {
  return vendors.find((v) => v.slug === slug)
}

export function getHubs() {
  return hubs
}

export function getHubBySlug(slug: string) {
  return hubs.find((h) => h.slug === slug)
}

export function getJobs() {
  return jobs
}

export function getJobBySlug(slug: string) {
  return jobs.find((j) => j.slug === slug)
}
