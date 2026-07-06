import Image from "next/image";
import { stylistConfig } from "@/config/stylist";

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-accent-soft/40 shadow-md lg:mx-0">
          <Image
            src={stylistConfig.aboutImage}
            alt={`About ${stylistConfig.name}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            About {stylistConfig.name}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{stylistConfig.bio}</p>
          <p className="mt-4 text-sm font-medium text-accent">
            {stylistConfig.yearsExperience} of experience
          </p>
        </div>
      </div>
    </section>
  );
}
