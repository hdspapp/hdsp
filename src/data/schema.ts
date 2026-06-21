import { COMPANY_NAME, PHONE_NUMBER, AREAS_SERVED } from './constants';

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
