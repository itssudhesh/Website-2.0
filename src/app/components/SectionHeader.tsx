/**
 * Reusable SectionHeader component for consistent section styling
 * Eliminates redundant header patterns across all CV sections
 */
interface SectionHeaderProps {
  /** Section title */
  title: string;
  /** Icon to display (SVG element) */
  icon: React.ReactNode;
  /** Whether the section is expandable */
  expandable?: boolean;
  /** Current expanded state */
  expanded?: boolean;
  /** Toggle handler for expandable sections */
  onToggle?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export default function SectionHeader({
  title,
  icon,
  expandable = false,
  expanded = false,
  onToggle,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-5 ${className}`}>
      <div className="flex items-center gap-1.5 md:gap-2.5">
        {icon}
        <h2 className="text-lg md:text-xl font-bold tracking-tight">{title}</h2>
      </div>
      
      {expandable && onToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="text-sm text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
        >
          <span>{expanded ? 'Collapse' : 'Expand'}</span>
          <svg 
            className={`inline-block transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      )}
    </div>
  );
} 