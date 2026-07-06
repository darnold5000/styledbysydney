import type { MetadataRoute } from "next";
import { stylistConfig } from "@/config/stylist";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: stylistConfig.brandName,
    short_name: stylistConfig.shortName,
    description: stylistConfig.tagline,
    start_url: "/",
    display: "standalone",
    background_color: stylistConfig.backgroundColor,
    theme_color: stylistConfig.themeColor,
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
