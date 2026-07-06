import { stylistConfig } from "@/config/stylist";
import BookButton from "./BookButton";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    label: "Book Appointment",
    href: stylistConfig.bookingUrl,
    external: true,
  },
  {
    label: `Text ${stylistConfig.name}`,
    href: stylistConfig.smsHref,
    external: false,
  },
  {
    label: "Instagram",
    href: stylistConfig.instagram,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${stylistConfig.email}`,
    external: false,
  },
] as const;

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
        <SectionHeading
          title="Contact"
          description="The fastest way to get on the calendar is to book online."
        />
        <div className="mt-8">
          <BookButton size="large" />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {contactLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted">
          <a href={stylistConfig.phoneHref} className="font-medium text-accent hover:underline">
            {stylistConfig.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
