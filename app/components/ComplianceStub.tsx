import Link from "next/link";
import type { Metadata } from "next";

interface ComplianceStubProps {
  title: string;
  description: string;
}

export function ComplianceStub({ title, description }: ComplianceStubProps) {
  return (
    <div className="bg-paper min-h-screen">
      <div className="bg-ink-navy py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
            Regulatory
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-2xl">
          <p className="text-slate leading-relaxed mb-8">{description}</p>

          <div className="rounded-2xl bg-white border border-slate/15 px-6 py-8 flex flex-col items-center text-center gap-3">
            <div className="h-12 w-12 rounded-full bg-sun-ochre/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                fill="none" stroke="#C97D2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <p className="font-semibold text-ink-navy">Content coming soon</p>
            <p className="text-sm text-slate max-w-xs">
              This page will be published once the required content has been
              finalised and approved. It will not go live with placeholder text.
            </p>
          </div>

          <p className="mt-8 text-sm text-slate">
            For immediate queries, call us on{" "}
            <a href="tel:03612221111" className="text-neelkanth-blue hover:underline font-medium">
              0361-2221111
            </a>{" "}
            or return to the{" "}
            <Link href="/" className="text-neelkanth-blue hover:underline font-medium">
              home page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
