import type { Metadata } from "next";
import { ComplianceStub } from "@/app/components/ComplianceStub";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Neelkanth Finbuild Limited — content being finalised.",
};

export default function PrivacyPolicyPage() {
  return (
    <ComplianceStub
      title="Privacy Policy"
      description="This Privacy Policy will describe how Neelkanth Finbuild Limited collects, uses, stores, and protects personal data in accordance with applicable law. It will be published here once finalised and approved."
    />
  );
}
