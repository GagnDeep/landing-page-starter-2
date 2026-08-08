const EMPTY_STATE_TEXT =
  "No tracking data available yet. The tracking apparatus is being initialised."

export function TrackingTable() {
  return (
    <div className="w-full overflow-x-auto rounded-md border bg-card">
      <table className="w-full text-left text-sm">
        <thead className="border-b bg-muted/50 font-heading">
          <tr>
            <th className="p-4 font-semibold">Vendor</th>
            <th className="p-4 font-semibold">Claimed Accuracy</th>
            <th className="p-4 font-semibold">Real World Return</th>
            <th className="p-4 font-semibold">S&amp;P 500 Benchmark</th>
            <th className="p-4 font-semibold">Delta</th>
            <th className="p-4 font-semibold">Last Verified</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={6}
              className="p-8 text-center font-mono text-muted-foreground"
            >
              {EMPTY_STATE_TEXT}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
