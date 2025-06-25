/**
 * Centralized icon components
 * Eliminates redundant SVG icon definitions throughout the application
 */

interface IconProps {
  /** Icon color */
  color?: string;
  /** Icon size */
  size?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Graduation cap icon for education section
 */
export function GraduationCapIcon({ color = "#5a5df0", size = 21, className = "", draw = false }: IconProps & { draw?: boolean }) {
  const drawProps = draw
    ? {
        style: {
          strokeDasharray: 120,
          strokeDashoffset: 120,
          animation: 'draw-svg 3.5s ease forwards',
        },
      }
    : ({} as object);
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <path d="M3 8l9-4 9 4-9 4-9-4z" {...drawProps} />
      <path d="M21 10v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6" {...drawProps} />
      <path d="M7 15v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" {...drawProps} />
    </svg>
  );
}

/**
 * Clipboard icon for licensing section
 */
export function ClipboardIcon({ color = "#f59e42", size = 21, className = "", draw = false }: IconProps & { draw?: boolean }) {
  const drawProps = draw
    ? {
        style: {
          strokeDasharray: 120,
          strokeDashoffset: 120,
          animation: 'draw-svg 3.5s ease forwards',
        },
      }
    : ({} as object);
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" {...drawProps}/>
      <path d="M9 9h6M9 13h6M9 17h6" {...drawProps}/>
    </svg>
  );
}

/**
 * Stethoscope icon for clinical section
 */
export function StethoscopeIcon({ color = "#e57373", size = 21, className = "", draw = false }: IconProps & { draw?: boolean }) {
  const drawProps = draw
    ? {
        style: {
          strokeDasharray: 120,
          strokeDashoffset: 120,
          animation: 'draw-svg 3.5s ease forwards',
        },
      }
    : ({} as object);
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <path d="M6 3v6a6 6 0 0 0 12 0V3" {...drawProps}/>
      <circle cx="18" cy="19" r="2" {...drawProps}/>
      <circle cx="6" cy="19" r="2" {...drawProps}/>
      <path d="M6 15v2a6 6 0 0 0 12 0v-2" {...drawProps}/>
    </svg>
  );
}

/**
 * Book icon for publications section
 */
export function BookIcon({ color = "#fbc02d", size = 21, className = "", draw = false }: IconProps & { draw?: boolean }) {
  const drawProps = draw
    ? {
        style: {
          strokeDasharray: 120,
          strokeDashoffset: 120,
          animation: 'draw-svg 3.5s ease forwards',
        },
      }
    : ({} as object);
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" {...drawProps}/>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20" {...drawProps}/>
      <rect x="4" y="4" width="16" height="16" rx="2" {...drawProps}/>
    </svg>
  );
}

/**
 * Megaphone icon for presentations section
 */
export function MegaphoneIcon({ color = "#42a5f5", size = 21, className = "", draw = false }: IconProps & { draw?: boolean }) {
  const drawProps = draw
    ? {
        style: {
          strokeDasharray: 120,
          strokeDashoffset: 120,
          animation: 'draw-svg 3.5s ease forwards',
        },
      }
    : ({} as object);
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <path d="M3 11v2a1 1 0 0 0 1 1h2l3 5v-6h4l3-5v6h2a1 1 0 0 0 1-1v-2" {...drawProps}/>
    </svg>
  );
}

/**
 * Lightbulb icon for extracurriculars section
 */
export function LightbulbIcon({ color = "#26a69a", size = 21, className = "", draw = false }: IconProps & { draw?: boolean }) {
  const drawProps = draw
    ? {
        style: {
          strokeDasharray: 120,
          strokeDashoffset: 120,
          animation: 'draw-svg 3.5s ease forwards',
        },
      }
    : ({} as object);
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <path d="M9 18h6" {...drawProps}/>
      <path d="M10 22h4" {...drawProps}/>
      <path d="M12 2a7 7 0 0 1 7 7c0 3.87-3.13 7-7 7s-7-3.13-7-7a7 7 0 0 1 7-7z" {...drawProps}/>
    </svg>
  );
}

/**
 * Heart icon for community section
 */
export function HeartIcon({ color = "#ff7043", size = 21, className = "", draw = false }: IconProps & { draw?: boolean }) {
  const drawProps = draw
    ? {
        style: {
          strokeDasharray: 120,
          strokeDashoffset: 120,
          animation: 'draw-svg 3.5s ease forwards',
        },
      }
    : ({} as object);
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <path d="M12 21c-4.97-4.97-8-8.13-8-11.5A5.5 5.5 0 0 1 12 4.5a5.5 5.5 0 0 1 8 5.01c0 3.37-3.03 6.53-8 11.49z" {...drawProps}/>
    </svg>
  );
}

/**
 * Settings icon for skills section
 */
export function SettingsIcon({ color = "#7e57c2", size = 21, className = "", draw = false }: IconProps & { draw?: boolean }) {
  const drawProps = draw
    ? {
        style: {
          strokeDasharray: 120,
          strokeDashoffset: 120,
          animation: 'draw-svg 3.5s ease forwards',
        },
      }
    : ({} as object);
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <circle cx="12" cy="12" r="3" {...drawProps}/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" {...drawProps}/>
    </svg>
  );
}

/**
 * Chevron down icon for expandable sections
 */
export function ChevronDownIcon({ color = "currentColor", size = 28, className = "" }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle transition-transform duration-200 ${className}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/**
 * Chevron left icon for carousel navigation
 */
export function ChevronLeftIcon({ color = "currentColor", size = 24, className = "" }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

/**
 * Chevron right icon for carousel navigation
 */
export function ChevronRightIcon({ color = "currentColor", size = 24, className = "" }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block align-middle ${className}`}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/**
 * Comment icon for floating info
 */
export function CommentIcon({ color = "currentColor", size = 28, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.0"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
} 