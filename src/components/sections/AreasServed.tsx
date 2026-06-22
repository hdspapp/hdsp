import { MapPin } from 'lucide-react';

export interface AreasServedProps {
  title: string;
  subtitle?: string;
  areas: readonly string[];
  bgColor?: 'white' | 'bone';
}

export default function AreasServed({
  title,
  subtitle,
  areas,
  bgColor = 'white',
}: AreasServedProps) {
  return (
    <section
      className={`py-20 ${bgColor === 'bone' ? 'bg-surface' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-surface px-5 py-3 rounded-full text-sm font-medium text-primary border border-border/30"
            >
              <MapPin className="w-4 h-4 text-accent" />
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
