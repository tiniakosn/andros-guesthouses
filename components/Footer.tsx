"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Τα σωστά links για να δουλεύει η πλοήγηση
  const footerLinks = [
    { name: 'Αρχική', link: '/' },
    { name: 'Δωμάτια', link: '/rooms' },
    { name: 'Η Εμπειρία', link: '/experience' },
    { name: 'Επικοινωνία', link: '/contact' }
  ];

  return (
    <footer className="bg-[#1c1917] text-[#e7e5e4] pt-24 pb-6 overflow-hidden relative">
      
      {/* --- TOP SECTION: CTA & LINKS --- */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* 1. CTA (Call to Action) */}
          <div className="md:col-span-5 space-y-6">
            <Reveal>
              <h3 className="font-display text-4xl md:text-5xl leading-tight">
                Έτοιμοι για την <br/> <span className="text-olive-400">επόμενη απόδραση;</span>
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-sans text-stone-400 font-light max-w-sm leading-relaxed">
                Κάντε κράτηση απευθείας από το site μας για τις καλύτερες τιμές και προνόμια κατά την άφιξη.
              </p>
            </Reveal>
            
            {/* ΔΙΟΡΘΩΣΗ: Το Button έγινε Link και οδηγεί στο /contact */}
            <Reveal delay={0.4}>
              <Link 
                href="/contact" 
                className="inline-block mt-4 px-8 py-3 bg-stone-100 text-stone-900 rounded-sm font-sans text-xs font-bold uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-colors duration-300"
              >
                Book Your Stay
              </Link>
            </Reveal>
          </div>

          {/* 2. NAVIGATION LINKS (Τώρα δουλεύουν) */}
          <div className="md:col-span-3 md:col-start-7">
            <Reveal delay={0.2}>
              <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-500 mb-6">
                Explore
              </h4>
            </Reveal>
            <ul className="space-y-4 font-sans text-sm font-medium tracking-wide">
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <Reveal delay={0.2 + (index * 0.1)}>
                    <Link href={item.link} className="hover:text-olive-400 transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-[1px] bg-olive-400 transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT & SOCIAL */}
          <div className="md:col-span-3">
            <Reveal delay={0.3}>
              <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-500 mb-6">
                Contact
              </h4>
            </Reveal>
            <div className="space-y-6 font-sans text-sm font-light text-stone-300">
              <Reveal delay={0.4}>
                <div>
                  <p className="block mb-1 text-stone-500 text-xs uppercase font-bold">Διευθυνση</p>
                  <p>Χώρα Άνδρου, Κυκλάδες</p>
                  <p>84500, Ελλάδα</p>
                </div>
              </Reveal>
              
              <Reveal delay={0.5}>
                <div>
                  <p className="block mb-1 text-stone-500 text-xs uppercase font-bold">Επικοινωνια</p>
                  <a href="tel:+302282000000" className="block hover:text-olive-400 transition-colors">+30 22820 00000</a>
                  <a href="mailto:info@androsguesthouses.gr" className="block hover:text-olive-400 transition-colors">info@androsguesthouses.gr</a>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="flex gap-4 pt-2">
                  <a href="#" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-olive-400 hover:text-olive-400 transition-all">
                    Instagram
                  </a>
                  <a href="#" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-olive-400 hover:text-olive-400 transition-all">
                    Facebook
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>

      {/* --- BIG TYPOGRAPHY FOOTER --- */}
      <div className="border-t border-stone-800 pt-10">
        <div className="w-full overflow-hidden flex justify-center items-end opacity-20 hover:opacity-40 transition-opacity duration-700 select-none">
          <h1 className="font-display text-[18vw] leading-[0.8] text-stone-500 tracking-tighter">
            ANDROS
          </h1>
        </div>
        
        {/* Copyright Line */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-600 font-sans uppercase tracking-widest py-6">
          <span>© {currentYear} Andros Guesthouses.</span>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="#" className="hover:text-stone-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-stone-400">Terms & Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}