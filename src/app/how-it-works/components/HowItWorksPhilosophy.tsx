import React from 'react';
import Link from 'next/link';

export default function HowItWorksPhilosophy() {
  return (
    <section className="py-16 sm:py-24 bg-soft-orange" aria-labelledby="hiw-philosophy-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="scroll-reveal">
          <h2 id="hiw-philosophy-heading" className="font-display section-heading text-foreground mb-6">
            Designed for real life,{' '}
            <span className="italic text-gradient">not screen time.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Every design decision in planB is made to get you off the app faster. Less infinite scroll, fewer notifications, no algorithmic feed. Just the people near you who want to do what you want to do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download-cta"
              className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white px-8 py-4 rounded-2xl font-semibold shadow-brand hover:opacity-90 transition-opacity"
            >
              Get the App
            </a>
            <Link
              href="/safety"
              className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-2xl font-semibold hover:border-primary/40 hover:bg-soft-orange transition-all"
            >
              Safety Guide
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}