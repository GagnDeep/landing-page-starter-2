import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { makers } from "@/content/makers"

export function MakerTable() {
  return (
    <div className="w-full overflow-auto rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Maker</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="font-mono">Price (USD)</TableHead>
            <TableHead className="font-mono">Wait Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {makers.map((maker) => (
            <TableRow key={maker.slug}>
              <TableCell className="font-medium">{maker.name}</TableCell>
              <TableCell>{maker.location}</TableCell>
              <TableCell className="font-mono">
                {maker.basePrice.value}
              </TableCell>
              <TableCell className="font-mono">
                {maker.waitTime.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
