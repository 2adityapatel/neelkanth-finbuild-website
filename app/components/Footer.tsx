import Link from "next/link";
import Image from "next/image";

/* ─── Navigation data ─────────────────────────────────────────────────────── */

const PRODUCTS = [
  { label: "Personal Loan", href: "/products/personal-loan" },
  { label: "Unsecured Business Loan", href: "/products/unsecured-business-loan" },
  { label: "Secured Business Loan", href: "/products/secured-business-loan" },
  { label: "Loan Against Property", href: "/products/loan-against-property" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Annual Return", href: "/annual-return" },
  { label: "Contact Us", href: "/contact" },
];

const COMPLIANCE_LINKS = [
  { label: "Fair Practices Code", href: "/fair-practices-code" },
  { label: "Grievance Redressal", href: "/grievance-redressal" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

/* ─── Footer ──────────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="bg-ink-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + about */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Neelkanth Finbuild Limited"
                width={60}
                height={48}
                className="h-12 w-auto shrink-0 brightness-0 invert"
              />
              <span className="leading-none">
                <span className="block font-headline text-lg font-bold text-white">
                  Neelkanth Finbuild
                </span>
                <span className="block text-[9px] font-body font-normal text-slate tracking-widest uppercase mt-0.5">
                  Limited · NBFC
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-slate leading-relaxed">
              RBI-registered Non-Banking Financial Company offering personal and
              business loan solutions. Serving clients from New Delhi and
              Guwahati since 1996.
            </p>
            <p className="mt-4 text-xs text-slate/60">
              CIN: U70101DL1996PLC081196
            </p>
            <p className="mt-1 text-xs text-slate/60">
              PAN: AAACN3882C
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4">
              Products
            </h3>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-slate hover:text-white transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices + contact */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-slate space-y-4">
              <div>
                <p className="text-[10px] font-semibold text-white/50 uppercase tracking-wider mb-1">
                  Registered Office
                </p>
                <p className="leading-relaxed">
                  E-354, First Floor,
                  <br />
                  Greater Kailash – II,
                  <br />
                  New Delhi – 110048
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-white/50 uppercase tracking-wider mb-1">
                  Branch Office
                </p>
                <p className="leading-relaxed">
                  V.K. Trade Centre, 4th Floor,
                  <br />
                  Opp. Down Town Hospital,
                  <br />
                  G.S. Road, Dispur,
                  <br />
                  Guwahati, Assam – 781022
                </p>
              </div>
              <div className="space-y-1.5">
                <p>
                  <a
                    href="tel:03612221111"
                    className="hover:text-white transition-colors"
                  >
                    0361-2221111
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:as@rediffmail.com"
                    className="hover:text-white transition-colors"
                  >
                    as@rediffmail.com
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* ── Compliance links + copyright ── */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <nav aria-label="Legal links" className="flex flex-wrap gap-x-5 gap-y-2">
            {COMPLIANCE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-slate/60 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-slate/40 shrink-0">
            &copy; {new Date().getFullYear()} Neelkanth Finbuild Limited.
            All rights reserved.
          </p>
        </div>

        {/* ── NBFC regulatory disclaimer ── */}
        <p className="mt-5 text-xs text-slate/35 leading-relaxed max-w-3xl">
          Neelkanth Finbuild Limited is registered with the Reserve Bank of
          India as a Non-Banking Financial Company (NBFC). Loan disbursals are
          subject to credit assessment and applicable terms and conditions.
          Borrowers are advised to read all loan-related documents carefully
          before signing.
        </p>

      </div>
    </footer>
  );
}
