import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  Shield,
  MapPin,
  Clock,
  CheckCircle,
  Home,
} from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../data/constants';
import TrustBar from '../components/TrustBar';

const faqItems = [
  {
    q: 'Maid kitne ghante kaam karti hai?',
    a: 'Part-time maids typically work 3–4 hours per day. Full-time maids work 6–8 hours. Live-in maids stay at your residence and manage household tasks throughout the day. You can choose the arrangement that fits your needs.',
  },
  {
    q: 'Part-time maid ka kya process hai?',
    a: 'Part-time hiring is straightforward: call us on WhatsApp, tell us your requirements (hours, days, tasks), and we match you with a verified maid within 24–48 hours. First week includes a trial period — no commitment required.',
  },
  {
    q: 'How quickly can you place a maid in Karachi?',
    a: 'Most placements happen within 24–48 hours. We maintain a pool of pre-verified candidates across DHA, Clifton, Gulshan, PECHS, and all major Karachi areas. Urgent requests can sometimes be fulfilled the same day.',
  },
  {
    q: 'Kya aap DHA mein maid provide karte hain?',
    a: 'Jee haan! Hum DHA Phase 1–8, Clifton, Gulshan, PECHS, North Nazimabad, aur Karachi ke tamam bade areas mein maid provide karte hain. Aap jo bhi area mein hain, hum wahan par verified staff bhej sakte hain.',
  },
  {
    q: 'What if I am not satisfied with the maid?',
    a: 'We offer a 30-day replacement guarantee. If you are not satisfied for any reason, we replace the staff member free of charge — no questions asked. Client satisfaction is our top priority.',
  },
];

const testimonials = [
  {
    name: 'Ayesha K.',
    loc: 'DHA Phase 6',
    text: "Found HDSP via WhatsApp group recommendation. It's been 4 months and our maid has been consistently reliable. The verification process gave us real peace of mind.",
  },
  {
    name: 'Fatima S.',
    loc: 'Clifton',
    text: 'I needed a part-time maid for 3 hours daily. HDSP arranged everything within 48 hours. The QR-linked ID card feature is something no other agency offers in Karachi.',
  },
];

const hiringOptions = [
  {
    title: 'Full-Time Maid',
    desc: '6–8 hours daily, 6 days a week. Covers cleaning, laundry, dishes, kitchen organization, and household management.',
    icon: Clock,
  },
  {
    title: 'Part-Time Maid',
    desc: '3–4 hours daily, flexible days. Perfect for families who need help with specific tasks like cleaning or laundry.',
    icon: Clock,
  },
  {
    title: 'Live-In Maid',
    desc: 'Stays at your residence full-time. Handles all household duties around the clock. Ideal for large homes or families with busy schedules.',
    icon: Home,
  },
  {
    title: 'Weekly Maid',
    desc: 'Once or twice a week deep cleaning. Great for maintenance cleaning between regular staff or for smaller apartments.',
    icon: CheckCircle,
  },
];

export default function MaidService() {
  useEffect(() => {
    document.title = 'Maid Service in Karachi — HDSP Verified House Maids';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Hire NADRA-verified maids in Karachi. Full-time, part-time & live-in maids for DHA, Clifton, Gulshan. CNIC & police clearance. 30-day replacement guarantee.'
      );
    }
  }, []);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Service'],
      name: 'Maid Service — HDSP Karachi',
      description:
        'NADRA-verified housemaids for cleaning, laundry, dishes, and household management. Full-time, part-time, and live-in options across all Karachi areas.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'HDSP — Home Domestic Services Provider',
        telephone: '0335-8172235',
        areaServed: [
          { '@type': 'City', name: 'DHA, Karachi' },
          { '@type': 'City', name: 'Clifton, Karachi' },
          { '@type': 'City', name: 'Gulshan-e-Iqbal, Karachi' },
          { '@type': 'City', name: 'PECHS, Karachi' },
          { '@type': 'City', name: 'North Nazimabad, Karachi' },
        ],
      },
      areaServed: [
        { '@type': 'City', name: 'DHA, Karachi' },
        { '@type': 'City', name: 'Clifton, Karachi' },
        { '@type': 'City', name: 'Gulshan-e-Iqbal, Karachi' },
        { '@type': 'City', name: 'PECHS, Karachi' },
        { '@type': 'City', name: 'North Nazimabad, Karachi' },
      ],
      url: 'https://hdsp.app/maid-service',
      telephone: '0335-8172235',
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
      {/* Hero */}
      <section className="bg-warm-accent text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-8 tracking-wide">
              ✦ Verified Maid Service
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
              Maid Service in Karachi — <br />
              <span className="text-cloud-dancer">
                Verified. Trained. Trusted.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              CNIC-verified, police-cleared maids for your home. Full-time,
              part-time, or live-in. Serving DHA, Clifton, Gulshan, and all
              Karachi.
            </p>
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 bg-cloud-dancer text-warm-accent px-8 py-5 rounded-lg font-bold text-lg shadow-xl hover:bg-white transition-all active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Abhi Maid Chahiye — {PHONE_NUMBER}
            </a>
          </motion.div>
        </div>
      </section>

      <TrustBar />

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              What Our Maid Service Covers
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every HDSP maid is trained, verified, and equipped to handle your
              household needs professionally. We tailor the scope of work to
              your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cleaning & Dusting',
                desc: 'Sweeping, mopping, dusting all rooms, cleaning bathrooms, and keeping your living spaces spotless.',
              },
              {
                title: 'Laundry & Ironing',
                desc: 'Washing, drying, folding, and ironing clothes. We handle all fabric types with care.',
              },
              {
                title: 'Kitchen & Dishes',
                desc: 'Washing dishes, cleaning counters, organizing cabinets, and maintaining kitchen hygiene.',
              },
              {
                title: 'Home Organization',
                desc: 'Arranging shelves, organizing wardrobes, tidying up living areas, keeping your home orderly.',
              },
              {
                title: 'Deep Cleaning',
                desc: 'Periodic deep cleaning including windows, fans, cabinets, and hard-to-reach areas.',
              },
              {
                title: 'Custom Tasks',
                desc: "Tell us what you need. We customize the maid's duties based on your family's specific requirements.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-bone p-8 rounded-xl border border-linen/50"
              >
                <h3 className="text-lg font-bold text-deep-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Options */}
      <section className="py-20 bg-bone">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-deep-charcoal mb-16">
            Choose Your Hiring Option
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {hiringOptions.map((opt, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-linen/30"
              >
                <div className="w-14 h-14 bg-warm-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <opt.icon className="w-7 h-7 text-warm-accent" />
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3">
                  {opt.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {opt.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-4">
              Areas We Serve
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide verified maids across all major areas of Karachi.
              Same-day service available in select locations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'DHA Phase 1–8',
              'Clifton',
              'Gulshan-e-Iqbal',
              'PECHS',
              'North Nazimabad',
              'Gulistan-e-Jauhar',
              'Defence',
              'Bahadurabad',
              'Saddar',
              'Malir',
              'Korangi',
              'Scheme 33',
              'Gulzar-e-Hijri',
              'Johar',
            ].map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-bone px-5 py-3 rounded-full text-sm font-medium text-deep-charcoal border border-linen/30"
              >
                <MapPin className="w-4 h-4 text-warm-accent" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bone">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-deep-charcoal mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-linen/30 group"
              >
                <summary className="font-bold text-deep-charcoal cursor-pointer list-none flex items-center justify-between">
                  {item.q}
                  <span className="text-warm-accent text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-deep-charcoal mb-16">
            What Families Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-bone p-8 rounded-2xl italic text-gray-600"
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

      {/* Guarantee */}
      <section className="bg-warm-accent py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6">
            30-Din Mein Satisfy Nahi? <br />
            Hum Replace Karenge.
          </h2>
          <p className="text-xl opacity-90 mb-10 italic">
            Koi sawaal nahi. Koi argument nahi.{' '}
            <br className="hidden md:block" />
            Free replacement within 30 days — guaranteed.
          </p>
          <a
            href={WHATSAPP_LINK}
            className="inline-block bg-white text-warm-accent px-10 py-5 rounded-lg font-bold text-lg hover:bg-cloud-dancer transition-all shadow-xl"
          >
            Maid Service Chahiye
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
            Need a Verified Maid in Karachi?
          </h2>
          <p className="text-xl text-gray-500 mb-12">
            Aaj hi WhatsApp karein. Hum 24 ghante mein jawab denge. <br />
            CNIC verification, police clearance, aur training — sab free.
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
    </main>
  );
}
