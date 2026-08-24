'use client';
import React, { useState } from 'react';
import { NOTIFY_ME_FORM_ENDPOINT } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';

interface NotifyMeProps {
  variant?: 'hero' | 'cta';
}

export default function NotifyMe({ variant = 'hero' }: NotifyMeProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const endpoint = NOTIFY_ME_FORM_ENDPOINT;
      if (!endpoint) {
        throw new Error('Endpoint not configured');
      }
      const url = new URL(endpoint);
      url.searchParams.set('email', email);
      url.searchParams.set('source', variant);

      await fetch(url.toString(), { method: 'GET', mode: 'no-cors' });

      trackEvent('notify_me_submit');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl px-6 py-4 ${
          variant === 'cta' ?'bg-white/15 border border-white/25 backdrop-blur-sm' :'bg-soft-orange border border-primary/20'
        }`}
        role="status"
        aria-live="polite"
      >
        <span className="text-2xl" aria-hidden="true">🎉</span>
        <div>
          <p className={`font-semibold text-sm ${variant === 'cta' ? 'text-white' : 'text-foreground'}`}>
            You&apos;re on the list!
          </p>
          <p className={`text-xs mt-0.5 ${variant === 'cta' ? 'text-white/70' : 'text-muted-foreground'}`}>
            We&apos;ll notify you the moment planB launches in your city.
          </p>
        </div>
      </div>
    );
  }

  const isCtaVariant = variant === 'cta';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Notify me when planB launches"
    >
      <div className="flex flex-col sm:flex-row gap-2 max-w-sm">
        <div className="flex-1">
          <label htmlFor={`notify-email-${variant}`} className="sr-only">
            Email address
          </label>
          <input
            id={`notify-email-${variant}`}
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="your@email.com"
            disabled={status === 'loading'}
            className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
              isCtaVariant
                ? 'bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-white/40' :'bg-card border border-border text-foreground placeholder-muted-foreground focus:ring-primary/40 focus:border-primary/40'
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap ${
            isCtaVariant
              ? 'bg-white text-primary hover:bg-white/90' :'bg-brand-gradient text-primary-foreground hover:opacity-90 shadow-brand'
          }`}
          aria-label="Submit email for notification"
        >
          {status === 'loading' ? (
            <>
              <svg
                className="animate-spin w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              <span>Joining…</span>
            </>
          ) : (
            'Notify Me'
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className={`mt-2 text-xs ${isCtaVariant ? 'text-white/70' : 'text-destructive'}`} role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}