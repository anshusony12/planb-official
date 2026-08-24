'use client';
import React from 'react';
import { trackEvent } from '@/lib/analytics';
import NotifyMe from './NotifyMe';

interface DownloadCTAClientProps {
  appStoreUrl: string;
  playStoreUrl: string;
}

export default function DownloadCTAClient({ appStoreUrl, playStoreUrl }: DownloadCTAClientProps) {
  const isLive = appStoreUrl || playStoreUrl;

  if (!isLive) {
    return (
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 backdrop-blur-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-white/60 text-xs">Coming soon to</p>
              <p className="text-white font-semibold text-sm">App Store</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 backdrop-blur-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.22.98.14l12.82-7.4-2.82-2.82-10.98 10.08zM.36 1.52C.13 1.86 0 2.3 0 2.84v18.32c0 .54.13.98.36 1.32l.07.07 10.27-10.27v-.24L.43 1.45l-.07.07zM20.66 10.27l-2.78-1.6-3.17 3.17 3.17 3.17 2.8-1.62c.8-.46.8-1.21-.02-1.72zM4.16.22L17 7.62l-2.82 2.82L4.16.22z"/>
            </svg>
            <div className="text-left">
              <p className="text-white/60 text-xs">Coming soon to</p>
              <p className="text-white font-semibold text-sm">Google Play</p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6 backdrop-blur-sm">
          <p className="text-white font-semibold mb-1">Join the Waitlist</p>
          <p className="text-white/60 text-sm mb-4">Be first to know when planB launches in your city.</p>
          <NotifyMe variant="cta" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('download_app_store_click')}
        className="flex items-center gap-3 bg-white text-foreground rounded-2xl px-6 py-4 hover:bg-white/90 transition-colors shadow-lg"
        aria-label="Download planB on the App Store"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="text-left">
          <p className="text-muted-foreground text-xs">Download on the</p>
          <p className="font-bold text-sm">App Store</p>
        </div>
      </a>
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('download_play_store_click')}
        className="flex items-center gap-3 bg-white text-foreground rounded-2xl px-6 py-4 hover:bg-white/90 transition-colors shadow-lg"
        aria-label="Get planB on Google Play"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.18 23.76c.3.17.64.22.98.14l12.82-7.4-2.82-2.82-10.98 10.08zM.36 1.52C.13 1.86 0 2.3 0 2.84v18.32c0 .54.13.98.36 1.32l.07.07 10.27-10.27v-.24L.43 1.45l-.07.07zM20.66 10.27l-2.78-1.6-3.17 3.17 3.17 3.17 2.8-1.62c.8-.46.8-1.21-.02-1.72zM4.16.22L17 7.62l-2.82 2.82L4.16.22z"/>
        </svg>
        <div className="text-left">
          <p className="text-muted-foreground text-xs">Get it on</p>
          <p className="font-bold text-sm">Google Play</p>
        </div>
      </a>
    </div>
  );
}