import type { Metadata } from "next";
import { ComplianceStub } from "@/app/components/ComplianceStub";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Neelkanth Finbuild Limited — content being finalised.",
};

export default function TermsOfUsePage() {
  return (
    <ComplianceStub
      title="Terms of Use"
      description="The Terms of Use govern access to and use of the Neelkanth Finbuild Limited website. This document will be published here once finalised and approved."
    />
  );
}
