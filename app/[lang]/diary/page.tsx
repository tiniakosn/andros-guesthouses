"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

// SRE NOTE: Αφαιρέσαμε Navbar & Footer γιατί έρχονται από το Root Layout

const ALL_ARTICLES = [
  { 
    id: "04", 
    slug: "athens-to-andros-guide", 
    title: { el: "Πώς θα έρθετε στην Άνδρο", en: "Athens to Andros: Complete Guide" }, 
    tag: "TRAVEL GUIDE", 
    img: "/images/gavrio-andros-greece.webp" 
  },
  { 
    id: "00", 
    slug: "andros-routes-guide", 
    title: { el: "Μονοπάτια της Άνδρου", en: "Andros Routes: Hiking Guide" }, 
    tag: "ADVENTURE", 
    img: "/images/hiking-andros.webp" 
  },
  { 
    id: "01", 
    slug: "chora-and-wind", 
    title: { el: "Η Αρχοντική Χώρα & ο Άνεμος", en: "Noble Chora & The Wind" }, 
    tag: "KNOW-HOW", 
    img: "/images/chora-guide-v2.webp" 
  },
  { 
    id: "02", 
    slug: "secret-beaches", 
    title: { el: "Παραλίες & Μυστικά", en: "Secret Beaches & Gems" }, 
    tag: "NATURE", 
    img: "/images/beaches-guide.webp" 
  },
  { 
    id: "03", 
    slug: "local-flavors", 
    title: { el: "Γεύση Άνδρου: Πού να φάτε", en: "Taste of Andros: Where to eat" }, 
    tag: "GASTRONOMY", 
    img: "/images/food-guide.webp" 
  },
];

export default function DiaryIndexPage() {
  const params = useParams();
  const lang = (params?.lang as "el" | "en") || "el";

  return (
    <main className="min-h-screen bg-stone-50">
      {/* SRE Fix: Ο Navbar αφαιρέθηκε για να μην υπάρχει duplication */}
      
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <header className="mb-16 text-center pt-10">
          <span className="text-lime-700 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
            {lang === 'el' ? "ΟΔΗΓΟΣ ΑΝΔΡΟΥ" : "ANDROS INSIDER"}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight">Andros Diary</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_ARTICLES.map((article, i) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/${lang}/diary/${article.slug}`} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 bg-stone-200">
                  <Image 
                    src={article.img} 
                    alt={article.title[lang]} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    // SRE Fix: Priority μόνο στα πρώτα 2 άρθρα για βέλτιστο LCP
                    priority={i < 2} 
                    fetchPriority={i < 2 ? "high" : "low"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <span className="text-lime-700 font-bold text-[10px] tracking-widest uppercase mb-2 block">
                  {article.tag}
                </span>
                <h2 className="text-2xl font-serif text-stone-900 group-hover:text-lime-800 transition-colors leading-tight">
                  {article.title[lang]}
                </h2>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center border-t border-stone-200 pt-10">
          <Link href="/" className="text-stone-600 hover:text-stone-900 font-bold text-xs uppercase tracking-[0.2em] transition-colors">
            ← {lang === 'el' ? "ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΑΡΧΙΚΗ" : "BACK TO HOME"}
          </Link>
        </div>
      </section>

      {/* SRE Fix: Ο Footer αφαιρέθηκε για να μην υπάρχει duplication */}
    </main>
  );
}