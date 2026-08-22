import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyHero from '@/app/safety/components/SafetyHero';
import SafetyPrivacy from '@/app/safety/components/SafetyPrivacy';
import SafetyMeetingAdvice from '@/app/safety/components/SafetyMeetingAdvice';
import SafetyCommunity from '@/app/safety/components/SafetyCommunity';
import SafetySupport from '@/app/safety/components/SafetySupport';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'Safety — planB',
  description: 'Learn how planB keeps you safe: privacy controls, community guidelines, reporting tools, and responsible meeting advice. Meeting someone new should feel exciting and safe.',
  alternates: { canonical: '/safety' },
};

export default function SafetyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SafetyHero />
        <SafetyPrivacy />
        <SafetyMeetingAdvice />
        <SafetyCommunity />
        <SafetySupport />
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  );
}