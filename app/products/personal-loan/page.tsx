import type { Metadata } from "next";
import ProductPageTemplate from "@/app/components/products/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Personal Loan",
  description:
    "Unsecured personal loans for self-employed individuals and professionals. Age 18+, monthly income ₹25,000+. Quick access, minimal documentation.",
};

export default function PersonalLoanPage() {
  return (
    <ProductPageTemplate
      breadcrumbLabel="Personal Loan"
      tag="Unsecured · Individual"
      title="Personal Loan"
      description="Quick access to funds without pledging any asset. Designed for self-employed individuals and professionals who need flexible, transparent financing."
      details={[
        { label: "Loan type", value: "Unsecured" },
        { label: "Minimum age", value: "18 years" },
        { label: "Monthly income", value: "₹25,000 or more" },
        { label: "Tenure", value: "Flexible — based on loan amount" },
        { label: "Collateral", value: "None required" },
      ]}
      benefits={[
        {
          title: "No collateral required",
          description: "Fully unsecured — you do not need to pledge any property or asset.",
        },
        {
          title: "Quick access to funds",
          description: "Faster processing with minimal paperwork once documents are submitted.",
        },
        {
          title: "Debt consolidation",
          description: "Use the loan to consolidate multiple existing obligations into one.",
        },
        {
          title: "Flexible repayment",
          description: "Repayment tenure is structured around the loan amount and your profile.",
        },
        {
          title: "Minimal documentation",
          description: "Standard identity, address, and income proof — no complex paperwork.",
        },
        {
          title: "Competitive interest rates",
          description: "Rates set by an RBI-registered NBFC operating under fair practices guidelines.",
        },
      ]}
      notes={[
        {
          type: "info",
          text: "Currently available for self-employed individuals and professionals. Contact us on 0361-2221111 to confirm eligibility for your specific profile.",
        },
      ]}
    />
  );
}
