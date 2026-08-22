import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — planB',
  description: 'Learn how planB collects, uses, and protects your personal information. Your privacy matters to us.',
  alternates: { canonical: '/privacy' },
};

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information we collect',
    content: [
      {
        subtitle: 'Information you provide',
        text: 'When you create a planB account, we collect information you provide directly, including your name, email address, phone number, date of birth, and profile information such as a photo and bio. When you post an activity or connect with someone, we collect the content of those interactions.',
      },
      {
        subtitle: 'Location information',
        text: 'planB uses your location to show you relevant people and activities nearby. We collect your approximate location when you use the app. We do not share your precise location with other users. You can control location permissions through your device settings.',
      },
      {
        subtitle: 'Usage information',
        text: 'We collect information about how you use planB, including the features you use, the actions you take, and the time and frequency of your activity. This helps us improve the app and your experience.',
      },
      {
        subtitle: 'Device information',
        text: 'We collect information about the device you use to access planB, including device type, operating system, unique device identifiers, and mobile network information.',
      },
    ],
  },
  {
    id: 'how-we-use',
    title: '2. How we use your information',
    content: [
      {
        subtitle: 'To provide and improve planB',
        text: 'We use your information to operate the app, match you with relevant people and activities nearby, facilitate connections and conversations, and continuously improve the planB experience.',
      },
      {
        subtitle: 'To keep you safe',
        text: 'We use your information to verify accounts, detect and prevent fraud, abuse, and violations of our Community Guidelines, and to respond to safety reports and support requests.',
      },
      {
        subtitle: 'To communicate with you',
        text: 'We may send you notifications about activity on your account, updates to the app, and important information about planB. You can manage your notification preferences in the app settings.',
      },
    ],
  },
  {
    id: 'sharing',
    title: '3. How we share your information',
    content: [
      {
        subtitle: 'With other users',
        text: 'Your profile information, activity posts, and the content of your conversations are shared with other planB users as part of the core functionality of the app. You control what information appears on your public profile.',
      },
      {
        subtitle: 'With service providers',
        text: 'We work with trusted third-party service providers who help us operate planB, including cloud hosting, analytics, and customer support. These providers are contractually required to protect your information and use it only for the purposes we specify.',
      },
      {
        subtitle: 'For legal reasons',
        text: 'We may disclose your information if required by law, legal process, or government request, or if we believe disclosure is necessary to protect the rights, property, or safety of planB, our users, or the public.',
      },
      {
        subtitle: 'We do not sell your data',
        text: 'planB does not sell your personal information to third parties. We do not share your information with advertisers for the purpose of targeting you with advertisements.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: '4. Your rights and choices',
    content: [
      {
        subtitle: 'Access and correction',
        text: 'You can access and update most of your profile information directly within the planB app. If you need help accessing or correcting your information, contact us at hello@planb.app.',
      },
      {
        subtitle: 'Deletion',
        text: 'You can delete your planB account at any time from within the app settings. When you delete your account, we will delete your personal information in accordance with applicable law. Some information may be retained for legal or safety purposes.',
      },
      {
        subtitle: 'Location permissions',
        text: 'You can control planB\'s access to your location through your device settings. Note that disabling location access will limit the app\'s ability to show you relevant nearby connections.',
      },
    ],
  },
  {
    id: 'data-security',
    title: '5. Data security',
    content: [
      {
        subtitle: 'How we protect your information',
        text: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, access controls, and regular security reviews.',
      },
      {
        subtitle: 'No system is perfect',
        text: 'While we take data security seriously, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to use a strong, unique password for your planB account and to report any suspected security issues to hello@planb.app.',
      },
    ],
  },
  {
    id: 'children',
    title: '6. Children\'s privacy',
    content: [
      {
        subtitle: 'Age requirement',
        text: 'planB is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete that information.',
      },
    ],
  },
  {
    id: 'changes',
    title: '7. Changes to this policy',
    content: [
      {
        subtitle: 'Updates',
        text: 'We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the app or by email. Your continued use of planB after the changes take effect constitutes your acceptance of the updated policy.',
      },
    ],
  },
  {
    id: 'contact',
    title: '8. Contact us',
    content: [
      {
        subtitle: 'Questions about privacy',
        text: 'If you have questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at hello@planb.app or through our Contact page.',
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[40vh] flex items-end pb-16 pt-32 overflow-hidden bg-foreground"
          aria-labelledby="privacy-heading"
        >
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] blob-primary opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-lg" aria-hidden="true">🔒</span>
                <span className="text-sm font-medium text-white">Legal</span>
              </div>
              <h1 id="privacy-heading" className="font-display display-lg text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-white/60 text-sm">
                Last updated: August 2026 &nbsp;·&nbsp; Effective: August 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 pb-24 bg-background" aria-label="Privacy policy content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar nav */}
              <nav className="hidden lg:block" aria-label="Privacy policy sections">
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
              <div className="lg:col-span-3 space-y-12">
                <div className="bg-soft-orange rounded-2xl p-6 border border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Your privacy matters to us.</strong> This policy explains what information planB collects, how we use it, and the choices you have. We&rsquo;ve written it in plain language because we believe you deserve to understand how your data is handled.
                  </p>
                </div>

                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-reveal">
                    <h2 className="font-display text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      {section.title}
                    </h2>
                    <div className="space-y-6">
                      {section.content.map((item) => (
                        <div key={item.subtitle}>
                          <h3 className="font-semibold text-foreground mb-2">{item.subtitle}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                  <p className="text-sm text-muted-foreground">
                    Have questions about this policy?{' '}
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
