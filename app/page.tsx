"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Rooms from "@/components/Rooms"; 
import Amenities from "@/components/Amenities";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstaFeed from "@/components/InstaFeed";
import Testimonials from "@/components/Testimonials";
import LocalInsider from "@/components/LocalInsider";
import { track } from "@vercel/analytics";

export default function Home() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // Ακούμε το "σήμα" αλλαγής γλώσσας
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    
    // Αρχικός έλεγχος
    const currentLang = document.documentElement.lang || "en";
    setLang(currentLang);

    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  // Περιεχόμενο Hero Section
  const heroContent = {
    en: {
      welcome: "Welcome to Chora",
      title: "Andros Guesthouses",
      subtitle: "Authentic Hospitality. Endless Blue. Your private stone sanctuary in the Aegean.",
      viewRooms: "View Rooms",
      experience: "The Experience"
    },
    el: {
      welcome: "Καλώς ήρθατε στη Χώρα",
      title: "Andros Guesthouses",
      subtitle: "Αυθεντική Φιλοξενία. Απέραντο Γαλάζιο. Το ιδιωτικό σας πέτρινο καταφύγιο στο Αιγαίο.",
      viewRooms: "Δείτε τα Δωμάτια",
      experience: "Η Εμπειρία"
    }
  };

  const t = lang === "el" ? heroContent.el : heroContent.en;

  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Navbar />
      
      {/* HERO SECTION */}
      <div className="relative h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
        {/* ΑΦΑΙΡΕΣΗ ΤΟΥ motion.div ΓΥΡΩ ΑΠΟ ΤΗΝ ΕΙΚΟΝΑ */}
          <Image
            src="/images/no5.5.webp"
            alt="Andros Guesthouses View"
            fill
            className="object-cover object-top"
            priority
            fetchPriority="high"
            quality={80} // Κατέβασέ το λίγο από 85 στο 80 για να κερδίσεις KB
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

      <div className="relative z-10 max-w-5xl text-center space-y-8 mt-10">
        <div className="flex justify-center">
          <span className="inline-block text-white/95 font-sans font-bold tracking-[0.3em] text-xs md:text-sm uppercase drop-shadow-md mb-2 border-b border-white/30 pb-2">
            {t.welcome}
          </span>
        </div>
    
        <div className="flex justify-center">
          {/* ΚΑΘΑΡΟ H1 ΧΩΡΙΣ ΚΑΝΕΝΑΝ MOTION WRAPPER */}
          <h1 className="text-5xl md:text-8xl font-display text-white tracking-tighter leading-none shadow-md shadow-black">
            Andros <br className="md:hidden" /> Guesthouses
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="text-lg md:text-2xl text-stone-100 font-sans font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg text-shadow-sm">
            {t.subtitle}
          </p>
        </div>
          
          <div className="flex justify-center pt-8">
            
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <a 
                  href="#rooms" 
                  onClick={() => track('Hero_ViewRooms_Click', { language: lang })}
                  className="px-10 py-4 bg-white text-stone-900 rounded-full hover:bg-olive-700 hover:text-white transition duration-300 shadow-2xl font-sans text-xs font-bold tracking-[0.15em] uppercase hover:-translate-y-1"
                >
                  {t.viewRooms}
                </a>
                <a 
                  href="/experience" 
                  onClick={() => track('Hero_Experience_Click', { language: lang })}
                  className="px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition duration-300 backdrop-blur-sm bg-white/10 font-sans text-xs font-bold tracking-[0.15em] uppercase"
                >
                  {t.experience}
                </a>
              </div>
            
          </div>
        </div>
        
        <div className="absolute bottom-10 z-10 animate-bounce text-white/80">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
      </div>
      </div>

      {/* --- SECTIONS --- */}
      {/* Σημείωση: Πρέπει να περάσεις το lang prop στα παρακάτω components αν θέλεις να μεταφράζονται και αυτά εσωτερικά */}
      <section className="bg-stone-50 relative z-20">
        <About />
      </section>

      <section className="bg-white py-10 relative z-20">
        <Rooms />
      </section>



      <section className="bg-stone-50 relative z-20">
        <Amenities />
      </section>

      <section className="bg-white relative z-20">
        <LocalInsider lang={lang} /> {/* <--- Πέρνα το lang εδώ αν χρειαστεί */}
      </section>
      {/* ------------------------- */}
    
      <Testimonials />
      
      <section className="relative z-20">
        <InstaFeed />
      </section>
      
    </main>
  );
}