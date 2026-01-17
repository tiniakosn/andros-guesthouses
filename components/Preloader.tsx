"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, // Αντί να φεύγει πάνω, κάνει απαλό Fade Out
            transition: { duration: 0.8, ease: "easeInOut" } 
          }} 
          // ΑΛΛΑΓΗ ΦΟΝΤΟΥ: Από μαύρο σε Stone-100 (σπασμένο λευκό) για "Fresh" αίσθηση
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-100 text-stone-900"
        >
          <div className="flex flex-col items-center justify-center relative">
            
            {/* 1. ANDROS - Σκούρο Γκρι, Italiana */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="font-display text-6xl md:text-9xl tracking-tighter leading-none text-stone-900"
              >
                ANDROS
              </motion.h1>
            </div>

            {/* 2. Η ΔΙΑΧΩΡΙΣΤΙΚΗ ΓΡΑΜΜΗ - Το στοιχείο που τα "δένει" */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="w-24 md:w-32 h-[1px] bg-stone-400 my-4 md:my-6 origin-center"
            />

            {/* 3. GUESTHOUSES - Σκούρο Γκρι, Κεφαλαία, Spaced */}
            <div className="overflow-hidden"> 
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
                // Έγινε ίδιο χρώμα με τον τίτλο για να έχει κύρος
                className="block font-sans text-xs md:text-sm font-semibold tracking-[0.4em] md:tracking-[0.6em] text-stone-800 uppercase text-center"
              >
                Guesthouses
              </motion.span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}