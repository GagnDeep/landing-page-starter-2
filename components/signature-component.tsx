import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function SignatureComponent() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h2 className="mb-4 font-heading text-xl font-semibold">
        State-by-State Cottage Food Law Directory
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>State</TableHead>
              <TableHead>Sales Limit</TableHead>
              <TableHead>Permit Required</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-muted-foreground italic">
                No state data loaded.
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
