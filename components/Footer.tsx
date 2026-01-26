"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    setLang(document.documentElement.lang || "en");
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  const content = {
    en: {
      hero: <>Your next escape <br/> starts here.</>,
      text: "Book directly through our website for the best rates and exclusive benefits. Experience the authentic hospitality of Andros.",
      bookNow: "Book Now",
      explore: "Explore",
      home: "Home",
      rooms: "Rooms",
      experience: "Experience",
      contact: "Contact",
      addressLabel: "Address",
      address: "Neimporio, Chora Andros",
      country: "84500, Cyclades, Greece",
      touch: "Get in Touch",
      rights: "All rights reserved.",
      builtBy: "Handcrafted by"
    },
    el: {
      hero: <>Η επόμενη απόδρασή σας <br/> ξεκινά εδώ.</>,
      text: "Κάντε κράτηση απευθείας από την ιστοσελίδα μας για τις καλύτερες τιμές και αποκλειστικά προνόμια. Ζήστε την αυθεντική φιλοξενία της Άνδρου.",
      bookNow: "Κρατηση Τωρα",
      explore: "Πλοηγηση",
      home: "Αρχική",
      rooms: "Δωμάτια",
      experience: "Εμπειρία",
      contact: "Επικοινωνία",
      addressLabel: "Διεύθυνση",
      address: "Νειμποριό, Χώρα Άνδρου",
      country: "84500, Κυκλάδες, Ελλάδα",
      touch: "Επικοινωνία",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      builtBy: "Handcrafted by"
    }
  };

  const t = lang === "el" ? content.el : content.en;

  return (
    <footer className="relative bg-stone-950 text-white pt-20 pb-10 overflow-hidden font-sans">
      
      {/* --- BACKGROUND TEXT "ANDROS" --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[15vw] md:text-[12vw] font-display font-bold text-olive-900/20 tracking-tighter leading-none whitespace-nowrap opacity-30 mix-blend-overlay">
          ANDROS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-16">
          
          {/* CTA COLUMN */}
          <div className="md:col-span-2 space-y-6">
            <h2 key={lang + "f-h2"} className="text-3xl md:text-4xl font-display leading-tight text-olive-300/90 drop-shadow-sm">
              {t.hero}
            </h2>
            <p key={lang + "f-p"} className="text-stone-400 text-sm max-w-md leading-relaxed font-light">
              {t.text}
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-olive-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-olive-700 transition-all duration-300 rounded-sm shadow-lg hover:shadow-olive-900/50 hover:-translate-y-1"
              >
                {t.bookNow}
              </Link>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-6">
            <h3 key={lang + "f-ex"} className="text-xs font-bold text-olive-500 uppercase tracking-widest">{t.explore}</h3>
            <ul className="space-y-4 font-display text-lg text-stone-200">
              <li><Link href="/" className="hover:text-olive-400 transition-colors">{t.home}</Link></li>
              <li><Link href="/rooms" className="hover:text-olive-400 transition-colors">{t.rooms}</Link></li>
              <li><Link href="/experience" className="hover:text-olive-400 transition-colors">{t.experience}</Link></li>
              <li><Link href="/contact" className="hover:text-olive-400 transition-colors">{t.contact}</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <h3 key={lang + "f-co"} className="text-xs font-bold text-olive-500 uppercase tracking-widest">{t.contact}</h3>
            <div className="space-y-4 text-sm text-stone-300 font-light">
              <div>
                <p key={lang + "f-ad"} className="text-white mb-1 font-medium">{t.addressLabel}</p>
                <p>{t.address}</p>
                <p>{t.country}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p key={lang + "f-gt"} className="text-white mb-1 font-medium">{t.touch}</p>
                <a href="tel:+306936934390" className="block hover:text-olive-400 transition-colors">+30 693 693 4390</a>
                <a href="mailto:androsguesthouses@gmail.com" className="block hover:text-olive-400 transition-colors">androsguesthouses@gmail.com</a>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com/..." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-xs text-stone-200 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all" // ΑΛΛΑΓΗ ΣΕ text-stone-200
                aria-label="Visit our Facebook page"
              >
                FB
              </a>
              <a 
                href="https://www.instagram.com/..." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-xs text-stone-200 hover:bg-[#C13584] hover:border-[#C13584] hover:text-white transition-all" // ΑΛΛΑΓΗ ΣΕ text-stone-200
                aria-label="Visit our Instagram profile"
              >
                IG
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-stone-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-500 uppercase tracking-wider">
          <p key={lang + "f-rights"}>© {new Date().getFullYear()} Andros Guesthouses. {t.rights}</p>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0 items-center">
             <span className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
                {t.builtBy} <span className="text-stone-300 font-bold ml-1">Nikos Tiniakos</span>
             </span>
          </div>
        </div>

      </div>
    </footer>
  );
}