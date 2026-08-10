import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkBadge01Icon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons"

export function CustodyMatrix() {
  const providers = [
    {
      name: "AncestryDNA",
      destroy: "yes",
      delete: "yes",
      export: "yes",
      research: "opt-in",
      police: "warrant",
      share: "no",
      sale: "transfer",
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
    },
    {
      name: "FamilyTreeDNA",
      destroy: "yes",
      delete: "yes",
      export: "yes",
      research: "opt-in",
      police: "warrant",
      share: "no",
      sale: "transfer",
    },
  ]

  // A helper component to render the matrix cell icon and tooltip value.
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
            icon={CheckmarkBadge01Icon}
            className="size-5 text-primary"
          />
        </div>
      )
    }
    return (
      <div className="flex items-center justify-center">
        <HugeiconsIcon
          icon={HelpCircleIcon}
          className="size-5 text-muted-foreground"
        />
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
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
            {providers.map((p) => (
              <tr key={p.name} className="transition-colors hover:bg-muted/50">
                <td className="p-4 text-sm font-bold whitespace-nowrap">
                  {p.name}
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
      <div className="flex items-center justify-between border-t border-border bg-muted/30 p-4 text-xs text-muted-foreground">
        <span>
          Policies change. Latest scan:{" "}
          {"{{VERIFY: Provide exact date of scan}}"}
        </span>
        <span className="font-mono">Exhibit A</span>
      </div>
    </div>
  )
}
