import React from 'react';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/config';

import DownloadCTAClient from './DownloadCTAClient';

export default function DownloadCTA() {
  return (
    <section
      id="download-cta"
      className="py-20 sm:py-28 bg-background"
      aria-labelledby="download-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-brand-gradient-diagonal rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-4">Ready to start?</p>
            <h2
              id="download-heading"
              className="font-display section-heading text-white mb-4"
            >
              Find someone to do something with.
            </h2>
            <p className="text-white/80 text-lg max-w-md mx-auto mb-10 leading-relaxed">
              Download planB and start discovering real-world connections around you.
            </p>

            <DownloadCTAClient appStoreUrl={APP_STORE_URL} playStoreUrl={PLAY_STORE_URL} />
          </div>
        </div>
      </div>
    </section>
  );
}