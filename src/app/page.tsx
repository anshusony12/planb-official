import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ProblemSection from '@/app/components/ProblemSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import ActivityCategoriesSection from '@/app/components/ActivityCategoriesSection';
import DifferentiationSection from '@/app/components/DifferentiationSection';
import StoryTimelineSection from '@/app/components/StoryTimelineSection';
import WhyWeBuiltSection from '@/app/components/WhyWeBuiltSection';
import SafetyTeaser from '@/app/components/SafetyTeaser';
import BrandStatement from '@/app/components/BrandStatement';
import DownloadCTA from '@/app/components/DownloadCTA';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'planB — Find Someone to Do Something With',
  description: 'planB helps you find people nearby who want to do the same things — coffee, sports, events, dates, or just a conversation. Download for iOS and Android.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'planB — Find Someone to Do Something With',
    description: 'Find people nearby who actually want to do something together.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ActivityCategoriesSection />
        <DifferentiationSection />
        <StoryTimelineSection />
        <WhyWeBuiltSection />
        <SafetyTeaser />
        <BrandStatement />
        <DownloadCTA />
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  );
}