import React, { useState } from "react";
import { Calculator, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
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
  const requiredLeadsEstimated = additionalClientsNeeded * 12;

  return (
    <section id="calculator" className="py-20 bg-[#0B0F17] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Revenue Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Business Growth Potential
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how many extra high-ticket clients you need each month to reach your target revenue goals with The Cruzian Engine.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Current Revenue */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-200">Current Monthly Revenue:</label>
                <span className="font-mono text-cyan-400 text-lg font-bold bg-[#07090E] px-3 py-1 rounded-lg border border-white/10">
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
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
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
                <label className="font-semibold text-slate-200">Average Client / Job Value:</label>
                <span className="font-mono text-cyan-400 text-lg font-bold bg-[#07090E] px-3 py-1 rounded-lg border border-white/10">
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
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
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
                <label className="font-semibold text-slate-200">Desired Target Growth:</label>
                <span className="font-mono text-indigo-400 text-lg font-bold bg-[#07090E] px-3 py-1 rounded-lg border border-white/10">
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
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>+10% Moderate</span>
                <span>+50% Aggressive</span>
                <span>+150% Market Dominance</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Estimates based on Apollo lead enrichment + human phone outreach conversion metrics.</span>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-[#07090E] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl relative">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                PROJECTED MONTHLY OUTPUT
              </span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>

            {/* Result Stats */}
            <div className="space-y-4">
              
              <div className="bg-slate-900/90 p-4 rounded-xl border border-white/5">
                <p className="text-xs text-slate-400 font-medium">New Projected Monthly Revenue</p>
                <p className="text-3xl font-bold text-cyan-400 font-mono mt-1">
                  ${newMonthlyRevenue.toLocaleString()} <span className="text-xs text-emerald-400 font-sans font-semibold">/mo</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-white/5">
                  <p className="text-[11px] text-slate-400 font-medium">Monthly Gain</p>
                  <p className="text-xl font-bold text-emerald-400 font-mono mt-0.5">
                    +${monthlyRevenueGain.toLocaleString()}
                  </p>
                </div>

                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-white/5">
                  <p className="text-[11px] text-slate-400 font-medium">Extra Clients Needed</p>
                  <p className="text-xl font-bold text-cyan-300 font-mono mt-0.5">
                    +{additionalClientsNeeded} /mo
                  </p>
                </div>
              </div>

              <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20 text-xs text-slate-300">
                <p className="font-bold text-cyan-300 mb-1">Outreach Requirement:</p>
                <span>
                  To consistently book <strong className="text-white">{additionalClientsNeeded} new clients</strong>, we target roughly <strong className="text-white">{requiredLeadsEstimated} verified prospects/month</strong> via cold call + ad retargeting.
                </span>
              </div>

            </div>

            {/* CTA */}
            <Button
              onClick={onOpenAudit}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-6 rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 text-base"
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