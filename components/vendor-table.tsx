export type Vendor = {
  id: string
  name: string
  category: string
  funding: string
  status: string
}

const vendors: Vendor[] = [
  {
    id: "1",
    name: "Alpha Underwriting",
    category: "Workflow",
    funding: "{{VERIFY: Alpha Underwriting funding amount}}",
    status: "Active",
  },
  {
    id: "2",
    name: "Beta Risk AI",
    category: "Decisioning",
    funding: "{{VERIFY: Beta Risk AI funding amount}}",
    status: "Active",
  },
  {
    id: "3",
    name: "Gamma Intake",
    category: "Ingestion",
    funding: "{{VERIFY: Gamma Intake funding amount}}",
    status: "Active",
  },
]

export function VendorTable() {
  return (
    <div className="w-full overflow-x-auto rounded-lg border bg-card text-card-foreground shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="border-b bg-muted/50 font-mono text-xs text-muted-foreground uppercase">
          <tr>
            <th className="px-6 py-4 font-medium">Vendor</th>
            <th className="px-6 py-4 font-medium">Category</th>
            <th className="px-6 py-4 font-medium">Funding</th>
            <th className="px-6 py-4 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y font-mono">
          {vendors.map((vendor) => (
            <tr key={vendor.id} className="transition-colors hover:bg-muted/50">
              <td className="px-6 py-4 font-sans font-semibold text-foreground">
                {vendor.name}
              </td>
              <td className="px-6 py-4 text-muted-foreground">
                {vendor.category}
              </td>
              <td className="px-6 py-4">{vendor.funding}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none">
                  {vendor.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
