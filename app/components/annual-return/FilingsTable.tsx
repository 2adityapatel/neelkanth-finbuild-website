"use client";

import { useEffect, useRef, useState } from "react";

export interface Filing {
  fy: string;
  period: string;
  form: string;
  act: string;
  file: string;
  sizeKb: string;
}

interface FilingsTableProps {
  filings: Filing[];
}

export default function FilingsTable({ filings }: FilingsTableProps) {
  const tableRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = tableRef.current;
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
    <div ref={tableRef}>
      {/* Desktop table */}
      <div className="hidden sm:block rounded-2xl border border-slate/15 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neelkanth-blue text-white">
              <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                Financial Year
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                Period Covered
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                Filed Under
              </th>
              <th className="text-right px-6 py-4 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                Download
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate/10">
            {filings.map((f, i) => (
              <tr
                key={f.fy}
                className={`hover:bg-paper/70 transition-colors duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  inView
                    ? i === 0
                      ? "table-row-reveal-0"
                      : i === 1
                      ? "table-row-reveal-1"
                      : "table-row-reveal-2"
                    : "opacity-0"
                }`}
              >
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="font-semibold text-ink-navy">FY {f.fy}</span>
                  <span className="ml-2 inline-block rounded-full bg-neelkanth-blue/10 px-2 py-0.5 text-[10px] font-semibold text-neelkanth-blue uppercase tracking-wide align-middle">
                    {f.form}
                  </span>
                </td>
                <td className="px-6 py-5 text-slate whitespace-nowrap">
                  {f.period}
                </td>
                <td className="px-6 py-5 text-slate text-xs whitespace-nowrap">
                  {f.act}
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <a
                    href={f.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="btn-press group/btn inline-flex items-center gap-2 rounded-lg border border-neelkanth-blue/25 bg-neelkanth-blue/5 px-4 py-2 text-xs font-semibold text-neelkanth-blue hover:bg-neelkanth-blue hover:text-white transition-all duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <span className="inline-block transition-transform duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]">
                      <PdfIcon />
                    </span>
                    Download PDF
                    <span className="text-[10px] font-normal opacity-70">({f.sizeKb} KB)</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-4">
        {filings.map((f, i) => (
          <div
            key={f.fy}
            className={`rounded-2xl bg-white border border-slate/15 px-5 py-5 space-y-3 ${
              inView
                ? i === 0
                  ? "table-row-reveal-0"
                  : i === 1
                  ? "table-row-reveal-1"
                  : "table-row-reveal-2"
                : "opacity-0"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-ink-navy">FY {f.fy}</p>
                <p className="text-xs text-slate mt-0.5">{f.period}</p>
              </div>
              <span className="text-xs font-semibold text-neelkanth-blue bg-neelkanth-blue/10 rounded-full px-3 py-0.5 shrink-0">
                {f.form}
              </span>
            </div>
            <p className="text-xs text-slate/70">{f.act}</p>
            <a
              href={f.file}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-press group/btn inline-flex items-center gap-2 rounded-lg border border-neelkanth-blue/30 bg-neelkanth-blue/5 px-4 py-2 text-xs font-semibold text-neelkanth-blue hover:bg-neelkanth-blue hover:text-white transition-all duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <span className="inline-block transition-transform duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]">
                <PdfIcon />
              </span>
              Download PDF · {f.sizeKb} KB
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function PdfIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
