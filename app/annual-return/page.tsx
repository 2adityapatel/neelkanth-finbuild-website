import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Return",
  description:
    "Annual return filings (Form MGT-7) of Neelkanth Finbuild Limited, as required under Section 92 of the Companies Act, 2013.",
};

const FILINGS = [
  {
    fy: "2024–25",
    period: "1 April 2024 to 31 March 2025",
    form: "MGT-7",
    act: "Companies Act, 2013 — Section 92",
    file: "/MGT-7-2024-25.pdf",
    sizeKb: "388",
  },
  {
    fy: "2023–24",
    period: "1 April 2023 to 31 March 2024",
    form: "MGT-7",
    act: "Companies Act, 2013 — Section 92",
    file: "/MGT-7-2023-24.pdf",
    sizeKb: "977",
  },
];

export default function AnnualReturnPage() {
  return (
    <div className="bg-paper min-h-screen">

      {/* ── Page header ── */}
      <div className="bg-ink-navy py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
            Regulatory Disclosures
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Annual Return
          </h1>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed text-sm">
            Neelkanth Finbuild Limited files its annual return in Form MGT-7
            as required under Section 92 of the Companies Act, 2013. Filed
            documents are made available below for public disclosure.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-4xl space-y-12">

          {/* What is MGT-7 */}
          <section>
            <h2 className="text-base font-semibold text-ink-navy mb-3">
              About Form MGT-7
            </h2>
            <p className="text-sm text-ink-navy/70 leading-relaxed max-w-2xl">
              Form MGT-7 is the annual return prescribed under the Companies Act, 2013.
              It contains information relating to the registered office, principal
              business activities, share capital, indebtedness, directors, meetings,
              remuneration, and compliance certifications for the financial year.
              As a public limited company, Neelkanth Finbuild Limited is required
              to file this return with the Registrar of Companies annually.
            </p>
          </section>

          {/* Filings table */}
          <section>
            <h2 className="text-base font-semibold text-ink-navy mb-5">
              Filed Documents
            </h2>

            {/* Desktop table */}
            <div className="hidden sm:block rounded-2xl border border-slate/15 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neelkanth-blue text-white">
                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                      Financial Year
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                      Period Covered
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                      Filed Under
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate/10">
                  {FILINGS.map((f) => (
                    <tr key={f.fy} className="hover:bg-paper/60 transition-colors">
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className="font-semibold text-ink-navy">FY {f.fy}</span>
                        <span className="ml-2 inline-block rounded-full bg-neelkanth-blue/10 px-2 py-0.5 text-[10px] font-semibold text-neelkanth-blue uppercase tracking-wide align-middle">
                          {f.form}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-slate whitespace-nowrap">
                        {f.period}
                      </td>
                      <td className="px-6 py-5 text-slate text-xs whitespace-nowrap">
                        {f.act}
                      </td>
                      <td className="px-6 py-5 text-right whitespace-nowrap">
                        <a
                          href={f.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="inline-flex items-center gap-2 rounded-lg border border-neelkanth-blue/25 bg-neelkanth-blue/5 px-4 py-2 text-xs font-semibold text-neelkanth-blue hover:bg-neelkanth-blue hover:text-white transition-colors"
                        >
                          <PdfIcon />
                          Download PDF
                          <span className="text-[10px] font-normal opacity-70">({f.sizeKb} KB)</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-4">
              {FILINGS.map((f) => (
                <div
                  key={f.fy}
                  className="rounded-2xl bg-white border border-slate/15 px-5 py-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-ink-navy">FY {f.fy}</p>
                      <p className="text-xs text-slate mt-0.5">{f.period}</p>
                    </div>
                    <span className="text-xs font-semibold text-neelkanth-blue bg-neelkanth-blue/10 rounded-full px-3 py-0.5 shrink-0">
                      {f.form}
                    </span>
                  </div>
                  <p className="text-xs text-slate/70">{f.act}</p>
                  <a
                    href={f.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-2 rounded-lg border border-neelkanth-blue/30 bg-neelkanth-blue/5 px-4 py-2 text-xs font-semibold text-neelkanth-blue hover:bg-neelkanth-blue hover:text-white transition-colors"
                  >
                    <PdfIcon />
                    Download PDF · {f.sizeKb} KB
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Disclosure note */}
          <section className="border-t border-slate/15 pt-8">
            <p className="text-xs text-slate/60 leading-relaxed max-w-2xl">
              These documents are filed with the Registrar of Companies and
              are reproduced here for disclosure purposes. For certified copies,
              refer to the Ministry of Corporate Affairs portal at{" "}
              <a
                href="https://www.mca.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neelkanth-blue hover:underline underline-offset-4"
              >
                mca.gov.in
              </a>
              . CIN: U70101DL1996PLC081196.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

function PdfIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
