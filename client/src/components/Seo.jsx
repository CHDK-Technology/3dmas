import { useEffect } from 'react';

const SITE = 'https://www.3dmas.in';
const DEFAULT_IMAGE = `${SITE}/og-cover.png`;

/**
 * Lightweight, dependency-free head manager.
 * Updates document title + meta/canonical/OG tags on route change.
 *
 * NOTE: This runs in the browser, so it benefits real users and Google's
 * JS-rendering crawler. Pure HTML bots (WhatsApp/LinkedIn link previews)
 * read the static defaults in index.html. Per-route previews for those bots
 * require build-time prerendering or SSR (planned as a later phase).
 */
function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    const fullTitle = title ? `${title} | 3DMAS` : '3DMAS — 3 Dimensional Measurement & Solution';

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertCanonical(url);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
  }, [title, description, path, image]);

  return null;
}