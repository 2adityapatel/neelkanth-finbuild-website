/* Native <details>/<summary> accordion — no JS state needed, works in static export */

const FAQS = [
  {
    q: "What's the difference between a secured and an unsecured loan?",
    a: "A secured loan requires you to pledge an asset — such as property — as collateral. If you default, the lender may recover the outstanding amount by selling the collateral. An unsecured loan requires no collateral; approval is based on your income, creditworthiness, and repayment capacity. Neelkanth Finbuild offers both: Personal Loans and Unsecured Business Loans are unsecured; Secured Business Loans and Loan Against Property are secured.",
  },
  {
    q: "What documents do I need to apply?",
    a: "The exact documents depend on the loan type and your profile. Generally, you will need identity proof (Aadhaar, PAN), address proof, income proof (salary slips, bank statements, or business financials), and — for business loans — documents showing business vintage of at least two years. Contact us on 0361-2221111 for a complete list specific to your loan type.",
  },
  {
    q: "How long does loan approval usually take?",
    a: "Processing time depends on the loan type and how complete your documentation is. We review applications promptly and will communicate the status after we receive your documents. Contact us directly on 0361-2221111 for an indication specific to your case.",
  },
  {
    q: "Is Neelkanth Finbuild RBI-registered?",
    a: "Yes. Neelkanth Finbuild Limited is a Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India. We operate under the applicable RBI regulations governing NBFC conduct, fair practices, and grievance redressal.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">

          {/* Section header — sticky on desktop */}
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold text-sun-ochre uppercase tracking-widest mb-2">
              Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-navy">
              Frequently asked
            </h2>
            <p className="mt-3 text-slate text-sm leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Call us on{" "}
              <a
                href="tel:03612221111"
                className="font-medium text-neelkanth-blue hover:underline"
              >
                0361-2221111
              </a>
              .
            </p>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-slate/20">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group py-1"
              >
                <summary className="flex items-start justify-between gap-4 py-4 cursor-pointer list-none select-none text-ink-navy font-medium hover:text-neelkanth-blue transition-colors duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <span>{faq.q}</span>
                  {/* Chevron rotates when open */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-0.5 transition-transform duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-180 text-slate"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p className="pb-5 text-slate text-sm leading-relaxed pr-8">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
