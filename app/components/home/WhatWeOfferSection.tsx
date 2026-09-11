"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Product Data with Clear Audience Orientation & Outcome Statements ────── */

const PRODUCTS = [
  {
    id: "personal-loan",
    audience: "For individuals",
    badgeColor: "bg-neelkanth-blue/10 text-neelkanth-blue",
    title: "Personal Loan",
    outcome:
      "For medical, education, family, or other personal needs without pledging collateral.",
    statusLine: "Unsecured · No collateral required",
    href: "/products/personal-loan",
    ctaText: "Explore Personal Loan",
    wide: false,
  },
  {
    id: "business-loan",
    audience: "For businesses",
    badgeColor: "bg-sun-ochre/15 text-sun-ochre",
    title: "Business Loan",
    outcome:
      "For working capital, inventory, equipment, or business expansion structured for enterprises.",
    wide: true,
    variants: [
      {
        title: "Unsecured Business Loan",
        tag: "No collateral",
        outcome:
          "Fast working capital based on your operational track record and business vintage.",
        href: "/products/unsecured-business-loan",
        ctaText: "View unsecured loan details",
      },
      {
        title: "Secured Business Loan",
        tag: "Property-backed",
        outcome:
          "Funding backed by residential or commercial property collateral.",
        href: "/products/secured-business-loan",
        ctaText: "View secured loan details",
      },
    ],
  },
  {
    id: "lap",
    audience: "Against property",
    badgeColor: "bg-ink-navy/10 text-ink-navy",
    title: "Loan Against Property",
    outcome:
      "For larger, long-term funding against an owned residential or commercial property.",
    statusLine: "Secured · Residential or commercial property",
    href: "/products/loan-against-property",
    ctaText: "Explore Loan Against Property",
    wide: false,
  },
];

export default function WhatWeOfferSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper py-16 sm:py-20 border-t border-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header with single 'Compare products' link ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-sun-ochre uppercase tracking-widest mb-2">
              Our financing programmes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-navy">
              What do you need finance for?
            </h2>
            <p className="mt-3 text-slate max-w-xl text-sm sm:text-base leading-relaxed">
              Choose the option closest to your purpose. We&apos;ll guide you through eligibility and documents when you call.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neelkanth-blue hover:underline underline-offset-4 self-start sm:self-end shrink-0 group"
          >
            Compare all loan products
            <ArrowRight />
          </Link>
        </div>

        {/* ── Product grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-6 items-stretch">
          {PRODUCTS.map((product, index) =>
            product.wide ? (
              /* ── Business Loan (Wide card with distinct blue border signaling second decision layer) ── */
              <div
                key={product.id}
                className={`rounded-2xl bg-white border border-neelkanth-blue/30 shadow-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-neelkanth-blue hover:-translate-y-[2px] hover:shadow-md ${
                  inView ? "product-card-reveal-1" : "opacity-0"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${product.badgeColor}`}
                    >
                      {product.audience}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-ink-navy mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">
                    {product.outcome}
                  </p>

                  {/* Two compact outcome options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate/10">
                    {product.variants?.map((v) => (
                      <Link
                        key={v.title}
                        href={v.href}
                        className="group/variant rounded-xl bg-paper p-4 flex flex-col justify-between border border-slate/10 hover:border-neelkanth-blue/30 hover:bg-neelkanth-blue/[0.02] hover:-translate-y-[1px] transition-all duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="text-sm font-bold text-ink-navy group-hover/variant:text-neelkanth-blue transition-colors">
                              {v.title}
                            </h4>
                          </div>
                          <span className="inline-block text-[11px] font-semibold text-slate/70 uppercase tracking-wider mb-2">
                            {v.tag}
                          </span>
                          <p className="text-xs text-slate leading-relaxed">
                            {v.outcome}
                          </p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-neelkanth-blue group-hover/variant:underline">
                          <span>{v.ctaText}</span>
                          <span className="inline-block transition-transform duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/variant:translate-x-[3px]">
                            <ArrowRight />
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ── Individual / Property cards (Neutral border) ── */
              <div
                key={product.id}
                className={`group rounded-2xl bg-white border border-slate/20 shadow-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-neelkanth-blue/50 hover:-translate-y-[2px] hover:shadow-md ${
                  inView
                    ? index === 0
                      ? "product-card-reveal-0"
                      : "product-card-reveal-2"
                    : "opacity-0"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${product.badgeColor}`}
                    >
                      {product.audience}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-ink-navy mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {product.outcome}
                  </p>

                  {/* Quiet status line reinforcing key distinction */}
                  <p className="mt-6 text-xs text-slate/70 font-medium">
                    {product.statusLine}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate/10">
                  <Link
                    href={product.href!}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-neelkanth-blue hover:underline underline-offset-4"
                  >
                    {product.ctaText}
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            )
          )}
        </div>

        {/* ── Lightweight reassurance line ── */}
        <div className="mt-10 pt-6 border-t border-slate/15 text-center sm:text-left">
          <p className="text-sm text-slate leading-relaxed">
            Not sure which option fits?{" "}
            <a
              href="tel:03612221111"
              className="font-semibold text-neelkanth-blue hover:underline underline-offset-4"
            >
              Call 0361-2221111
            </a>{" "}
            and we&apos;ll help identify the appropriate loan product.
          </p>
        </div>

      </div>
    </section>
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
