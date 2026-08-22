import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — planB',
  description: 'Learn about planB — the app built to help people find real-world connections. Our story, mission, vision, and the values behind everything we build.',
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
