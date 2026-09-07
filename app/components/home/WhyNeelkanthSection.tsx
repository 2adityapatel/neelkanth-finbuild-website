/* Three plain facts — no animated counters, per the project brief */

const FACTS = [
  {
    label: "Established",
    value: "1996",
    detail:
      "Founded by Sri Vijay Kumar Jasrasaria in 1996 and incorporated as Neelkanth Finbuild Private Limited on 14 August 1996 in New Delhi.",
    icon: <CalendarIcon />,
  },
  {
    label: "Registration",
    value: "RBI-registered NBFC",
    detail:
      "Neelkanth Finbuild Limited is registered with the Reserve Bank of India as a Non-Banking Financial Company, operating under applicable RBI regulations.",
    icon: <ShieldIcon />,
  },
  {
    label: "Offices",
    value: "Delhi & Guwahati",
    detail:
      "Registered office in Greater Kailash II, New Delhi. Branch office at V.K. Trade Centre, Dispur, Guwahati, Assam.",
    icon: <MapPinIcon />,
  },
];

export default function WhyNeelkanthSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-sun-ochre uppercase tracking-widest mb-2">
            Why us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-navy">
            Why Neelkanth Finbuild
          </h2>
          <p className="mt-3 text-slate max-w-lg">
            Not claims — specific, verifiable facts about who we are.
          </p>
        </div>

        {/* Fact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-slate/15 bg-paper px-7 py-8"
            >
              {/* Icon */}
              <div className="mb-5 text-neelkanth-blue">{fact.icon}</div>

              {/* Label */}
              <p className="text-[11px] font-semibold text-slate uppercase tracking-widest mb-1">
                {fact.label}
              </p>

              {/* Value */}
              <p className="text-2xl font-bold text-ink-navy font-headline">
                {fact.value}
              </p>

              {/* Detail */}
              <p className="mt-3 text-sm text-slate leading-relaxed">
                {fact.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
