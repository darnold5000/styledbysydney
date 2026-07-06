import { stylistConfig } from "@/config/stylist";
import SectionHeading from "./SectionHeading";

export default function AddToHomeScreen() {
  return (
    <section className="border-t border-border bg-accent-soft/20 py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
        <SectionHeading
          title="Save this booking page to your phone"
          description="Want quick access next time? Add this page to your phone's home screen and book with Sydney anytime."
        />
        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="font-semibold text-text">iPhone</p>
            <p className="mt-2 text-sm text-muted">Tap Share → Add to Home Screen</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="font-semibold text-text">Android</p>
            <p className="mt-2 text-sm text-muted">Tap Menu → Add to Home Screen</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted">
          Opens like a standalone app — perfect for repeat bookings with {stylistConfig.name}.
        </p>
      </div>
    </section>
  );
}
