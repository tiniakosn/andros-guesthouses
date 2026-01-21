"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBtn() {
  return (
    <a
      // ΑΛΛΑΞΕ ΤΟ ΝΟΥΜΕΡΟ ΜΕ ΤΟ ΔΙΚΟ ΣΟΥ (Χωρίς το +)
      href="https://wa.me/306972127884?text=Γεια σας! Ενδιαφέρομαι για κράτηση στην Άνδρο."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      
      {/* Tooltip που εμφανίζεται στο Hover */}
      <span className="absolute right-full mr-4 bg-white text-stone-900 px-3 py-1 rounded-lg text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Μιλήστε μας!
      </span>
    </a>
  );
}