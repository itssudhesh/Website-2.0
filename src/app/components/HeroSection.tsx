/**
 * Hero section component with particles background and typewriter effect
 * Extracted from main page to eliminate redundancy and improve maintainability
 */
"use client";

import { RefObject } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import HeroTypewriter from './HeroTypewriter';

interface HeroSectionProps {
  /** Reference to the hero section element */
  heroRef: RefObject<HTMLDivElement | null>;
  /** Whether the hero text is pinned (hidden) */
  heroPinned: boolean;
  /** Background color for particles */
  particlesBg: string;
  /** Particles initialization function */
  particlesInit: (main: Engine) => Promise<void>;
}

export default function HeroSection({
  heroRef,
  heroPinned,
  particlesBg,
  particlesInit,
}: HeroSectionProps) {
  return (
    <div 
      ref={heroRef} 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pb-0" 
      style={{ background: 'var(--background)' }}
    >
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
        .floating-comment {
          animation: float 2.5s ease-in-out infinite;
        }
        .floating-comment.paused {
          animation-play-state: paused;
        }
      `}</style>
      {/* Floating comment icon */}
      {/**
      <div
        className={`floating-comment${showInfo ? ' paused' : ''}`}
        style={{
          position: 'absolute',
          top: 'calc(50% - 100px)', // farther from hero text
          left: 'calc(50% + 280px)', // farther right from hero text
          zIndex: 20,
          cursor: 'pointer',
        }}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <CommentIcon color="#18181A" size={32} />
        {showInfo && (
          <div style={{
            position: 'absolute',
            top: -200, // move box further up from the icon
            left: 40, // to the right of the icon
            background: 'transparent', // transparent background
            color: '#18181A', // black text
            borderRadius: 8,
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            padding: '1rem 1.25rem',
            fontSize: '1rem',
            fontWeight: 400,
            maxWidth: 320,
            minWidth: 220,
            zIndex: 30,
            whiteSpace: 'normal',
          }}>
            I am a doctor who also enjoys playing chess and racquet sports. I like studying religion and philosophy. I love to explore whats new in the tech world.
          </div>
        )}
      </div>
      */}

      {/* Particles.js background */}
      <Particles
        key={particlesBg}
        id="tsparticles-hero"
        init={particlesInit}
        className="absolute inset-0 w-full h-full z-0"
        options={{
          fullScreen: false,
          background: { color: { value: particlesBg } },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: '#000' },
            shape: { type: "circle" },
            opacity: { value: 0.20 },
            size: { value: 2 },
            move: { 
              enable: true, 
              speed: 0.6, 
              direction: "none", 
              random: false, 
              straight: false, 
              outModes: { default: "out" } 
            },
            links: { 
              enable: true, 
              color: '#000', 
              opacity: 0.15,
              width: 1 
            },
          },
          detectRetina: true,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 120,
                links: { opacity: 1 },
              },
              repulse: {
                distance: 200,
                duration: 0.08,
              },
            },
          },
        }}
      />

      {/* Mobile logo above hero text, only on main page and mobile */}
      {/* Logo removed for mobile as requested */}

      {/* Mobile hero text/icons (fade out when pinned) */}
      <div 
        className={`z-10 sm:hidden ${heroPinned ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-500 flex flex-col items-center justify-center`}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '100vw',
        }}
      >
        <HeroTypewriter />
      </div>
      {/* Desktop hero text/icons (unchanged) */}
      <div 
        className={`z-10 hidden sm:flex ${heroPinned ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-500 flex-col items-center justify-center`}
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '100vw',
        }}
      >
        <HeroTypewriter />
      </div>
    </div>
  );
} 