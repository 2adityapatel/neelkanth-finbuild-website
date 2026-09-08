import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loan Products",
  description:
    "Neelkanth Finbuild Limited offers Personal Loans, Unsecured and Secured Business Loans, and Loan Against Property. RBI-registered NBFC.",
};

const PRODUCTS = [
  {
    tag: "Unsecured · Individual",
    title: "Personal Loan",
    href: "/products/personal-loan",
    description:
      "Quick, unsecured financing for self-employed individuals and professionals with a regular monthly income.",
    details: ["No collateral required", "Age 18+ · Income ₹25,000+/month", "Flexible repayment tenure"],
  },
  {
    tag: "Unsecured · Business",
    title: "Unsecured Business Loan",
    href: "/products/unsecured-business-loan",
    description:
      "Working capital or growth financing for established businesses — no property required as collateral.",
    details: ["Starting from ₹5 lakhs", "Tenure 12–48 months", "Business vintage 2 years+"],
  },
  {
    tag: "Secured · Business",
    title: "Secured Business Loan",
    href: "/products/secured-business-loan",
    description:
      "Higher-value business financing backed by landed property, with an attractive interest rate.",
    details: ["Starting from ₹5 lakhs", "Tenure 12–48 months", "Landed property as collateral"],
  },
  {
    tag: "Secured · Property",
    title: "Loan Against Property",
    href: "/products/loan-against-property",
    description:
      "Unlock up to 85% of your residential or commercial property's market value, while retaining ownership.",
    details: ["Up to 85% of market value", "Tenure 84 months+", "Starting from ₹5 lakhs"],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-paper min-h-screen">

      {/* ── Page header ── */}
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

      {/* ── Product cards ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRODUCTS.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group rounded-2xl bg-white border border-slate/15 px-7 py-7 flex flex-col gap-4 hover:border-neelkanth-blue/30 hover:shadow-sm transition-all"
            >
              <div>
                <span className="inline-block w-fit rounded-full bg-neelkanth-blue/10 px-3 py-0.5 text-xs font-semibold text-neelkanth-blue mb-3">
                  {product.tag}
                </span>
                <h2 className="text-xl font-bold text-ink-navy group-hover:text-neelkanth-blue transition-colors">
                  {product.title}
                </h2>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {product.description}
                </p>
              </div>
              <ul className="space-y-1.5 mt-auto">
                {product.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-slate">
                    <span className="h-1.5 w-1.5 rounded-full bg-neelkanth-blue shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-neelkanth-blue flex items-center gap-1 mt-1">
                View details
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-neelkanth-blue px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-white text-lg">Not sure which product fits?</p>
            <p className="text-white/70 text-sm mt-1">Call us and we'll guide you through the right option.</p>
          </div>
          <a
            href="tel:03612221111"
            className="inline-flex items-center gap-2 rounded-full bg-white text-neelkanth-blue px-6 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors shrink-0"
          >
            Call 0361-2221111
          </a>
        </div>
      </div>
    </div>
  );
}
