import { stylistConfig } from "@/config/stylist";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services"
          description="From everyday refreshes to full color transformations."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stylistConfig.services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <h3 className="font-serif text-xl font-medium text-text">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">{stylistConfig.pricingNote}</p>
      </div>
    </section>
  );
}
