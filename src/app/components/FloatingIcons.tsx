"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MailIcon({ size = 20, className = "", color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

export default function FloatingIcons() {
  const [hideIcons, setHideIcons] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 640) {
        setHideIcons(window.scrollY > 10);
      } else {
        setHideIcons(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top-left favicon.png logo, links to home */}
      <Link
        href="/"
        className={`fixed top-3 left-3 z-50 transition-transform duration-500 sm:block ${hideIcons ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'} pointer-events-auto w-9 h-9 sm:w-12 sm:h-12`}
      >
        <Image src="/favicon.png" alt="Logo" width={48} height={48} className="w-9 h-9 sm:w-12 sm:h-12" priority />
      </Link>
      {/* Top-right icon+label: CV or Contact depending on page */}
      {pathname === "/cv" ? (
        <Link
          href="/contact"
          className={`fixed top-3 right-3 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-md text-black font-semibold text-sm transition-transform duration-500 sm:block ${hideIcons ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
          style={{ backdropFilter: 'blur(4px)' }}
        >
          <MailIcon color="black" />
          <span className="text-black">Contact</span>
        </Link>
      ) : (
        <Link
          href="/cv"
          className={`fixed top-3 right-3 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-md text-black font-semibold text-sm transition-transform duration-500 sm:block ${hideIcons ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
          style={{ backdropFilter: 'blur(4px)' }}
        >
          <Image src="/file.svg" alt="Resume" width={20} height={20} style={{ filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }} />
          <span className="text-black">Resume</span>
        </Link>
      )}
    </>
  );
} 