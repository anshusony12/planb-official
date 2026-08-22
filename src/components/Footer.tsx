import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { SOCIAL_LINKS } from '@/lib/config';

const footerLinks = {
  product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Safety', href: '/safety' },
    { label: 'FAQ', href: '/faq' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Why We Built This', href: '/why-we-built-this' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Community Guidelines', href: '/community-guidelines' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Arc Browser Split Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="planB home">
              <AppLogo size={36} />
              <span className="font-display text-xl font-semibold text-foreground tracking-tight">
                plan<span className="text-primary">B</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Meet people.<br />
              Do things.<br />
              Feel connected.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href={SOCIAL_LINKS?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="planB on Instagram"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS?.threads}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="planB on Threads"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.473 12.01v-.017c.027-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.594 12c.022 3.086.713 5.496 2.05 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.7-.872-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.578-1.312-.88-2.387-.899-1.781.04-2.82.726-3.466 1.503l-1.562-1.4c.95-1.096 2.397-1.954 4.994-2.065 1.713-.075 3.117.311 4.179 1.15.965.761 1.578 1.89 1.82 3.358.144.862.19 1.786.14 2.748-.01.147-.018.294-.027.44.52.45.97 1.01 1.33 1.666 1.004 1.843 1.01 4.57-1.115 6.641-1.832 1.788-4.04 2.54-7.14 2.56Z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="planB on LinkedIn"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Links */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Product</p>
              <ul className="space-y-3">
                {footerLinks?.product?.map((link) => (
                  <li key={link?.href}>
                    <Link href={link?.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Company</p>
              <ul className="space-y-3">
                {footerLinks?.company?.map((link) => (
                  <li key={link?.href}>
                    <Link href={link?.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Legal</p>
              <ul className="space-y-3">
                {footerLinks?.legal?.map((link) => (
                  <li key={link?.href}>
                    <Link href={link?.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-muted-foreground">© 2026 planB. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Built for people who want to do more together.</p>
        </div>
      </div>
    </footer>
  );
}