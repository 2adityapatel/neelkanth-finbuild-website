import type { Metadata } from "next";
import { ComplianceStub } from "@/app/components/ComplianceStub";

export const metadata: Metadata = {
  title: "Fair Practices Code",
  description: "Fair Practices Code for Neelkanth Finbuild Limited — content being finalised.",
};

export default function FairPracticesCodePage() {
  return (
    <ComplianceStub
      title="Fair Practices Code"
      description="The Fair Practices Code sets out the principles governing how Neelkanth Finbuild Limited conducts its lending activities, in accordance with RBI guidelines for NBFCs. This document will be published here once finalised."
    />
  );
}
