"use client";

import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return <ContactSection />;
} 