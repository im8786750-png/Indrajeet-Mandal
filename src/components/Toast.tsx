import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ToastProps {
  message: string | null;
  type?: "success" | "info" | "error";
}

export const Toast: React.FC<ToastProps> = ({ message, type = "success" }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/95 text-white shadow-2xl backdrop-blur-md transition-all duration-300 border border-slate-700/50 text-sm font-medium animate-bounce-short">
      {type === "error" ? (
        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
      ) : (
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      )}
      <span>{message}</span>
    </div>
  );
};
