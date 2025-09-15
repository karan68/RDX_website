export default function WindowsLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 23 23" fill="currentColor" className={className} aria-hidden>
      <path d="M0 2.3L10.7.8v10.2H0V2.3zm12.3-1.8L23 0v10.9H12.3V.5zM0 12h10.7v10.2L0 20.7V12zm12.3 0H23V23l-10.7-1.5V12z" />
    </svg>
  );
}
