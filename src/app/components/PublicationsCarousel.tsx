/**
 * Publications Carousel Component
 * Displays publications in a carousel format with navigation controls
 */
"use client";

import { useState, useCallback, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import PublicationItem from './PublicationItem';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  date: string;
  link?: string;
  studyType: string;
}

interface PublicationsCarouselProps {
  publications: Publication[];
  className?: string;
  isActive?: boolean;
}

export interface PublicationsCarouselHandle {
  nextSlide: () => void;
}

const PublicationsCarousel = forwardRef<PublicationsCarouselHandle, PublicationsCarouselProps>(
  function PublicationsCarousel({ publications, className = '', isActive = true }, ref) {
    // For seamless looping, we clone the first slide after the last
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const slidesCount = publications.length;
    const carouselRef = useRef<HTMLDivElement>(null);

    // Handle next slide with seamless looping
    const nextSlide = useCallback(() => {
      if (!isActive || isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, [isActive, isTransitioning]);

    useImperativeHandle(ref, () => ({ nextSlide }), [nextSlide]);

    // Handle transition end for seamless looping
    useEffect(() => {
      if (!isTransitioning) return;
      if (currentIndex === slidesCount) {
        // After animating to the cloned first slide, jump to the real first slide without animation
        const timeout = setTimeout(() => {
          setTransitionEnabled(false);
          setCurrentIndex(0);
          // Re-enable transition after jump
          setTimeout(() => {
            setTransitionEnabled(true);
            setIsTransitioning(false);
          }, 20);
        }, 800); // match transition duration
        return () => clearTimeout(timeout);
      } else {
        // Normal transition
        const timeout = setTimeout(() => setIsTransitioning(false), 500);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, slidesCount, isTransitioning]);

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
      if (!isActive || slidesCount <= 1) return;
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }, [nextSlide, slidesCount, isActive]);

    // Keyboard navigation
    useEffect(() => {
      if (!isActive) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
          nextSlide();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, isActive]);

    if (slidesCount === 0) {
      return <div className="text-center text-foreground/60">No publications available</div>;
    }

    // Prepare slides with a clone of the first at the end
    const slides = [...publications, publications[0]];

    return (
      <div className={`relative ${className}`}>
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-lg">
          <div
            ref={carouselRef}
            className="flex"
            style={{
              transition: transitionEnabled ? 'transform 500ms ease-in-out' : 'none',
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((publication, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <PublicationItem
                  title={publication.title}
                  authors={publication.authors}
                  journal={publication.journal}
                  date={publication.date}
                  link={publication.link}
                  studyType={publication.studyType}
                  className="mb-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {slidesCount > 1 && (
          <div className="flex justify-center mt-2 space-x-2">
            {publications.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setTransitionEnabled(true);
                    setCurrentIndex(index);
                  }
                }}
                disabled={isTransitioning}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === (currentIndex % slidesCount)
                    ? 'bg-foreground/80'
                    : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
                aria-label={`Go to publication ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default PublicationsCarousel; 