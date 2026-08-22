import React from 'react';

export default function HowItWorksHero() {
  return (
    <section
      className="relative min-h-[50vh] flex items-end pb-16 pt-32 overflow-hidden bg-background"
      aria-labelledby="hiw-page-heading"
    >
      {/* Atmospheric depth */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] blob-primary opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] blob-coral opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">The journey</p>
        <h1
          id="hiw-page-heading"
          className="font-display display-lg text-foreground max-w-3xl mb-6"
        >
          From &ldquo;I want to&hellip;&rdquo;
          <br />
          to{' '}
          <span className="italic text-gradient">&ldquo;Let&rsquo;s do it.&rdquo;</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          planB is designed to take you from a thought to a real-world plan in the simplest way possible.
        </p>
      </div>
    </section>
  );
}