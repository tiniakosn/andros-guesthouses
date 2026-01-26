"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function InstaFeed() {
  // Χρησιμοποιούμε 4 φωτογραφίες για τέλεια συμμετρία
  const images = [
    "/image1.jpg",   // Lifestyle / Relax
    "/image3.jpg",  // Food
    "/image2.jpg",      // Nature
    "/image5.jpg",     // Culture/Tradition
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
         <span className="text-xs font-bold text-white uppercase tracking-widest block mb-2">
            Follow the Vibe
         </span>
         <Link 
          href="https://www.instagram.com/andros.guesthouses/" 
          target="_blank" 
          aria-label="Visit our Instagram profile @andros.guesthouses" // ΠΡΟΣΘΕΣΕ ΑΥΤΟ
          className="inline-flex items-center gap-2 text-3xl font-display text-stone-900 hover:text-olive-700 transition-colors"
        >
          <FaInstagram /> @andros.guesthouses
        </Link>
      </div>

      {/* Grid: 2 στήλες στο κινητό, 4 στήλες στο PC -> Τέλεια σειρά */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 px-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square w-full group overflow-hidden cursor-pointer rounded-sm md:rounded-lg">
             <Image 
               src={src} 
               alt={`Instagram Photo ${index + 1}`} 
               fill 
               className="object-cover transition-transform duration-700 group-hover:scale-110"
             />
             
             {/* Overlay */}
            <a 
              href="https://www.instagram.com/andros.guesthouses/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View photo on Instagram" // ΠΡΟΣΘΕΣΕ ΑΥΤΟ
              className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white"
            >
              <FaInstagram className="w-8 h-8 drop-shadow-lg" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}