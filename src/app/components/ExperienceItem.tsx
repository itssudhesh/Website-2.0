/**
 * Reusable ExperienceItem component for consistent experience styling
 * Eliminates redundant experience item patterns across all CV sections
 */
interface ExperienceItemProps {
  /** Organization/institution name */
  organization: string;
  /** Role/position title */
  role: string;
  /** Date range */
  dateRange: string;
  /** Optional list of achievements/responsibilities */
  achievements?: string[];
  /** Whether the item is expanded */
  expanded?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Setting of the experience */
  setting?: 'inpatient' | 'outpatient' | 'both';
  specialty?: string | string[];
  /** Optional click handler for expanding/collapsing */
  onClick?: () => void;
}

export default function ExperienceItem({
  organization,
  role,
  dateRange,
  achievements = [],
  expanded = false,
  className = '',
  specialty,
  onClick
}: ExperienceItemProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex flex-row justify-between items-start md:items-center w-full">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 leading-snug md:mb-2 md:leading-tight">
            {onClick ? (
              <span
                className="font-bold cursor-pointer hover:underline"
                onClick={onClick}
                tabIndex={0}
                role="button"
                aria-expanded={expanded}
              >
                {organization}
              </span>
            ) : (
              <span className="font-bold">{organization}</span>
            )}
          </div>
          <div className="text-foreground/80 text-sm mb-1 leading-snug md:mb-2 md:leading-tight">
            <span className="italic">{role}</span>
          </div>
          {specialty && (
            <div className="mt-1 flex flex-row flex-wrap gap-1">
              {Array.isArray(specialty)
                ? specialty.map((spec, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-neutral-200 text-black border border-neutral-300 align-middle"
                      style={{ verticalAlign: 'middle' }}
                    >
                      {spec}
                    </span>
                  ))
                : (
                    <span
                      className="inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-neutral-200 text-black border border-neutral-300 align-middle"
                      style={{ verticalAlign: 'middle' }}
                    >
                      {specialty}
                    </span>
                  )}
            </div>
          )}
        </div>
        <span className="text-foreground/60 min-w-[63px] md:min-w-[81px] text-xs md:text-sm text-right ml-4">
          {dateRange}
        </span>
      </div>
      
      {expanded && (
        <div className="mt-3">
          <ul className="list-disc ml-6 md:ml-10 mt-2 text-foreground/80 space-y-1.5 text-[14px] leading-relaxed">
            {achievements.length > 0
              ? achievements.map((achievement, index) => (
                  <li key={index} className="pl-1">{achievement}</li>
                ))
              : [0, 1, 2].map((_, idx) => (
                  <li key={idx} className="pl-1">&nbsp;</li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
} 