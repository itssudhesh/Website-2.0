/**
 * Reusable ContactForm component with consistent styling and form handling
 * Eliminates redundant form patterns and provides centralized form state management
 */
"use client";

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  /** Form submission endpoint */
  endpoint: string;
  /** Additional CSS classes */
  className?: string;
}

export default function ContactForm({ endpoint, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  /**
   * Handles input changes for all form fields
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles form submission with error handling and status updates
   */
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.currentTarget),
      });
      
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`font-sans text-[1rem] sm:text-[1.08rem] flex flex-col gap-3 ${className}`}
      style={{ color: 'var(--foreground)' }}
    >
      <label className="text-left">
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2.5 rounded focus:outline-none font-sans text-base tracking-tight mb-2"
          style={{ background: 'transparent', color: 'var(--foreground)', border: '1px solid var(--muted)' }}
          placeholder="Name"
        />
      </label>
      
      <label className="text-left">
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2.5 rounded focus:outline-none font-sans text-base tracking-tight mb-2"
          style={{ background: 'transparent', color: 'var(--foreground)', border: '1px solid var(--muted)' }}
          placeholder="Email Address"
        />
      </label>
      
      <label className="text-left">
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          className="w-full p-2.5 rounded focus:outline-none font-sans text-base tracking-tight mb-2"
          style={{ background: 'transparent', color: 'var(--foreground)', border: '1px solid var(--muted)' }}
          rows={5}
          placeholder="Message"
        />
      </label>
      
      <button
        type="submit"
        className="w-full py-2.5 px-4 rounded font-sans text-lg tracking-widest transition-colors"
        style={{ background: 'transparent', color: 'var(--foreground)', border: '1px solid var(--muted)' }}
        disabled={formStatus === 'submitting'}
      >
        {formStatus === 'submitting' ? 'Sending...' : 'Send'}
      </button>
      
      {formStatus === 'success' && (
        <div className="text-[#A1A1AA] mt-2 text-center">Thank you! Your message has been sent.</div>
      )}
      
      {formStatus === 'error' && (
        <div className="text-[#A1A1AA] mt-2 text-center">Something went wrong. Please try again later.</div>
      )}
    </form>
  );
} 