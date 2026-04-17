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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const getCleanHref = (href: string) => {
    if (href.startsWith("/#")) return href;
    if (lang === "el") {
      if (href.includes("/diary") || href.includes("lang=el")) return href;
      const separator = href.includes("?") ? "&" : "?";
      return `${href}${separator}lang=el`;
    }
    return href;
  };

  const isDarkText = scrolled || pathname === "/contact" || isOpen;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ${
          scrolled || isOpen ? "bg-[#fafaf9] shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          
          {/* LOGO */}
          <Link href={getCleanHref("/")} className="relative z-[210] outline-none" style={{ WebkitTapHighlightColor: 'transparent' }} onClick={() => setIsOpen(false)}>
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
            <a href={getCleanHref("/contact")} className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-95 ${isDarkText ? "bg-stone-900 text-white" : "bg-white text-stone-900"}`}>
              {lang === "el" ? "Κρατηση" : "Book Now"}
            </a>
          </nav>

          {/* MOBILE TOGGLE - 3 LINES ANIMATION */}
          <div className="flex items-center gap-4 md:hidden z-[210]">
            {!isOpen && <LanguageSwitcher isDark={isDarkText} />}
            <button 
              className="w-10 h-10 flex flex-col justify-center items-center relative focus:outline-none" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Menu"
              style={{ WebkitTapHighlightColor: 'transparent' }} // ΔΙΟΡΘΩΣΗ ΓΙΑ ΤΟ ΓΚΡΙ
            >
              <div className="w-8 h-5 flex flex-col justify-between items-end">
                {/* Πάνω Γραμμή */}
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "w-8 rotate-45 translate-y-[9px]" : "w-8"
                } ${isDarkText ? "text-stone-900" : "text-white"}`}></span>
                
                {/* Μεσαία Γραμμή - 3 ΓΡΑΜΜΕΣ ΤΩΡΑ */}
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-6 opacity-100"
                } ${isDarkText ? "text-stone-900" : "text-white"}`}></span>
                
                {/* Κάτω Γραμμή */}
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "w-8 -rotate-45 -translate-y-[9px]" : "w-8"
                } ${isDarkText ? "text-stone-900" : "text-white"}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY - ΠΙΟ ΧΑΜΗΛΑ ΓΙΑ ΝΑ ΜΗΝ ΚΡΥΒΕΙ ΤΟ HOME */}
      <div className={`fixed inset-0 z-[190] bg-[#fafaf9] flex flex-col items-center justify-start pt-40 transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } h-[100dvh] w-screen shadow-2xl`}>
        <nav className="flex flex-col items-center space-y-10 w-full">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={getCleanHref(link.href)} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-display font-bold text-stone-900 active:scale-95 transition-transform"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {lang === "el" ? link.el : link.en}
            </Link>
          ))}
          
          <div className="flex flex-col items-center gap-12 pt-6">
            <Link 
              href={getCleanHref("/contact")} 
              onClick={() => setIsOpen(false)} 
              className="px-14 py-5 bg-stone-900 text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-2xl active:scale-90 transition-transform"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {lang === "el" ? "Κάντε Κράτηση" : "Book Now"}
            </Link>
            
            <LanguageSwitcher isDark={true} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-20" />}>
      <NavbarContent />
    </Suspense>
  );
}