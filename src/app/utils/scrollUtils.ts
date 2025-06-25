/**
 * Scroll utility functions
 * Eliminates redundant scroll handling logic throughout the application
 */

/**
 * Smoothly scrolls to a target element
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Calculates the distance from viewport center to element center
 */
export function getDistanceFromViewportCenter(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  const viewportCenter = window.innerHeight / 2;
  const elementCenter = (rect.top + rect.bottom) / 2;
  return Math.abs(elementCenter - viewportCenter);
}

/**
 * Determines if user is near the bottom of the page
 */
export function isNearBottom(threshold: number = 100): boolean {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold;
}

/**
 * Creates a scroll handler for section tracking
 */
export function createSectionScrollHandler(
  sectionRefs: React.RefObject<HTMLElement | null>[],
  sectionIds: readonly string[],
  activeSection: string,
  setActiveSection: (section: string) => void
) {
  return () => {
    // Skip the first section (about) for activation
    const startIdx = 1; // index 1 is 'education'
    const viewportCenter = window.innerHeight / 2;
    const thresholdPercent = 0.10; // 10% of viewport height above center
    const threshold = viewportCenter - (window.innerHeight * thresholdPercent);
    // Only consider sections whose top is above the threshold
    const eligible = sectionRefs.map((ref, idx) => {
      if (idx < startIdx || !ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      return rect.top <= threshold;
    });
    // Find the last eligible section (the one furthest down but still above threshold)
    let idx = eligible.lastIndexOf(true);
    // If truly at the bottom, force last section active
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      idx = sectionRefs.length - 1;
    }
    // If none are eligible, do not set any active section
    if (idx < startIdx) return;
    if (sectionIds[idx] && sectionIds[idx] !== activeSection) {
      setActiveSection(sectionIds[idx]);
    }
  };
}

/**
 * Creates a scroll handler for hero pinning
 */
export function createHeroScrollHandler(
  heroRef: React.RefObject<HTMLDivElement | null>,
  setHeroPinned: (pinned: boolean) => void,
  setShowAnimatedText?: (show: boolean) => void
) {
  return () => {
    const hero = heroRef.current;
    if (!hero) return;
    
    const rect = hero.getBoundingClientRect();
    // If the top of the hero is above the viewport, pin the hero text
    setHeroPinned(rect.bottom <= 80);
    
    // Show animated text when hero section is even more partially out of view (earlier)
    if (setShowAnimatedText) {
      setShowAnimatedText(rect.bottom <= 250);
    }
  };
} 