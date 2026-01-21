"use client";

import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";

export default function ShareBtn() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleShare = async () => {
    // Ελέγχουμε αν το κινητό υποστηρίζει το "native share" (iPhone/Android menu)
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Andros Guesthouses',
          text: 'Δες αυτό το καταπληκτικό μέρος στην Άνδρο!',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Αν είναι σε υπολογιστή, απλά αντιγράφουμε το Link
      navigator.clipboard.writeText(window.location.href);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9990]"> {/* Λίγο πιο πάνω από το WhatsApp */}
      <button
        onClick={handleShare}
        className="bg-white text-stone-900 p-4 rounded-full shadow-lg border border-stone-200 hover:bg-stone-50 transition-all active:scale-95 group relative"
        aria-label="Share"
      >
        <FaShareAlt className="w-6 h-6" />
        
        {/* Tooltip για Desktop */}
        {showTooltip && (
           <span className="absolute right-full mr-4 bg-stone-900 text-white px-3 py-1 rounded text-xs whitespace-nowrap top-1/2 -translate-y-1/2">
             Το Link αντιγράφηκε!
           </span>
        )}
      </button>
    </div>
  );
}