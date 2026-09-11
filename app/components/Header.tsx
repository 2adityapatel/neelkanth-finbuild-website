"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-[box-shadow,border-color] duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? "border-b border-slate/25 shadow-sm shadow-ink-navy/5"
          : "border-b border-slate/15 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" onClick={closeMobile} className="flex-shrink-0 flex items-center gap-3 hover:opacity-85 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Neelkanth Finbuild Limited"
              width={55}
              height={44}
              priority
              className="h-11 w-auto shrink-0"
            />
            <span className="leading-none">
              <span className="block font-headline text-lg font-bold text-neelkanth-blue">
                Neelkanth Finbuild
              </span>
              <span className="block text-[9px] font-body font-normal text-slate tracking-widest uppercase mt-0.5">
                Limited · NBFC
              </span>
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Header CTA: compact 'Call' on mobile, 'Call now' on desktop (single responsive button) */}
            <a
              href={`tel:${HELPLINE.replace(/\D/g, "")}`}
              aria-label="Call 0361-2221111"
              className="btn-press inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-sun-ochre px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-ochre"
            >
              <PhoneIcon />
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">Call now</span>
            </a>
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

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
    </svg>
  );
}
