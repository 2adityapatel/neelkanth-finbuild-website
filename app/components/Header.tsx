"use client";

import { useState } from "react";
import Link from "next/link";
import CTAButton from "./CTAButton";

/* ─── Site config ─────────────────────────────────────────────────────────── */

const HELPLINE = "0361-2221111";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Personal Loan", href: "/products/personal-loan" },
      { label: "Unsecured Business Loan", href: "/products/unsecured-business-loan" },
      { label: "Secured Business Loan", href: "/products/secured-business-loan" },
      { label: "Loan Against Property", href: "/products/loan-against-property" },
    ],
  },
  { label: "Annual Return", href: "/annual-return" },
  { label: "Contact Us", href: "/contact" },
];

/* ─── Header ──────────────────────────────────────────────────────────────── */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" onClick={closeMobile} className="flex-shrink-0 group">
            <span className="font-headline text-xl font-bold text-neelkanth-blue group-hover:opacity-85 transition-opacity leading-none">
              Neelkanth Finbuild
            </span>
            <span className="block text-[10px] font-body font-normal text-slate tracking-widest uppercase mt-0.5">
              Limited · NBFC
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                /* Products dropdown — CSS-only on desktop */
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink-navy hover:text-neelkanth-blue transition-colors rounded-md hover:bg-paper"
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  {/* Dropdown panel */}
                  <div className="absolute top-full left-0 hidden group-hover:block pt-1">
                    <div className="w-56 bg-white rounded-lg shadow-lg border border-slate/10 py-1 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-ink-navy hover:bg-paper hover:text-neelkanth-blue transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-ink-navy hover:text-neelkanth-blue rounded-md hover:bg-paper transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Desktop CTA + mobile hamburger ── */}
          <div className="flex items-center gap-3">
            <CTAButton phone={HELPLINE} className="hidden sm:inline-flex" />
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-ink-navy hover:bg-paper transition-colors"
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile nav panel ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate/20 bg-white">
          <nav
            aria-label="Mobile navigation"
            className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5"
          >
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-ink-navy hover:text-neelkanth-blue rounded-md hover:bg-paper transition-colors"
                    aria-expanded={productsOpen}
                  >
                    {link.label}
                    <ChevronDown className={productsOpen ? "rotate-180" : ""} />
                  </button>
                  {productsOpen && (
                    <div className="pl-4 border-l-2 border-neelkanth-blue/20 ml-3 my-1 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobile}
                          className="block px-3 py-2 text-sm text-slate hover:text-neelkanth-blue transition-colors rounded-md hover:bg-paper"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="block px-3 py-2.5 text-sm font-medium text-ink-navy hover:text-neelkanth-blue rounded-md hover:bg-paper transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            {/* Mobile CTA */}
            <div className="pt-3 pb-1">
              <CTAButton phone={HELPLINE} className="w-full justify-center" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform ${className}`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
