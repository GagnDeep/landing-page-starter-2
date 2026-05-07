"use client";

import Link from "next/link";
import { FadeIn } from "@/components/visuals";
import { homeContent } from "@/content/home";
import { contactContent } from "@/content/contact";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-32 pb-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-32">

            {/* Brand Column */}
            <div className="lg:col-span-1 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-heading mb-6">{homeContent.footer.brandName}</h2>
                <p className="text-background/70 font-light leading-relaxed max-w-sm">
                  {homeContent.footer.tagline}
                </p>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-1">
              <h3 className="text-sm tracking-widest uppercase text-background/50 mb-8 border-b border-background/20 pb-4">
                {homeContent.footer.exploreLabel}
              </h3>
              <ul className="space-y-4">
                {homeContent.navigation.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg font-light hover:text-background/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal / Secondary Column */}
            <div className="lg:col-span-1">
              <h3 className="text-sm tracking-widest uppercase text-background/50 mb-8 border-b border-background/20 pb-4">
                {homeContent.footer.infoLabel}
              </h3>
              <ul className="space-y-4">
                {homeContent.footer.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg font-light hover:text-background/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-1">
              <h3 className="text-sm tracking-widest uppercase text-background/50 mb-8 border-b border-background/20 pb-4">
                {homeContent.footer.directInquiriesLabel}
              </h3>
              <div className="space-y-6 text-lg font-light">
                <a
                  href={`mailto:${contactContent.directContact.email}`}
                  className="block hover:text-background/70 transition-colors"
                >
                  {contactContent.directContact.email}
                </a>
                <a
                  href={`tel:${contactContent.directContact.phone}`}
                  className="block hover:text-background/70 transition-colors"
                >
                  {contactContent.directContact.phone}
                </a>
              </div>
            </div>

          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20 text-sm tracking-widest uppercase text-background/50">
            <p>{homeContent.footer.copyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               {/* Social placeholders, can be replaced with real links if added to content later */}
              <a href="#" className="hover:text-background transition-colors">Instagram</a>
              <a href="#" className="hover:text-background transition-colors">Pinterest</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
