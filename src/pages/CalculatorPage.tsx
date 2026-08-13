import React from "react";
import { RevenueCalculator } from "@/components/RevenueCalculator";

interface CalculatorPageProps {
  onOpenAudit: () => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenAudit }) => {
  return (
    <div className="py-12">
      <RevenueCalculator onOpenAudit={onOpenAudit} />
    </div>
  );
};