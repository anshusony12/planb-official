import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — planB',
  description: 'Read the planB Terms of Service. By using planB, you agree to these terms.',
  alternates: { canonical: '/terms' },
};

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of terms',
    content: 'By downloading, installing, or using the planB application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use planB. We may update these terms from time to time, and your continued use of planB after any changes constitutes your acceptance of the updated terms.',
  },
  {
    id: 'eligibility',
    title: '2. Eligibility',
    content: 'You must be at least 18 years old to use planB. By using planB, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these terms. planB is not intended for use by minors.',
  },
  {
    id: 'account',
    title: '3. Your account',
    content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate, current, and complete information when creating your account and to keep your information up to date. You must notify us immediately of any unauthorised use of your account. planB reserves the right to suspend or terminate accounts that violate these terms.',
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable use',
    content: 'planB is designed to help people find real-world connections for genuine activities. You agree to use planB only for lawful purposes and in accordance with these terms and our Community Guidelines. You must not use planB to harass, abuse, or harm others; to engage in fraudulent, deceptive, or misleading behaviour; to distribute spam, unsolicited messages, or commercial solicitations; to impersonate any person or entity; to collect or harvest personal information from other users without their consent; or to engage in any activity that violates applicable law.',
  },
  {
    id: 'content',
    title: '5. User content',
    content: 'You retain ownership of the content you post on planB, including your profile information, activity posts, and messages. By posting content on planB, you grant us a non-exclusive, worldwide, royalty-free licence to use, display, and distribute that content in connection with operating and improving the planB service. You are solely responsible for the content you post and must ensure it does not violate any third-party rights or applicable law.',
  },
  {
    id: 'safety',
    title: '6. Safety and real-world meetings',
    content: 'planB facilitates real-world connections between people. While we take steps to create a safe environment within the app, we cannot guarantee the safety of in-person meetings. You are solely responsible for your safety when meeting other users in real life. We strongly encourage you to meet in public places, inform a trusted person of your plans, and trust your instincts. Please review our Safety Guide for detailed guidance.',
  },
  {
    id: 'intellectual-property',
    title: '7. Intellectual property',
    content: 'The planB app, website, and all associated content, features, and functionality — including but not limited to the planB name, logo, design, and software — are owned by planB and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works based on planB\'s intellectual property without our express written permission.',
  },
  {
    id: 'disclaimers',
    title: '8. Disclaimers',
    content: 'planB is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the app will be uninterrupted, error-free, or free of viruses or other harmful components. We do not guarantee the accuracy, completeness, or usefulness of any content on planB, or the identity, intentions, or behaviour of any user.',
  },
  {
    id: 'limitation',
    title: '9. Limitation of liability',
    content: 'To the fullest extent permitted by applicable law, planB and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use planB, including but not limited to damages for loss of profits, data, goodwill, or other intangible losses.',
  },
  {
    id: 'termination',
    title: '10. Termination',
    content: 'You may stop using planB and delete your account at any time. We reserve the right to suspend or terminate your access to planB at any time, with or without notice, if we believe you have violated these terms or our Community Guidelines, or if we determine that your use of planB poses a risk to other users or to planB.',
  },
  {
    id: 'governing-law',
    title: '11. Governing law',
    content: 'These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of planB shall be subject to the exclusive jurisdiction of the courts of India.',
  },
  {
    id: 'contact',
    title: '12. Contact',
    content: 'If you have questions about these Terms of Service, please contact us at hello@planb.app or through our Contact page.',
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[40vh] flex items-end pb-16 pt-32 overflow-hidden bg-foreground"
          aria-labelledby="terms-heading"
        >
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] blob-primary opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-lg" aria-hidden="true">📄</span>
                <span className="text-sm font-medium text-white">Legal</span>
              </div>
              <h1 id="terms-heading" className="font-display display-lg text-white mb-4">
                Terms of Service
              </h1>
              <p className="text-white/60 text-sm">
                Last updated: August 2026 &nbsp;·&nbsp; Effective: August 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 pb-24 bg-background" aria-label="Terms of service content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar nav */}
              <nav className="hidden lg:block" aria-label="Terms sections">
                <div className="sticky top-24 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Contents</p>
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary py-1.5 transition-colors"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Main content */}
              <div className="lg:col-span-3 space-y-10">
                <div className="bg-soft-orange rounded-2xl p-6 border border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Please read these terms carefully.</strong> By using planB, you agree to be bound by these Terms of Service. These terms govern your use of the planB app and website.
                  </p>
                </div>

                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-reveal">
                    <h2 className="font-display text-2xl text-foreground mb-4 pb-4 border-b border-border">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}

                <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                  <p className="text-sm text-muted-foreground">
                    Questions about these terms?{' '}
                    <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
                    {' '}and we&rsquo;ll be happy to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  );
}
