import Hero from "@/components/Hero";
import QuickBooking from "@/components/QuickBooking";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import AddToHomeScreen from "@/components/AddToHomeScreen";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, personSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[personSchema(), localBusinessSchema()]} />
      <main>
        <Hero />
        <QuickBooking />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <LocationSection />
        <ContactSection />
        <AddToHomeScreen />
      </main>
    </>
  );
}
