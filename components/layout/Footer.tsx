import Link from "next/link";
import { homeContent } from "@/content/home";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function Footer() {
  return (
    <footer className="relative border-t bg-background overflow-hidden">
      <AnimatedGradientMesh className="absolute inset-0 opacity-20 -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-1">
             <Link href="/" className="font-serif text-2xl text-primary tracking-tight">
              {homeContent.navigation.logo}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {homeContent.hero.subheading}
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Explore</h3>
            <ul className="space-y-3">
              {homeContent.navigation.links.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
               <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Connect</h3>
             <ul className="space-y-3">
              {homeContent.footer.social.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">Visit the Atelier</p>
              <address className="not-italic text-sm text-foreground">
                {homeContent.location.address}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {homeContent.footer.copyright}
          </p>
          <p className="text-xs text-muted-foreground">
            Images via Unsplash. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
