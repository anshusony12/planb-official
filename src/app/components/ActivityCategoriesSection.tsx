import React from 'react';
import AppImage from '@/components/ui/AppImage';

// BENTO GRID AUDIT:
// Array has 6 cards: [Sports, Coffee & Food, Activities, Explore, Dating, Connection]
// Row 1 (grid-cols-3): [col-1: Sports cs-1] [col-2: Coffee cs-1] [col-3: Activities cs-1]
// Row 2 (grid-cols-3): [col-1: Explore cs-1] [col-2: Dating cs-1] [col-3: Connection cs-1]
// Placed 6/6 cards ✓
// Mobile (grid-cols-2): 3 rows of 2 — 6/6 ✓

const categories = [
{
  id: 'sports',
  title: 'Sports',
  description: 'Cricket, football, badminton, tennis, running, cycling, gym',
  emoji: '🏏',
  imageUrl: "https://images.unsplash.com/photo-1703645195666-a006326cc1c1",
  imageAlt: 'Cricket players on a sunlit ground in an urban Indian setting, players in action',
  bg: 'bg-orange-50',
  accent: 'text-primary'
},
{
  id: 'coffee',
  title: 'Coffee & Food',
  description: 'Coffee, lunch, dinner, café hopping, food exploration',
  emoji: '☕',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa9a0138-1773122505062.png",
  imageAlt: 'Two people chatting over coffee cups at a warm, bright café in an Indian city',
  bg: 'bg-amber-50',
  accent: 'text-accent'
},
{
  id: 'activities',
  title: 'Activities',
  description: 'Movies, gaming, events, concerts, workshops, art',
  emoji: '🎬',
  imageUrl: "https://images.unsplash.com/photo-1705345895425-9aa78a9a0609",
  imageAlt: 'Audience watching a film at a cinema, warm lighting, engaged expressions',
  bg: 'bg-red-50',
  accent: 'text-coral'
},
{
  id: 'explore',
  title: 'Explore',
  description: 'City exploration, travel, hiking, discovering new places',
  emoji: '🧭',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1a1cad0b0-1786115949760.png",
  imageAlt: 'Two friends exploring a vibrant street market in an Indian city, golden hour light',
  bg: 'bg-orange-50',
  accent: 'text-primary'
},
{
  id: 'dating',
  title: 'Dating',
  description: 'Dates, shared experiences, meeting someone naturally',
  emoji: '💛',
  imageUrl: "https://images.unsplash.com/photo-1639372891552-b51621b4adc0",
  imageAlt: 'A couple on a casual date at an outdoor café, relaxed and smiling naturally',
  bg: 'bg-amber-50',
  accent: 'text-accent'
},
{
  id: 'connection',
  title: 'Connection',
  description: 'Make friends, meet new people, find someone to talk to',
  emoji: '🤝',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1b39ae32f-1766581652139.png",
  imageAlt: 'A small group of young adults laughing together in a park, authentic candid moment',
  bg: 'bg-red-50',
  accent: 'text-coral'
}];


export default function ActivityCategoriesSection() {
  return (
    <section className="py-20 sm:py-28 bg-background overflow-hidden" aria-labelledby="activities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 scroll-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">For every mood</p>
          <h2 id="activities-heading" className="font-display section-heading text-foreground">
            Whatever you&rsquo;re in the mood for.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories?.map((cat, i) =>
          <article
            key={cat?.id}
            className={`scroll-reveal scroll-reveal-delay-${i % 3 + 1} group relative rounded-3xl overflow-hidden border border-border bg-card card-hover`}
            aria-label={`${cat?.title} category`}>

              {/* Image */}
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <AppImage
                src={cat?.imageUrl}
                alt={cat?.imageAlt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" aria-hidden="true" />
                <span className="absolute top-3 left-3 text-2xl" aria-hidden="true">{cat?.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className={`font-display text-lg sm:text-xl font-semibold ${cat?.accent} mb-1`}>
                  {cat?.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {cat?.description}
                </p>
              </div>
            </article>
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 scroll-reveal">
          More categories launching with the app. <span className="text-primary font-medium">Stay tuned.</span>
        </p>
      </div>
    </section>);

}