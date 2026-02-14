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
      
      {/* --- BACKGROUND TEXT "ANDROS" ΕΠΑΝΑΦΟΡΑ --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[15vw] md:text-[12vw] font-display font-bold text-white/[0.03] tracking-tighter leading-none whitespace-nowrap">
          ANDROS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-16">
    
          {/* CTA COLUMN */}
          <div className="md:col-span-2 space-y-6">
            <h2 key={lang + "f-h2"} className="text-3xl md:text-4xl font-display leading-tight text-white">
              {t.hero}
            </h2>
            <p key={lang + "f-p"} className="text-stone-300 text-sm max-w-md leading-relaxed font-light">
              {t.text}
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-olive-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-olive-700 transition-all duration-300 rounded-sm shadow-lg"
              >
                {t.bookNow}
              </Link>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-lime-400 uppercase tracking-widest">{t.explore}</h3>
            <ul className="space-y-4 font-display text-lg text-white">
              <li><Link href="/" className="hover:text-olive-400 transition-colors">{t.home}</Link></li>
              <li><Link href="/#rooms" className="hover:text-olive-400 transition-colors">{t.rooms}</Link></li>
              <li><Link href="/experience" className="hover:text-olive-400 transition-colors">{t.experience}</Link></li>
              <li><Link href="/contact" className="hover:text-olive-400 transition-colors">{t.contact}</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO - ΕΔΩ ΕΙΝΑΙ ΤΟ ΣΦΑΛΜΑ CONTRAST */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-lime-400 uppercase tracking-widest">{t.contact}</h3>
            <div className="space-y-4 text-sm text-stone-200 font-light">
              <div>
                <p className="text-white mb-1 font-medium">{t.addressLabel}</p>
                {/* Χρησιμοποιούμε text-stone-100 για να είναι πολύ κοντά στο λευκό */}
                <p className="text-stone-100">{t.address}</p>
                <p className="text-stone-100">{t.country}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white mb-1 font-medium">{t.touch}</p>
                <a href="tel:+306936934390" className="block text-stone-100 hover:text-lime-400 transition-colors">+30 693 693 4390</a>
                <a href="mailto:androsguesthouses@gmail.com" className="block text-stone-100 hover:text-lime-400 transition-colors">androsguesthouses@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR - COPYRIGHTS */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} ANDROS GUESTHOUSES. {t.rights}</p>
          <div className="mt-4 md:mt-0">
            <span className="text-stone-400">HANDCRAFTED BY <span className="text-white font-bold ml-1">NIKOS TINIAKOS</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}