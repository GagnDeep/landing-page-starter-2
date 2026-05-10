import * as React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";

export function Footer() {
  const { footer } = homeContent;

  // Dynamically extract unique credits to satisfy Unsplash requirements
  const extractCredits = () => {
    const credits = new Map<string, string>();

    // Flat map all site image credits (simplified extraction for footer)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traverse = (obj: any) => {
      for (const key in obj) {
        if (obj[key] && typeof obj[key] === "object") {
          if ("credit" in obj[key] && obj[key].credit.name) {
            credits.set(obj[key].credit.name, obj[key].credit.link);
          } else {
            traverse(obj[key]);
          }
        }
      }
    };
    traverse(siteImages);

    return Array.from(credits.entries()).map(([name, link]) => ({ name, link }));
  };

  const imageCredits = extractCredits();

  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-4 lg:col-span-5">
            <h3 className="font-heading font-semibold text-2xl mb-6 text-foreground">
              Studio Sanjay Arts
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed max-w-sm mb-8">
              {footer.description}
            </p>
            <div className="flex flex-col gap-2 font-sans text-sm text-muted-foreground">
              <a href={`mailto:${footer.contact.email}`} className="hover:text-primary transition-colors">
                {footer.contact.email}
              </a>
              <a href={`tel:${footer.contact.phone}`} className="hover:text-primary transition-colors">
                {footer.contact.phone}
              </a>
              <span>{footer.contact.address}</span>
            </div>
          </div>

          {/* Links: Explore */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-sans font-semibold tracking-wider uppercase text-foreground mb-6 text-sm">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              {footer.links.explore.map((link) => {
                const href = link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`;
                return (
                  <li key={link}>
                    <Link href={href} className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Links: Legal & Studio */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-sans font-semibold tracking-wider uppercase text-foreground mb-6 text-sm">
              Studio
            </h4>
            <ul className="flex flex-col gap-4">
              {footer.links.legal.map((link) => {
                const href = `/${link.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
                return (
                  <li key={link}>
                    <Link href={href} className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Credits */}
        <div className="pt-8 border-t border-border flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm font-sans text-center lg:text-left">
            {footer.copyright}
          </p>

          {/* Image Attribution */}
          {imageCredits.length > 0 && (
            <div className="text-xs text-muted-foreground/60 font-sans text-center lg:text-right max-w-2xl">
              Photography featured from Unsplash by:{" "}
              {imageCredits.map((credit, idx) => (
                <React.Fragment key={credit.name}>
                  <a href={credit.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">
                    {credit.name}
                  </a>
                  {idx < imageCredits.length - 1 ? ", " : "."}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
