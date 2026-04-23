"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getT } from "@/translations";

export default function WhatsAppBtn() {
  const [lang, setLang] = useState("en");
  const pathname = usePathname();

  useEffect(() => {
    // Συγχρονισμός γλώσσας
    setLang(document.documentElement.lang || "en");
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  // Δημιουργία δυναμικού μηνύματος ανάλογα με τη σελίδα
  const getWhatsAppLink = () => {
    const phone = "306972127884";
    let message = lang === "el" 
      ? "Γεια σας! Θα ήθελα να μάθω περισσότερα για τα Andros Guesthouses." 
      : "Hello! I would like to inquire about Andros Guesthouses.";

    if (pathname.includes("aegean-studio")) {
      message = lang === "el" ? "Γεια σας! Ενδιαφέρομαι για το Aegean Studio." : "Hi! I'm interested in the Aegean Studio.";
    } else if (pathname.includes("garden-suite")) {
      message = lang === "el" ? "Γεια σας! Ενδιαφέρομαι για τη Garden Suite." : "Hi! I'm interested in the Garden Suite.";
    } else if (pathname.includes("grand-residence")) {
      message = lang === "el" ? "Γεια σας! Ενδιαφέρομαι για το Grand Residence." : "Hi! I'm interested in the Grand Residence.";
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[110] flex items-center justify-center">
      {/* Pulse Effect Animation */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20"></span>

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window !== "undefined" && (window as any).clarity) {
            (window as any).clarity("set", "Target", `WhatsApp_Chat_${pathname}`);
          }
        }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
        
        {/* Bilingual Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-stone-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none border border-stone-100 transform translate-x-2 group-hover:translate-x-0">
          {getT(lang as "el" | "en").whatsapp.chat}
        </span>
      </a>
    </div>
  );
}