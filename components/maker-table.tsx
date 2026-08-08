import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export interface MakerData {
  name: string
  location: string
  price: string
  wait: string
}

export function MakerTable({ makers }: { makers: MakerData[] }) {
  if (!makers || makers.length === 0) {
    return (
      <div className="rounded-[1rem] border border-border bg-card p-12 text-center shadow-sm">
        <div className="mx-auto flex max-w-sm flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <h3 className="font-heading text-xl font-medium">
            Directory Updating
          </h3>
          <p className="text-muted-foreground">
            We are actively contacting makers. No makers are listed yet. {"{"}
            {"{"}VERIFY: verify real data from makers{"}"}
            {"}"}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-[1rem] border border-border bg-card shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-border/50 hover:bg-transparent">
            <TableHead className="py-5 pl-6 font-heading font-medium text-foreground">
              Maker
            </TableHead>
            <TableHead className="py-5 font-heading font-medium text-foreground">
              Location
            </TableHead>
            <TableHead className="py-5 font-heading font-medium text-foreground">
              Base Price
            </TableHead>
            <TableHead className="py-5 pr-6 font-heading font-medium text-foreground">
              Wait Time
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {makers.map((maker) => (
            <TableRow
              key={maker.name}
              className="border-b border-border/50 transition-colors hover:bg-muted/30"
            >
              <TableCell className="py-5 pl-6 font-medium text-foreground">
                {maker.name}
              </TableCell>
              <TableCell className="py-5 text-muted-foreground">
                {maker.location}
              </TableCell>
              <TableCell className="py-5">
                <Badge
                  variant="secondary"
                  className="rounded-full border-accent/20 bg-accent/10 px-3 py-1 font-mono text-sm font-medium tracking-tight text-accent hover:bg-accent/20"
                >
                  {maker.price}
                </Badge>
              </TableCell>
              <TableCell className="py-5 pr-6 font-mono text-muted-foreground">
                {maker.wait}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
