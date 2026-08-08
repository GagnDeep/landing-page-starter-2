export function ComparisonTable() {
  return (
    <div className="w-full overflow-x-auto rounded-lg border bg-card text-card-foreground shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-muted font-heading text-muted-foreground">
          <tr>
            <th className="p-4 text-left font-medium">Program</th>
            <th className="p-4 text-left font-medium">Eligibility Target</th>
            <th className="p-4 text-left font-medium">Goal</th>
            <th className="p-4 text-left font-medium">Typical Timeline</th>
          </tr>
        </thead>
        <tbody className="divide-y border-t">
          <tr className="hover:bg-muted/50">
            <td className="p-4 font-medium">8(a) Business Development</td>
            <td className="p-4">Socially and economically disadvantaged</td>
            <td className="p-4">5% of prime contracts</td>
            <td className="p-4">
              {"{{VERIFY: 8(a) processing time from SBA.gov}}"}
            </td>
          </tr>
          <tr className="hover:bg-muted/50">
            <td className="p-4 font-medium">HUBZone</td>
            <td className="p-4">Historically Underutilized Business Zones</td>
            <td className="p-4">3% of prime contracts</td>
            <td className="p-4">
              {"{{VERIFY: HUBZone processing time from SBA.gov}}"}
            </td>
          </tr>
          <tr className="hover:bg-muted/50">
            <td className="p-4 font-medium">WOSB / EDWOSB</td>
            <td className="p-4">Women-Owned Small Businesses</td>
            <td className="p-4">5% of prime contracts</td>
            <td className="p-4">
              {"{{VERIFY: WOSB processing time from SBA.gov}}"}
            </td>
          </tr>
          <tr className="hover:bg-muted/50">
            <td className="p-4 font-medium">SDVOSB</td>
            <td className="p-4">Service-Disabled Veteran-Owned</td>
            <td className="p-4">3% of prime contracts</td>
            <td className="p-4">
              {"{{VERIFY: SDVOSB processing time from SBA.gov}}"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
