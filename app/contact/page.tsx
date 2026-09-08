import type { Metadata } from "next";
import CTAButton from "@/app/components/CTAButton";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Neelkanth Finbuild Limited. Registered office in New Delhi, branch office in Guwahati. Helpline: 0361-2221111.",
};

const HELPLINE = "0361-2221111";

const OFFICES = [
  {
    type: "Registered Office",
    city: "New Delhi",
    lines: [
      "E-354, First Floor,",
      "Greater Kailash – II,",
      "New Delhi – 110048",
    ],
  },
  {
    type: "Branch Office",
    city: "Guwahati",
    lines: [
      "V.K. Trade Centre, 4th Floor,",
      "Opp. Down Town Hospital,",
      "G.S. Road, Dispur,",
      "Guwahati, Assam – 781022",
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="bg-paper min-h-screen">

      {/* ── Page header ── */}
      <div className="bg-ink-navy py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-white/70 max-w-lg leading-relaxed">
            Reach us by phone or email. Our team will guide you through loan
            eligibility, documentation, and next steps.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">

          {/* ── Left: Offices ── */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-ink-navy mb-6">
                Our offices
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {OFFICES.map((office) => (
                  <div
                    key={office.type}
                    className="rounded-2xl bg-white border border-slate/15 px-6 py-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <MapPinIcon />
                      <p className="text-[10px] font-semibold text-neelkanth-blue uppercase tracking-widest">
                        {office.type}
                      </p>
                    </div>
                    <p className="font-semibold text-ink-navy mb-2">{office.city}</p>
                    <address className="not-italic text-sm text-slate leading-relaxed">
                      {office.lines.map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </address>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact channels */}
            <div>
              <h2 className="text-2xl font-bold text-ink-navy mb-6">
                Contact channels
              </h2>
              <div className="space-y-4">

                {/* Phone */}
                <div className="rounded-2xl bg-white border border-slate/15 px-6 py-5 flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 h-9 w-9 rounded-full bg-neelkanth-blue/10 flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold text-slate uppercase tracking-widest mb-0.5">
                      Helpline
                    </p>
                    <a
                      href={`tel:${HELPLINE.replace(/\D/g, "")}`}
                      className="text-lg font-bold text-ink-navy hover:text-neelkanth-blue transition-colors"
                    >
                      {HELPLINE}
                    </a>
                    <p className="mt-1 text-xs text-slate">
                      Guwahati landline — not WhatsApp-capable.
                      Call for loan enquiries, eligibility, and document guidance.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="rounded-2xl bg-white border border-slate/15 px-6 py-5 flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 h-9 w-9 rounded-full bg-neelkanth-blue/10 flex items-center justify-center">
                    <MailIcon />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold text-slate uppercase tracking-widest mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:as@rediffmail.com"
                      className="text-base font-semibold text-ink-navy hover:text-neelkanth-blue transition-colors break-all"
                    >
                      as@rediffmail.com
                    </a>
                    <p className="mt-1 text-xs text-slate">
                      A domain-based business email will be available shortly.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Right: CTA card ── */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl bg-neelkanth-blue px-7 py-8 text-white">
              <h3 className="text-xl font-bold text-white mb-3">Ready to enquire?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                The fastest way to check your eligibility and understand the
                documentation required is to call us directly on our Guwahati
                helpline.
              </p>
              <CTAButton
                phone={HELPLINE}
                label={`Call ${HELPLINE}`}
                className="w-full justify-center bg-white !text-neelkanth-blue hover:bg-white/90"
              />
              <p className="mt-5 text-xs text-white/40 text-center">
                Mon – Sat · Office hours
              </p>
            </div>

            {/* Compliance note */}
            <div className="mt-4 rounded-xl border border-slate/15 bg-white px-5 py-4">
              <p className="text-xs text-slate leading-relaxed">
                For grievance escalation, refer to our{" "}
                <a href="/grievance-redressal" className="text-neelkanth-blue hover:underline">
                  Grievance Redressal
                </a>{" "}
                page.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="#226BAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="#226BAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="#226BAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
