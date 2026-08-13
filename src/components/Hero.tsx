import React from "react";
import { Search, MessageSquare, ShieldCheck, HeartPulse, MapPin, Phone } from "lucide-react";

interface HeroProps {
  onBrowseMedicines: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBrowseMedicines }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-850 to-teal-900 text-white py-16 sm:py-24">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-teal-400/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/60 border border-emerald-500/30 text-emerald-200 text-xs font-semibold backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Sahibnagar, Jharkhand Pharmacy Store</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Your <span className="text-amber-300">Medicine Zone</span>
            </h1>

            <p className="text-emerald-100/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Sahibnagar का trusted medicine और healthcare store. अपनी जरूरत के products खोजें और order details WhatsApp के माध्यम से आसानी से भेजें।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBrowseMedicines}
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base shadow-lg shadow-amber-400/25 transition-all hover:scale-102 flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-5 h-5" />
                <span>Medicines देखें</span>
              </button>

              <a
                href="https://wa.me/919508597379"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base border border-emerald-400/30 shadow-lg shadow-emerald-900/40 transition-all hover:scale-102 flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-200" />
                <span>WhatsApp करें</span>
              </a>
            </div>

            {/* Quick Contact Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-emerald-200/80 font-medium border-t border-emerald-800/60">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" /> Sahibnagar, Jharkhand
              </span>
              <a href="tel:+919508597379" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-emerald-400" /> +91 95085 97379
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-inner text-4xl">
                🏥
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">
                Your Health, Our Priority
              </h2>

              <p className="text-emerald-100/80 text-sm leading-relaxed mb-6">
                Authentic Medicines • Healthcare Products • Quick Local Order Support in Sahibnagar
              </p>

              <div className="p-4 rounded-xl bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-around text-xs text-emerald-200 font-semibold">
                <div className="flex items-center gap-1.5">
                  <HeartPulse className="w-4 h-4 text-rose-400" /> Genuine
                </div>
                <div className="h-4 w-px bg-emerald-700" />
                <div>Fast WhatsApp Service</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
