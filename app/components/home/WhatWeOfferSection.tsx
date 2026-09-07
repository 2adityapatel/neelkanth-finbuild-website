import Link from "next/link";

const PRODUCTS = [
  {
    id: "personal-loan",
    href: "/products/personal-loan",
    tag: "Individual",
    title: "Personal Loan",
    description:
      "Unsecured financing for individuals with flexible repayment, minimal documentation, and quick access to funds.",
    eligibility: "Age 18+ · Monthly income ₹25,000+",
    highlights: [
      "No collateral required",
      "Debt consolidation",
      "Flexible repayment",
      "Minimal documentation",
    ],
    wide: false,
  },
  {
    id: "business-loan",
    href: "/products/unsecured-business-loan",
    tag: "Business",
    title: "Business Loan",
    description:
      "Financing for established businesses — available both unsecured and secured against property.",
    eligibility: "Age 18+ · Business vintage 2 years+",
    wide: true, // two sub-types: unsecured + secured
    subProducts: [
      {
        title: "Unsecured Business Loan",
        href: "/products/unsecured-business-loan",
        note: "No collateral required",
        points: ["Starts ₹5 lakhs", "Tenure 12–48 months", "Quick processing"],
      },
      {
        title: "Secured Business Loan",
        href: "/products/secured-business-loan",
        note: "Property as collateral",
        points: ["Starts ₹5 lakhs", "Tenure 12–48 months", "Attractive rate"],
      },
    ],
  },
  {
    id: "lap",
    href: "/products/loan-against-property",
    tag: "Secured",
    title: "Loan Against Property",
    description:
      "Leverage your residential or commercial property to access larger loan amounts at competitive rates.",
    eligibility: "Age 18+ · Owned property required",
    highlights: [
      "Up to 85% of market value",
      "Tenure 84 months+",
      "Multipurpose use",
      "Competitive rates",
    ],
    wide: false,
  },
];

export default function WhatWeOfferSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-sun-ochre uppercase tracking-widest mb-2">
            Our products
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-navy">
            What we offer
          </h2>
          <p className="mt-3 text-slate max-w-xl">
            Three loan categories designed for individuals, businesses, and
            property owners — each structured around your specific need.
          </p>
        </div>

        {/* Card grid — Business Loan wider */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-6">
          {PRODUCTS.map((product) =>
            product.wide ? (
              /* ── Business Loan — wide card with two sub-products ── */
              <div
                key={product.id}
                className="rounded-2xl border border-slate/15 bg-paper overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="px-6 pt-6 pb-5 border-b border-slate/10">
                  <span className="inline-block rounded-full bg-neelkanth-blue/10 px-3 py-0.5 text-xs font-semibold text-neelkanth-blue mb-3">
                    {product.tag}
                  </span>
                  <h3 className="text-xl font-bold text-ink-navy">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">
                    {product.description}
                  </p>
                  <p className="mt-3 text-xs text-slate/70">
                    <span className="font-medium text-slate">Eligibility:</span>{" "}
                    {product.eligibility}
                  </p>
                </div>

                {/* Sub-products side by side */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate/10">
                  {product.subProducts?.map((sub) => (
                    <div key={sub.title} className="px-5 py-5 flex flex-col gap-3">
                      <div>
                        <p className="text-[11px] font-semibold text-slate uppercase tracking-wider">
                          {sub.note}
                        </p>
                        <h4 className="mt-1 text-base font-semibold text-ink-navy">
                          {sub.title}
                        </h4>
                      </div>
                      <ul className="space-y-1.5">
                        {sub.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm text-slate"
                          >
                            <CheckIcon />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={sub.href}
                        className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-neelkanth-blue hover:underline underline-offset-4"
                      >
                        Learn more <ArrowRight />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* ── Standard single card ── */
              <div
                key={product.id}
                className="rounded-2xl border border-slate/15 bg-paper overflow-hidden flex flex-col"
              >
                <div className="px-6 pt-6 pb-5 flex-1 flex flex-col">
                  <span className="inline-block rounded-full bg-neelkanth-blue/10 px-3 py-0.5 text-xs font-semibold text-neelkanth-blue mb-3">
                    {product.tag}
                  </span>
                  <h3 className="text-xl font-bold text-ink-navy">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed flex-1">
                    {product.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {product.highlights?.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-slate"
                      >
                        <CheckIcon />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-xs text-slate/70">
                    <span className="font-medium text-slate">Eligibility:</span>{" "}
                    {product.eligibility}
                  </p>

                  <Link
                    href={product.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-neelkanth-blue hover:underline underline-offset-4"
                  >
                    Learn more <ArrowRight />
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#226BAD"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
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
