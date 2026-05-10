import React from 'react';
import { brandTrust } from '@/content/home';
import { TextMarquee } from '@/components/visuals/TextMarquee';

export function TrustBanner() {
  return (
    <section className="w-full">
      {/* Home-05-BrandTrustBanner using the animated TextMarquee from Phase 3 */}
      <TextMarquee text={brandTrust.statement} speed={25} className="py-4 border-y border-border/50 bg-background" />
    </section>
  );
}
