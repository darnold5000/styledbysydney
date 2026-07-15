import Image from "next/image";
import { stylistConfig } from "@/config/stylist";
import SectionHeading from "./SectionHeading";

export default function GallerySection() {
  return (
    <section id="gallery" className="border-t border-border bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Before & After"
          description="Real transformations — color, cuts, and styling by Maya."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {stylistConfig.galleryImages.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full sm:aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
