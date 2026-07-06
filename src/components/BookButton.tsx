import { getPrimaryBookingHref, hasOnlineBooking, stylistConfig } from "@/config/stylist";

type BookButtonProps = {
  label?: string;
  className?: string;
  size?: "default" | "large";
};

export default function BookButton({
  label,
  className = "",
  size = "default",
}: BookButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-base"
      : "px-7 py-3.5 text-sm";

  const href = getPrimaryBookingHref();
  const buttonLabel =
    label ??
    (hasOnlineBooking()
      ? stylistConfig.bookingLabel
      : `Text ${stylistConfig.name}`);

  return (
    <a
      href={href}
      {...(hasOnlineBooking() ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-full bg-accent font-semibold text-white shadow-sm transition hover:bg-accent/90 ${sizeClasses} ${className}`}
    >
      {buttonLabel}
    </a>
  );
}
