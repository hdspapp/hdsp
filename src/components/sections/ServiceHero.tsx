import { motion } from 'motion/react';
import { MessageCircle, type LucideIcon } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../../data/constants';

export interface ServiceHeroProps {
  badge: string;
  headline: string;
  subtitle: string;
  ctaText: string;
  ctaIcon?: LucideIcon;
}

export default function ServiceHero({
  badge,
  headline,
  subtitle,
  ctaText,
  ctaIcon: CtaIcon = MessageCircle,
}: ServiceHeroProps) {
  return (
    <section className="bg-accent text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-8 tracking-wide">
            ✦ {badge}
          </span>
          <h1
            className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]"
            dangerouslySetInnerHTML={{ __html: headline }}
          />
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
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
      </div>
    </section>
  );
}
