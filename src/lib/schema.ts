import { stylistConfig } from "@/config/stylist";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: stylistConfig.name,
    jobTitle: stylistConfig.title,
    worksFor: {
      "@type": "HairSalon",
      name: stylistConfig.salonName,
      address: {
        "@type": "PostalAddress",
        streetAddress: stylistConfig.location.street,
        addressLocality: stylistConfig.location.city,
        addressRegion: stylistConfig.location.state,
        postalCode: stylistConfig.location.zip,
        addressCountry: "US",
      },
    },
    url: stylistConfig.siteUrl,
    email: stylistConfig.email,
    telephone: stylistConfig.phone,
    areaServed: {
      "@type": "City",
      name: "Avon",
      containedInPlace: {
        "@type": "State",
        name: "Indiana",
      },
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: `${stylistConfig.name} at ${stylistConfig.salonName}`,
    description: stylistConfig.tagline,
    url: stylistConfig.siteUrl,
    telephone: stylistConfig.phone,
    email: stylistConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: stylistConfig.location.street,
      addressLocality: stylistConfig.location.city,
      addressRegion: stylistConfig.location.state,
      postalCode: stylistConfig.location.zip,
      addressCountry: "US",
    },
    employee: {
      "@type": "Person",
      name: stylistConfig.name,
      jobTitle: stylistConfig.title,
    },
  };
}
