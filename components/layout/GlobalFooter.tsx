import Link from "next/link";
import { homeContent } from "@/content/home";
import { HugeiconsIcon } from "@hugeicons/react";
import { Facebook02Icon, InstagramIcon, NewTwitterIcon } from "@hugeicons/core-free-icons";

export const GlobalFooter = () => {
  const { globalFooter } = homeContent;

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="col-span-1">
            <Link href="/" className="font-heading text-2xl font-semibold tracking-wide block mb-4">
              {homeContent.globalHeader.logo}
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              {globalFooter.tagline}
            </p>
          </div>

          {/* Col 2, 3, 4 */}
          {globalFooter.sitemap.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-heading font-semibold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {globalFooter.copyright}
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <HugeiconsIcon icon={InstagramIcon} className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <HugeiconsIcon icon={Facebook02Icon} className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <HugeiconsIcon icon={NewTwitterIcon} className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
