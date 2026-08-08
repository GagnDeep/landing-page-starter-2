import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface MakerData {
  name: string
  location: string
  price: string
  wait: string
}

export function MakerTable({ makers }: { makers: MakerData[] }) {
  if (!makers || makers.length === 0) {
    return (
      <div className="rounded-lg border border-border p-8 text-center text-muted-foreground">
        No makers listed yet. {"{"}
        {"{"}VERIFY: verify real data from makers{"}"}
        {"}"}
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-heading text-foreground">
              Maker
            </TableHead>
            <TableHead className="font-heading text-foreground">
              Location
            </TableHead>
            <TableHead className="font-heading text-foreground">
              Base Price
            </TableHead>
            <TableHead className="font-heading text-foreground">
              Wait Time
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {makers.map((maker) => (
            <TableRow
              key={maker.name}
              className="transition-colors hover:bg-muted/50"
            >
              <TableCell className="font-medium text-foreground">
                {maker.name}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {maker.location}
              </TableCell>
              <TableCell className="font-mono text-foreground">
                {maker.price}
              </TableCell>
              <TableCell className="font-mono text-foreground">
                {maker.wait}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
