"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const rooms = [
  {
    id: 1,
    title: "The Stone Suite",
    description: "Μια ωδή στην πέτρα και το φως. Ιδανικό για ζευγάρια.",
    image: "/hero.jpg", 
    price: "Από 120€",
  },
  {
    id: 2,
    title: "Aegean Villa",
    description: "Πανοραμική θέα στο Αιγαίο με ιδιωτική βεράντα.",
    image: "/building.jpg", 
    price: "Από 180€",
  },
  {
    id: 3,
    title: "Chora Residence",
    description: "Στην καρδιά της πόλης, βήματα από τα μουσεία.",
    image: "/hero.jpg", 
    price: "Από 150€",
  }
];

export default function Rooms() {
  return (
    <section className="py-24 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER SECTION (Πιο διακριτικό) --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-olive-600 font-sans text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-8 h-[1px] bg-olive-600"></span> {/* Μικρή γραμμή για στυλ */}
                Διαμονη
              </span>
            </Reveal>
            
            {/* ΑΛΛΑΓΗ: Μικρότερο μέγεθος (text-4xl/5xl αντί για 7xl) για κομψότητα */}
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-display mt-3 leading-tight text-stone-900">
                Η Συλλογή μας
              </h2>
            </Reveal>
          </div>
          
          <Reveal delay={0.3}>
            <Link href="/rooms" className="hidden md:flex group items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-olive-600 transition-colors border border-stone-200 px-6 py-3 rounded-full hover:border-olive-600">
              Ολα τα δωματια
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>

        {/* --- ROOMS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {rooms.map((room, index) => (
            <div key={room.id} className="group cursor-pointer flex flex-col h-full">
              
              {/* Image Container */}
              <Reveal delay={0.2 + (index * 0.1)} width="100%"> 
                {/* ΑΛΛΑΓΗ: rounded-2xl για μοντέρνο look, όχι τετράγωνο */}
                <div className="relative h-[420px] w-full overflow-hidden mb-6 bg-stone-100 rounded-2xl shadow-sm">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  
                  {/* Price Tag: Έγινε οβάλ (rounded-full) και πιο minimal */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-stone-900 rounded-full shadow-lg">
                    {room.price}
                  </div>
                </div>
              </Reveal>

              {/* Text Info */}
              <div className="space-y-3 px-2"> {/* Λίγο padding για να μην είναι στην άκρη */}
                <Reveal delay={0.3 + (index * 0.1)}>
                  {/* ΑΛΛΑΓΗ: Επιστροφή στην Italiana (Display) αλλά πιο μεγάλη για να διαβάζεται */}
                  <h3 className="text-3xl font-display text-stone-900 group-hover:text-olive-600 transition-colors leading-none">
                    {room.title}
                  </h3>
                </Reveal>
                
                <Reveal delay={0.4 + (index * 0.1)}>
                  <p className="text-stone-500 font-sans font-light text-sm leading-relaxed max-w-xs">
                    {room.description}
                  </p>
                </Reveal>
              </div>

            </div>
          ))}
        </div>
        
        {/* Mobile Button (εμφανίζεται μόνο σε κινητά κάτω κάτω) */}
        <div className="mt-10 md:hidden flex justify-center">
            <Link href="/rooms" className="text-xs font-bold uppercase tracking-widest border-b border-stone-900 pb-1">
              Δειτε ολα τα δωματια
            </Link>
        </div>

      </div>
    </section>
  );
}