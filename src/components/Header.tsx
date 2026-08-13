import React from "react";
import { Pill, ShoppingBag, User, Lock, LogOut } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenLogin: () => void;
  isAdmin: boolean;
  onLogoutAdmin: () => void;
  onScrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenLogin,
  isAdmin,
  onLogoutAdmin,
  onScrollToSection,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onScrollToSection("home");
          }}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
            <Pill className="w-6 h-6" />
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-lg sm:text-xl leading-tight">
              Your <span className="text-emerald-600">Medicine Zone</span>
            </div>
            <div className="text-[10px] font-semibold text-emerald-800 tracking-wider uppercase">
              Sahibnagar Store
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onScrollToSection("home")}
            className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onScrollToSection("medicines")}
            className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            Medicines
          </button>
          <button
            onClick={() => onScrollToSection("about")}
            className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onScrollToSection("contact")}
            className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            Contact
          </button>
          {isAdmin && (
            <button
              onClick={() => onScrollToSection("adminPanel")}
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              Admin Panel
            </button>
          )}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {isAdmin ? (
            <button
              onClick={onLogoutAdmin}
              title="Logout Admin"
              className="p-2.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors border border-rose-200 flex items-center gap-1.5 text-xs font-bold cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              title="Admin / User Login"
              className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-200 flex items-center gap-1.5 text-xs font-bold cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>
          )}

          <button
            onClick={onOpenCart}
            title="Cart"
            className="relative p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-colors flex items-center justify-center cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-slate-900 font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Subnav bar */}
      <div className="flex md:hidden items-center justify-around py-2 px-4 bg-slate-50 border-t border-slate-100 text-xs font-semibold text-slate-600">
        <button onClick={() => onScrollToSection("home")} className="hover:text-emerald-600 py-1">
          Home
        </button>
        <button onClick={() => onScrollToSection("medicines")} className="hover:text-emerald-600 py-1">
          Medicines
        </button>

        <button onClick={() => onScrollToSection("about")} className="hover:text-emerald-600 py-1">
          About
        </button>
        <button onClick={() => onScrollToSection("contact")} className="hover:text-emerald-600 py-1">
          Contact
        </button>
        {isAdmin && (
          <button onClick={() => onScrollToSection("adminPanel")} className="text-emerald-700 font-bold py-1">
            Admin
          </button>
        )}
      </div>
    </header>
  );
};
