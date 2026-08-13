import React, { useState } from "react";
import { MessageCircle, X, ArrowRight, PalmTree } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WidgetProps {
  onOpenAudit: () => void;
}

export const FloatingChatWidget: React.FC<WidgetProps> = ({ onOpenAudit }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {expanded ? (
        <div className="bg-[#0B1B3D] text-white rounded-2xl p-5 shadow-2xl border border-slate-800 w-80 space-y-4 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-[#0B1B3D] flex items-center justify-center font-bold">
                <PalmTree className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Andy • The Cruzian</p>
                <p className="text-[10px] text-amber-400 font-mono">Online • St. Croix</p>
              </div>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs text-slate-200 space-y-2">
            <p className="font-semibold">Hey there! 👋</p>
            <p className="text-slate-300 leading-relaxed">
              Looking to scale your business or set up automated missed-call recovery? Let's build your 30-day strategy.
            </p>
          </div>

          <Button
            onClick={() => {
              setExpanded(false);
              onOpenAudit();
            }}
            className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black text-xs py-4 rounded-xl flex items-center justify-center gap-2"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="relative group flex items-center gap-3 bg-[#0B1B3D] hover:bg-[#08132b] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl border border-amber-400/40 transition-transform hover:scale-105"
        >
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-[#0B1B3D] rounded-full font-black text-[10px] flex items-center justify-center border-2 border-white">
            1
          </span>

          <div className="w-8 h-8 rounded-full bg-amber-500 text-[#0B1B3D] flex items-center justify-center">
            <MessageCircle className="w-5 h-5 fill-[#0B1B3D]" />
          </div>

          <div className="hidden sm:block text-left">
            <p className="text-xs font-black uppercase tracking-wider text-amber-400 font-mono">
              We Are Here!
            </p>
            <p className="text-[10px] text-slate-300 font-medium -mt-0.5">
              Talk with Andy
            </p>
          </div>
        </button>
      )}
    </div>
  );
};