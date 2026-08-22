import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Community Guidelines — planB',
  description: 'planB Community Guidelines. How we expect everyone to behave so that planB remains a safe, welcoming space for real-world connection.',
  alternates: { canonical: '/community-guidelines' },
};

const dos = [
  {
    icon: '✅',
    title: 'Be genuine',
    description: 'Use your real identity and honest intentions. planB works because people trust each other. Don\'t misrepresent who you are or what you want to do.',
  },
  {
    icon: '✅',
    title: 'Be respectful',
    description: 'Treat every person on planB the way you\'d want to be treated. Differences in background, culture, gender, or lifestyle are to be respected, not judged.',
  },
  {
    icon: '✅',
    title: 'Be clear about your intentions',
    description: 'When you post an activity or reach out to someone, be honest about what you\'re looking for. Clear intentions make for better connections.',
  },
  {
    icon: '✅',
    title: 'Meet safely',
    description: 'When meeting someone in real life, choose public places, let someone know where you\'re going, and trust your instincts. Read our Safety Guide for more.',
  },
  {
    icon: '✅',
    title: 'Report concerns',
    description: 'If you see behaviour that violates these guidelines, please report it. Your reports help keep planB safe for everyone.',
  },
];

const donts = [
  {
    icon: '🚫',
    title: 'No harassment or abuse',
    description: 'Harassment, bullying, threats, hate speech, or any form of abusive behaviour will result in immediate account suspension. This includes unwanted sexual advances or messages.',
  },
  {
    icon: '🚫',
    title: 'No fake profiles or impersonation',
    description: 'Don\'t create fake accounts, use someone else\'s photos, or pretend to be someone you\'re not. Authenticity is the foundation of planB.',
  },
  {
    icon: '🚫',
    title: 'No spam or commercial solicitation',
    description: 'planB is not a platform for advertising, selling products, or recruiting for businesses. Don\'t send unsolicited commercial messages to other users.',
  },
  {
    icon: '🚫',
    title: 'No illegal activity',
    description: 'Don\'t use planB to facilitate, promote, or engage in any illegal activity. This includes but is not limited to fraud, trafficking, drug distribution, or any other criminal conduct.',
  },
  {
    icon: '🚫',
    title: 'No inappropriate content',
    description: 'Don\'t post or share explicit, offensive, or inappropriate content. This includes sexually explicit material, graphic violence, or content that demeans or dehumanises others.',
  },
  {
    icon: '🚫',
    title: 'No data harvesting',
    description: 'Don\'t collect, store, or use other users\' personal information without their explicit consent. Respect people\'s privacy.',
  },
];

const enforcement = [
  {
    level: 'Warning',
    description: 'For minor or first-time violations, we may issue a warning and ask you to review these guidelines.',
    color: 'bg-warning/10 border-warning/20 text-warning',
  },
  {
    level: 'Temporary suspension',
    description: 'For repeated or more serious violations, we may temporarily suspend your account.',
    color: 'bg-error/10 border-error/20 text-error',
  },
  {
    level: 'Permanent ban',
    description: 'For severe violations — including harassment, illegal activity, or repeated offences — we will permanently remove your account.',
    color: 'bg-foreground/10 border-foreground/20 text-foreground',
  },
];

export default function CommunityGuidelinesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[50vh] flex items-end pb-16 pt-32 overflow-hidden bg-foreground"
          aria-labelledby="cg-heading"
        >
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] blob-primary opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] blob-coral opacity-15 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-lg" aria-hidden="true">🤝</span>
                <span className="text-sm font-medium text-white">Community</span>
              </div>
              <h1 id="cg-heading" className="font-display display-lg text-white mb-6">
                Community{' '}
                <span className="italic text-gradient">Guidelines</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                planB works because people treat each other with respect and honesty. These guidelines exist to make sure planB remains a safe, welcoming space for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Our community */}
        <section className="py-24 bg-background" aria-labelledby="community-intro-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center scroll-reveal">
              <h2 id="community-intro-heading" className="font-display section-heading text-foreground mb-6">
                A community built on real intentions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every person on planB is here for the same reason: to find someone to do something with. That shared intention is what makes this community special. These guidelines protect that.
              </p>
            </div>
          </div>
        </section>

        {/* The do's */}
        <section className="py-16 bg-muted/30" aria-labelledby="dos-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 scroll-reveal">
              <p className="text-sm font-semibold uppercase tracking-widest text-success mb-3">What we encourage</p>
              <h2 id="dos-heading" className="font-display section-heading text-foreground">
                How to be a great planB member
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dos.map((item, i) => (
                <div
                  key={item.title}
                  className={`scroll-reveal scroll-reveal-delay-${(i % 3) + 1} bg-card rounded-2xl p-8 border border-border`}
                >
                  <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The don'ts */}
        <section className="py-16 bg-background" aria-labelledby="donts-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 scroll-reveal">
              <p className="text-sm font-semibold uppercase tracking-widest text-error mb-3">What we don&rsquo;t allow</p>
              <h2 id="donts-heading" className="font-display section-heading text-foreground">
                Behaviour that isn&rsquo;t welcome here
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {donts.map((item, i) => (
                <div
                  key={item.title}
                  className={`scroll-reveal scroll-reveal-delay-${(i % 3) + 1} bg-card rounded-2xl p-8 border border-border`}
                >
                  <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enforcement */}
        <section className="py-24 bg-muted/30" aria-labelledby="enforcement-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 scroll-reveal">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">How we respond</p>
                <h2 id="enforcement-heading" className="font-display section-heading text-foreground">
                  Guideline enforcement
                </h2>
                <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
                  We take violations of these guidelines seriously. Depending on the nature and severity of the violation, we may take the following actions:
                </p>
              </div>
              <div className="space-y-4">
                {enforcement.map((item, i) => (
                  <div
                    key={item.level}
                    className={`scroll-reveal scroll-reveal-delay-${i + 1} bg-card rounded-2xl p-6 border border-border flex items-start gap-5`}
                  >
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${item.color} flex-shrink-0 mt-0.5`}>
                      {item.level}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section className="py-24 bg-background" aria-labelledby="reporting-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Reporting</p>
                <h2 id="reporting-heading" className="font-display section-heading text-foreground mb-6">
                  See something? Say something.
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    If you encounter behaviour that violates these guidelines, please report it. You can report any profile, post, or conversation directly within the planB app.
                  </p>
                  <p>
                    All reports are reviewed by our team. We take every report seriously and will take appropriate action. Your identity is kept confidential when you make a report.
                  </p>
                  <p>
                    For urgent safety concerns, please contact us directly at{' '}
                    <a href="mailto:hello@planb.app" className="text-primary hover:underline">hello@planb.app</a>.
                  </p>
                </div>
              </div>
              <div className="scroll-reveal scroll-reveal-delay-2 space-y-4">
                <div className="bg-soft-orange rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">How to report in the app</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Go to the profile, post, or conversation you want to report</li>
                    <li>Tap the three-dot menu or report icon</li>
                    <li>Select the reason for your report</li>
                    <li>Add any additional details that might help our team</li>
                    <li>Submit — we&rsquo;ll take it from there</li>
                  </ol>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">You can also block users</h3>
                  <p className="text-sm text-muted-foreground">
                    Blocking someone prevents them from seeing your profile or contacting you. You can block any user from their profile page. Blocked users are not notified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-foreground" aria-labelledby="cg-cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 id="cg-cta-heading" className="font-display section-heading text-white mb-6 scroll-reveal">
              Together, we make planB better
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto scroll-reveal scroll-reveal-delay-1">
              These guidelines exist because we believe in the potential of this community. When everyone plays their part, planB becomes a place where real, meaningful connections happen every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal scroll-reveal-delay-2">
              <Link
                href="/safety"
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Read the Safety Guide
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
              >
                Contact Us
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
