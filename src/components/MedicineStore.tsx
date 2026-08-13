import React, { useState } from "react";
import { Product, Category } from "../types";
import { Search, Plus, FileText, Check } from "lucide-react";

interface MedicineStoreProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  cartItemIds: number[];
}

const CATEGORIES: Category[] = [
  "All",
  "Pain Relief",
  "Cold & Fever",
  "Vitamins",
  "Healthcare",
];

export const MedicineStore: React.FC<MedicineStoreProps> = ({
  products,
  onAddToCart,
  cartItemIds,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [addedAnimationId, setAddedAnimationId] = useState<number | null>(null);

  const filteredProducts = products.filter((p) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.desc.toLowerCase().includes(term);

    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleAdd = (p: Product) => {
    onAddToCart(p);
    setAddedAnimationId(p.id);
    setTimeout(() => setAddedAnimationId(null), 1200);
  };

  return (
    <section id="medicines" className="py-16 bg-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Medicine Catalog
          </h2>
          <p className="text-slate-600 text-base">
            Search करके अपने मनपसंद medicines और healthcare products खोजें
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center bg-white rounded-2xl shadow-md border border-slate-200/80 p-2 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Medicine या product का नाम खोजें..."
              className="w-full px-3 py-2 bg-transparent text-slate-900 text-base focus:outline-hidden placeholder:text-slate-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-700 bg-slate-100 rounded-lg mr-1 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 max-w-md mx-auto my-8">
            <div className="text-5xl mb-4">🔎</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Product नहीं मिला
            </h3>
            <p className="text-slate-500 text-sm mb-4">
              कृपया कोई अन्य शब्द लिखकर या Category बदल कर Search करें।
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl font-bold text-xs hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => {
              const isInCart = cartItemIds.includes(p.id);
              const isJustAdded = addedAnimationId === p.id;

              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Image/Icon Box */}
                  <div className="h-40 bg-gradient-to-br from-emerald-50 to-teal-50/50 flex items-center justify-center text-6xl relative group-hover:scale-105 transition-transform duration-300">
                    <span>{p.icon || "💊"}</span>
                    {p.rx && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 border border-rose-200 font-extrabold text-[10px] tracking-wider uppercase flex items-center gap-1">
                        <FileText className="w-3 h-3" /> RX REQUIRED
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-1 block">
                        {p.category}
                      </span>
                      <h3 className="font-bold text-slate-900 text-lg leading-snug mb-1">
                        {p.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                        {p.desc}
                      </p>
                    </div>

                    {/* Price & Action */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">Price</span>
                        <span className="text-xl font-extrabold text-slate-900">
                          ₹{Number(p.price).toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAdd(p)}
                        className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                          isJustAdded
                            ? "bg-emerald-700 text-white scale-105"
                            : isInCart
                            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                            : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs shadow-emerald-600/30"
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-4 h-4" /> Added
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" /> Cart
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
