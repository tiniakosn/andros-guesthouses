"use client";

import Reveal from "./Reveal";

const amenities = [
  { id: 1, title: "Παραδοσιακό Πρωινό", description: "Με ντόπια προϊόντα Άνδρου" },
  { id: 2, title: "High-Speed Wi-Fi", description: "Starlink connection σε όλους τους χώρους" },
  { id: 3, title: "Καθημερινή Καθαριότητα", description: "Φροντίδα και σεβασμός στον χώρο σας" },
  { id: 4, title: "Concierge Service", description: "Κρατήσεις εστιατορίων & δραστηριοτήτων" },
  { id: 5, title: "Μεταφορά από/προς Λιμάνι", description: "Κατόπιν συνεννόησης" },
  { id: 6, title: "Πετσέτες Παραλίας", description: "Για τις βουτιές σας στο Αιγαίο" },
];

export default function Amenities() {
  return (
    <section className="py-32 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT SIDE: HEADER --- */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal>
              <span className="text-olive-600 font-sans text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-8 h-[1px] bg-olive-600"></span>
                Υπηρεσιες
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-display leading-snug">
                Όλα όσα χρειάζεστε <br /> για μια άνετη διαμονή.
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-stone-500 font-sans font-light leading-relaxed max-w-sm">
                Η πολυτέλεια κρύβεται στην απλότητα και την εξυπηρέτηση. 
                Φροντίζουμε για κάθε λεπτομέρεια, ώστε εσείς να απολαύσετε το νησί.
              </p>
            </Reveal>
          </div>

          {/* --- RIGHT SIDE: LIST --- */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-0">
              {amenities.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.1} width="100%">
                  <div className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-stone-200 hover:border-olive-400 transition-colors duration-500 cursor-default">
                    
                    {/* Title */}
                    <h3 className="text-2xl font-display text-stone-800 group-hover:text-olive-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 md:mt-0 text-sm font-sans font-light text-stone-500 group-hover:text-stone-800 transition-colors duration-300">
                      {item.description}
                    </p>
                    
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}