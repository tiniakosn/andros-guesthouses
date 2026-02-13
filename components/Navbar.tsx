"use client";

import Link from "next/link";
import Image from "next/image"; // Προσθήκη για σωστή διαχείριση εικόνας
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher"; 

const navLinks = [
  { en: "Home", el: "Αρχική", href: "/" },
  { en: "Rooms", el: "Δωμάτια", href: "/#rooms" },
  { en: "Experience", el: "Εμπειρία", href: "/experience" },
  { en: "Contact", el: "Επικοινωνία", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("en"); 
  const pathname = usePathname();

  const isContactPage = pathname === "/contact";

  useEffect(() => {
    // Συγχρονισμός αρχικής γλώσσας
    setLang(document.documentElement.lang || "en");

    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("langChange", handleLangChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isDarkText = scrolled || isContactPage || isOpen;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100]  ${
        scrolled 
          ? "bg-[#fafaf9]/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO - Optimized Version */}
        <Link href="/" className="relative z-[101] group block">
          
          <div className="relative w-16 h-16 md:w-16 md:h-16 flex items-center">
            <Image 
              src="/logo-navbar.png" // Το νέο αρχείο των 20.5 KB
              alt="Andros Guesthouses"
              fill
              className="object-contain object-left opacity-100" 
              priority
              fetchPriority="high"
              // Οι διαστάσεις που ενημερώνουν τον browser για το πλάτος εμφάνισης
              sizes="(max-width: 768px) 48px, 64px" 
            />
          </div>
        </Link>

        {/* DESKTOP MENU - Διορθωμένη εναλλαγή γλώσσας */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.en}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest px-2 py-2 transition-colors relative group ${
                isDarkText ? "text-stone-800 hover:text-olive-700" : "text-white hover:text-white/80"
              }`}
            >
              {lang === "el" ? link.el : link.en}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isDarkText ? "bg-olive-600" : "bg-white"}`}></span>
            </Link>
          ))}

          <div className={`ml-4 pl-4 border-l ${isDarkText ? "border-stone-200" : "border-white/20"}`}>
            <LanguageSwitcher isDark={isDarkText} />
          </div>
          
          <Link
            href="/contact"
            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg  ${
              isDarkText
                ? "bg-stone-900 text-white hover:bg-olive-700"
                : "bg-white text-stone-900 hover:bg-stone-100"
            }`}
          >
            {lang === "el" ? "Κρατηση" : "Book Now"}
          </Link>
        </nav>

        {/* MOBILE TOGGLE & LANGUAGE */}
        <div className="flex items-center gap-4 md:hidden z-[101]">
          {!isOpen && <LanguageSwitcher isDark={isDarkText} />}
          
          <button
            className="relative w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"} // Βελτιωμένο Accessibility
          >
            {/* Πάνω γραμμή */}
            <span 
              className={`h-[2px] block rounded-full transition-all duration-300 ease-in-out ${
                isDarkText ? "bg-stone-900" : "bg-white"
              } ${isOpen ? "w-8 rotate-45 translate-y-[8px]" : "w-8"}`}
            ></span>
  
            {/* Μεσαία γραμμή */}
            <span 
              className={`w-6 h-[2px] block rounded-full transition-all duration-300 ease-in-out ${
                isDarkText ? "bg-stone-900" : "bg-white"
              } ${isOpen ? "opacity-0" : "opacity-1"}`}
            ></span>
  
            {/* Κάτω γραμμή */}
            <span 
              className={`h-[2px] block rounded-full transition-all duration-300 ease-in-out ${
                isDarkText ? "bg-stone-900" : "bg-white"
              } ${isOpen ? "w-8 -rotate-45 -translate-y-[8px]" : "w-6"}`}
            ></span>
          </button>
        </div>

        {/* MOBILE MENU OVERLAY - 100 Score Version */}
        <div 
          className={`fixed inset-0 z-50 bg-[#fafaf9] w-full h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-bold text-stone-900 hover:text-olive-700 transition-colors"
              >
                {lang === "el" ? link.el : link.en}
              </Link>
            ))}
            
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-10 py-4 bg-stone-900 text-white font-bold uppercase tracking-widest text-sm shadow-xl rounded-full block active:scale-95 transition-transform mt-4"
            >
              {lang === "el" ? "Κρατηση" : "Book Now"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}