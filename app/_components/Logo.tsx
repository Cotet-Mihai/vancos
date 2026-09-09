type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 34C6 19 19 6 34 6C34 21 21 34 6 34Z" fill="#F5F4F0" />
      <path d="M14 34C14 24 24 14 34 14C34 24 24 34 14 34Z" fill="currentColor" />
    </svg>
  );
}
