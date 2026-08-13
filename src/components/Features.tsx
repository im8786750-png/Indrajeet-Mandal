import React from "react";
import { Pill, Search, ShoppingCart, MessageCircle } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Pill className="w-8 h-8 text-emerald-600" />,
      title: "Quality Products",
      desc: "Healthcare products और medicines की पूरी जानकारी एवं catalog.",
    },
    {
      icon: <Search className="w-8 h-8 text-emerald-600" />,
      title: "Easy Search",
      desc: "Medicine name या category से पसंदीदा products जल्दी खोजें.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-emerald-600" />,
      title: "Smart Cart",
      desc: "Products को cart में आसानी से जोड़कर तुरंत order तैयार करें.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
      title: "WhatsApp Order",
      desc: "Direct WhatsApp integration के साथ तुरंत order summary भेजें.",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100/80 hover:border-emerald-200 hover:shadow-md transition-all text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white border border-emerald-100 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
