import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { WHATSAPP_LINK } from '../data/constants';

export interface AnimatedServiceCardProps {
  illustration: ReactNode;
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText: string;
}

export default function AnimatedServiceCard({
  illustration,
  icon: Icon,
  title,
  description,
  ctaText,
}: AnimatedServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all cursor-default border border-gray-100"
    >
      <div className="relative h-52 bg-gradient-to-br from-[#FDF6EE] to-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 z-10" />
        <div className="w-44 h-44 relative z-0">{illustration}</div>
      </div>

      <div className="p-6 pt-0 -mt-4 relative z-20">
        <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          {description}
        </p>
        <a
          href={WHATSAPP_LINK}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
        >
          {ctaText}
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}
