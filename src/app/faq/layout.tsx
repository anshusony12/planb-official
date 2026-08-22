import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — planB',
  description: 'Frequently asked questions about planB. What is planB, how does it work, is it a dating app, how do I stay safe, and more.',
  alternates: { canonical: '/faq' },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
