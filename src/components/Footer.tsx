import React from "react";
import { Pill, Heart, Phone, MapPin, MessageSquare } from "lucide-react";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  return (
    <footer className="bg-emerald-950 text-white pt-12 pb-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-emerald-900/80">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Pill className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white">
                Your <span className="text-emerald-400">Medicine Zone</span>
              </span>
            </div>
            <p className="text-emerald-200/80 text-sm leading-relaxed max-w-sm">
              Sahibnagar, Jharkhand का आपका अपना भरोसेमंद मेडिकल एवं हेल्थकेयर स्टोर। आपकी सेहत, हमारी प्राथमिकता ❤️
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-amber-300 font-bold text-sm tracking-wider uppercase">
              Quick Navigation
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-emerald-100">
              <button
                onClick={() => onScrollToSection("home")}
                className="hover:text-amber-300 text-left transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onScrollToSection("medicines")}
                className="hover:text-amber-300 text-left transition-colors cursor-pointer"
              >
                Medicines Catalog
              </button>
              <button
                onClick={() => onScrollToSection("about")}
                className="hover:text-amber-300 text-left transition-colors cursor-pointer"
              >
                About Store
              </button>
              <button
                onClick={() => onScrollToSection("contact")}
                className="hover:text-amber-300 text-left transition-colors cursor-pointer"
              >
                Contact & Support
              </button>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-3 text-sm text-emerald-100">
            <h4 className="text-amber-300 font-bold text-sm tracking-wider uppercase">
              Store Contact
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sahibnagar, Jharkhand, India</span>
              </div>
              <a
                href="tel:+919508597379"
                className="flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 95085 97379</span>
              </a>
              <a
                href="https://wa.me/919508597379"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Order Support</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/70 gap-3">
          <div>
            © 2026 Your Medicine Zone Sahibnagar. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for Sahibnagar Healthcare
          </div>
        </div>

      </div>
    </footer>
  );
};
