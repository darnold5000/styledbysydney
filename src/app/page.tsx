import Hero from "@/components/Hero";
import BookingSection from "@/components/BookingSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
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
        <BookingSection />
        <ServicesSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
        <AddToHomeScreen />
      </main>
    </>
  );
}
