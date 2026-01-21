"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/#rooms" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Έλεγχος: Είμαστε στη σελίδα επικοινωνίας;
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      // Αλλάζουμε κατάσταση λίγο πιο άμεσα (στα 10px) για να μην "παίζει" το μενού
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Πότε τα γράμματα είναι ΜΑΥΡΑ (Dark);
  // 1. Όταν έχουμε κατέβει (scrolled)
  // 2. Όταν είμαστε στη σελίδα Contact
  // 3. Όταν ανοίγει το μενού στο κινητό
  const isDarkText = scrolled || isContactPage || isOpen;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-[#fafaf9]/95 backdrop-blur-md shadow-sm py-3" // Solid (σχεδόν) background στο scroll
          : "bg-transparent py-6" // Διάφανο στην κορυφή
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="relative z-[101] group block">
          <div className="flex flex-col leading-none">
            {/* Αφαιρέσαμε σκιές και effects για να μην κάνει "διπλό" είδωλο */}
            <span className={`font-display text-2xl tracking-tighter transition-colors duration-300 ${isDarkText ? "text-stone-900" : "text-white"}`}>
              ANDROS
            </span>
            <span className={`text-[10px] font-sans font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${isDarkText ? "text-stone-500" : "text-white/90"}`}>
              Guesthouses
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest px-2 py-2 transition-colors duration-300 relative group ${
                isDarkText ? "text-stone-800 hover:text-olive-700" : "text-white hover:text-white/80"
              }`}
            >
              {link.name}
              {/* Γραμμή hover */}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isDarkText ? "bg-olive-600" : "bg-white"}`}></span>
            </Link>
          ))}
          
          <Link
            href="/contact"
            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 ${
              isDarkText
                ? "bg-stone-900 text-white hover:bg-olive-700"
                : "bg-white text-stone-900 hover:bg-stone-100"
            }`}
          >
            Book Now
          </Link>
        </nav>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="md:hidden z-[101] relative w-12 h-12 flex flex-col justify-center items-end gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span 
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} 
            className={`w-8 h-[2px] block rounded-full transition-colors ${isDarkText ? "bg-stone-900" : "bg-white"}`}
          ></motion.span>
          <motion.span 
            animate={{ opacity: isOpen ? 0 : 1 }} 
            className={`w-6 h-[2px] block rounded-full transition-colors ${isDarkText ? "bg-stone-900" : "bg-white"}`}
          ></motion.span>
          <motion.span 
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0, width: isOpen ? "2rem" : "1.5rem" }} 
            className={`w-6 h-[2px] block rounded-full transition-colors ${isDarkText ? "bg-stone-900" : "bg-white"}`}
          ></motion.span>
        </button>

        {/* --- MOBILE MENU OVERLAY (ΑΝΤΙΚΑΤΑΣΤΑΣΗ ΜΟΝΟ ΑΥΤΟΥ ΤΟΥ ΤΜΗΜΑΤΟΣ) --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }} // Εφέ εμφάνισης από δεξιά
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              // Η ΔΙΟΡΘΩΣΗ: bg-[#fafaf9] (για να μην είναι διάφανο) και z-50 (για να είναι πάνω από όλα)
              className="fixed inset-0 z-50 bg-[#fafaf9] w-full h-screen flex flex-col items-center justify-center overflow-y-auto"
            >
              
              {/* Κουμπί Κλεισίματος (Χ) */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-stone-900 hover:text-red-600 transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              {/* Λίστα Επιλογών - ΕΜΦΑΝΙΖΕΙ ΟΛΕΣ ΤΙΣ ΚΑΤΗΓΟΡΙΕΣ */}
              <nav className="flex flex-col items-center space-y-8 mt-10">
                {/* Χρησιμοποιούμε τη λίστα που έχεις ήδη ορίσει πάνω (navLinks) */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-display font-bold text-stone-900 hover:text-olive-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Κουμπί Book Now */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-12"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-10 py-4 bg-stone-900 text-white font-bold uppercase tracking-widest text-sm shadow-xl rounded-full block active:scale-95 transition-transform"
                >
                  Book Now
                </Link>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}