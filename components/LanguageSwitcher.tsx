'use client';

import { useState, useEffect } from 'react';

interface LanguageSwitcherProps {
  isDark: boolean; 
}

export default function LanguageSwitcher({ isDark }: LanguageSwitcherProps) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = document.documentElement.lang || 'en';
    setLang(savedLang);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'el' : 'en';
    setLang(nextLang);
    document.documentElement.lang = nextLang;
    window.dispatchEvent(new CustomEvent('langChange', { detail: nextLang }));
  };

  return (
    <button 
      onClick={toggleLanguage}
      // Προσθήκη aria-label για το 100 στο Accessibility
      aria-label={lang === 'en' ? "Αλλαγή γλώσσας στα Ελληνικά" : "Switch to English"}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
        isDark 
          ? "border-stone-300 bg-stone-100 hover:border-stone-500" 
          : "border-white/30 bg-white/10 hover:border-white/60"
      }`}
    >
      <span className={`text-[10px] font-bold tracking-tighter transition-colors ${
        lang === 'el' 
          ? (isDark ? "text-stone-900" : "text-white") 
          // Αύξηση αντίθεσης: stone-400 -> stone-500 και white/40 -> white/70
          : (isDark ? "text-stone-500" : "text-white/70")
      }`}>
        ΕΛ
      </span>
      
      <div className={`w-[1px] h-3 transition-colors ${isDark ? "bg-stone-300" : "bg-white/30"}`}></div>
      
      <span className={`text-[10px] font-bold tracking-tighter transition-colors ${
        lang === 'en' 
          ? (isDark ? "text-stone-900" : "text-white") 
          // Αύξηση αντίθεσης: stone-400 -> stone-500 και white/40 -> white/70
          : (isDark ? "text-stone-500" : "text-white/70")
      }`}>
        EN
      </span>
    </button>
  );
}