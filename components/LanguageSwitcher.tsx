'use client';

import { useState, useEffect } from 'react';

interface LanguageSwitcherProps {
  isDark: boolean; // Δέχεται αν το κείμενο πρέπει να είναι μαύρο ή λευκό
}

export default function LanguageSwitcher({ isDark }: LanguageSwitcherProps) {
  const [lang, setLang] = useState('en');

  // Συγχρονισμός με το αρχικό state
  useEffect(() => {
    const savedLang = document.documentElement.lang || 'en';
    setLang(savedLang);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'el' : 'en';
    setLang(nextLang);
    
    // Ενημέρωση του HTML lang attribute για SEO
    document.documentElement.lang = nextLang;
    
    // Εκπομπή event για να το ακούσουν τα άλλα components (Navbar, Hero κλπ)
    window.dispatchEvent(new CustomEvent('langChange', { detail: nextLang }));
  };

  return (
    <button 
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
        isDark 
          ? "border-stone-200 bg-stone-100/50 hover:border-stone-400" 
          : "border-white/20 bg-white/10 hover:border-white/50"
      }`}
    >
      <span className={`text-[10px] font-bold tracking-tighter transition-colors ${
        lang === 'el' 
          ? (isDark ? "text-stone-900" : "text-white") 
          : (isDark ? "text-stone-400" : "text-white/40")
      }`}>
        ΕΛ
      </span>
      
      <div className={`w-[1px] h-3 transition-colors ${isDark ? "bg-stone-300" : "bg-white/20"}`}></div>
      
      <span className={`text-[10px] font-bold tracking-tighter transition-colors ${
        lang === 'en' 
          ? (isDark ? "text-stone-900" : "text-white") 
          : (isDark ? "text-stone-400" : "text-white/40")
      }`}>
        EN
      </span>
    </button>
  );
}