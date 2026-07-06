import { stylistConfig } from "@/config/stylist";
import BookButton from "./BookButton";
import SectionHeading from "./SectionHeading";

function getContactLinks(): { label: string; href: string; external: boolean }[] {
  const links: { label: string; href: string; external: boolean }[] = [
    {
      label: `Text ${stylistConfig.name}`,
      href: stylistConfig.smsHref,
      external: false,
    },
    {
      label: "Email",
      href: `mailto:${stylistConfig.email}`,
      external: false,
    },
  ];

  if (stylistConfig.instagram) {
    links.unshift({
      label: "Instagram",
      href: stylistConfig.instagram,
      external: true,
    });
  }

  return links;
}

export default function ContactSection() {
  const contactLinks = getContactLinks();

  return (
    <section id="contact" className="py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
        <SectionHeading
          title="Contact"
          description="Prefer to reach out directly? Text, call, or email Sydney anytime."
        />
        <div className="mt-8">
          <BookButton size="large" label="Book an Appointment" />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {contactLinks.map((link) => (
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
