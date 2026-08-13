import React from "react";
import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Contact Us
          </h2>
          <p className="text-slate-600 font-medium">
            Your Medicine Zone Sahibnagar — संपर्क करें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Store Information */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                Store Information
              </h3>

              <div className="space-y-4 text-slate-700 text-sm">
                <div className="pb-3 border-b border-slate-100 flex items-start gap-3">
                  <span className="font-bold text-slate-900 w-24 shrink-0">Business:</span>
                  <span>Your Medicine Zone Sahibnagar</span>
                </div>

                <div className="pb-3 border-b border-slate-100 flex items-start gap-3">
                  <span className="font-bold text-slate-900 w-24 shrink-0">Location:</span>
                  <span>Sahibnagar, Jharkhand, India</span>
                </div>

                <div className="pb-3 border-b border-slate-100 flex items-start gap-3">
                  <span className="font-bold text-slate-900 w-24 shrink-0">Phone:</span>
                  <a
                    href="tel:+919508597379"
                    className="text-emerald-700 font-bold hover:underline"
                  >
                    +91 95085 97379
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-bold text-slate-900 w-24 shrink-0">Timing:</span>
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Clock className="w-4 h-4 text-emerald-600" /> Mon - Sat: 8:00 AM - 9:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Sahibnagar और आस-पास के क्षेत्रों के लिए quick order delivery एवं support.
            </div>
          </div>

          {/* Card 2: Quick Contact */}
          <div className="bg-emerald-900 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Quick Contact
              </h3>

              <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                Product availability, dosage guidelines, या direct prescription photo भेजने के लिए WhatsApp पर बेझिझक संपर्क करें।
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/919508597379"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-md transition-all hover:scale-102 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp पर Chat करें</span>
              </a>

              <a
                href="tel:+919508597379"
                className="w-full py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-center border border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span>Direct Call करें</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
