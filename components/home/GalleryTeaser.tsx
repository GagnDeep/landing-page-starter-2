import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import Image from "next/image";

const galleryImages = [
  siteImages.liveCounters,
  siteImages.dessertBar,
  siteImages.staffUniform,
  siteImages.freshIngredients,
];

export function GalleryTeaser() {
  const { galleryTeaser } = homeContent;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          {galleryTeaser.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[1.5rem] group shadow-sm ${
                index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={galleryTeaser.imagesAlt[index]}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
