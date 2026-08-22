'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import Link from 'next/link';

const faqs = [
  {
    category: 'About planB',
    items: [
      {
        q: 'What is planB?',
        a: 'planB is an app that helps you find people nearby who want to do the same thing you want to do — right now or soon. Whether it\'s playing cricket, grabbing coffee, watching a movie, or exploring the city, planB connects you with real people for real-world activities.',
      },
      {
        q: 'Is planB a social network?',
        a: 'No. planB is not designed to maximize your time in the app, grow your follower count, or keep you scrolling. It\'s designed to help you find someone and then get out of the way. The goal is a real-world connection, not a digital one.',
      },
      {
        q: 'Is it a dating app?',
        a: 'planB is not exclusively a dating app, but dating is one of the many ways people use it. You can use planB to find sports partners, activity companions, travel buddies, new friends, or yes — someone to go on a date with. The intention is yours to set.',
      },
      {
        q: 'Can I use it to make friends?',
        a: 'Absolutely. Many of the best friendships start with a shared activity. planB makes it easy to find people who share your interests and are available when you are. Whether you\'re new to a city or just looking to expand your social circle, planB is built for you.',
      },
    ],
  },
  {
    category: 'Using the App',
    items: [
      {
        q: 'Can I find sports or activity partners?',
        a: 'Yes — this is one of planB\'s core use cases. Post that you\'re looking for a cricket partner, a badminton opponent, a running buddy, or a cycling companion. People nearby with the same intention will discover your post and can connect with you.',
      },
      {
        q: 'How do I connect with someone?',
        a: 'When you see someone whose post matches what you want to do, you can send them a connection request. If they accept, you\'ll be able to chat, make a plan, and decide where and when to meet. It\'s designed to be simple and intentional.',
      },
      {
        q: 'Is my location visible to other users?',
        a: 'planB uses your location to show you relevant people and posts nearby, but your precise location is never shared with other users. You control what information is visible on your profile. We use location to make connections relevant — not to expose where you are.',
      },
      {
        q: 'Is planB free to use?',
        a: 'planB is free to download and use. We\'ll share more details about our pricing model as the app develops. Our goal is to make real-world connection accessible to everyone.',
      },
    ],
  },
  {
    category: 'Availability',
    items: [
      {
        q: 'Is planB available in my city?',
        a: 'planB is currently in development and will be launching in select cities soon. We\'re starting in urban India, where the need for this kind of connection is especially strong. Join the waitlist to be notified when planB arrives in your city.',
      },
      {
        q: 'When will the app be available?',
        a: 'We\'re working hard to get planB into your hands as soon as possible. Sign up for early access and you\'ll be among the first to know when we launch in your area.',
      },
    ],
  },
  {
    category: 'Safety & Support',
    items: [
      {
        q: 'How do I report or block someone?',
        a: 'planB has built-in reporting and blocking tools. If someone makes you uncomfortable or violates our community guidelines, you can report their profile or block them directly from the app. All reports are reviewed by our team. Your safety is our priority.',
      },
      {
        q: 'How do I delete my account?',
        a: 'You can delete your account at any time from within the app settings. When you delete your account, your profile and data will be removed in accordance with our Privacy Policy. If you need help, contact our support team.',
      },
      {
        q: 'How can I contact support?',
        a: 'You can reach our support team through the Contact page on this website, or by emailing hello@planb.app. We aim to respond to all queries within 24–48 hours.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item border border-border rounded-2xl overflow-hidden transition-all ${open ? 'faq-item-open' : ''}`}>
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-muted/30 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-base leading-snug">{q}</span>
        <svg
          className="faq-chevron flex-shrink-0 w-5 h-5 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="faq-answer px-6">
        <p className="text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[45vh] flex items-end pb-16 pt-32 overflow-hidden bg-background"
          aria-labelledby="faq-heading"
        >
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] blob-primary opacity-40 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] blob-coral opacity-30 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Got questions?</p>
            <h1
              id="faq-heading"
              className="font-display display-lg text-foreground max-w-3xl mb-6"
            >
              Frequently asked{' '}
              <span className="italic text-gradient">questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Everything you need to know about planB. Can&rsquo;t find what you&rsquo;re looking for?{' '}
              <Link href="/contact" className="text-primary hover:underline">Get in touch.</Link>
            </p>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="py-16 pb-24 bg-background" aria-label="FAQ content">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {faqs.map((section, si) => (
              <div key={section.category} className={`mb-14 scroll-reveal scroll-reveal-delay-${si + 1}`}>
                <h2 className="font-display text-2xl text-foreground mb-6 pb-4 border-b border-border">
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}

            {/* Still have questions */}
            <div className="bg-soft-orange rounded-3xl p-10 text-center scroll-reveal">
              <div className="text-4xl mb-4" aria-hidden="true">💬</div>
              <h2 className="font-display text-2xl text-foreground mb-3">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                We&rsquo;re happy to help. Reach out and we&rsquo;ll get back to you as soon as we can.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
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
