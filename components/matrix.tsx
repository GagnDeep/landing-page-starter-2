"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Search01Icon, FilterIcon } from "@hugeicons/core-free-icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Matrix() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
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
          />
        </div>
        <Button variant="outline" className="gap-2">
          <HugeiconsIcon icon={FilterIcon} className="size-4" />
          Filters
        </Button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left font-mono text-sm tabular-nums">
          <thead className="border-b border-border bg-muted/50 text-xs uppercase">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-semibold text-foreground"
              >
                Component
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-semibold text-foreground"
              >
                Platform
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={2}
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
          </tbody>
        </table>
      </div>
    </div>
  )
}
