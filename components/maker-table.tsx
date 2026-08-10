import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const makers = [
  {
    name: "Ayasa",
    price: "{{VERIFY: confirm by direct email to the maker}}",
    waitTime: "{{VERIFY: confirm by direct email to the maker}}",
    location: "Netherlands",
  },
  {
    name: "Yishama",
    price: "{{VERIFY: confirm by direct email to the maker}}",
    waitTime: "{{VERIFY: confirm by direct email to the maker}}",
    location: "Israel",
  },
  {
    name: "Symphonic Steel",
    price: "{{VERIFY: confirm by direct email to the maker}}",
    waitTime: "{{VERIFY: confirm by direct email to the maker}}",
    location: "USA",
  },
]

export function MakerTable() {
  return (
    <div className="w-full overflow-auto rounded-lg border">
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
            <TableRow key={maker.name}>
              <TableCell className="font-medium">{maker.name}</TableCell>
              <TableCell>{maker.location}</TableCell>
              <TableCell className="font-mono">{maker.price}</TableCell>
              <TableCell className="font-mono">{maker.waitTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
