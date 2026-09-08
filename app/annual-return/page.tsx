import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Return",
  description:
    "Annual return filings (MGT-7) for Neelkanth Finbuild Limited. Documents will be made available here once received.",
};

export default function AnnualReturnPage() {
  return (
    <div className="bg-paper min-h-screen">

      {/* ── Page header ── */}
      <div className="bg-ink-navy py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
            Regulatory
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Annual Return
          </h1>
          <p className="mt-4 text-white/70 max-w-lg leading-relaxed">
            MGT-7 annual return filings for Neelkanth Finbuild Limited.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="max-w-2xl">

          <p className="text-slate leading-relaxed mb-8">
            As required under the Companies Act, Neelkanth Finbuild Limited
            files its annual return in Form MGT-7. The filed document will be
            made available for download on this page.
          </p>

          {/* Placeholder card */}
          <div className="rounded-2xl bg-white border border-slate/15 px-6 py-8 flex flex-col items-center text-center gap-4">
            <div className="h-14 w-14 rounded-full bg-neelkanth-blue/10 flex items-center justify-center">
              <DocumentIcon />
            </div>
            <div>
              <p className="font-semibold text-ink-navy">MGT-7 Annual Return</p>
              <p className="text-sm text-slate mt-1">
                The annual return document will be published here. Please check back shortly.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate/20 bg-paper px-4 py-1.5 text-xs text-slate">
              <ClockIcon />
              Document pending upload
            </span>
          </div>

          <p className="mt-6 text-xs text-slate/60 leading-relaxed">
            For queries regarding annual return filings, contact us at{" "}
            <a href="tel:03612221111" className="text-neelkanth-blue hover:underline">
              0361-2221111
            </a>
            .
          </p>

        </div>
      </div>
    </div>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function DocumentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
      fill="none" stroke="#226BAD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
