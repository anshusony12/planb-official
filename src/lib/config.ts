// Central configuration — update these values when app is live
export const APP_STORE_URL = ''; // TODO: Add App Store URL when live
export const PLAY_STORE_URL = ''; // TODO: Add Google Play URL when live
export const SUPPORT_EMAIL = 'contact@planbofficial.com'; // TODO: Confirm support email
export const ANALYTICS_ID = ''; // TODO: Add analytics ID

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/planb', // TODO: Confirm handle
  threads: 'https://threads.net/@planb', // TODO: Confirm handle
  linkedin: 'https://linkedin.com/company/planb', // TODO: Confirm handle
};

export const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Safety', href: '/safety' },
];

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://planbofficial.com/';
export const CONTACT_FORM_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || '';
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
export const NOTIFY_ME_FORM_ENDPOINT = process.env.NEXT_PUBLIC_NOTIFY_ME_FORM_ENDPOINT || '';
