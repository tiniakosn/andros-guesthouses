"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const experiences = [
  {
    id: 1,
    category: "Παραλίες",
    title: "Το απέραντο γαλάζιο",
    description: "Από τα διάσημα Άχλα και της Γριάς το Πήδημα, μέχρι τους κρυφούς κολπίσκους που γνωρίζουν μόνο οι ντόπιοι. Η ακτογραμμή της Άνδρου κρύβει θησαυρούς για κάθε γούστο.",
    image: "/hero.jpg", // Θα βάλεις φώτο παραλίας
  },
  {
    id: 2,
    category: "Πολιτισμός",
    title: "Μουσείο Σύγχρονης Τέχνης",
    description: "Η Άνδρος είναι το νησί της τέχνης. Επισκεφθείτε το παγκοσμίου φήμης Μουσείο Γουλανδρή στη Χώρα, το Ναυτικό Μουσείο και το Αρχαιολογικό Μουσείο, όλα σε απόσταση αναπνοής.",
    image: "/building.jpg", // Θα βάλεις φώτο μουσείου/τέχνης
  },
  {
    id: 3,
    category: "Φύση & Πεζοπορία",
    title: "Andros Routes",
    description: "Με πάνω από 100χλμ σηματοδοτημένων μονοπατιών, η Άνδρος είναι ο παράδεισος του πεζοπόρου. Ανακαλύψτε καταρράκτες, νερόμυλους και τοξωτά γεφύρια μέσα από αρχαία μονοπάτια.",
    image: "/hero.jpg", // Θα βάλεις φώτο φύσης
  },
  {
    id: 4,
    category: "Γαστρονομία",
    title: "Γεύσεις του Αιγαίου",
    description: "Δοκιμάστε την περίφημη φρουτάλια, τα αμυγδαλωτά και τα γλυκά του κουταλιού. Σας προτείνουμε τα καλύτερα ταβερνάκια και εστιατόρια της Χώρας.",
    image: "/building.jpg", // Θα βάλεις φώτο φαγητού
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* --- HERO HEADER --- */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="Andros Island"
          fill
          className="object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.3em] uppercase border-b border-white/50 pb-2">
              Discover Andros
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-display mt-6 leading-none">
              Ζήστε την <br /> Εμπειρία
            </h1>
          </Reveal>
        </div>
      </div>

      {/* --- EDITORIAL CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-32">
        {experiences.map((item, index) => (
          <div key={item.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <Reveal width="100%">
                <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 space-y-6">
              <Reveal delay={0.2}>
                <span className="text-olive-600 font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-olive-600"></span>
                  {item.category}
                </span>
              </Reveal>
              
              <Reveal delay={0.3}>
                <h2 className="text-4xl md:text-6xl font-display text-stone-900 leading-tight">
                  {item.title}
                </h2>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-stone-500 font-sans font-light text-lg leading-relaxed max-w-md">
                  {item.description}
                </p>
              </Reveal>
            </div>

          </div>
        ))}
      </div>

      
    </main>
  );
}