import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

export interface BentoGridItem {
  title: string;
  desc: string;
  icon?: LucideIcon;
}

export interface BentoGridProps {
  title: string;
  subtitle?: string;
  items: readonly BentoGridItem[];
  columns?: 3 | 4;
  bgColor?: 'white' | 'bone';
}

export default function BentoGrid({
  title,
  subtitle,
  items,
  columns = 3,
  bgColor = 'white',
}: BentoGridProps) {
  return (
    <section
      className={`py-20 ${bgColor === 'bone' ? 'bg-surface' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
          )}
        </div>

        <div className={`grid md:grid-cols-${columns} gap-8`}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className={`${bgColor === 'bone' ? 'bg-white' : 'bg-surface'} p-8 rounded-xl border border-border/50`}
              >
                {Icon && (
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
