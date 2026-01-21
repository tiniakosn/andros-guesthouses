"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="py-24 md:py-32 overflow-hidden relative bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* --- LEFT: IMAGE & BADGE --- */}
          <div className="relative order-2 lg:order-1">
            <Reveal width="100%">
              <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer">
                <Image
                  src="/hero3.jpg" // Βεβαιώσου ότι η εικόνα υπάρχει
                  alt="Leonidas and family"
                  fill
                  className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>
            </Reveal>
            
            {/* Floating Badge - Review Score */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 z-10">
              <Reveal delay={0.4}>
                <div className="bg-white p-6 md:p-8 shadow-xl flex flex-col items-center justify-center gap-1 rounded-full aspect-square border-4 border-stone-100 hover:scale-105 transition-transform duration-300">
                  <span className="font-display text-5xl md:text-6xl text-olive-600 leading-none font-bold">9.5</span>
                  <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-center text-stone-400">
                    Booking.com <br/> Reviews
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* --- RIGHT: TEXT (STORY) --- */}
          <div className="space-y-8 md:pl-10 order-1 lg:order-2">
            <Reveal>
               <span className="text-olive-600 font-sans text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3">
                <span className="w-10 h-[2px] bg-olive-600"></span>
                Meet the Hosts
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-display text-stone-900 leading-[1.1] pb-2">
                More than just <br/> a place to stay.
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6 text-stone-600 font-sans text-lg leading-relaxed font-light">
                <p>
                  I am <strong className="text-stone-900 font-bold">Leonidas</strong>, the proud owner of this family gem in the heart of Chora. 
                  Along with <strong className="text-stone-900 font-bold">Eva</strong> and <strong className="text-stone-900 font-bold">Nikos</strong>, 
                  our passion stems from a deep love for sharing the authentic beauty of Andros.
                </p>
                
                {/* Creative Block: Philoxenia Definition */}
                <div className="pl-6 border-l-2 border-olive-300 italic text-stone-500 my-6">
                  "For us, <span className="text-olive-700 font-medium">Philoxenia</span> is not just a word. 
                  It is the ancient Greek art of making a stranger feel like family."
                </div>

                <p>
                  When I’m not ensuring your stay is perfect, you’ll likely find me exploring the island’s stunning natural trails 
                  or walking our dog, <strong>Max</strong>.
                </p>
                <p>
                  We look forward to welcoming you to our guesthouses and helping you create unforgettable memories in the Aegean!
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-8 flex items-center gap-6">
                 {/* Υπογραφή */}
                 <div>
                    <p className="font-handwriting text-3xl text-stone-900">Leonidas & Family</p>
                    <span className="text-[10px] font-sans font-bold text-stone-400 tracking-widest uppercase mt-1 block">Your Local Hosts</span>
                 </div>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}