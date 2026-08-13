import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Flame, Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Andy's Story", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "ROI Calculator", path: "/calculator" },
    { name: "Get Audit", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
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
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors py-1 border-b-2 ${
                isActive(link.path)
                  ? "text-amber-400 border-amber-400 font-bold"
                  : "text-slate-300 border-transparent hover:text-amber-400"
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
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold px-6 py-5 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center gap-2"
          >
            <span>Claim Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 text-base font-semibold ${
                isActive(link.path) ? "text-amber-400" : "text-slate-200 hover:text-amber-400"
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
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold py-3 rounded-xl shadow-md"
            >
              Claim Free Growth Audit
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};