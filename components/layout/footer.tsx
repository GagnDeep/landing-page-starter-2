import Link from "next/link"
import { globalContent } from "@/content/global"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background pt-32 pb-12 border-t border-border relative overflow-hidden">
      {/* Massive decorative logo watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-heading text-muted/30 select-none pointer-events-none whitespace-nowrap opacity-50">
        BAWA
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">

          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h2 className="font-heading text-3xl mb-6 text-primary">{globalContent.brand.name}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {globalContent.footer.subheading}
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-foreground/50">Contact</h3>
            <address className="not-italic text-sm text-foreground/80 flex flex-col gap-4">
              <p>{globalContent.footer.contactInfo.address}</p>
              <a href={`tel:${globalContent.footer.contactInfo.phone}`} className="hover:text-primary transition-colors">
                {globalContent.footer.contactInfo.phone}
              </a>
              <a href={`mailto:${globalContent.footer.contactInfo.email}`} className="hover:text-primary transition-colors">
                {globalContent.footer.contactInfo.email}
              </a>
            </address>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-foreground/50">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-foreground/80">
              {globalContent.footer.links.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-foreground/50">Legal</h3>
            <ul className="flex flex-col gap-4 text-sm text-foreground/80">
              {globalContent.footer.links.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {globalContent.footer.copyright.replace("{year}", currentYear.toString())}
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground tracking-widest uppercase">
            {globalContent.footer.links.social.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
