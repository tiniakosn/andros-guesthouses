"use client";

import { useState, useEffect } from "react";
import { getT } from "@/translations";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // 1. Έλεγχος γλώσσας
    const currentLang = document.documentElement.lang || "en";
    setLang(currentLang);

    // 2. Έλεγχος συγκατάθεσης
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 5000); // Το κρατάμε στα 5δευτ. για το Lighthouse
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  const tr = getT(lang as "el" | "en");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-white border-t border-stone-200 p-4 md:p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] animate-fade-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-stone-600 text-center md:text-left font-sans leading-relaxed">
          <p>{tr.cookie.message}</p>
        </div>
        <div className="flex gap-4 shrink-0">
          <button
            onClick={acceptCookies}
            className="px-8 py-3 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-olive-700 transition-all shadow-md active:scale-90"
          >
            {tr.cookie.accept}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}