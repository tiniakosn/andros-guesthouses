"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";

const amenitiesData = [
  {
    en: { title: "High-Speed WiFi", description: "Free, fast, and stable connection in all rooms and common areas." },
    el: { title: "WiFi Υψηλής Ταχύτητας", description: "Δωρεάν, γρήγορη και σταθερή σύνδεση σε όλα τα δωμάτια και τους κοινόχρηστους χώρους." },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    en: { title: "Anatomical Sleep", description: "Memory foam anatomical mattresses, hypoallergenic pillows, and fine linens." },
    el: { title: "Ανατομικός Ύπνος", description: "Ανατομικά στρώματα με τεχνολογία memory foam, υποαλλεργικά μαξιλάρια και λινά σεντόνια." },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
  },
  {
    en: { title: "Private Balcony & View", description: "Private balconies with sea or mountain views and relaxation areas." },
    el: { title: "Ιδιωτικό Μπαλκόνι & Θέα", description: "Ιδιωτικά μπαλκόνια με θέα στη θάλασσα ή το βουνό και χώρος χαλάρωσης." },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    en: { title: "Kitchen & Nespresso", description: "Fully equipped kitchen, refrigerator, and Nespresso machine for your breakfast." },
    el: { title: "Κουζίνα & Nespresso", description: "Πλήρως εξοπλισμένη κουζίνα, ψυγείο και μηχανή Nespresso για το πρωινό σας." },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    en: { title: "Free Parking", description: "Free public parking space next to the property for easy access." },
    el: { title: "Δωρεάν Parking", description: "Δωρεάν δημόσιος χώρος στάθμευσης δίπλα στο κατάλυμα για άνετη πρόσβαση." },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    en: { title: "A/C & Soundproofing", description: "Independently controlled A/C and soundproofing for absolute tranquility." },
    el: { title: "A/C & Ηχομόνωση", description: "Αυτόνομος κλιματισμός ψύξης/θέρμανσης και ηχομόνωση για απόλυτη ησυχία." },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

export default function Amenities() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    setLang(document.documentElement.lang || "en");
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-stone-200 bg-[#fafaf9]">
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <Reveal>
          <span key={lang + "comf"} className="text-olive-700 font-bold tracking-widest text-xs uppercase block mb-3">
            {lang === "el" ? "ΑΝΕΣΗ" : "Comfort"}
          </span>
          <h2 key={lang + "amen"} className="text-4xl md:text-5xl font-display text-stone-900">
            {lang === "el" ? "Παροχές & Υπηρεσίες" : "Amenities & Services"}
          </h2>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {amenitiesData.map((item, index) => {
          const t = lang === "el" ? item.el : item.en;
          return (
            <Reveal key={index + lang} delay={index * 0.1}>
              <div className="flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-olive-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display text-stone-900 mb-2">{t.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed font-sans font-light">
                    {t.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}