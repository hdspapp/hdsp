export interface TestimonialItem {
  name: string;
  loc: string;
  text: string;
}

export interface TestimonialsProps {
  title: string;
  items: readonly TestimonialItem[];
  columns?: 2 | 3;
  bgColor?: 'white' | 'bone';
}

export default function Testimonials({
  title,
  items,
  columns = 2,
  bgColor = 'white',
}: TestimonialsProps) {
  return (
    <section
      className={`py-20 ${bgColor === 'bone' ? 'bg-surface' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-primary mb-16">
          {title}
        </h2>
        <div
          className={`grid md:grid-cols-${columns} gap-8 max-w-${columns === 2 ? '4xl' : '5xl'} mx-auto`}
        >
          {items.map((t, i) => (
            <div
              key={i}
              className={`${bgColor === 'bone' ? 'bg-white' : 'bg-surface'} p-8 rounded-2xl italic text-gray-600`}
            >
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center font-bold text-accent mb-6">
                {t.name[0]}
              </div>
              <p className="mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="not-italic">
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-xs text-accent font-bold uppercase tracking-widest">
                  {t.loc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
