"use client"

import { useState } from "react"
import Link from "next/link"
import { getVendors } from "@/lib/content"

// Ensure static fallback works by executing the content fetch outside client state directly if possible, or passing as props.
// However, the brief says "fully keyboard-operable, with a static server-rendered fallback that exposes the same content to crawlers".
// A pure Server Component can't have interactive sorting, so we use a Client Component that receives data as props, or fetches statically.

export function VendorTable({
  initialVendors,
}: {
  initialVendors?: import("@/content/schemas").VendorSchema[]
}) {
  // If not passed, default to empty to avoid hydration errors if we try to fetch in client component,
  // but in our setup, we can import getVendors directly since it's just a static array.
  const allVendors = initialVendors || getVendors()

  const [sortField, setSortField] = useState<
    "name" | "category" | "fundingDate"
  >("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [filterCategory, setFilterCategory] = useState<string>("All")

  const categories = [
    "All",
    ...Array.from(new Set(allVendors.map((v) => v.category))),
  ]

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const filteredVendors = allVendors.filter(
    (v) => filterCategory === "All" || v.category === filterCategory
  )

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    let comparison = 0
    if (sortField === "name") {
      comparison = a.name.localeCompare(b.name)
    } else if (sortField === "category") {
      comparison = a.category.localeCompare(b.category)
    } else if (sortField === "fundingDate") {
      comparison =
        new Date(a.fundingDate).getTime() - new Date(b.fundingDate).getTime()
    }
    return sortDirection === "asc" ? comparison : -comparison
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <label
            htmlFor="category-filter"
            className="text-sm font-medium text-foreground"
          >
            Filter:
          </label>
          <select
            id="category-filter"
            className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg border bg-card text-card-foreground shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-muted/50 font-mono text-xs text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">
                <button
                  onClick={() => handleSort("name")}
                  className="flex items-center gap-1 rounded px-1 hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                >
                  Vendor{" "}
                  {sortField === "name" &&
                    (sortDirection === "asc" ? "↑" : "↓")}
                </button>
              </th>
              <th className="px-6 py-4 font-medium">
                <button
                  onClick={() => handleSort("category")}
                  className="flex items-center gap-1 rounded px-1 hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                >
                  Category{" "}
                  {sortField === "category" &&
                    (sortDirection === "asc" ? "↑" : "↓")}
                </button>
              </th>
              <th className="px-6 py-4 font-medium">Funding</th>
              <th className="px-6 py-4 font-medium">
                <button
                  onClick={() => handleSort("fundingDate")}
                  className="flex items-center gap-1 rounded px-1 hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                >
                  Verified{" "}
                  {sortField === "fundingDate" &&
                    (sortDirection === "asc" ? "↑" : "↓")}
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y font-mono">
            {sortedVendors.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-8 text-center text-muted-foreground"
                >
                  No vendors found in this category.
                </td>
              </tr>
            ) : (
              sortedVendors.map((vendor) => (
                <tr
                  key={vendor.id}
                  className="transition-colors hover:bg-muted/50"
                >
                  <td className="px-6 py-4 font-sans font-semibold text-foreground">
                    <Link
                      href={`/vendors/${vendor.slug}`}
                      className="rounded px-1 hover:underline focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      {vendor.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {vendor.category}
                  </td>
                  <td className="px-6 py-4">{vendor.fundingAmount}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none">
                      {vendor.fundingDate}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <noscript>
        {/* Static fallback for crawlers without JS */}
        <div className="w-full overflow-x-auto rounded-lg border bg-card text-card-foreground shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-muted/50 font-mono text-xs text-muted-foreground uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">Vendor</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Funding</th>
                <th className="px-6 py-4 font-medium">Verified</th>
              </tr>
            </thead>
            <tbody className="divide-y font-mono">
              {allVendors.map((vendor) => (
                <tr key={vendor.id}>
                  <td className="px-6 py-4 font-sans font-semibold text-foreground">
                    <a href={`/vendors/${vendor.slug}`}>{vendor.name}</a>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {vendor.category}
                  </td>
                  <td className="px-6 py-4">{vendor.fundingAmount}</td>
                  <td className="px-6 py-4">{vendor.fundingDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </noscript>
    </div>
  )
}
