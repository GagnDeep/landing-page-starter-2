import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signatureSweetsShowcase } from '@/content/home';
import { images } from '@/lib/images';
import { OrganicSectionDivider } from '@/components/visuals/OrganicSectionDivider';

export function SignatureSweets() {
  // Map content items to specific images from registry
  const imageMap = [images.swissRoll, images.biscoffCake, images.rusticBread];

  return (
    <section className="w-full bg-muted/40 relative pb-24">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] text-muted/40 z-10">
        <OrganicSectionDivider className="fill-current text-muted/40" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            {signatureSweetsShowcase.heading}
          </h2>
        </div>

        {/* Home-07-SignatureSweetsShowcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureSweetsShowcase.items.map((item, index) => {
            const image = imageMap[index];
            return (
              <div key={item.name} className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Home-08-SignatureItemCard */}
                <div className="relative aspect-square w-full overflow-hidden bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{item.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">{item.description}</p>
                  <Link
                    href={item.cta.href}
                    className="inline-flex font-semibold text-primary uppercase tracking-wider text-sm hover:text-primary/80 transition-colors w-fit group-hover:underline underline-offset-4"
                  >
                    {item.cta.label} &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full translate-y-[99%] text-muted/40 z-10 rotate-180">
        <OrganicSectionDivider className="fill-current text-muted/40" />
      </div>
    </section>
  );
}
