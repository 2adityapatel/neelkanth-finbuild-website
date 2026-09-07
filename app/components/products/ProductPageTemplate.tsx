import Link from "next/link";
import CTAButton from "@/app/components/CTAButton";

const HELPLINE = "0361-2221111";

export interface ProductDetail {
  label: string;
  value: string;
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface ProductNote {
  type: "info" | "warning";
  text: string;
}

export interface ProductPageTemplateProps {
  tag: string;
  title: string;
  description: string;
  details: ProductDetail[];
  benefits: ProductBenefit[];
  notes?: ProductNote[];
  breadcrumbLabel: string;
}

export default function ProductPageTemplate({
  tag,
  title,
  description,
  details,
  benefits,
  notes = [],
  breadcrumbLabel,
}: ProductPageTemplateProps) {
  return (
    <div className="bg-paper min-h-screen">

      {/* ── Breadcrumb ── */}
      <div className="border-b border-slate/15 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate">
            <Link href="/" className="hover:text-neelkanth-blue transition-colors">Home</Link>
            <ChevronRight />
            <Link href="/products" className="hover:text-neelkanth-blue transition-colors">Products</Link>
            <ChevronRight />
            <span className="text-ink-navy font-medium">{breadcrumbLabel}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

          {/* ── Left: Product info ── */}
          <div>
            {/* Tag + title */}
            <span className="inline-block rounded-full bg-neelkanth-blue/10 px-3 py-0.5 text-xs font-semibold text-neelkanth-blue mb-4">
              {tag}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink-navy">{title}</h1>
            <p className="mt-4 text-lg text-slate leading-relaxed max-w-2xl">{description}</p>

            {/* Notes / caveats */}
            {notes.length > 0 && (
              <div className="mt-6 space-y-3">
                {notes.map((note, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                      note.type === "warning"
                        ? "border-sun-ochre/30 bg-sun-ochre/5 text-ink-navy"
                        : "border-neelkanth-blue/20 bg-neelkanth-blue/5 text-ink-navy"
                    }`}
                  >
                    {note.type === "warning" ? <InfoIcon color="#C97D2C" /> : <InfoIcon color="#226BAD" />}
                    <span>{note.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Benefits */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-ink-navy mb-6">Key benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="flex gap-4 rounded-xl bg-white border border-slate/15 px-5 py-4"
                  >
                    <div className="mt-0.5 shrink-0">
                      <div className="h-6 w-6 rounded-full bg-neelkanth-blue/10 flex items-center justify-center">
                        <CheckIcon />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-navy">{b.title}</p>
                      {b.description && (
                        <p className="mt-0.5 text-xs text-slate leading-relaxed">{b.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Key details card + CTA ── */}
          <div className="lg:sticky lg:top-24 space-y-4">

            {/* Details card */}
            <div className="rounded-2xl bg-white border border-slate/15 overflow-hidden">
              <div className="bg-neelkanth-blue px-6 py-4">
                <p className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                  Product details
                </p>
                <p className="text-lg font-bold text-white mt-0.5">{title}</p>
              </div>
              <div className="divide-y divide-slate/10">
                {details.map((d) => (
                  <div key={d.label} className="flex justify-between gap-4 px-6 py-3.5">
                    <span className="text-sm text-slate">{d.label}</span>
                    <span className="text-sm font-semibold text-ink-navy text-right">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="rounded-2xl bg-paper border border-slate/15 px-6 py-6 text-center">
              <p className="text-sm font-semibold text-ink-navy mb-1">Ready to apply?</p>
              <p className="text-xs text-slate mb-4">
                Call us to check your eligibility and get a full document list.
              </p>
              <CTAButton phone={HELPLINE} label="Call now — 0361-2221111" className="w-full justify-center" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
      fill="none" stroke="#226BAD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function InfoIcon({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
