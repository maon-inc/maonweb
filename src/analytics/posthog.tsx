import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const POSTHOG_HOST =
  (import.meta.env.VITE_POSTHOG_HOST as string | undefined) ||
  'https://us.i.posthog.com';

export function initPostHog() {
  if (!POSTHOG_KEY) return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false, // We handle this manually for SPA routing
    capture_pageleave: true,
    autocapture: true,
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: '*',
    },
  });
}

export function PostHogPageviewTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!POSTHOG_KEY) return;
    posthog.capture('$pageview', {
      $current_url: window.location.href,
    });
  }, [location.pathname]);

  return null;
}

export function trackCtaClick(label: string, href: string) {
  if (!POSTHOG_KEY) return;
  posthog.capture('cta_click', { label, href });
}

export function trackQrCodeOpen(label: string, href: string) {
  if (!POSTHOG_KEY) return;
  posthog.capture('qr_code_open', { label, href });
}
