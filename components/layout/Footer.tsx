import Link from "next/link";
import { globalFooter, footerHeadings } from "@/content/home";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, CallIcon, Mail01Icon } from "@hugeicons/core-free-icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold tracking-tight text-primary">
                {globalFooter.brand}
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              {globalFooter.description}
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">{footerHeadings.contact}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <HugeiconsIcon icon={Location01Icon} className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{globalFooter.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon icon={CallIcon} className="w-4 h-4 shrink-0" />
                <span>{globalFooter.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon icon={Mail01Icon} className="w-4 h-4 shrink-0" />
                <span>{globalFooter.email}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">{footerHeadings.legal}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">{footerHeadings.privacy}</Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">{footerHeadings.terms}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>{globalFooter.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
