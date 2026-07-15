export type GalleryImage = {
  src: string;
  alt: string;
};

function getCalendlyUrl(): string {
  return (
    process.env.NEXT_PUBLIC_CALENDLY_MAYA_URL ??
    process.env.NEXT_PUBLIC_CALENDLY_SYDNEY_URL ??
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    ""
  );
}

export const stylistConfig = {
  name: "Maya",
  title: "Licensed Hairstylist",
  brandName: "Styled by Maya",
  shortName: "Maya Hair",
  headline: "Hair by Maya",
  tagline:
    "Creating effortless color, fresh cuts, and styles you'll love—right here in Plainfield, Indiana.",
  experienceBadge: "7+ Years Behind the Chair",
  specialtyBadges: ["Color Specialist", "Cuts & Styling", "Balayage & Highlights"] as const,
  servicesLinkLabel: "Explore Services",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bookwithmaya.com",

  salonName: "Willow & Mane",
  location: {
    city: "Plainfield",
    state: "IN",
    label: "Plainfield, Indiana",
    street: "192 N Main St. suite 370",
    zip: "46168",
    full: "192 N Main St. suite 370, Plainfield, IN 46168",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=192+N+Main+St+suite+370+Plainfield+IN+46168",
    parkingNote:
      "Located inside Willow & Mane. Suite 370 — free parking available in the lot.",
  },

  calendlyUrl: getCalendlyUrl(),
  bookingLabel: "Book with Maya",

  phone: "(463) 291-8475",
  phoneHref: "tel:+14632918475",
  smsHref: "sms:+14632918475",
  email: "maya.rivera@willowmane.com",
  instagram: "",

  heroImage: "/images/maya.jpg",
  aboutImage: "/images/maya.jpg",

  bio: [
    "Hi, I'm Maya! You'll receive personalized hair color, cuts, and styling backed by over seven years behind the chair. I knew from a young age this was the career I wanted—inspired by growing up around my mom's passion for hair.",
    "I love creating looks that fit your lifestyle while making every appointment relaxed and enjoyable. When I'm not in the salon, you'll usually find me traveling with my husband, driving my Jeep with the top off, or spending time with our two pups.",
  ] as const,

  galleryImages: [
    {
      src: "/images/gallery/before-after-1.jpg",
      alt: "Before and after — long auburn to layered cut with blonde highlights",
    },
    {
      src: "/images/gallery/before-after-2.jpg",
      alt: "Before and after — long blonde to textured chin-length bob",
    },
    {
      src: "/images/gallery/before-after-3.jpg",
      alt: "Before and after — men's cut and beard transformation",
    },
    {
      src: "/images/gallery/before-after-4.jpg",
      alt: "Before and after — brunette to ash blonde balayage with curtain bangs",
    },
    {
      src: "/images/gallery/before-after-5.jpg",
      alt: "Before and after — dark hair to shoulder-length lob with caramel highlights",
    },
    {
      src: "/images/gallery/before-after-6.jpg",
      alt: "Before and after — long dark waves to sleek chin-length bob",
    },
  ] satisfies GalleryImage[],

  themeColor: "#c7a27c",
  backgroundColor: "#faf7f2",

  developer: {
    name: "Signal Works",
    url: "https://hiresignalworks.com",
  },
} as const;
