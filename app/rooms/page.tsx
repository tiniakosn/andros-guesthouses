"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link
import Reveal from "@/components/Reveal";

// Προσθέσαμε το 'slug' σε κάθε δωμάτιο (είναι το ID για το Link)
const allRooms = [
  {
    id: 1,
    slug: "stone-suite", // <--- ΝΕΟ
    title: "The Stone Suite",
    category: "Suite",
    guests: "2 Ενήλικες",
    size: "35m²",
    price: "120€",
    image: "/hero.jpg",
    description: "Η απόλυτη ρομαντική απόδραση. Πέτρινοι τοίχοι, κρυφός φωτισμός και ιδιωτική αυλή."
  },
  {
    id: 2,
    slug: "aegean-villa", // <--- ΝΕΟ
    title: "Aegean Villa",
    category: "Villa",
    guests: "4 Ενήλικες",
    size: "85m²",
    price: "180€",
    image: "/building.jpg",
    description: "Ιδανικό για οικογένειες. Δύο υπνοδωμάτια, πλήρης κουζίνα και πανοραμική θέα στη θάλασσα."
  },
  {
    id: 3,
    slug: "chora-residence", // <--- ΝΕΟ
    title: "Chora Residence",
    category: "Apartment",
    guests: "3 Ενήλικες",
    size: "50m²",
    price: "150€",
    image: "/hero.jpg",
    description: "Ζήστε τον παλμό της Χώρας. Βήματα από τα μουσεία και την αγορά, με μοντέρνα αισθητική."
  }
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-20">
      
      {/* --- HEADER --- */}
      <div className="px-6 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-7xl font-display text-stone-900 mb-6 leading-normal pb-2">
              Η Συλλογή μας
            </h1>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p className="text-stone-500 font-sans font-light text-lg max-w-2xl mx-auto leading-relaxed">
              Από ρομαντικές σουίτες μέχρι ευρύχωρες κατοικίες. <br className="hidden md:block"/>
              Επιλέξτε τον χώρο που ταιριάζει στη δική σας ιστορία.
            </p>
          </Reveal>
        </div>
      </div>

      {/* --- ROOMS LIST --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-24">
          {allRooms.map((room, index) => (
            <div key={room.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Section (Τώρα είναι Link) */}
              <div className="w-full md:w-1/2">
                <Reveal width="100%">
                  <Link href={`/rooms/${room.slug}`}>
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                      <Image
                        src={room.image}
                        alt={room.title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-stone-900">
                        {room.category}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </div>

              {/* Info Section */}
              <div className="w-full md:w-1/2 space-y-6">
                <Reveal delay={0.2}>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-olive-600">
                    <span>{room.guests}</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                    <span>{room.size}</span>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <Link href={`/rooms/${room.slug}`}>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-normal pb-2 hover:text-olive-600 transition-colors cursor-pointer">
                      {room.title}
                    </h2>
                  </Link>
                </Reveal>

                <Reveal delay={0.4}>
                  <p className="text-stone-500 font-sans font-light leading-relaxed text-lg">
                    {room.description}
                  </p>
                </Reveal>

                <Reveal delay={0.5}>
                  <div className="flex items-center gap-8 pt-4 border-t border-stone-200 mt-8">
                    <div>
                      <span className="block text-xs text-stone-400 font-bold uppercase tracking-widest mb-1">Τιμη απο</span>
                      <span className="text-2xl font-display text-stone-900">{room.price}</span>
                      <span className="text-xs text-stone-500 font-light"> / βράδυ</span>
                    </div>
                    
                    {/* ΚΟΥΜΠΙ: Τώρα οδηγεί στη σελίδα του δωματίου */}
                    <Link 
                      href={`/rooms/${room.slug}`}
                      className="px-8 py-4 bg-stone-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-olive-600 transition-colors ml-auto"
                    >
                      Λεπτομερειες
                    </Link>
                  </div>
                </Reveal>
              </div>

            </div>
          ))}
        </div>
      </div>

    </main>
  );
}