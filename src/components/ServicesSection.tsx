"use client";

import { useEffect } from "react";
import { stylistConfig } from "@/config/stylist";
import { pricingCategories, pricingDisclaimer } from "@/data/pricing";
import BookButton from "./BookButton";
import SectionHeading from "./SectionHeading";
import ServicePricingCard from "./ServicePricingCard";

export default function ServicesSection() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const target = document.getElementById(hash);
    if (target instanceof HTMLDetailsElement) {
      target.open = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section id="services" className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services & Pricing"
          description={`${stylistConfig.name} specializes in ${stylistConfig.specialties.join(", ").toLowerCase()}. Expand a category to view pricing.`}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingCategories.map((category) => (
            <ServicePricingCard
              key={category.id}
              categoryId={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              services={category.services}
            />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">{pricingDisclaimer}</p>
        <div className="mt-8 text-center">
          <BookButton size="large" label="Book an Appointment" />
        </div>
      </div>
    </section>
  );
}
