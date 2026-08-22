import React from 'react';

const privacyFeatures = [
  {
    icon: '📍',
    title: 'Approximate location only',
    description: 'planB never shares your exact location. Other users see an approximate distance — never your address or precise coordinates.',
    status: 'Built in',
  },
  {
    icon: '👤',
    title: 'Profile controls',
    description: 'You control what others can see. Manage your visibility, activity history, and what information is displayed on your profile.',
    status: 'Your choice',
  },
  {
    icon: '🔒',
    title: 'Private by default',
    description: 'Your contact information, exact location, and personal details are never visible to other users without your explicit permission.',
    status: 'Always on',
  },
  {
    icon: '💬',
    title: 'Private messaging',
    description: 'Conversations happen in private. Your chats are between you and the other person — not publicly visible on your profile.',
    status: 'Always on',
  },
];

export default function SafetyPrivacy() {
  return (
    <section className="py-16 sm:py-24 bg-background" aria-labelledby="privacy-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="scroll-reveal mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Your data</p>
          <h2 id="privacy-heading" className="font-display section-heading text-foreground mb-4">
            Privacy controls that put you in charge.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            You decide what you share, who can see it, and when. These aren&rsquo;t buried settings — they&rsquo;re front and center.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {privacyFeatures?.map((feature, i) => (
            <div
              key={feature?.title}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-card`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl" aria-hidden="true">{feature?.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-success bg-success/10 px-3 py-1 rounded-full">
                  {feature?.status}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{feature?.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature?.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-soft-orange rounded-3xl p-6 border border-primary/10 scroll-reveal">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Note: </span>
            The specific privacy features available may vary as planB develops. This page describes our intended approach. Full details will be available in our Privacy Policy once the app launches.
          </p>
        </div>
      </div>
    </section>
  );
}