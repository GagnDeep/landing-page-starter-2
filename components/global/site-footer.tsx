import Link from "next/link";
import { homeContent } from "@/content/home";

export function SiteFooter() {
  const { footer } = homeContent;

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <h3 className="font-heading text-3xl text-white mb-4">{footer.brand}</h3>
            <p className="text-lg">{footer.tagline}</p>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-4">
              {footer.links.shop.map(link => <li key={link}><Link href="/pricing" className="hover:text-white transition-colors">{link}</Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">About</h4>
            <ul className="space-y-4">
              {footer.links.about.map(link => <li key={link}><Link href="/about" className="hover:text-white transition-colors">{link}</Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4">
              {footer.links.support.map(link => <li key={link}><Link href="/faq" className="hover:text-white transition-colors">{link}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">{footer.copyright}</p>
          <div className="flex gap-6 text-sm">
            {footer.links.legal.map(link => <Link key={link} href="/terms" className="hover:text-white transition-colors">{link}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
