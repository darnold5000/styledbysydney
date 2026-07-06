import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { stylistConfig } from "@/config/stylist";
import Footer from "@/components/Footer";
import StickyBookButton from "@/components/StickyBookButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(stylistConfig.siteUrl),
  title: "Hair by Sydney | Avon Indiana Stylist",
  description:
    "Book effortless color, fresh cuts, and styles you'll love with Sydney — licensed hairstylist at Bloom Studio Salon in Avon, Indiana.",
  keywords: [
    "Avon Indiana hair stylist",
    "hair stylist in Avon IN",
    "Bloom Studio Salon stylist",
    "hair color Avon Indiana",
    "balayage Avon Indiana",
    "book with Sydney",
  ],
  openGraph: {
    title: "Hair by Sydney | Avon Indiana Stylist",
    description:
      "Book effortless color, fresh cuts, and styles you'll love with Sydney at Bloom Studio Salon in Avon, Indiana.",
    url: stylistConfig.siteUrl,
    siteName: stylistConfig.brandName,
    locale: "en_US",
    type: "website",
    images: [{ url: stylistConfig.heroImage, alt: `Hair by ${stylistConfig.name}` }],
  },
  appleWebApp: {
    capable: true,
    title: stylistConfig.shortName,
    statusBarStyle: "default",
  },
  icons: {
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: stylistConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background pb-20 antialiased lg:pb-0">
        {children}
        <Footer />
        <StickyBookButton />
      </body>
    </html>
  );
}
