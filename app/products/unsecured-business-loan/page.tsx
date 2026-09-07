import type { Metadata } from "next";
import ProductPageTemplate from "@/app/components/products/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Unsecured Business Loan",
  description:
    "Business financing without collateral. Age 18+, business vintage 2 years+, starting from ₹5 lakhs, tenure 12–48 months.",
};

export default function UnsecuredBusinessLoanPage() {
  return (
    <ProductPageTemplate
      breadcrumbLabel="Unsecured Business Loan"
      tag="Unsecured · Business"
      title="Unsecured Business Loan"
      description="Working capital or growth financing for established businesses — without pledging any asset. Structured for businesses with a track record of at least two years."
      details={[
        { label: "Loan type", value: "Unsecured" },
        { label: "Minimum age", value: "18 years" },
        { label: "Business vintage", value: "Minimum 2 years" },
        { label: "Loan amount", value: "Starting from ₹5 lakhs" },
        { label: "Tenure", value: "12 to 48 months" },
        { label: "Collateral", value: "None required" },
      ]}
      benefits={[
        {
          title: "No collateral required",
          description: "Access business financing without pledging any property or asset.",
        },
        {
          title: "Quick processing",
          description: "Faster turnaround once your application and documents are complete.",
        },
        {
          title: "Multipurpose use",
          description: "Working capital, inventory, equipment, expansion — use as needed.",
        },
        {
          title: "Flexible tenure",
          description: "Repayment structured between 12 and 48 months to suit your cash flow.",
        },
        {
          title: "Minimal documentation",
          description: "Standard KYC, business proof, and income documents.",
        },
        {
          title: "Competitive interest rates",
          description: "Offered by an RBI-registered NBFC operating under fair practices guidelines.",
        },
      ]}
    />
  );
}
