"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useParams } from "next/navigation";

// Εδώ ξαναβάζουμε τα δεδομένα (κανονικά θα τα παίρναμε από βάση δεδομένων)
// Πρόσεξε τα 'slug' να είναι ίδια με το προηγούμενο αρχείο
const roomsData = [
  {
    slug: "stone-suite",
    title: "The Stone Suite",
    category: "Suite",
    price: "120€",
    image: "/hero.jpg",
    description: "Η Stone Suite είναι η επιτομή της κυκλαδίτικης αρχιτεκτονικής. Πέτρινοι τοίχοι πάχους 60εκ. διατηρούν το χώρο δροσερό το καλοκαίρι, ενώ ο κρυφός φωτισμός δημιουργεί μια ατμόσφαιρα μυσταγωγίας. Διαθέτει ιδιωτική αυλή με πέργκολα.",
    amenities: ["King Size Κρεβάτι", "Rain Shower", "Nespresso Machine", "Smart TV 50\"", "Korres Toiletries", "Ιδιωτική Βεράντα"]
  },
  {
    slug: "aegean-villa",
    title: "Aegean Villa",
    category: "Villa",
    price: "180€",
    image: "/building.jpg",
    description: "Μια ευρύχωρη κατοικία ιδανική για οικογένειες ή παρέες. Με πανοραμική θέα στο Αιγαίο από κάθε παράθυρο, η Aegean Villa συνδυάζει την άνεση ενός μοντέρνου σπιτιού με την παραδοσιακή αισθητική.",
    amenities: ["2 Υπνοδωμάτια", "Πλήρως Εξοπλισμένη Κουζίνα", "Πλυντήριο Ρούχων", "Netflix & Disney+", "Χώρος Εργασίας", "Θέα Θάλασσα"]
  },
  {
    slug: "chora-residence",
    title: "Chora Residence",
    category: "Apartment",
    price: "150€",
    image: "/hero.jpg",
    description: "Ζήστε σαν ντόπιος στην καρδιά της Χώρας. Σε απόσταση αναπνοής από το Μουσείο Σύγχρονης Τέχνης και την αγορά, αυτό το διαμέρισμα προσφέρει άμεση πρόσβαση στη ζωή του νησιού.",
    amenities: ["Κέντρο Πόλης", "Design Έπιπλα", "High-Speed WiFi", "Soundproof Windows", "Coco-mat Στρώματα"]
  }
];

export default function RoomDetail() {
  const params = useParams();
  // Βρίσκουμε ποιο δωμάτιο ζήτησε ο χρήστης
  const room = roomsData.find((r) => r.slug === params.slug);

  if (!room) {
    return <div className="h-screen flex items-center justify-center">Το δωμάτιο δεν βρέθηκε.</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- HERO IMAGE --- */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full max-w-7xl mx-auto">
          <Reveal>
            <span className="bg-white text-stone-900 px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm mb-4 inline-block">
              {room.category}
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-display text-white leading-none pb-2">
              {room.title}
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* --- LEFT: DESCRIPTION & AMENITIES --- */}
        <div className="lg:col-span-8 space-y-16">
          <Reveal>
            <h2 className="text-3xl font-display text-stone-900 mb-6">Περιγραφή</h2>
            <p className="text-stone-600 font-serif text-xl leading-relaxed">
              {room.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl font-display text-stone-900 mb-8">Παροχές</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {room.amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-stone-100 pb-3">
                  <span className="w-1.5 h-1.5 bg-olive-500 rounded-full"></span>
                  <span className="text-stone-600 font-sans font-light">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* --- RIGHT: BOOKING CARD --- */}
        <div className="lg:col-span-4">
          <Reveal delay={0.4}>
            <div className="sticky top-32 bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-lg">
              <div className="flex justify-between items-end mb-6 border-b border-stone-200 pb-6">
                <div>
                  <span className="text-xs font-bold uppercase text-stone-400 block mb-1">Τιμη απο</span>
                  <span className="text-3xl font-display text-stone-900">{room.price}</span>
                </div>
                <span className="text-xs text-stone-500 mb-2">/ διανυκτέρευση</span>
              </div>

              <div className="space-y-4 mb-8">
                 <p className="text-xs text-stone-500 font-sans leading-relaxed">
                   * Οι τιμές ενδέχεται να αλλάξουν ανάλογα με την εποχή. Επικοινωνήστε μαζί μας για προσφορά.
                 </p>
              </div>

              <Link 
                href="/contact" 
                className="block w-full py-4 bg-olive-600 text-white text-center rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-olive-700 transition-colors shadow-lg hover:shadow-olive-600/30"
              >
                Καντε Κρατηση
              </Link>
            </div>
          </Reveal>
        </div>

      </div>

    </main>
  );
}