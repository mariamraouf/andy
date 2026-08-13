import React, { useState } from "react";
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalculatorProps {
  onOpenAudit: () => void;
}

export const RevenueCalculator: React.FC<CalculatorProps> = ({ onOpenAudit }) => {
  const [currentRevenue, setCurrentRevenue] = useState<number>(25000);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(1500);
  const [targetGrowth, setTargetGrowth] = useState<number>(40);

  // Calculations
  const newMonthlyRevenue = Math.round(currentRevenue * (1 + targetGrowth / 100));
  const monthlyRevenueGain = newMonthlyRevenue - currentRevenue;
  const additionalClientsNeeded = Math.max(1, Math.ceil(monthlyRevenueGain / avgCustomerValue));
  const requiredLeadsEstimated = additionalClientsNeeded * 12; // Assuming ~8% conversion from verified lead

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Calculate Your Business Growth Potential
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how many extra high-ticket clients you need each month to reach your target revenue goals with The Cruzian Growth Engine.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 bg-slate-950 rounded-3xl border border-amber-500/30 p-6 sm:p-10 shadow-2xl grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Current Revenue */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-slate-200">Current Monthly Revenue:</label>
                <span className="font-mono text-amber-400 text-lg font-black bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  ${currentRevenue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={currentRevenue}
                onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$5,000/mo</span>
                <span>$100,000/mo</span>
                <span>$200,000+/mo</span>
              </div>
            </div>

            {/* Slider 2: Average Customer / Job Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-slate-200">Average Client / Job Value:</label>
                <span className="font-mono text-amber-400 text-lg font-black bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  ${avgCustomerValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="15000"
                step="100"
                value={avgCustomerValue}
                onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$200 (Dining/Small)</span>
                <span>$3,000 (Medical)</span>
                <span>$15,000+ (Roofing)</span>
              </div>
            </div>

            {/* Slider 3: Target Growth Percentage */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-slate-200">Desired Target Growth:</label>
                <span className="font-mono text-orange-400 text-lg font-black bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  +{targetGrowth}% Growth
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={targetGrowth}
                onChange={(e) => setTargetGrowth(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>+10% Moderate</span>
                <span>+50% Aggressive</span>
                <span>+150% Market Dominance</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Estimates based on Apollo lead enrichment + human phone outreach conversion rates.</span>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-amber-500/40 p-6 sm:p-8 space-y-6 shadow-xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                YOUR GROWTH PROJECTED OUTPUT
              </span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>

            {/* Result Stats */}
            <div className="space-y-4">
              
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400 font-medium">New Projected Monthly Revenue</p>
                <p className="text-3xl font-black text-amber-400 font-mono mt-1">
                  ${newMonthlyRevenue.toLocaleString()} <span className="text-xs text-emerald-400 font-sans font-bold">/mo</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Monthly Gain</p>
                  <p className="text-xl font-bold text-emerald-400 font-mono mt-0.5">
                    +${monthlyRevenueGain.toLocaleString()}
                  </p>
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Extra Clients Needed</p>
                  <p className="text-xl font-bold text-amber-300 font-mono mt-0.5">
                    +{additionalClientsNeeded} /mo
                  </p>
                </div>
              </div>

              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20 text-xs text-slate-300">
                <p className="font-bold text-amber-300 mb-1">Lead Outreach Requirement:</p>
                <span>
                  To consistently book <strong className="text-white">{additionalClientsNeeded} new clients</strong>, we target roughly <strong className="text-white">{requiredLeadsEstimated} verified leads/month</strong> via cold call + ad retargeting.
                </span>
              </div>

            </div>

            {/* CTA */}
            <Button
              onClick={onOpenAudit}
              className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black py-6 rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 text-base"
            >
              <span>Build Plan For ${newMonthlyRevenue.toLocaleString()}/mo</span>
              <ArrowRight className="w-5 h-5" />
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
};