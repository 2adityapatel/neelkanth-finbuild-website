"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface CategoryRowProps {
  id: string;
  num: string;
  children: ReactNode;
}

export default function CategoryRow({
  id,
  num,
  children,
}: CategoryRowProps) {
  const rowRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
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
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rowRef}
      aria-labelledby={id}
      className={`relative category-row-wrapper ${inView ? "is-in-view" : ""}`}
    >
      {/* Divider wipe from left to right */}
      <div className="h-px bg-slate/20 w-full category-divider" />

      <div className="py-10 sm:py-12 flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
        {/* Static Number (Never animated) */}
        <span className="font-headline font-bold text-3xl sm:text-4xl text-slate/25 shrink-0 w-12 select-none">
          {num}
        </span>

        {/* Fading Body */}
        <div className="flex-1 w-full category-body">
          {children}
        </div>
      </div>
    </section>
  );
}
