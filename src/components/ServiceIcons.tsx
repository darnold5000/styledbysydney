type IconProps = {
  className?: string;
};

export function ColorIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c2-6 4-10 8-14s8-4 8-4-2 6-4 10-6 8-12 8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h8" />
    </svg>
  );
}

export function ScissorsIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path strokeLinecap="round" d="M8.5 7.5L20 18M8.5 16.5L20 6" />
    </svg>
  );
}

export function BridalIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-2 2-5 3-7 3 0 4 2 7 7 9 5-2 7-5 7-9-2 0-5-1-7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l1.5 1.5L15 9" />
    </svg>
  );
}

export type ServiceIconName = "color" | "scissors" | "bridal";

const iconMap = {
  color: ColorIcon,
  scissors: ScissorsIcon,
  bridal: BridalIcon,
};

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}
