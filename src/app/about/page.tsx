'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import Link from 'next/link';

const values = [
  {
    icon: '🤝',
    title: 'Real over digital',
    description: 'We measure success by how many real-world moments we help create — not by time spent in the app.',
  },
  {
    icon: '🔒',
    title: 'Safety first',
    description: 'Trust is the foundation of every connection. We build every feature with your safety in mind.',
  },
  {
    icon: '🌍',
    title: 'Inclusive by design',
    description: 'planB is for everyone — regardless of age, background, or social circle. Connection is a universal need.',
  },
  {
    icon: '🎯',
    title: 'Intention over attention',
    description: 'We don\'t want your attention. We want to help you find someone and go do something together.',
  },
];

const team = [
  {
    name: 'The planB Team',
    role: 'Builders of real-world connection',
    description: 'We\'re a small team of people who\'ve all felt the gap between wanting to do something and having someone to do it with. We built planB for ourselves — and for everyone who\'s ever said "I wish I had someone to go with."',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[55vh] flex items-end pb-16 pt-32 overflow-hidden bg-foreground"
          aria-labelledby="about-heading"
        >
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] blob-primary opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] blob-coral opacity-15 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-lg" aria-hidden="true">👋</span>
                <span className="text-sm font-medium text-white">About planB</span>
              </div>
              <h1
                id="about-heading"
                className="font-display display-lg text-white mb-6"
              >
                We built planB because{' '}
                <span className="italic text-gradient">we needed it too.</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                planB started with a simple observation: modern life has made it surprisingly hard to find someone to do things with — even when you&rsquo;re surrounded by people.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-background" aria-labelledby="story-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-reveal">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our story</p>
                <h2 id="story-heading" className="font-display section-heading text-foreground mb-6">
                  A problem hiding in plain sight
                </h2>
                <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    You move to a new city. You know people at work. You have contacts on your phone. But on a Saturday afternoon, when you want to catch a movie or play a game of cricket, there&rsquo;s nobody to call.
                  </p>
                  <p>
                    It&rsquo;s not that you don&rsquo;t have friends. It&rsquo;s that everyone is busy, or far away, or you don&rsquo;t know them well enough to ask. The gap between &ldquo;I want to do something&rdquo; and &ldquo;I have someone to do it with&rdquo; is wider than it should be.
                  </p>
                  <p>
                    We built planB to close that gap. Not with another social network. Not with another messaging app. But with something focused entirely on one thing: helping you find someone nearby who wants to do what you want to do.
                  </p>
                </div>
              </div>
              <div className="scroll-reveal scroll-reveal-delay-2">
                <div className="bg-soft-orange rounded-3xl p-10 space-y-6">
                  <div className="font-display text-5xl text-gradient font-bold">planB</div>
                  <p className="font-display text-2xl text-foreground leading-snug">
                    &ldquo;Find someone who wants to do what you want to do.&rdquo;
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm">
                      Our mission is simple: make meaningful real-world connection easier to find.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-muted/30" aria-labelledby="mission-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="scroll-reveal bg-card rounded-3xl p-10 border border-border">
                <div className="w-12 h-12 bg-brand-gradient rounded-2xl flex items-center justify-center mb-6" aria-hidden="true">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 id="mission-heading" className="font-display text-2xl text-foreground mb-4">Our mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Make meaningful real-world connection easier to find — for anyone, anywhere, at any stage of life.
                </p>
              </div>
              <div className="scroll-reveal scroll-reveal-delay-2 bg-foreground rounded-3xl p-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6" aria-hidden="true">
                  <span className="text-2xl">🌟</span>
                </div>
                <h2 className="font-display text-2xl text-white mb-4">Our vision</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  A world where finding your people doesn&rsquo;t have to be hard. Where &ldquo;I wish I had someone to go with&rdquo; is a problem technology can actually solve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 scroll-reveal">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">What we believe</p>
              <h2 id="values-heading" className="font-display section-heading text-foreground">
                The values behind planB
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values?.map((value, i) => (
                <div
                  key={value?.title}
                  className={`scroll-reveal scroll-reveal-delay-${i + 1} bg-card rounded-2xl p-8 border border-border card-hover`}
                >
                  <div className="text-4xl mb-5" aria-hidden="true">{value?.icon}</div>
                  <h3 className="font-display text-xl text-foreground mb-3">{value?.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-muted/30" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center scroll-reveal">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The people</p>
              <h2 id="team-heading" className="font-display section-heading text-foreground mb-6">
                Built by people who get it
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                We&rsquo;re a small, focused team. We&rsquo;ve all moved cities, started over, and felt the quiet difficulty of building a social life from scratch as an adult. planB is personal for us.
              </p>
              <div className="bg-card rounded-3xl p-10 border border-border text-left">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  &ldquo;We didn&rsquo;t build planB because we saw a market opportunity. We built it because we kept having the same conversation with people — &lsquo;I wanted to go, but I had nobody to go with.&rsquo; That sentence shouldn&rsquo;t be as common as it is. We&rsquo;re trying to change that.&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold text-foreground">The planB Team</p>
                  <p className="text-sm text-muted-foreground">Builders of real-world connection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-foreground" aria-labelledby="about-cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 id="about-cta-heading" className="font-display section-heading text-white mb-6 scroll-reveal">
              Want to know why we built this?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto scroll-reveal scroll-reveal-delay-1">
              The full story behind planB — the problem we saw, the gap we felt, and why we believe technology should bring people closer together, not further apart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal scroll-reveal-delay-2">
              <Link
                href="/why-we-built-this"
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Why We Built This
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
              >
                Get in Touch
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
