"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    setLang(document.documentElement.lang || "en");
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  const content = {
    en: {
      badge: "Guest Favorites",
      title: <>Loved by <br /> <span className="text-olive-700 italic">Travelers.</span></>,
      description: "Real reviews from real guests. See why travelers from Germany, Australia, and around the world rate us as their favorite stay in Andros.",
      bookingScore: "Exceptional",
      googleScore: "Reviews",
      review1: {
        text: `"A Greek oasis... The host, Mr Leonidas, is one of the most hospitable people you will ever meet. There was even a bottle of extra virgin olive oil to use!"`,
        country: "United Kingdom"
      },
      review2: {
        text: `"So clean. Has everything you need including breakfast. Great location! The best so far on our 4 week tour of the Greek Islands."`,
        sub: "5/5 Stars"
      }
    },
    el: {
      badge: "Αγαπημενο των Επισκεπτων",
      title: <>Το αγαπούν οι <br /> <span className="text-olive-700 italic">Ταξιδιώτες.</span></>,
      description: "Πραγματικές κριτικές από πραγματικούς επισκέπτες. Δείτε γιατί ταξιδιώτες από όλο τον κόσμο μας επιλέγουν ως την αγαπημένη τους διαμονή στην Άνδρο.",
      bookingScore: "Εξαιρετικό",
      googleScore: "Κριτικές",
      review1: {
        text: `"Μια ελληνική όαση... Ο οικοδεσπότης, ο κ. Λεωνίδας, είναι από τους πιο φιλόξενους ανθρώπους που θα γνωρίσετε. Υπήρχε μέχρι και μπουκάλι με έξτρα παρθένο ελαιόλαδο!"`,
        country: "Ηνωμένο Βασίλειο"
      },
      review2: {
        text: `"Πεντακάθαρο. Έχει όλα όσα χρειάζεστε, συμπεριλαμβανομένου του πρωινού. Εξαιρετική τοποθεσία! Το καλύτερο μέχρι στιγμής στην 4 εβδομάδων περιοδεία μας."`,
        sub: "5/5 Αστέρια"
      }
    }
  };

  const t = lang === "el" ? content.el : content.en;

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT: TEXT & SCORES --- */}
        <div className="relative z-10 order-2 lg:order-1">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-50 border border-stone-100 mb-6">
              <span className="flex text-[#25D366] text-xs gap-0.5">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </span>
              <span key={lang + "badge"} className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                {t.badge}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 key={lang + "h2"} className="text-5xl md:text-6xl font-display text-stone-900 leading-[1.1] mb-6">
              {t.title}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p key={lang + "p"} className="text-stone-500 text-lg max-w-md leading-relaxed mb-10 font-sans font-light">
              {t.description}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex items-center gap-12 border-t border-stone-100 pt-8">
               <div className="text-left">
                 <p className="text-4xl font-display font-bold text-[#003580]">9.5</p>
                 <p key={lang + "bscore"} className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">Booking.com<br/>{t.bookingScore}</p>
               </div>
               <div className="w-px h-12 bg-stone-200"></div>
               <div className="text-left">
                 <p className="text-4xl font-display font-bold text-[#ea4335]">4.9</p>
                 <p key={lang + "gscore"} className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">Google<br/>{t.googleScore}</p>
               </div>
            </div>
          </Reveal>
        </div>

        {/* --- RIGHT: CARDS --- */}
        <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end order-1 lg:order-2">
          <div className="absolute top-0 right-0 md:right-10 w-64 md:w-80 aspect-[3/4] rounded-sm overflow-hidden z-0 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <Image src="/images/balcony1.jpg" alt="Guest View" fill className="object-cover" />
          </div>

          {/* Booking Card */}
          <Reveal delay={0.2} className="absolute top-10 left-0 md:left-10 z-10 w-full max-w-sm">
            <div className="bg-white p-8 shadow-xl shadow-stone-200/50 rounded-sm border-l-4 border-[#003580] hover:-translate-y-1 transition-transform duration-300">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex flex-col">
                    <span className="text-[#003580] font-bold text-xs uppercase tracking-wider mb-1">Booking.com</span>
                    <div className="flex text-[#003580] text-xs"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                 </div>
                 <span className="text-2xl font-display font-bold text-stone-200">”</span>
               </div>
               <p key={lang + "r1"} className="text-stone-600 text-sm font-light leading-relaxed mb-6 italic">
                 {t.review1.text}
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-[#003580]">S</div>
                 <div>
                   <p className="text-xs font-bold text-stone-900">Stamatios</p>
                   <p key={lang + "c1"} className="text-[10px] text-stone-400 uppercase">{t.review1.country}</p>
                 </div>
               </div>
            </div>
          </Reveal>

          {/* Google Card */}
          <Reveal delay={0.4} className="absolute bottom-0 right-4 md:right-0 z-20 w-full max-w-sm">
            <div className="bg-white p-8 shadow-xl shadow-stone-200/50 rounded-sm border-l-4 border-[#ea4335] hover:-translate-y-1 transition-transform duration-300">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex flex-col">
                    <span className="text-[#ea4335] font-bold text-xs uppercase tracking-wider mb-1">Google</span>
                    <div className="flex text-yellow-400 text-xs gap-0.5"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                 </div>
                 <span className="text-2xl font-display font-bold text-stone-200">”</span>
               </div>
               <p key={lang + "r2"} className="text-stone-600 text-sm font-light leading-relaxed mb-6 italic">
                 {t.review2.text}
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-[#ea4335]">B</div>
                 <div>
                   <p className="text-xs font-bold text-stone-900">Bob Westwood</p>
                   <p key={lang + "c2"} className="text-[10px] text-stone-400 uppercase">{t.review2.sub}</p>
                 </div>
               </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}