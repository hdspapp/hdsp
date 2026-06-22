import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

export interface CardGridItem {
  title: string;
  desc: string;
  icon?: LucideIcon;
}

export interface CardGridProps {
  title: string;
  items: readonly CardGridItem[];
  columns?: 3 | 4;
  bgColor?: 'white' | 'bone';
}

export default function CardGrid({
  title,
  items,
  columns = 4,
  bgColor = 'bone',
}: CardGridProps) {
  return (
    <section
      className={`py-20 ${bgColor === 'bone' ? 'bg-surface' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-primary mb-16">
          {title}
        </h2>
        <div className={`grid md:grid-cols-${columns} gap-6`}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`${bgColor === 'bone' ? 'bg-white' : 'bg-surface'} p-8 rounded-2xl shadow-sm border border-border/30`}
              >
                {Icon && (
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary mb-3">
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
