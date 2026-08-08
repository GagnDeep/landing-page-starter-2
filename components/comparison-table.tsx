export function ComparisonTable() {
  return (
    <div className="w-full overflow-x-auto border-2 border-border bg-card shadow-sm">
      <table className="w-full text-base">
        <thead className="border-b-2 border-border bg-muted font-heading text-foreground">
          <tr>
            <th className="p-5 text-left font-bold tracking-tight">Program</th>
            <th className="p-5 text-left font-bold tracking-tight">
              Eligibility Target
            </th>
            <th className="p-5 text-left font-bold tracking-tight">Goal</th>
            <th className="p-5 text-left font-bold tracking-tight">
              Typical Timeline
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          <tr className="transition-colors hover:bg-muted/50">
            <td className="p-5 font-semibold text-primary">
              8(a) Business Development
            </td>
            <td className="p-5 text-muted-foreground">
              Socially and economically disadvantaged
            </td>
            <td className="p-5 font-mono text-sm">5% of prime contracts</td>
            <td className="p-5 text-muted-foreground">
              {"{{VERIFY: 8(a) processing time from SBA.gov}}"}
            </td>
          </tr>
          <tr className="transition-colors hover:bg-muted/50">
            <td className="p-5 font-semibold text-primary">HUBZone</td>
            <td className="p-5 text-muted-foreground">
              Historically Underutilized Business Zones
            </td>
            <td className="p-5 font-mono text-sm">3% of prime contracts</td>
            <td className="p-5 text-muted-foreground">
              {"{{VERIFY: HUBZone processing time from SBA.gov}}"}
            </td>
          </tr>
          <tr className="transition-colors hover:bg-muted/50">
            <td className="p-5 font-semibold text-primary">WOSB / EDWOSB</td>
            <td className="p-5 text-muted-foreground">
              Women-Owned Small Businesses
            </td>
            <td className="p-5 font-mono text-sm">5% of prime contracts</td>
            <td className="p-5 text-muted-foreground">
              {"{{VERIFY: WOSB processing time from SBA.gov}}"}
            </td>
          </tr>
          <tr className="transition-colors hover:bg-muted/50">
            <td className="p-5 font-semibold text-primary">SDVOSB</td>
            <td className="p-5 text-muted-foreground">
              Service-Disabled Veteran-Owned
            </td>
            <td className="p-5 font-mono text-sm">3% of prime contracts</td>
            <td className="p-5 text-muted-foreground">
              {"{{VERIFY: SDVOSB processing time from SBA.gov}}"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
