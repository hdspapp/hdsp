export default function Footer() {
  return (
    <footer className="bg-primary py-12 text-center border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-white/40 text-sm mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="font-bold text-white/60">
            HDSP — Home Domestic Services Provider
          </span>
          <span className="hidden md:block">•</span>
          <span>Karachi, Pakistan</span>
          <span className="hidden md:block">•</span>
          <span>0335-8172235</span>
        </div>
        <div className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
          Serving DHA · Clifton · PECHS · Gulshan · Bahria Town · North
          Nazimabad
        </div>
        <div className="mt-8 text-[10px] text-white/10 uppercase tracking-widest">
          &copy; 2026 HDSP Karachi. Trusted Partnerships Since Inception.
        </div>
      </div>
    </footer>
  );
}
