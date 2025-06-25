/**
 * HeroTypewriter component for animated typewriter effect
 * Extracted from main page to eliminate redundancy and improve maintainability
 */
"use client";

import { useEffect, useState, useRef, useMemo } from 'react';

export default function HeroTypewriter() {
  const phrases = useMemo(() => ['sudheshk.com', "hi, i'm sudhesh :)"] , []);
  const [typedText, setTypedText] = useState(phrases[0]);
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<'type-out' | 'type-in-2' | 'done'>('type-out');
  const iRef = useRef(phrases[0].length);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const cursorInterval = setInterval(() => setShowCursor((c) => !c), 500);
    
    /**
     * Generates a random delay for more natural typing effect
     */
    function variableDelay(base: number, variance: number) {
      return base + Math.floor(Math.random() * variance);
    }
    
    let initialDelayDone = false;
    
    /**
     * Main typing animation loop
     */
    function typeLoop() {
      if (phase === 'type-out') {
        const phrase = phrases[0];
        if (!initialDelayDone) {
          initialDelayDone = true;
          timeout = setTimeout(typeLoop, 1200); // Delay before erasing
          return;
        }
        if (iRef.current >= 0) {
          setTypedText(phrase.slice(0, iRef.current));
          iRef.current--;
          timeout = setTimeout(typeLoop, 10); // Even faster, fixed delay for deleting
        } else {
          setTimeout(() => {
            setPhase('type-in-2');
            iRef.current = 0;
            timeout = setTimeout(typeLoop, 400);
          }, 400);
        }
      } else if (phase === 'type-in-2') {
        const phrase = phrases[1];
        if (iRef.current <= phrase.length) {
          setTypedText(phrase.slice(0, iRef.current));
          iRef.current++;
          timeout = setTimeout(typeLoop, variableDelay(150, 120));
        } else {
          setPhase('done');
        }
      }
    }
    
    if (phase !== 'done') typeLoop();
    
    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [phase, phrases]);

  return (
    <h1
      className="font-bold font-sans my-7 text-center text-[2.1rem] sm:text-[3.375rem] md:text-[3.9375rem] lg:text-[4.5rem]"
      style={{
        fontFamily: 'var(--font-geist-sans), sans-serif',
        margin: 0,
        padding: 0,
        userSelect: 'none',
        color: '#000',
        wordBreak: 'break-word',
        whiteSpace: 'normal',
      }}
    >
      {typedText}
      <span className="inline-block w-2" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </h1>
  );
} 