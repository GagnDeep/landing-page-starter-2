import { featuresContent } from "@/content/features";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

export function ComparisonTable() {
  const { comparisonTable } = featuresContent;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="font-heading text-4xl font-bold text-center mb-16 text-foreground">
          {comparisonTable.title}
        </h2>

        <div className="bg-card rounded-[2rem] border border-border shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow className="border-border">
                {comparisonTable.headers.map((header, idx) => (
                  <TableHead key={idx} className={`py-6 font-heading font-bold text-lg ${idx === 1 ? 'text-primary' : 'text-foreground'}`}>
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonTable.rows.map((row, idx) => (
                <TableRow key={idx} className="border-border hover:bg-muted/20">
                  <TableCell className="py-5 font-semibold text-foreground/80">{row.feature}</TableCell>
                  <TableCell className="py-5 bg-primary/5 font-medium text-primary flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} size={20} className="text-primary" />
                    {row.us}
                  </TableCell>
                  <TableCell className="py-5 text-muted-foreground flex items-center gap-2">
                     <HugeiconsIcon icon={Cancel01Icon} size={18} className="opacity-50" />
                    {row.them}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
