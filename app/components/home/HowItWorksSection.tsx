const STEPS = [
  {
    number: "01",
    title: "Call us",
    description:
      "Reach us at 0361-2221111. Tell us the loan type you need and we'll guide you through the eligibility and documentation requirements.",
    icon: <PhoneIcon />,
  },
  {
    number: "02",
    title: "Share your documents",
    description:
      "Submit identity proof, address proof, income proof, and any product-specific documents. Our team reviews your application promptly.",
    icon: <DocumentIcon />,
  },
  {
    number: "03",
    title: "Get your loan",
    description:
      "Once your documents are verified and your application is approved, the loan amount is disbursed to your account.",
    icon: <CheckCircleIcon />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-sun-ochre uppercase tracking-widest mb-2">
            Simple process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-navy">
            How it works
          </h2>
          <p className="mt-3 text-slate max-w-lg">
            Three straightforward steps — no branch visit required to get started.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-neelkanth-blue/15"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl border border-slate/15 px-7 py-8"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neelkanth-blue text-white text-sm font-bold">
                  {i + 1}
                </div>
                <span className="font-headline text-4xl font-bold text-slate/10 select-none">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4 text-neelkanth-blue">{step.icon}</div>

              <h3 className="text-lg font-bold text-ink-navy mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
