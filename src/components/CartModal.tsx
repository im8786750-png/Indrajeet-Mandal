import React from "react";
import { Product, CartItem } from "../types";
import { ShoppingBag, X, Minus, Plus, Trash2, ArrowRight } from "lucide-react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  products: Product[];
  onChangeQty: (id: number, change: number) => void;
  onProceedToCheckout: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cart,
  products,
  onChangeQty,
  onProceedToCheckout,
}) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">Your Cart</h2>
              <p className="text-xs text-slate-500 font-medium">
                {cartDetails.length} items in list
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {cartDetails.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <div className="text-5xl mb-3">🛒</div>
              <h3 className="font-bold text-slate-700 text-lg mb-1">
                Cart खाली है
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Medicines या products लिस्ट में जोड़कर अपना order तैयार करें।
              </p>
            </div>
          ) : (
            cartDetails.map(({ product, qty, subtotal }) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-2xl shrink-0">
                  {product.icon || "💊"}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm truncate">
                    {product.name}
                  </h4>
                  <div className="text-xs text-slate-500 mt-0.5">
                    ₹{product.price.toFixed(2)} / unit
                  </div>
                </div>

                {/* Quantity Controller */}
                <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-slate-200">
                  <button
                    onClick={() => onChangeQty(product.id, -1)}
                    className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {qty === 1 ? <Trash2 className="w-3.5 h-3.5 text-rose-500" /> : <Minus className="w-3.5 h-3.5" />}
                  </button>

                  <span className="text-xs font-bold w-5 text-center text-slate-900">
                    {qty}
                  </span>

                  <button
                    onClick={() => onChangeQty(product.id, 1)}
                    className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right min-w-[65px]">
                  <span className="font-extrabold text-slate-900 text-sm">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartDetails.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold text-slate-600">Total Amount</span>
              <span className="text-2xl font-black text-slate-900">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Proceed to Order Details</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
