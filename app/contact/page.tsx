"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* --- LEFT SIDE: INFO --- */}
          <div className="space-y-12 mt-10">
            <div>
              <Reveal>
                <h1 className="text-5xl md:text-7xl font-display text-stone-900 leading-tight">
                  Επικοινωνία <br /> & Κρατήσεις
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-stone-500 font-sans font-light text-lg max-w-md">
                  Είμαστε εδώ για να σχεδιάσουμε την τέλεια διαμονή για εσάς. 
                  Συμπληρώστε τη φόρμα ή καλέστε μας απευθείας.
                </p>
              </Reveal>
            </div>

            <div className="space-y-8">
              <Reveal delay={0.3}>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-olive-600 mb-2">Διευθυνση</h3>
                  <p className="text-2xl font-serif text-stone-800">Χώρα Άνδρου, Κυκλάδες</p>
                  <p className="text-stone-500 font-light">84500, Ελλάδα</p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-olive-600 mb-2">Τηλεφωνο</h3>
                  <a href="tel:+302282000000" className="text-2xl font-serif text-stone-800 hover:text-olive-600 transition-colors">
                    +30 22820 00000
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-olive-600 mb-2">Email</h3>
                  <a href="mailto:info@andros.gr" className="text-2xl font-serif text-stone-800 hover:text-olive-600 transition-colors">
                    info@androsguesthouses.gr
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <Reveal width="100%" delay={0.2}>
              <form className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Ονομα</label>
                    <input type="text" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-olive-600 transition-colors bg-transparent text-stone-900 font-serif text-xl" placeholder="Το όνομά σας" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Email</label>
                    <input type="email" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-olive-600 transition-colors bg-transparent text-stone-900 font-serif text-xl" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Check In</label>
                    <input type="date" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-olive-600 transition-colors bg-transparent text-stone-900 font-sans" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Check Out</label>
                    <input type="date" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-olive-600 transition-colors bg-transparent text-stone-900 font-sans" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Μηνυμα / Επιθυμιες</label>
                  <textarea rows={4} className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-olive-600 transition-colors bg-transparent text-stone-900 font-serif text-xl resize-none" placeholder="Πείτε μας πώς μπορούμε να βοηθήσουμε..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-stone-900 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-olive-600 transition-all duration-300 mt-4">
                  Αποστολη Αιτηματος
                </button>

              </form>
            </Reveal>
          </div>

        </div>
      </div>

      
    </main>
  );
}