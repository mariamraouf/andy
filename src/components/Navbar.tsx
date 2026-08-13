import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TreePalm as PalmTree, Menu, X, ArrowRight, PhoneCall } from "lucide-react";
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
    { name: "Get Audit", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo matching the uploaded picture */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform">
              <PalmTree className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="h-7 w-[2px] bg-amber-500/60 hidden sm:block mx-1" />
            <div>
              <span className="text-2xl font-black tracking-wider text-[#0B1B3D] font-serif uppercase">
                CRUZIAN
              </span>
              <p className="text-[10px] text-amber-600 font-sans font-bold uppercase tracking-widest -mt-1">
                ST. CROIX • USVI
              </p>
            </div>
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
                  ? "text-[#0B1B3D] border-amber-500 font-bold"
                  : "text-slate-600 border-transparent hover:text-[#0B1B3D]"
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
            className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-6 py-2.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>Free Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 text-base font-semibold ${
                isActive(link.path) ? "text-amber-600 font-bold" : "text-slate-700"
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
              className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-bold py-3 rounded-xl shadow-md"
            >
              Claim Free Growth Audit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};