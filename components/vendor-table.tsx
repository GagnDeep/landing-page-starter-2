"use client"

import { useState } from "react"
import Link from "next/link"
import { getVendors } from "@/lib/content"

export function VendorTable({
  initialVendors,
}: {
  initialVendors?: import("@/content/schemas").VendorSchema[]
}) {
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
    <div className="w-full space-y-4">
      <div className="mb-2 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <label
            htmlFor="category-filter"
            className="text-sm font-medium whitespace-nowrap text-foreground"
          >
            Filter by:
          </label>
          <select
            id="category-filter"
            className="h-11 w-full min-w-[44px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:h-9 sm:w-auto"
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

      <div
        className="w-full overflow-x-auto rounded-lg border bg-card text-card-foreground shadow-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
        tabIndex={0}
        role="region"
        aria-label="Vendor Comparison Table"
      >
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="border-b bg-muted/50 font-mono text-xs text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-4 font-medium" scope="col">
                <button
                  onClick={() => handleSort("name")}
                  className="-ml-2 flex min-h-[44px] items-center gap-1 rounded px-2 py-1 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-label={
                    sortField === "name"
                      ? sortDirection === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  Vendor{" "}
                  {sortField === "name" &&
                    (sortDirection === "asc" ? "↑" : "↓")}
                </button>
              </th>
              <th className="px-6 py-4 font-medium" scope="col">
                <button
                  onClick={() => handleSort("category")}
                  className="-ml-2 flex min-h-[44px] items-center gap-1 rounded px-2 py-1 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-label={
                    sortField === "category"
                      ? sortDirection === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  Category{" "}
                  {sortField === "category" &&
                    (sortDirection === "asc" ? "↑" : "↓")}
                </button>
              </th>
              <th className="px-6 py-4 font-medium" scope="col">
                Funding
              </th>
              <th className="px-6 py-4 font-medium" scope="col">
                <button
                  onClick={() => handleSort("fundingDate")}
                  className="-ml-2 flex min-h-[44px] items-center gap-1 rounded px-2 py-1 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-label={
                    sortField === "fundingDate"
                      ? sortDirection === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
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
                <td colSpan={4} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <p className="text-muted-foreground">
                      No vendors found matching this filter.
                    </p>
                    <button
                      onClick={() => setFilterCategory("All")}
                      className="min-h-[44px] min-w-[44px] rounded text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      Clear filter
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              sortedVendors.map((vendor) => (
                <tr
                  key={vendor.id}
                  className="transition-colors hover:bg-muted/50"
                >
                  <td className="max-w-[200px] truncate px-6 py-4 font-sans font-semibold text-foreground">
                    <Link
                      href={`/vendors/${vendor.slug}`}
                      className="-ml-1 flex min-h-[44px] items-center rounded px-1 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <span className="truncate">{vendor.name}</span>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                    {vendor.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {vendor.fundingAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
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
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="border-b bg-muted/50 font-mono text-xs text-muted-foreground uppercase">
              <tr>
                <th className="px-6 py-4 font-medium" scope="col">
                  Vendor
                </th>
                <th className="px-6 py-4 font-medium" scope="col">
                  Category
                </th>
                <th className="px-6 py-4 font-medium" scope="col">
                  Funding
                </th>
                <th className="px-6 py-4 font-medium" scope="col">
                  Verified
                </th>
              </tr>
            </thead>
            <tbody className="divide-y font-mono">
              {allVendors.map((vendor) => (
                <tr key={vendor.id}>
                  <td className="max-w-[200px] truncate px-6 py-4 font-sans font-semibold text-foreground">
                    <a
                      href={`/vendors/${vendor.slug}`}
                      className="block truncate hover:underline"
                    >
                      {vendor.name}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                    {vendor.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {vendor.fundingAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {vendor.fundingDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </noscript>
    </div>
  )
}
