import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Phone, Mail, User, Building, MessageSquare, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { showSuccess } from "@/utils/toast";

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [packageInterest, setPackageInterest] = useState("Growth — $1,500/mo");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showSuccess("Strategy Call Request Received! Andy will reach out directly within 12 hours.");
  };

  return (
    <div className="bg-white py-16 text-slate-900 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-mono text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0B1B3D] tracking-tight">
            Book a Free Strategy Call
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            We start with a free 45-minute call to understand your business, goals, and current challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#0B1B3D]">Direct Contact Details</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect directly with Andy and the Cruzian team. We use Quo business telephony and HubSpot CRM for transparent client communication.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#0B1B3D] text-sm">Direct Phone / Text</p>
                  <a href="tel:9046648690" className="text-sm font-mono text-slate-700 hover:text-amber-600 font-bold">
                    (904) 664-8690
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-blue-100 text-[#0B1B3D] rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#0B1B3D] text-sm">Email Inquiries</p>
                  <a href="mailto:hello@cruzian.com" className="text-sm font-mono text-slate-700 hover:text-amber-600 font-bold">
                    hello@cruzian.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#0B1B3D] text-sm">Headquarters</p>
                  <p className="text-xs text-slate-600">Jacksonville, FL • Serving Clients Nationwide</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
              <p className="font-bold text-[#0B1B3D] mb-1">Our Strategy Guarantee:</p>
              <span>"If we can't find clear ways to add revenue and qualified leads to your business, we'll tell you upfront." — Andy</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1B3D]">Strategy Call Request Received!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you <strong className="text-amber-700">{ownerName || "Business Owner"}</strong>. Andy is reviewing <strong className="text-[#0B1B3D]">{businessName}</strong> and will reach out via phone or email within 12 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-bold px-6 py-3 rounded-xl"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase font-mono">Package of Interest</label>
                  <select
                    value={packageInterest}
                    onChange={(e) => setPackageInterest(e.target.value)}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Business Boost (One-Time) — $399">Business Boost (One-Time) — $399</option>
                    <option value="Visibility — $750/month">Visibility — $750/month</option>
                    <option value="Growth — $1,500/month">Growth — $1,500/month (Most Popular)</option>
                    <option value="Dominance — Starting at $3,000/month">Dominance — Starting at $3,000/month</option>
                    <option value="Custom Project / Add-On">Custom Project / Add-On</option>
                    <option value="Not Sure — Need Recommendations">Not Sure — Need Recommendations</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase font-mono">Business Name</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        placeholder="e.g. Apex Health Clinic"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="pl-10 bg-white border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase font-mono">Your Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        placeholder="Dr. John Smith"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="pl-10 bg-white border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase font-mono">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        type="email"
                        placeholder="john@clinic.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-white border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase font-mono">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        placeholder="(904) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10 bg-white border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase font-mono">Current Business Challenge / Goals</label>
                  <Textarea
                    placeholder="Tell us what you're looking to achieve (e.g., more B2B leads, local SEO visibility, Google Ads scaling)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white border-slate-200 text-slate-900 rounded-xl text-sm h-24"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0B1B3D] hover:bg-slate-800 text-amber-400 font-black py-6 rounded-xl shadow-md flex items-center justify-center gap-2 text-base"
                >
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>Book Free 45-Minute Strategy Call</span>
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};