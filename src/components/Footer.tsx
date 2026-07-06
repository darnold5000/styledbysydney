import { stylistConfig } from "@/config/stylist";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-text px-5 py-8 text-center text-sm text-white/70 sm:px-6">
      <p>© 2026 {stylistConfig.brandName}</p>
      <p className="mt-2 text-white/45">
        Website by{" "}
        <a
          href={stylistConfig.developer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 underline decoration-white/20 underline-offset-2 transition hover:text-accent-soft hover:decoration-accent-soft"
        >
          {stylistConfig.developer.name}
        </a>
      </p>
    </footer>
  );
}
