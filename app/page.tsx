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
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/no5.5.webp"
              alt="Andros Guesthouses View"
              fill
              className="object-cover object-top"
              priority
              quality={65}
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl text-center space-y-8 mt-10">
          <div className="flex justify-center">
            <Reveal width="100%">
              <span key={lang + "-welcome"} className="inline-block text-white/95 font-sans font-bold tracking-[0.3em] text-xs md:text-sm uppercase drop-shadow-md mb-2 border-b border-white/30 pb-2">
                {t.welcome}
              </span>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal width="100%" delay={0.2}>
              <h1 key={lang + "-title"} className="text-5xl md:text-8xl font-display text-white tracking-tighter leading-none drop-shadow-2xl shadow-black">
                {lang === "en" ? (
                  <>Andros <br className="md:hidden" /> Guesthouses</>
                ) : (
                  <>Andros <br className="md:hidden" /> Guesthouses</>
                )}
              </h1>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal width="100%" delay={0.4}>
              <p key={lang + "-sub"} className="text-lg md:text-2xl text-stone-100 font-sans font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg text-shadow-sm">
                {t.subtitle}
              </p>
            </Reveal>
          </div>
          
          <div className="flex justify-center pt-8">
            <Reveal width="100%" delay={0.6}>
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <a href="#rooms" className="px-10 py-4 bg-white text-stone-900 rounded-full hover:bg-olive-700 hover:text-white transition duration-300 shadow-2xl font-sans text-xs font-bold tracking-[0.15em] uppercase hover:-translate-y-1">
                  {t.viewRooms}
                </a>
                <a href="/experience" className="px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition duration-300 backdrop-blur-sm bg-white/10 font-sans text-xs font-bold tracking-[0.15em] uppercase">
                  {t.experience}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 z-10 animate-bounce text-white/80"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </motion.div>
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