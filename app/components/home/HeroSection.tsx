"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/app/components/CTAButton";

const HELPLINE = "0361-2221111";

export default function HeroSection() {
  useEffect(() => {
    // After animation sequence finishes, mark as animated on document so internal route navigation doesn't replay it
    const timer = setTimeout(() => {
      document.documentElement.classList.add("hero-animated");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink-navy text-white py-12 sm:py-24 lg:py-28">
      {/* ── Background Image + Gradient Overlay (Static, never animated) ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Neelkanth Finbuild Corporate Headquarters & Financial Center"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />
        {/* Dual gradient overlay: deep navy on the left for maximum text contrast, lighter on the right to show architectural depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-navy via-ink-navy/90 to-ink-navy/70" />
        <div className="absolute inset-0 bg-ink-navy/30 backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* 1. RBI / established badge */}
          <div className="hero-reveal-1 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 sm:px-4 py-1.5 mb-4 sm:mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-sun-ochre shrink-0" />
            <span className="text-xs font-medium text-white/90 tracking-wide">
              Established 1996 · RBI-registered NBFC
            </span>
          </div>

          {/* 2. Main headline */}
          <h1 className="hero-reveal-2 text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight sm:leading-[1.15] tracking-tight">
            Trusted financing,{" "}
            <span className="text-white/65">
              backed by three decades
            </span>{" "}
            of experience.
          </h1>

          {/* 3. One concise sentence */}
          <p className="hero-reveal-3 mt-3 sm:mt-5 text-sm sm:text-lg text-white/80 leading-relaxed max-w-xl">
            Personal, business, and property-backed loans structured with transparent terms.
          </p>

          {/* 4. One primary CTA + One secondary text link */}
          <div className="hero-reveal-4 mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center">
            <CTAButton phone={HELPLINE} label="Call now — 0361-2221111" className="w-full sm:w-auto justify-center" />
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 hover:text-white underline-offset-4 hover:underline transition-colors py-1 self-center sm:self-auto group"
            >
              View our loan products
              <span className="arrow-shift">
                <ArrowRight />
              </span>
            </Link>
          </div>

          {/* 5. Credential strip */}
          <div className="hero-reveal-5 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-3 sm:flex sm:flex-wrap gap-2 sm:gap-x-10 sm:gap-y-4">
            {[
              { label: "Incorporated", value: "1996" },
              { label: "Registration", value: "NBFC · RBI" },
              { label: "Offices", value: "Delhi & Guwahati" },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="text-[10px] sm:text-[11px] font-semibold text-white/40 uppercase tracking-wider sm:tracking-widest">
                  {fact.label}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 whitespace-nowrap">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
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
