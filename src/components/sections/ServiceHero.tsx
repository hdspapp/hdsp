import { motion } from 'motion/react';
import { MessageCircle, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../../data/constants';

export interface ServiceHeroProps {
  badge: string;
  headline: string;
  subtitle: string;
  ctaText: string;
  ctaIcon?: LucideIcon;
  illustration?: ReactNode;
}

export default function ServiceHero({
  badge,
  headline,
  subtitle,
  ctaText,
  ctaIcon: CtaIcon = MessageCircle,
  illustration,
}: ServiceHeroProps) {
  return (
    <section className="bg-accent text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-8 tracking-wide">
              ✦ {badge}
            </span>
            <h1
              className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-[1.1] text-white"
              dangerouslySetInnerHTML={{ __html: headline }}
            />
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 bg-surface text-accent px-8 py-5 rounded-lg font-bold text-lg shadow-xl hover:bg-white transition-all active:scale-95"
            >
              <CtaIcon className="w-6 h-6" />
              {ctaText} — {PHONE_NUMBER}
            </a>
          </motion.div>
          {illustration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-64 h-64 lg:w-80 lg:h-80 shrink-0"
            >
              {illustration}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
