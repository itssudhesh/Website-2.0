'use client';
import React, { useState, useEffect } from 'react';
import CursorDot from './CursorDot';

const CursorDotWrapper: React.FC = () => {
  const [isLarge, setIsLarge] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsLarge(window.innerWidth >= 640);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);
  if (!isLarge) return null;
  return <CursorDot />;
};

export default CursorDotWrapper; 