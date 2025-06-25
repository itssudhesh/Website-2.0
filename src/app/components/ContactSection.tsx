/**
 * Contact section component with form
 * Extracted from main page to eliminate redundancy and improve maintainability
 */
"use client";

import ContactForm from './ContactForm';
import { FORM_ENDPOINT } from '../constants/cvData';

export default function ContactSection() {
  return (
    <>
      {/* Contact Form Section */}
      <section id="contact-section" className="w-full flex justify-center px-2 sm:px-0 mt-27" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <div
          className="w-full max-w-5xl px-5"
          style={{ 
            background: 'transparent', 
            borderRadius: '1rem', 
            transition: 'box-shadow 0.2s', 
            padding: '0.75rem 1rem 0rem 1rem', 
            boxShadow: 'none',
            marginBottom: 0,
            paddingBottom: 0
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 
              className="text-2xl md:text-4xl font-bold tracking-tight uppercase flex items-center gap-3"
              style={{ color: '#000' }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle"><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
              CONTACT
            </h2>
          </div>
          
          <ContactForm endpoint={FORM_ENDPOINT} />
        </div>
      </section>
    </>
  );
} 