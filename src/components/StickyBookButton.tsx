import BookButton from "./BookButton";

export default function StickyBookButton() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-surface/95 p-3 backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <BookButton className="pointer-events-auto w-full shadow-md" />
    </div>
  );
}
