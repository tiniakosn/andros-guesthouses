"use client";

import Image from "next/image";
import About from "@/components/About";
import Rooms from "@/components/Rooms"; // Αυτό είναι το Component (η μικρή λίστα), όχι η σελίδα
import Amenities from "@/components/Amenities";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* --- HERO SECTION (Η μεγάλη εισαγωγή που έλειπε) --- */}
      <div className="relative h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
        
        {/* Background Image (Ken Burns Effect) */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/hero.jpg"
              alt="Andros Guesthouses View"
              fill
              className="object-cover object-top"
              priority
              quality={100}
            />
          </motion.div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl text-center space-y-6 mt-10">
          
          <div className="flex justify-center">
            <Reveal width="100%">
              <span className="inline-block text-olive-100 font-sans font-bold tracking-[0.3em] text-xs md:text-sm uppercase drop-shadow-md border-b border-olive-200/50 pb-3 mb-2">
                Welcome to Chora
              </span>
            </Reveal>
          </div>

          <div className="flex justify-center">
            <Reveal width="100%" delay={0.4}>
              <h1 className="text-6xl md:text-9xl font-display text-white tracking-tighter leading-none drop-shadow-xl">
                Andros <br className="md:hidden" /> Guesthouses
              </h1>
            </Reveal>
          </div>
          
          <div className="flex justify-center">
            <Reveal width="100%" delay={0.6}>
              <p className="text-lg md:text-2xl text-stone-100 font-sans font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg opacity-90">
                Αυθεντική φιλοξενία. Απέραντο γαλάζιο. <br className="hidden md:block" />
                Η δική σας πέτρινη κατοικία στο Αιγαίο.
              </p>
            </Reveal>
          </div>

          {/* Buttons */}
          <div className="flex justify-center pt-8">
            <Reveal width="100%" delay={0.8}>
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <a href="/contact" className="px-10 py-4 bg-olive-600 text-white rounded-sm hover:bg-olive-700 transition duration-300 shadow-2xl font-sans text-xs font-bold tracking-[0.15em] uppercase hover:-translate-y-1">
                  Κρατηση Τωρα
                </a>
                <a href="/experience" className="px-10 py-4 border border-white text-white rounded-sm hover:bg-white hover:text-stone-900 transition duration-300 backdrop-blur-sm bg-white/5 font-sans text-xs font-bold tracking-[0.15em] uppercase">
                  Η Εμπειρια
                </a>
              </div>
            </Reveal>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 z-10 animate-bounce"
        >
          <div className="w-[1px] h-12 bg-white/60 mx-auto"></div>
          <span className="block text-[10px] text-white/60 mt-2 uppercase tracking-widest font-sans">Scroll</span>
        </motion.div>

      </div>

      {/* --- SECTIONS --- */}
      <section className="bg-stone-50">
        <About />
      </section>

      <section className="bg-white">
        <Rooms />
      </section>

      <section className="bg-stone-50">
        <Amenities />
      </section>

    </main>
  );
}