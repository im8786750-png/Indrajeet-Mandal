import React, { useState } from "react";
import { Product, Order, Category } from "../types";
import { Lock, LogOut, Package, ShoppingCart, Plus, Trash2, FileText, Calendar, User, Phone, MapPin } from "lucide-react";

interface AdminPanelProps {
  products: Product[];
  orders: Order[];
  cartCount: number;
  onAddProduct: (product: Omit<Product, "id">) => void;
  onDeleteProduct: (id: number) => void;
  onDeleteOrder: (id: string) => void;
  onLogoutAdmin: () => void;
}

const CATEGORIES: Category[] = [
  "Healthcare",
  "Pain Relief",
  "Cold & Fever",
  "Vitamins",
];

export const AdminPanel: React.FC<AdminPanelProps> = ({
  products,
  orders,
  cartCount,
  onAddProduct,
  onDeleteProduct,
  onDeleteOrder,
  onLogoutAdmin,
}) => {
  // Form state
  const [name, setName] = useState("");
  const [category, setCategory] = useState<Category>("Healthcare");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [rx, setRx] = useState(false);
  const [icon, setIcon] = useState("💊");

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !price || Number(price) <= 0) return;

    onAddProduct({
      name: name.trim(),
      category,
      price: Number(price),
      desc: desc.trim() || "Healthcare product",
      rx,
      icon: icon.trim() || "💊",
    });

    setName("");
    setPrice("");
    setDesc("");
    setRx(false);
    setIcon("💊");
  };

  return (
    <section id="adminPanel" className="py-16 bg-emerald-950/10 border-t border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-md flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-600/20">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">🔐 Admin Control Panel</h2>
              <p className="text-xs font-semibold text-slate-500">
                Your Medicine Zone Sahibnagar — Product & Order Management
              </p>
            </div>
          </div>

          <button
            onClick={onLogoutAdmin}
            className="px-5 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-sm flex items-center gap-2 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Admin</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-emerald-100/80 shadow-xs flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Total Products
              </span>
              <span className="text-3xl font-black text-slate-900">
                {products.length}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-emerald-100/80 shadow-xs flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Total Orders
              </span>
              <span className="text-3xl font-black text-slate-900">
                {orders.length}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-emerald-100/80 shadow-xs flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <ShoppingCart className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Cart Items
              </span>
              <span className="text-3xl font-black text-slate-900">
                {cartCount}
              </span>
            </div>
          </div>
        </div>

        {/* Add Product Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100/80 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Plus className="w-5 h-5 text-emerald-600" />
            Add New Product
          </h3>

          <form onSubmit={handleCreateProduct} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Product Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Example: Vitamin C 500mg"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-emerald-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-emerald-500 focus:outline-hidden"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Price ₹ *
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="120"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-emerald-500 focus:outline-hidden"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Short description of benefits or dosage"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-emerald-500 focus:outline-hidden"
              />
            </div>

            <div className="flex items-center gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Prescription Required?
                </label>
                <select
                  value={rx ? "yes" : "no"}
                  onChange={(e) => setRx(e.target.value === "yes")}
                  className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-emerald-500 focus:outline-hidden"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes (RX)</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Icon (Emoji)
                </label>
                <input
                  type="text"
                  maxLength={4}
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-center focus:bg-white focus:border-emerald-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-3 pt-2">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product to Store</span>
              </button>
            </div>
          </form>
        </div>

        {/* Manage Products Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100/80 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Package className="w-5 h-5 text-emerald-600" />
            Manage Catalog Products ({products.length})
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 text-slate-500 border-b border-slate-200">
                  <th className="py-3 px-4 font-bold">Product</th>
                  <th className="py-3 px-4 font-bold">Category</th>
                  <th className="py-3 px-4 font-bold">Price</th>
                  <th className="py-3 px-4 font-bold">Prescription</th>
                  <th className="py-3 px-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 flex items-center gap-2.5">
                      <span className="text-xl">{p.icon || "💊"}</span>
                      <div>
                        <div>{p.name}</div>
                        <div className="text-xs text-slate-400 font-normal line-clamp-1">{p.desc}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-600 font-medium">{p.category}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">₹{p.price.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      {p.rx ? (
                        <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-700 text-[10px] font-bold">
                          RX YES
                        </span>
                      ) : (
                        <span className="text-slate-400 text-xs">No</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => {
                          if (confirm(`क्या आप ${p.name} delete करना चाहते हैं?`)) {
                            onDeleteProduct(p.id);
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 font-bold text-xs flex items-center gap-1 ml-auto cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders Log */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100/80 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            Customer Orders Log ({orders.length})
          </h3>

          {orders.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              अभी कोई local order दर्ज नहीं है।
            </div>
          ) : (
            <div className="space-y-4">
              {[...orders].reverse().map((order) => (
                <div
                  key={order.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-emerald-800 text-sm bg-emerald-100 px-2.5 py-0.5 rounded-md">
                        {order.id}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {order.date}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-slate-900 flex flex-wrap items-center gap-4 pt-1">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-400" /> {order.name}
                      </span>
                      <span className="flex items-center gap-1 text-slate-600">
                        <Phone className="w-3.5 h-3.5 text-slate-400" /> {order.phone}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {order.address}
                    </div>

                    <div className="text-xs text-slate-500 pt-1">
                      Items: {order.items.map((i) => `${i.name} (x${i.qty})`).join(", ")}
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between gap-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-200">
                    <div className="text-right">
                      <div className="text-xs text-slate-400">Total</div>
                      <div className="text-lg font-black text-slate-900">₹{order.total.toFixed(2)}</div>
                    </div>

                    <button
                      onClick={() => onDeleteOrder(order.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                      title="Remove record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
