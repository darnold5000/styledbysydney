import { stylistConfig } from "@/config/stylist";
import SectionHeading from "./SectionHeading";

export default function GallerySection() {
  return (
    <section id="gallery" className="border-t border-border bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          description="A peek at color, cuts, and styling — more photos coming soon."
        />
        {/* TODO: Replace placeholder tiles with real before/after, color, styling, and salon photos */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {stylistConfig.galleryImages.map((image, index) => (
            <div
              key={image.src}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent-soft/70 via-background to-accent-soft/30"
            >
              <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Photo {index + 1}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-muted">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
