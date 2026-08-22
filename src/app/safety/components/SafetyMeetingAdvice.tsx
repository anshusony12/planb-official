import React from 'react';

const adviceItems = [
  {
    number: '1',
    title: 'Meet in a public place',
    description: 'For your first meeting, always choose a busy public location — a café, park, sports ground, or shopping area. Avoid private spaces until you\'ve built trust.',
    icon: '🏪',
  },
  {
    number: '2',
    title: 'Tell someone your plans',
    description: 'Let a friend or family member know where you\'re going, who you\'re meeting, and when you expect to be back. Share your location with them if you\'re comfortable.',
    icon: '📱',
  },
  {
    number: '3',
    title: 'Trust your instincts',
    description: 'If something feels off before or during a meeting, it\'s completely okay to cancel or leave. Your comfort and safety come first — no explanation required.',
    icon: '💡',
  },
  {
    number: '4',
    title: 'Keep personal details private',
    description: 'Don\'t share your home address, workplace, or financial information with someone you\'ve just met on the app. Take your time before sharing personal details.',
    icon: '🔐',
  },
  {
    number: '5',
    title: 'Arrange your own transport',
    description: 'For initial meetings, make your own way there and back. Having independent transport means you\'re in control of when you arrive and when you leave.',
    icon: '🚗',
  },
  {
    number: '6',
    title: 'Check in with someone',
    description: 'During or after the meeting, send a quick message to someone you trust to let them know you\'re okay. A simple check-in goes a long way.',
    icon: '✅',
  },
];

export default function SafetyMeetingAdvice() {
  return (
    <section className="py-16 sm:py-24 bg-soft-orange" aria-labelledby="meeting-advice-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="scroll-reveal mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Before you meet</p>
          <h2 id="meeting-advice-heading" className="font-display section-heading text-foreground mb-4">
            Responsible meeting guide.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            These aren&rsquo;t just guidelines — they&rsquo;re habits worth building whenever you meet someone new, online or offline.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adviceItems?.map((item, i) => (
            <div
              key={item?.number}
              className={`scroll-reveal scroll-reveal-delay-${(i % 3) + 1} bg-card rounded-3xl p-6 border border-border shadow-card`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="w-8 h-8 rounded-full bg-brand-gradient text-white flex items-center justify-center font-bold text-sm flex-shrink-0"
                  aria-hidden="true"
                >
                  {item?.number}
                </span>
                <span className="text-2xl" aria-hidden="true">{item?.icon}</span>
              </div>
              <h3 className="font-semibold text-foreground text-base mb-2">{item?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}