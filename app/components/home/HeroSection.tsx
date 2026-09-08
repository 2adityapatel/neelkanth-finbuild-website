import CTAButton from "@/app/components/CTAButton";

const HELPLINE = "0361-2221111";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

          {/* ── Text ── */}
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neelkanth-blue/20 bg-white px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-neelkanth-blue shrink-0" />
              <span className="text-xs font-medium text-neelkanth-blue tracking-wide">
                Established 1996 · RBI-registered NBFC
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-ink-navy leading-tight tracking-tight">
              Trusted financing,{" "}
              <span className="text-neelkanth-blue">
                backed by three decades
              </span>{" "}
              of experience.
            </h1>

            <p className="mt-5 text-lg text-slate leading-relaxed max-w-xl">
              Personal loans, business loans, and loan against property —
              structured for real needs, offered with transparency, from offices
              in New Delhi and Guwahati.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <CTAButton phone={HELPLINE} label="Call now — 0361-2221111" />
              <a
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neelkanth-blue hover:underline underline-offset-4"
              >
                View our loan products
                <ArrowRight />
              </a>
            </div>

            {/* Key facts strip */}
            <div className="mt-10 pt-8 border-t border-slate/20 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { label: "Incorporated", value: "1996" },
                { label: "Registration", value: "NBFC · RBI" },
                { label: "Offices", value: "Delhi & Guwahati" },
              ].map((fact) => (
                <div key={fact.label}>
                  <p className="text-[11px] font-medium text-slate uppercase tracking-widest">
                    {fact.label}
                  </p>
                  <p className="text-sm font-semibold text-ink-navy mt-0.5">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Geometric illustration ── */}
          <div className="hidden lg:block" aria-hidden="true">
            <GeometricIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function GeometricIllustration() {
  return (
    <svg
      viewBox="0 0 420 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Concentric rectangles — architectural / blueprint feel */}
      <rect x="20" y="20" width="380" height="340" rx="6"
        stroke="#226BAD" strokeOpacity="0.08" strokeWidth="1.5" />
      <rect x="55" y="55" width="310" height="270" rx="4"
        stroke="#226BAD" strokeOpacity="0.11" strokeWidth="1" />
      <rect x="90" y="90" width="240" height="200" rx="4"
        fill="#226BAD" fillOpacity="0.04"
        stroke="#226BAD" strokeOpacity="0.14" strokeWidth="1" />

      {/* Dashed arc — top right */}
      <circle cx="400" cy="20" r="100"
        stroke="#226BAD" strokeOpacity="0.08" strokeWidth="1"
        strokeDasharray="4 7" />
      <circle cx="400" cy="20" r="60"
        stroke="#C97D2C" strokeOpacity="0.12" strokeWidth="1"
        strokeDasharray="3 8" />

      {/* Central focal block */}
      <rect x="145" y="145" width="130" height="90" rx="3"
        fill="#226BAD" fillOpacity="0.07"
        stroke="#226BAD" strokeOpacity="0.18" strokeWidth="1" />
      <rect x="165" y="163" width="90" height="54" rx="2"
        fill="#226BAD" fillOpacity="0.10" />

      {/* Horizontal rule lines */}
      <line x1="20" y1="220" x2="145" y2="220"
        stroke="#226BAD" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="275" y1="220" x2="400" y2="220"
        stroke="#226BAD" strokeOpacity="0.12" strokeWidth="1" />

      {/* Vertical rule lines */}
      <line x1="210" y1="20" x2="210" y2="145"
        stroke="#226BAD" strokeOpacity="0.10" strokeWidth="1" />
      <line x1="210" y1="235" x2="210" y2="360"
        stroke="#226BAD" strokeOpacity="0.10" strokeWidth="1" />

      {/* Sun Ochre accent dots */}
      <circle cx="388" cy="32" r="10" fill="#C97D2C" fillOpacity="0.28" />
      <circle cx="388" cy="32" r="5"  fill="#C97D2C" fillOpacity="0.45" />
      <circle cx="35"  cy="348" r="7" fill="#C97D2C" fillOpacity="0.20" />
      <circle cx="370" cy="348" r="5" fill="#226BAD" fillOpacity="0.22" />

      {/* Dot grid — bottom right */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={310 + col * 18}
            cy={270 + row * 18}
            r="1.8"
            fill="#226BAD"
            fillOpacity={0.12 + row * 0.02}
          />
        ))
      )}
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
