import { stylistConfig } from "@/config/stylist";

type BookButtonProps = {
  label?: string;
  className?: string;
  size?: "default" | "large";
};

export default function BookButton({
  label = `Book with ${stylistConfig.name}`,
  className = "",
  size = "default",
}: BookButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-base"
      : "px-7 py-3.5 text-sm";

  return (
    <a
      href={stylistConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-accent font-semibold text-white shadow-sm transition hover:bg-accent/90 ${sizeClasses} ${className}`}
    >
      {label}
    </a>
  );
}
