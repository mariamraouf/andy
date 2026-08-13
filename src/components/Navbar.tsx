import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Zap, Menu, X, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Platform", path: "/" },
    { name: "Andy's Story", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industry Playbooks", path: "/industries" },
    { name: "ROI Calculator", path: "/calculator" },
    { name: "Claim Audit", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-emerald-400 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-white font-mono uppercase">
                THE<span className="text-cyan-400">CRUZIAN</span>
              </span>
              <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-cyan-500/20 font-mono">
                ST. CROIX
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider -mt-0.5">
              Client Acquisition Infrastructure
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-150 py-1 ${
                isActive(link.path)
                  ? "text-cyan-400 font-bold border-b-2 border-cyan-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            onClick={onOpenAudit}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
          >
            <Activity className="w-4 h-4" />
            <span>Free Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090E] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 text-sm font-medium ${
                isActive(link.path) ? "text-cyan-400 font-bold" : "text-slate-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full bg-cyan-500 text-slate-950 font-bold py-3 rounded-xl shadow-md"
            >
              Claim Free Growth Audit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};