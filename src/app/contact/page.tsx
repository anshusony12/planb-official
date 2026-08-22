'use client';

import React, { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import { SUPPORT_EMAIL } from '@/lib/config';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const REASONS = [
  { value: '', label: 'Select a reason' },
  { value: 'general', label: 'General enquiry' },
  { value: 'support', label: 'App support' },
  { value: 'safety', label: 'Safety concern' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'press', label: 'Press & media' },
  { value: 'business', label: 'Business enquiry' },
];

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.reason) errors.reason = 'Please select a reason.';
  if (!data.message.trim()) errors.message = 'Please enter your message.';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', reason: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormState>('idle');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitted) return;
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    setSubmitted(true);
    // TODO: Connect to form endpoint (e.g. Formspree, Resend, or custom API route)
    // Simulating async submission
    await new Promise((r) => setTimeout(r, 1200));
    // For now, show success state. Replace with real API call.
    setStatus('success');
  }

  function handleReset() {
    setForm({ name: '', email: '', reason: '', message: '' });
    setErrors({});
    setStatus('idle');
    setSubmitted(false);
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-muted border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
      errors[field] ? 'border-error focus:ring-error' : 'border-border'
    }`;

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[45vh] flex items-end pb-16 pt-32 overflow-hidden bg-background"
          aria-labelledby="contact-heading"
        >
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] blob-primary opacity-40 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] blob-coral opacity-30 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Say hello</p>
            <h1
              id="contact-heading"
              className="font-display display-lg text-foreground max-w-3xl mb-6"
            >
              We&rsquo;d love to{' '}
              <span className="italic text-gradient">hear from you.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Questions, feedback, partnership ideas, or just want to say hi — we&rsquo;re a real team and we read every message.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-16 pb-24 bg-background" aria-label="Contact form and details">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Left: Info */}
              <div className="lg:col-span-2 space-y-8 scroll-reveal">
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-4">Get in touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you have a question about the app, want to report a safety concern, or are interested in working with us — we&rsquo;re here.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-soft-orange rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Email us</p>
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="text-primary hover:underline text-sm"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-soft-orange rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <span className="text-xl">⏱️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Response time</p>
                      <p className="text-muted-foreground text-sm">We aim to respond within 24–48 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-soft-orange rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <span className="text-xl">🛡️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Safety concerns</p>
                      <p className="text-muted-foreground text-sm">
                        Safety reports are prioritised and reviewed as quickly as possible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                  <p className="text-sm font-semibold text-foreground mb-2">Looking for something specific?</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <a href="/faq" className="text-primary hover:underline">FAQ</a>
                      {' '}— Quick answers to common questions
                    </li>
                    <li>
                      <a href="/safety" className="text-primary hover:underline">Safety Guide</a>
                      {' '}— Privacy, reporting, and meeting advice
                    </li>
                    <li>
                      <a href="/community-guidelines" className="text-primary hover:underline">Community Guidelines</a>
                      {' '}— How we expect everyone to behave
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3 scroll-reveal scroll-reveal-delay-2">
                {status === 'success' ? (
                  <div className="bg-card border border-border rounded-3xl p-10 text-center">
                    <div className="text-5xl mb-5" aria-hidden="true">🎉</div>
                    <h2 className="font-display text-2xl text-foreground mb-3">Message sent!</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Thanks for reaching out. We&rsquo;ve received your message and will get back to you within 24–48 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                    className="bg-card border border-border rounded-3xl p-8 sm:p-10 space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Your name <span className="text-error" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Arjun Sharma"
                          className={inputClass('name')}
                          aria-required="true"
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" role="alert" className="mt-1.5 text-xs text-error">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email address <span className="text-error" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="arjun@example.com"
                          className={inputClass('email')}
                          aria-required="true"
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" role="alert" className="mt-1.5 text-xs text-error">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reason" className="block text-sm font-semibold text-foreground mb-2">
                        Reason for contact <span className="text-error" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        className={inputClass('reason')}
                        aria-required="true"
                        aria-describedby={errors.reason ? 'reason-error' : undefined}
                      >
                        {REASONS.map((r) => (
                          <option key={r.value} value={r.value} disabled={r.value === ''}>
                            {r.label}
                          </option>
                        ))}
                      </select>
                      {errors.reason && (
                        <p id="reason-error" role="alert" className="mt-1.5 text-xs text-error">{errors.reason}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message <span className="text-error" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind..."
                        className={`${inputClass('message')} resize-none`}
                        aria-required="true"
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="mt-1.5 text-xs text-error">{errors.message}</p>
                      )}
                    </div>

                    {status === 'error' && (
                      <div role="alert" className="bg-error/10 border border-error/20 rounded-xl p-4">
                        <p className="text-sm text-error font-medium">
                          Something went wrong. Please try again or email us directly at{' '}
                          <a href={`mailto:${SUPPORT_EMAIL}`} className="underline">{SUPPORT_EMAIL}</a>.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading' || submitted}
                      className="w-full flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                      aria-busy={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        'Send message'
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                )}
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
