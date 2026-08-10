// The brief mentions a state-by-state regulatory directory.
// For PASS 1 we remove the empty links because the actual pages don't exist yet,
// and linkinator will fail on 404s.

export function StateDirectory() {
  return (
    <div className="rounded-lg border border-dashed bg-card p-12 text-center">
      <h3 className="mb-2 font-heading text-lg font-medium">State Directory</h3>
      <p className="text-sm text-muted-foreground">
        {
          "{{VERIFY: State directory content will be populated in PASS 2 with real data.}}"
        }
      </p>
    </div>
  )
}
