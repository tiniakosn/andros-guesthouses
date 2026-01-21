"use client";

import Image from "next/image";
import About from "@/components/About";
import Rooms from "@/components/Rooms"; 
import Amenities from "@/components/Amenities";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstaFeed from "@/components/InstaFeed"; // <--- Import
import Testimonials from "@/components/Testimonials"; // <--- 1. Import εδώ

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Navbar />
      
      {/* HERO SECTION (Όπως ήταν) */}
      <div className="relative h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/no5.5.jpg"
              alt="Andros Guesthouses View"
              fill
              className="object-cover object-top"
              priority
              quality={100}
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl text-center space-y-8 mt-10">
          <div className="flex justify-center">
            <Reveal width="100%">
              <span className="inline-block text-white/95 font-sans font-bold tracking-[0.3em] text-xs md:text-sm uppercase drop-shadow-md mb-2 border-b border-white/30 pb-2">
                Welcome to Chora
              </span>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal width="100%" delay={0.2}>
              {/* ΑΛΛΑΓΗ: Μικρότερο μέγεθος γραμματοσειράς (5xl/8xl αντί για 6xl/9xl) */}
              <h1 className="text-5xl md:text-8xl font-display text-white tracking-tighter leading-none drop-shadow-2xl shadow-black">
                Andros <br className="md:hidden" /> Guesthouses
              </h1>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal width="100%" delay={0.4}>
              <p className="text-lg md:text-2xl text-stone-100 font-sans font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg text-shadow-sm">
                Authentic Hospitality. Endless Blue. <br className="hidden md:block" />
                Your private stone sanctuary in the Aegean.
              </p>
            </Reveal>
          </div>
          {/* Κουμπιά: Το Rooms τώρα κάνει scroll στη σελίδα (με το #rooms) */}
          <div className="flex justify-center pt-8">
            <Reveal width="100%" delay={0.6}>
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <a href="#rooms" className="px-10 py-4 bg-white text-stone-900 rounded-full hover:bg-olive-700 hover:text-white transition duration-300 shadow-2xl font-sans text-xs font-bold tracking-[0.15em] uppercase hover:-translate-y-1">
                  View Rooms
                </a>
                <a href="/experience" className="px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition duration-300 backdrop-blur-sm bg-white/10 font-sans text-xs font-bold tracking-[0.15em] uppercase">
                  The Experience
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
      <section className="bg-stone-50 relative z-20">
        <About />
      </section>

      

      <section className="bg-white py-10 relative z-20">
        <Rooms />
      </section>

      <section className="bg-stone-50 relative z-20">
        <Amenities />
      </section>

      <Testimonials />
      
      <section className="relative z-20">
        <InstaFeed />
      </section>

      
    </main>
  );
}