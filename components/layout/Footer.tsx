import { homeContent } from "@/content/home";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Using lucide for simple icons if hugeicons isn't fully set up for this

export function Footer() {
  const { footer } = homeContent;

  return (
    <footer className="bg-secondary text-secondary-foreground py-24 font-sans border-t border-border/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">

          {/* Brand Col */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-heading text-3xl text-primary">{footer.brand}</h3>
            <p className="text-secondary-foreground/70 max-w-sm">{footer.tagline}</p>

            <div className="pt-8">
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest text-primary">{footer.newsletter.heading}</h4>
              <form className="flex border-b border-secondary-foreground/20 pb-2 group focus-within:border-primary transition-colors">
                <input
                  type="email"
                  placeholder={footer.newsletter.placeholder}
                  className="bg-transparent border-none outline-none flex-grow text-sm placeholder:text-secondary-foreground/40"
                />
                <button type="submit" aria-label={footer.newsletter.cta} className="text-primary group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest text-primary">Navigation</h4>
            <ul className="space-y-4">
              {homeContent.navigation.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Contact Col */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest text-primary">Contact & Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/terms" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-secondary-foreground/10 text-xs text-secondary-foreground/40 text-center">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
