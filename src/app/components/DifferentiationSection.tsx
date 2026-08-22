import React from 'react';

const traditional = [
  { icon: '📜', label: 'Scroll' },
  { icon: '👥', label: 'Follow' },
  { icon: '❤️', label: 'Like' },
  { icon: '📺', label: 'Consume' },
  { icon: '📣', label: 'Build an audience' },
  { icon: '📱', label: 'Stay online' },
];

const planBWay = [
  { icon: '🔍', label: 'Explore' },
  { icon: '🤝', label: 'Meet' },
  { icon: '🎯', label: 'Participate' },
  { icon: '✅', label: 'Do' },
  { icon: '👫', label: 'Find people' },
  { icon: '🌍', label: 'Connect in real life' },
];

const philosophyPoints = [
  { label: 'Intent', desc: 'What do you want to do?' },
  { label: 'Activities', desc: 'Sports, coffee, events, dates' },
  { label: 'Location', desc: 'People nearby, right now' },
  { label: 'Availability', desc: 'Who\'s free when you are' },
  { label: 'Shared interests', desc: 'Common ground to start from' },
  { label: 'Real-world interaction', desc: 'The whole point' },
];

export default function DifferentiationSection() {
  return (
    <>
      {/* Differentiation */}
      <section className="py-20 sm:py-28 bg-soft-orange overflow-hidden" aria-labelledby="diff-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="scroll-reveal mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">A different kind of app</p>
            <h2 id="diff-heading" className="font-display section-heading text-foreground">
              Less scrolling. More doing.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-12">
            {/* Traditional */}
            <div className="scroll-reveal scroll-reveal-delay-1 bg-card rounded-3xl border border-border p-6 sm:p-8 shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Traditional social media</p>
              <ul className="space-y-3" aria-label="Traditional social media actions">
                {traditional?.map((item) => (
                  <li key={item?.label} className="flex items-center gap-3">
                    <span className="text-xl opacity-60" aria-hidden="true">{item?.icon}</span>
                    <span className="text-muted-foreground line-through text-sm">{item?.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* planB */}
            <div className="scroll-reveal scroll-reveal-delay-2 bg-foreground rounded-3xl p-6 sm:p-8 shadow-brand-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">planB</p>
              <ul className="space-y-3" aria-label="planB actions">
                {planBWay?.map((item) => (
                  <li key={item?.label} className="flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">{item?.icon}</span>
                    <span className="text-white font-medium text-sm">{item?.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="scroll-reveal text-center max-w-xl mx-auto">
            <p className="text-base text-muted-foreground leading-relaxed italic">
              &ldquo;We don&rsquo;t want to help you spend more time inside an app. We want to help you spend less time inside it.&rdquo;
            </p>
          </div>
        </div>
      </section>
      {/* Philosophy */}
      <section className="py-20 sm:py-28 bg-background" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="scroll-reveal">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Our design principle</p>
              <h2 id="philosophy-heading" className="font-display section-heading text-foreground mb-6">
                Built around intention,{' '}
                <span className="italic text-gradient">not attention.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional platforms often focus on content, engagement, likes, views, followers, and time spent. More. More. More.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                planB is focused on something different.
              </p>
              <div className="bg-foreground text-white rounded-3xl p-6 sm:p-8">
                <p className="font-display text-lg sm:text-xl font-semibold leading-relaxed">
                  &ldquo;The goal isn&rsquo;t to keep you here. The goal is to help you find someone and go.&rdquo;
                </p>
              </div>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {philosophyPoints?.map((point, i) => (
                  <div
                    key={point?.label}
                    className="bg-soft-orange rounded-2xl p-5 border border-primary/10"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <h3 className="font-display text-lg font-semibold text-primary mb-1">{point?.label}</h3>
                    <p className="text-sm text-muted-foreground">{point?.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}