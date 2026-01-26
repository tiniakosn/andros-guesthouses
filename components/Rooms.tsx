"use client";

import { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

// --- ΔΕΔΟΜΕΝΑ ΔΩΜΑΤΙΩΝ (BILINGUAL VERSION) ---
const roomTypes = [
  {
    id: 1,
    slug: "aegean-studio",
    price: "50€",
    images: ["/images/no5.6.jpg", "/images/no5.1.jpg", "/images/no5.2.jpg", "/images/no5.3.jpg"],
    en: {
      title: "Aegean Studio",
      desc: "1st Floor • Full Kitchen • 2-3 Guests",
      details: "A cozy first-floor sanctuary. Features a fully equipped kitchen, washing machine, and a comfortable layout perfect for couples or small families."
    },
    el: {
      title: "Aegean Studio",
      desc: "1ος Όροφος • Πλήρης Κουζίνα • 2-3 Άτομα",
      details: "Ένα ζεστό καταφύγιο στον πρώτο όροφο. Διαθέτει πλήρως εξοπλισμένη κουζίνα, πλυντήριο ρούχων και άνετη διαρρύθμιση, ιδανική για ζευγάρια ή μικρές οικογένειες."
    }
  },
  {
    id: 2,
    slug: "garden-suite",
    price: "50€",
    images: ["/images/balcony1.jpg", "/images/no2.2.jpg", "/images/no2.3.jpg"],
    en: {
      title: "Garden Suite",
      desc: "Ground Floor • 2 Bedrooms • Private Yard",
      details: "Spacious ground-floor apartment featuring 2 double beds, a large kitchen, and direct access to a cool, private courtyard oasis."
    },
    el: {
      title: "Garden Suite",
      desc: "Ισόγειο • 2 Υπνοδωμάτια • Ιδιωτική Αυλή",
      details: "Ευρύχωρο ισόγειο διαμέρισμα με 2 διπλά κρεβάτια, μεγάλη κουζίνα και άμεση πρόσβαση σε μια δροσερή, ιδιωτική αυλή-όαση."
    }
  },
  {
    id: 3,
    slug: "grand-residence",
    price: "60€",
    images: ["/images/no5.4.jpg", "/images/no5.5.jpg", "/images/no5.7.jpg"],
    en: {
      title: "Grand Residence",
      desc: "2nd Floor • 4+ Guests • Harbor View",
      details: "Our flagship choice. A 55m² residence with separate living room, expansive verandas, and breathtaking panoramic views of Chora harbor."
    },
    el: {
      title: "Grand Residence",
      desc: "2ος Όροφος • 4+ Άτομα • Θέα Λιμάνι",
      details: "Η κορυφαία μας επιλογή. Μια κατοικία 55τ.μ. με ξεχωριστό σαλόνι, μεγάλες βεράντες και εκπληκτική πανοραμική θέα στο λιμάνι της Χώρας."
    }
  }
];

function RoomCardSlider({ room, lang }: { room: typeof roomTypes[0], lang: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = room.images.length > 1;
  const t = lang === "el" ? room.el : room.en;

  const handleNext = (e: MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const handlePrev = (e: MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  return (
    <Link 
      href={`/rooms/${room.slug}`} 
      className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-stone-100 transition-all duration-500 hover:-translate-y-2 relative"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-stone-200 shrink-0">
        <Image
          src={room.images[currentImageIndex]} 
          alt={t.title}
          fill
          className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-sm text-sm font-bold text-stone-900 shadow-md border border-stone-100 z-20 pointer-events-none">
          <span className="text-[10px] uppercase text-stone-400 mr-1">{lang === "el" ? "από" : "from"}</span> {room.price}
        </div>

        {hasMultipleImages && (
          <>
            <button 
              onClick={handlePrev} 
              aria-label="Previous image" // ΑΥΤΟ ΕΔΩ
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 hover:scale-110"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button 
              onClick={handleNext} 
              aria-label="Next image" // ΚΑΙ ΑΥΤΟ ΕΔΩ
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 hover:scale-110"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {room.images.map((_, idx) => (
                <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`} />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <h3 key={lang + room.id} className="text-2xl font-display text-stone-900 group-hover:text-olive-700 transition-colors mb-2">
          {t.title}
        </h3>
        <p key={lang + room.id + "desc"} className="text-olive-600 text-xs font-bold uppercase tracking-wider mb-4">
          {t.desc}
        </p>
        <p key={lang + room.id + "det"} className="text-stone-500 text-sm font-sans leading-relaxed mb-8 flex-1">
          {t.details}
        </p>
        <div className="mt-auto pt-6 border-t border-stone-100">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 group-hover:text-olive-700 transition-all duration-300">
            {lang === "el" ? "ΠΕΡΙΣΣΟΤΕΡΑ" : "VIEW DETAILS"}
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Rooms() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    setLang(document.documentElement.lang || "en");
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  return (
    <section id="rooms" className="py-24 px-6 max-w-7xl mx-auto bg-[#fafaf9]">
      <div className="text-left mb-16 border-b border-stone-200 pb-8">
        <Reveal>
          <span key={lang + "acc"} className="text-olive-700 font-bold tracking-widest text-xs uppercase block mb-3">
            {lang === "el" ? "ΔΙΑΜΟΝΗ" : "ACCOMMODATION"}
          </span>
          <h2 key={lang + "title"} className="text-5xl md:text-6xl font-display text-stone-900">
            {lang === "el" ? "Επιλεγμένες Κατοικίες" : "Curated Residences"}
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {roomTypes.map((room, index) => (
          <div key={room.id} className="h-full">
            <Reveal delay={index * 0.1} width="100%" className="h-full">
              <RoomCardSlider room={room} lang={lang} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}