import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — planB',
  description: 'Get in touch with the planB team. Questions, feedback, partnership enquiries, safety concerns, or just want to say hello.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
