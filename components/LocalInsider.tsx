"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function LocalInsider() {
  const params = useParams();
  const lang = (params?.lang as "el" | "en") || "el";

  const dict = {
    el: {
      title: "Andros Diary",
      subtitle: "Local Insider",
      guides: [
        // Προσθέσαμε το slug: "chora-and-wind" κλπ
        { id: "01", slug: "chora-and-wind", title: "Η Αρχοντική Χώρα", tag: "CULTURE", img: "/images/chora-guide-v2.jpg" },
        { id: "02", slug: "secret-beaches", title: "Secret Beaches", tag: "NATURE", img: "/images/beaches-guide.jpg" },
        { id: "03", slug: "local-flavors", title: "Γεύση Άνδρου", tag: "GASTRONOMY", img: "/images/food-guide.jpg" },
      ]
    },
    en: {
      title: "Andros Diary",
      subtitle: "Local Insider",
      guides: [
        { id: "01", slug: "chora-and-wind", title: "Noble Chora", tag: "CULTURE", img: "/images/chora-guide-v2.jpg" },
        { id: "02", slug: "secret-beaches", title: "Secret Beaches", tag: "NATURE", img: "/images/beaches-guide.jpg" },
        { id: "03", slug: "local-flavors", title: "Local Flavors", tag: "GASTRONOMY", img: "/images/food-guide.jpg" },
      ]
    }
  }[lang];

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 gap-4">
          <div>
            <span className="text-lime-800 font-bold tracking-widest text-[10px] mb-1 block uppercase">{dict.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">{dict.title}</h2>
          </div>
          <p className="text-stone-500 italic text-sm max-w-xs md:text-right">
            {lang === 'el' ? "Η δική μας ματιά στο νησί που αγαπάμε." : "Our personal take on the island we love."}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[550px]">
          
          {/* Main Card (Μεγάλη) */}
          <div className="md:col-span-7">
            <Link href={`/${lang}/diary/${dict.guides[0].slug}`} className="block h-full w-full">
              <motion.div className="relative h-full w-full group overflow-hidden rounded-lg bg-stone-200 shadow-sm">
                <Image 
                  src={dict.guides[0].img} 
                  alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-[0.2em] text-lime-400 font-bold mb-1 block">{dict.guides[0].tag}</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white">{dict.guides[0].title}</h3>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Right Column (Μικρές) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {dict.guides.slice(1).map((guide, i) => (
              <div key={i} className="flex-1 min-h-[200px]">
                <Link href={`/${lang}/diary/${guide.slug}`} className="block h-full w-full">
                  <div className="relative h-full w-full group overflow-hidden rounded-lg bg-stone-200 shadow-sm">
                    <Image 
                      src={guide.img} 
                      alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
                    <div className="absolute bottom-5 left-5">
                       <span className="text-[9px] font-bold tracking-widest text-lime-400 uppercase">{guide.tag}</span>
                       <h3 className="text-lg md:text-xl font-serif text-white mt-1">{guide.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}