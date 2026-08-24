import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import NotifyMe from './NotifyMe';

const activityPills = [
{ emoji: '🏏', label: 'Cricket' },
{ emoji: '☕', label: 'Coffee' },
{ emoji: '🎬', label: 'Movies' },
{ emoji: '🏸', label: 'Badminton' },
{ emoji: '🧭', label: 'Explore' },
{ emoji: '✈️', label: 'Travel' },
{ emoji: '🍕', label: 'Food' },
{ emoji: '🎵', label: 'Events' },
{ emoji: '🏃', label: 'Run' }];


export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20"
      aria-labelledby="hero-heading">

      {/* Atmospheric depth layers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] blob-primary rounded-full opacity-60" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] blob-coral rounded-full opacity-40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-soft-orange border border-primary/20 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-gradient animate-pulse-ring inline-block" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">Available on iOS & Android</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-display hero-headline text-foreground">

              We&rsquo;re more connected{' '}
              <span className="italic">than ever.</span>
              <br />
              <span className="text-gradient">So why do we feel</span>
              <br />
              so alone?
            </h1>

            {/* Supporting copy */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Find people nearby who actually want to do something together—play, explore, grab coffee, go on a date, or simply connect.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download-cta"
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-primary-foreground px-8 py-4 rounded-2xl text-base font-semibold shadow-brand hover:opacity-90 transition-opacity"
                aria-label="Get the planB app">

                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Get the App
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-2xl text-base font-semibold hover:border-primary/40 hover:bg-soft-orange transition-all">

                See How It Works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Coming soon note */}
            <p className="text-sm text-muted-foreground">
              🚀 Coming soon — join the waitlist below
            </p>
            {/* Notify Me */}
            <div>
              <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">Get notified at launch</p>
              <NotifyMe variant="hero" />
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex flex-col items-center lg:items-end gap-8">
            {/* Phone mockup area */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Main phone frame */}
              <div className="phone-frame bg-foreground mx-auto w-[260px] sm:w-[280px] aspect-[9/19] overflow-hidden relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-b from-foreground to-navy" />
                {/* App screenshot placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xl">B</span>
                  </div>
                  <div className="w-full space-y-2 mt-4">
                    <div className="bg-white/10 rounded-xl h-12 w-full flex items-center px-3 gap-2">
                      <span className="text-lg">🏸</span>
                      <div className="flex-1 space-y-1">
                        <div className="bg-white/20 rounded h-2 w-3/4" />
                        <div className="bg-white/10 rounded h-1.5 w-1/2" />
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl h-12 w-full flex items-center px-3 gap-2">
                      <span className="text-lg">☕</span>
                      <div className="flex-1 space-y-1">
                        <div className="bg-white/20 rounded h-2 w-2/3" />
                        <div className="bg-white/10 rounded h-1.5 w-1/3" />
                      </div>
                    </div>
                    <div className="bg-primary/30 rounded-xl h-12 w-full flex items-center px-3 gap-2 border border-primary/40">
                      <span className="text-lg">🏏</span>
                      <div className="flex-1 space-y-1">
                        <div className="bg-primary/60 rounded h-2 w-3/4" />
                        <div className="bg-primary/30 rounded h-1.5 w-1/2" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs text-center mt-2">
                    [planB app screenshot placeholder]
                  </p>
                </div>
              </div>

              {/* Floating connection card */}
              <div className="absolute -right-4 sm:-right-8 top-1/4 bg-card rounded-2xl shadow-card-hover p-3 sm:p-4 flex items-center gap-3 border border-border max-w-[160px] sm:max-w-[180px]">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_10fbfe1c7-1780430136934.png"
                    alt="Young man smiling in bright natural light, urban setting"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover" />

                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-foreground truncate">Arjun is up for</p>
                  <p className="text-xs text-primary font-medium">🏸 Badminton</p>
                </div>
              </div>

              {/* Floating match card */}
              <div className="absolute -left-4 sm:-left-8 bottom-1/4 bg-card rounded-2xl shadow-card-hover p-3 sm:p-4 border border-border max-w-[150px] sm:max-w-[170px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-success" aria-hidden="true" />
                  <p className="text-xs font-semibold text-foreground">Connection made</p>
                </div>
                <p className="text-xs text-muted-foreground">1.2 km away · tonight</p>
              </div>
            </div>

            {/* Activity pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end max-w-sm" aria-label="Available activities">
              {activityPills?.map((pill) =>
              <span
                key={pill?.label}
                className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1.5 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-soft-orange transition-all cursor-default">

                  <span aria-hidden="true">{pill?.emoji}</span>
                  {pill?.label}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-foreground" />
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
      </div>
    </section>);

}