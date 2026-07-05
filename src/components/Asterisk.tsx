type AsteriskProps = {
  className?: string;
};

/** Six-spoke asterisk motif used across the site. Decorative only. */
export default function Asterisk({ className = "size-4" }: AsteriskProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2v20M3.34 7l17.32 10M3.34 17L20.66 7"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
