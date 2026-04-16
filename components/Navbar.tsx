"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher"; 

const navLinks = [
  { en: "Home", el: "Αρχική", href: "/" },
  { en: "Rooms", el: "Δωμάτια", href: "/#rooms" },
  { en: "Experience", el: "Εμπειρία", href: "/experience" },
  { en: "Contact", el: "Επικοινωνία", href: "/contact" },
];

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("en"); 
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Συγχρονισμός Γλώσσας & Events
  useEffect(() => {
    const urlLang = searchParams.get("lang");
    const pathLang = pathname.startsWith("/el") ? "el" : pathname.startsWith("/en") ? "en" : null;
    const activeLang = urlLang || pathLang || "en";
    
    setLang(activeLang);

    const handleLangChange = (e: any) => setLang(e.detail);
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("langChange", handleLangChange);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("langChange", handleLangChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchParams, pathname]);

  // 2. Mobile Menu Overflow
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // 3. Καθαρό Routing Logic
  const getCleanHref = (href: string) => {
  // Αν είμαστε στα Αγγλικά, δεν πειράζουμε τίποτα
    if (lang !== "el") return href;

  // Αν είμαστε στα Ελληνικά:
  
  // 1. Αν είναι ήδη path-based (Diary), το αφήνουμε
    if (href.includes("/diary")) return href;

  // 2. Ειδική διαχείριση για το Anchor (#rooms)
  // Μετατρέπει το /#rooms σε /?lang=el#rooms
    if (href.startsWith("/#")) {
      return `/?lang=el${href.substring(1)}`;
    }

  // 3. Για όλα τα άλλα (Home, Contact, Experience)
    if (href.includes("lang=el")) return href;
  
    const separator = href.includes("?") ? "&" : "?";
    return `${href}${separator}lang=el`;
  };

  const isDarkText = scrolled || pathname === "/contact" || isOpen;

  return (
    <header className={`fixed top-0 left-0 w-full z-[150] transition-all duration-300 ${scrolled ? "bg-[#fafaf9]/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href={getCleanHref("/")} className="relative z-[151] p-2 -ml-2 block">
          <div className="relative w-14 h-14 md:w-16 md:h-16">
            <Image src="/logo-navbar.png" alt="Andros Guesthouses" fill className="object-contain" priority sizes="64px" />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.en}
              href={getCleanHref(link.href)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors py-2 ${isDarkText ? "text-stone-800 hover:text-olive-700" : "text-white hover:text-white/80"}`}
            >
              {lang === "el" ? link.el : link.en}
            </Link>
          ))}
          <LanguageSwitcher isDark={isDarkText} />
          <a 
            href={getCleanHref("/contact")} 
            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-95 ${isDarkText ? "bg-stone-900 text-white" : "bg-white text-stone-900"}`}
          >
            {lang === "el" ? "Κρατηση" : "Book Now"}
          </a>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-2 md:hidden z-[151]">
          {!isOpen && <LanguageSwitcher isDark={isDarkText} />}
          <button 
            className="w-12 h-12 flex flex-col justify-center items-center bg-black/5 rounded-full touch-manipulation" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Menu"
          >
            <div className="flex flex-col items-end gap-1.5 w-8 pointer-events-none">
              <span className={`h-[2px] block rounded-full transition-all duration-300 ${isDarkText ? "bg-stone-900" : "bg-white"} ${isOpen ? "w-8 rotate-45 translate-y-[8px]" : "w-8"}`}></span>
              <span className={`w-6 h-[2px] block rounded-full transition-all duration-300 ${isDarkText ? "bg-stone-900" : "bg-white"} ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`h-[2px] block rounded-full transition-all duration-300 ${isDarkText ? "bg-stone-900" : "bg-white"} ${isOpen ? "w-8 -rotate-45 -translate-y-[8px]" : "w-6"}`}></span>
            </div>
          </button>
        </div>

        {/* MOBILE OVERLAY */}
        <div className={`fixed inset-0 z-[140] bg-[#fafaf9] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <nav className="flex flex-col items-center space-y-10">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={getCleanHref(link.href)} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-bold text-stone-900 active:text-olive-700 p-4 text-center"
              >
                {lang === "el" ? link.el : link.en}
              </a>
            ))}
            <a 
              href={getCleanHref("/contact")} 
              onClick={() => setIsOpen(false)} 
              className="px-12 py-5 bg-stone-900 text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-2xl"
            >
              {lang === "el" ? "Κάντε Κράτηση" : "Book Now"}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-20" />}>
      <NavbarContent />
    </Suspense>
  );
}