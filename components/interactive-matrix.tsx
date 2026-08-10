"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { IconSvgElement } from "@hugeicons/react"
import {
  CheckmarkBadge01Icon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export function InteractiveMatrix() {
  const [concernDelete, setConcernDelete] = useState(false)
  const [concernPolice, setConcernPolice] = useState(false)

  const baseProviders = [
    {
      name: "AncestryDNA",
      destroy: "yes",
      delete: "yes",
      export: "yes",
      research: "opt-in",
      police: "warrant",
      share: "no",
      sale: "transfer",
      version: "2.1",
      dateRead: "2024-05-10",
    },
    {
      name: "23andMe",
      destroy: "yes",
      delete: "yes",
      export: "yes",
      research: "opt-in",
      police: "warrant",
      share: "no",
      sale: "transfer",
      version: "3.4",
      dateRead: "2024-07-15",
    },
    {
      name: "MyHeritage",
      destroy: "yes",
      delete: "yes",
      export: "yes",
      research: "opt-in",
      police: "warrant",
      share: "no",
      sale: "transfer",
      version: "1.9",
      dateRead: "2024-01-20",
    },
    {
      name: "FamilyTreeDNA",
      destroy: "no",
      delete: "unknown",
      export: "yes",
      research: "opt-out",
      police: "voluntary",
      share: "yes",
      sale: "transfer",
      version: "4.0",
      dateRead: "2024-03-11",
    },
  ]

  // Rank and re-weight based on inputs
  const sortedProviders = [...baseProviders].sort((a, b) => {
    let scoreA = 0
    let scoreB = 0

    if (concernDelete) {
      scoreA += a.delete === "yes" ? 1 : -1
      scoreB += b.delete === "yes" ? 1 : -1
    }

    if (concernPolice) {
      scoreA += a.police === "warrant" ? 1 : -1
      scoreB += b.police === "warrant" ? 1 : -1
    }

    // stable baseline sort if scores match
    return scoreB - scoreA
  })

  const Cell = ({ val }: { val: string }) => {
    if (
      val === "yes" ||
      val === "opt-in" ||
      val === "warrant" ||
      val === "no"
    ) {
      return (
        <div className="flex items-center justify-center">
          <HugeiconsIcon
            icon={CheckmarkBadge01Icon as unknown as IconSvgElement}
            className="size-5 text-primary"
          />
        </div>
      )
    }
    return (
      <div className="flex items-center justify-center">
        <HugeiconsIcon
          icon={HelpCircleIcon as unknown as IconSvgElement}
          className="size-5 text-muted-foreground"
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4 rounded-lg border border-border bg-card p-6">
        <h3 className="font-heading text-lg font-bold">
          Filter & Weight by Concern
        </h3>
        <div className="flex flex-wrap gap-4">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="rounded border-input text-primary focus:ring-ring"
              checked={concernDelete}
              onChange={(e) => setConcernDelete(e.target.checked)}
            />
            <span className="text-sm font-medium">
              Prioritize Data Deletion
            </span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="rounded border-input text-primary focus:ring-ring"
              checked={concernPolice}
              onChange={(e) => setConcernPolice(e.target.checked)}
            />
            <span className="text-sm font-medium">
              Strict Police Posture (Warrant Only)
            </span>
          </label>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="p-4 font-heading text-sm font-bold whitespace-nowrap">
                  Provider
                </th>
                <th className="p-4 text-center font-heading text-sm font-bold whitespace-nowrap">
                  Sample Destruct.
                </th>
                <th className="p-4 text-center font-heading text-sm font-bold whitespace-nowrap">
                  Data Deletion
                </th>
                <th className="p-4 text-center font-heading text-sm font-bold whitespace-nowrap">
                  Raw Export
                </th>
                <th className="p-4 text-center font-heading text-sm font-bold whitespace-nowrap">
                  Research
                </th>
                <th className="p-4 text-center font-heading text-sm font-bold whitespace-nowrap">
                  Police
                </th>
                <th className="p-4 text-center font-heading text-sm font-bold whitespace-nowrap">
                  Sharing
                </th>
                <th className="p-4 text-center font-heading text-sm font-bold whitespace-nowrap">
                  Sale Transfer
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sortedProviders.map((p, i) => (
                <tr
                  key={p.name}
                  className={cn(
                    "transition-colors hover:bg-muted/50",
                    i === 0 &&
                      (concernDelete || concernPolice) &&
                      "bg-primary/5"
                  )}
                >
                  <td className="p-4 whitespace-nowrap">
                    <div className="text-sm font-bold">{p.name}</div>
                    <div className="mt-1 font-mono text-[10px] text-muted-foreground">
                      v{p.version} · {p.dateRead}
                    </div>
                  </td>
                  <td className="p-4">
                    <Cell val={p.destroy} />
                  </td>
                  <td className="p-4">
                    <Cell val={p.delete} />
                  </td>
                  <td className="p-4">
                    <Cell val={p.export} />
                  </td>
                  <td className="p-4">
                    <Cell val={p.research} />
                  </td>
                  <td className="p-4">
                    <Cell val={p.police} />
                  </td>
                  <td className="p-4">
                    <Cell val={p.share} />
                  </td>
                  <td className="p-4">
                    <Cell val={p.sale} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
