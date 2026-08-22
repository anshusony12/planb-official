import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why We Built This — planB',
  description: 'The story behind planB. We live among millions of people — why does meeting one still feel so difficult? Learn about the problem we set out to solve.',
  alternates: { canonical: '/why-we-built-this' },
};

const shifts = [
  {
    icon: '🏙️',
    heading: 'Cities got bigger',
    body: 'More people, more density — but paradoxically, more anonymity. You can live in a building with 200 people and not know a single name.',
  },
  {
    icon: '💼',
    heading: 'Work went remote',
    body: 'The office used to be where friendships formed by accident. When work moved home, so did the isolation.',
  },
  {
    icon: '📱',
    heading: 'Social media scaled up',
    body: 'We got better at broadcasting to hundreds of people and worse at calling one person to grab coffee.',
  },
  {
    icon: '🚀',
    heading: 'People started moving',
    body: 'New cities for new jobs. New countries for new opportunities. Every move means starting a social life from scratch.',
  },
  {
    icon: '🎓',
    heading: 'Adulthood changed the rules',
    body: 'In school, proximity created friendships automatically. As adults, we have to be intentional — and nobody taught us how.',
  },
  {
    icon: '⏰',
    heading: 'Time became scarce',
    body: 'Busy schedules, competing priorities, and the mental load of modern life make spontaneous plans feel like a luxury.',
  },
];

export default function WhyWeBuiltThisPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden bg-foreground"
          aria-labelledby="wwbt-heading"
        >
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] blob-primary opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] blob-coral opacity-15 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-lg" aria-hidden="true">💡</span>
                <span className="text-sm font-medium text-white">The origin story</span>
              </div>
              <h1
                id="wwbt-heading"
                className="font-display display-lg text-white mb-6"
              >
                We live among millions of people.
                <br />
                <span className="italic text-gradient">Why does meeting one still feel so difficult?</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                This is the question that started planB. Not a market analysis. Not a pitch deck. A genuine, personal frustration that turned into a mission.
              </p>
            </div>
          </div>
        </section>

        {/* The gap */}
        <section className="py-24 bg-background" aria-labelledby="gap-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="scroll-reveal">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The gap</p>
                <h2 id="gap-heading" className="font-display section-heading text-foreground mb-8">
                  The space between wanting to do something and having someone to do it with
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed scroll-reveal scroll-reveal-delay-1">
                <p>
                  Think about the last time you wanted to do something — catch a movie, play a sport, explore a new part of the city — and didn&rsquo;t, because you had nobody to go with.
                </p>
                <p>
                  It wasn&rsquo;t that you didn&rsquo;t want to go. It wasn&rsquo;t that you had no one in your life. It was that the right person, at the right time, with the right availability, just wasn&rsquo;t there.
                </p>
                <p>
                  That gap — between &ldquo;I want to do something&rdquo; and &ldquo;I know someone who wants to do it with me&rdquo; — is what planB is designed to close.
                </p>
              </div>

              {/* Pull quote */}
              <div className="my-16 scroll-reveal scroll-reveal-delay-2">
                <blockquote className="border-l-4 border-primary pl-8">
                  <p className="font-display text-2xl text-foreground leading-snug">
                    &ldquo;The problem isn&rsquo;t always finding something to do. Sometimes it&rsquo;s finding someone to do it with.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* The shifts */}
        <section className="py-24 bg-muted/30" aria-labelledby="shifts-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 scroll-reveal">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">What changed</p>
              <h2 id="shifts-heading" className="font-display section-heading text-foreground max-w-2xl mx-auto">
                Six shifts that made connection harder
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shifts.map((shift, i) => (
                <div
                  key={shift.heading}
                  className={`scroll-reveal scroll-reveal-delay-${(i % 3) + 1} bg-card rounded-2xl p-8 border border-border`}
                >
                  <div className="text-4xl mb-5" aria-hidden="true">{shift.icon}</div>
                  <h3 className="font-display text-xl text-foreground mb-3">{shift.heading}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{shift.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What hasn't changed */}
        <section className="py-24 bg-background" aria-labelledby="unchanged-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-reveal">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">What hasn&rsquo;t changed</p>
                <h2 id="unchanged-heading" className="font-display section-heading text-foreground mb-6">
                  The need for human connection is as strong as ever
                </h2>
                <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Despite everything that&rsquo;s changed about how we live and work, the fundamental human need to share experiences with other people hasn&rsquo;t changed at all.
                  </p>
                  <p>
                    We still want to play games with someone. We still want to explore new places with a companion. We still want to share a meal, a movie, a conversation with another person.
                  </p>
                  <p>
                    Technology has made it easier to communicate at scale. It hasn&rsquo;t made it easier to find the right person for a Tuesday evening cricket match.
                  </p>
                </div>
              </div>
              <div className="scroll-reveal scroll-reveal-delay-2 space-y-4">
                {[
                  'You don\'t need more followers. You need someone to grab coffee with.',
                  'You don\'t need a bigger network. You need one person who\'s free on Saturday.',
                  'You don\'t need a new social platform. You need a real-world plan.',
                ].map((quote, i) => (
                  <div key={i} className="bg-soft-orange rounded-2xl p-6">
                    <p className="font-display text-lg text-foreground">&ldquo;{quote}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our belief */}
        <section className="py-24 bg-foreground" aria-labelledby="belief-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6 scroll-reveal">What we believe</p>
              <h2 id="belief-heading" className="font-display display-lg text-white mb-8 scroll-reveal scroll-reveal-delay-1">
                Technology shouldn&rsquo;t replace human connection.
                <br />
                <span className="italic text-gradient">It should make it easier to find.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12 scroll-reveal scroll-reveal-delay-2">
                planB isn&rsquo;t trying to be your social network. It&rsquo;s trying to be the bridge between the digital world and the real one — the tool that helps you find someone and then gets out of the way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 scroll-reveal scroll-reveal-delay-3">
                {[
                  { label: 'Our goal', value: 'Help you find someone' },
                  { label: 'Our measure', value: 'Real-world moments' },
                  { label: 'Our promise', value: 'Get out of the way' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">{item.label}</p>
                    <p className="font-display text-xl text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background" aria-labelledby="wwbt-cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 id="wwbt-cta-heading" className="font-display section-heading text-foreground mb-6 scroll-reveal">
              Ready to find your next connection?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto scroll-reveal scroll-reveal-delay-1">
              Download planB and start discovering real-world connections around you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal scroll-reveal-delay-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Get the App
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-muted text-foreground font-semibold px-8 py-4 rounded-full hover:bg-muted/80 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  );
}
