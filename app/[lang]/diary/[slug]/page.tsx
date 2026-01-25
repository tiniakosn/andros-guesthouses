"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";

const DIARY_CONTENT = {
  el: {
    "chora-and-wind": {
      tag: "KNOW-HOW",
      title: "Η Χώρα & ο Άνεμος: Οδηγός Επιβίωσης",
      subtitle: "Πού να κρυφτείτε από τα μελτέμια και τι να δείτε στην αρχοντική πρωτεύουσα.",
      image: "/images/chora-guide-v2.jpg",
      content: `Στη Χώρα της Άνδρου, ο αέρας δεν είναι εχθρός, είναι κομμάτι της ταυτότητάς μας. Όταν ο βοριάς επιμένει, εμείς οι Χωραΐτες δίνουμε ραντεβού στο Νειμποριό —ακριβώς μπροστά στα πόδια μας— ή στα Πίσω Γυαλιά. Αν έχετε όρεξη για μια μικρή βόλτα, οι Αποθήκες και η Χρυσή Άμμος είναι οι ιδανικές λύσεις για να βρείτε γαλήνια νερά.

      Μέσα στην πόλη, η εμπειρία είναι κινηματογραφική. Ξεκινήστε από τον Αφανή Ναύτη, περιπλανηθείτε στα στενά της αγοράς και κάντε μια στάση στα παγκόσμιας κλάσης μουσεία μας: το Μουσείο Σύγχρονης Τέχνης και το Αρχαιολογικό.

      Insider Tips:
      • Απόγευμα στη Χώρα: Κατεβείτε στον Αφανή την ώρα που πέφτει ο ήλιος. Είναι η στιγμή που η αρχοντιά της Άνδρου λάμπει περισσότερο.
      • Μοναστήρια: Ανηφορίστε προς την Αγία Μαρίνα ή τη Μονή Παναχράντου για την απόλυτη ηρεμία και θέα.`
    },
    "local-flavors": {
      tag: "GASTRONOMY",
      title: "Γεύση Άνδρου: Από το Νειμποριό στην Αγορά",
      subtitle: "Οι δικές μας στάσεις για αυθεντική φρουτάλια, θαλασσινά και γλυκά.",
      image: "/images/food-guide.jpg",
      content: `Όταν μας ρωτάνε πού να φάνε στην Άνδρο, ξεκινάμε από τα στέκια που ξέρουμε και εμπιστευόμαστε χρόνια.

      Στον πεζόδρομο στο Νειμποριό, ο Μαδούρης είναι κλασική αξία για φαγητό δίπλα στο κύμα, ενώ ο Νόνας είναι η στάση σας για φρέσκα θαλασσινά. Ανεβαίνοντας στην Αγορά (τον κεντρικό πεζόδρομο), ο Πλάτανος και η Νοσταλγία είναι ιδανικά για ποικιλίες και ουζάκι κάτω από τη σκιά. Για κάτι πιο προσεγμένο, η Σκαλάκια και η Ενδοχώρα προσφέρουν εξαιρετικά πιάτα.

      Μην φύγετε χωρίς να δοκιμάσετε την παραδοσιακή μας Φρουτάλια και τα ζαχαροπλαστεία στην Αγορά για τα περίφημα αμυγδαλωτά και τις παραδοσιακές τους πάστες.

      Insider Tip: Αν βγείτε έξω από τη Χώρα, ο Κόσσης στον Άνω Φελλό για κρέας και ο Σταμάτης στο Μπατσί είναι εγγυημένες επιλογές.`
    },
    "secret-beaches": {
      tag: "NATURE",
      title: "Παραλίες κοντά στη Χώρα & Μυστικά",
      subtitle: "Από το κινηματογραφικό Συνέτι μέχρι το απόκρημνο Λύδι.",
      image: "/images/beaches-guide.jpg",
      content: `Η Άνδρος έχει παραλίες για κάθε γούστο, αρκεί να ξέρεις πού να πας. Κοντά στη Χώρα, οι πιο άμεσες επιλογές είναι το Παραπόρτι, το Νειμποριό και τα Γυαλιά (Μπροστά και Πίσω).

      Αν ψάχνετε κάτι πραγματικά ιδιαίτερο, το Συνέτι είναι απαραίτητη στάση. Είναι η παραλία με τα βαθιά νερά και τις σπηλιές όπου γυρίστηκαν σκηνές από την ταινία "Μικρά Αγγλία". Η άγρια ομορφιά του τοπίου θα σας μαγέψει.

      Για τους λάτρεις της απομόνωσης, προτείνουμε το Λύδι. Θα χρειαστεί να κατεβείτε μια πλαγιά (έχει λίγη πεζοπορία), αλλά η ησυχία και τα κρυστάλλινα νερά θα σας αποζημιώσουν. Μην ξεχάσετε να πάρετε νερό μαζί σας!`
    }
  },
  en: {
    "chora-and-wind": {
      tag: "KNOW-HOW",
      title: "Chora & The Wind: A Survivor's Guide",
      subtitle: "Where to hide from the meltemi and what to see in the capital.",
      image: "/images/chora-guide-v2.jpg",
      content: "In Chora, wind is part of life. When a strong north wind blows, locals find shelter at Piso Gialia or Neimporio. For a short drive, Apothikes and Golden Sand are your best bets for calm waters. Visit the Invisible Sailor statue at sunset and our world-class museums."
    },
    "local-flavors": {
      tag: "GASTRONOMY",
      title: "Taste of Andros: From Neimporio to the Market",
      subtitle: "Local recommendations for authentic food and traditional sweets.",
      image: "/images/food-guide.jpg",
      content: "In Neimporio, try Madouris for seaside dining or Nonas for seafood. In the main Market (Agora), Platanos and Nostalgia are great for Ouzo, while Skalakia and Endochora offer refined local dishes. Don't forget to try Froutalia and our famous almond sweets!"
    },
    "secret-beaches": {
      tag: "NATURE",
      title: "Beaches Near Chora & Hidden Gems",
      subtitle: "From the cinematic Sineti to the secluded Lidi.",
      image: "/images/beaches-guide.jpg",
      content: "Near Chora, you can enjoy Paraporti, Neimporio, and Gialia. For something unique, visit Sineti—the beach featured in 'Little England' with its deep waters and caves. For ultimate peace, hike down to Lidi, a secluded paradise that's worth the effort."
    }
  }
};

export default function DiaryPage() {
  const params = useParams();
  const lang = (params?.lang as "el" | "en") || "el";
  const slug = params?.slug as string;

  // QA Fix: Περιμένουμε να υπάρχουν τα params πριν κάνουμε το check
  if (!slug || !lang) return null; 

  const article = DIARY_CONTENT[lang]?.[slug as keyof typeof DIARY_CONTENT['el']];

  // Αν όντως το slug δεν υπάρχει στα δεδομένα μας, τότε μόνο δείξε 404
  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-lime-400 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4 block">{article.tag}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">{article.title}</h1>
            <p className="text-lg md:text-xl text-white/90 font-light italic">{article.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 bg-white relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-stone prose-lg leading-relaxed text-stone-700 whitespace-pre-line font-light">
            {article.content}
          </div>

          <div className="mt-20 pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href={`/${lang}`} className="group flex items-center gap-3 text-stone-900 font-bold text-xs uppercase tracking-[0.2em] transition-all">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> 
              {lang === 'el' ? "Επιστροφη στην αρχικη" : "Back to Home"}
            </Link>
            
            <div className="flex gap-4">
               <div className="text-stone-300 text-[10px] tracking-widest uppercase font-bold italic">
                 Andros Guesthouses Insider Guide
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}