import Link from "next/link";
import { globalContent } from "@/content/global";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        <div className="lg:col-span-2">
          <Link href="/" className="font-heading text-3xl font-bold tracking-tight text-background inline-block mb-4">
            {globalContent.footer.brand.name}
          </Link>
          <p className="text-background/70 text-sm max-w-sm mb-8 leading-relaxed">
            {globalContent.footer.brand.tagline}
          </p>
          <div className="space-y-2 text-sm text-background/60">
            <p>{globalContent.footer.contactInfo.address}</p>
            <p>{globalContent.footer.contactInfo.phone}</p>
            <p>{globalContent.footer.contactInfo.email}</p>
          </div>
        </div>

        {globalContent.footer.sections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-background mb-6 uppercase tracking-wider text-xs">
              {section.title}
            </h4>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-background/50">
          {globalContent.footer.copyright}
        </p>
        <p className="text-xs text-background/40">
          {globalContent.footer.imageCredit}
        </p>
      </div>
    </footer>
  );
}
