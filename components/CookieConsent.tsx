"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Ελέγχουμε αν ο χρήστης έχει ήδη αποδεχτεί τα cookies
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Αν όχι, εμφανίζουμε την μπάρα μετά από 2 δευτερόλεπτα
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Αποθηκεύουμε την επιλογή του χρήστη για να μην τον ξαναρωτήσουμε
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-stone-200 p-4 md:p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
        >
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
                className="px-6 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#65a30d] transition-colors shadow-lg"
              >
                Ενταξει
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}