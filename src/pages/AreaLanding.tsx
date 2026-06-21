import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MessageCircle,
  Clock,
  MapPin,
  Home,
  ChefHat,
  Baby,
  Car,
  Shield,
} from 'lucide-react';
import {
  WHATSAPP_LINK,
  PHONE_NUMBER,
  AREA_DETAILS,
  type AreaSlug,
} from '../data/constants';
import { generateAreaSchema } from '../data/schema';
import useSEO from '../hooks/useSEO';
import TrustBar from '../components/TrustBar';

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

function generateFAQSchema(faq: readonly { q: string; a: string }[]) {
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

interface AreaPageProps {
  data: (typeof AREA_DETAILS)[AreaSlug];
}

const Hero = ({ data }: AreaPageProps) => (
  <section className="bg-warm-accent text-white py-20 md:py-32 relative overflow-hidden">
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
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-[1.1] max-w-4xl mx-auto">
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
            className="bg-cloud-dancer text-warm-accent px-8 py-5 rounded-lg font-bold text-lg shadow-xl hover:bg-white transition-all transform active:scale-95"
          >
            Abhi WhatsApp Karen
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const WhySection = ({ data }: AreaPageProps) => (
  <section className="py-20 bg-bone">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-charcoal mb-8">
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
              className="bg-white px-4 py-2 rounded-full text-sm font-medium text-warm-accent shadow-sm border border-linen/50"
            >
              {lm}
            </span>
          ))}
        </div>
      )}
    </div>
  </section>
);

const Services = ({ data }: AreaPageProps) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-4">
          All Services in {data.name}
        </h2>
        <div className="w-24 h-1 bg-warm-accent mx-auto rounded-full" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesList.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bento-card text-center group"
            >
              <div className="w-16 h-16 bg-warm-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-warm-accent group-hover:bg-warm-accent group-hover:text-white transition-all">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const HiringOptions = () => (
  <section className="py-20 bg-bone">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-4">
          Choose Your Hiring Option
        </h2>
        <div className="w-24 h-1 bg-warm-accent mx-auto rounded-full" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {hiringOptions.map((opt, idx) => {
          const Icon = opt.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center"
            >
              <div className="w-14 h-14 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-warm-accent">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                {opt.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {opt.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const SubLocalities = ({ data }: AreaPageProps) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-charcoal mb-4">
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
            className="bg-white px-5 py-3 rounded-xl text-sm font-medium text-deep-charcoal shadow-sm border border-linen/50 hover:border-warm-accent/30 hover:text-warm-accent transition-colors"
          >
            {data.name} {loc}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = ({ data }: AreaPageProps) => (
  <section className="py-20 bg-bone">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-deep-charcoal mb-16">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {data.faq.map((item, idx) => (
          <details
            key={idx}
            className="bg-white rounded-xl shadow-sm group open:shadow-md transition-shadow"
          >
            <summary className="px-6 py-5 font-bold text-deep-charcoal cursor-pointer flex items-center justify-between list-none">
              <span>{item.q}</span>
              <span className="text-warm-accent text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-gray-500 leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = ({ data }: AreaPageProps) => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
        What Families in {data.name} Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {data.testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-sm italic text-gray-600 relative"
          >
            <div className="w-12 h-12 bg-cloud-dancer rounded-full flex items-center justify-center font-bold text-warm-accent mb-6">
              {t.name[0]}
            </div>
            <p className="mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            <div className="not-italic">
              <p className="font-bold text-deep-charcoal">{t.name}</p>
              <p className="text-xs text-warm-accent font-bold uppercase tracking-widest">
                {t.loc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="bg-warm-accent py-20 text-white text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6">
        30-Din Mein Satisfy Nahi? <br />
        Hum Replace Karenge.
      </h2>
      <p className="text-xl opacity-90 mb-10 italic">
        Koi sawaal nahi. Koi argument nahi. <br className="hidden md:block" />
        Free replacement within 30 days — guaranteed.
      </p>
      <a
        href={WHATSAPP_LINK}
        className="inline-block bg-white text-warm-accent px-10 py-5 rounded-lg font-bold text-lg hover:bg-cloud-dancer transition-all transform active:scale-95 shadow-xl"
      >
        Guarantee Ke Baare Mein Janein
      </a>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 bg-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
        Need Verified Staff in Your Area?
      </h2>
      <p className="text-xl text-gray-500 mb-12">
        Aaj hi WhatsApp karein. 24 ghante mein placement.{' '}
        <br className="hidden md:block" />
        Har staff member CNIC verified, police cleared, aur trained hai.
      </p>
      <a
        href={WHATSAPP_LINK}
        className="inline-flex items-center gap-4 bg-[#25d366] text-white px-10 py-6 rounded-xl font-bold text-xl hover:opacity-90 transition-all shadow-2xl hover:shadow-green-500/20 active:scale-95"
      >
        <MessageCircle className="w-8 h-8" />
        WhatsApp Karen — {PHONE_NUMBER}
      </a>
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
      <Services data={data} />
      <HiringOptions />
      <SubLocalities data={data} />
      <FAQ data={data} />
      <Testimonials data={data} />
      <Guarantee />
      <FinalCTA />
    </main>
  );
}
