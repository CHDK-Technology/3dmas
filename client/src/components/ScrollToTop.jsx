import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll to the top whenever the route changes.
// Works with the Lenis smooth-scroll instance (exposed on window in main.jsx),
// falling back to the native window scroll if Lenis isn't present.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}