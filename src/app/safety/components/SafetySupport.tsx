import React from 'react';
import Link from 'next/link';
import { SUPPORT_EMAIL } from '@/lib/config';

export default function SafetySupport() {
  return (
    <section className="py-16 sm:py-24 bg-soft-orange" aria-labelledby="support-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="scroll-reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">We&rsquo;re here</p>
            <h2 id="support-heading" className="font-display section-heading text-foreground mb-6">
              Need help or want to report something?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you experience anything that makes you feel unsafe, uncomfortable, or unsure, please reach out. Our team takes every report seriously.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For urgent safety concerns, always contact your local emergency services first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Safety%20Report`}
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white px-6 py-3 rounded-full text-sm font-semibold shadow-brand hover:opacity-90 transition-opacity"
                aria-label="Email planB safety support"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Contact Safety Team
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:border-primary/40 transition-all"
              >
                General Contact
              </Link>
            </div>
          </div>

          {/* Right: Quick links */}
          <div className="scroll-reveal scroll-reveal-delay-2 space-y-4">
            {[
              { icon: '📋', title: 'Community Guidelines', desc: 'The full rules for using planB respectfully.', href: '/community-guidelines' },
              { icon: '🔏', title: 'Privacy Policy', desc: 'How we collect, use, and protect your data.', href: '/privacy' },
              { icon: '📄', title: 'Terms of Service', desc: 'The legal agreement between you and planB.', href: '/terms' },
            ]?.map((link) => (
              <Link
                key={link?.title}
                href={link?.href}
                className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border shadow-card hover:border-primary/40 hover:shadow-brand transition-all group"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">{link?.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{link?.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{link?.desc}</p>
                </div>
                <svg
                  className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}