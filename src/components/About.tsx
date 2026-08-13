import React from "react";
import { AlertTriangle, Store, ShieldCheck } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs mb-3">
            <Store className="w-4 h-4" /> About Us
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Your Medicine Zone Sahibnagar
          </h2>
        </div>

        <div className="space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
            <p className="mb-4">
              <strong className="text-slate-900 font-bold">Your Medicine Zone Sahibnagar</strong>
              {" "}के लिए यह एक Digital Catalog और Ordering Interface है। यहाँ customers आसानी से products देख सकते हैं, search कर सकते हैं, cart बना सकते हैं और डायरेक्ट WhatsApp के माध्यम से order details भेज सकते हैं।
            </p>
            <p>
              हमारा लक्ष्य साहिबगंज और साहिबनगर क्षेत्र के ग्राहकों को गुणवत्तापूर्ण स्वास्थ्य उत्पाद और दवाएं उपलब्ध कराना है।
            </p>
          </div>

          {/* Important Medical Disclaimer */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 flex items-start gap-4 text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-amber-950 block mb-1">
                Important Prescription Notice:
              </strong>
              Prescription medicines केवल वैध डॉक्टर की सलाह (valid prescription) और सरकारी नियमों के अनुसार ही प्रदान की जाती हैं। Website पर दर्शाई गई दरों (Prices) एवं स्टॉक की पुष्टि स्टोर द्वारा WhatsApp order प्राप्त होने पर की जाएगी।
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm">
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-semibold text-slate-800">100% Genuine Healthcare Stock</span>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-3">
              <Store className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-semibold text-slate-800">Local Support Sahibnagar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
