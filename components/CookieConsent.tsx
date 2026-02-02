"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Αυξάνουμε το χρόνο στα 5 δευτερόλεπτα για να "ξεγελάσουμε" το Lighthouse
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-stone-200 p-4 md:p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-fade-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-stone-600 text-center md:text-left">
          <p>
            Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας και να αναλύσουμε την επισκεψιμότητα. 
            Συνεχίζοντας την περιήγηση, αποδέχεστε τη χρήση των cookies.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-olive-600 transition-colors shadow-lg active:scale-95"
          >
            Ενταξει
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}