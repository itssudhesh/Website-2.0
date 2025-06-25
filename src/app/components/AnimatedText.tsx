/**
 * Animated text component that appears when scrolling past hero section
 * Shows "sudheshk.com" in top left and bottom right corners
 */
"use client";

interface AnimatedTextProps {
  /** Whether the text should be visible (when scrolled past hero) */
  isVisible: boolean;
}

export default function AnimatedText({ isVisible }: AnimatedTextProps) {
  return (
    <>
      {/* Top Left Banner */}
      {false && (
        <div 
          className={`hidden sm:block fixed top-0 left-0 z-50 transition-all duration-700 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0'
          }`}
        >
          <div className="vertical-banner flex items-center justify-center min-h-[220px]">
            <span className="writing-mode-vertical text-2xl font-bold tracking-wider banner-text">sudheshk.com</span>
          </div>
        </div>
      )}

      {/* Bottom Right Banner (disabled for now) */}
      {/*
      <div 
        className={`hidden sm:block fixed bottom-0 right-0 z-50 transition-all duration-700 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full opacity-0'
        }`}
      >
        <div className="vertical-banner flex items-center justify-center">
          <span className="writing-mode-vertical-reverse text-2xl font-bold tracking-wider banner-text rotate-180">sudheshk.com</span>
        </div>
      </div>
      */}
    </>
  );
} 