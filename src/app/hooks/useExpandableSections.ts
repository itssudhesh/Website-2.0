/**
 * Custom hook for managing expandable sections
 * Eliminates redundant state management for expandable sections
 */
import { useState } from 'react';

export function useExpandableSections(initialSections: string[] = []) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    initialSections.forEach(section => {
      initial[section] = false;
    });
    return initial;
  });

  /**
   * Toggles the expanded state of a section
   */
  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  /**
   * Checks if a section is expanded
   */
  const isExpanded = (sectionName: string): boolean => {
    return expandedSections[sectionName] || false;
  };

  /**
   * Expands all sections
   */
  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    Object.keys(expandedSections).forEach(section => {
      allExpanded[section] = true;
    });
    setExpandedSections(allExpanded);
  };

  /**
   * Collapses all sections
   */
  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    Object.keys(expandedSections).forEach(section => {
      allCollapsed[section] = false;
    });
    setExpandedSections(allCollapsed);
  };

  return {
    expandedSections,
    toggleSection,
    isExpanded,
    expandAll,
    collapseAll
  };
} 