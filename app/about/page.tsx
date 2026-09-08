import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Neelkanth Finbuild Limited — RBI-registered NBFC incorporated in New Delhi in 1996. Corporate overview, incorporation history, CIN, and director information.",
};

const DIRECTORS = [
  {
    name: "Vijay Kumar Jasrasaria",
    credential: "B.Com (1971)",
    note: "~50 years of business experience",
  },
  {
    name: "Ashish Jasrasaria",
    credential: "MBA",
    note: "",
  },
  {
    name: "Vineeta Jasrasaria",
    credential: "Director",
    note: "",
  },
];

const TIMELINE = [
  {
    date: "14 August 1996",
    event: "Incorporated as Neelkanth Finbuild Private Limited in New Delhi.",
  },
  {
    date: "31 August 2004",
    event: "Converted to a public limited company — Neelkanth Finbuild Limited.",
  },
  {
    date: "Ongoing",
    event:
      "Registered with the Reserve Bank of India as a Non-Banking Financial Company (NBFC), operating branch offices in New Delhi and Guwahati.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper min-h-screen">

      {/* ── Page header ── */}
      <div className="bg-ink-navy py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
            Company
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl">
            About Neelkanth Finbuild Limited
          </h1>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
            An RBI-registered Non-Banking Financial Company offering personal
            and business loan products from offices in New Delhi and Guwahati
            since 1996.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 space-y-16">

        {/* ── Corporate overview ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-ink-navy mb-4">
              Corporate overview
            </h2>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                Neelkanth Finbuild Limited was founded in New Delhi by
                Sri Vijay Kumar Jasrasaria, son of Late Chiranjilal Jasrasaria.
                Incorporated on 14 August 1996 as a private limited company,
                it was subsequently converted to a public limited company on
                31 August 2004.
              </p>
              <p>
                The company is registered with the Reserve Bank of India as a
                Non-Banking Financial Company and operates under the applicable
                RBI regulatory framework governing NBFC conduct, fair lending
                practices, and grievance redressal.
              </p>
              <p>
                Neelkanth Finbuild&apos;s loan products serve individuals and
                businesses seeking personal finance, business funding, or
                property-backed credit — offered through offices in
                Greater Kailash II, New Delhi and Dispur, Guwahati.
              </p>
            </div>
          </div>

          {/* Legal details card */}
          <div className="rounded-2xl bg-white border border-slate/15 overflow-hidden">
            <div className="bg-neelkanth-blue px-6 py-4">
              <p className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                Legal details
              </p>
            </div>
            <div className="divide-y divide-slate/10">
              {[
                { label: "Legal name", value: "Neelkanth Finbuild Limited" },
                { label: "CIN", value: "U70101DL1996PLC081196" },
                { label: "PAN", value: "AAACN3882C" },
                { label: "Entity type", value: "Non-Banking Financial Company (NBFC)" },
                { label: "Incorporated", value: "14 August 1996" },
                { label: "Converted to Limited", value: "31 August 2004" },
                { label: "Regulator", value: "Reserve Bank of India" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between gap-6 px-6 py-3.5">
                  <span className="text-sm text-slate">{row.label}</span>
                  <span className="text-sm font-semibold text-ink-navy text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Incorporation timeline ── */}
        <section>
          <h2 className="text-2xl font-bold text-ink-navy mb-8">
            Company history
          </h2>
          <div className="relative border-l-2 border-neelkanth-blue/20 ml-3 space-y-8">
            {TIMELINE.map((item) => (
              <div key={item.date} className="relative pl-8">
                {/* Dot */}
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-neelkanth-blue bg-white" />
                <p className="text-xs font-semibold text-neelkanth-blue uppercase tracking-wider mb-1">
                  {item.date}
                </p>
                <p className="text-slate leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Directors ── */}
        <section>
          <h2 className="text-2xl font-bold text-ink-navy mb-2">Directors</h2>
          <p className="text-slate text-sm mb-8">
            All directors are listed simply as &ldquo;Director.&rdquo;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DIRECTORS.map((d) => (
              <div
                key={d.name}
                className="rounded-2xl bg-white border border-slate/15 px-6 py-6 flex flex-col gap-3"
              >
                {/* Avatar */}
                <div className="h-12 w-12 rounded-full bg-neelkanth-blue/10 flex items-center justify-center">
                  <PersonIcon />
                </div>
                <div>
                  <p className="font-semibold text-ink-navy">{d.name}</p>
                  <p className="text-sm text-slate mt-0.5">{d.credential}</p>
                  {d.note && (
                    <p className="text-xs text-slate/70 mt-0.5">{d.note}</p>
                  )}
                </div>
                <span className="inline-block mt-auto text-[10px] font-semibold text-neelkanth-blue uppercase tracking-widest border border-neelkanth-blue/20 rounded-full px-3 py-0.5 w-fit">
                  Director
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Offices ── */}
        <section>
          <h2 className="text-2xl font-bold text-ink-navy mb-8">Offices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                type: "Registered Office",
                address: [
                  "E-354, First Floor,",
                  "Greater Kailash – II,",
                  "New Delhi – 110048",
                ],
              },
              {
                type: "Branch Office",
                address: [
                  "V.K. Trade Centre, 4th Floor,",
                  "Opp. Down Town Hospital,",
                  "G.S. Road, Dispur,",
                  "Guwahati, Assam – 781022",
                ],
              },
            ].map((office) => (
              <div
                key={office.type}
                className="rounded-2xl bg-white border border-slate/15 px-6 py-6"
              >
                <p className="text-[10px] font-semibold text-neelkanth-blue uppercase tracking-widest mb-3">
                  {office.type}
                </p>
                <address className="not-italic text-slate leading-relaxed text-sm">
                  {office.address.map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </address>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate">
            For contact details including helpline and email, visit the{" "}
            <Link href="/contact" className="text-neelkanth-blue hover:underline underline-offset-4 font-medium">
              Contact Us
            </Link>{" "}
            page.
          </p>
        </section>

      </div>
    </div>
  );
}

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
      fill="none" stroke="#226BAD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
