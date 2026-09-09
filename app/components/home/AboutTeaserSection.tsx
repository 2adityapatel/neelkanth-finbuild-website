import Link from "next/link";

export default function AboutTeaserSection() {
  return (
    <section className="bg-neelkanth-blue py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: Narrative & Profile Link ── */}
          <div>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
              About us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              About Neelkanth Finbuild
            </h2>
            <p className="mt-5 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
              Established in New Delhi in 1996, Neelkanth Finbuild Limited is a
              public limited NBFC serving borrowers in Delhi and Guwahati.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-neelkanth-blue px-6 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              View company profile
              <ArrowRight />
            </Link>
          </div>

          {/* ── Right: Quiet Corporate Profile Panel ── */}
          <div className="rounded-2xl bg-white/10 border border-white/15 p-6 sm:p-8 backdrop-blur-sm">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Corporate profile
            </p>
            <div className="divide-y divide-white/10">
              <div className="py-3.5 flex justify-between items-center text-sm">
                <span className="text-white/60">Established</span>
                <span className="font-semibold text-white">1996</span>
              </div>
              <div className="py-3.5 flex justify-between items-center text-sm">
                <span className="text-white/60">Entity</span>
                <span className="font-semibold text-white">Public Limited NBFC</span>
              </div>
              <div className="py-3.5 flex justify-between items-center text-sm">
                <span className="text-white/60">Offices</span>
                <span className="font-semibold text-white">Delhi &amp; Guwahati</span>
              </div>
              <div className="py-3.5 flex justify-between items-center text-sm">
                <span className="text-white/60">Corporate disclosures</span>
                <Link
                  href="/annual-return"
                  className="font-semibold text-white hover:text-white/80 underline underline-offset-4 decoration-white/40"
                >
                  Annual Returns
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
