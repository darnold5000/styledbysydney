export type ServiceItem = {
  title: string;
  description: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  /** TODO: Replace with real before/after, color, or styling photos */
  placeholder?: boolean;
};

export const stylistConfig = {
  name: "Sydney",
  brandName: "Styled by Sydney",
  shortName: "Sydney Hair",
  headline: "Hair by Sydney",
  tagline:
    "Personalized color, cuts, and styling designed to make booking simple.",
  siteUrl: "https://bookwithsydney.com",

  salonName: "Bloom Studio Salon",
  location: {
    city: "Avon",
    state: "IN",
    label: "Avon, Indiana",
    street: "192 N Avon Ave. suite 370",
    zip: "46123",
    full: "192 N Avon Ave. suite 370, Avon, IN 46123",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=192+N+Avon+Ave+suite+370+Avon+IN+46123",
    parkingNote:
      "Located inside Bloom Studio Salon. Suite 370 — free parking available in the lot.",
  },

  /** Swap this URL for Square, GlossGenius, Vagaro, Calendly, Boulevard, Fresha, Booksy, etc. */
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://example.com/sydney-booking",
  bookingNote:
    "Use your preferred booking app or scheduler here — Square, GlossGenius, Vagaro, Calendly, and more.",

  phone: "(317) 460-3881",
  phoneHref: "tel:+13174603881",
  smsHref: "sms:+13174603881",
  email: "syney_strode@yahoo.com",
  instagram: "https://www.instagram.com/", // TODO: Add Sydney's Instagram URL

  heroImage: "/images/sydney.jpg",
  aboutImage: "/images/sydney.jpg",

  about:
    "Sydney helps clients feel confident with hair that fits their style, routine, and personality. Whether you're booking a refresh, a color service, or a full transformation, the goal is to make the experience easy from start to finish.",

  yearsExperience: "7 years",

  services: [
    {
      title: "Haircuts",
      description: "Fresh shapes and trims tailored to your hair texture and lifestyle.",
    },
    {
      title: "Color",
      description: "Custom color that enhances your natural tone and complements your skin.",
    },
    {
      title: "Highlights",
      description: "Dimension and brightness with a natural, lived-in finish.",
    },
    {
      title: "Balayage",
      description: "Soft, sun-kissed color painted for a low-maintenance grow-out.",
    },
    {
      title: "Styling",
      description: "Blowouts, event styling, and finishing touches for any occasion.",
    },
    {
      title: "Consultations",
      description: "Not sure what to book? Start with a quick consult to plan your look.",
    },
  ] satisfies ServiceItem[],

  pricingNote: "Pricing available through booking link.",

  galleryImages: [
    {
      src: "/images/gallery/placeholder-1.jpg",
      alt: "Hair color work — placeholder",
      placeholder: true,
    },
    {
      src: "/images/gallery/placeholder-2.jpg",
      alt: "Styling photo — placeholder",
      placeholder: true,
    },
    {
      src: "/images/gallery/placeholder-3.jpg",
      alt: "Salon chair photo — placeholder",
      placeholder: true,
    },
    {
      src: "/images/gallery/placeholder-4.jpg",
      alt: "Before and after — placeholder",
      placeholder: true,
    },
    {
      src: "/images/gallery/placeholder-5.jpg",
      alt: "Balayage color — placeholder",
      placeholder: true,
    },
    {
      src: "/images/gallery/placeholder-6.jpg",
      alt: "Cut and style — placeholder",
      placeholder: true,
    },
  ] satisfies GalleryImage[],

  themeColor: "#c7a27c",
  backgroundColor: "#faf7f2",

  developer: {
    name: "Signal Works",
    url: "https://hiresignalworks.com",
  },
} as const;
