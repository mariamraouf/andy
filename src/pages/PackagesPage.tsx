import React from "react";
import { PackagesSection } from "@/components/PackagesSection";
import { OurProcessSection } from "@/components/OurProcessSection";

interface PackagesPageProps {
  onOpenAudit: (pkg?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onOpenAudit }) => {
  return (
    <div className="bg-white">
      <PackagesSection onOpenAudit={onOpenAudit} />
      <OurProcessSection onOpenAudit={onOpenAudit} />
    </div>
  );
};