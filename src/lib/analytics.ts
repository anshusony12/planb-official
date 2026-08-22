// Analytics abstraction layer — connect to real service when ANALYTICS_ID is set
type AnalyticsEvent =
  | 'page_view' |'get_app_click' |'hero_get_app_click' |'footer_get_app_click' |'download_app_store_click' |'download_play_store_click' |'how_it_works_view' |'safety_page_view' |'faq_open' |'why_we_built_this_view' |'contact_form_start' |'contact_form_submit' |'contact_form_success' |'contact_form_error';

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(event: AnalyticsEvent, properties?: EventProperties): void {
  if (typeof window === 'undefined') return;

  // Preserve UTM parameters
  const urlParams = new URLSearchParams(window.location.search);
  const utmData: EventProperties = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach((param) => {
    const val = urlParams.get(param);
    if (val) utmData[param] = val;
  });

  const payload = { event, ...utmData, ...properties };

  // TODO: Connect to real analytics service when ANALYTICS_ID is configured
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', payload);
  }
}