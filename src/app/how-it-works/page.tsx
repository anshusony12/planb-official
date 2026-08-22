import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorksHero from '@/app/how-it-works/components/HowItWorksHero';
import HowItWorksSteps from '@/app/how-it-works/components/HowItWorksSteps';
import HowItWorksPhilosophy from '@/app/how-it-works/components/HowItWorksPhilosophy';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'How It Works — planB',
  description: 'Learn how planB works: post what you want to do, discover nearby people, connect, and meet in real life. Four steps to a real-world connection.',
  alternates: { canonical: '/how-it-works' },
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HowItWorksHero />
        <HowItWorksSteps />
        <HowItWorksPhilosophy />
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  );
}