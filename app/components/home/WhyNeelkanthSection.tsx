import Link from "next/link";

/* 
 * Four verifiable institutional proofs users cannot get elsewhere:
 * - Annual return availability (statutory transparency)
 * - Legal corporate identity & active leadership
 * - RBI Fair Practices & transparent lending process
 */

const PROOFS = [
  {
    tag: "Statutory Transparency",
    title: "Public Annual Returns",
    detail:
      "We publish our MGT-7 annual returns directly on this website, filed under Section 92 of the Companies Act. Every borrower and stakeholder can inspect our audited compliance records.",
    linkText: "View annual returns",
    href: "/annual-return",
    icon: <DocumentCheckIcon />,
  },
  {
    tag: "Corporate Identity",
    title: "Public Limited & Accountable",
    detail:
      "CIN: U65921DL1996PLC081190. Led by active directors Sri Vijay Kumar Jasrasaria and Smt. Pushpa Jasrasaria — an established corporate entity with human accountability, not an anonymous app.",
    linkText: "Our corporate governance",
    href: "/about",
    icon: <BuildingIcon />,
  },
  {
    tag: "Borrower Protection",
    title: "RBI Fair Practices Code",
    detail:
      "Every enquiry, sanction, and disbursement follows the RBI Fair Practices Code. Clear sanction letters, upfront interest disclosures, and a designated Grievance Redressal officer.",
    linkText: "Read compliance policies",
    href: "/fair-practices-code",
    icon: <ShieldCheckIcon />,
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
          <p className="mt-3 text-slate max-w-xl">
            Verifiable proof of our governance, regulatory standing, and lending standards.
          </p>
        </div>

        {/* Institutional proof cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROOFS.map((proof) => (
            <div
              key={proof.title}
              className="rounded-2xl border border-slate/15 bg-paper p-7 sm:p-8 flex flex-col justify-between hover:border-neelkanth-blue/30 transition-colors"
            >
              <div>
                {/* Icon + Tag */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="text-neelkanth-blue">{proof.icon}</div>
                  <span className="text-[10px] font-semibold text-neelkanth-blue bg-neelkanth-blue/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {proof.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-ink-navy mb-3">
                  {proof.title}
                </h3>

                {/* Detail */}
                <p className="text-sm text-slate leading-relaxed">
                  {proof.detail}
                </p>
              </div>

              {/* Link */}
              <div className="mt-6 pt-4 border-t border-slate/10">
                <Link
                  href={proof.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neelkanth-blue hover:underline underline-offset-4"
                >
                  {proof.linkText}
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function DocumentCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
