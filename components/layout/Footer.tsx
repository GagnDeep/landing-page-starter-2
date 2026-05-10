import Link from "next/link";
import { homeContent } from "@/content/home";

export const Footer = () => {
  const { address, contact, legalLinks, copyright } = homeContent.footer;
  const { logo, links } = homeContent.navigation;

  return (
    <footer className="w-full border-t border-border bg-muted/20 py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <h3 className="font-heading font-bold text-xl text-primary">{logo}</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Building confident, safe drivers in Chandigarh through calm, methodical instruction.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <p>{address}</p>
              <p>{contact}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">{copyright}</p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
