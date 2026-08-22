import React from 'react';
import AppImage from '@/components/ui/AppImage';

const detailedSteps = [
{
  number: '01',
  title: 'Post',
  subtitle: 'Tell people what you want to do.',
  description: 'Open planB and create a post about what you\'re up for. Be specific — the more context you give, the better the match. "Cricket at 6pm in Sector 29" works much better than "sports."',
  tips: ['Add a time and location', 'Describe what you\'re looking for', 'Set your availability'],
  emoji: '📝',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1cbeeab71-1772097887417.png",
  imageAlt: 'Person typing on a phone at a café, warm afternoon light, relaxed urban setting',
  isReversed: false
},
{
  number: '02',
  title: 'Discover',
  subtitle: 'Find nearby people with similar intentions.',
  description: 'Browse posts from people near you who want to do the same things. Filter by activity, distance, or time. Every person you see is real and nearby — not a curated algorithm feed.',
  tips: ['Filter by activity type', 'See approximate distance', 'Browse by time of day'],
  emoji: '🔍',
  imageUrl: "https://images.unsplash.com/photo-1717238171715-434536a447cf",
  imageAlt: 'Group of young people looking at phones together at an outdoor café in an Indian city',
  isReversed: true
},
{
  number: '03',
  title: 'Connect',
  subtitle: 'Start a conversation and make a plan.',
  description: 'When you find someone whose plan matches yours, connect and start chatting. No follower requests, no public profiles — just a direct conversation around a shared intention.',
  tips: ['Direct, private messaging', 'Built around the activity', 'No public profile required'],
  emoji: '💬',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_10a3caf2e-1773296313636.png",
  imageAlt: 'Two people chatting on their phones while sitting outdoors, smiling, relaxed atmosphere',
  isReversed: false
},
{
  number: '04',
  title: 'Meet',
  subtitle: 'Take the connection into the real world.',
  description: 'This is the part that matters. Put the phone down, show up, and do the thing. The app has done its job. The rest is up to you.',
  tips: ['Meet in a public place', 'Let someone know your plans', 'Trust your instincts'],
  emoji: '🤝',
  imageUrl: "https://images.unsplash.com/photo-1602443686761-2091c33bfc07",
  imageAlt: 'Two people greeting each other at a cricket ground during golden hour, authentic candid moment',
  isReversed: true,
  isHighlighted: true
}];


export default function HowItWorksSteps() {
  return (
    <section className="py-16 sm:py-24 bg-background" aria-label="How planB works in detail">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-20 sm:space-y-28">
          {detailedSteps?.map((step, i) =>
          <article
            key={step?.number}
            className={`scroll-reveal grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${step?.isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
            aria-label={`Step ${step?.number}: ${step?.title}`}>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span
                  className="font-display text-6xl sm:text-7xl font-bold text-gradient opacity-40"
                  aria-hidden="true">

                    {step?.number}
                  </span>
                  <span className="text-4xl" aria-hidden="true">{step?.emoji}</span>
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-2">
                    {step?.title}
                  </h2>
                  <p className="text-lg text-primary font-medium mb-4">{step?.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{step?.description}</p>
                </div>

                {step?.isHighlighted &&
              <div className="bg-foreground rounded-2xl p-6">
                    <p className="text-white font-display text-lg font-semibold leading-relaxed">
                      &ldquo;The app is only the beginning. The best part happens when the screen goes away.&rdquo;
                    </p>
                  </div>
              }

                <ul className="space-y-2" aria-label={`Tips for step ${step?.title}`}>
                  {step?.tips?.map((tip) =>
                <li key={tip} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {tip}
                    </li>
                )}
                </ul>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card-hover">
                  <AppImage
                  src={step?.imageUrl}
                  alt={step?.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={i === 0} />

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" aria-hidden="true" />
                </div>
                {/* Step badge */}
                <div
                className={`absolute -bottom-4 ${step?.isReversed ? 'right-6' : 'left-6'} bg-card rounded-2xl shadow-card-hover p-4 border border-border flex items-center gap-3`}>

                  <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-display font-bold text-sm">{step?.number}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{step?.title}</p>
                    <p className="text-xs text-muted-foreground">{step?.subtitle}</p>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}