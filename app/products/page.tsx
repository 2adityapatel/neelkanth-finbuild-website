import type { Metadata } from "next";
import Link from "next/link";
import CategoryRow from "@/app/components/products/CategoryRow";

export const metadata: Metadata = {
  title: "Loan Products",
  description:
    "Neelkanth Finbuild Limited offers Personal Loans, Unsecured and Secured Business Loans, and Loan Against Property. RBI-registered NBFC.",
};

const HELPLINE = "0361-2221111";

export default function ProductsPage() {
  return (
    <div className="bg-paper">

      {/* ── Page header (existing dark header kept exactly as it is) ── */}
      <div className="bg-ink-navy py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
            Our products
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Loan Products
          </h1>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
            Three loan categories — personal, business, and property-backed —
            each structured for a specific financial need. All offered by an
            RBI-registered NBFC.
          </p>
        </div>
      </div>

      {/* ── Three-Category Lending Guide ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Section Intro */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-navy font-headline">
            Choose the right lending route
          </h2>
          <p className="mt-2 text-base text-slate leading-relaxed">
            Choose the option closest to your financial need.
          </p>
        </div>

        {/* Categories List */}
        <div>

          {/* ── 01 Personal Finance ── */}
          <CategoryRow id="cat-01" num="01">
            <div className="flex items-center justify-between gap-4 mb-2">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                Personal Finance
              </p>
              <span className="inline-block rounded-full bg-neelkanth-blue/10 px-2.5 py-0.5 text-xs font-semibold text-neelkanth-blue uppercase tracking-wider">
                Unsecured
              </span>
            </div>

            <h3 id="cat-01" className="text-2xl font-bold text-ink-navy font-headline">
              Personal Loan
            </h3>

            <p className="mt-2 text-base text-slate leading-relaxed max-w-2xl">
              For medical, education, family, or other personal needs.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neelkanth-blue shrink-0" />
                <span>No collateral required</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neelkanth-blue shrink-0" />
                <span>Available for eligible applicants</span>
              </li>
            </ul>

            <div className="mt-6 flex justify-end">
              <Link
                href="/products/personal-loan"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neelkanth-blue hover:underline underline-offset-4 group"
              >
                View eligibility &amp; details
                <ArrowRight />
              </Link>
            </div>
          </CategoryRow>

          {/* ── 02 Business Finance (Visual Priority with two sub-cards) ── */}
          <CategoryRow id="cat-02" num="02">
            <div className="flex items-center justify-between gap-4 mb-2">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                Business Finance
              </p>
              <span className="inline-block rounded-full bg-sun-ochre/15 px-2.5 py-0.5 text-xs font-semibold text-sun-ochre uppercase tracking-wider">
                Business
              </span>
            </div>

            <h3 id="cat-02" className="text-2xl font-bold text-ink-navy font-headline">
              Business Loan
            </h3>

            <p className="mt-2 text-base text-slate leading-relaxed max-w-2xl">
              For working capital, inventory, equipment, or business expansion.
            </p>

            {/* Sub-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {/* Unsecured */}
              <Link
                href="/products/unsecured-business-loan"
                className="sub-card-1 group rounded-xl bg-white border border-slate/20 p-5 flex flex-col justify-between hover:border-neelkanth-blue/30 hover:shadow-sm hover:-translate-y-[1px] transition-all duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <div>
                  <span className="inline-block text-xs font-semibold text-slate/70 uppercase tracking-wider mb-1">
                    No collateral
                  </span>
                  <h4 className="text-base font-bold text-ink-navy group-hover:text-neelkanth-blue transition-colors">
                    Unsecured Business Loan
                  </h4>
                  <p className="mt-1.5 text-xs text-slate leading-relaxed">
                    Fast working capital based on your operational track record and business vintage.
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-neelkanth-blue group-hover:underline">
                  View unsecured loan details <ArrowRight />
                </span>
              </Link>

              {/* Secured */}
              <Link
                href="/products/secured-business-loan"
                className="sub-card-2 group rounded-xl bg-white border border-slate/20 p-5 flex flex-col justify-between hover:border-neelkanth-blue/30 hover:shadow-sm hover:-translate-y-[1px] transition-all duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <div>
                  <span className="inline-block text-xs font-semibold text-slate/70 uppercase tracking-wider mb-1">
                    Property-backed
                  </span>
                  <h4 className="text-base font-bold text-ink-navy group-hover:text-neelkanth-blue transition-colors">
                    Secured Business Loan
                  </h4>
                  <p className="mt-1.5 text-xs text-slate leading-relaxed">
                    Funding backed by residential or commercial property collateral.
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-neelkanth-blue group-hover:underline">
                  View secured loan details <ArrowRight />
                </span>
              </Link>
            </div>
          </CategoryRow>

          {/* ── 03 Property-Backed Finance ── */}
          <CategoryRow id="cat-03" num="03">
            <div className="flex items-center justify-between gap-4 mb-2">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                Property-Backed Finance
              </p>
              <span className="inline-block rounded-full bg-ink-navy/10 px-2.5 py-0.5 text-xs font-semibold text-ink-navy uppercase tracking-wider">
                Secured
              </span>
            </div>

            <h3 id="cat-03" className="text-2xl font-bold text-ink-navy font-headline">
              Loan Against Property
            </h3>

            <p className="mt-2 text-base text-slate leading-relaxed max-w-2xl">
              For larger funding against an owned residential or commercial property.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neelkanth-blue shrink-0" />
                <span>Property retained by the borrower</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neelkanth-blue shrink-0" />
                <span>Up to 85% of market value, where applicable</span>
              </li>
            </ul>

            <div className="mt-6 flex justify-end">
              <Link
                href="/products/loan-against-property"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neelkanth-blue hover:underline underline-offset-4 group"
              >
                View eligibility &amp; details
                <ArrowRight />
              </Link>
            </div>
          </CategoryRow>

          {/* Bottom border of the list */}
          <div className="h-px bg-slate/20 w-full" />
        </div>

        {/* ── Quiet Reassurance Line ── */}
        <div className="pt-8 text-center sm:text-left">
          <p className="text-sm text-slate leading-relaxed">
            Not sure which option fits?{" "}
            <a
              href={`tel:${HELPLINE.replace(/\D/g, "")}`}
              className="font-semibold text-neelkanth-blue hover:underline underline-offset-4"
            >
              Call 0361-2221111
            </a>{" "}
            and we&apos;ll help identify the appropriate loan product.
          </p>
        </div>

      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-shift"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
