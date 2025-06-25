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
    <div className={`mb-8 ${className}`}>
      <div className="flex-1 min-w-0">
        <div className="font-bold leading-tight sm:leading-snug mb-2 block text-lg md:text-2xl text-black">
          {TitleComponent}
        </div>
        <div className="text-foreground/80 text-sm">
          {authors}. <span className="italic">{journal}. {date}</span>
        </div>
        {studyType && (
          <span className="inline-block px-3 py-0.5 rounded-full bg-neutral-200 text-black border border-neutral-300 text-xs font-medium w-auto max-w-max mt-2">
            {studyType}
          </span>
        )}
      </div>
    </div>
  );
} 