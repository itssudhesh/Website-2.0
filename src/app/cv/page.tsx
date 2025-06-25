"use client";
import { useState, useRef, useMemo, useEffect } from 'react';
import CVSection from '../components/CVSection';
import { SECTION_IDS } from '../constants/cvData';
import { useExpandableSections } from '../hooks/useExpandableSections';
import { createSectionScrollHandler } from '../utils/scrollUtils';

export default function CVPage() {
  // Section refs
  const aboutRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const licensingRef = useRef<HTMLElement>(null);
  const clinicalRef = useRef<HTMLElement>(null);
  const publicationsRef = useRef<HTMLElement>(null);
  const presentationsRef = useRef<HTMLElement>(null);
  const extracurricularsRef = useRef<HTMLElement>(null);
  const communityRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  const sectionRefs = useMemo(() => [
    aboutRef,
    educationRef,
    licensingRef,
    clinicalRef,
    publicationsRef,
    presentationsRef,
    extracurricularsRef,
    communityRef,
    skillsRef,
  ], []);

  const [activeSection, setActiveSection] = useState('education');
  const { isExpanded, toggleSection } = useExpandableSections([
    'education',
    'clinical',
    'extracurriculars',
    'community',
  ]);

  useEffect(() => {
    let hasScrolled = false;
    const handleSectionScroll = createSectionScrollHandler(
      sectionRefs,
      SECTION_IDS,
      activeSection,
      setActiveSection
    );
    const onScroll = () => {
      if (!hasScrolled) {
        hasScrolled = true;
      }
      handleSectionScroll();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [activeSection, sectionRefs]);

  return (
    <>
      <CVSection
        sectionRefs={{
          aboutRef,
          educationRef,
          licensingRef,
          clinicalRef,
          publicationsRef,
          presentationsRef,
          extracurricularsRef,
          communityRef,
          skillsRef,
        }}
        activeSection={activeSection}
        isExpanded={isExpanded}
        toggleSection={toggleSection}
      />
    </>
  );
} 