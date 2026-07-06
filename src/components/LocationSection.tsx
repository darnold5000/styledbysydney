import { stylistConfig } from "@/config/stylist";
import SectionHeading from "./SectionHeading";

export default function LocationSection() {
  return (
    <section id="location" className="border-t border-border bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
        <SectionHeading title="Location" />
        <div className="mt-8 rounded-2xl border border-border bg-background p-6 sm:p-8">
          <p className="font-serif text-2xl font-medium text-text">{stylistConfig.salonName}</p>
          <p className="mt-2 text-muted">{stylistConfig.location.label}</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-muted">
            {stylistConfig.location.street}
            <br />
            {stylistConfig.location.city}, {stylistConfig.location.state}{" "}
            {stylistConfig.location.zip}
          </address>
          <p className="mt-4 text-sm text-muted">{stylistConfig.location.parkingNote}</p>
          <a
            href={stylistConfig.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-semibold text-accent transition hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
