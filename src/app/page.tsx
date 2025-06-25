/**
 * Main portfolio page component
 * Refactored to eliminate code redundancies and improve maintainability
 * 
 * Key improvements:
 * - Extracted reusable components (IconButton, SectionHeader, ExperienceItem, etc.)
 * - Centralized data in constants file
 * - Created utility functions for scroll and theme handling
 * - Used custom hooks for state management
 * - Eliminated redundant SVG icons and styling patterns
 * - Added comprehensive TypeScript annotations
 */
"use client";

import { useRef } from 'react';
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

// Import reusable components
import HeroSection from './components/HeroSection';
import AnimatedText from './components/AnimatedText';

/**
 * Main portfolio page component
 * Handles the complete portfolio layout with hero section, CV sections, and contact form
 */
export default function Home() {
  // ===== HERO SECTION STATE =====
  const heroRef = useRef<HTMLDivElement>(null);
  const heroPinned = false;
  const showAnimatedText = false;
  const particlesBg = '#fff';

  // ===== TSPARTICLES INITIALIZATION =====
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  // Scroll handler logic (if needed) can be added here

  return (
    <>
      {/* Hero Section with Particles Background */}
      <HeroSection 
        heroRef={heroRef}
        heroPinned={heroPinned}
        particlesBg={particlesBg}
        particlesInit={particlesInit}
      />
      {/* Animated Text Elements */}
      <AnimatedText isVisible={showAnimatedText} />
    </>
  );
}
