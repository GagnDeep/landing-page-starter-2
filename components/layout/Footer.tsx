import Link from "next/link";
import { homeContent } from "@/content/home";
import { globalContent } from "@/content/global";
import { MicroIconSet } from "@/components/visuals/MicroIconSet";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <span className="font-heading text-3xl font-bold tracking-tight text-foreground block">
              {globalContent.footer.brand.logo}
            </span>
            <p className="text-muted-foreground font-sans text-sm max-w-xs leading-relaxed">
              {globalContent.footer.brand.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg">{globalContent.footer.explore.title}</h4>
            <nav className="flex flex-col space-y-3 text-sm text-muted-foreground">
              {globalContent.footer.explore.links.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg">{globalContent.footer.contact.title}</h4>
            <div className="flex flex-col space-y-3 text-sm text-muted-foreground">
              {globalContent.footer.contact.addressLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <Link href={`mailto:${globalContent.footer.contact.email}`} className="hover:text-primary transition-colors">{globalContent.footer.contact.email}</Link>
              <Link href={`tel:${globalContent.footer.contact.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{globalContent.footer.contact.phone}</Link>
            </div>
          </div>

          {/* Newsletter / Social */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg">{globalContent.footer.connect.title}</h4>
            <p className="text-sm text-muted-foreground mb-4">{globalContent.footer.connect.description}</p>
            <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={globalContent.footer.connect.placeholder}
                className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button type="submit" className="bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                {globalContent.footer.connect.button}
              </button>
            </form>
            <div className="pt-4 flex items-center gap-4 text-muted-foreground">
              <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-primary transition-colors">
                <MicroIconSet icon="sparkle" animated={false} className="w-5 h-5 stroke-current" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted-foreground font-sans">
          <p>{homeContent.footer.copyright}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {globalContent.footer.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
