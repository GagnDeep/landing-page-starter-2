import Link from "next/link";
import { globalContent } from "@/content/global";

export function Footer() {
  return (
    <footer className="bg-muted py-16 md:py-24 border-t border-border mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 flex flex-col space-y-4">
            <span className="font-heading text-2xl font-semibold text-foreground">
              {globalContent.brand}
            </span>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Orchestrating world-class, luxury destination weddings with flawless precision.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-medium text-foreground text-lg">Company</h4>
            <ul className="flex flex-col space-y-2">
              {globalContent.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-medium text-foreground text-lg">Legal</h4>
            <ul className="flex flex-col space-y-2">
              {globalContent.footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-medium text-foreground text-lg">Contact</h4>
            <ul className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <li>{globalContent.address}</li>
              <li>
                <a href={`mailto:${globalContent.contactEmail}`} className="hover:text-foreground transition-colors">
                  {globalContent.contactEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${globalContent.contactPhone.replace(/\\s/g, '')}`} className="hover:text-foreground transition-colors">
                  {globalContent.contactPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {globalContent.copyright}
          </p>
          <div className="flex items-center space-x-6">
            {globalContent.footerLinks.social.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
