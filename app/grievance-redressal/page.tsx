import type { Metadata } from "next";
import { ComplianceStub } from "@/app/components/ComplianceStub";

export const metadata: Metadata = {
  title: "Grievance Redressal",
  description: "Grievance Redressal mechanism for Neelkanth Finbuild Limited — content being finalised.",
};

export default function GrievanceRedressalPage() {
  return (
    <ComplianceStub
      title="Grievance Redressal"
      description="Neelkanth Finbuild Limited is required to maintain a Grievance Redressal mechanism including a named Grievance Redressal Officer, escalation tiers, and RBI Ombudsman contact details. This information will be published here once the Grievance Redressal Officer details are confirmed."
    />
  );
}
