import type { Metadata } from "next";
import { Domine, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ─── Fonts ───────────────────────────────────────────────────────────────── */

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-domine",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: {
    default: "Neelkanth Finbuild Limited — NBFC | Loans in Delhi & Guwahati",
    template: "%s | Neelkanth Finbuild Limited",
  },
  description:
    "RBI-registered NBFC offering Personal Loans, Business Loans, and Loan Against Property. Serving Delhi and Guwahati since 1996.",
  metadataBase: new URL("https://neelkanthfinbuild.com"),
};

/* ─── Root layout ─────────────────────────────────────────────────────────── */

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${domine.variable} ${ibmPlexSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
