/**
 * Reusable PublicationItem component for consistent publication styling
 * Eliminates redundant publication item patterns
 */
interface PublicationItemProps {
  /** Publication title */
  title: string;
  /** Authors list */
  authors: string;
  /** Journal/publication venue */
  journal: string;
  /** Publication date */
  date: string;
  /** Optional link to the full article */
  link?: string;
  /** Study type */
  studyType?: string;
  /** Additional CSS classes */
  className?: string;
}

export default function PublicationItem({
  title,
  authors,
  journal,
  date,
  link,
  studyType,
  className = ''
}: PublicationItemProps) {
  const TitleComponent = link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold !text-black hover:text-foreground/60 transition-colors duration-200 cursor-pointer text-sm md:text-base leading-tight mb-1 block"
    >
      {title}
    </a>
  ) : (
    <span className="font-bold text-black text-sm md:text-base leading-tight mb-1 block">{title}</span>
  );

  return (
    <div className={`mb-0 ${className}`}>
      <div className="flex flex-row justify-between items-start md:items-center w-full">
        <div className="flex-1 min-w-0 flex flex-col -ml-3">
          <div className="flex flex-col min-h-[64px] justify-start">
            <div className="flex items-center gap-2">
              {TitleComponent}
            </div>
            <div className="text-foreground/80 text-sm mt-1">
              {authors}. <span className="italic">{journal}. {date}</span>
            </div>
          </div>
          {studyType && (
            <span className="inline-block mt-3 px-3 py-0.5 rounded-full bg-neutral-200 text-black border border-neutral-300 text-xs font-medium w-auto max-w-max">
              {studyType}
            </span>
          )}
        </div>
      </div>
    </div>
  );
} 