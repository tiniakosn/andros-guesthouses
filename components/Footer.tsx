"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-stone-950 text-white pt-20 pb-10 overflow-hidden font-sans">
      
      {/* --- BACKGROUND TEXT "ANDROS" --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[15vw] md:text-[12vw] font-display font-bold text-olive-900/20 tracking-tighter leading-none whitespace-nowrap opacity-30 mix-blend-overlay">
          ANDROS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-16">
          
          {/* CTA COLUMN */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display leading-tight text-olive-300/90 drop-shadow-sm">
              Your next escape <br/> starts here.
            </h2>
            <p className="text-stone-400 text-sm max-w-md leading-relaxed">
              Book directly through our website for the best rates and exclusive benefits.
              Experience the authentic hospitality of Andros.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-olive-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-olive-700 transition-all duration-300 rounded-sm shadow-lg hover:shadow-olive-900/50 hover:-translate-y-1"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-olive-500 uppercase tracking-widest">Explore</h3>
            <ul className="space-y-4 font-display text-lg text-stone-200">
              <li><Link href="/" className="hover:text-olive-400 transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-olive-400 transition-colors">Rooms</Link></li>
              <li><Link href="/experience" className="hover:text-olive-400 transition-colors">Experience</Link></li>
              <li><Link href="/contact" className="hover:text-olive-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-olive-500 uppercase tracking-widest">Contact</h3>
            <div className="space-y-4 text-sm text-stone-400">
              <div>
                <p className="text-white mb-1 font-medium">Address</p>
                <p>Neimporio, Chora Andros</p>
                <p>84500, Cyclades, Greece</p>
              </div>
              <div>
                <p className="text-white mb-1 font-medium">Get in Touch</p>
                <a href="tel:+306972127884" className="block hover:text-olive-400 transition-colors">+30 693 693 4390</a>
                <a href="mailto:androsguesthouses@gmail.com" className="block hover:text-olive-400 transition-colors">androsguesthouses@gmail.com</a>
              </div>
            </div>
            
            {/* Social Icons - ΤΑ ΒΑΛΑΜΕ ΕΔΩ! */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com/people/Andros-Guesthouses/100090625075763/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-xs text-stone-400 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all"
                aria-label="Facebook"
              >
                FB
              </a>
              <a 
                href="https://www.instagram.com/andros.guesthouses/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-xs text-stone-400 hover:bg-[#C13584] hover:border-[#C13584] hover:text-white transition-all"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-stone-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Andros Guesthouses. All rights reserved.</p>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0 items-center">
             <span className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
               Handcrafted by <span className="text-stone-300 font-bold ml-1">Nikos Tiniakos</span>
             </span>
          </div>
        </div>

      </div>
    </footer>
  );
}