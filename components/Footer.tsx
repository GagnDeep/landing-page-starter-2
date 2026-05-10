import Link from "next/link";
import { homeContent } from "@/content/home";
import { contactContent } from "@/content/contact";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Address */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
              {homeContent.navigation.logo}
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {homeContent.hero.subheading}
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Office Location:</p>
              <p>{contactContent.contactMethods.methods.find(m => m.id === "address")?.detail}</p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">School</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                  <li><Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
                  <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Packages & Pricing</Link></li>
                  <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
                  <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Driving Tips (Blog)</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms & Conditions</Link></li>
                  <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Social</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {contactContent.socials.platforms.map((platform) => (
                    <li key={platform.name}>
                      <a href={platform.url} className="text-sm text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        {platform.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground xl:text-center">
            {homeContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
