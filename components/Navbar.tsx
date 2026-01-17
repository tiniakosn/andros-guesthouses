"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // <--- ΝΕΟ: Για να ξέρουμε πού είμαστε
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname(); // <--- Παίρνουμε τη διεύθυνση της σελίδας

  // Έλεγχος: Είμαστε στην Αρχική σελίδα;
  const isHomePage = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Λογική για το στυλ:
  // Αν ΔΕΝ είμαστε στην αρχική (π.χ. Δωμάτια), θέλουμε πάντα "σκούρο" στυλ (isScrolled true)
  // Αν είμαστε στην αρχική, ακούμε το scroll.
  const isDarkState = !isHomePage || isScrolled || isMobileMenuOpen;

  const menuItems = [
    { name: 'Αρχική', link: '/' },
    { name: 'Δωμάτια', link: '/rooms' },
    { name: 'Η Εμπειρία', link: '/experience' }, 
    { name: 'Επικοινωνία', link: '/contact' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isDarkState 
            ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-stone-200/50" // Λευκό φόντο (Δωμάτια ή Scroll)
            : "bg-transparent py-6" // Διάφανο (Μόνο στην κορυφή της Αρχικής)
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* --- LOGO --- */}
          <Link href="/" className="z-50 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex flex-col leading-none">
              <span className={`font-display text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${isDarkState ? "text-stone-900" : "text-white"}`}>
                ANDROS
              </span>
              <span className={`font-sans text-[8px] md:text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-300 ${isDarkState ? "text-olive-600" : "text-stone-200"}`}>
                Guesthouses
              </span>
            </div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.link} 
                className={`text-xs font-bold uppercase tracking-widest hover:text-olive-500 transition-colors duration-300 ${
                  isDarkState ? "text-stone-600" : "text-stone-200 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Desktop Book Now Button */}
            <Link 
              href="/contact" 
              className={`px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
               isDarkState 
                ? "bg-stone-900 text-white hover:bg-olive-600" 
                : "bg-white text-stone-900 hover:bg-stone-200"
            }`}>
              Book Now
            </Link>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 flex flex-col items-end gap-[5px]">
              {/* Οι γραμμές του Hamburger αλλάζουν χρώμα αυτόματα */}
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"} ${isDarkState ? "bg-stone-900" : "bg-white"}`}></span>
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"} ${isDarkState ? "bg-stone-900" : "bg-white"}`}></span>
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"} ${isDarkState ? "bg-stone-900" : "bg-white"}`}></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div className={`fixed inset-0 z-40 bg-[#f5f5f4] flex flex-col justify-center items-center transition-all duration-500 ease-[0.76, 0, 0.24, 1] ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col gap-8 text-center">
          
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              href={item.link} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="font-display text-5xl text-stone-900 hover:text-olive-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <Link 
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-10 py-4 bg-stone-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-olive-600 transition-colors"
          >
            Book Your Stay
          </Link>

        </div>
      </div>
    </>
  );
}