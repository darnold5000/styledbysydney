import Image from "next/image";
import { stylistConfig } from "@/config/stylist";
import BookButton from "./BookButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {stylistConfig.brandName}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-text sm:text-5xl lg:text-6xl">
            {stylistConfig.headline}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{stylistConfig.tagline}</p>

          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              {stylistConfig.yearsExperience} of experience
            </p>
            <h2 className="mt-4 font-serif text-2xl font-medium text-text sm:text-3xl">
              About {stylistConfig.name}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
              {stylistConfig.bio}
            </p>
          </div>

          <p className="mt-5 text-sm text-muted">
            <span className="font-medium text-text">
              {stylistConfig.name} · {stylistConfig.title}
            </span>
            <br />
            {stylistConfig.salonName} · {stylistConfig.location.label}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton size="large" />
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-4 text-base font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative order-1 mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-accent-soft/40 shadow-lg lg:sticky lg:top-8 lg:mx-0 lg:max-w-md">
          <Image
            src={stylistConfig.heroImage}
            alt={`${stylistConfig.name}, hair stylist in ${stylistConfig.location.label}`}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
        </div>
      </div>
    </section>
  );
}
