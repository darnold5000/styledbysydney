import { stylistConfig } from "@/config/stylist";
import { CalendlyEmbed } from "./CalendlyEmbed";
import SectionHeading from "./SectionHeading";

export default function BookingSection() {
  return (
    <section id="book" className="scroll-mt-6 border-y border-border bg-accent-soft/25 py-12 sm:py-14">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading
          title={`Schedule with ${stylistConfig.name}`}
          description="Pick a time that works for you — booking happens right here on this page."
        />
        <div className="mt-8">
          <CalendlyEmbed url={stylistConfig.calendlyUrl} />
        </div>
        <p className="mt-5 text-center text-sm text-muted">
          Questions before you book?{" "}
          <a href={stylistConfig.smsHref} className="font-medium text-accent hover:underline">
            Text {stylistConfig.name}
          </a>{" "}
          or call{" "}
          <a href={stylistConfig.phoneHref} className="font-medium text-accent hover:underline">
            {stylistConfig.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
