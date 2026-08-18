import React from "react";
import { ServicesSection } from "@/components/ServicesSection";
import { OurProcessSection } from "@/components/OurProcessSection";
import { PackagesSection } from "@/components/PackagesSection";

interface ServicesProps {
  onOpenAudit: (pkg?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAudit }) => {
  return (
    <div className="bg-white">
      <ServicesSection onOpenAudit={onOpenAudit} />
      <OurProcessSection onOpenAudit={onOpenAudit} />
      <PackagesSection onOpenAudit={onOpenAudit} />
    </div>
  );
};