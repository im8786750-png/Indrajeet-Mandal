import { useState, useEffect } from "react";
import { Product, CartItem, Order } from "./types";
import { defaultProducts } from "./data/defaultProducts";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { MedicineStore } from "./components/MedicineStore";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { AdminPanel } from "./components/AdminPanel";
import { Footer } from "./components/Footer";
import { CartModal } from "./components/CartModal";
import { CheckoutModal } from "./components/CheckoutModal";
import { LoginModal } from "./components/LoginModal";
import { Toast } from "./components/Toast";

export default function App() {
  // State Initialization
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem("ymz_products");
      return saved ? JSON.parse(saved) : defaultProducts;
    } catch {
      return defaultProducts;
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("ymz_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem("ymz_orders");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return localStorage.getItem("ymz_admin") === "true";
    } catch {
      return false;
    }
  });

  // Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2500);
  };

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem("ymz_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("ymz_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("ymz_orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("ymz_admin", isAdmin ? "true" : "false");
  }, [isAdmin]);

  // Total cart items count
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartItemIds = cart.map((item) => item.id);

  // Cart Actions
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { id: product.id, qty: 1 }];
    });
    showToast(`${product.name} cart में add हो गया`);
  };

  const handleChangeQty = (id: number, change: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + change;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = (newOrder: Order) => {
    setOrders((prev) => [...prev, newOrder]);
    setCart([]);
    showToast("Order WhatsApp के लिए तैयार है!");
  };

  // Admin Actions
  const handleAddProduct = (newProdData: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...newProdData,
      id: Date.now(),
    };
    setProducts((prev) => [...prev, newProduct]);
    showToast("Product successfully add हो गया");
  };

  const handleDeleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast("Product delete हो गया");
  };

  const handleDeleteOrder = (id: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
    showToast("Order record removed");
  };

  const handleLogoutAdmin = () => {
    setIsAdmin(false);
    showToast("Admin logout हो गया");
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    showToast("Admin login successful");
    setTimeout(() => {
      scrollToSection("adminPanel");
    }, 300);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* Top Header */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        isAdmin={isAdmin}
        onLogoutAdmin={handleLogoutAdmin}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onBrowseMedicines={() => scrollToSection("medicines")} />
        <Features />
        <MedicineStore
          products={products}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />
        <About />
        <Contact />

        {/* Admin Panel (Visible if logged in) */}
        {isAdmin && (
          <AdminPanel
            products={products}
            orders={orders}
            cartCount={cartCount}
            onAddProduct={handleAddProduct}
            onDeleteProduct={handleDeleteProduct}
            onDeleteOrder={handleDeleteOrder}
            onLogoutAdmin={handleLogoutAdmin}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onScrollToSection={scrollToSection} />

      {/* Modals */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        products={products}
        onChangeQty={handleChangeQty}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        products={products}
        onOrderComplete={handleOrderComplete}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Toast Banner */}
      <Toast message={toastMessage} />
    </div>
  );
}
