export default function TrustBar() {
  return (
    <section className="bg-primary py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-base text-white/80 font-medium">
          <span className="flex items-center gap-2 px-4 border-r border-white/10 last:border-none">
            CNIC Verified Staff
          </span>
          <span className="flex items-center gap-2 px-4 border-r border-white/10 last:border-none">
            Police Clearance Checked
          </span>
          <span className="flex items-center gap-2 px-4 border-r border-white/10 last:border-none">
            Professionally Trained
          </span>
          <span className="flex items-center gap-2 px-4 border-r border-white/10 last:border-none">
            30-Day Replacement Guarantee
          </span>
          <span className="flex items-center gap-2 px-4 last:border-none uppercase tracking-widest text-xs opacity-60">
            DHA · Clifton · PECHS · Gulshan
          </span>
        </div>
      </div>
    </section>
  );
}
