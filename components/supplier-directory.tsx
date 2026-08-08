import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface Supplier {
  name: string
  capabilities: string[]
  certifications: string[]
  icvScore: string
}

const suppliers: Supplier[] = []

export function SupplierDirectory() {
  if (suppliers.length === 0) {
    return (
      <div className="flex min-h-[400px] animate-in flex-col items-center justify-center rounded-md border border-dashed p-8 text-center fade-in-50">
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
          <h2 className="mt-4 font-heading text-xl font-semibold tracking-wider uppercase">
            No Suppliers Listed
          </h2>
          <p className="mt-2 mb-4 text-sm text-muted-foreground">
            The supplier index is currently empty.{" "}
            {"{{VERIFY: supplier list needed}}"}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Supplier</TableHead>
            <TableHead>Capabilities</TableHead>
            <TableHead>Certifications</TableHead>
            <TableHead className="text-right">ICV Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier.name}>
              <TableCell className="font-medium">{supplier.name}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {supplier.capabilities.map((cap) => (
                    <Badge
                      key={cap}
                      variant="secondary"
                      className="font-mono tabular-nums"
                    >
                      {cap}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {supplier.certifications.map((cert) => (
                    <Badge
                      key={cert}
                      variant="outline"
                      className="font-mono tabular-nums"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-right font-mono tabular-nums">
                {supplier.icvScore}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
