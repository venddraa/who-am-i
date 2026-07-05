type SectionProps = {
  id?: string;
  number?: string;
  label?: string;
  inverse?: boolean;
  children: React.ReactNode;
};

/**
 * Slide-like page section: hairline top rule, small metadata row
 * (section number + label), generous vertical whitespace.
 */
export default function Section({
  id,
  number,
  label,
  inverse = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={
        inverse
          ? "bg-ink text-inverse"
          : "border-t border-line"
      }
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        {(number || label) && (
          <div
            className={`text-meta flex items-baseline justify-between mb-12 sm:mb-16 ${
              inverse ? "text-inverse/60" : "text-muted"
            }`}
          >
            <h2 className="text-meta">{label}</h2>
            <span aria-hidden="true">{number}</span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
