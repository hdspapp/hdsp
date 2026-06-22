import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Home, Baby, ChefHat, Car, Clock } from 'lucide-react';
import { WHATSAPP_LINK, AREA_DETAILS, type AreaSlug } from '../data/constants';
import { generateAreaSchema, generateFAQSchema } from '../data/schema';
import useSEO from '../hooks/useSEO';
import TrustBar from '../components/TrustBar';
import BentoGrid from '../components/sections/BentoGrid';
import CardGrid from '../components/sections/CardGrid';
import FAQ from '../components/sections/FAQ';
import Testimonials from '../components/sections/Testimonials';
import Guarantee from '../components/sections/Guarantee';
import FinalCTA from '../components/sections/FinalCTA';

const servicesList = [
  {
    icon: Home,
    title: 'Maid Service',
    desc: 'Household cleaning, laundry, and daily home management tailored to your needs.',
  },
  {
    icon: Baby,
    title: 'Babysitting',
    desc: 'Trained childcare professionals who ensure your children are safe and engaged.',
  },
  {
    icon: ChefHat,
    title: 'Home Cook',
    desc: 'Experienced cooks who prepare delicious, hygienic meals matching your taste.',
  },
  {
    icon: Car,
    title: 'Driver',
    desc: 'Licensed, verified drivers for school runs, office commutes, and family outings.',
  },
];

const hiringOptions = [
  {
    title: 'Full-Time',
    desc: '8–10 hours daily, 6 days a week. Complete household staff solution.',
    icon: Clock,
  },
  {
    title: 'Part-Time',
    desc: 'Fixed daily hours for specific tasks. Flexible scheduling.',
    icon: Clock,
  },
  {
    title: 'Temporary',
    desc: 'Daily/weekly basis for short-term needs. Ideal for trials or emergencies.',
    icon: Clock,
  },
];

interface AreaPageProps {
  data: (typeof AREA_DETAILS)[AreaSlug];
}

const Hero = ({ data }: AreaPageProps) => (
  <section className="bg-accent text-white py-20 md:py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-2xl" />
    <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-8 tracking-wide">
          ✦ {data.name} — Trusted Domestic Staff
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-[1.1] max-w-4xl mx-auto text-white">
          {data.heroHeadline}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {data.heroSubtitle}
        </p>
        <p className="text-white/70 mb-12 max-w-xl mx-auto">
          CNIC checked, police cleared, professionally trained — har staff
          member.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_LINK}
            className="bg-surface text-accent px-8 py-5 rounded-lg font-bold text-lg shadow-xl hover:bg-white transition-all transform active:scale-95"
          >
            Abhi WhatsApp Karen
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const WhySection = ({ data }: AreaPageProps) => (
  <section className="py-20 bg-surface">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
        Why HDSP in {data.name}?
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
        {data.whySection}
      </p>
      {data.landmarks.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {data.landmarks.map((lm) => (
            <span
              key={lm}
              className="bg-white px-4 py-2 rounded-full text-sm font-medium text-accent shadow-sm border border-border/50"
            >
              {lm}
            </span>
          ))}
        </div>
      )}
    </div>
  </section>
);

const SubLocalities = ({ data }: AreaPageProps) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
          Areas We Cover in {data.name}
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We provide verified staff across all major blocks and phases of{' '}
          {data.name}.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
        {data.subLocalities.map((loc) => (
          <span
            key={loc}
            className="bg-white px-5 py-3 rounded-xl text-sm font-medium text-primary shadow-sm border border-border/50 hover:border-accent/30 hover:text-accent transition-colors"
          >
            {data.name} {loc}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default function AreaLanding() {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const data = areaSlug ? AREA_DETAILS[areaSlug as AreaSlug] : undefined;

  useSEO({
    title: data?.seoTitle ?? 'HDSP — Home Domestic Services Provider',
    description:
      data?.seoDescription ??
      "Karachi's most trusted domestic staffing agency.",
    canonical: data ? `https://hdsp.pk/area/${data.slug}` : undefined,
  });

  useEffect(() => {
    if (!data) return;

    const schema = generateAreaSchema({
      areaName: data.name,
      areaDescription: data.seoDescription,
      areaSlug: data.slug,
    });
    const faqSchema = generateFAQSchema(data.faq);

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.textContent = JSON.stringify(schema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    return () => {
      script1.remove();
      script2.remove();
    };
  }, [data]);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <main>
      <Hero data={data} />
      <TrustBar />
      <WhySection data={data} />
      <BentoGrid
        title={`All Services in ${data.name}`}
        items={servicesList}
        columns={4}
      />
      <CardGrid
        title="Choose Your Hiring Option"
        items={hiringOptions}
        columns={3}
        bgColor="bone"
      />
      <SubLocalities data={data} />
      <FAQ title="Frequently Asked Questions" items={data.faq} bgColor="bone" />
      <Testimonials
        title={`What Families in ${data.name} Say`}
        items={data.testimonials}
        columns={3}
      />
      <Guarantee />
      <FinalCTA
        title="Need Verified Staff in Your Area?"
        subtitle="Aaj hi WhatsApp karein. 24 ghante mein placement. Har staff member CNIC verified, police cleared, aur trained hai."
      />
    </main>
  );
}
