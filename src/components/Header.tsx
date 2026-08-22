'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { NAV_LINKS } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleGetApp = () => {
    trackEvent('get_app_click');
    const el = document.getElementById('download-cta');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="planB home">
            <AppLogo size={36} />
            <span className="font-display text-xl font-semibold text-foreground tracking-tight">
              plan<span className="text-primary">B</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleGetApp}
              className="bg-brand-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-brand"
              aria-label="Get the planB app"
            >
              Get the App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} className="text-foreground" />
          </button>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-0 z-40 mobile-menu-overlay bg-background/96 flex flex-col pt-20"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col px-6 pt-8 gap-2">
            {NAV_LINKS?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-4 text-lg font-medium text-foreground border-b border-border hover:text-primary transition-colors"
              >
                {link?.label}
                <Icon name="ChevronRightIcon" size={18} className="text-muted-foreground" />
              </Link>
            ))}
            <div className="mt-8">
              <button
                onClick={handleGetApp}
                className="w-full bg-brand-gradient text-primary-foreground py-4 rounded-2xl text-base font-semibold shadow-brand"
              >
                Get the App
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}