import React from 'react';

export default function SafetyHero() {
  return (
    <section
      className="relative min-h-[55vh] flex items-end pb-16 pt-32 overflow-hidden bg-foreground"
      aria-labelledby="safety-page-heading"
    >
      {/* Atmospheric depth */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] blob-primary opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] blob-coral opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-lg" aria-hidden="true">🛡️</span>
            <span className="text-sm font-medium text-white">Safety Guide</span>
          </div>
          <h1
            id="safety-page-heading"
            className="font-display display-lg text-white mb-6"
          >
            Meeting someone new should feel{' '}
            <span className="italic text-gradient">exciting</span>
            —and safe.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            We&rsquo;ve built planB with your safety as a foundation. Here&rsquo;s everything you need to know about how we protect you — and how you can protect yourself.
          </p>
        </div>
      </div>
    </section>
  );
}