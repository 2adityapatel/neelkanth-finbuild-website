import type { Metadata } from "next";
import ProductPageTemplate from "@/app/components/products/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Secured Business Loan",
  description:
    "Property-backed business financing with attractive interest rates. Age 18+, business vintage 2 years+, starting from ₹5 lakhs, tenure 12–48 months.",
};

export default function SecuredBusinessLoanPage() {
  return (
    <ProductPageTemplate
      breadcrumbLabel="Secured Business Loan"
      tag="Secured · Business"
      title="Secured Business Loan"
      description="Higher-value business financing backed by landed property as collateral — with an attractive interest rate. Suitable for established businesses looking for larger funding at competitive terms."
      details={[
        { label: "Loan type", value: "Secured" },
        { label: "Minimum age", value: "18 years" },
        { label: "Business vintage", value: "Minimum 2 years" },
        { label: "Loan amount", value: "Starting from ₹5 lakhs" },
        { label: "Tenure", value: "12 to 48 months" },
        { label: "Collateral", value: "Landed property required" },
        { label: "Interest rate", value: "Contact us for current rate" },
      ]}
      benefits={[
        {
          title: "Attractive interest rate",
          description: "Secured against property, which typically enables more competitive rates than unsecured lending.",
        },
        {
          title: "Quick processing",
          description: "Efficient review of your application and property documents.",
        },
        {
          title: "Multipurpose use",
          description: "Fund working capital, expansion, equipment, or other business requirements.",
        },
        {
          title: "Flexible tenure",
          description: "Repayment structured between 12 and 48 months.",
        },
        {
          title: "Minimal documentation",
          description: "Standard KYC, business proof, income documents, and property papers.",
        },
      ]}
      notes={[
        {
          type: "warning",
          text: "Interest rate is available on enquiry. Call us on 0361-2221111 for the current applicable rate and a full product illustration before you apply.",
        },
      ]}
    />
  );
}
