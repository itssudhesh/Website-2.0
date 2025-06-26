/**
 * CV section component containing all portfolio sections
 * Extracted from main page to eliminate redundancy and improve maintainability
 */
"use client";

import React, { RefObject, useState } from 'react';
import SectionHeader from './SectionHeader';
import ExperienceItem from './ExperienceItem';
import {
  GraduationCapIcon,
  ClipboardIcon,
  StethoscopeIcon,
  BookIcon,
  MegaphoneIcon,
  LightbulbIcon,
  HeartIcon,
  SettingsIcon,
} from '../utils/icons';
import {
  EDUCATION_DATA,
  LICENSING_DATA,
  CLINICAL_DATA,
  PUBLICATIONS_DATA,
  PRESENTATIONS_DATA,
  EXTRACURRICULARS_DATA,
  COMMUNITY_DATA,
  SKILLS_DATA
} from '../constants/cvData';
import Image from 'next/image';
import PublicationItem from './PublicationItem';

interface SectionRefs {
  aboutRef: RefObject<HTMLElement | null>;
  educationRef: RefObject<HTMLElement | null>;
  licensingRef: RefObject<HTMLElement | null>;
  clinicalRef: RefObject<HTMLElement | null>;
  publicationsRef: RefObject<HTMLElement | null>;
  presentationsRef: RefObject<HTMLElement | null>;
  extracurricularsRef: RefObject<HTMLElement | null>;
  communityRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLElement | null>;
}

interface CVSectionProps {
  /** References to all section elements */
  sectionRefs: SectionRefs;
  /** Currently active section for highlighting */
  activeSection: string;
  /** Function to check if a section is expanded */
  isExpanded: (section: string) => boolean;
  /** Function to toggle section expansion */
  toggleSection: (section: string) => void;
}

// Helper to parse dateRange for sorting (expects formats like 'May 2025', 'June 2025', 'Mar 2023', etc.)
function parseDate(dateRange: string): Date {
  // Use only the first word (month) and last word (year)
  const [month, year] = dateRange.split(' ');
  // Default to January if month is missing
  const monthIndex = month ? new Date(`${month} 1, 2000`).getMonth() : 0;
  return new Date(Number(year), monthIndex);
}

export default function CVSection({
  sectionRefs,
  activeSection,
  isExpanded,
  toggleSection,
}: CVSectionProps) {
  const iconColor = '#18181A';

  return (
    <section id="cv-section" className="w-full flex justify-center">
      <div className="w-full max-w-5xl mx-auto mt-16 px-5 py-14 rounded-2xl">
        
        {/* About Section */}
        <section
          id="about-section"
          ref={sectionRefs.aboutRef}
          className="w-full font-sans text-sm md:text-base leading-loose mb-6 md:mb-12 text-left px-0 py-0 md:px-0 md:py-0"
        >
          <div className="mb-6">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
              <Image src="/file.svg" alt="Resume Icon" width={28} height={28} style={{ filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }} />
              RESUME
            </h2>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education-section"
          ref={sectionRefs.educationRef}
          className={`cv-content-section w-full font-sans text-sm md:text-base leading-loose mb-6 md:mb-12 text-left py-2 pr-2 pl-4 md:py-3 md:pr-4 md:pl-5 rounded-xl group${activeSection === 'education' ? ' active-section' : ''}`}
        >
          <SectionHeader
            title="Education"
            icon={<GraduationCapIcon color={iconColor} draw={activeSection === 'education'} />}
            expandable={true}
            expanded={isExpanded('education')}
            onToggle={() => toggleSection('education')}
          />
          
          {EDUCATION_DATA.map((education, index) => (
            <ExperienceItem
              key={index}
              organization={education.organization}
              role={education.role}
              dateRange={education.dateRange}
              achievements={education.achievements}
              expanded={isExpanded('education')}
            />
          ))}
        </section>

        {/* Licensing Exams Section */}
        <section
          id="licensing-section"
          ref={sectionRefs.licensingRef}
          className={`cv-content-section w-full font-sans text-sm md:text-base leading-loose mb-6 md:mb-12 text-left py-2 pr-2 pl-4 md:py-3 md:pr-4 md:pl-5 rounded-xl group${activeSection === 'licensing' ? ' active-section' : ''}`}
        >
          <SectionHeader
            title="Licensing Exams"
            icon={<ClipboardIcon color={iconColor} draw={activeSection === 'licensing'} />}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mt-6">
            {["USMLE Step 1", "USMLE Step 2 CK", "USMLE Step 3"].map((stepName) => {
              const exam = LICENSING_DATA.find(e => e.exam === stepName);
              if (!exam) return null;
              return (
                <div
                  key={exam.exam}
                  className="relative border border-black/10 rounded-xl p-2 sm:p-3 flex flex-col justify-between h-full min-h-[56px] sm:min-h-[72px] group"
                >
                  <div className="flex items-center justify-between mb-2 mt-2">
                    <span className="font-bold text-black text-sm sm:text-base md:text-lg">{exam.exam}</span>
                    <span className="text-black text-base sm:text-lg md:text-xl font-extrabold border border-black/20 rounded-full px-3 sm:px-4 py-0.5 sm:py-1">{exam.score}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Clinical Experience Section */}
        <section
          id="clinical-section"
          ref={sectionRefs.clinicalRef}
          className={`cv-content-section w-full font-sans text-sm md:text-base leading-loose mb-6 md:mb-12 text-left py-2 pr-2 pl-4 md:py-3 md:pr-4 md:pl-5 rounded-xl group${activeSection === 'clinical' ? ' active-section' : ''}`}
        >
          <SectionHeader
            title="Clinical Experience"
            icon={<StethoscopeIcon color={iconColor} draw={activeSection === 'clinical'} />}
            expandable={true}
            expanded={isExpanded('clinical')}
            onToggle={() => toggleSection('clinical')}
          />
          
          {[...CLINICAL_DATA]
            .sort((a, b) => parseDate(b.dateRange).getTime() - parseDate(a.dateRange).getTime())
            .map((experience, index) => (
              <ExperienceItem
                key={index}
                organization={experience.organization}
                role={experience.role}
                dateRange={experience.dateRange}
                achievements={experience.achievements}
                expanded={isExpanded('clinical')}
                specialty={experience.specialty}
              />
            ))}
        </section>

        {/* Publications Section */}
        <section
          id="publications-section"
          ref={sectionRefs.publicationsRef}
          className={`cv-content-section w-full font-sans text-sm md:text-base leading-loose mb-6 md:mb-12 text-left py-2 pr-2 pl-4 md:py-3 md:pr-4 md:pl-5 rounded-xl group${activeSection === 'publications' ? ' active-section' : ''}`}
        >
          <div className="flex items-baseline justify-between mb-2">
            <SectionHeader
              title="Publications"
              icon={<BookIcon color={iconColor} draw={activeSection === 'publications'} />}
            />
          </div>
          <div className="space-y-6">
            {PUBLICATIONS_DATA.length === 0 ? (
              <div className="text-center text-foreground/60">No publications available</div>
            ) : (
              PUBLICATIONS_DATA.map((publication, index) => (
                <PublicationItem
                  key={index}
                  title={publication.title}
                  authors={publication.authors}
                  journal={publication.journal}
                  date={publication.date}
                  link={publication.link}
                  studyType={publication.studyType}
                />
              ))
            )}
          </div>
        </section>

        {/* Presentations Section */}
        <section
          id="presentations-section"
          ref={sectionRefs.presentationsRef}
          className={`cv-content-section w-full font-sans text-sm md:text-base leading-loose mb-6 md:mb-12 text-left py-2 pr-2 pl-4 md:py-3 md:pr-4 md:pl-5 rounded-xl group${activeSection === 'presentations' ? ' active-section' : ''}`}
        >
          <SectionHeader
            title="Presentations"
            icon={<MegaphoneIcon color={iconColor} draw={activeSection === 'presentations'} />}
          />
          
          <div className="space-y-6">
            {PRESENTATIONS_DATA.map((presentation, index) => (
                <div key={index} className="mb-8">
                  <div className="flex flex-row justify-between items-start md:items-center w-full">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <a
                          href="https://docs.google.com/presentation/d/1c8eF13AhJcg9MuWdo7115NLcCATjmghl/edit?slide=id.p1#slide=id.p1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold leading-tight sm:leading-snug mb-2 block text-left cv-link-black focus:outline-none"
                          style={{ cursor: 'pointer', fontWeight: 700 }}
                          aria-label="Open Presentation in new tab"
                        >
                          {presentation.title}
                        </a>
                      </div>
                      <div className="text-foreground/80 text-sm">
                        {presentation.authors}. <span className="italic">{presentation.venue}. {presentation.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Extracurriculars Section */}
        <section
          id="extracurriculars-section"
          ref={sectionRefs.extracurricularsRef}
          className={`cv-content-section w-full font-sans text-sm md:text-base leading-loose mb-6 md:mb-12 text-left py-2 pr-2 pl-4 md:py-3 md:pr-4 md:pl-5 rounded-xl group${activeSection === 'extracurriculars' ? ' active-section' : ''}`}
        >
          <SectionHeader
            title="Extracurriculars"
            icon={<LightbulbIcon color={iconColor} draw={activeSection === 'extracurriculars'} />}
            expandable={true}
            expanded={isExpanded('extracurriculars')}
            onToggle={() => toggleSection('extracurriculars')}
          />
          
          {EXTRACURRICULARS_DATA.map((activity, index) => (
            <ExperienceItem
              key={index}
              organization={activity.organization}
              role={activity.role}
              dateRange={activity.dateRange}
              achievements={activity.achievements}
              expanded={isExpanded('extracurriculars')}
            />
          ))}
        </section>

        {/* Community Service Section */}
        <section
          id="community-section"
          ref={sectionRefs.communityRef}
          className={`cv-content-section w-full font-sans text-sm md:text-base leading-loose mb-6 md:mb-12 text-left py-2 pr-2 pl-4 md:py-3 md:pr-4 md:pl-5 rounded-xl group${activeSection === 'community' ? ' active-section' : ''}`}
        >
          <SectionHeader
            title="Community Service"
            icon={<HeartIcon color={iconColor} draw={activeSection === 'community'} />}
            expandable={true}
            expanded={isExpanded('community')}
            onToggle={() => toggleSection('community')}
          />
          
          {COMMUNITY_DATA.map((service, index) => (
            <ExperienceItem
              key={index}
              organization={service.organization}
              role={service.role}
              dateRange={service.dateRange}
              achievements={service.achievements}
              expanded={isExpanded('community')}
            />
          ))}
        </section>

        {/* Skills Section */}
        <section
          id="skills-section"
          ref={sectionRefs.skillsRef}
          className={`cv-content-section w-full font-sans text-sm md:text-base leading-loose mb-6 md:mb-12 py-2 pr-2 pl-4 md:py-3 md:pr-4 md:pl-5 rounded-xl group${activeSection === 'skills' ? ' active-section' : ''}`}
        >
          <SectionHeader
            title="Skills"
            icon={<SettingsIcon color={iconColor} draw={activeSection === 'skills'} />}
          />
          
          <div className="ml-2 text-foreground/80 text-[15px] leading-tight md:leading-loose">
            {SKILLS_DATA}
          </div>
        </section>
        {/* Up Arrow Button */}
        <div className="w-full flex justify-center mt-2 mb-0">
          <button
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white shadow-md rounded-full p-2 hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 