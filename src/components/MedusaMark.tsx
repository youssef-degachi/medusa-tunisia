type Props = {
  className?: string;
  title?: string;
};

/** The house mark: a single coiled serpent, drawn as one continuous line. */
export function MedusaMark({ className = "h-8 w-8", title }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path
        d="M24 8 C33 8 39 16 37 25 C35 33 26 37 19 32 C13 28 12 20 18 16.5 C22.5 14 27 16.5 26.5 21"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="24" cy="10.5" r="1.15" fill="currentColor" />
      <path d="M24 5 L21.5 1 M24 5 L26.5 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
