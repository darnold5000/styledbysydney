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

function getBookingUrl(): string {
  return (
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    process.env.NEXT_PUBLIC_CALENDLY_SYDNEY_URL ??
    ""
  );
}

export const stylistConfig = {
  name: "Sydney",
  title: "Hairstylist",
  brandName: "Styled by Sydney",
  shortName: "Sydney Hair",
  headline: "Hair by Sydney",
  tagline:
    "Personalized color, cuts, and styling at Bloom Studio Salon in Avon, Indiana.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bookwithsydney.com",

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

  bookingUrl: getBookingUrl(),
  bookingLabel: "Book with Sydney",
  bookingNote:
    "Schedule online through Calendly. You can also call or text Sydney if you have questions before booking.",

  phone: "(317) 460-3881",
  phoneHref: "tel:+13174603881",
  smsHref: "sms:+13174603881",
  email: "syney_strode@yahoo.com",
  instagram: "",

  heroImage: "/images/sydney.jpg",
  aboutImage: "/images/sydney.jpg",

  bio: "My name is Sydney. I've been in the hair industry for 7 years now. I grew up with a mom that loved doing hair, so I've known since I was young that this was the career path for me. I am recently married and in our free time you can find us traveling, riding around with my jeep top off, or playing in the backyard with our two pups.",

  yearsExperience: "7 years",
  specialties: ["Color", "Cuts", "Styling"] as const,

  services: [
    {
      title: "Color",
      description:
        "Custom color services tailored to your hair goals — from refreshes to full transformations.",
    },
    {
      title: "Cuts",
      description:
        "Personalized haircuts shaped for your texture, lifestyle, and how you like to wear your hair.",
    },
    {
      title: "Styling",
      description:
        "Blowouts, finishing, and styling for everyday polish or your next special occasion.",
    },
  ] satisfies ServiceItem[],

  pricingNote: "Pricing available when you book online.",

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
      alt: "Color and cut — placeholder",
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

export function getPrimaryBookingHref(): string {
  return stylistConfig.bookingUrl || stylistConfig.smsHref;
}

export function hasOnlineBooking(): boolean {
  return Boolean(stylistConfig.bookingUrl);
}
