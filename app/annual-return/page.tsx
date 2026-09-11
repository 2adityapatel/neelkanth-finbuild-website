import type { Metadata } from "next";
import FilingsTable from "@/app/components/annual-return/FilingsTable";

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
            <FilingsTable filings={FILINGS} />
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
