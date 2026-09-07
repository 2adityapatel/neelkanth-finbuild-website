import Link from "next/link";

export default function AboutTeaserSection() {
  return (
    <section className="bg-neelkanth-blue py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Text ── */}
          <div>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
              About us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Three decades of measured,
              <br className="hidden sm:block" /> responsible lending.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed max-w-lg">
              Neelkanth Finbuild Limited was founded in New Delhi in 1996 by
              Sri Vijay Kumar Jasrasaria and converted to a public limited
              company in 2004. As an RBI-registered Non-Banking Financial
              Company, the firm has focused on serving individuals and
              businesses with transparent loan products across Delhi and
              Guwahati.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-neelkanth-blue px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Learn more about us
              <ArrowRight />
            </Link>
          </div>

          {/* ── Director / Leadership summary ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: "Vijay Kumar Jasrasaria",
                credential: "B.Com · ~50 years business experience",
              },
              {
                name: "Ashish Jasrasaria",
                credential: "MBA",
              },
              {
                name: "Vineeta Jasrasaria",
                credential: "Director",
              },
            ].map((d) => (
              <div
                key={d.name}
                className="rounded-xl bg-white/10 border border-white/15 px-5 py-5"
              >
                {/* Avatar placeholder */}
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <PersonIcon />
                </div>
                <p className="text-sm font-semibold text-white leading-snug">
                  {d.name}
                </p>
                <p className="mt-1 text-xs text-white/55">{d.credential}</p>
                <p className="mt-1 text-xs text-white/40 uppercase tracking-widest">
                  Director
                </p>
              </div>
            ))}
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

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
