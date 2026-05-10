import React from 'react';
import Image from 'next/image';
import { images } from '@/lib/images';
import { featuredCollectionsText } from '@/content/home';

export function FeaturedCollections() {
  const feedImages = [
    images.pastryDetails,
    images.doughKneading,
    images.swissRoll,
    images.rusticBread
  ];

  return (
    <section className="w-full py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{featuredCollectionsText.heading}</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">{featuredCollectionsText.subheading}</p>
        </div>

        {/* Home-16-InstagramFeedGallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {feedImages.map((img, idx) => (
            <div key={idx} className="relative aspect-square rounded-[2rem] overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
