import type { Metadata } from "next";
import ProductPageTemplate from "@/app/components/products/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Loan Against Property",
  description:
    "Unlock up to 85% of your property's market value. Tenure of 84 months or more. Separate from business loan — a distinct secured lending category.",
};

export default function LoanAgainstPropertyPage() {
  return (
    <ProductPageTemplate
      breadcrumbLabel="Loan Against Property"
      tag="Secured · Property"
      title="Loan Against Property"
      description="Unlock the financial value of your residential or commercial property without selling it. Use the funds for personal needs, business requirements, or any other legitimate purpose — while retaining ownership of your asset."
      details={[
        { label: "Loan type", value: "Secured" },
        { label: "Minimum age", value: "18 years" },
        { label: "Collateral", value: "Residential or commercial property" },
        { label: "Loan amount", value: "Starting from ₹5 lakhs" },
        { label: "Maximum LTV", value: "Up to 85% of market value" },
        { label: "Tenure", value: "84 months or more" },
        { label: "Income eligibility", value: "Contact us for details" },
      ]}
      benefits={[
        {
          title: "High loan-to-value ratio",
          description: "Access up to 85% of your property's current market value.",
        },
        {
          title: "Extended repayment tenure",
          description: "Tenure of 84 months or more, keeping monthly obligations manageable.",
        },
        {
          title: "Retain property ownership",
          description: "Your property is collateral, not a sale — you remain the owner throughout.",
        },
        {
          title: "Multipurpose use",
          description: "Personal needs, business growth, education, medical — no restriction on end use.",
        },
        {
          title: "Quick processing",
          description: "Efficient review of your application and property documents.",
        },
        {
          title: "Minimal documentation",
          description: "Standard KYC, income proof, and property ownership documents.",
        },
      ]}
      notes={[
        {
          type: "info",
          text: "This is a distinct product category — not the same as a Secured Business Loan. It is a secured loan against property available for personal or business purposes.",
        },
        {
          type: "warning",
          text: "Income eligibility criteria and current interest rate are available on enquiry. Call us on 0361-2221111 for complete details before applying.",
        },
      ]}
    />
  );
}
