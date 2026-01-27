"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useState, useEffect } from "react";

export default function About() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // Ακούμε την αλλαγή γλώσσας από το LanguageSwitcher
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    
    // Αρχικός έλεγχος γλώσσας
    const currentLang = document.documentElement.lang || "en";
    setLang(currentLang);

    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  // Μεταφράσεις κειμένων
  const content = {
    en: {
      tag: "Meet the Hosts",
      title: <>More than just <br/> a place to stay.</>,
      p1: <>I am <strong className="text-stone-900 font-bold">Leonidas</strong>, the proud owner of this family gem in the heart of Chora. Along with <strong className="text-stone-900 font-bold">Eva</strong> and <strong className="text-stone-900 font-bold">Nikos</strong>, our passion stems from a deep love for sharing the authentic beauty of Andros.</>,
      quote: <>"For us, <span className="text-olive-700 font-medium">Philoxenia</span> is not just a word. It is the ancient Greek art of making a stranger feel like family."</>,
      p2: <>When I’m not ensuring your stay is perfect, you’ll likely find me exploring the island’s stunning natural trails or walking our dog, <strong>Max</strong>.</>,
      p3: "We look forward to welcoming you to our guesthouses and helping you create unforgettable memories in the Aegean!",
      signature: "Leonidas & Family",
      signatureSub: "Your Local Hosts",
      reviews: <>Booking.com <br/> Reviews</>
    },
    el: {
      tag: "Γνωριστε τους Οικοδεσποτες",
      title: <>Περισσότερο από <br/> ένα απλό κατάλυμα.</>,
      p1: <>Είμαι ο <strong className="text-stone-900 font-bold">Λεωνίδας</strong>, ο περήφανος ιδιοκτήτης αυτού του οικογενειακού θησαυρού στην καρδιά της Χώρας. Μαζί με την <strong className="text-stone-900 font-bold">Μαρκέλλα</strong> , την <strong className="text-stone-900 font-bold">Εύα</strong> και τον <strong className="text-stone-900 font-bold">Νίκο</strong>, το πάθος μας πηγάζει από την αγάπη μας να μοιραζόμαστε την αυθεντική ομορφιά της Άνδρου.</>,
      quote: <>"Για εμάς, η <span className="text-olive-700 font-medium">Φιλοξενία</span> δεν είναι απλά μια λέξη. Είναι η αρχαία ελληνική τέχνη του να κάνεις έναν ξένο να νιώθει οικογένεια."</>,
      p2: <>Όταν δεν φροντίζω για την τέλεια διαμονή σας, πιθανότατα θα με βρείτε να εξερευνώ τα μονοπάτια του νησιού ή να περπατάω τον σκύλο μας, τον <strong>Max</strong>.</>,
      p3: "Ανυπομονούμε να σας καλωσορίσουμε στους ξενώνες μας και να σας βοηθήσουμε να δημιουργήσετε αξέχαστες αναμνήσεις στο Αιγαίο!",
      signature: "Λεωνίδας & Οικογένεια",
      signatureSub: "Οι Οικοδεσπότες σας",
      reviews: <>Κριτικές <br/> Booking.com</>
    }
  };

  const t = lang === "el" ? content.el : content.en;

  return (
    <section className="py-24 md:py-32 overflow-hidden relative bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* --- LEFT: IMAGE & BADGE --- */}
          <div className="relative order-2 lg:order-1">
            <Reveal width="100%">
              <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer">
                <Image
                  src="/hero3.jpg"
                  alt="Leonidas and family"
                  fill
                  loading="eager"
                  priority={true} 
                  quality={50}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>
            </Reveal>
            
            {/* Floating Badge - Review Score */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 z-10">
              <Reveal delay={0.4}>
                <div className="bg-white p-6 md:p-8 shadow-xl flex flex-col items-center justify-center gap-1 rounded-full aspect-square border-4 border-stone-100 hover:scale-105 transition-transform duration-300">
                  <span className="font-display text-5xl md:text-6xl text-olive-600 leading-none font-bold">9.5</span>
                  <span key={lang + "-rev"} className="font-sans text-[10px] font-bold tracking-widest uppercase text-center text-stone-400">
                    {t.reviews}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* --- RIGHT: TEXT (STORY) --- */}
          <div className="space-y-8 md:pl-10 order-1 lg:order-2">
            <Reveal>
               <span key={lang + "-tag"} className="text-olive-600 font-sans text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3">
                <span className="w-10 h-[2px] bg-olive-600"></span>
                {t.tag}
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 key={lang + "-title"} className="text-4xl md:text-6xl font-display text-stone-900 leading-[1.1] pb-2">
                {t.title}
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6 text-stone-600 font-sans text-lg leading-relaxed font-light">
                <p key={lang + "-p1"}>{t.p1}</p>
                
                <div key={lang + "-quote"} className="pl-6 border-l-2 border-olive-300 italic text-stone-500 my-6">
                  {t.quote}
                </div>

                <p key={lang + "-p2"}>{t.p2}</p>
                <p key={lang + "-p3"}>{t.p3}</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-8 flex items-center gap-6">
                 <div>
                    <p key={lang + "-sig"} className="font-handwriting text-3xl text-stone-900">{t.signature}</p>
                    <span key={lang + "-sigsub"} className="text-[10px] font-sans font-bold text-stone-400 tracking-widest uppercase mt-1 block">
                      {t.signatureSub}
                    </span>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}