import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

function setOrCreateMeta(
  selector: string,
  attrs: Record<string, string>,
  content: string
) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    for (const [k, v] of Object.entries(attrs)) {
      el.setAttribute(k, v);
    }
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title;

    // Standard meta description
    setOrCreateMeta(
      'meta[name="description"]',
      { name: 'description' },
      description
    );
    setOrCreateMeta(
      'meta[property="og:title"]',
      { property: 'og:title' },
      title
    );
    setOrCreateMeta(
      'meta[property="og:description"]',
      { property: 'og:description' },
      description
    );
    setOrCreateMeta(
      'meta[name="twitter:title"]',
      { name: 'twitter:title' },
      title
    );
    setOrCreateMeta(
      'meta[name="twitter:description"]',
      { name: 'twitter:description' },
      description
    );

    if (canonical) {
      setOrCreateMeta(
        'meta[property="og:url"]',
        { property: 'og:url' },
        canonical
      );

      let link = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);
}
