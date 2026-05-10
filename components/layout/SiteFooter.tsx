import Link from "next/link"
import { homeContent } from "@/content/home"
import { CarFrontIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"

export function SiteFooter() {
  const { footer, topBar, mainNavigation } = homeContent

  return (
    <footer className="w-full bg-primary text-primary-foreground border-t border-primary/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="bg-background text-primary p-1.5 rounded-md">
                <CarFrontIcon className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-primary-foreground">
                {mainNavigation.logoText}
              </span>
            </div>
            <p className="text-primary-foreground/80 max-w-xs leading-relaxed text-sm">
              {footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-accent">Quick Links</h3>
            <ul className="space-y-2">
              {mainNavigation.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Company */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-accent">Company</h3>
            <ul className="space-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-accent">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <PhoneIcon className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{topBar.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MailIcon className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{topBar.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Azad Driving School, Burail, Sector 45, Chandigarh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            {footer.copyright}
          </p>
          <div className="text-xs text-primary-foreground/60">
            Designed for Safety and Excellence
          </div>
        </div>
      </div>
    </footer>
  )
}
