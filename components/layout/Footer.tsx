import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-muted/30 pt-24 pb-8 border-t border-border">
      <div className="container mx-auto px-6">
        {/* 19. Pre-Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-heading text-xl mb-6">AURA</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium women's ethnic and western wear based in Tripuri, Patiala.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Ethnic Wear</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Western Wear</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Indo-Western</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-foreground transition-colors">Custom Stitching</Link></li>
              <li><Link href="/features" className="hover:text-foreground transition-colors">Bridal Styling</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Virtual Consultation</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Boutique Rates</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Track Order</Link></li>
            </ul>
          </div>
        </div>

        {/* 20. Global Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aura Boutique & Fashion Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
