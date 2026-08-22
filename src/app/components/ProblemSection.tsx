import React from 'react';

const intentionCards = [
  { text: 'Anyone up for cricket this evening?', emoji: '🏏', color: 'bg-orange-50 border-orange-200' },
  { text: 'Want to grab coffee?', emoji: '☕', color: 'bg-amber-50 border-amber-200' },
  { text: 'Anyone going to this event?', emoji: '🎵', color: 'bg-red-50 border-red-200' },
  { text: 'Who\'s up for a movie?', emoji: '🎬', color: 'bg-orange-50 border-orange-200' },
  { text: 'Looking for a travel buddy.', emoji: '✈️', color: 'bg-amber-50 border-amber-200' },
  { text: 'Up for a run this morning?', emoji: '🏃', color: 'bg-red-50 border-red-200' },
];

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 bg-background overflow-hidden" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Problem narrative */}
          <div className="flex flex-col gap-8">
            <div className="scroll-reveal">
              <h2
                id="problem-heading"
                className="font-display section-heading text-foreground mb-6"
              >
                You can know hundreds of people and still have{' '}
                <span className="italic text-gradient">nobody to call.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                You have followers. Group chats. Coworkers. Hundreds of contacts. But sometimes, you simply want someone to grab coffee with, play a game with, explore with, or talk to.
              </p>
              <p className="text-base text-foreground font-medium leading-relaxed border-l-4 border-primary pl-5 py-1">
                The problem isn&rsquo;t always finding something to do. Sometimes it&rsquo;s finding someone to do it with.
              </p>
            </div>

            {/* Product insight */}
            <div className="scroll-reveal scroll-reveal-delay-2 bg-soft-orange rounded-3xl p-8 border border-primary/10">
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4">
                Sometimes you don&rsquo;t need a new friend.
                <br />
                <span className="italic text-primary">You just need someone to do something with.</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A connection doesn&rsquo;t need to begin with &ldquo;Let&rsquo;s be friends.&rdquo; It can begin with something much simpler.
              </p>
            </div>
          </div>

          {/* Right: Intention cards */}
          <div className="relative">
            <div className="scroll-reveal scroll-reveal-delay-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">It can start with something like this</p>
              <div className="space-y-3" role="list" aria-label="Example activity intentions">
                {intentionCards?.map((card, i) => (
                  <div
                    key={card?.text}
                    className={`flex items-center gap-4 rounded-2xl border px-5 py-4 card-hover ${card?.color}`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                    role="listitem"
                  >
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">{card?.emoji}</span>
                    <p className="text-sm sm:text-base font-medium text-foreground">{card?.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}