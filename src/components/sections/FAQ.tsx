export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQProps {
  title: string;
  items: readonly FAQItem[];
  bgColor?: 'white' | 'bone';
}

export default function FAQ({ title, items, bgColor = 'bone' }: FAQProps) {
  return (
    <section
      className={`py-20 ${bgColor === 'bone' ? 'bg-surface' : 'bg-white'}`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-primary mb-16">
          {title}
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className={`${bgColor === 'bone' ? 'bg-white' : 'bg-surface'} rounded-xl p-6 shadow-sm border border-border/30 group`}
            >
              <summary className="font-bold text-primary cursor-pointer list-none flex items-center justify-between">
                {item.q}
                <span className="text-accent text-xl group-open:rotate-45 transition-transform">
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
  );
}
