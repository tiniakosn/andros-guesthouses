"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Rooms from "@/components/Rooms"; 
import Amenities from "@/components/Amenities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import LocalInsider from "@/components/LocalInsider";
import { track } from "@vercel/analytics";
// Αυτά τα κάνεις DYNAMIC (φορτώνουν μόνο όταν χρειαστεί)
const Testimonials = dynamic(() => import("@/components/Testimonials"), { 
  ssr: false,
  loading: () => <div className="h-20" /> // Προαιρετικό placeholder
});

const InstaFeed = dynamic(() => import("@/components/InstaFeed"), { 
  ssr: false 
});


export default function Home() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // Ακούμε το "σήμα" αλλαγής γλώσσας
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    
    // Αρχικός έλεγχος
    const currentLang = typeof document !== 'undefined' ? document.documentElement.lang || "en" : "en";
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
    <main className="min-h-screen bg-[#fafaf9] overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION */}
      <div className="relative h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          
          <Image
            src="/images/no5.5.webp"
            alt="Andros Guesthouses View"
            fill
            className="object-cover object-top"
            priority
            fetchPriority="high" 
            quality={70} // Μειώνουμε λίγο τα KB
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // Οδηγία για το σωστό μέγεθος αρχείου
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl text-center space-y-8 mt-10">
          <div className="flex justify-center">
            <span className="inline-block text-white/95 font-sans font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-2 border-b border-white/30 pb-2">
              {t.welcome}
            </span>
          </div>

          <div className="flex justify-center overflow-hidden">
            <h1 className="text-5xl md:text-8xl font-display text-white tracking-tighter leading-none">
              Andros <br className="md:hidden" /> Guesthouses
            </h1>
          </div>

          <div className="flex justify-center">
            <p className="text-lg md:text-2xl text-white font-sans font-medium max-w-2xl mx-auto leading-relaxed">
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
  
                className="px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition duration-300 bg-white/20 font-sans text-xs font-bold tracking-[0.15em] uppercase"
              >
                {t.experience}
              </a>
            </div>
          </div>
        </div> {/* Τέλος του Content Container */}
        
        {/* CSS Animations - Βελτιστοποιημένα για 100/100 Score */}
        <style jsx>{`
          @keyframes entrance {
            0% { transform: translateY(10px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-entrance {
            animation: entrance 0.3s ease-out forwards;
            will-change: transform, opacity; /* Βοηθάει την GPU */
          }
          @keyframes fadein {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadein {
            animation: fadein 0.4s ease-out 0.1s forwards;
            opacity: 0;
          }
        `}</style>
        
        {/* Scroll Arrow */}
        <div className="absolute bottom-10 z-10 text-white/40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </div> {/* Τέλος του Hero Section */}

      {/* --- SECTIONS --- */}
      {/* Σημείωση: Πρέπει να περάσεις το lang prop στα παρακάτω components αν θέλεις να μεταφράζονται και αυτά εσωτερικά */}
      {/* --- SECTIONS --- */}
      {/* Ενοποιημένη ροή χωρίς περιττά ενδιάμεσα tags */}
      
      <About />
      
      {/* Το Rooms διαχειρίζεται το bg-[#fafaf9] εσωτερικά όπως είπαμε */}
      <Rooms />

      <Amenities />

      <LocalInsider lang={lang} />
    
      <Testimonials />
      
      <InstaFeed />
      
    </main>
  );
}