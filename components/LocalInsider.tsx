"use client";

import Image from "next/image";
import Link from "next/link";
// Αφαιρέσαμε το motion για εξοικονόμηση JS bundle size

const CONTENT = {
  el: {
    title: "Andros Diary",
    subtitle: "Local Insider",
    guides: [
      { id: "01", slug: "chora-and-wind", title: "Η Χώρα & ο Άνεμος", tag: "KNOW-HOW", img: "/images/chora-guide-v2.webp" }, // Αλλαγή σε .webp
      { id: "02", slug: "secret-beaches", title: "Παραλίες & Μυστικά", tag: "NATURE", img: "/images/beaches-guide.webp" }, // Αλλαγή σε .webp
      { id: "03", slug: "local-flavors", title: "Γεύση Άνδρου", tag: "GASTRONOMY", img: "/images/food-guide.webp" }, // Αλλαγή σε .webp
    ]
  },
  en: {
    title: "Andros Diary",
    subtitle: "Local Insider",
    guides: [
      { id: "01", slug: "chora-and-wind", title: "Chora & The Wind", tag: "KNOW-HOW", img: "/images/chora-guide-v2.webp" }, // Αλλαγή σε .webp
      { id: "02", slug: "secret-beaches", title: "Secret Beaches", tag: "NATURE", img: "/images/beaches-guide.webp" }, // Αλλαγή σε .webp
      { id: "03", slug: "local-flavors", title: "Local Flavors", tag: "GASTRONOMY", img: "/images/food-guide.webp" }, // Αλλαγή σε .webp
    ]
  }
};

interface LocalInsiderProps {
  lang: string;
}

export default function LocalInsider({ lang }: LocalInsiderProps) {
  const dict = (lang === "el" ? CONTENT.el : CONTENT.en) || CONTENT.el;

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-lime-800 font-bold tracking-widest text-[10px] mb-1 block uppercase">{dict.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-display text-stone-900">{dict.title}</h2>
          </div>
          <Link 
            href={`/${lang}/diary`} 
            className="text-stone-900 font-bold text-[10px] uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-lime-700 hover:border-lime-700 transition-all mb-1"
          >
            {lang === 'el' ? "ΔΕΙΤΕ ΠΕΡΙΣΣΟΤΕΡΑ" : "VIEW ALL"}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[550px]">
          
          {/* Main Card */}
          <div className="md:col-span-7 h-[400px] md:h-full">
            <Link href={`/${lang}/diary/${dict.guides[0].slug}`} className="block h-full w-full">
              <div className="relative h-full w-full group overflow-hidden rounded-lg bg-stone-200 shadow-sm border border-stone-100">
                <Image 
                  src={dict.guides[0].img} 
                  alt={dict.guides[0].title}
                  fill 
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6">
                  {/* ΔΙΟΡΘΩΣΗ CONTRAST: text-lime-300 */}
                  <span className="text-[10px] tracking-[0.2em] text-lime-300 font-bold mb-1 block">{dict.guides[0].tag}</span>
                  <h3 className="text-2xl md:text-3xl font-display text-white leading-tight">{dict.guides[0].title}</h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {dict.guides.slice(1).map((guide, i) => (
              <div key={i} className="flex-1 min-h-[220px]">
                <Link 
                  href={`/${lang}/diary/${guide.slug}`} 
                  aria-label={`Read our guide: ${guide.title}`}
                  className="block h-full w-full"
                >
                  <div className="relative h-full w-full group overflow-hidden rounded-lg bg-stone-200 shadow-sm border border-stone-100">
                    <Image 
                      src={guide.img} 
                      alt={guide.title}
                      fill 
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-90" />
                    <div className="absolute bottom-5 left-5">
                       <span className="text-[9px] font-bold tracking-widest text-lime-300 uppercase">{guide.tag}</span>
                       <h3 className="text-lg md:text-xl font-display text-white mt-1 leading-tight">{guide.title}</h3>
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