'use client';
import React, { useEffect, useRef, useState } from 'react';

const dotSize = 10; // smaller dot

const CursorDot: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Hide dot until first mouse move
    const handleInitialPosition = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - dotSize / 2}px`;
        dotRef.current.style.top = `${e.clientY - dotSize / 2}px`;
      }
      setVisible(true);
      window.removeEventListener('mousemove', handleInitialPosition);
    };
    window.addEventListener('mousemove', handleInitialPosition);
    return () => window.removeEventListener('mousemove', handleInitialPosition);
  }, []);

  useEffect(() => {
    if (!mounted || !visible) return;
    const moveDot = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - dotSize / 2}px`;
        dotRef.current.style.top = `${e.clientY - dotSize / 2}px`;
      }
    };
    document.addEventListener('mousemove', moveDot);
    return () => document.removeEventListener('mousemove', moveDot);
  }, [mounted, visible]);

  if (!mounted || !visible) return null;

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: dotSize,
        height: dotSize,
        borderRadius: '50%',
        background: '#000', // black fill
        boxShadow: '0 0 4px 1px rgba(0,0,0,0.15)', // subtle shadow for visibility
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.1s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    />
  );
};

export default CursorDot; 