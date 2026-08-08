import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { stateLaws } from "@/lib/content"

export function SignatureComponent() {
  const laws = Object.values(stateLaws)

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
            {laws.map((law) => (
              <TableRow key={law.id}>
                <TableCell className="font-medium">
                  <Link
                    href={`/${law.id}/`}
                    className="text-primary hover:underline"
                  >
                    {law.name}
                  </Link>
                </TableCell>
                <TableCell className="font-mono">{law.salesLimit}</TableCell>
                <TableCell>{law.permitRequired ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
