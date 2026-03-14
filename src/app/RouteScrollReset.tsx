import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function RouteScrollReset() {
  const location = useLocation();

  useEffect(() => {
    if (
      typeof navigator !== 'undefined' &&
      /jsdom/i.test(navigator.userAgent) &&
      /notImplemented/i.test(String(window.scrollTo))
    ) {
      return;
    }

    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch {
      // JSDOM does not implement window.scrollTo.
    }
  }, [location.pathname]);

  return null;
}
