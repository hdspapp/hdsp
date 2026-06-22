import { useEffect } from 'react';
import { SERVICE_DATA } from '../data/constants';
import { generateServiceSchema } from '../data/schema';
import useSEO from '../hooks/useSEO';
import TrustBar from '../components/TrustBar';
import ServiceHero from '../components/sections/ServiceHero';
import BentoGrid from '../components/sections/BentoGrid';
import CardGrid from '../components/sections/CardGrid';
import AreasServed from '../components/sections/AreasServed';
import FAQ from '../components/sections/FAQ';
import Testimonials from '../components/sections/Testimonials';
import Guarantee from '../components/sections/Guarantee';
import FinalCTA from '../components/sections/FinalCTA';

const data = SERVICE_DATA['home-cook'];
const serviceSlug = 'home-cook';

export default function HomeCookService() {
  useSEO({
    title: data.seoTitle,
    description: data.seoDescription,
  });

  useEffect(() => {
    const schema = {
      ...generateServiceSchema({
        serviceName: data.name,
        serviceDescription: data.seoDescription,
      }),
      url: `https://hdsp.pk/${serviceSlug}-service`,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('service-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <main>
      <ServiceHero
        badge={data.badge}
        headline={`${data.heroHeadline} <br /><span class="text-white">${data.heroTagline}</span>`}
        subtitle={data.heroSubtitle}
        ctaText="Cook Chahiye"
      />
      <TrustBar />
      <BentoGrid
        title={data.serviceDetailsTitle}
        subtitle={data.serviceDetailsSubtitle}
        items={data.serviceDetails}
        columns={4}
      />
      <CardGrid
        title={data.hiringOptionsTitle}
        items={data.hiringOptions}
        columns={4}
      />
      <AreasServed
        title={data.areasTitle}
        subtitle={data.areasSubtitle}
        areas={data.areas}
      />
      <FAQ title="Frequently Asked Questions" items={data.faq} />
      <Testimonials
        title={data.testimonialsTitle}
        items={data.testimonials}
        columns={2}
      />
      <Guarantee />
      <FinalCTA title={data.finalCTATitle} subtitle={data.finalCTASubtitle} />
    </main>
  );
}
