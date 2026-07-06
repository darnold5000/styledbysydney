import type { ServiceIconName } from "@/components/ServiceIcons";

export type PricedService = {
  name: string;
  price: string;
  note?: string;
};

export type PricingCategory = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  services: PricedService[];
};

export const pricingDisclaimer =
  "Pricing varies by hair length, density, and time required. Quotes are available upon request.";

/** Salon menu pricing — aligned with Bloom Studio Salon service menu */
export const pricingCategories: PricingCategory[] = [
  {
    id: "color",
    title: "Color",
    description: "Highlights, balayage, root touch-ups, and vivid color.",
    icon: "color",
    services: [
      { name: "Partial Foil & Root Touch Up", price: "65+" },
      { name: "Root Touch Up", price: "60+" },
      { name: "Partial Highlight", price: "60+" },
      { name: "Mini Highlight", price: "30+" },
      { name: "Full Highlight", price: "70+" },
      { name: "Full Color", price: "65+" },
      { name: "Teasylights / Balayage", price: "75+" },
      { name: "Vivids", price: "70+" },
      { name: "Corrective Color", price: "Consultation required" },
    ],
  },
  {
    id: "haircut-style",
    title: "Haircut & Style",
    description: "Personalized cuts and styling for every age and occasion.",
    icon: "scissors",
    services: [
      { name: "Women's Haircut", price: "30+" },
      { name: "Men's Haircut", price: "20+" },
      { name: "Prince and Princess Haircut", price: "12+", note: "Ages 2–8" },
      { name: "Kings and Queens Haircut", price: "15+", note: "Ages 9–12" },
      { name: "Tweens", price: "20+", note: "Ages 12–16" },
      { name: "Bang Trim", price: "5" },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    description: "Blowouts, formal updos, and makeup for your next event.",
    icon: "bridal",
    services: [
      { name: "Blowout Style", price: "30+" },
      { name: "Thermal Style", price: "20+" },
      { name: "Updo / Formal Style", price: "70+" },
      { name: "Makeup Application", price: "50+" },
    ],
  },
];
