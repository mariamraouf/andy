import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TreePalm as PalmTree, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Growth Engine", path: "/services" },
    { name: "Industry Playbooks", path: "/industries" },
    { name: "ROI Yield Simulator", path: "/calculator" },
    { name: "Andy's Story", path: "/about" },
    { name: "Direct Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-amber-400 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-[#07132b]">
            <PalmTree className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-[#0B1B3D] font-serif">
                THE CRUZIAN
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </div>
            <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest -mt-1 font-mono">
              ST. CROIX • USVI
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/60 shadow-xs">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isActive(link.path)
                  ? "bg-[#0B1B3D] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#0B1B3D] hover:bg-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            onClick={onOpenAudit}
            className="bg-[#0B1B3D] hover:bg-[#132752] text-amber-400 font-bold px-5 py-2.5 rounded-full text-xs border border-amber-500/30 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Claim Growth Audit</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? "bg-[#0B1B3D] text-amber-400"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-bold py-3.5 rounded-xl text-sm shadow-md"
          >
            Claim Free Growth Audit
          </Button>
        </div>
      )}
    </header>
  );
};