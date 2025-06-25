/**
 * Reusable IconButton component for consistent button styling
 * Eliminates redundant button styling patterns throughout the app
 */
interface IconButtonProps {
  /** Icon to display (SVG element) */
  children: React.ReactNode;
  /** Click handler function */
  onClick?: () => void;
  /** Accessibility label for screen readers */
  'aria-label': string;
  /** Optional href for link buttons */
  href?: string;
  /** Optional target for external links */
  target?: string;
  /** Optional rel attribute for security */
  rel?: string;
  /** Additional CSS classes */
  className?: string;
}

export default function IconButton({
  children,
  onClick,
  'aria-label': ariaLabel,
  href,
  target,
  rel,
  className = ''
}: IconButtonProps) {
  const baseClasses = "flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-none outline-none focus:outline-none hover:opacity-80 transition-opacity";
  const combinedClasses = `${baseClasses} ${className}`;

  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={combinedClasses}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={combinedClasses}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </button>
  );
} 