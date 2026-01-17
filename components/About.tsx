"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT SIDE: TEXT --- */}
          <div className="space-y-10">
            
            {/* Μικρός Τίτλος */}
            <Reveal>
              <span className="text-olive-600 font-sans text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-4">
                <span className="w-12 h-[1px] bg-olive-600"></span>
                Η Φιλοσοφια Μας
              </span>
            </Reveal>

            {/* Κύριος Τίτλος (Italiana) */}
            <Reveal delay={0.2}>
              {/* ΑΛΛΑΓΗ: Βάλαμε leading-normal ΚΑΙ pb-2 για να μην κόβονται τα γράμματα κάτω */}
              <h2 className="text-5xl md:text-7xl font-display text-stone-900 leading-normal pb-2">
                Δεν χτίζουμε τοίχους. <br />
                <span className="text-olive-700">Δημιουργούμε μνήμες.</span>
              </h2>
            </Reveal>

            {/* Κείμενο (Outfit Sans) */}
            <div className="space-y-6 text-stone-600 font-sans font-light text-lg leading-relaxed">
              <Reveal delay={0.4}>
                <p>
                  Στην καρδιά της Χώρας, τα Andros Guesthouses δεν είναι απλά καταλύματα. 
                  Είναι η αναβίωση της παλιάς ανδιώτικης αρχοντιάς, παντρεμένη με την 
                  σύγχρονη αισθητική του 'slow living'.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <p>
                  Κάθε πέτρα έχει τοποθετηθεί με σεβασμό. Κάθε παράθυρο κοιτάζει το Αιγαίο 
                  με τον τρόπο που το κοιτούσαν οι καπεταναίοι πριν από αιώνες. 
                  Εδώ, ο χρόνος σταματάει.
                </p>
              </Reveal>
            </div>

            {/* Υπογραφή */}
            <Reveal delay={0.6}>
              <div className="pt-6">
                <p className="font-serif italic text-2xl text-stone-800">
                  — Λεωνίδας Τηνιακός
                </p>
              </div>
            </Reveal>

          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          {/* Βάζουμε την εικόνα σε Reveal για να εμφανιστεί απαλά */}
          <Reveal width="100%" delay={0.3}>
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden group">
              <Image
                src="/hero.jpg" // Μπορείς να βάλεις άλλη φώτο εδώ, π.χ. /interior.jpg
                alt="Interior details"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              
              {/* Διακοσμητικό πλαίσιο (Border Outline) για Architectural look */}
              <div className="absolute inset-4 border border-white/30 z-10 pointer-events-none"></div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}