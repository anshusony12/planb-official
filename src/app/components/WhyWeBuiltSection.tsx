import React from 'react';
import Link from 'next/link';

const reasons = [
  { stat: '↑', label: 'Cities are getting bigger', desc: 'More people, yet harder to meet' },
  { stat: '⏱', label: 'Lives are getting busier', desc: 'Less spontaneous time for connection' },
  { stat: '🏠', label: 'People move away from home', desc: 'Their network doesn\'t come with them' },
  { stat: '💻', label: 'Work is increasingly digital', desc: 'Fewer organic social moments' },
];

export default function WhyWeBuiltSection() {
  return (
    <section className="py-20 sm:py-28 bg-soft-orange" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="scroll-reveal flex flex-col justify-between gap-8 lg:sticky lg:top-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Our reason</p>
              <h2 id="why-heading" className="font-display section-heading text-foreground mb-6">
                We&rsquo;re building for a problem people don&rsquo;t always know how to talk about.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The need for human connection hasn&rsquo;t changed. What&rsquo;s changed is how hard it&rsquo;s become to find it as an adult, in a new city, with a busy life.
              </p>
              <blockquote className="border-l-4 border-primary pl-5 py-1 mb-8">
                <p className="text-foreground font-medium leading-relaxed">
                  &ldquo;Technology shouldn&rsquo;t replace human connection. It should make it easier to find.&rdquo;
                </p>
              </blockquote>
              <Link
                href="/why-we-built-this"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read our full story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 scroll-reveal scroll-reveal-delay-2">
            {reasons?.map((reason, i) => (
              <div
                key={reason?.label}
                className="bg-card rounded-2xl p-6 border border-border shadow-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-2xl mb-3 block" aria-hidden="true">{reason?.stat}</span>
                <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{reason?.label}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{reason?.desc}</p>
              </div>
            ))}
            {/* Mission card */}
            <div className="sm:col-span-2 bg-foreground rounded-2xl p-6 border border-foreground">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our mission</p>
              <p className="text-white font-medium leading-relaxed">
                Make meaningful real-world connection easier to find.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}