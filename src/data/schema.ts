import { COMPANY_NAME, PHONE_NUMBER, AREAS_SERVED } from './constants';

interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQSchema(faq: readonly FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

interface ServicePageSchema {
  serviceName: string;
  serviceDescription: string;
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    image: 'https://hdsp.app/logo.jpg',
    telephone: PHONE_NUMBER,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
    areaServed: AREAS_SERVED.map((area) => ({
      '@type': 'City',
      name: `${area}, Karachi`,
    })),
    priceRange: 'PKR',
    url: 'https://hdsp.app',
  };
}

interface AreaSchemaProps {
  areaName: string;
  areaDescription: string;
  areaSlug: string;
}

export function generateAreaSchema({
  areaName,
  areaDescription,
  areaSlug,
}: AreaSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Service'],
    name: `Domestic Staff in ${areaName}, Karachi — ${COMPANY_NAME}`,
    description: areaDescription,
    url: `https://hdsp.pk/area/${areaSlug}`,
    telephone: PHONE_NUMBER,
    areaServed: [{ '@type': 'City', name: `${areaName}, Karachi` }],
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      telephone: PHONE_NUMBER,
    },
  };
}

export function generateServiceSchema({
  serviceName,
  serviceDescription,
}: ServicePageSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Service'],
    name: `${serviceName} — ${COMPANY_NAME}`,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      telephone: PHONE_NUMBER,
      areaServed: AREAS_SERVED.map((area) => ({
        '@type': 'City',
        name: `${area}, Karachi`,
      })),
    },
    areaServed: AREAS_SERVED.map((area) => ({
      '@type': 'City',
      name: `${area}, Karachi`,
    })),
    url: 'https://hdsp.app',
    telephone: PHONE_NUMBER,
  };
}
