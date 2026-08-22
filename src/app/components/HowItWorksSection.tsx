import React from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Post',
    description: 'Tell people what you want to do. Be specific — "cricket at 6pm in Sector 29" beats "sports."',
    emoji: '📝',
    color: 'bg-orange-50 border-orange-200',
    accentColor: 'text-primary',
  },
  {
    number: '02',
    title: 'Discover',
    description: 'Find nearby people with similar interests and intentions. Real people, real availability.',
    emoji: '🔍',
    color: 'bg-amber-50 border-amber-200',
    accentColor: 'text-accent',
  },
  {
    number: '03',
    title: 'Connect',
    description: 'Start a conversation and make a plan. No awkward "add friend" requests — just a shared intention.',
    emoji: '💬',
    color: 'bg-orange-50 border-orange-200',
    accentColor: 'text-primary',
  },
  {
    number: '04',
    title: 'Meet',
    description: 'Take the connection into the real world. This is the part that matters.',
    emoji: '🤝',
    color: 'bg-red-50 border-red-200',
    accentColor: 'text-coral',
    isHighlighted: true,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28 bg-soft-orange" id="how-it-works-preview" aria-labelledby="hiw-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Simple by design</p>
          <h2 id="hiw-heading" className="font-display section-heading text-foreground mb-4">
            Four steps. One real-world connection.
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Turn &ldquo;I want to&hellip;&rdquo; into &ldquo;Let&rsquo;s do it.&rdquo;
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps?.map((step, i) => (
            <div
              key={step?.number}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} relative rounded-3xl border p-6 sm:p-8 bg-card ${step?.isHighlighted ? 'ring-2 ring-coral/30 shadow-brand-lg' : 'shadow-card'}`}
            >
              {step?.isHighlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  The goal
                </div>
              )}
              <div className="flex items-start justify-between mb-6">
                <span className={`font-display text-4xl font-bold ${step?.accentColor} opacity-30`} aria-hidden="true">
                  {step?.number}
                </span>
                <span className="text-3xl" aria-hidden="true">{step?.emoji}</span>
              </div>
              <h3 className={`font-display text-2xl font-semibold ${step?.accentColor} mb-3`}>
                {step?.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step?.description}
              </p>
              {/* Connector arrow */}
              {i < steps?.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                  <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center shadow-card">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center scroll-reveal">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            See the full story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}