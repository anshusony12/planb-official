import React from 'react';
import Link from 'next/link';

const safetyPoints = [
  { icon: '🔒', title: 'Privacy controls', desc: 'You decide what\'s visible' },
  { icon: '🛡️', title: 'Community guidelines', desc: 'Clear standards for everyone' },
  { icon: '🚫', title: 'Report & block', desc: 'Easy, immediate, effective' },
  { icon: '📍', title: 'Location privacy', desc: 'Approximate, never exact' },
];

export default function SafetyTeaser() {
  return (
    <section className="py-20 sm:py-28 bg-background" aria-labelledby="safety-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-foreground rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 blob-primary opacity-20 pointer-events-none" aria-hidden="true" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative">
            <div className="scroll-reveal">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Safety first</p>
              <h2 id="safety-heading" className="font-display section-heading text-white mb-6">
                Real connections need real trust.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Meeting someone new should feel exciting, not anxious. We&rsquo;ve built planB with safety as a foundation, not an afterthought.
              </p>
              <Link
                href="/safety"
                className="inline-flex items-center gap-2 bg-brand-gradient text-white px-6 py-3 rounded-full text-sm font-semibold shadow-brand hover:opacity-90 transition-opacity"
              >
                Learn About Safety
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {safetyPoints?.map((point) => (
                <div key={point?.title} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <span className="text-2xl mb-3 block" aria-hidden="true">{point?.icon}</span>
                  <h3 className="font-semibold text-white mb-1 text-sm">{point?.title}</h3>
                  <p className="text-xs text-white/50">{point?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}