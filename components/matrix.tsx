"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Search01Icon,
  FilterIcon,
  Building04Icon,
} from "@hugeicons/core-free-icons"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  getRelationships,
  getPlatforms,
  getComponents,
  getSuppliers,
  getJobs,
} from "@/content"

export function Matrix() {
  const [searchTerm, setSearchTerm] = useState("")
  const [regionFilter, setRegionFilter] = useState<string>("All")
  const [confidenceFloor, setConfidenceFloor] = useState<string>("All")
  const [hiringOnly, setHiringOnly] = useState<boolean>(false)

  const relationships = getRelationships()
  const platforms = getPlatforms()
  const components = getComponents()
  const suppliers = getSuppliers()
  const jobs = getJobs()

  const filteredRelationships = relationships.filter((r) => {
    const supplier = suppliers.find((s) => s.id === r.supplierId)
    if (!supplier) return false

    if (
      searchTerm &&
      !supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !r.platformId.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    if (regionFilter !== "All" && supplier.region !== regionFilter) {
      return false
    }

    if (confidenceFloor === "Confirmed" && r.evidenceClass !== "Confirmed") {
      return false
    }

    if (hiringOnly) {
      const hasJobs = jobs.some((j) => j.supplierId === supplier.id)
      if (!hasJobs) return false
    }

    return true
  })

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="relative max-w-sm flex-1">
          <HugeiconsIcon
            icon={Search01Icon}
            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search suppliers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
            aria-label="Search suppliers"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={FilterIcon}
              className="size-4 text-muted-foreground"
            />
            <span className="sr-only text-sm font-medium">Filters</span>
          </div>
          <select
            aria-label="Filter by region"
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option value="All">All Regions</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
          </select>
          <select
            aria-label="Filter by confidence"
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            value={confidenceFloor}
            onChange={(e) => setConfidenceFloor(e.target.value)}
          >
            <option value="All">Any Confidence</option>
            <option value="Confirmed">Confirmed Only</option>
          </select>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={hiringOnly}
              onChange={(e) => setHiringOnly(e.target.checked)}
              className="rounded border-input text-primary focus:ring-ring"
            />
            Hiring Only
          </label>
        </div>
      </div>

      <div
        className="overflow-x-auto rounded-lg border border-border"
        role="region"
        aria-label="Bill of Materials Matrix"
        tabIndex={0}
      >
        <table className="w-full text-left font-mono text-sm tabular-nums">
          <thead className="border-b border-border bg-muted/50 text-xs uppercase">
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-10 border-r border-border bg-background px-6 py-3 font-semibold text-foreground"
              >
                Component
              </th>
              {platforms.map((platform) => (
                <th
                  key={platform.id}
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap text-foreground"
                >
                  {platform.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {components.length === 0 ? (
              <tr>
                <td
                  colSpan={platforms.length + 1}
                  className="px-6 py-12 text-center font-sans text-muted-foreground"
                >
                  <div className="flex flex-col items-center gap-2">
                    <HugeiconsIcon
                      icon={Search01Icon}
                      className="size-8 text-muted-foreground/50"
                    />
                    <p>Matrix requires real edge data to render.</p>
                    <p className="text-xs">
                      {"{{VERIFY: Matrix edge list JSON data}}"}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              components.map((component) => (
                <tr
                  key={component.id}
                  className="border-b border-border bg-background transition-colors last:border-0 hover:bg-muted/10"
                >
                  <th
                    scope="row"
                    className="sticky left-0 z-10 border-r border-border bg-muted/5 px-6 py-4 font-sans font-medium whitespace-nowrap text-foreground"
                  >
                    {component.name}
                  </th>
                  {platforms.map((platform) => {
                    const edge = filteredRelationships.find(
                      (e) =>
                        e.platformId === platform.id &&
                        e.componentId === component.id
                    )
                    const supplier = edge
                      ? suppliers.find((s) => s.id === edge.supplierId)
                      : null
                    const hasJobs = supplier
                      ? jobs.some((j) => j.supplierId === supplier.id)
                      : false

                    return (
                      <td
                        key={`${platform.id}-${component.id}`}
                        className="min-w-[220px] px-6 py-4 align-top"
                      >
                        {edge && supplier ? (
                          <div className="flex flex-col gap-2">
                            <div className="flex items-start justify-between gap-2">
                              <a
                                href={`/suppliers/${supplier.id}/`}
                                className="flex items-center gap-1.5 rounded-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                              >
                                <HugeiconsIcon
                                  icon={Building04Icon}
                                  className="size-3.5"
                                />
                                {supplier.name}
                              </a>
                              {hasJobs && (
                                <span
                                  className="mt-1 size-2 shrink-0 rounded-full bg-primary"
                                  aria-label="Hiring"
                                  title="Hiring"
                                />
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-xs">
                              {edge.evidenceClass === "Unconfirmed" ? (
                                <Badge
                                  variant="secondary"
                                  className="px-1.5 py-0 font-mono text-[10px] uppercase"
                                >
                                  Unconfirmed
                                </Badge>
                              ) : (
                                <span
                                  className="text-muted-foreground"
                                  aria-label="Confirmed Date"
                                >
                                  {edge.date}
                                </span>
                              )}
                              <a
                                href={edge.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm text-muted-foreground/60 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                                aria-label={`Source for ${supplier.name}`}
                              >
                                Source
                              </a>
                            </div>
                          </div>
                        ) : (
                          <span className="text-muted-foreground/30">—</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
