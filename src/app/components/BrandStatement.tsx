import React from 'react';

export default function BrandStatement() {
  return (
    <section className="py-20 sm:py-32 bg-soft-orange overflow-hidden" aria-labelledby="brand-statement">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Atmospheric depth */}
        <div className="relative" aria-hidden="true">
          <div className="absolute inset-0 blob-primary opacity-30 scale-150 pointer-events-none" />
        </div>

        <div className="relative scroll-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">Your next plan</p>
          <h2
            id="brand-statement"
            className="font-display display-xl text-foreground mb-8 leading-tight"
          >
            Your next connection
            <br />
            could be one{' '}
            <span className="italic text-gradient">plan</span>{' '}
            away.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-lg sm:text-xl font-display text-muted-foreground mb-10">
            <span>Coffee.</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-primary" aria-hidden="true" />
            <span>A game.</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-primary" aria-hidden="true" />
            <span>A conversation.</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-primary" aria-hidden="true" />
            <span>An adventure.</span>
          </div>

          <p className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
            Start somewhere.
          </p>
        </div>
      </div>
    </section>
  );
}