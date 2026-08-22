import React from 'react';

const timelineEvents = [
  {
    time: '7:14 PM',
    text: '"Anyone up for badminton tonight?"',
    type: 'post',
    emoji: '🏸',
    note: 'A post goes live',
  },
  {
    time: '7:18 PM',
    text: 'Someone nearby responds.',
    type: 'discover',
    emoji: '👀',
    note: '1.4 km away',
  },
  {
    time: '7:20 PM',
    text: 'They start chatting.',
    type: 'connect',
    emoji: '💬',
    note: 'A plan takes shape',
  },
  {
    time: '8:00 PM',
    text: 'They meet at the court.',
    type: 'meet',
    emoji: '🤝',
    note: 'Two strangers. One court.',
  },
  {
    time: '9:30 PM',
    text: 'Two strangers leave with a new connection.',
    type: 'result',
    emoji: '✨',
    note: 'The best part.',
    isHighlighted: true,
  },
];

export default function StoryTimelineSection() {
  return (
    <section className="py-20 sm:py-28 bg-foreground overflow-hidden" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Header */}
          <div className="scroll-reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">An illustrative scenario</p>
            <h2 id="story-heading" className="font-display section-heading text-white mb-6">
              Every connection has to start somewhere.
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              This is a fictional example of how planB could work. Real connections will vary — but the pattern is always the same.
            </p>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <p className="text-white/80 text-sm leading-relaxed">
                From a single post to a real-world meeting in under 2 hours. No followers needed. No mutual friends required. Just a shared intention and the app to connect them.
              </p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="relative scroll-reveal scroll-reveal-delay-2">
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-3 bottom-3 w-px step-connector" aria-hidden="true" />

              <div className="space-y-6">
                {timelineEvents?.map((event, i) => (
                  <div
                    key={event?.time}
                    className={`relative flex gap-5 ${event?.isHighlighted ? 'mt-8' : ''}`}
                  >
                    {/* Dot */}
                    <div
                      className={`absolute -left-8 top-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${
                        event?.isHighlighted ? 'timeline-dot w-5 h-5' : 'bg-primary/30 border border-primary'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <div
                      className={`flex-1 rounded-2xl p-5 ${
                        event?.isHighlighted
                          ? 'bg-brand-gradient text-white shadow-brand-lg'
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span
                          className={`text-xs font-bold uppercase tracking-widest ${
                            event?.isHighlighted ? 'text-white/80' : 'text-primary'
                          }`}
                        >
                          {event?.time}
                        </span>
                        <span className="text-xl" aria-hidden="true">{event?.emoji}</span>
                      </div>
                      <p
                        className={`font-medium leading-snug ${
                          event?.isHighlighted ? 'text-white text-lg font-semibold' : 'text-white/80 text-sm'
                        }`}
                      >
                        {event?.text}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          event?.isHighlighted ? 'text-white/70' : 'text-white/40'
                        }`}
                      >
                        {event?.note}
                      </p>
                    </div>
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