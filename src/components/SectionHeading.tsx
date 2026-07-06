type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({ title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">{title}</h2>
      {description && <p className="mx-auto mt-3 max-w-xl text-muted">{description}</p>}
    </div>
  );
}
