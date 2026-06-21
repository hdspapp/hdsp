import { useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Clock, MapPin, Car, Shield, Route } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../data/constants';
import TrustBar from '../components/TrustBar';

const faqItems = [
  {
    q: 'Driver ka verification process kya hai?',
    a: 'Har driver ka CNIC NADRA se verify hota hai, police clearance certificate liya jaata hai, aur previous employers se reference checks kiye jaate hain. Tamam drivers ke paas valid driving license hona zaroori hai.',
  },
  {
    q: 'Part-time driver kaise kaam karta hai?',
    a: 'Part-time driver fixed hours ke liye aata hai — for example, sirf subah school drop aur shaam pickup. Aap apne driver ke saath weekly schedule set karte hain, aur baaki time driver free hota hai.',
  },
  {
    q: 'What areas do you provide drivers for?',
    a: 'We provide drivers across DHA, Clifton, Gulshan, PECHS, North Nazimabad, and all major Karachi areas. Our drivers know the city well and can navigate all routes efficiently.',
  },
  {
    q: 'Do you offer GPS tracking for drivers?',
    a: 'Yes! All HDSP drivers have GPS tracking enabled on HDSP-provided vehicles. For family drivers using your own car, we provide a GPS tracking device upon request for complete peace of mind.',
  },
  {
    q: 'Kya driver ghar ke kaam bhi kar sakta hai?',
    a: 'Driver ka primary responsibility driving hai, lekin light household tasks like grocery pickup ya children ko school chodna included ho sakta hai. Aap requirements upfront share karein to hum合适的 driver match kar sakte hain.',
  },
];

const testimonials = [
  {
    name: 'Rizwan A.',
    loc: 'PECHS',
    text: "Hired a driver through HDSP and the verification process was incredibly thorough. GPS tracking and family-friendly driving — exactly what we needed for our family's safety.",
  },
  {
    name: 'Sana K.',
    loc: 'DHA Phase 4',
    text: 'Our HDSP driver has been with us for 2 months now. Punctual, careful, and great with our kids. The police clearance certificate gave us real confidence before hiring.',
  },
  {
    name: 'Tariq M.',
    loc: 'Clifton',
    text: 'I needed a temporary driver for a month while recovering from surgery. HDSP arranged a verified, professional driver within 24 hours. Seamless experience from start to finish.',
  },
];

const hiringOptions = [
  {
    title: 'Full-Time Driver',
    desc: '8–10 hours daily, 6 days a week. Covers school runs, office commutes, grocery trips, and all family transport needs.',
    icon: Clock,
  },
  {
    title: 'Part-Time Driver',
    desc: 'Fixed daily hours — morning/evening only. Perfect for school pickup & drop, or specific daily errands.',
    icon: Clock,
  },
  {
    title: 'Temporary Driver',
    desc: 'Daily/weekly basis for short-term needs. Ideal for events, recovery periods, or trial before permanent hiring.',
    icon: Route,
  },
  {
    title: 'Night Driver',
    desc: 'Evening/night shift driver for late work hours, dinners, events, and emergency transport at night.',
    icon: Car,
  },
];

export default function DriverService() {
  useEffect(() => {
    document.title = 'Driver Service in Karachi — HDSP Verified Drivers';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Hire NADRA-verified family drivers in Karachi. Full-time, part-time & temporary drivers. GPS tracking, police clearance, valid license guaranteed. DHA, Clifton, Gulshan.'
      );
    }
  }, []);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Service'],
      name: 'Driver Service — HDSP Karachi',
      description:
        'NADRA-verified family drivers for school runs, office commutes, and family transport. Full-time, part-time, temporary, and night shift options across all Karachi areas.',
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
      url: 'https://hdsp.app/driver-service',
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
              ✦ Verified Family Drivers
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
              Driver Service in Karachi — <br />
              <span className="text-cloud-dancer">
                Safe. Verified. Professional.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              NADRA-verified, police-cleared drivers for your family. GPS
              tracking, valid licenses, professional driving. Full-time,
              part-time, or temporary.
            </p>
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 bg-cloud-dancer text-warm-accent px-8 py-5 rounded-lg font-bold text-lg shadow-xl hover:bg-white transition-all active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Driver Chahiye — {PHONE_NUMBER}
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
              What Our Driver Service Includes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every HDSP driver is CNIC verified, police cleared, and holds a
              valid driving license. We match you with a professional who fits
              your family's specific driving needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'School Pickup & Drop',
                desc: 'Safe, punctual transport for your children. Drivers are trained in child safety and arrive 10 minutes before scheduled time.',
              },
              {
                title: 'Office Commute',
                desc: 'Reliable daily office drops and pickups. Flexible timing to accommodate your work schedule and meetings.',
              },
              {
                title: 'Grocery & Errands',
                desc: 'Drivers can handle grocery shopping, bill payments, and other family errands alongside regular driving duties.',
              },
              {
                title: 'Family Outings',
                desc: 'Weekend trips, shopping malls, restaurant visits, and family events. Drivers stay with the car until you are ready.',
              },
              {
                title: 'Airport Transfers',
                desc: 'Timely airport pickup and drop with luggage assistance. Flight tracking included for delay adjustments.',
              },
              {
                title: 'Night Shifts',
                desc: 'Late-night driving for dinners, events, emergency hospital visits, and after-hours commitments.',
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

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              Security & Verification
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We take driver verification seriously. Every HDSP driver goes
              through a comprehensive screening process before being approved
              for your family.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'CNIC Verification',
                desc: 'NADRA-confirmed identity with address verification.',
                icon: Shield,
              },
              {
                title: 'Police Clearance',
                desc: 'Criminal background check from relevant authorities.',
                icon: Shield,
              },
              {
                title: 'License Validation',
                desc: 'Valid driving license verified through transport department.',
                icon: Car,
              },
              {
                title: 'GPS Tracking',
                desc: 'Real-time vehicle tracking for complete peace of mind.',
                icon: MapPin,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-bone p-8 rounded-xl border border-linen/50 text-center"
              >
                <div className="w-14 h-14 bg-warm-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-warm-accent" />
                </div>
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

      {/* Areas Served */}
      <section className="py-20 bg-bone">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-4">
              Areas We Serve
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide verified drivers across all major areas of Karachi.
              Same-day placement available in selected locations.
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
                className="flex items-center gap-2 bg-white px-5 py-3 rounded-full text-sm font-medium text-deep-charcoal border border-linen/30 shadow-sm"
              >
                <MapPin className="w-4 h-4 text-warm-accent" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-deep-charcoal mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="bg-bone rounded-xl p-6 shadow-sm border border-linen/30 group"
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
      <section className="py-20 bg-bone">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-deep-charcoal mb-16">
            What Families Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl italic text-gray-600 shadow-sm"
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
            Driver Chahiye
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
            Need a Verified Driver in Karachi?
          </h2>
          <p className="text-xl text-gray-500 mb-12">
            Aaj hi WhatsApp karein. 24 ghante mein placement. <br />
            Har driver CNIC verified, police cleared, aur licensed hai.
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
