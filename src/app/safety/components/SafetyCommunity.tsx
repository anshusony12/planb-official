'use client';
import React, { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

const communityStandards = [
  {
    title: 'Be honest',
    description: 'Use your real identity. Don\'t misrepresent yourself, your intentions, or your plans.',
    icon: '✅',
  },
  {
    title: 'Be respectful',
    description: 'Treat everyone with basic human decency. Harassment, discrimination, and abuse are not tolerated.',
    icon: '🤝',
  },
  {
    title: 'Be safe',
    description: 'Don\'t share content or engage in behaviour that could put yourself or others at risk.',
    icon: '🛡️',
  },
  {
    title: 'Be genuine',
    description: 'planB is for real people who want to do real things together. No spam, no fake accounts, no manipulation.',
    icon: '💯',
  },
];

const faqItems = [
  {
    q: 'How do I report someone?',
    a: 'You can report any user or post directly from their profile or post. Tap the three-dot menu and select "Report." Our team reviews all reports and takes appropriate action. [Feature availability subject to app launch]',
  },
  {
    q: 'How do I block someone?',
    a: 'You can block any user from their profile. Once blocked, they won\'t be able to see your posts or contact you. [Feature availability subject to app launch]',
  },
  {
    q: 'What happens after I report someone?',
    a: 'Our moderation team reviews every report. Depending on severity, we may warn, suspend, or permanently remove the account. We\'ll follow up with you if appropriate.',
  },
  {
    q: 'Can I delete my account and data?',
    a: 'Yes. You can delete your account and request the removal of your data at any time from the app settings. [Full data deletion policy will be available in the Privacy Policy]',
  },
];

export default function SafetyCommunity() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    const newState = openFaq === index ? null : index;
    setOpenFaq(newState);
    if (newState !== null) trackEvent('faq_open');
  };

  return (
    <section className="py-16 sm:py-24 bg-background" aria-labelledby="community-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Community Standards */}
        <div className="scroll-reveal mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Our standards</p>
          <h2 id="community-heading" className="font-display section-heading text-foreground mb-4">
            Community guidelines.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-8">
            planB is a community. These are the values that keep it safe and welcoming for everyone.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {communityStandards.map((std, i) => (
              <div
                key={std.title}
                className={`scroll-reveal scroll-reveal-delay-${i + 1} bg-card rounded-3xl p-6 border border-border shadow-card`}
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">{std.icon}</span>
                <h3 className="font-semibold text-foreground text-base mb-2">{std.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{std.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reporting FAQ */}
        <div className="scroll-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Reporting & blocking</p>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-8">
            Common safety questions.
          </h3>
          <div className="max-w-3xl space-y-3" role="list">
            {faqItems.map((item, index) => (
              <div
                key={item.q}
                className={`faq-item border border-border rounded-2xl overflow-hidden bg-card transition-all ${
                  openFaq === index ? 'faq-item-open border-primary/30' : ''
                }`}
                role="listitem"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`safety-faq-answer-${index}`}
                >
                  <span className="font-medium text-foreground text-sm sm:text-base pr-4">{item.q}</span>
                  <svg
                    className="faq-chevron flex-shrink-0 text-muted-foreground"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`safety-faq-answer-${index}`}
                  className="faq-answer px-6"
                  role="region"
                  aria-labelledby={`safety-faq-btn-${index}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}