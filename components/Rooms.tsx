"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const roomTypes = [
  {
    id: 1,
    slug: "aegean-studio",
    price: "50",
    images: ["/images/no5.6.webp", "/images/no5.1.webp", "/images/no5.2.webp", "/images/no5.3.webp"],
    en: {
      title: "Aegean Studio",
      desc: "1st Floor • Full Kitchen • 2-3 Guests",
      details: "A cozy first-floor sanctuary. Features a fully equipped kitchen and a comfortable layout perfect for couples."
    },
    el: {
      title: "Aegean Studio",
      desc: "1ος Όροφος • Πλήρης Κουζίνα • 2-3 Άτομα",
      details: "Ένα ζεστό καταφύγιο στον πρώτο όροφο. Διαθέτει πλήρως εξοπλισμένη κουζίνα και άνετη διαρρύθμιση."
    }
  },
  {
    id: 2,
    slug: "garden-suite",
    price: "50",
    images: ["/images/balcony1.webp", "/images/no2.2.webp", "/images/no2.3.webp"],
    en: {
      title: "Garden Suite",
      desc: "Ground Floor • 2 Bedrooms • Private Yard",
      details: "Spacious ground-floor apartment featuring 2 double beds and direct access to a cool, private courtyard."
    },
    el: {
      title: "Garden Suite",
      desc: "Ισόγειο • 2 Υπνοδωμάτια • Ιδιωτική Αυλή",
      details: "Ευρύχωρο ισόγειο διαμέρισμα με 2 διπλά κρεβάτια και άμεση πρόσβαση σε μια δροσερή, ιδιωτική αυλή."
    }
  },
  {
    id: 3,
    slug: "grand-residence",
    price: "60",
    images: ["/images/no5.4.webp", "/images/no5.5.webp", "/images/no5.7.webp"],
    en: {
      title: "Grand Residence",
      desc: "2nd Floor • 4+ Guests • Harbor View",
      details: "Our flagship choice. A 55m² residence with expansive verandas and breathtaking panoramic views of Chora."
    },
    el: {
      title: "Grand Residence",
      desc: "2ος Όροφος • 4+ Άτομα • Θέα Λιμάνι",
      details: "Η κορυφαία μας επιλογή. Μια κατοικία 55τ.μ. με μεγάλες βεράντες και εκπληκτική πανοραμική θέα."
    }
  }
];

function RoomCardSlider({ room, lang }: { room: typeof roomTypes[0], lang: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = lang === "el" ? room.el : room.en;

  const handleNext = (e: MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  // SRE: Schema.org Injection for Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "name": t.title,
    "description": t.details,
    "image": `https://www.androsguesthouses.gr${room.images[0]}`,
    "offers": {
      "@type": "Offer",
      "price": room.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-stone-100 transition-all duration-500 hover:-translate-y-2 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link 
        href={`/rooms/${room.slug}${lang === "el" ? "" : "?lang=en"}`} 
        className="absolute inset-0 z-40" 
      />

      <div className="relative aspect-video w-full overflow-hidden bg-stone-200">
        <Image
          src={room.images[currentImageIndex]} 
          alt={t.title}
          fill
          className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-stone-900 z-20 pointer-events-none">
          {lang === "el" ? "από" : "from"} {room.price}€
        </div>
        {room.images.length > 1 && (
          <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all z-50">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-display text-stone-900 group-hover:text-olive-700 mb-2">{t.title}</h3>
        <p className="text-olive-600 text-[10px] font-bold uppercase tracking-widest mb-4">{t.desc}</p>
        <p className="text-stone-600 text-sm leading-relaxed flex-1">{t.details}</p>
        <div className="mt-6 pt-6 border-t border-stone-100">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-900 group-hover:text-olive-700 inline-flex items-center gap-2">
            {lang === "el" ? "ΠΕΡΙΣΣΟΤΕΡΑ" : "VIEW DETAILS"} →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Rooms({ lang = "en" }: { lang?: string }) {
  return (
    <section id="rooms" className="w-full bg-white border-b border-stone-100 overflow-hidden"> 
      <div className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="text-left mb-16 border-b border-stone-200 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <span className="text-olive-700 font-bold tracking-widest text-xs uppercase block mb-3">
              {lang === "el" ? "ΔΙΑΜΟΝΗ" : "ACCOMMODATION"}
            </span>
            <h2 className="text-5xl md:text-6xl font-display text-stone-900">
              {lang === "el" ? "Επιλεγμένες Κατοικίες" : "Curated Residences"}
            </h2>
          </Reveal>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {roomTypes.map((room, index) => (
            <RoomCardSlider key={room.id} room={room} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}