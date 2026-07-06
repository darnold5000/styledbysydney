import { stylistConfig } from "@/config/stylist";
import BookButton from "./BookButton";
import SectionHeading from "./SectionHeading";

export default function QuickBooking() {
  return (
    <section id="book" className="border-y border-border bg-accent-soft/25 py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
        <SectionHeading
          title="Ready to book?"
          description="Tap below to schedule your next appointment — quick and easy, every time."
        />
        <div className="mt-8">
          <BookButton label="Book Appointment" size="large" className="w-full sm:w-auto" />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted">{stylistConfig.bookingNote}</p>
      </div>
    </section>
  );
}
