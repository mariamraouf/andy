import React from "react";
import { UserCheck, PhoneCall, MessageSquare, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

export const GrowthArchitecture: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            <span>Growth Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tight">
            How The Engine Converts
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Three interconnected layers designed to capture, close, and retain high-ticket clients.
          </p>
        </div>

        {/* 3 Step Visual Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 space-y-6 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-amber-400 font-mono font-black text-sm flex items-center justify-center">
                  01
                </span>
                <UserCheck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1B3D] group-hover:text-amber-600 transition-colors">
                Verified Prospect Sourcing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We identify newly registered businesses, medical directors, and commercial property owners in your target radius. Every mobile number is verified before dialing.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero dead numbers or spam traps</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 space-y-6 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-amber-400 font-mono font-black text-sm flex items-center justify-center">
                  02
                </span>
                <PhoneCall className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1B3D] group-hover:text-amber-600 transition-colors">
                High-EQ Human Calling
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Skilled sales professionals execute custom consultative scripts. We handle gatekeepers, qualify buyers, and schedule meetings directly into your calendar.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
                <span>Daily call recordings & logs via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 space-y-6 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-amber-400 font-mono font-black text-sm flex items-center justify-center">
                  03
                </span>
                <MessageSquare className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1B3D] group-hover:text-amber-600 transition-colors">
                8-Second Call Rescue
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                If your staff is busy or you're on a job site, our automated response texts the caller in under 8 seconds with your self-booking link.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero lost leads to competitors</span>
              </div>
            </div>
          </div>

        </div>

        {/* Live Phone Rescue Visual Mockup Strip */}
        <div className="bg-[#0B1B3D] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 grid lg:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 font-mono text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Real World Demonstration</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              The 8-Second Missed Call Rescue in Action
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              When high-intent clients call and get voicemail, 74% will immediately dial your next competitor. The Cruzian stops the bleed instantly by texting them within seconds.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-4 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-[11px] text-slate-400">
              <span>SMS SIMULATION</span>
              <span className="text-emerald-400">STATUS: DELIVERED</span>
            </div>
            <div className="space-y-2">
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 text-slate-300 text-[11px]">
                <span className="text-slate-500 text-[10px] block">Incoming Missed Call from (404) 555-0192</span>
                <span>"Call missed at 2:14 PM while on appointment"</span>
              </div>
              <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/30 text-amber-200 text-[11px]">
                <span className="text-amber-400 text-[10px] block">Auto-Rescue Triggered (2.4s)</span>
                <span>"Hey there! Sorry I missed you. Are you looking to schedule an estimate this week? Pick a slot: cruzian.link/book"</span>
              </div>
              <div className="bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/30 text-emerald-300 text-[11px]">
                <span className="text-emerald-400 text-[10px] block">Lead Response (45s later)</span>
                <span>"Just booked for Thursday at 10am, thank you!"</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};