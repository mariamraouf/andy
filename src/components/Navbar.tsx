import React, { useState } from "react";
import { Flame, Phone, Menu, X, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
            <Flame className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-white font-mono uppercase">
                THE<span className="text-amber-400">CRUZIAN</span>
              </span>
              <span className="bg-amber-500/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                ST. CROIX GRIT
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium -mt-1 tracking-wider uppercase">
              Growth Engine & Market Dominance
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <button
            onClick={() => scrollTo("solutions")}
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            Industries
          </button>
          <button
            onClick={() => scrollTo("manifesto")}
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            Andy's Manifesto
          </button>
          <button
            onClick={() => scrollTo("calculator")}
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            ROI Calculator
          </button>
          <button
            onClick={() => scrollTo("engine")}
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            Growth System
          </button>
          <button
            onClick={() => scrollTo("comparison")}
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            Why Us
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={onOpenAudit}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold px-6 py-5 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center gap-2"
          >
            <span>Claim Free Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-4">
          <button
            onClick={() => scrollTo("solutions")}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Target Industries
          </button>
          <button
            onClick={() => scrollTo("manifesto")}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Andy's Philosophy
          </button>
          <button
            onClick={() => scrollTo("calculator")}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Revenue Calculator
          </button>
          <button
            onClick={() => scrollTo("engine")}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            The Growth Engine
          </button>
          <button
            onClick={() => scrollTo("comparison")}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Cruzian vs Agencies
          </button>
          <Button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold py-3 rounded-xl shadow-md"
          >
            Get Your Free Audit Now
          </Button>
        </div>
      )}
    </nav>
  );
};