'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface LanguageSwitcherProps {
  isDark: boolean; 
}

export default function LanguageSwitcher({ isDark }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Ανίχνευση γλώσσας από το URL Path ή το Query Param
  const isGreekPath = pathname.startsWith('/el');
  const isGreekQuery = searchParams.get('lang') === 'el';
  const currentLang = (isGreekPath || isGreekQuery) ? 'el' : 'en';

  const toggleLanguage = () => {
    const nextLang = currentLang === 'en' ? 'el' : 'en';
    
    let newPath = pathname;

    // ΠΕΡΙΠΤΩΣΗ 1: Είμαστε στο Diary (Path-based /[lang]/diary)
    if (pathname.startsWith('/el/') || pathname.startsWith('/en/')) {
      newPath = pathname.replace(`/${currentLang}/`, `/${nextLang}/`);
    } 
    // ΠΕΡΙΠΤΩΣΗ 2: Είμαστε στην Αρχική ή σελίδες χωρίς [lang] στο path
    else {
      const params = new URLSearchParams(searchParams.toString());
      params.set('lang', nextLang);
      newPath = `${pathname}?${params.toString()}`;
    }

    // Εκτέλεση της αλλαγής
    router.push(newPath);
    
    // Ενημέρωση του document tag για SEO
    document.documentElement.lang = nextLang;
    // Dispatch event για να "ακούσει" ο παλιός κώδικας αν χρειαστεί
    window.dispatchEvent(new CustomEvent('langChange', { detail: nextLang }));
  };

  return (
    <button 
      onClick={toggleLanguage}
      aria-label={currentLang === 'en' ? "Αλλαγή στα Ελληνικά" : "Switch to English"}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
        isDark ? "border-stone-300 bg-stone-100" : "border-white/30 bg-white/10"
      }`}
    >
      <span className={`text-[10px] font-bold ${currentLang === 'el' ? (isDark ? "text-stone-900" : "text-white") : (isDark ? "text-stone-400" : "text-white/40")}`}>
        ΕΛ
      </span>
      <div className={`w-[1px] h-3 ${isDark ? "bg-stone-300" : "bg-white/30"}`}></div>
      <span className={`text-[10px] font-bold ${currentLang === 'en' ? (isDark ? "text-stone-900" : "text-white") : (isDark ? "text-stone-400" : "text-white/40")}`}>
        EN
      </span>
    </button>
  );
}