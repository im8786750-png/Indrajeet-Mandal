import React, { useState } from "react";
import { Product, CartItem, Order } from "../types";
import { X, Send, User, Phone, MapPin, ShoppingBag } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  products: Product[];
  onOrderComplete: (order: Order) => void;
}

const WHATSAPP_NUMBER = "919508597379";

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  products,
  onOrderComplete,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const cartDetails = cart
    .map((item) => {
      const p = products.find((x) => x.id === item.id);
      if (!p) return null;
      return {
        product: p,
        qty: item.qty,
        subtotal: p.price * item.qty,
      };
    })
    .filter(Boolean) as { product: Product; qty: number; subtotal: number }[];

  const totalPrice = cartDetails.reduce((sum, item) => sum + item.subtotal, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      setError("कृपया अपना नाम, मोबाइल नंबर और डिलीवरी पता भरें।");
      return;
    }

    let message = "🏥 *Your Medicine Zone Sahibnagar*\n";
    message += "━━━━━━━━━━━━━━━━\n";
    message += "🧾 *NEW ORDER*\n\n";
    message += `👤 Name: ${name.trim()}\n`;
    message += `📞 Mobile: ${phone.trim()}\n`;
    message += `📍 Address: ${address.trim()}\n\n`;
    message += "🛒 *Products:*\n";

    const orderItems = cartDetails.map((c) => {
      message += `• ${c.product.name} × ${c.qty} = ₹${c.subtotal.toFixed(2)}\n`;
      return {
        id: c.product.id,
        name: c.product.name,
        price: c.product.price,
        qty: c.qty,
      };
    });

    message += `\n💰 *Total: ₹${totalPrice.toFixed(2)}*\n`;
    message += "━━━━━━━━━━━━━━━━\n";
    message += "Please confirm product availability and final delivery price.";

    const newOrder: Order = {
      id: "ORD-" + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      items: orderItems,
      total: totalPrice,
      date: new Date().toLocaleString("en-IN"),
    };

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Call parent handler
    onOrderComplete(newOrder);

    // Reset local state
    setName("");
    setPhone("");
    setAddress("");
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Order Details</h2>
            <p className="text-xs text-slate-500 font-medium">
              WhatsApp पर order भेजने के लिए अपनी जानकारी भरें
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
              {error}
            </div>
          )}

          {/* Cart Brief Summary */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-between text-xs text-emerald-900 font-medium">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-emerald-600" />
              <span>{cartDetails.length} items to order</span>
            </div>
            <span className="font-extrabold text-sm text-emerald-950">
              Total: ₹{totalPrice.toFixed(2)}
            </span>
          </div>

          {/* Name input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Customer Name (आपका नाम) *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="उदा. Ramesh Kumar"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-emerald-500 focus:outline-hidden transition-all"
              />
            </div>
          </div>

          {/* Phone input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Mobile Number (मोबाइल नंबर) *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="उदा. 9876543210"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-emerald-500 focus:outline-hidden transition-all"
              />
            </div>
          </div>

          {/* Address input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Delivery Address (पता) *
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <textarea
                required
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="आपका पूरा पता (Sahibnagar area)"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-emerald-500 focus:outline-hidden transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send Order on WhatsApp</span>
          </button>

          <p className="text-[11px] text-center text-slate-400 leading-tight">
            यह order सीधे Your Medicine Zone (+91 95085 97379) के WhatsApp पर भेजा जाएगा।
          </p>
        </form>

      </div>
    </div>
  );
};
